/**
 * Guia Passo a Passo de Origami & Dobraduras (Origami Generator)
 * Ensino Soberano Kids - Raciocínio espacial e coordenação motora fina
 */
window.OrigamiGenerator = (function () {

  const PROJECTS = {
    fox: {
      nome: "Raposinha Origami",
      nivel: "Fácil (Iniciante)",
      passos: [
        { num: 1, desc: "Dobre a folha quadrada ao meio na diagonal formando um triângulo grande.", icon: "📐" },
        { num: 2, desc: "Dobre o triângulo ao meio novamente para marcar o centro e desdobre.", icon: "✨" },
        { num: 3, desc: "Dobre as duas pontas superiores para baixo para criar as orelhinhas da raposa.", icon: "🦊" },
        { num: 4, desc: "Dobre a ponta do meio para cima para formar o focinho.", icon: "✏️" },
        { num: 5, desc: "Desenhe os olhinhos e o nariz com canetinha!", icon: "🎨" }
      ]
    },
    boat: {
      nome: "Barquinho dos Mares",
      nivel: "Médio",
      passos: [
        { num: 1, desc: "Dobre a folha retangular A4 ao meio de cima para baixo.", icon: "📄" },
        { num: 2, desc: "Dobre os cantos superiores para dentro até se encontrarem no centro.", icon: "🔺" },
        { num: 3, desc: "Dobre as bordas inferiores para cima, uma na frente e outra atrás.", icon: "⛵" },
        { num: 4, desc: "Abra por baixo e achate no formato de um losango.", icon: "💎" },
        { num: 5, desc: "Puxe as abas laterais para fora e seu barquinho navegará!", icon: "🌊" }
      ]
    }
  };

  function generate(projectKey) {
    return PROJECTS[projectKey] || PROJECTS.fox;
  }

  return {
    generate: generate,
    PROJECTS: PROJECTS
  };
})();
