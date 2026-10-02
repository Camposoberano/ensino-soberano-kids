/**
 * Gerador de Sudoku Infantil (Kids Sudoku)
 * Ensino Soberano Kids - Raciocínio Lógico Dedutivo
 * Suporta 4x4 (blocos 2x2), 6x6 (blocos 2x3) e 9x9 (blocos 3x3 clássico até o 9)
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
      const temp = solved[0]; solved[0] = solved[1]; solved[1] = temp;
    }
    if (Math.random() > 0.5) {
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
    const toRemove = difficulty === "facil" ? 14 : (difficulty === "medio" ? 20 : 24);

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

  /**
   * Gera um Sudoku 9x9 clássico com números de 1 a 9 e blocos 3x3
   * @param {string} difficulty - 'facil' (34 removidos), 'medio' (44 removidos), 'dificil' (52 removidos)
   */
  function generate9x9(difficulty) {
    // Matriz canônica matematicamente válida 9x9 (shift por linha)
    let b = [];
    for (let r = 0; r < 9; r++) {
      const row = [];
      const s = (r % 3) * 3 + Math.floor(r / 3);
      for (let c = 0; c < 9; c++) {
        row.push(((c + s) % 9) + 1);
      }
      b.push(row);
    }

    // 1. Permutação aleatória dos dígitos 1..9
    const digitMap = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
    b = b.map(row => row.map(v => digitMap[v - 1]));

    // 2. Permutação de linhas dentro de cada banda de 3 linhas (0-2, 3-5, 6-8)
    for (let band = 0; band < 3; band++) {
      const rowIndices = [0, 1, 2].sort(() => Math.random() - 0.5).map(i => band * 3 + i);
      const tempRows = [b[rowIndices[0]], b[rowIndices[1]], b[rowIndices[2]]];
      b[band * 3] = tempRows[0];
      b[band * 3 + 1] = tempRows[1];
      b[band * 3 + 2] = tempRows[2];
    }

    // 3. Permutação de colunas dentro de cada pilha de 3 colunas (0-2, 3-5, 6-8)
    for (let stack = 0; stack < 3; stack++) {
      const colIndices = [0, 1, 2].sort(() => Math.random() - 0.5).map(i => stack * 3 + i);
      for (let r = 0; r < 9; r++) {
        const tempCols = [b[r][colIndices[0]], b[r][colIndices[1]], b[r][colIndices[2]]];
        b[r][stack * 3] = tempCols[0];
        b[r][stack * 3 + 1] = tempCols[1];
        b[r][stack * 3 + 2] = tempCols[2];
      }
    }

    // 4. Permutação de bandas inteiras (3 blocos horizontais)
    const bandOrder = [0, 1, 2].sort(() => Math.random() - 0.5);
    const newBandGrid = [];
    for (let bo of bandOrder) {
      newBandGrid.push(b[bo * 3], b[bo * 3 + 1], b[bo * 3 + 2]);
    }
    b = newBandGrid;

    // 5. Transposição aleatória (inverter linhas por colunas)
    if (Math.random() > 0.5) {
      const transposed = [];
      for (let c = 0; c < 9; c++) {
        transposed.push(b.map(row => row[c]));
      }
      b = transposed;
    }

    const solved = b;
    const symbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // Remoção de células baseado na dificuldade
    let toRemove = 36; // facil (restam 45 números para guiar o aluno)
    if (difficulty === "medio") toRemove = 46; // medio (restam 35 números)
    if (difficulty === "dificil" || difficulty === "avancado") toRemove = 54; // dificil (restam 27 números)

    const puzzle = solved.map(row => [...row]);
    let removed = 0;
    const positions = [];
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) positions.push({ r, c });
    }
    positions.sort(() => Math.random() - 0.5);

    for (const pos of positions) {
      if (removed >= toRemove) break;
      puzzle[pos.r][pos.c] = 0;
      removed++;
    }

    return {
      size: 9,
      blockSizeR: 3,
      blockSizeC: 3,
      mode: "numbers",
      symbols: symbols,
      puzzle: puzzle.map(row => row.map(v => v === 0 ? "" : String(symbols[v - 1]))),
      solution: solved.map(row => row.map(v => String(symbols[v - 1])))
    };
  }

  function generate(options) {
    const opts = options || {};
    const size = parseInt(opts.size) || 4;
    const mode = opts.mode || "emoji";
    const difficulty = opts.difficulty || "facil";

    if (size === 9) {
      return generate9x9(difficulty);
    }
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
