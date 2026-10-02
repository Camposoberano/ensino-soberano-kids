/**
 * Gerador de Apostilas Completas Multi-Páginas (Booklet / Workbook Builder)
 * Ensino Soberano Kids (Anime Edition)
 */
window.BookletBuilder = (function () {

  function openBookletModal() {
    const modal = document.getElementById("booklet-modal");
    if (modal) modal.classList.remove("hidden");
  }

  function closeBookletModal() {
    const modal = document.getElementById("booklet-modal");
    if (modal) modal.classList.add("hidden");
  }

  function generateFullBooklet() {
    const studentName = document.getElementById("booklet-student-name")?.value || "Aluno(a) Soberano";
    const bookletTitle = document.getElementById("booklet-custom-title")?.value || "Caderno de Atividades Soberano";
    const mascotKey = window.KiddoApp?.getCurrentMascot?.() || "hikari";
    const mascot = window.ANIME_MASCOTS[mascotKey] || window.ANIME_MASCOTS.hikari;

    const container = document.getElementById("booklet-render-target");
    if (!container) return;
    container.innerHTML = "";

    // ── 1. CAPA DA APOSTILA ──
    const coverPage = document.createElement("div");
    coverPage.className = "booklet-page worksheet-paper flex flex-col justify-between items-center text-center p-12 border-8 border-double border-pink-300 rounded-3xl bg-gradient-to-b from-pink-50/50 via-white to-purple-50/50";
    coverPage.innerHTML = `
      <div class="w-full flex justify-between items-center border-b-2 border-dashed border-pink-200 pb-4">
        <span class="text-sm font-extrabold uppercase tracking-widest text-indigo-900 font-heading">👑 Ensino Soberano</span>
        <span class="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">Edição Anime Chibi</span>
      </div>

      <div class="my-6 flex flex-col items-center">
        <div class="w-40 h-40 my-3 drop-shadow-xl">
          ${mascot.svg}
        </div>
        <div class="anime-speech-bubble text-sm max-w-sm mb-4">
          "Bem-vindo(a) à sua grande jornada de aprendizado Soberano! Ganbatte! ✨"
        </div>
        <h1 class="text-3xl font-extrabold font-heading text-slate-900 tracking-tight mb-2">
          ${bookletTitle}
        </h1>
        <p class="text-sm text-slate-500 font-medium max-w-md">
          Atividades pedagógicas completas de alfabetização, matemática, raciocínio lógico e concentração.
        </p>
      </div>

      <div class="w-full max-w-md bg-white/90 border-2 border-indigo-100 rounded-2xl p-6 shadow-sm flex flex-col gap-3 text-left">
        <div class="flex items-baseline gap-2">
          <span class="text-xs font-bold text-slate-600">Aluno(a):</span>
          <span class="text-sm font-extrabold text-indigo-900 flex-1 border-b-2 border-dotted border-slate-400 pb-0.5">${studentName}</span>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-xs font-bold text-slate-600">Instituição:</span>
          <span class="text-xs font-bold text-slate-800 flex-1 border-b border-dotted border-slate-300">Ensino Soberano</span>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-baseline gap-2">
            <span class="text-xs font-bold text-slate-600">Turma:</span>
            <span class="dotted-line flex-1"></span>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-xs font-bold text-slate-600">Ano Letivo:</span>
            <span class="text-xs font-bold text-slate-700">2026</span>
          </div>
        </div>
      </div>

      <div class="w-full pt-6 flex items-center justify-between text-xs text-slate-400 font-medium">
        <span>© Ensino Soberano • Todos os direitos reservados</span>
        <div class="anime-hanko-stamp scale-75">
          SUGOI! 🌸<br>APROVADO<br><span class="text-[6px] text-red-500 font-bold">SOBERANO</span>
        </div>
      </div>
    `;
    container.appendChild(coverPage);

    // ── 2. PÁGINA: CAÇA-PALAVRAS ──
    const page2 = createBookletPage("Página 2", "Caça-Palavras Ninja", "Encontre as palavras temáticas na grade:", "EF01LP02");
    const wsData = window.WordSearchGenerator.generate({
      rows: 12,
      cols: 12,
      words: ["CORAGEM", "ESTUDO", "SABEDORIA", "AMIZADE", "FOCO", "VITORIA"],
      allowDiagonal: true
    });
    const wsGrid = document.createElement("div");
    wsGrid.className = "wordsearch-grid my-3";
    wsGrid.style.gridTemplateColumns = `repeat(12, 31px)`;
    wsData.grid.forEach(row => {
      row.forEach(l => {
        const cell = document.createElement("div");
        cell.className = "wordsearch-cell";
        cell.textContent = l;
        wsGrid.appendChild(cell);
      });
    });
    page2.content.appendChild(wsGrid);
    page2.content.innerHTML += `
      <div class="flex flex-wrap justify-center gap-2 mt-4">
        ${wsData.placedWords.map(w => `<span class="word-badge">${w.word}</span>`).join("")}
      </div>
    `;
    container.appendChild(page2.page);

    // ── 3. PÁGINA: DESAFIOS MATEMÁTICOS ──
    const page3 = createBookletPage("Página 3", "Academia dos Números", "Resolva as operações com atenção:", "EF01MA06");
    const mathGrid = document.createElement("div");
    mathGrid.className = "grid grid-cols-4 gap-3 my-4";
    const mathProbs = window.MathWorksheetGenerator.generateProblems("addition", 16, { digits: 2, allowRegrouping: true });
    mathProbs.forEach(p => {
      mathGrid.innerHTML += `
        <div class="math-card-vertical">
          <div class="text-[10px] text-slate-400 font-bold w-full mb-0.5">#${p.id}</div>
          <div>${p.num1}</div>
          <div class="math-op-line">
            <span class="text-base text-pink-500 mr-2 font-bold">${p.operator}</span>
            <span>${p.num2}</span>
          </div>
          <div class="math-answer-box"></div>
        </div>
      `;
    });
    page3.content.appendChild(mathGrid);
    container.appendChild(page3.page);

    // ── 4. PÁGINA: LABIRINTO DO HERÓI ──
    const page4 = createBookletPage("Página 4", "Labirinto da Sabedoria", "Ajude o pequeno herói a encontrar o caminho até a coroa:", "EF01MA12");
    const mazeData = window.MazeGenerator.generate(14, 14);
    const mazeWrapper = document.createElement("div");
    mazeWrapper.className = "my-4 flex flex-col items-center";
    mazeWrapper.appendChild(renderMazeCanvas(mazeData, false));
    page4.content.appendChild(mazeWrapper);
    container.appendChild(page4.page);

    // ── 5. PÁGINA: CONTAGEM VISUAL ──
    const page5 = createBookletPage("Página 5", "Missão de Contagem", "Conte quantos itens há em cada quadrinho e anote no círculo:", "EF01MA01");
    const countData = window.CountingGenerator.generate(6, 12);
    const countGrid = document.createElement("div");
    countGrid.className = "grid grid-cols-3 gap-4 my-4";
    countData.problems.forEach(p => {
      let iconsHtml = "";
      for (let i = 0; i < p.count; i++) {
        iconsHtml += `<span class="text-xl select-none">${p.icon}</span>`;
      }
      countGrid.innerHTML += `
        <div class="p-3 border-2 border-indigo-100 rounded-2xl bg-slate-50 flex flex-col items-center justify-between min-h-[160px]">
          <div class="text-xs font-bold text-indigo-700">${p.name}</div>
          <div class="flex flex-wrap justify-center gap-1.5 p-2 my-auto max-w-[130px]">${iconsHtml}</div>
          <div class="w-10 h-10 border-2 border-dashed border-indigo-400 rounded-full flex items-center justify-center font-bold text-lg text-slate-800 bg-white"></div>
        </div>
      `;
    });
    page5.content.appendChild(countGrid);
    container.appendChild(page5.page);

    // ── 6. PÁGINA: PROBLEMINHAS CONTEXTUALIZADOS ──
    const page6 = createBookletPage("Página 6", "Probleminhas do Cotidiano", "Leia cada historinha com atenção, raciocine e responda:", "EF01MA08");
    const storyData = window.StoryProblemsGenerator.generate({ count: 2, difficulty: "medio" });
    const storyList = document.createElement("div");
    storyList.className = "flex flex-col gap-3 my-2";
    storyData.forEach(p => {
      storyList.innerHTML += `
        <div class="p-3 border-2 border-indigo-100 rounded-2xl bg-white flex flex-col gap-2">
          <div class="flex items-center justify-between border-b border-indigo-50 pb-1">
            <span class="text-xs font-extrabold text-indigo-950 font-heading">${p.icon} ${p.mascote}</span>
            <span class="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">${p.tag} • ${p.opSymbol}</span>
          </div>
          <p class="text-[11px] font-medium text-slate-700 bg-slate-50/60 p-2 rounded-xl border border-slate-100">${p.historia}</p>
          <div class="grid grid-cols-12 gap-2 text-xs">
            <div class="col-span-5 p-2 border border-dashed border-slate-300 rounded-xl min-h-[70px] text-[9px] text-slate-400">🎨 Desenho / Estratégia</div>
            <div class="col-span-3 p-2 border border-dashed border-indigo-200 rounded-xl flex items-center justify-center font-bold text-slate-400">___ ${p.opSymbol} ___ = ___</div>
            <div class="col-span-4 p-2 border border-slate-200 rounded-xl flex flex-col justify-center text-[10px] text-slate-600">R: <span class="dotted-line w-full block mt-1"></span></div>
          </div>
        </div>
      `;
    });
    page6.content.appendChild(storyList);
    container.appendChild(page6.page);

    // ── 7. PÁGINA: PASSAPORTE DE CONQUISTAS & SELOS ──
    const passportPage = document.createElement("div");
    passportPage.className = "booklet-page mb-8";
    passportPage.innerHTML = window.CertificateGenerator.renderPassport(studentName, mascotKey);
    container.appendChild(passportPage);

    // ── 8. PÁGINA: GABARITO OFICIAL DO PROFESSOR ──
    const pageAns = createBookletPage("Folha do Professor", "Gabarito Oficial da Apostila", "Confira aqui as respostas de todas as atividades:");
    pageAns.content.innerHTML = `
      <div class="bg-red-50/70 border-2 border-dashed border-red-200 rounded-2xl p-6 flex flex-col gap-3 text-xs font-semibold text-slate-800">
        <div>
          <h4 class="font-extrabold text-red-700 uppercase mb-0.5">Página 2 (Caça-Palavras):</h4>
          <p>Palavras: ${wsData.placedWords.map(w => w.word).join(" • ")}</p>
        </div>
        <div>
          <h4 class="font-extrabold text-red-700 uppercase mb-0.5">Página 3 (Matemática):</h4>
          <p>${mathProbs.map(p => `#${p.id}: ${p.answer}`).join(" | ")}</p>
        </div>
        <div>
          <h4 class="font-extrabold text-red-700 uppercase mb-0.5">Página 5 (Contagem):</h4>
          <p>${countData.problems.map(p => `#${p.id} (${p.name}): ${p.count}`).join(" | ")}</p>
        </div>
        <div>
          <h4 class="font-extrabold text-red-700 uppercase mb-0.5">Página 6 (Probleminhas):</h4>
          <p>${storyData.map(p => `#${p.id}: ${p.equacao} (${p.resposta})`).join(" | ")}</p>
        </div>
        <div class="pt-3 flex justify-between items-center border-t border-red-200">
          <span class="text-[11px] text-slate-500">Parabéns por concluir seu Caderno Ensino Soberano!</span>
          <div class="anime-hanko-stamp scale-90">
            SUGOI! 🌸<br>NOTA 10<br><span class="text-[7px] text-red-500 font-bold">SOBERANO</span>
          </div>
        </div>
      </div>
    `;
    container.appendChild(pageAns.page);

    // ── 9. PÁGINA FINAL: DIPLOMA DE HONRA AO MÉRITO ──
    const certPage = document.createElement("div");
    certPage.className = "booklet-page mb-8";
    certPage.innerHTML = window.CertificateGenerator.renderCertificate(studentName, bookletTitle, mascotKey);
    container.appendChild(certPage);

    // Exibir visualização do livreto
    document.getElementById("booklet-view-modal")?.classList.remove("hidden");
    closeBookletModal();
  }

  function createBookletPage(pageTag, title, instruction, bnccCode) {
    const page = document.createElement("div");
    page.className = "booklet-page worksheet-paper mb-8";
    const bnccHtml = bnccCode ? `<span class="text-[8px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded">🏛️ BNCC: ${bnccCode}</span>` : "";
    page.innerHTML = `
      <div class="worksheet-frame">
        <div class="student-header flex flex-col gap-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold text-indigo-900 uppercase font-heading">👑 Ensino Soberano</span>
            <div class="flex items-center gap-2">
              ${bnccHtml}
              <span class="text-[10px] font-bold text-pink-600">${pageTag}</span>
            </div>
          </div>
        </div>
        <div class="text-center my-2">
          <h2 class="text-xl font-extrabold text-slate-800 font-heading">${title}</h2>
          <p class="text-xs text-slate-500 font-medium">${instruction}</p>
        </div>
        <div class="booklet-content flex-1 flex flex-col justify-center"></div>
        <div class="mt-auto pt-2 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
          <span>Ensino Soberano Kids</span>
          <span>Pontuação: [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 10 ]</span>
        </div>
      </div>
    `;
    return {
      page: page,
      content: page.querySelector(".booklet-content")
    };
  }

  function renderMazeCanvas(mazeData, showSolution) {
    const canvas = document.createElement("canvas");
    const cellSize = 22;
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

    // Desenhar paredes
    for (let r = 0; r < mazeData.rows; r++) {
      for (let c = 0; c < mazeData.cols; c++) {
        const cell = mazeData.grid[r][c];
        const x = c * cellSize;
        const y = r * cellSize;

        if (cell.walls[0]) { // Top
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + cellSize, y);
          ctx.stroke();
        }
        if (cell.walls[1]) { // Right
          ctx.beginPath();
          ctx.moveTo(x + cellSize, y);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        }
        if (cell.walls[2]) { // Bottom
          ctx.beginPath();
          ctx.moveTo(x, y + cellSize);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        }
        if (cell.walls[3]) { // Left
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + cellSize);
          ctx.stroke();
        }
      }
    }

    // Desenhar Solução se solicitado
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

    // Marcador de Início e Fim
    ctx.font = "16px sans-serif";
    ctx.fillText("🚀", 2, cellSize - 4);
    ctx.fillText("👑", width - cellSize + 2, height - 4);

    return canvas;
  }

  function downloadBookletPDF() {
    const element = document.getElementById("booklet-render-target");
    if (!element) return;

    const opt = {
      margin: 4,
      filename: "apostila-ensino-soberano-completa.pdf",
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
})();
