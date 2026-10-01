/**
 * Gerador de Atividades: Partes do Corpo Humano & GK (Body Parts & General Knowledge)
 * Ensino Soberano Kids - Ciências, biologia infantil e 5 sentidos
 */
window.BodyPartsGenerator = (function () {

  const PARTS = [
    { nome: "Olhos", sentido: "Visão", funcao: "Permitem enxergar o mundo e as cores", icon: "👀" },
    { nome: "Ouvidos", sentido: "Audição", funcao: "Permitem ouvir músicas e sons", icon: "👂" },
    { nome: "Nariz", sentido: "Olfato", funcao: "Permite sentir o cheiro das flores e comidas", icon: "👃" },
    { nome: "Boca", sentido: "Paladar", funcao: "Permite sentir os sabores deliciosos e falar", icon: "👄" },
    { nome: "Mãos", sentido: "Tato", funcao: "Permitem tocar, segurar e sentir texturas", icon: "🖐️" },
    { nome: "Coração", sentido: "Órgão Vital", funcao: "Bombeia sangue com carinho para todo o corpo", icon: "❤️" }
  ];

  function generate(type) {
    const activityType = type || "senses"; // 'senses' ou 'anatomy'
    return {
      type: activityType,
      items: PARTS
    };
  }

  return {
    generate: generate,
    PARTS: PARTS
  };
})();
