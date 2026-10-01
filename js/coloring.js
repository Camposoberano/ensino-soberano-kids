/**
 * Folhas para Colorir Anime (Coloring Pages)
 * Ensino Soberano Kids - Traço limpo em preto e branco pronto para pintura
 */
window.ColoringGenerator = (function () {

  const COLORING_PAGES = {
    hikari: {
      titulo: "Hikari e o Livro dos Sonhos",
      svg: `<svg viewBox="0 0 400 450" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="380" height="430" rx="16" fill="#fff" stroke="#1e293b" stroke-width="3" stroke-dasharray="6 3"/>
        <!-- Sol e Nuvens -->
        <circle cx="80" cy="80" r="30" fill="none" stroke="#1e293b" stroke-width="3"/>
        <path d="M50 80 L35 80 M110 80 L125 80 M80 50 L80 35 M80 110 L80 125 M58 58 L48 48 M102 102 L112 112 M102 58 L112 48 M58 102 L48 112" stroke="#1e293b" stroke-width="3"/>
        <path d="M280 80 Q300 60 320 80 Q340 70 350 90 Q340 110 290 110 Q270 100 280 80 Z" fill="none" stroke="#1e293b" stroke-width="3"/>
        <!-- Rosto Hikari -->
        <circle cx="200" cy="220" r="80" fill="none" stroke="#1e293b" stroke-width="3"/>
        <!-- Olhos Grandes Anime Lineart -->
        <ellipse cx="170" cy="210" rx="16" ry="22" fill="none" stroke="#1e293b" stroke-width="3"/>
        <circle cx="165" cy="202" r="6" fill="#1e293b"/>
        <ellipse cx="230" cy="210" rx="16" ry="22" fill="none" stroke="#1e293b" stroke-width="3"/>
        <circle cx="225" cy="202" r="6" fill="#1e293b"/>
        <!-- Sorriso -->
        <path d="M190 240 Q200 252 210 240" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
        <!-- Laço de Cabelo -->
        <path d="M160 130 C120 90 100 130 140 150 Z" fill="none" stroke="#1e293b" stroke-width="3"/>
        <path d="M240 130 C280 90 300 130 260 150 Z" fill="none" stroke="#1e293b" stroke-width="3"/>
        <circle cx="200" cy="140" r="14" fill="none" stroke="#1e293b" stroke-width="3"/>
        <!-- Livro Escolar -->
        <polygon points="140,320 200,340 260,320 260,370 200,390 140,370" fill="none" stroke="#1e293b" stroke-width="3"/>
        <line x1="200" y1="340" x2="200" y2="390" stroke="#1e293b" stroke-width="3"/>
        <!-- Estrelas para colorir -->
        <polygon points="80,260 86,275 102,275 89,285 94,300 80,290 66,300 71,285 58,275 74,275" fill="none" stroke="#1e293b" stroke-width="2.5"/>
        <polygon points="320,240 326,255 342,255 329,265 334,280 320,270 306,280 311,265 298,255 314,255" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      </svg>`
    }
  };

  function generate(charKey) {
    return COLORING_PAGES[charKey] || COLORING_PAGES.hikari;
  }

  return {
    generate: generate,
    COLORING_PAGES: COLORING_PAGES
  };
})();
