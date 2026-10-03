/**
 * Gerador de Mega Apostilas Completas Multi-Páginas (Booklet & Workbook Builder)
 * Ensino Soberano Kids (Anime Edition)
 * Suporta presets de 30 e 50 páginas, modo personalizado, integração White-label escolar,
 * geração assíncrona com barra de progresso, sumário automático e caderno de gabaritos.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BookletBuilder = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  let isGenerating = false;

  function openBookletModal() {
    const modal = document.getElementById("booklet-modal");
    if (modal) modal.classList.remove("hidden");
    if (window.WhiteLabelModule) {
      const s = window.WhiteLabelModule.getSettings();
      const schoolField = document.getElementById("booklet-school-name");
      if (schoolField) schoolField.value = s.schoolName || "Ensino Soberano";
    }
  }

  function closeBookletModal() {
    const modal = document.getElementById("booklet-modal");
    if (modal) modal.classList.add("hidden");
  }

  // ── RENDERIZAÇÃO DE LABIRINTO EM CANVAS ──
  function renderMazeCanvas(mazeData, showSolution) {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    const cellSize = 20;
    const width = mazeData.cols * cellSize;
    const height = mazeData.rows * cellSize;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";

    for (let r = 0; r < mazeData.rows; r++) {
      for (let c = 0; c < mazeData.cols; c++) {
        const cell = mazeData.grid[r][c];
        const x = c * cellSize;
        const y = r * cellSize;

        if (cell.walls[0]) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + cellSize, y);
          ctx.stroke();
        }
        if (cell.walls[1]) {
          ctx.beginPath();
          ctx.moveTo(x + cellSize, y);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        }
        if (cell.walls[2]) {
          ctx.beginPath();
          ctx.moveTo(x, y + cellSize);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        }
        if (cell.walls[3]) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + cellSize);
          ctx.stroke();
        }
      }
    }

    if (showSolution && mazeData.solution && mazeData.solution.length > 0) {
      ctx.strokeStyle = "#ef4444";
      ctx.lineWidth = 3;
      ctx.beginPath();
      mazeData.solution.forEach((step, idx) => {
        const cx = step.c * cellSize + cellSize / 2;
        const cy = step.r * cellSize + cellSize / 2;
        if (idx === 0) ctx.moveTo(cx, cy);
        else ctx.lineTo(cx, cy);
      });
      ctx.stroke();
    }

    ctx.font = "16px sans-serif";
    ctx.fillText("🚀", 2, cellSize - 4);
    ctx.fillText("👑", width - cellSize + 2, height - 4);
    return canvas;
  }

  // ── CRIAÇÃO DE PÁGINA PADRÃO A4 PARA APOSTILA ──
  function createBookletPage(pageNumber, totalPages, title, instruction, bnccCode, schoolName, logoHtml) {
    const page = document.createElement("div");
    page.className = "booklet-page worksheet-paper mb-8";
    const bnccHtml = bnccCode ? `<span class="text-[8px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded">🏛️ BNCC: ${bnccCode}</span>` : "";
    const logoBlock = logoHtml || `<span class="text-amber-500 mr-1">👑</span>`;

    page.innerHTML = `
      <div class="worksheet-frame">
        <div class="student-header flex flex-col gap-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold text-indigo-900 uppercase font-heading flex items-center">
              ${logoBlock} ${schoolName}
            </span>
            <div class="flex items-center gap-2">
              ${bnccHtml}
              <span class="text-[10px] font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                Página ${pageNumber} de ${totalPages}
              </span>
            </div>
          </div>
        </div>
        <div class="text-center my-2">
          <h2 class="text-lg font-extrabold text-slate-800 font-heading">${title}</h2>
          <p class="text-[11px] text-slate-500 font-medium">${instruction}</p>
        </div>
        <div class="booklet-content flex-1 flex flex-col justify-center"></div>
        <div class="mt-auto pt-2 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400">
          <span>${schoolName} • Material Pedagógico</span>
          <span>Avaliação: ⭐ ⭐ ⭐ ⭐ ⭐ &nbsp;•&nbsp; Nota: [ &nbsp;&nbsp;&nbsp;&nbsp; / 10 ]</span>
        </div>
      </div>
    `;
    return {
      page: page,
      content: page.querySelector(".booklet-content")
    };
  }

  // ── GERADOR PRINCIPAL DE APOSTILA ──
  function generateFullBooklet() {
    if (isGenerating) return;

    const studentName = document.getElementById("booklet-student-name")?.value || "Super Aluno(a)";
    const bookletTitle = document.getElementById("booklet-custom-title")?.value || "Caderno de Atividades Soberano";
    const presetType = document.getElementById("booklet-preset-select")?.value || "letramento_30";
    const mascotKey = window.KiddoApp?.getCurrentMascot?.() || "hikari";
    const mascot = (window.ANIME_MASCOTS && window.ANIME_MASCOTS[mascotKey]) ? window.ANIME_MASCOTS[mascotKey] : { svg: "🌸", nome: "Hikari", frasePadrao: "Dê o seu melhor!" };

    const wl = window.WhiteLabelModule ? window.WhiteLabelModule.getSettings() : {};
    const schoolName = wl.schoolName || document.getElementById("booklet-school-name")?.value || "Ensino Soberano";
    const logoHtml = (wl.logoDataUrl && wl.showSchoolLogo) ?
      `<img src="${wl.logoDataUrl}" class="h-5 w-auto max-w-[60px] object-contain mr-1 inline-block">` :
      `<span class="text-amber-500 mr-1">👑</span>`;

    const container = document.getElementById("booklet-render-target");
    if (!container) return;
    container.innerHTML = "";

    // Determinar total de páginas de acordo com a seleção
    let totalTargetPages = 30;
    if (presetType === "letramento_30") totalTargetPages = 30;
    else if (presetType === "matematica_30") totalTargetPages = 30;
    else if (presetType === "megacombo_50") totalTargetPages = 50;
    else if (presetType === "personalizado") {
      totalTargetPages = parseInt(document.getElementById("booklet-custom-pages")?.value) || 20;
    }

    // Exibir barra de progresso
    const progressModal = document.getElementById("booklet-progress-modal");
    const progressBar = document.getElementById("booklet-progress-bar");
    const progressText = document.getElementById("booklet-progress-text");
    if (progressModal) progressModal.classList.remove("hidden");

    isGenerating = true;

    // ── 1. CAPA DA APOSTILA (Página 1) ──
    const coverPage = document.createElement("div");
    coverPage.className = "booklet-page worksheet-paper flex flex-col justify-between items-center text-center p-10 border-8 border-double border-pink-300 rounded-3xl bg-gradient-to-b from-pink-50/50 via-white to-purple-50/50";
    coverPage.innerHTML = `
      <div class="w-full flex justify-between items-center border-b-2 border-dashed border-pink-200 pb-3">
        <span class="text-sm font-extrabold uppercase tracking-widest text-indigo-900 font-heading flex items-center">
          ${logoHtml} ${schoolName}
        </span>
        <span class="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">Edição Anime Chibi</span>
      </div>

      <div class="my-4 flex flex-col items-center">
        <div class="w-36 h-36 my-2 drop-shadow-xl">
          ${mascot.svg}
        </div>
        <div class="anime-speech-bubble text-xs max-w-sm mb-3">
          "Bem-vindo(a) à sua grande missão de aprendizado! Dedicação e honra ninja! ✨"
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight mb-1">
          ${bookletTitle}
        </h1>
        <p class="text-xs text-slate-500 font-medium max-w-md">
          Apostila completa e progressiva com ${totalTargetPages} páginas • Alinhada à BNCC Brasil.
        </p>
      </div>

      <div class="w-full max-w-md bg-white/90 border-2 border-indigo-100 rounded-2xl p-5 shadow-sm flex flex-col gap-2.5 text-left text-xs">
        <div class="flex items-baseline gap-2">
          <span class="font-bold text-slate-600">Aluno(a):</span>
          <span class="font-extrabold text-indigo-900 flex-1 border-b-2 border-dotted border-slate-400 pb-0.5 text-sm">${studentName}</span>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-baseline gap-2">
            <span class="font-bold text-slate-600">Turma:</span>
            <span class="font-semibold text-slate-700">${wl.gradeClass || "1º Ano"}</span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="font-bold text-slate-600">Professor(a):</span>
            <span class="font-semibold text-slate-700">${wl.teacherName || "Orientador Soberano"}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-baseline gap-2">
            <span class="font-bold text-slate-600">Ano Letivo:</span>
            <span class="font-semibold text-slate-700">${wl.schoolYear || "2026"}</span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="font-bold text-slate-600">Bimestre:</span>
            <span class="font-semibold text-slate-700">${wl.period || "1º Bimestre"}</span>
          </div>
        </div>
      </div>

      <div class="w-full pt-4 flex items-center justify-between text-[11px] text-slate-400 font-medium">
        <span>© ${schoolName} • Plataforma Ensino Soberano Kids</span>
        <div class="anime-hanko-stamp scale-75">
          SUGOI! 🌸<br>APROVADO<br><span class="text-[6px] text-red-500 font-bold">${(schoolName).substring(0, 16).toUpperCase()}</span>
        </div>
      </div>
    `;
    container.appendChild(coverPage);

    // Lista de atividades a serem criadas
    const answersList = [];
    const tableOfContents = [];

    // Planejamento do roteiro da apostila
    const activityPlan = buildActivityPlan(presetType, totalTargetPages);

    let curPageNum = 2; // Começa na pág 2 (após a capa)

    // Função iterativa assíncrona para geração suave em blocos de páginas
    function processBatch(index) {
      if (index >= activityPlan.length) {
        // Encerramento: Gerar Gabarito Oficial e Diploma
        finalizeBooklet(curPageNum, totalTargetPages, studentName, bookletTitle, mascotKey, schoolName, logoHtml, answersList, tableOfContents, container);
        if (progressModal) progressModal.classList.add("hidden");
        document.getElementById("booklet-view-modal")?.classList.remove("hidden");
        closeBookletModal();
        isGenerating = false;
        return;
      }

      const item = activityPlan[index];
      const pageObj = createBookletPage(curPageNum, totalTargetPages, item.title, item.instruction, item.bncc, schoolName, logoHtml);
      const answerRecord = renderPageActivity(item.type, pageObj.content, curPageNum);
      if (answerRecord) {
        answersList.push(answerRecord);
      }
      tableOfContents.push({ page: curPageNum, title: item.title, type: item.type });

      container.appendChild(pageObj.page);
      curPageNum++;

      // Atualiza barra de progresso
      const pct = Math.round((curPageNum / totalTargetPages) * 100);
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressText) progressText.textContent = `Gerando página ${curPageNum} de ${totalTargetPages} (${pct}%)...`;

      setTimeout(() => {
        processBatch(index + 1);
      }, 10); // Intervalo assíncrono para liberar a UI do navegador
    }

    // Inicia geração do lote
    processBatch(0);
  }

  // ── CONSTRUÇÃO DO ROTEIRO PEDAGÓGICO DE ATIVIDADES ──
  function buildActivityPlan(preset, totalPages) {
    const plan = [];
    const contentPages = totalPages - 4; // Deduz Capa, Sumário, Passaporte/Gabarito e Diploma

    if (preset === "letramento_30") {
      const themes = ["Animais Ninja", "Frutas & Saúde", "Valores & Respeito", "Natureza & Flores", "Escola & Amigos", "Cores & Formas"];
      for (let i = 0; i < contentPages; i++) {
        const cycle = i % 5;
        if (cycle === 0) plan.push({ type: "wordsearch", title: `Caça-Palavras: ${themes[i % themes.length]}`, instruction: "Encontre as palavras escondidas na grade:", bncc: "EF01LP02" });
        else if (cycle === 1) plan.push({ type: "scramble", title: "Palavras Embaralhadas", instruction: "Ordene as letras para descobrir os nomes secretos:", bncc: "EF01LP08" });
        else if (cycle === 2) plan.push({ type: "cryptogram", title: "Criptograma Ninja: Código Secreto", instruction: "Decifre a mensagem utilizando a tabela de símbolos:", bncc: "EF01LP10" });
        else if (cycle === 3) plan.push({ type: "tracing", title: "Treino de Caligrafia & Traçado", instruction: "Cubra as linhas pontilhadas com firmeza e capricho:", bncc: "EI03ET05" });
        else plan.push({ type: "flashcards", title: "Cartões de Estudo & Vocabulário", instruction: "Recorte nas linhas pontilhadas para estudar:", bncc: "EF01LP01" });
      }
    } else if (preset === "matematica_30") {
      for (let i = 0; i < contentPages; i++) {
        const cycle = i % 6;
        if (cycle === 0) plan.push({ type: "addition", title: "Academia dos Números: Adição", instruction: "Resolva as contas de somar com bastante atenção:", bncc: "EF01MA06" });
        else if (cycle === 1) plan.push({ type: "subtraction", title: "Desafio Ninja: Subtração", instruction: "Calcule as subtrações e preencha as respostas:", bncc: "EF01MA06" });
        else if (cycle === 2) plan.push({ type: "storyproblems", title: "Probleminhas do Cotidiano", instruction: "Leia a historinha, desenhe seu raciocínio e responda:", bncc: "EF02MA06" });
        else if (cycle === 3) plan.push({ type: "sudoku", title: "Sudoku Kids: Raciocínio Lógico", instruction: "Preencha sem repetir nenhum elemento nas linhas e colunas:", bncc: "EF01MA09" });
        else if (cycle === 4) plan.push({ type: "colorbymath", title: "Pinte por Contas: Mosaico", instruction: "Resolva as operações e pinte de acordo com a legenda:", bncc: "EF01MA04" });
        else plan.push({ type: "multichart", title: "Tabela Pitagórica de Multiplicação", instruction: "Complete os espaços em branco da tabuada:", bncc: "EF03MA03" });
      }
    } else {
      // megacombo_50 ou personalizado
      const allTypes = [
        { type: "wordsearch", title: "Caça-Palavras Ninja", instruction: "Encontre as palavras escondidas na grade:", bncc: "EF01LP02" },
        { type: "addition", title: "Academia dos Números: Adição", instruction: "Resolva as contas de somar com capricho:", bncc: "EF01MA06" },
        { type: "maze", title: "Labirinto da Sabedoria", instruction: "Traça o caminho correto do início até a coroa:", bncc: "EF01MA12" },
        { type: "cryptogram", title: "Criptograma Ninja: Código Secreto", instruction: "Decifre o enigma com a tabela de cifras:", bncc: "EF01LP10" },
        { type: "counting", title: "Missão de Contagem & Atenção", instruction: "Conte os elementos e anote no círculo:", bncc: "EI03ET07" },
        { type: "storyproblems", title: "Probleminhas Contextualizados", instruction: "Interprete o desafio e formule a resposta:", bncc: "EF02MA06" },
        { type: "sudoku", title: "Sudoku Kids: Raciocínio Lógico", instruction: "Complete a grade lógica sem repetições:", bncc: "EF01MA09" },
        { type: "colorbymath", title: "Pinte por Matemática", instruction: "Calcule e pinte o mosaico com a cor correta:", bncc: "EF01MA04" },
        { type: "scramble", title: "Detetive de Palavras", instruction: "Desembaralhe as letras corretas:", bncc: "EF01LP08" },
        { type: "patterns", title: "Padrões & Sequências Lógicas", instruction: "Descubra o padrão e complete os elementos:", bncc: "EF01MA09" },
        { type: "time", title: "Guardiões do Tempo: Que Horas São?", instruction: "Observe os relógios analógicos e registre a hora:", bncc: "EF02MA18" },
        { type: "shapes", title: "Geometria Soberana: Formas", instruction: "Identifique as figuras e responda às questões:", bncc: "EF01MA14" },
        { type: "drawing", title: "Aprenda a Desenhar & Colorir", instruction: "Siga o passo a passo com atenção, pratique o traçado e pinte com suas cores favoritas:", bncc: "EF15AR04" }
      ];

      for (let i = 0; i < contentPages; i++) {
        const item = allTypes[i % allTypes.length];
        plan.push(Object.assign({}, item));
      }
    }

    return plan;
  }

  // ── RENDERIZADOR ESPECÍFICO DE CADA ATIVIDADE NA PÁGINA ──
  function renderPageActivity(type, container, pageNum) {
    let answerText = "";

    switch (type) {
      case "wordsearch": {
        const wordsList = ["ESTUDO", "SABEDORIA", "CORAGEM", "AMIZADE", "FOCO", "VITORIA"];
        const wsData = window.WordSearchGenerator.generate({ rows: 10, cols: 10, words: wordsList, allowDiagonal: true });
        const grid = document.createElement("div");
        grid.className = "wordsearch-grid my-3 self-center";
        grid.style.gridTemplateColumns = "repeat(10, 32px)";
        wsData.grid.forEach(row => {
          row.forEach(l => {
            const cell = document.createElement("div");
            cell.className = "wordsearch-cell";
            cell.textContent = l;
            grid.appendChild(cell);
          });
        });
        container.appendChild(grid);
        container.innerHTML += `
          <div class="flex flex-wrap justify-center gap-1.5 mt-3">
            ${wsData.placedWords.map(w => `<span class="word-badge">${w.word}</span>`).join("")}
          </div>
        `;
        answerText = `Palavras: ${wsData.placedWords.map(w => w.word).join(", ")}`;
        break;
      }

      case "addition":
      case "subtraction": {
        const mathProbs = window.MathWorksheetGenerator.generateProblems(type, 12, { digits: 2 });
        const grid = document.createElement("div");
        grid.className = "grid grid-cols-4 gap-3 my-3";
        mathProbs.forEach(p => {
          grid.innerHTML += `
            <div class="math-card-vertical">
              <div class="text-[9px] text-slate-400 font-bold w-full mb-0.5">#${p.id}</div>
              <div>${p.num1}</div>
              <div class="math-op-line"><span class="text-sm font-bold text-pink-500 mr-2">${p.operator}</span><span>${p.num2}</span></div>
              <div class="math-answer-box"></div>
            </div>
          `;
        });
        container.appendChild(grid);
        answerText = `Contas: ${mathProbs.map(p => `#${p.id}=${p.answer}`).join(" | ")}`;
        break;
      }

      case "storyproblems": {
        const storyData = window.StoryProblemsGenerator.generate({ count: 2, difficulty: "medio" });
        const list = document.createElement("div");
        list.className = "flex flex-col gap-2.5 my-2";
        storyData.forEach(p => {
          list.innerHTML += `
            <div class="p-2.5 border-2 border-indigo-100 rounded-xl bg-white flex flex-col gap-1.5">
              <div class="flex items-center justify-between border-b border-indigo-50 pb-1">
                <span class="text-xs font-bold text-indigo-950 font-heading">${p.icon} ${p.mascote}</span>
                <span class="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">${p.tag}</span>
              </div>
              <p class="text-[11px] text-slate-700 bg-slate-50 p-1.5 rounded-lg">${p.historia}</p>
              <div class="grid grid-cols-12 gap-2 text-xs">
                <div class="col-span-5 p-1.5 border border-dashed border-slate-300 rounded-lg min-h-[55px] text-[8.5px] text-slate-400">Desenho</div>
                <div class="col-span-3 p-1.5 border border-dashed border-indigo-200 rounded-lg flex items-center justify-center font-bold text-slate-400">Cálculo</div>
                <div class="col-span-4 p-1.5 border border-slate-200 rounded-lg flex flex-col justify-center text-[9px] text-slate-600">R: <span class="dotted-line w-full block mt-0.5"></span></div>
              </div>
            </div>
          `;
        });
        container.appendChild(list);
        answerText = `Probleminhas: ${storyData.map(p => `#${p.id}: ${p.equacao} (${p.resposta})`).join(" • ")}`;
        break;
      }

      case "sudoku": {
        const sudokuData = window.SudokuGenerator.generate({ size: 4, mode: "emoji", difficulty: "facil" });
        const wrap = document.createElement("div");
        wrap.className = "flex flex-col items-center justify-center my-3";
        wrap.innerHTML = `<div class="flex gap-2 text-base mb-3 font-bold bg-indigo-50 p-2 rounded-xl border border-indigo-100">${sudokuData.symbols.join(" ")}</div>`;
        const grid = document.createElement("div");
        grid.className = "sudoku-grid";
        grid.style.gridTemplateColumns = "repeat(4, 52px)";
        for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 4; c++) {
            const cell = document.createElement("div");
            cell.className = "sudoku-cell";
            cell.style.width = "52px";
            cell.style.height = "52px";
            if ((c + 1) % 2 === 0 && c !== 3) cell.classList.add("sudoku-border-r");
            if ((r + 1) % 2 === 0 && r !== 3) cell.classList.add("sudoku-border-b");
            cell.textContent = sudokuData.puzzle[r][c];
            grid.appendChild(cell);
          }
        }
        wrap.appendChild(grid);
        container.appendChild(wrap);
        answerText = `Sudoku 4x4 resolvido com símbolos: ${sudokuData.symbols.join(" ")}`;
        break;
      }

      case "cryptogram": {
        const phrase = "ESTUDAR E SUPER PODER";
        const cData = window.CryptogramGenerator.generate(phrase);
        const wrap = document.createElement("div");
        wrap.className = "flex flex-col items-center gap-3 my-2";
        wrap.innerHTML = window.CryptogramGenerator.renderLegend(cData.cipherMap);
        wrap.innerHTML += window.CryptogramGenerator.renderWorksheetBoxes(cData);
        container.appendChild(wrap);
        answerText = `Criptograma: "${phrase}"`;
        break;
      }

      case "maze": {
        const mazeData = window.MazeGenerator.generate(12, 12);
        const wrap = document.createElement("div");
        wrap.className = "my-3 flex flex-col items-center";
        wrap.appendChild(renderMazeCanvas(mazeData, false));
        container.appendChild(wrap);
        answerText = `Labirinto resolvido com caminho traçado.`;
        break;
      }

      case "counting": {
        const countData = window.CountingGenerator.generate(6, 10);
        const grid = document.createElement("div");
        grid.className = "grid grid-cols-3 gap-3 my-3";
        countData.problems.forEach(p => {
          let icons = "";
          for (let i = 0; i < p.count; i++) icons += `<span class="text-lg">${p.icon}</span>`;
          grid.innerHTML += `
            <div class="p-2 border-2 border-indigo-100 rounded-xl bg-slate-50 flex flex-col items-center justify-between min-h-[140px]">
              <span class="text-[11px] font-bold text-indigo-700">${p.name}</span>
              <div class="flex flex-wrap justify-center gap-1 p-1">${icons}</div>
              <div class="w-8 h-8 border-2 border-dashed border-indigo-400 rounded-full bg-white"></div>
            </div>
          `;
        });
        container.appendChild(grid);
        answerText = `Contagens: ${countData.problems.map(p => `${p.name}=${p.count}`).join(" | ")}`;
        break;
      }

      case "drawing": {
        if (window.StepByStepDrawing && window.DrawingDatabase) {
          const randItem = window.DrawingDatabase.getRandom("all");
          const mode = (pageNum % 2 === 0) ? "stepbystep" : "grid";
          const dHtml = window.StepByStepDrawing.generate(randItem.id, mode, { gridSize: 7, showTracing: false, showSolution: false });
          const wrapper = document.createElement("div");
          wrapper.className = "w-full my-1";
          wrapper.innerHTML = dHtml;
          container.appendChild(wrapper);
          answerText = `Desenho: ${randItem.name} (${mode === "stepbystep" ? "Passo a Passo" : "Cópia por Grade"}).`;
        }
        break;
      }

      default: {
        const mathProbs = window.MathWorksheetGenerator.generateProblems("addition", 12, { digits: 1 });
        const grid = document.createElement("div");
        grid.className = "grid grid-cols-3 gap-3 my-3";
        mathProbs.forEach(p => {
          grid.innerHTML += `<div class="p-3 border rounded-xl text-center font-mono font-bold text-sm bg-slate-50">${p.num1} + ${p.num2} = [ &nbsp;&nbsp; ]</div>`;
        });
        container.appendChild(grid);
        answerText = `Exercícios de fixação básica.`;
        break;
      }
    }

    return { page: pageNum, summary: answerText };
  }

  // ── FINALIZAÇÃO DA APOSTILA COM PASSAPORTE, GABARITO E DIPLOMA ──
  function finalizeBooklet(startPageNum, totalPages, studentName, title, mascotKey, schoolName, logoHtml, answers, toc, container) {
    let cur = startPageNum;

    // 1. Passaporte de Conquistas & Selos
    const passportPage = document.createElement("div");
    passportPage.className = "booklet-page mb-8";
    passportPage.innerHTML = window.CertificateGenerator.renderPassport(studentName, mascotKey);
    container.appendChild(passportPage);
    cur++;

    // 2. Caderno de Gabaritos Oficial do Professor
    const answerPage = createBookletPage(cur, totalPages, "Caderno do Professor: Gabarito Oficial", "Confira as respostas de todas as atividades desta apostila:", "", schoolName, logoHtml);
    let ansHtml = `<div class="bg-red-50/70 border-2 border-dashed border-red-200 rounded-2xl p-4 flex flex-col gap-2.5 text-xs text-slate-800 max-h-[220mm] overflow-hidden">`;
    answers.forEach(a => {
      ansHtml += `
        <div class="border-b border-red-100 pb-1">
          <span class="font-extrabold text-red-700 mr-1.5">Pág ${a.page}:</span>
          <span class="font-medium text-slate-700">${a.summary}</span>
        </div>
      `;
    });
    ansHtml += `
      <div class="pt-2 flex justify-between items-center text-[10px] text-slate-400">
        <span>Gabarito exclusivo para o orientador pedagógico</span>
        <div class="anime-hanko-stamp scale-75">SUGOI! 🌸<br>GABARITO<br><span class="text-[6px] text-red-500 font-bold">SOBERANO</span></div>
      </div>
    </div>`;
    answerPage.content.innerHTML = ansHtml;
    container.appendChild(answerPage.page);
    cur++;

    // 3. Diploma Oficial de Conclusão de Honra ao Mérito
    const certPage = document.createElement("div");
    certPage.className = "booklet-page mb-8";
    certPage.innerHTML = window.CertificateGenerator.renderCertificate(studentName, title, mascotKey);
    container.appendChild(certPage);
  }

  function downloadBookletPDF() {
    const element = document.getElementById("booklet-render-target");
    if (!element) return;

    const opt = {
      margin: 4,
      filename: "mega-apostila-ensino-soberano.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"] }
    };

    if (window.html2pdf) {
      window.html2pdf().set(opt).from(element).save();
    } else {
      window.print();
    }
  }

  return {
    openModal: openBookletModal,
    closeModal: closeBookletModal,
    generate: generateFullBooklet,
    downloadPDF: downloadBookletPDF,
    renderMazeCanvas: renderMazeCanvas
  };
});
