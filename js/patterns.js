/**
 * Gerador de Padrões e Sequências Lógicas (Patterns Generator)
 * Desenvolve o raciocínio indutivo, pensamento computacional e lógica infantil
 */
window.PatternsGenerator = (function () {

  const EMOJI_SETS = [
    { A: "⭐", B: "🌙", C: "☀️" },
    { A: "🍎", B: "🍌", C: "🍇" },
    { A: "🐱", B: "🐶", C: "🐰" },
    { A: "🔴", B: "🔵", C: "🟡" },
    { A: "🚀", B: "🛸", C: "🌍" },
    { A: "🌸", B: "🍀", C: "🍄" }
  ];

  function generatePatterns(count, type) {
    const total = count || 6;
    const patternType = type || "visual"; // 'visual' ou 'numeric'
    const problems = [];

    if (patternType === "visual") {
      const templates = [
        { seq: ["A", "B", "A", "B", "A", "?"], ans: "B" },
        { seq: ["A", "A", "B", "A", "A", "?"], ans: "B" },
        { seq: ["A", "B", "C", "A", "B", "?"], ans: "C" },
        { seq: ["A", "B", "B", "A", "B", "?"], ans: "B" },
        { seq: ["A", "B", "A", "C", "A", "?"], ans: "B" }
      ];

      for (let i = 0; i < total; i++) {
        const itemSet = EMOJI_SETS[i % EMOJI_SETS.length];
        const tpl = templates[i % templates.length];

        const displayItems = tpl.seq.map(symbol => {
          if (symbol === "?") return "?";
          return itemSet[symbol];
        });

        problems.push({
          id: i + 1,
          type: "visual",
          items: displayItems,
          answer: itemSet[tpl.ans]
        });
      }
    } else { // 'numeric'
      const rules = [
        { name: "+2", step: 2, start: 2 },
        { name: "+5", step: 5, start: 5 },
        { name: "+10", step: 10, start: 10 },
        { name: "+3", step: 3, start: 3 },
        { name: "-1", step: -1, start: 10 },
        { name: "-2", step: -2, start: 20 }
      ];

      for (let i = 0; i < total; i++) {
        const r = rules[i % rules.length];
        const seq = [];
        for (let j = 0; j < 5; j++) {
          seq.push(r.start + j * r.step);
        }
        const ans = r.start + 5 * r.step;
        seq.push("?");

        problems.push({
          id: i + 1,
          type: "numeric",
          items: seq,
          answer: ans
        });
      }
    }

    return problems;
  }

  return {
    generatePatterns: generatePatterns
  };
})();
