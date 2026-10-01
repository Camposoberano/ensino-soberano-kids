/**
 * Gerador de Atividades de Contagem Visual Infantil (Counting Generator)
 */
window.CountingGenerator = (function () {
  const ITEMS = [
    { icon: "⭐", nome: "Estrelas" },
    { icon: "🍎", nome: "Maçãs" },
    { icon: "🐱", nome: "Gatinhos" },
    { icon: "💖", nome: "Corações" },
    { icon: "✏️", nome: "Lápis" },
    { icon: "🚗", nome: "Carrinhos" },
    { icon: "🌸", nome: "Flores Sakura" },
    { icon: "🍰", nome: "Docinhos" },
    { icon: "🐠", nome: "Peixinhos" },
    { icon: "🚀", nome: "Foguetes" }
  ];

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generate(boxCount, maxCount) {
    const totalBoxes = boxCount || 6;
    const maxVal = maxCount || 10;
    const problems = [];

    // Embaralhar itens
    const shuffledItems = [...ITEMS].sort(() => Math.random() - 0.5);

    for (let i = 0; i < totalBoxes; i++) {
      const item = shuffledItems[i % shuffledItems.length];
      const count = randomInt(2, maxVal);
      problems.push({
        id: i + 1,
        icon: item.icon,
        name: item.nome,
        count: count
      });
    }

    return {
      problems: problems,
      maxCount: maxVal
    };
  }

  return {
    generate: generate
  };
})();
