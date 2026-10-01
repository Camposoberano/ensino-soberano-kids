/**
 * Controlador Principal da Aplicação Gerador de Atividades Infantis
 */
window.KiddoApp = (function () {
  let currentTab = "wordsearch";
  let showAnswers = false;
  let currentData = null;
  let zoomLevel = "auto"; // 'auto', 1, 0.75, 0.5

  function init() {
    setupTabSwitching();
    setupControls();
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

    // Alternar visibilidade do preview vs puzzle interativo
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

  function setupControls() {
    // Botão Gerar
    document.getElementById("btn-generate").addEventListener("click", () => {
      renderCurrentActivity();
      if (window.confetti) {
        window.confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
      }
    });

    // Botão Gabarito (Alternar Respostas)
    document.getElementById("btn-toggle-answers").addEventListener("click", () => {
      showAnswers = !showAnswers;
      updateAnswerButtonText();
      applyAnswersVisibility();
    });

    // Botão Imprimir A4
    document.getElementById("btn-print").addEventListener("click", () => {
      window.print();
    });

    // Botão Baixar PDF
    document.getElementById("btn-download-pdf").addEventListener("click", downloadPDF);

    // Inputs do cabeçalho da folha (sincronização em tempo real)
    ["sheet-school", "sheet-title", "sheet-instructions"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", syncHeader);
      }
    });
  }

  function updateAnswerButtonText() {
    const btn = document.getElementById("btn-toggle-answers");
    if (!btn) return;
    const icon = showAnswers ? "eye-off" : "eye";
    btn.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 mr-2"></i> ${showAnswers ? "Ocultar Gabarito" : "Ver Gabarito"}`;
    if (window.lucide) window.lucide.createIcons();
  }

  function syncHeader() {
    const schoolVal = document.getElementById("sheet-school").value || "Escola / Instituição de Ensino";
    const titleVal = document.getElementById("sheet-title").value || "Atividade Educativa";
    const instrVal = document.getElementById("sheet-instructions").value || "Resolva a atividade com atenção e capricho.";

    const elSchool = document.getElementById("preview-school");
    const elTitle = document.getElementById("preview-title");
    const elInstr = document.getElementById("preview-instructions");

    if (elSchool) elSchool.textContent = schoolVal;
    if (elTitle) elTitle.textContent = titleVal;
    if (elInstr) elInstr.textContent = instrVal;
  }

  function loadCategoryButtons() {
    const container = document.getElementById("preset-categories-container");
    if (!container || !window.KIDDO_VOCABULARY) return;

    container.innerHTML = "";
    Object.keys(window.KIDDO_VOCABULARY).forEach(catKey => {
      const cat = window.KIDDO_VOCABULARY[catKey];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-700 border border-slate-200 transition-all flex items-center gap-1.5";
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

  /* ── 1. RENDER CAÇA-PALAVRAS ── */
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

    // Renderizar tabela do caça-palavras
    const gridEl = document.createElement("div");
    gridEl.className = "wordsearch-grid my-4";
    gridEl.style.gridTemplateColumns = `repeat(${size}, 32px)`;

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

    // Banco de palavras a encontrar embaixo
    const wordsBox = document.createElement("div");
    wordsBox.className = "mt-6 pt-4 border-t-2 border-slate-200 text-center";
    wordsBox.innerHTML = `<h4 class="text-sm font-bold text-slate-600 mb-2 uppercase tracking-wide">Palavras para encontrar:</h4>`;

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

  /* ── 2. RENDER MATEMÁTICA ── */
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
    gridEl.className = "grid grid-cols-4 gap-4 my-4";

    currentData.forEach(p => {
      if (layout === "vertical") {
        const card = document.createElement("div");
        card.className = "math-card-vertical";
        card.innerHTML = `
          <div class="text-xs text-slate-400 w-full mb-1">#${p.id}</div>
          <div>${p.num1}</div>
          <div class="math-op-line">
            <span class="text-lg text-slate-500 mr-2">${p.operator}</span>
            <span>${p.num2}</span>
          </div>
          <div class="math-answer-box math-answer-val">${p.answer}</div>
        `;
        gridEl.appendChild(card);
      } else {
        const card = document.createElement("div");
        card.className = "math-card-horizontal";
        card.innerHTML = `
          <span class="text-xs text-slate-400 mr-2">#${p.id}</span>
          <span>${p.num1} ${p.operator} ${p.num2} = </span>
          <div class="math-box-answer-h math-answer-val">${p.answer}</div>
        `;
        gridEl.appendChild(card);
      }
    });

    container.appendChild(gridEl);
  }

  /* ── 3. RENDER PALAVRAS EMBARALHADAS ── */
  function renderScramble(container) {
    const rawWords = (document.getElementById("scramble-words")?.value || "ESCOLA\nCRIANCA\nPROFESSOR\nCADERNO\nAMIZADE")
      .split("\n")
      .map(w => w.trim())
      .filter(w => w.length > 0);

    currentData = window.WordScrambleGenerator.generate(rawWords);

    const listEl = document.createElement("div");
    listEl.className = "grid grid-cols-2 gap-4 my-4";

    currentData.forEach(item => {
      const card = document.createElement("div");
      card.className = "p-3 border border-slate-300 rounded-xl bg-slate-50 flex flex-col gap-1";
      card.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-400">#${item.id}</span>
          <span class="text-xs text-slate-500 font-semibold">${item.letterCount} letras</span>
        </div>
        <div class="text-2xl font-bold tracking-widest text-indigo-700 font-heading text-center my-1 bg-white py-1 rounded-lg border border-slate-200">
          ${item.scrambled}
        </div>
        <div class="flex items-center gap-2 mt-2">
          <span class="text-xs font-bold text-slate-500">Resposta:</span>
          <div class="scramble-answer-val text-red-600 font-bold hidden">${item.original}</div>
          <div class="scramble-dotted-line flex-1 border-b-2 border-dotted border-slate-400 h-5"></div>
        </div>
      `;
      listEl.appendChild(card);
    });

    container.appendChild(listEl);
  }

  /* ── 4. RENDER CALIGRAFIA & COORDENAÇÃO ── */
  function renderTracing(container) {
    const lines = (document.getElementById("tracing-lines-input")?.value || "ABCDEFGHIJKLM\nNOPQRSTUVWXYZ\n1 2 3 4 5 6 7 8 9 10\nO sol brilha no ceu.")
      .split("\n")
      .map(w => w.trim())
      .filter(w => w.length > 0);

    const data = window.TracingGenerator.generate(lines);

    const guideBox = document.createElement("div");
    guideBox.className = "flex flex-col gap-3 my-4";

    data.lines.forEach((lineText, idx) => {
      const pauta = document.createElement("div");
      pauta.className = "penmanship-line";
      pauta.innerHTML = `<span class="trace-text">${lineText}</span>`;
      guideBox.appendChild(pauta);
    });

    // Pautas extras em branco para treino livre da criança
    for (let i = 0; i < 3; i++) {
      const blankPauta = document.createElement("div");
      blankPauta.className = "penmanship-line";
      guideBox.appendChild(blankPauta);
    }

    container.appendChild(guideBox);
  }

  /* ── 5. RENDER TABELA PITAGÓRICA ── */
  function renderMultiplicationChart(container) {
    const size = parseInt(document.getElementById("chart-size")?.value || 10);
    const mode = document.getElementById("chart-mode")?.value || "missing";

    currentData = window.MultiplicationChartGenerator.generate(size, mode);

    const table = document.createElement("table");
    table.className = "multiplication-table my-4";

    // Cabeçalho superior (colunas 1 a N)
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `<th>×</th>`;
    for (let c = 1; c <= size; c++) {
      headerRow.innerHTML += `<th>${c}</th>`;
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Linhas da tabela
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
    // Caça-Palavras
    document.querySelectorAll(".wordsearch-cell").forEach(cell => {
      if (cell.getAttribute("data-is-answer") === "true") {
        if (showAnswers) {
          cell.classList.add("highlight-answer");
        } else {
          cell.classList.remove("highlight-answer");
        }
      }
    });

    document.querySelectorAll(".word-badge").forEach(badge => {
      if (showAnswers) {
        badge.classList.add("found-answer");
      } else {
        badge.classList.remove("found-answer");
      }
    });

    // Matemática
    document.querySelectorAll(".math-answer-val").forEach(el => {
      if (showAnswers) {
        el.classList.add("show-answer");
      } else {
        el.classList.remove("show-answer");
      }
    });

    // Palavras Embaralhadas
    document.querySelectorAll(".scramble-answer-val").forEach(el => {
      if (showAnswers) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });

    // Tabela de Multiplicação
    document.querySelectorAll(".missing-cell").forEach(cell => {
      if (showAnswers) {
        cell.classList.add("show-answer");
      } else {
        cell.classList.remove("show-answer");
      }
    });
  }

  /* ── ZOOM & ESCALABILIDADE DO PREVIEW A4 ── */
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
      const containerWidth = container.clientWidth - 48; // margem
      const paperWidthPx = 794; // ~210mm a 96DPI
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

  /* ── DOWNLOAD DE PDF CLIENT-SIDE ── */
  function downloadPDF() {
    const paper = document.querySelector(".worksheet-paper");
    if (!paper) return;

    const opt = {
      margin: 8,
      filename: `atividade-${currentTab}-${showAnswers ? "gabarito" : "aluno"}.pdf`,
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
    init: init
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  window.KiddoApp.init();
});
