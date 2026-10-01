/**
 * Gerador de Caça-Palavras (Word Search Generator)
 * Suporta orientação ortogonal, diagonal, modo gabarito e posicionamento seguro
 */
window.WordSearchGenerator = (function () {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const DIRECTIONS = {
    horizontal: [0, 1],
    horizontalBack: [0, -1],
    vertical: [1, 0],
    verticalUp: [-1, 0],
    diagonalDown: [1, 1],
    diagonalUp: [-1, 1],
    diagonalBackDown: [1, -1],
    diagonalBackUp: [-1, -1]
  };

  function normalizeWord(word) {
    return word
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^A-Z]/g, "");
  }

  function generate(options) {
    const rows = options.rows || 12;
    const cols = options.cols || 12;
    const wordsRaw = options.words || [];
    const allowDiagonal = options.allowDiagonal !== false;
    const allowBackwards = options.allowBackwards === true;
    const uppercase = options.uppercase !== false;

    // Selecionar direções permitidas
    let activeDirs = [DIRECTIONS.horizontal, DIRECTIONS.vertical];
    if (allowBackwards) {
      activeDirs.push(DIRECTIONS.horizontalBack, DIRECTIONS.verticalUp);
    }
    if (allowDiagonal) {
      activeDirs.push(DIRECTIONS.diagonalDown);
      if (allowBackwards) {
        activeDirs.push(DIRECTIONS.diagonalUp, DIRECTIONS.diagonalBackDown, DIRECTIONS.diagonalBackUp);
      }
    }

    // Filtrar e normalizar palavras únicas
    const wordList = Array.from(new Set(
      wordsRaw
        .map(w => normalizeWord(w))
        .filter(w => w.length > 1 && w.length <= Math.max(rows, cols))
    )).sort((a, b) => b.length - a.length); // Mais longas primeiro

    // Criar matriz vazia
    let grid = Array.from({ length: rows }, () => Array(cols).fill(""));
    let answerCells = Array.from({ length: rows }, () => Array(cols).fill(null));
    let placedWords = [];
    let unplacedWords = [];

    // Tentar encaixar cada palavra
    for (const word of wordList) {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 200;

      while (!placed && attempts < maxAttempts) {
        attempts++;
        const dir = activeDirs[Math.floor(Math.random() * activeDirs.length)];
        const [dr, dc] = dir;

        // Calcular limites de início
        const minR = dr < 0 ? word.length - 1 : 0;
        const maxR = dr > 0 ? rows - word.length : rows - 1;
        const minC = dc < 0 ? word.length - 1 : 0;
        const maxC = dc > 0 ? cols - word.length : cols - 1;

        if (maxR < minR || maxC < minC) continue;

        const startR = minR + Math.floor(Math.random() * (maxR - minR + 1));
        const startC = minC + Math.floor(Math.random() * (maxC - minC + 1));

        // Verificar se cabe sem colisão conflitante
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const r = startR + i * dr;
          const c = startC + i * dc;
          const currentCell = grid[r][c];
          if (currentCell !== "" && currentCell !== word[i]) {
            canPlace = false;
            break;
          }
        }

        if (canPlace) {
          const coords = [];
          for (let i = 0; i < word.length; i++) {
            const r = startR + i * dr;
            const c = startC + i * dc;
            grid[r][c] = word[i];
            answerCells[r][c] = word;
            coords.push({ r, c });
          }
          placedWords.push({ word, coords });
          placed = true;
        }
      }

      if (!placed) {
        unplacedWords.push(word);
      }
    }

    // Preencher lacunas com letras aleatórias
    const finalGrid = grid.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        const letter = cell !== "" ? cell : ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        return uppercase ? letter : letter.toLowerCase();
      })
    );

    return {
      grid: finalGrid,
      answerCells: answerCells,
      placedWords: placedWords,
      unplacedWords: unplacedWords,
      rows: rows,
      cols: cols
    };
  }

  return {
    generate: generate
  };
})();
