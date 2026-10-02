/**
 * QRCodeGenerator - Gerador de QR Code Vetorial SVG Puro e 100% Offline
 * Ensino Soberano Kids (Anime Edition)
 * Suporta versões dinâmicas (1 a 6) com codificação Byte e correção de erro Reed-Solomon (Nível M/L).
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QRCodeGenerator = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  // Tabelas de Galois Field GF(256) com primitiva 0x11D
  const GF256_EXP = new Uint8Array(512);
  const GF256_LOG = new Uint8Array(256);

  (function initGF256() {
    let x = 1;
    for (let i = 0; i < 255; i++) {
      GF256_EXP[i] = x;
      GF256_EXP[i + 255] = x;
      GF256_LOG[x] = i;
      x <<= 1;
      if (x & 256) x ^= 0x11D;
    }
  })();

  function gfMul(x, y) {
    if (x === 0 || y === 0) return 0;
    return GF256_EXP[GF256_LOG[x] + GF256_LOG[y]];
  }

  // Gera o polinômio gerador de Reed-Solomon para n codewords de erro
  function rsGenPoly(n) {
    let poly = [1];
    for (let i = 0; i < n; i++) {
      const next = new Array(poly.length + 1).fill(0);
      const rootVal = GF256_EXP[i];
      for (let j = 0; j < poly.length; j++) {
        next[j] ^= gfMul(poly[j], rootVal);
        next[j + 1] ^= poly[j];
      }
      poly = next;
    }
    return poly;
  }

  // Calcula os bytes de redundância de Reed-Solomon
  function rsEncode(data, ecCount) {
    const gen = rsGenPoly(ecCount);
    const remainder = new Array(ecCount).fill(0);

    for (let i = 0; i < data.length; i++) {
      const factor = data[i] ^ remainder[0];
      for (let j = 0; j < ecCount - 1; j++) {
        remainder[j] = remainder[j + 1] ^ gfMul(gen[j + 1], factor);
      }
      remainder[ecCount - 1] = gfMul(gen[ecCount], factor);
    }
    return remainder;
  }

  // Capacidades por versão (Nível M: balanceado para leitura rápida em câmeras de celular)
  const VERSIONS = [
    null,
    { ver: 1, size: 21, dataBytes: 16, ecBytes: 10, align: [] },
    { ver: 2, size: 25, dataBytes: 28, ecBytes: 16, align: [6, 18] },
    { ver: 3, size: 29, dataBytes: 44, ecBytes: 26, align: [6, 22] },
    { ver: 4, size: 33, dataBytes: 64, ecBytes: 36, align: [6, 26] },
    { ver: 5, size: 37, dataBytes: 86, ecBytes: 48, align: [6, 30] },
    { ver: 6, size: 41, dataBytes: 108, ecBytes: 64, align: [6, 34] }
  ];

  function getVersionForLength(len) {
    for (let v = 1; v <= 6; v++) {
      const cfg = VERSIONS[v];
      // Byte mode overhead: 4 bits mode + 8 bits length = 1.5 bytes ~ 2 bytes
      if (len + 2 <= cfg.dataBytes) {
        return cfg;
      }
    }
    return VERSIONS[6];
  }

  function encodeData(text, vCfg) {
    // Converte string para UTF-8 bytes
    const utf8 = [];
    for (let i = 0; i < text.length; i++) {
      let code = text.charCodeAt(i);
      if (code < 128) {
        utf8.push(code);
      } else if (code < 2048) {
        utf8.push((code >> 6) | 192);
        utf8.push((code & 63) | 128);
      } else {
        utf8.push((code >> 12) | 224);
        utf8.push(((code >> 6) & 63) | 128);
        utf8.push((code & 63) | 128);
      }
    }

    const maxLen = vCfg.dataBytes - 2;
    if (utf8.length > maxLen) {
      utf8.length = maxLen; // trunca com segurança se exceder
    }

    const bitBuffer = [];
    function pushBits(val, len) {
      for (let i = len - 1; i >= 0; i--) {
        bitBuffer.push((val >> i) & 1);
      }
    }

    // Byte Mode (0100)
    pushBits(0b0100, 4);
    // Comprimento (8 bits para ver 1-9)
    pushBits(utf8.length, 8);
    // Dados
    for (let b of utf8) {
      pushBits(b, 8);
    }
    // Terminador (até 4 zeros)
    const totalDataBits = vCfg.dataBytes * 8;
    const termLen = Math.min(4, totalDataBits - bitBuffer.length);
    pushBits(0, termLen);

    // Padding até múltiplo de 8
    while (bitBuffer.length % 8 !== 0) {
      bitBuffer.push(0);
    }

    // Converte para bytes
    const dataBytes = [];
    for (let i = 0; i < bitBuffer.length; i += 8) {
      let byte = 0;
      for (let b = 0; b < 8; b++) {
        byte = (byte << 1) | bitBuffer[i + b];
      }
      dataBytes.push(byte);
    }

    // Preenchimento alternado (0xEC, 0x11) até capacidade máxima
    let pad = 0xEC;
    while (dataBytes.length < vCfg.dataBytes) {
      dataBytes.push(pad);
      pad = pad === 0xEC ? 0x11 : 0xEC;
    }

    // Adiciona redundância Reed-Solomon
    const ecBytes = rsEncode(dataBytes, vCfg.ecBytes);
    return dataBytes.concat(ecBytes);
  }

  function createMatrix(vCfg) {
    const size = vCfg.size;
    const matrix = Array.from({ length: size }, () => new Array(size).fill(null));
    const reserved = Array.from({ length: size }, () => new Array(size).fill(false));

    function setModule(r, c, val, isRes = true) {
      if (r >= 0 && r < size && c >= 0 && c < size) {
        matrix[r][c] = val ? 1 : 0;
        if (isRes) reserved[r][c] = true;
      }
    }

    // 1. Finder Patterns (7x7) nos cantos: Top-Left, Top-Right, Bottom-Left
    function addFinder(top, left) {
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const row = top + r;
          const col = left + c;
          if (row < 0 || row >= size || col < 0 || col >= size) continue;
          if (r === -1 || r === 7 || c === -1 || c === 7) {
            setModule(row, col, 0); // Separador
          } else if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
            setModule(row, col, 1);
          } else {
            setModule(row, col, 0);
          }
        }
      }
    }

    addFinder(0, 0);
    addFinder(0, size - 7);
    addFinder(size - 7, 0);

    // 2. Alignment Patterns (para versão >= 2)
    if (vCfg.align.length > 0) {
      for (let ar of vCfg.align) {
        for (let ac of vCfg.align) {
          if (reserved[ar][ac]) continue; // Não sobrepõe finders
          for (let r = -2; r <= 2; r++) {
            for (let c = -2; c <= 2; c++) {
              const isBorder = Math.abs(r) === 2 || Math.abs(c) === 2;
              const isCenter = r === 0 && c === 0;
              setModule(ar + r, ac + c, isBorder || isCenter ? 1 : 0);
            }
          }
        }
      }
    }

    // 3. Timing Patterns (Linha 6 e Coluna 6)
    for (let i = 8; i < size - 8; i++) {
      if (!reserved[6][i]) setModule(6, i, i % 2 === 0 ? 1 : 0);
      if (!reserved[i][6]) setModule(i, 6, i % 2 === 0 ? 1 : 0);
    }

    // 4. Dark Module
    setModule(size - 8, 8, 1);

    // 5. Reserva espaço para Format Information (ao redor dos Finders)
    for (let i = 0; i < 9; i++) {
      if (!reserved[8][i]) reserved[8][i] = true;
      if (!reserved[i][8]) reserved[i][8] = true;
    }
    for (let i = 0; i < 8; i++) {
      reserved[8][size - 1 - i] = true;
      reserved[size - 1 - i][8] = true;
    }

    return { matrix, reserved, size };
  }

  // Preenche dados na matriz em zigue-zague
  function placeData(matrixObj, allBytes) {
    const { matrix, reserved, size } = matrixObj;
    let bitIdx = 0;
    const totalBits = allBytes.length * 8;

    let dir = -1; // sobe
    let col = size - 1;

    while (col > 0) {
      if (col === 6) col--; // Pula timing pattern vertical

      const rows = dir === -1 ?
        Array.from({ length: size }, (_, i) => size - 1 - i) :
        Array.from({ length: size }, (_, i) => i);

      for (let row of rows) {
        for (let c = 0; c < 2; c++) {
          const currentCol = col - c;
          if (!reserved[row][currentCol]) {
            let bit = 0;
            if (bitIdx < totalBits) {
              const byteVal = allBytes[Math.floor(bitIdx / 8)];
              bit = (byteVal >> (7 - (bitIdx % 8))) & 1;
              bitIdx++;
            }
            // Aplica Máscara Padrão 0: (row + col) % 2 === 0
            const mask = (row + currentCol) % 2 === 0;
            matrix[row][currentCol] = (bit ^ (mask ? 1 : 0));
          }
        }
      }
      dir = -dir;
      col -= 2;
    }
  }

  // Aplica bits de formato (Nível M = 00, Máscara 0 = 000 -> 00000 -> BCH format bits mascarados)
  // Format info para EC Level M + Mask 0: 0x5412 ^ 0x205c = 0x744e
  function applyFormatInfo(matrixObj) {
    const { matrix, size } = matrixObj;
    // Format bits padrão (Level M, Mask 0): [1,0,1,0,1,0,0,0,0,0,1,0,0,1,0]
    const fmt = [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0];

    // Top-left
    matrix[8][0] = fmt[0];
    matrix[8][1] = fmt[1];
    matrix[8][2] = fmt[2];
    matrix[8][3] = fmt[3];
    matrix[8][4] = fmt[4];
    matrix[8][5] = fmt[5];
    matrix[8][7] = fmt[6];
    matrix[8][8] = fmt[7];
    matrix[7][8] = fmt[8];
    matrix[5][8] = fmt[9];
    matrix[4][8] = fmt[10];
    matrix[3][8] = fmt[11];
    matrix[2][8] = fmt[12];
    matrix[1][8] = fmt[13];
    matrix[0][8] = fmt[14];

    // Split finders (Top-right e Bottom-left)
    for (let i = 0; i < 8; i++) {
      matrix[8][size - 1 - i] = fmt[i];
    }
    for (let i = 0; i < 7; i++) {
      matrix[size - 7 + i][8] = fmt[8 + i];
    }
  }

  // Gerador Principal de Matriz
  function generateMatrix(text) {
    const vCfg = getVersionForLength(text.length);
    const dataWithEC = encodeData(text, vCfg);
    const matrixObj = createMatrix(vCfg);
    placeData(matrixObj, dataWithEC);
    applyFormatInfo(matrixObj);
    return matrixObj;
  }

  return {
    generateMatrix,

    /**
     * Gera string SVG do QR Code
     * @param {string} text - Texto ou URL
     * @param {object} options - { size: 100, fgColor: '#0f172a', bgColor: '#ffffff', quietZone: 3 }
     */
    generateSVG: function (text, options = {}) {
      const size = options.size || 120;
      const fgColor = options.fgColor || '#0f172a';
      const bgColor = options.bgColor || '#ffffff';
      const quietZone = options.quietZone !== undefined ? options.quietZone : 2;

      const matrixObj = generateMatrix(text);
      const matrix = matrixObj.matrix;
      const dim = matrixObj.size;
      const totalDim = dim + quietZone * 2;

      let rects = '';
      for (let r = 0; r < dim; r++) {
        for (let c = 0; c < dim; c++) {
          if (matrix[r][c] === 1) {
            rects += `<rect x="${c + quietZone}" y="${r + quietZone}" width="1.02" height="1.02" fill="${fgColor}"/>`;
          }
        }
      }

      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalDim} ${totalDim}" width="${size}" height="${size}" shape-rendering="crispEdges">
        <rect width="${totalDim}" height="${totalDim}" fill="${bgColor}"/>
        ${rects}
      </svg>`;
    },

    /**
     * Renderiza o QR Code diretamente em um elemento DOM com evento de clique interativo
     */
    renderToElement: function (targetElement, text, options = {}, onClickCallback = null) {
      if (!targetElement) return;
      const svgHtml = this.generateSVG(text, options);
      targetElement.innerHTML = svgHtml;
      if (onClickCallback && typeof onClickCallback === 'function') {
        targetElement.style.cursor = 'pointer';
        targetElement.onclick = onClickCallback;
      }
    }
  };
});
