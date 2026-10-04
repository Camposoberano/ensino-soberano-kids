/**
 * Gerador de Atividades: Aprenda a Desenhar, Cópia por Grade e Páginas de Colorir
 * Ensino Soberano Kids - Motor de Renderização Pedagógica A4
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(root);
  } else {
    root.StepByStepDrawing = factory(root);
  }
})(typeof self !== 'undefined' ? self : (typeof window !== 'undefined' ? window : this), function (root) {

  /**
   * Helper para montar SVG com camadas ativas e anteriores
   */
  function buildStepSvg(layers, currentStepIdx) {
    let svgContent = "";
    // Camadas anteriores (0 até currentStepIdx - 1): traço em grafite escuro #1e293b
    for (let i = 0; i < currentStepIdx; i++) {
      if (layers[i]) {
        svgContent += `<g stroke="#1e293b" fill="none">${layers[i]}</g>`;
      }
    }
    // Camada atual (novidade): traço destacado em roxo/azul #4f46e5 com espessura 2.5px
    if (layers[currentStepIdx]) {
      svgContent += `<g stroke="#4f46e5" fill="none" class="new-step-stroke">${layers[currentStepIdx]}</g>`;
    }

    return `<svg viewBox="0 0 200 200" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#ffffff" rx="8"/>
      ${svgContent}
    </svg>`;
  }

  /**
   * Helper para montar SVG completo (todas as camadas unificadas)
   */
  function buildCompleteSvg(layers, isColoring = false, bgElements = "") {
    let content = "";
    if (isColoring && bgElements) {
      content += bgElements;
    }
    for (let i = 0; i < layers.length; i++) {
      if (layers[i]) {
        content += `<g stroke="#1e293b" fill="#ffffff">${layers[i]}</g>`;
      }
    }

    return `<svg viewBox="0 0 200 200" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#ffffff" rx="8"/>
      ${content}
    </svg>`;
  }

  /**
   * Constrói a malha quadriculada SVG sobreposta com coordenadas (A-I / 1-9)
   */
  function buildGridOverlaySvg(size = 7) {
    const cellSize = 200 / size;
    const cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I"].slice(0, size);
    let gridLines = "";
    let labels = "";

    for (let i = 0; i <= size; i++) {
      const pos = i * cellSize;
      // Linhas verticais e horizontais
      const isMajor = i === 0 || i === size || (size >= 6 && i === Math.floor(size / 2));
      const strokeCol = isMajor ? "#94a3b8" : "#cbd5e1";
      const strokeW = isMajor ? "1.5" : "0.8";

      gridLines += `<line x1="${pos}" y1="0" x2="${pos}" y2="200" stroke="${strokeCol}" stroke-width="${strokeW}"/>`;
      gridLines += `<line x1="0" y1="${pos}" x2="200" y2="${pos}" stroke="${strokeCol}" stroke-width="${strokeW}"/>`;
    }

    // Rótulos alfanuméricos
    for (let c = 0; c < size; c++) {
      const cx = c * cellSize + cellSize / 2;
      labels += `<text x="${cx}" y="10" font-size="8" font-family="sans-serif" font-weight="bold" fill="#64748b" text-anchor="middle">${cols[c]}</text>`;
      labels += `<text x="7" y="${cx + 3}" font-size="8" font-family="sans-serif" font-weight="bold" fill="#64748b" text-anchor="middle">${c + 1}</text>`;
    }

    return `<g class="grid-overlay" pointer-events="none">
      ${gridLines}
      ${labels}
    </g>`;
  }

  /**
   * 1. MODO: PASSO A PASSO GUIADO (6 Quadros)
   */
  function generateStepByStep(item, options = {}) {
    const layers = item.layers || [];
    const stepsDesc = item.stepsDesc || [
      "1. Comece pelas formas básicas",
      "2. Adicione os contornos principais",
      "3. Desenhe os membros e estruturas",
      "4. Faça o rosto e detalhes",
      "5. Finalize o desenho completo!"
    ];

    const cardsHtml = [];

    // Passos 1 a 4 (Etapas em evolução)
    for (let step = 0; step < 4; step++) {
      const svg = buildStepSvg(layers, step);
      cardsHtml.push(`
        <div class="step-card bg-white border-2 border-slate-200 rounded-xl p-2 flex flex-col items-center justify-between shadow-xs">
          <div class="w-full flex items-center justify-between mb-0.5">
            <span class="text-[9.5px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded flex items-center gap-1 font-heading">
              <span>Etapa ${step + 1}</span>
            </span>
            <span class="text-[7.5px] font-bold text-slate-400">Traço Roxo = Novo</span>
          </div>
          <div class="w-full aspect-square max-w-[105px] flex items-center justify-center p-0.5">
            ${svg}
          </div>
          <p class="text-[8.5px] font-medium text-slate-600 text-center leading-tight mt-0.5 line-clamp-2">
            ${stepsDesc[step]}
          </p>
        </div>
      `);
    }

    // Passo 5: Desenho Final Modelo
    const fullSvg = buildCompleteSvg(layers);
    cardsHtml.push(`
      <div class="step-card bg-indigo-50/50 border-2 border-indigo-300 rounded-xl p-2 flex flex-col items-center justify-between shadow-xs">
        <div class="w-full flex items-center justify-between mb-0.5">
          <span class="text-[9.5px] font-extrabold text-white bg-indigo-600 px-1.5 py-0.5 rounded flex items-center gap-1 font-heading shadow-xs">
            <span>Etapa 5: Final</span>
          </span>
          <span class="text-[7.5px] font-extrabold text-indigo-700">Modelo Pronto!</span>
        </div>
        <div class="w-full aspect-square max-w-[105px] flex items-center justify-center p-0.5">
          ${fullSvg}
        </div>
        <p class="text-[8.5px] font-bold text-indigo-900 text-center leading-tight mt-0.5">
          ${stepsDesc[4]}
        </p>
      </div>
    `);

    // Quadro 6: Espaço Livre do Aluno para Desenho e Pintura
    cardsHtml.push(`
      <div class="step-card bg-amber-50/40 border-2 border-dashed border-amber-300 rounded-xl p-2 flex flex-col items-center justify-between relative">
        <div class="w-full flex items-center justify-between mb-0.5">
          <span class="text-[9.5px] font-extrabold text-amber-800 bg-amber-100 border border-amber-300 px-1.5 py-0.5 rounded flex items-center gap-1 font-heading">
            <i data-lucide="sparkles" class="w-2.5 h-2.5 text-amber-600 inline"></i> <span>Sua Vez!</span>
          </span>
          <span class="text-[7.5px] font-bold text-amber-600">Desenhe & Pinte</span>
        </div>
        <div class="w-full flex-1 flex flex-col items-center justify-center border border-dashed border-amber-200 rounded-lg bg-white/80 p-1 my-0.5 min-h-[90px]">
          <i data-lucide="pencil" class="w-6 h-6 text-amber-300 mb-0.5 opacity-75"></i>
          <span class="text-[8.5px] font-bold text-slate-400 text-center">Faça seu desenho aqui e pinte!</span>
        </div>
        <div class="w-full flex items-center justify-between text-[7.5px] font-semibold text-slate-400 pt-0.5">
          <span>Assinatura: ____________</span>
          <span>Nota: ⭐⭐⭐⭐⭐</span>
        </div>
      </div>
    `);

    // Paleta de cores recomendadas
    const colors = item.colors || ["#f59e0b", "#ef4444", "#10b981", "#3b82f6"];
    const colorBadges = colors.map(c => `
      <div class="flex items-center gap-1 bg-white border border-slate-200 px-1.5 py-0.5 rounded-full shadow-2xs">
        <span class="w-3 h-3 rounded-full border border-slate-300 shadow-inner" style="background-color: ${c}"></span>
        <span class="text-[8px] font-bold text-slate-600 uppercase font-mono">${c}</span>
      </div>
    `).join("");

    return `
      <div class="step-drawing-container flex flex-col gap-2 w-full">
        <!-- 6 Quadros Sequenciais em Grade Fixa 3 Colunas -->
        <div class="grid grid-cols-3 gap-2 w-full">
          ${cardsHtml.join("")}
        </div>

        <!-- Barra Inferior: Paleta Sugerida & Caligrafia Compacta -->
        <div class="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 flex flex-row items-center justify-between gap-2 w-full">
          <!-- Paleta de Cores -->
          <div class="flex items-center gap-1.5">
            <span class="text-[9px] font-extrabold uppercase tracking-wider text-slate-500 font-heading flex items-center gap-1">
              <i data-lucide="palette" class="w-3 h-3 text-pink-500"></i> Cores:
            </span>
            <div class="flex items-center gap-1 flex-wrap">
              ${colorBadges}
            </div>
          </div>

          <!-- Treino de Caligrafia da Palavra -->
          <div class="flex items-center gap-1.5 bg-white px-2.5 py-1 border border-indigo-100 rounded-lg">
            <span class="text-[9px] font-extrabold text-indigo-700 uppercase font-heading">
              Escreva o Nome:
            </span>
            <span class="font-mono text-xs font-black tracking-widest text-slate-700 border-b border-dotted border-slate-400 pb-0.5">
              ${item.word || item.name.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * 2. MODO: CÓPIA POR GRADE (Grid Copy Drawing)
   */
  function generateGridCopy(item, options = {}) {
    const gridSize = parseInt(options.gridSize) || 7;
    const showTracing = options.showTracing === true;
    const showSolution = options.showSolution === true;
    const layers = item.layers || [];

    // Modelo com a Grade
    const modelFullSvg = buildCompleteSvg(layers);
    const gridOverlay = buildGridOverlaySvg(gridSize);

    // Quadro do Aluno
    let studentContentSvg = "";
    if (showSolution) {
      // Gabarito completo
      studentContentSvg = modelFullSvg;
    } else if (showTracing) {
      // Traçado pontilhado de apoio
      let tracingLayers = "";
      for (let i = 0; i < layers.length; i++) {
        tracingLayers += `<g stroke="#cbd5e1" stroke-width="1.8" stroke-dasharray="3,3" fill="none">${layers[i]}</g>`;
      }
      studentContentSvg = `<svg viewBox="0 0 200 200" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#ffffff" rx="8"/>
        ${tracingLayers}
      </svg>`;
    } else {
      // Grade vazia
      studentContentSvg = `<svg viewBox="0 0 200 200" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#ffffff" rx="8"/>
      </svg>`;
    }

    const colors = item.colors || ["#f59e0b", "#ef4444", "#10b981", "#3b82f6"];
    const colorBadges = colors.map(c => `
      <div class="flex items-center gap-1 bg-white border border-slate-200 px-2 py-0.5 rounded-full shadow-2xs">
        <span class="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-inner" style="background-color: ${c}"></span>
        <span class="text-[9px] font-bold text-slate-600 uppercase font-mono">${c}</span>
      </div>
    `).join("");

    return `
      <div class="grid-drawing-container flex flex-col gap-2 w-full">
        <!-- 2 Quadros Lado a Lado em Grade Fixa -->
        <div class="grid grid-cols-2 gap-3 w-full">
          <!-- Quadro 1: Modelo Original com Coordenadas -->
          <div class="bg-white border-2 border-slate-200 rounded-2xl p-2.5 flex flex-col items-center shadow-xs">
            <div class="w-full flex items-center justify-between mb-1">
              <span class="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-lg flex items-center gap-1 font-heading">
                <i data-lucide="eye" class="w-3 h-3 text-indigo-600"></i> 1. Modelo (${gridSize}x${gridSize})
              </span>
              <span class="text-[8px] font-bold text-slate-400">Coordenadas A-${["A","B","C","D","E","F","G","H","I"][gridSize-1]}</span>
            </div>
            
            <div class="relative w-full aspect-square max-w-[210px] border-2 border-slate-300 rounded-xl overflow-hidden bg-white shadow-inner">
              <div class="w-full h-full">
                ${modelFullSvg}
              </div>
              <svg viewBox="0 0 200 200" class="absolute inset-0 w-full h-full pointer-events-none">
                ${gridOverlay}
              </svg>
            </div>
            <p class="text-[8.5px] font-medium text-slate-500 text-center mt-1">
              Transfira o traço de cada quadrante para a grade ao lado.
            </p>
          </div>

          <!-- Quadro 2: Área de Cópia do Aluno -->
          <div class="bg-white border-2 border-indigo-200 rounded-2xl p-2.5 flex flex-col items-center shadow-xs">
            <div class="w-full flex items-center justify-between mb-1">
              <span class="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-lg flex items-center gap-1 font-heading">
                <i data-lucide="pencil" class="w-3 h-3 text-emerald-600"></i> 2. Sua Grade de Cópia
              </span>
              <span class="text-[8px] font-extrabold text-pink-600 ${showTracing ? '' : 'hidden'}">Traço Guia</span>
            </div>

            <div class="relative w-full aspect-square max-w-[210px] border-2 border-indigo-400 rounded-xl overflow-hidden bg-white shadow-inner">
              <div class="w-full h-full">
                ${studentContentSvg}
              </div>
              <svg viewBox="0 0 200 200" class="absolute inset-0 w-full h-full pointer-events-none">
                ${gridOverlay}
              </svg>
            </div>
            <p class="text-[8.5px] font-bold text-indigo-900 text-center mt-1">
              Copie o desenho com precisão e pinte com capricho!
            </p>
          </div>
        </div>

        <!-- Rodapé Pedagógico Compacto -->
        <div class="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 flex flex-row items-center justify-between gap-2 w-full">
          <div class="flex items-center gap-1.5">
            <span class="text-[9px] font-extrabold uppercase tracking-wider text-slate-500 font-heading flex items-center gap-1">
              <i data-lucide="palette" class="w-3 h-3 text-pink-500"></i> Cores:
            </span>
            <div class="flex items-center gap-1 flex-wrap">
              ${colorBadges}
            </div>
          </div>
          <div class="flex items-center gap-1.5 bg-white px-2.5 py-1 border border-indigo-100 rounded-lg">
            <span class="text-[9px] font-extrabold text-indigo-700 uppercase font-heading">
              Treino de Escrita:
            </span>
            <span class="font-mono text-xs font-black tracking-widest text-slate-700 border-b border-dotted border-slate-400 pb-0.5">
              ${item.word || item.name.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * 3. MODO: LIVRO DE COLORIR GIGANTE (Coloring Book A4)
   */
  function generateColoringPage(item, options = {}) {
    const layers = item.layers || [];
    const bgElements = item.bgElements || "";
    const showBackground = options.showBackground !== false;

    const largeSvg = buildCompleteSvg(layers, showBackground, bgElements);

    const colors = item.colors || ["#f59e0b", "#ef4444", "#10b981", "#3b82f6"];
    const colorSwatches = colors.map((c, i) => `
      <div class="flex items-center gap-1">
        <span class="w-4 h-4 rounded-full border border-slate-300 shadow-inner" style="background-color: ${c}"></span>
        <span class="text-[8px] font-bold text-slate-500 uppercase font-mono">${c}</span>
      </div>
    `).join("");

    return `
      <div class="coloring-page-container flex flex-col items-center justify-between w-full max-w-lg mx-auto">
        <!-- Moldura Artística e Desenho Central -->
        <div class="w-full relative border-3 border-slate-800 rounded-2xl p-2.5 bg-white shadow-xs flex flex-col items-center">
          <!-- Cantoneiras decorativas -->
          <div class="absolute top-1.5 left-2 text-slate-400 text-xs">⭐</div>
          <div class="absolute top-1.5 right-2 text-slate-400 text-xs">⭐</div>
          <div class="absolute bottom-1.5 left-2 text-slate-400 text-xs">⭐</div>
          <div class="absolute bottom-1.5 right-2 text-slate-400 text-xs">⭐</div>

          <div class="w-full aspect-square max-w-[260px] flex items-center justify-center my-1">
            ${largeSvg}
          </div>

          <!-- Faixa de Caligrafia / Treino de Alfabetização -->
          <div class="w-full mt-1 pt-1.5 border-t-2 border-dashed border-slate-300 flex flex-col items-center gap-0.5">
            <span class="text-[9px] font-extrabold uppercase text-indigo-700 tracking-wider font-heading">
              Cubra e Escreva o Nome da Ilustração:
            </span>
            <div class="font-mono text-sm sm:text-base font-black tracking-[0.2em] text-slate-800 border-b-2 border-dashed border-slate-500 px-3 py-0.5">
              ${item.word || item.name.toUpperCase()}
            </div>
          </div>
        </div>

        <!-- Paleta de Cores e Ficha de Assinatura -->
        <div class="w-full mt-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 flex flex-row items-center justify-between gap-2">
          <!-- Cores Recomendadas -->
          <div class="flex items-center gap-2">
            <span class="text-[9px] font-extrabold uppercase tracking-wider text-slate-600 font-heading">
              Cores Sugeridas:
            </span>
            <div class="flex items-center gap-1.5">
              ${colorSwatches}
            </div>
          </div>

          <!-- Selo de Assinatura do Aluno -->
          <div class="text-right flex flex-col items-end text-[8px] font-semibold text-slate-500 leading-tight">
            <span>Pintado por: __________________</span>
            <span class="text-[7.5px] text-amber-600 font-bold mt-0.5">Avaliação: ⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Ponto de entrada universal
   */
  function generate(itemId, mode = "stepbystep", options = {}) {
    const db = (typeof window !== "undefined" && window.DrawingDatabase) ||
      (typeof root !== "undefined" && root.DrawingDatabase) ||
      (typeof global !== "undefined" && global.DrawingDatabase);
    const item = (db && db.getById) ? db.getById(itemId) : {
      id: itemId || "desenho",
      name: "Ilustração",
      word: "D E S E N H O",
      layers: [],
      colors: ["#f59e0b", "#ef4444", "#10b981", "#3b82f6"]
    };

    if (mode === "grid") {
      return generateGridCopy(item, options);
    } else if (mode === "coloring") {
      return generateColoringPage(item, options);
    } else {
      return generateStepByStep(item, options);
    }
  }

  return {
    generate: generate,
    generateStepByStep: generateStepByStep,
    generateGridCopy: generateGridCopy,
    generateColoringPage: generateColoringPage,
    buildStepSvg: buildStepSvg,
    buildCompleteSvg: buildCompleteSvg,
    buildGridOverlaySvg: buildGridOverlaySvg
  };
});
