/**
 * Gerador de "Pinte por Matemática" (Color by Math)
 * Ensino Soberano Kids - Integração de Aritmética e Criatividade Artística
 */
window.ColorByMathGenerator = (function () {

  const TEMPLATES = [
    {
      id: "crown",
      nome: "Coroa Imperial Soberano",
      cols: 9,
      rows: 7,
      // 0: background (Branco/Céu), 1: Ouro/Amarelo, 2: Vermelho Carmesim, 3: Joia Azul, 4: Roxo Real
      grid: [
        [0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 3, 1, 1, 1, 3, 1, 0],
        [0, 1, 1, 1, 4, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0]
      ]
    },
    {
      id: "heart",
      nome: "Coração Sakura Brilhante",
      cols: 9,
      rows: 7,
      grid: [
        [0, 1, 1, 0, 0, 0, 1, 1, 0],
        [1, 2, 2, 1, 0, 1, 2, 2, 1],
        [1, 2, 3, 2, 1, 2, 2, 2, 1],
        [0, 1, 2, 2, 2, 2, 2, 1, 0],
        [0, 0, 1, 2, 2, 2, 1, 0, 0],
        [0, 0, 0, 1, 2, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0]
      ]
    },
    {
      id: "star",
      nome: "Estrela Ninja Dourada",
      cols: 9,
      rows: 7,
      grid: [
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 1, 0, 0, 0],
        [1, 1, 1, 1, 2, 1, 1, 1, 1],
        [0, 1, 2, 2, 2, 2, 2, 1, 0],
        [0, 0, 1, 2, 2, 2, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1]
      ]
    }
  ];

  const COLOR_PALETTES = {
    crown: [
      { id: 0, nome: "Céu / Fundo", corNome: "Branco / Cinza Claro", hex: "#f1f5f9", target: 4 },
      { id: 1, nome: "Ouro Soberano", corNome: "Amarelo Dourado", hex: "#fde047", target: 7 },
      { id: 2, nome: "Borda Real", corNome: "Vermelho Carmesim", hex: "#f87171", target: 10 },
      { id: 3, nome: "Joia Safira", corNome: "Azul Brilhante", hex: "#60a5fa", target: 12 },
      { id: 4, nome: "Pedra Imperial", corNome: "Roxo Ametista", hex: "#c084fc", target: 15 }
    ],
    heart: [
      { id: 0, nome: "Fundo", corNome: "Branco", hex: "#f8fafc", target: 5 },
      { id: 1, nome: "Contorno", corNome: "Rosa Cerejeira", hex: "#f472b6", target: 8 },
      { id: 2, nome: "Interior", corNome: "Vermelho Amor", hex: "#ef4444", target: 11 },
      { id: 3, nome: "Brilho", corNome: "Amarelo Sol", hex: "#fef08a", target: 14 }
    ],
    star: [
      { id: 0, nome: "Fundo", corNome: "Branco", hex: "#f8fafc", target: 6 },
      { id: 1, nome: "Contorno", corNome: "Laranja Ninja", hex: "#fb923c", target: 9 },
      { id: 2, nome: "Miolo", corNome: "Amarelo Ouro", hex: "#facc15", target: 13 }
    ]
  };

  /**
   * Gera uma operação aritmética que resulta exatamente em `target`
   */
  function makeEquation(target, operation) {
    if (operation === "subtraction") {
      const extra = Math.floor(Math.random() * 8) + 2;
      return `${target + extra} − ${extra}`;
    } else if (operation === "multiplication" && target % 2 === 0) {
      return `2 × ${target / 2}`;
    } else {
      // Adição padrão
      const a = Math.floor(Math.random() * (target - 1)) + 1;
      const b = target - a;
      return `${a} + ${b}`;
    }
  }

  function generate(options) {
    const opts = options || {};
    const templateId = opts.templateId || "crown";
    const operation = opts.operation || "addition";

    const tpl = TEMPLATES.find(t => t.id === templateId) || TEMPLATES[0];
    const palette = COLOR_PALETTES[tpl.id] || COLOR_PALETTES.crown;

    // Criar mapa de alvos
    const targetMap = {};
    palette.forEach(p => {
      targetMap[p.id] = p;
    });

    // Mapear cada célula com uma equação aleatória
    const gridCells = [];
    for (let r = 0; r < tpl.rows; r++) {
      const row = [];
      for (let c = 0; c < tpl.cols; c++) {
        const colorId = tpl.grid[r][c];
        const colorInfo = targetMap[colorId] || palette[0];
        row.push({
          row: r,
          col: c,
          colorId: colorId,
          hex: colorInfo.hex,
          corNome: colorInfo.corNome,
          target: colorInfo.target,
          equation: makeEquation(colorInfo.target, operation)
        });
      }
      gridCells.push(row);
    }

    return {
      template: tpl,
      palette: palette,
      operation: operation,
      grid: gridCells
    };
  }

  return {
    generate: generate,
    TEMPLATES: TEMPLATES
  };
})();
