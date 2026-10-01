/**
 * Gerador de Tabela Pitagórica / Tabela de Multiplicação (Multiplication Chart)
 */
window.MultiplicationChartGenerator = (function () {

  function generate(size, mode) {
    const s = size || 10;
    const m = mode || "complete"; // 'complete', 'blank', 'missing'

    const rows = [];
    for (let r = 1; r <= s; r++) {
      const cols = [];
      for (let c = 1; c <= s; c++) {
        const val = r * c;
        let isBlank = false;
        if (m === "blank") {
          isBlank = true;
        } else if (m === "missing") {
          // Esconder ~40% das células de forma aleatória para a criança completar
          isBlank = Math.random() < 0.45;
        }
        cols.push({
          row: r,
          col: c,
          val: val,
          isBlank: isBlank
        });
      }
      rows.push({ header: r, cells: cols });
    }

    return {
      size: s,
      mode: m,
      rows: rows
    };
  }

  return {
    generate: generate
  };
})();
