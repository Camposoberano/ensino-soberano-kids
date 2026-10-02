/**
 * Gerador de Sudoku Infantil (Kids Sudoku)
 * Ensino Soberano Kids - Raciocínio Lógico Dedutivo
 */
window.SudokuGenerator = (function () {

  const EMOJI_SETS = [
    ["🌸", "⭐", "🍎", "⚡"],
    ["🐱", "🐶", "🦊", "🐻"],
    ["🚀", "👑", "💎", "🎯"],
    ["🎨", "📚", "✏️", "🧩"]
  ];

  /**
   * Gera um Sudoku 4x4 válido
   * @param {string} mode - 'emoji' ou 'numbers'
   * @param {string} difficulty - 'facil' (remove 4-5) ou 'medio' (remove 6-8)
   */
  function generate4x4(mode, difficulty) {
    // Grade base 4x4 válida
    const base = [
      [1, 2, 3, 4],
      [3, 4, 1, 2],
      [2, 1, 4, 3],
      [4, 3, 2, 1]
    ];

    // Embaralhar números (permutação)
    const map = [1, 2, 3, 4].sort(() => Math.random() - 0.5);
    const solved = base.map(row => row.map(val => map[val - 1]));

    // Permutação de linhas e colunas dentro dos blocos 2x2
    if (Math.random() > 0.5) {
      // trocar linha 0 e 1
      const temp = solved[0]; solved[0] = solved[1]; solved[1] = temp;
    }
    if (Math.random() > 0.5) {
      // trocar linha 2 e 3
      const temp = solved[2]; solved[2] = solved[3]; solved[3] = temp;
    }

    // Definir símbolos (números ou emojis)
    let symbols = ["1", "2", "3", "4"];
    if (mode === "emoji") {
      symbols = EMOJI_SETS[Math.floor(Math.random() * EMOJI_SETS.length)];
    }

    // Remover células para criar o enigma
    const toRemove = difficulty === "facil" ? 5 : 8;
    const puzzle = solved.map(row => [...row]);
    let removed = 0;
    const positions = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) positions.push({ r, c });
    }
    positions.sort(() => Math.random() - 0.5);

    for (const pos of positions) {
      if (removed >= toRemove) break;
      puzzle[pos.r][pos.c] = 0;
      removed++;
    }

    return {
      size: 4,
      blockSizeR: 2,
      blockSizeC: 2,
      mode: mode,
      symbols: symbols,
      puzzle: puzzle.map(row => row.map(v => v === 0 ? "" : symbols[v - 1])),
      solution: solved.map(row => row.map(v => symbols[v - 1]))
    };
  }

  /**
   * Gera um Sudoku 6x6 válido (blocos 2x3)
   */
  function generate6x6(difficulty) {
    const base = [
      [1, 2, 3, 4, 5, 6],
      [4, 5, 6, 1, 2, 3],
      [2, 3, 1, 5, 6, 4],
      [5, 6, 4, 2, 3, 1],
      [3, 1, 2, 6, 4, 5],
      [6, 4, 5, 3, 1, 2]
    ];

    const map = [1, 2, 3, 4, 5, 6].sort(() => Math.random() - 0.5);
    const solved = base.map(row => row.map(val => map[val - 1]));

    const symbols = ["1", "2", "3", "4", "5", "6"];
    const toRemove = difficulty === "facil" ? 14 : 20;

    const puzzle = solved.map(row => [...row]);
    let removed = 0;
    const positions = [];
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 6; c++) positions.push({ r, c });
    }
    positions.sort(() => Math.random() - 0.5);

    for (const pos of positions) {
      if (removed >= toRemove) break;
      puzzle[pos.r][pos.c] = 0;
      removed++;
    }

    return {
      size: 6,
      blockSizeR: 2,
      blockSizeC: 3,
      mode: "numbers",
      symbols: symbols,
      puzzle: puzzle.map(row => row.map(v => v === 0 ? "" : symbols[v - 1])),
      solution: solved.map(row => row.map(v => symbols[v - 1]))
    };
  }

  function generate(options) {
    const opts = options || {};
    const size = parseInt(opts.size) || 4;
    const mode = opts.mode || "emoji";
    const difficulty = opts.difficulty || "facil";

    if (size === 6) {
      return generate6x6(difficulty);
    }
    return generate4x4(mode, difficulty);
  }

  return {
    generate: generate,
    EMOJI_SETS: EMOJI_SETS
  };
})();
