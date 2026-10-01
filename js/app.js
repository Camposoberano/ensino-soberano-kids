/**
 * Controlador Principal da Aplicação - Ensino Soberano Kids (Anime Edition)
 */
window.KiddoApp = (function () {
  let currentTab = "wordsearch";
  let showAnswers = false;
  let currentData = null;
  let zoomLevel = "auto";
  let currentMascotId = "hikari";

  function init() {
    setupTabSwitching();
    setupControls();
    setupMascotSelector();
    setupZoomAndScaling();
    loadCategoryButtons();
    renderCurrentActivity();

    // Redimensionar preview ao mudar tamanho da janela
    window.addEventListener("resize", applyScaling);
  }

  function setupTabSwitching() {
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-tab-btn").forEach(b => {
          b.classList.remove("active-tab", "bg-indigo-600", "text-white");
          b.classList.add("bg-white", "text-slate-700");
        });
        btn.classList.add("active-tab", "bg-indigo-600", "text-white");
        btn.classList.remove("bg-white", "text-slate-700");

        currentTab = btn.getAttribute("data-tab");
        showAnswers = false;
        updateAnswerButtonText();
        switchControlPanels();
        renderCurrentActivity();
      });
    });
  }

  function switchControlPanels() {
    document.querySelectorAll(".control-panel").forEach(panel => {
      panel.classList.add("hidden");
    });
    const activePanel = document.getElementById(`panel-${currentTab}`);
    if (activePanel) {
      activePanel.classList.remove("hidden");
    }

    const previewWrapper = document.getElementById("preview-wrapper");
    const puzzleContainer = document.getElementById("puzzle-view-container");
    const previewToolbar = document.getElementById("preview-toolbar");

    if (currentTab === "slidingpuzzle") {
      previewWrapper.classList.add("hidden");
      previewToolbar.classList.add("hidden");
      puzzleContainer.classList.remove("hidden");
      window.SlidingPuzzle.init(document.getElementById("puzzle-board"), 3);
    } else {
      previewWrapper.classList.remove("hidden");
      previewToolbar.classList.remove("hidden");
      puzzleContainer.classList.add("hidden");
    }
  }

  function setupMascotSelector() {
    const container = document.getElementById("mascot-picker-container");
    if (!container || !window.ANIME_MASCOTS) return;

    container.innerHTML = "";
    Object.keys(window.ANIME_MASCOTS).forEach(mId => {
      const mascot = window.ANIME_MASCOTS[mId];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `mascot-choice-btn p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
        mId === currentMascotId ? "border-indigo-600 bg-indigo-50 ring-2 ring-indigo-500" : "border-slate-200 hover:bg-slate-50"
      }`;
      btn.innerHTML = `
        <div class="w-10 h-10">${mascot.svg}</div>
        <span class="text-[10px] font-bold text-slate-700 text-center">${mascot.nome.split(" ")[0]}</span>
      `;
      btn.addEventListener("click", () => {
        currentMascotId = mId;
        document.querySelectorAll(".mascot-choice-btn").forEach(b => {
          b.classList.remove("border-indigo-600", "bg-indigo-50", "ring-2", "ring-indigo-500");
          b.classList.add("border-slate-200");
        });
        btn.classList.add("border-indigo-600", "bg-indigo-50", "ring-2", "ring-indigo-500");
        btn.classList.remove("border-slate-200");

        const speechInput = document.getElementById("mascot-speech-input");
        if (speechInput) {
          speechInput.value = mascot.frasePadrao;
        }
        renderMascotOnSheet();
      });
      container.appendChild(btn);
    });

    const speechInput = document.getElementById("mascot-speech-input");
    if (speechInput) {
      speechInput.value = window.ANIME_MASCOTS[currentMascotId]?.frasePadrao || "";
      speechInput.addEventListener("input", () => {
        renderMascotOnSheet();
      });
    }
  }

  function renderMascotOnSheet() {
    const mascot = window.ANIME_MASCOTS[currentMascotId] || window.ANIME_MASCOTS.hikari;
    const mascotAvatarContainer = document.getElementById("preview-mascot-avatar");
    const mascotBubbleText = document.getElementById("preview-mascot-speech");
    const hankoStampText = document.getElementById("preview-hanko-text");

    if (mascotAvatarContainer) mascotAvatarContainer.innerHTML = mascot.svg;
    if (mascotBubbleText) {
      const speechInput = document.getElementById("mascot-speech-input");
      mascotBubbleText.textContent = speechInput?.value || mascot.frasePadrao;
    }
    if (hankoStampText) {
      hankoStampText.innerHTML = `${mascot.carimbo}<br><span class="text-[7px] text-red-500 font-bold">ENSINO SOBERANO</span>`;
    }
  }

  function setupControls() {
    document.getElementById("btn-generate").addEventListener("click", () => {
      renderCurrentActivity();
      if (window.confetti) {
        window.confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
      }
    });

    document.getElementById("btn-toggle-answers").addEventListener("click", () => {
      showAnswers = !showAnswers;
      updateAnswerButtonText();
      applyAnswersVisibility();
    });

    document.getElementById("btn-print").addEventListener("click", () => window.print());
    document.getElementById("btn-download-pdf").addEventListener("click", downloadPDF);

    const btnOpenBooklet = document.getElementById("btn-open-booklet");
    if (btnOpenBooklet) {
      btnOpenBooklet.addEventListener("click", () => window.BookletBuilder.openModal());
    }

    ["sheet-school", "sheet-title", "sheet-instructions"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", syncHeader);
    });
  }

  function updateAnswerButtonText() {
    const btn = document.getElementById("btn-toggle-answers");
    if (!btn) return;
    const icon = showAnswers ? "eye-off" : "eye";
    btn.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 mr-1.5"></i> ${showAnswers ? "Ocultar Gabarito" : "Ver Gabarito"}`;
    if (window.lucide) window.lucide.createIcons();
  }

  function syncHeader() {
    const schoolVal = document.getElementById("sheet-school")?.value || "Ensino Soberano";
    const titleVal = document.getElementById("sheet-title")?.value || "Atividade Educativa";
    const instrVal = document.getElementById("sheet-instructions")?.value || "Resolva a atividade com atenção e capricho.";

    const elSchool = document.getElementById("preview-school");
    const elTitle = document.getElementById("preview-title");
    const elInstr = document.getElementById("preview-instructions");

    if (elSchool) elSchool.textContent = schoolVal;
    if (elTitle) elTitle.textContent = titleVal;
    if (elInstr) elInstr.textContent = instrVal;
    renderMascotOnSheet();
  }

  function loadCategoryButtons() {
    const container = document.getElementById("preset-categories-container");
    if (!container || !window.KIDDO_VOCABULARY) return;

    container.innerHTML = "";
    Object.keys(window.KIDDO_VOCABULARY).forEach(catKey => {
      const cat = window.KIDDO_VOCABULARY[catKey];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-pink-100 text-slate-700 hover:text-pink-700 border border-slate-200 transition-all flex items-center gap-1.5";
      btn.innerHTML = `<i data-lucide="${cat.icone}" class="w-3.5 h-3.5"></i> ${cat.nome}`;
      btn.addEventListener("click", () => {
        const wordsTextarea = document.getElementById("ws-words");
        if (wordsTextarea) {
          wordsTextarea.value = cat.palavras.join("\n");
          document.getElementById("sheet-title").value = `Caça-Palavras: ${cat.nome}`;
          renderCurrentActivity();
        }
      });
      container.appendChild(btn);
    });
    if (window.lucide) window.lucide.createIcons();
  }

  function renderCurrentActivity() {
    syncHeader();
    const contentArea = document.getElementById("worksheet-dynamic-content");
    if (!contentArea) return;
    contentArea.innerHTML = "";

    switch (currentTab) {
      case "wordsearch":
        renderWordSearch(contentArea);
        break;
      case "addition":
        renderMath(contentArea, "addition");
        break;
      case "subtraction":
        renderMath(contentArea, "subtraction");
        break;
      case "multiplication":
        renderMath(contentArea, "multiplication");
        break;
      case "division":
        renderMath(contentArea, "division");
        break;
      case "maze":
        renderMaze(contentArea);
        break;
      case "counting":
        renderCounting(contentArea);
        break;
      case "matching":
        renderMatching(contentArea);
        break;
      case "time":
        renderTellingTime(contentArea);
        break;
      case "patterns":
        renderPatterns(contentArea);
        break;
      case "shapes":
        renderShapes(contentArea);
        break;
      case "body":
        renderBodyParts(contentArea);
        break;
      case "flashcards":
        renderFlashcards(contentArea);
        break;
      case "origami":
        renderOrigami(contentArea);
        break;
      case "coloring":
        renderColoring(contentArea);
        break;
      case "scramble":
        renderScramble(contentArea);
        break;
      case "tracing":
        renderTracing(contentArea);
        break;
      case "multichart":
        renderMultiplicationChart(contentArea);
        break;
    }

    applyAnswersVisibility();
    applyScaling();
    if (window.lucide) window.lucide.createIcons();
  }

  /* ── 1. CAÇA-PALAVRAS ── */
  function renderWordSearch(container) {
    const rawWords = (document.getElementById("ws-words").value || "")
      .split("\n")
      .map(w => w.trim())
      .filter(w => w.length > 0);

    const size = parseInt(document.getElementById("ws-grid-size").value) || 12;
    const allowDiagonal = document.getElementById("ws-diagonal").checked;
    const uppercase = document.getElementById("ws-uppercase").checked;

    currentData = window.WordSearchGenerator.generate({
      rows: size,
      cols: size,
      words: rawWords,
      allowDiagonal: allowDiagonal,
      uppercase: uppercase
    });

    const gridEl = document.createElement("div");
    gridEl.className = "wordsearch-grid my-3";
    gridEl.style.gridTemplateColumns = `repeat(${size}, 31px)`;

    currentData.grid.forEach((row, r) => {
      row.forEach((letter, c) => {
        const cell = document.createElement("div");
        cell.className = "wordsearch-cell";
        cell.textContent = letter;
        cell.setAttribute("data-r", r);
        cell.setAttribute("data-c", c);
        if (currentData.answerCells[r][c] !== null) {
          cell.setAttribute("data-is-answer", "true");
        }
        gridEl.appendChild(cell);
      });
    });

    container.appendChild(gridEl);

    const wordsBox = document.createElement("div");
    wordsBox.className = "mt-4 pt-3 border-t-2 border-slate-100 text-center";
    wordsBox.innerHTML = `<h4 class="text-xs font-extrabold text-slate-600 mb-2 uppercase tracking-wider font-heading flex items-center justify-center gap-1.5"><span class="text-pink-500">🌸</span> Palavras da Missão:</h4>`;

    const badgeContainer = document.createElement("div");
    badgeContainer.className = "flex flex-wrap justify-center gap-2 max-w-lg mx-auto";

    currentData.placedWords.forEach(item => {
      const badge = document.createElement("span");
      badge.className = "word-badge";
      badge.textContent = item.word;
      badge.setAttribute("data-word", item.word);
      badgeContainer.appendChild(badge);
    });

    wordsBox.appendChild(badgeContainer);
    container.appendChild(wordsBox);
  }

  /* ── 2. MATEMÁTICA ── */
  function renderMath(container, opType) {
    const digits = parseInt(document.getElementById("math-digits")?.value || 1);
    const count = parseInt(document.getElementById("math-count")?.value || 20);
    const layout = document.getElementById("math-layout")?.value || "vertical";
    const allowRegrouping = document.getElementById("math-regrouping")?.checked !== false;

    currentData = window.MathWorksheetGenerator.generateProblems(opType, count, {
      digits: digits,
      allowRegrouping: allowRegrouping,
      allowBorrowing: allowRegrouping,
      table: document.getElementById("math-table")?.value || "all",
      level: digits === 1 ? "easy" : "medium"
    });

    const gridEl = document.createElement("div");
    gridEl.className = "grid grid-cols-4 gap-3 my-3";

    currentData.forEach(p => {
      if (layout === "vertical") {
        const card = document.createElement("div");
        card.className = "math-card-vertical";
        card.innerHTML = `
          <div class="text-[10px] text-slate-400 font-bold w-full mb-0.5">#${p.id}</div>
          <div>${p.num1}</div>
          <div class="math-op-line">
            <span class="text-base text-pink-500 mr-2 font-bold">${p.operator}</span>
            <span>${p.num2}</span>
          </div>
          <div class="math-answer-box math-answer-val">${p.answer}</div>
        `;
        gridEl.appendChild(card);
      } else {
        const card = document.createElement("div");
        card.className = "math-card-horizontal";
        card.innerHTML = `
          <span class="text-[10px] text-slate-400 mr-2 font-bold">#${p.id}</span>
          <span>${p.num1} ${p.operator} ${p.num2} = </span>
          <div class="math-box-answer-h math-answer-val">${p.answer}</div>
        `;
        gridEl.appendChild(card);
      }
    });

    container.appendChild(gridEl);
  }

  /* ── 3. LABIRINTO (MAZE) ── */
  function renderMaze(container) {
    const size = parseInt(document.getElementById("maze-difficulty")?.value || 14);
    currentData = window.MazeGenerator.generate(size, size);

    const wrapper = document.createElement("div");
    wrapper.className = "flex flex-col items-center justify-center my-3";
    const canvas = window.BookletBuilder.renderMazeCanvas(currentData, showAnswers);
    canvas.id = "worksheet-maze-canvas";
    wrapper.appendChild(canvas);

    container.appendChild(wrapper);
  }

  /* ── 4. CONTAGEM VISUAL (COUNTING) ── */
  function renderCounting(container) {
    const boxes = parseInt(document.getElementById("counting-boxes")?.value || 6);
    const maxVal = parseInt(document.getElementById("counting-max")?.value || 10);
    currentData = window.CountingGenerator.generate(boxes, maxVal);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-3 gap-4 my-3";

    currentData.problems.forEach(p => {
      let iconsHtml = "";
      for (let i = 0; i < p.count; i++) {
        iconsHtml += `<span class="text-2xl select-none leading-none">${p.icon}</span>`;
      }
      grid.innerHTML += `
        <div class="p-3 border-2 border-indigo-100 rounded-2xl bg-slate-50 flex flex-col items-center justify-between min-h-[175px]">
          <div class="text-xs font-bold text-indigo-700">${p.name}</div>
          <div class="flex flex-wrap justify-center gap-2 p-2 my-auto max-w-[140px]">${iconsHtml}</div>
          <div class="w-11 h-11 border-2 border-dashed border-indigo-400 rounded-full flex items-center justify-center font-bold text-xl text-slate-800 bg-white">
            <span class="counting-ans-val text-red-600 ${showAnswers ? "" : "hidden"}">${p.count}</span>
          </div>
        </div>
      `;
    });

    container.appendChild(grid);
  }

  /* ── 5. LIGAR COLUNAS (MATCHING) ── */
  function renderMatching(container) {
    const theme = document.getElementById("matching-theme")?.value || "math";
    currentData = window.MatchingGenerator.generate(theme);

    const wrapper = document.createElement("div");
    wrapper.className = "my-4 max-w-lg mx-auto w-full flex flex-col gap-3";

    currentData.leftItems.forEach((lItem, idx) => {
      const rItem = currentData.rightItems[idx];
      wrapper.innerHTML += `
        <div class="matching-row">
          <div class="matching-card">
            <span>${lItem.text}</span>
          </div>
          <div class="flex items-center gap-3 flex-1 px-4">
            <span class="matching-dot"></span>
            <div class="flex-1 border-b-2 border-dashed border-slate-300"></div>
            <span class="matching-dot"></span>
          </div>
          <div class="matching-card">
            <span>${rItem.text}</span>
          </div>
        </div>
      `;
    });

    if (showAnswers) {
      wrapper.innerHTML += `
        <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700 text-center">
          Gabarito: ${currentData.leftItems.map(l => `${l.text} ➜ ${currentData.rightItems.find(r => r.matchId === l.id)?.text}`).join(" | ")}
        </div>
      `;
    }

    container.appendChild(wrapper);
  }

  /* ── 6. DIZER A HORA (TELLING TIME) ── */
  function renderTellingTime(container) {
    const count = parseInt(document.getElementById("time-count")?.value || 6);
    const diff = document.getElementById("time-diff")?.value || "half";
    currentData = window.TellingTimeGenerator.generateClocks(count, diff);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-3 gap-6 my-4";

    currentData.forEach(c => {
      const clockSvg = window.TellingTimeGenerator.renderClockSvg(c.hour, c.minute, 130);
      grid.innerHTML += `
        <div class="flex flex-col items-center gap-2 p-3 bg-slate-50/80 border border-indigo-100 rounded-2xl">
          ${clockSvg}
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs font-bold text-slate-500">Horário:</span>
            <div class="w-20 h-9 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center font-bold text-lg bg-white">
              <span class="time-ans-val text-red-600 ${showAnswers ? "" : "hidden"}">${c.digital}</span>
            </div>
          </div>
        </div>
      `;
    });

    container.appendChild(grid);
  }

  /* ── 7. PADRÕES & SEQUÊNCIAS LÓGICAS (PATTERNS) ── */
  function renderPatterns(container) {
    const type = document.getElementById("patterns-type")?.value || "visual";
    currentData = window.PatternsGenerator.generatePatterns(6, type);

    const list = document.createElement("div");
    list.className = "flex flex-col gap-3 my-4 max-w-xl mx-auto w-full";

    currentData.forEach(p => {
      let itemsHtml = "";
      p.items.forEach(it => {
        if (it === "?") {
          itemsHtml += `
            <div class="w-12 h-12 rounded-xl border-2 border-dashed border-pink-400 bg-pink-50 flex items-center justify-center font-bold text-lg text-pink-600">
              <span class="pattern-ans-val text-red-600 font-extrabold ${showAnswers ? "" : "hidden"}">${p.answer}</span>
              <span class="pattern-q-val ${showAnswers ? "hidden" : ""}">?</span>
            </div>
          `;
        } else {
          itemsHtml += `
            <div class="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center font-bold text-xl select-none">
              ${it}
            </div>
          `;
        }
      });

      list.innerHTML += `
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
          <span class="text-xs font-bold text-slate-400">#${p.id}</span>
          <div class="flex items-center gap-2">${itemsHtml}</div>
        </div>
      `;
    });

    container.appendChild(list);
  }

  /* ── 8. FORMAS GEOMÉTRICAS (SHAPES) ── */
  function renderShapes(container) {
    const data = window.ShapesGenerator.generate("properties");
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-3 gap-4 my-4";

    data.shapes.forEach(sh => {
      grid.innerHTML += `
        <div class="p-4 border-2 border-indigo-100 rounded-2xl bg-white shadow-sm flex flex-col items-center text-center gap-2">
          ${sh.svg}
          <h4 class="font-extrabold text-base text-indigo-950 font-heading">${sh.nome}</h4>
          <div class="w-full text-xs text-slate-600 bg-slate-50 p-2 rounded-xl flex flex-col gap-1 border border-slate-100">
            <div class="flex justify-between">
              <span>Lados:</span>
              <span class="font-bold text-indigo-600">${showAnswers ? sh.lados : "___"}</span>
            </div>
            <div class="flex justify-between">
              <span>Vértices:</span>
              <span class="font-bold text-indigo-600">${showAnswers ? sh.vertices : "___"}</span>
            </div>
          </div>
          <p class="text-[10px] text-slate-400 italic">${sh.curiosidade}</p>
        </div>
      `;
    });

    container.appendChild(grid);
  }

  /* ── 9. PARTES DO CORPO & CONHECIMENTOS GERAIS ── */
  function renderBodyParts(container) {
    const data = window.BodyPartsGenerator.generate("senses");
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-2 gap-4 my-4 max-w-xl mx-auto w-full";

    data.items.forEach(item => {
      grid.innerHTML += `
        <div class="p-3 border-2 border-pink-100 rounded-2xl bg-pink-50/40 flex items-center gap-3">
          <span class="text-4xl select-none">${item.icon}</span>
          <div class="flex flex-col flex-1">
            <span class="text-sm font-extrabold text-slate-800 font-heading">${item.nome} (${item.sentido})</span>
            <span class="text-xs text-slate-500 font-medium">${item.funcao}</span>
            <div class="mt-1 flex items-center gap-1.5 text-[11px] font-bold">
              <span class="text-pink-600">Sentido:</span>
              <span class="border-b border-dotted border-slate-400 flex-1 ${showAnswers ? "text-red-600" : "text-transparent"}">${item.sentido}</span>
            </div>
          </div>
        </div>
      `;
    });

    container.appendChild(grid);
  }

  /* ── 10. CARTÕES DE ESTUDO (FLASHCARDS) ── */
  function renderFlashcards(container) {
    const deckType = document.getElementById("flashcards-type")?.value || "bilingual";
    const data = window.FlashcardsGenerator.generate(deckType);
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-2 gap-4 my-4";

    data.cards.forEach((card, idx) => {
      grid.innerHTML += `
        <div class="border-2 border-dashed border-indigo-300 rounded-2xl p-4 bg-slate-50/60 flex flex-col justify-between min-h-[140px] relative">
          <span class="absolute top-2 right-2 text-xs text-slate-400 select-none">✂️ recortar</span>
          <div class="text-xs font-bold text-slate-400">Cartão #${idx + 1}</div>
          <div class="text-center text-xl font-extrabold text-indigo-900 font-heading my-2">
            ${card.front}
          </div>
          <div class="pt-2 border-t border-dotted border-slate-300 flex justify-between items-center text-xs font-bold text-slate-500">
            <span>Verso (Resposta):</span>
            <span class="${showAnswers ? "text-red-600 font-extrabold" : "text-transparent"}">${card.back}</span>
          </div>
        </div>
      `;
    });

    container.appendChild(grid);
  }

  /* ── 11. ORIGAMI PASSO A PASSO ── */
  function renderOrigami(container) {
    const projectKey = document.getElementById("origami-project")?.value || "fox";
    const data = window.OrigamiGenerator.generate(projectKey);

    const wrapper = document.createElement("div");
    wrapper.className = "flex flex-col gap-3 my-4 max-w-xl mx-auto w-full";
    wrapper.innerHTML = `
      <div class="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between">
        <span class="font-extrabold text-amber-900 font-heading text-sm">Projeto: ${data.nome}</span>
        <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">${data.nivel}</span>
      </div>
    `;

    data.passos.forEach(p => {
      wrapper.innerHTML += `
        <div class="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div class="w-8 h-8 rounded-full bg-pink-100 text-pink-700 font-extrabold flex items-center justify-center text-xs">
            ${p.num}
          </div>
          <span class="text-2xl select-none">${p.icon}</span>
          <span class="text-xs font-semibold text-slate-700 flex-1">${p.desc}</span>
        </div>
      `;
    });

    container.appendChild(wrapper);
  }

  /* ── 12. PÁGINA PARA COLORIR (COLORING) ── */
  function renderColoring(container) {
    const data = window.ColoringGenerator.generate("hikari");
    const wrapper = document.createElement("div");
    wrapper.className = "my-2 flex flex-col items-center";
    wrapper.innerHTML = data.svg;
    container.appendChild(wrapper);
  }

  /* ── 13. PALAVRAS EMBARALHADAS ── */
  function renderScramble(container) {
    const rawWords = (document.getElementById("scramble-words")?.value || "ESCOLA\nCRIANCA\nPROFESSOR\nCADERNO\nAMIZADE")
      .split("\n")
      .map(w => w.trim())
      .filter(w => w.length > 0);

    currentData = window.WordScrambleGenerator.generate(rawWords);
    const listEl = document.createElement("div");
    listEl.className = "grid grid-cols-2 gap-3 my-3";

    currentData.forEach(item => {
      const card = document.createElement("div");
      card.className = "p-2.5 border border-slate-200 rounded-xl bg-slate-50/80 flex flex-col gap-1";
      card.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold text-slate-400">#${item.id}</span>
          <span class="text-[10px] text-pink-600 font-bold">${item.letterCount} letras ⭐</span>
        </div>
        <div class="text-xl font-bold tracking-widest text-indigo-700 font-heading text-center my-1 bg-white py-1 rounded-lg border border-slate-200">
          ${item.scrambled}
        </div>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-[10px] font-bold text-slate-500">Resposta:</span>
          <div class="scramble-answer-val text-red-600 font-bold hidden">${item.original}</div>
          <div class="scramble-dotted-line flex-1 border-b-2 border-dotted border-slate-400 h-4"></div>
        </div>
      `;
      listEl.appendChild(card);
    });

    container.appendChild(listEl);
  }

  /* ── 14. CALIGRAFIA & TREINO ── */
  function renderTracing(container) {
    const lines = (document.getElementById("tracing-lines-input")?.value || "ABCDEFGHIJKLM\nNOPQRSTUVWXYZ\n1 2 3 4 5 6 7 8 9 10\nEnsino Soberano brilha!")
      .split("\n")
      .map(w => w.trim())
      .filter(w => w.length > 0);

    const data = window.TracingGenerator.generate(lines);
    const guideBox = document.createElement("div");
    guideBox.className = "flex flex-col gap-2.5 my-3";

    data.lines.forEach(lineText => {
      const pauta = document.createElement("div");
      pauta.className = "penmanship-line";
      pauta.innerHTML = `<span class="trace-text">${lineText}</span>`;
      guideBox.appendChild(pauta);
    });

    for (let i = 0; i < 3; i++) {
      const blankPauta = document.createElement("div");
      blankPauta.className = "penmanship-line";
      guideBox.appendChild(blankPauta);
    }

    container.appendChild(guideBox);
  }

  /* ── 15. TABELA PITAGÓRICA ── */
  function renderMultiplicationChart(container) {
    const size = parseInt(document.getElementById("chart-size")?.value || 10);
    const mode = document.getElementById("chart-mode")?.value || "missing";

    currentData = window.MultiplicationChartGenerator.generate(size, mode);
    const table = document.createElement("table");
    table.className = "multiplication-table my-3";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `<th>×</th>`;
    for (let c = 1; c <= size; c++) {
      headerRow.innerHTML += `<th>${c}</th>`;
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    currentData.rows.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<th>${r.header}</th>`;
      r.cells.forEach(cell => {
        const td = document.createElement("td");
        if (cell.isBlank) {
          td.className = "missing-cell";
          td.setAttribute("data-val", cell.val);
          td.textContent = cell.val;
        } else {
          td.textContent = cell.val;
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.appendChild(table);
  }

  /* ── GABARITO (EXIBIÇÃO / OCULTAÇÃO) ── */
  function applyAnswersVisibility() {
    document.querySelectorAll(".wordsearch-cell").forEach(cell => {
      if (cell.getAttribute("data-is-answer") === "true") {
        if (showAnswers) cell.classList.add("highlight-answer");
        else cell.classList.remove("highlight-answer");
      }
    });

    document.querySelectorAll(".word-badge").forEach(badge => {
      if (showAnswers) badge.classList.add("found-answer");
      else badge.classList.remove("found-answer");
    });

    document.querySelectorAll(".math-answer-val").forEach(el => {
      if (showAnswers) el.classList.add("show-answer");
      else el.classList.remove("show-answer");
    });

    document.querySelectorAll(".scramble-answer-val").forEach(el => {
      if (showAnswers) el.classList.remove("hidden");
      else el.classList.add("hidden");
    });

    document.querySelectorAll(".missing-cell").forEach(cell => {
      if (showAnswers) cell.classList.add("show-answer");
      else cell.classList.remove("show-answer");
    });

    document.querySelectorAll(".counting-ans-val").forEach(el => {
      if (showAnswers) el.classList.remove("hidden");
      else el.classList.add("hidden");
    });

    document.querySelectorAll(".time-ans-val").forEach(el => {
      if (showAnswers) el.classList.remove("hidden");
      else el.classList.add("hidden");
    });

    document.querySelectorAll(".pattern-ans-val").forEach(el => {
      if (showAnswers) el.classList.remove("hidden");
      else el.classList.add("hidden");
    });

    document.querySelectorAll(".pattern-q-val").forEach(el => {
      if (showAnswers) el.classList.add("hidden");
      else el.classList.remove("hidden");
    });

    if (currentTab === "maze" && currentData) {
      const container = document.getElementById("worksheet-dynamic-content");
      if (container) {
        container.innerHTML = "";
        const wrapper = document.createElement("div");
        wrapper.className = "flex flex-col items-center justify-center my-3";
        const canvas = window.BookletBuilder.renderMazeCanvas(currentData, showAnswers);
        wrapper.appendChild(canvas);
        container.appendChild(wrapper);
      }
    }
  }

  function setupZoomAndScaling() {
    const zoomSelector = document.getElementById("zoom-select");
    if (zoomSelector) {
      zoomSelector.addEventListener("change", (e) => {
        zoomLevel = e.target.value;
        applyScaling();
      });
    }
  }

  function applyScaling() {
    const scalerWrapper = document.querySelector(".page-scaler-wrapper");
    const container = document.getElementById("preview-wrapper");
    if (!scalerWrapper || !container) return;

    if (zoomLevel === "auto") {
      const containerWidth = container.clientWidth - 48;
      const paperWidthPx = 794;
      const scale = Math.min(1, Math.max(0.4, containerWidth / paperWidthPx));
      scalerWrapper.style.transform = `scale(${scale})`;
      scalerWrapper.style.transformOrigin = "top center";
      scalerWrapper.style.marginBottom = `${(scale - 1) * 1123}px`;
    } else {
      const scale = parseFloat(zoomLevel);
      scalerWrapper.style.transform = `scale(${scale})`;
      scalerWrapper.style.transformOrigin = "top center";
      scalerWrapper.style.marginBottom = `${(scale - 1) * 1123}px`;
    }
  }

  function downloadPDF() {
    const paper = document.querySelector(".worksheet-paper");
    if (!paper) return;

    const opt = {
      margin: 6,
      filename: `ensino-soberano-${currentTab}-${showAnswers ? "gabarito" : "aluno"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    if (window.html2pdf) {
      window.html2pdf().set(opt).from(paper).save();
    } else {
      window.print();
    }
  }

  return {
    init: init,
    getCurrentMascot: () => currentMascotId
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  window.KiddoApp.init();
});
