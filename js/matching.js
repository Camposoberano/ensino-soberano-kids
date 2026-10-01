/**
 * Gerador de Atividades de Ligar Colunas (Matching Lists Generator)
 */
window.MatchingGenerator = (function () {

  const PRESETS = {
    math: [
      { left: "2 + 3", right: "5" },
      { left: "4 + 4", right: "8" },
      { left: "10 − 3", right: "7" },
      { left: "3 × 3", right: "9" },
      { left: "12 ÷ 2", right: "6" },
      { left: "5 + 5", right: "10" }
    ],
    animals: [
      { left: "🐱 Gato", right: "Mia e bebe leite" },
      { left: "🐶 Cachorro", right: "Late e abana o rabo" },
      { left: "🦁 Leão", right: "Rei da selva que ruge" },
      { left: "🐸 Sapo", right: "Pula e vive na lagoa" },
      { left: "🐦 Pássaro", right: "Tem asas e voa no céu" },
      { left: "🐟 Peixe", right: "Nada no fundo do mar" }
    ],
    letters: [
      { left: "A", right: "a" },
      { left: "B", right: "b" },
      { left: "E", right: "e" },
      { left: "G", right: "g" },
      { left: "M", right: "m" },
      { left: "R", right: "r" }
    ],
    opposites: [
      { left: "Grande", right: "Pequeno" },
      { left: "Quente", right: "Frio" },
      { left: "Dia", right: "Noite" },
      { left: "Alto", right: "Baixo" },
      { left: "Aberto", right: "Fechado" },
      { left: "Feliz", right: "Triste" }
    ]
  };

  function generate(theme) {
    const list = [...(PRESETS[theme] || PRESETS.math)];
    // Embaralhar coluna da direita
    const rightShuffled = list.map((item, idx) => ({ ...item, originalIdx: idx }))
      .sort(() => Math.random() - 0.5);

    return {
      theme: theme,
      leftItems: list.map((item, idx) => ({ text: item.left, id: idx })),
      rightItems: rightShuffled.map((item, idx) => ({ text: item.right, matchId: item.originalIdx, id: idx }))
    };
  }

  return {
    generate: generate,
    PRESETS: PRESETS
  };
})();
