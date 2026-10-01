/**
 * Gerador de Atividades: Formas Geométricas (Shapes Generator)
 * Ensino Soberano Kids - Geometria espacial e propriedades das formas
 */
window.ShapesGenerator = (function () {

  const SHAPES = [
    {
      nome: "Círculo",
      lados: 0,
      vertices: 0,
      curiosidade: "Não possui pontas nem lados retos!",
      svg: `<svg viewBox="0 0 80 80" class="w-16 h-16"><circle cx="40" cy="40" r="32" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/></svg>`
    },
    {
      nome: "Triângulo",
      lados: 3,
      vertices: 3,
      curiosidade: "Tem 3 lados retos e 3 pontas (vértices).",
      svg: `<svg viewBox="0 0 80 80" class="w-16 h-16"><polygon points="40,12 72,68 8,68" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/></svg>`
    },
    {
      nome: "Quadrado",
      lados: 4,
      vertices: 4,
      curiosidade: "Tem 4 lados exatamente iguais e 4 cantos retos.",
      svg: `<svg viewBox="0 0 80 80" class="w-16 h-16"><rect x="12" y="12" width="56" height="56" rx="4" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/></svg>`
    },
    {
      nome: "Retângulo",
      lados: 4,
      vertices: 4,
      curiosidade: "Tem 2 lados compridos e 2 lados mais curtos.",
      svg: `<svg viewBox="0 0 80 80" class="w-16 h-16"><rect x="6" y="20" width="68" height="40" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/></svg>`
    },
    {
      nome: "Losango",
      lados: 4,
      vertices: 4,
      curiosidade: "Parece uma pipa voando no céu!",
      svg: `<svg viewBox="0 0 80 80" class="w-16 h-16"><polygon points="40,10 70,40 40,70 10,40" fill="#ddd6fe" stroke="#7c3aed" stroke-width="3"/></svg>`
    },
    {
      nome: "Estrela",
      lados: 10,
      vertices: 5,
      curiosidade: "Possui 5 pontas brilhantes!",
      svg: `<svg viewBox="0 0 80 80" class="w-16 h-16"><polygon points="40,8 49,27 70,30 55,44 58,65 40,55 22,65 25,44 10,30 31,27" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/></svg>`
    }
  ];

  function generate(mode) {
    const activityMode = mode || "properties"; // 'properties' (lados e vértices) ou 'naming' (escrever nomes)
    return {
      shapes: SHAPES,
      mode: activityMode
    };
  }

  return {
    generate: generate,
    SHAPES: SHAPES
  };
})();
