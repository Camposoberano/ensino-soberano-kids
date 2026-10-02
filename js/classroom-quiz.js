/**
 * ClassroomQuizModule - Modo Quiz Interativo & Game Show para Sala de Aula
 * Ensino Soberano Kids (Anime Edition)
 * Projetado para lousas digitais, tablets e projetores em sala de aula.
 * Apresenta perguntas com contagem regressiva, efeitos sonoros (Web Audio API),
 * placar da turma, mascotes reativos e celebração com confetes.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ClassroomQuizModule = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const QUESTION_BANK = [
    // ── 1. MATEMÁTICA NINJA ──
    {
      category: "math",
      categoryName: "Matemática Ninja",
      categoryIcon: "🧮",
      question: "Quanto é 7 + 8?",
      options: ["13", "14", "15", "16"],
      answer: 2,
      explanation: "7 + 8 = 15! Excelente raciocínio rápido!"
    },
    {
      category: "math",
      categoryName: "Matemática Ninja",
      categoryIcon: "🧮",
      question: "Se você tem 20 adesivos e dá 6 para um colega, com quantos fica?",
      options: ["12 adesivos", "14 adesivos", "15 adesivos", "16 adesivos"],
      answer: 1,
      explanation: "20 - 6 = 14! Generosidade e matemática perfeita!"
    },
    {
      category: "math",
      categoryName: "Matemática Ninja",
      categoryIcon: "🧮",
      question: "Qual é o dobro de 9?",
      options: ["16", "17", "18", "20"],
      answer: 2,
      explanation: "9 + 9 = 18! O dobro é multiplicar por 2!"
    },
    {
      category: "math",
      categoryName: "Matemática Ninja",
      categoryIcon: "🧮",
      question: "Qual o resultado de 3 x 4?",
      options: ["10", "12", "14", "15"],
      answer: 1,
      explanation: "3 x 4 = 12! Tabuada na ponta da língua!"
    },
    {
      category: "math",
      categoryName: "Matemática Ninja",
      categoryIcon: "🧮",
      question: "Qual número vem imediatamente antes do número 50?",
      options: ["48", "49", "51", "52"],
      answer: 1,
      explanation: "O antecessor de 50 é o 49!"
    },

    // ── 2. PORTUGUÊS & LETRAMENTO ──
    {
      category: "words",
      categoryName: "Língua Portuguesa & Letras",
      categoryIcon: "📚",
      question: "Qual das palavras abaixo possui exatamente 3 sílabas?",
      options: ["PÉ", "BONECA", "SOL", "TELEVISÃO"],
      answer: 1,
      explanation: "BO - NE - CA tem 3 sílabas (trissílaba)!"
    },
    {
      category: "words",
      categoryName: "Língua Portuguesa & Letras",
      categoryIcon: "📚",
      question: "Qual o antônimo (oposto) da palavra CORAJOSO?",
      options: ["Forte", "Medroso", "Veloz", "Alegre"],
      answer: 1,
      explanation: "O oposto de corajoso é medroso!"
    },
    {
      category: "words",
      categoryName: "Língua Portuguesa & Letras",
      categoryIcon: "📚",
      question: "Qual palavra abaixo RIMA com a palavra CORAÇÃO?",
      options: ["Castelo", "Balão", "Livro", "Janela"],
      answer: 1,
      explanation: "Coração e Balão terminam com o som -ÃO!"
    },
    {
      category: "words",
      categoryName: "Língua Portuguesa & Letras",
      categoryIcon: "📚",
      question: "Com qual vogal se inicia a palavra ESCOLA?",
      options: ["A", "E", "I", "O"],
      answer: 1,
      explanation: "E de Escola, Esperança e Estudo!"
    },
    {
      category: "words",
      categoryName: "Língua Portuguesa & Letras",
      categoryIcon: "📚",
      question: "Qual é o plural correto da palavra FLOR?",
      options: ["Flores", "Flors", "Florzinhas", "Floreses"],
      answer: 0,
      explanation: "Uma flor, muitas flores!"
    },

    // ── 3. CIÊNCIAS & NATUREZA ──
    {
      category: "science",
      categoryName: "Ciências & Natureza",
      categoryIcon: "🌱",
      question: "Qual destes animais vive na água e respira por brânquias?",
      options: ["Gato", "Peixe", "Coelho", "Cachorro"],
      answer: 1,
      explanation: "Os peixes vivem na água e respiram por brânquias!"
    },
    {
      category: "science",
      categoryName: "Ciências & Natureza",
      categoryIcon: "🌱",
      question: "Quantos dias tem uma semana inteira?",
      options: ["5 dias", "6 dias", "7 dias", "8 dias"],
      answer: 2,
      explanation: "A semana tem 7 dias (começa no domingo e termina no sábado)!"
    },
    {
      category: "science",
      categoryName: "Ciências & Natureza",
      categoryIcon: "🌱",
      question: "Qual órgão do nosso corpo usamos para enxergar?",
      options: ["Ouvido", "Nariz", "Olhos", "Boca"],
      answer: 2,
      explanation: "Os olhos são responsáveis pelo sentido da visão!"
    },
    {
      category: "science",
      categoryName: "Ciências & Natureza",
      categoryIcon: "🌱",
      question: "O que as plantinhas precisam para crescerem fortes e verdes?",
      options: ["Refrigerante", "Água e Luz Solar", "Doces", "Escuridão"],
      answer: 1,
      explanation: "As plantas fazem fotossíntese com água, luz solar e nutrientes do solo!"
    },

    // ── 4. RACIOCÍNIO LÓGICO & CHARADAS ──
    {
      category: "logic",
      categoryName: "Raciocínio & Charadas",
      categoryIcon: "🧩",
      question: "O que é, o que é? Cai em pé e corre deitada?",
      options: ["A chuva", "A bola", "O sapato", "O vento"],
      answer: 0,
      explanation: "A chuva! Gotas caem em pé e a enxurrada corre deitada!"
    },
    {
      category: "logic",
      categoryName: "Raciocínio & Charadas",
      categoryIcon: "🧩",
      question: "Se você está numa corrida e ultrapassa o 2º colocado, em que lugar fica?",
      options: ["1º lugar", "2º lugar", "3º lugar", "4º lugar"],
      answer: 1,
      explanation: "Você assume o 2º lugar que ele ocupava!"
    },
    {
      category: "logic",
      categoryName: "Raciocínio & Charadas",
      categoryIcon: "🧩",
      question: "Qual figura geométrica possui exatamente 3 lados e 3 vértices?",
      options: ["Quadrado", "Círculo", "Triângulo", "Retângulo"],
      answer: 2,
      explanation: "O triângulo (tri = três) possui 3 lados e 3 vértices!"
    },
    {
      category: "logic",
      categoryName: "Raciocínio & Charadas",
      categoryIcon: "🧩",
      question: "Se um ninja tem 4 pergaminhos em cada mão, quantos pergaminhos tem no total?",
      options: ["4", "6", "8", "10"],
      answer: 2,
      explanation: "4 + 4 = 8 pergaminhos secretos!"
    }
  ];

  // Estado do Quiz Ativo
  const state = {
    isRunning: false,
    questions: [],
    currentIndex: 0,
    score: 0,
    streak: 0,
    timerSeconds: 20,
    timerMax: 20,
    timerInterval: null,
    isAnswered: false,
    selectedOption: null
  };

  // ── SÍNTESE DE ÁUDIO EXCLUSIVA DO QUIZ (WEB AUDIO API) ──
  function getAudioContext() {
    if (typeof window !== 'undefined') {
      if (window.InteractiveTablet && typeof window.InteractiveTablet.getAudioContext === 'function') {
        return window.InteractiveTablet.getAudioContext();
      }
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        if (!state._audioCtx) state._audioCtx = new AudioContextClass();
        if (state._audioCtx.state === 'suspended') state._audioCtx.resume();
        return state._audioCtx;
      }
    }
    return null;
  }

  function playTickSound() {
    try {
      const actx = getAudioContext();
      if (!actx) return;
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, actx.currentTime);
      gain.gain.setValueAtTime(0.04, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + 0.03);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start();
      osc.stop(actx.currentTime + 0.03);
    } catch (e) {}
  }

  function playCorrectSound() {
    try {
      const actx = getAudioContext();
      if (!actx) return;
      const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
      notes.forEach((freq, idx) => {
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, actx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.12, actx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(actx.destination);
        osc.start(actx.currentTime + idx * 0.08);
        osc.stop(actx.currentTime + idx * 0.08 + 0.35);
      });
    } catch (e) {}
  }

  function playWrongSound() {
    try {
      const actx = getAudioContext();
      if (!actx) return;
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, actx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, actx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.08, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start();
      osc.stop(actx.currentTime + 0.25);
    } catch (e) {}
  }

  // ── SELEÇÃO E EMBARALHAMENTO DE PERGUNTAS ──
  function selectQuestions(category = "all", count = 5) {
    let pool = QUESTION_BANK;
    if (category && category !== "all") {
      const filtered = QUESTION_BANK.filter(q => q.category === category);
      if (filtered.length > 0) pool = filtered;
    }

    // Embaralhar (Fisher-Yates)
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }

  // ── CONTROLE DO JOGO ──
  function startQuiz(category = "all") {
    state.isRunning = true;
    state.questions = selectQuestions(category, 5);
    state.currentIndex = 0;
    state.score = 0;
    state.streak = 0;
    state.isAnswered = false;
    state.selectedOption = null;

    renderQuizView();
    startTimer();
  }

  function startTimer() {
    clearInterval(state.timerInterval);
    state.timerSeconds = state.timerMax;
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      if (state.timerSeconds > 0 && !state.isAnswered) {
        state.timerSeconds--;
        if (state.timerSeconds <= 5 && state.timerSeconds > 0) {
          playTickSound();
        }
        updateTimerDisplay();
      } else if (state.timerSeconds <= 0 && !state.isAnswered) {
        clearInterval(state.timerInterval);
        handleTimeOut();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerText = document.getElementById("quiz-timer-text");
    const timerBar = document.getElementById("quiz-timer-bar");
    if (timerText) timerText.textContent = `${state.timerSeconds}s`;
    if (timerBar) {
      const pct = (state.timerSeconds / state.timerMax) * 100;
      timerBar.style.width = `${pct}%`;
      if (state.timerSeconds <= 5) {
        timerBar.className = "h-full bg-rose-500 transition-all duration-300";
      } else if (state.timerSeconds <= 10) {
        timerBar.className = "h-full bg-amber-500 transition-all duration-300";
      } else {
        timerBar.className = "h-full bg-indigo-500 transition-all duration-300";
      }
    }
  }

  function handleTimeOut() {
    state.isAnswered = true;
    state.streak = 0;
    playWrongSound();
    highlightAnswers(-1);
    showFeedbackCard(false, "Tempo esgotado! Não desanime, vamos para a próxima!");
  }

  function answerQuestion(index) {
    if (state.isAnswered) return;
    state.isAnswered = true;
    clearInterval(state.timerInterval);

    state.selectedOption = index;
    const currentQ = state.questions[state.currentIndex];
    const isCorrect = (index === currentQ.answer);

    if (isCorrect) {
      state.score++;
      state.streak++;
      playCorrectSound();
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 60,
          spread: 50,
          origin: { y: 0.6 }
        });
      }
    } else {
      state.streak = 0;
      playWrongSound();
    }

    highlightAnswers(index);
    showFeedbackCard(isCorrect, isCorrect ? "RESPOSTA CORRETA! Parabéns à turma!" : "Quase lá! Veja a resposta correta destacada em verde.");
  }

  function highlightAnswers(selectedIndex) {
    const currentQ = state.questions[state.currentIndex];
    document.querySelectorAll(".quiz-option-btn").forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQ.answer) {
        btn.classList.remove("border-slate-200", "bg-white", "hover:bg-slate-50");
        btn.classList.add("border-emerald-500", "bg-emerald-50", "text-emerald-950", "ring-4", "ring-emerald-300");
      } else if (idx === selectedIndex) {
        btn.classList.remove("border-slate-200", "bg-white", "hover:bg-slate-50");
        btn.classList.add("border-rose-400", "bg-rose-50", "text-rose-900");
      } else {
        btn.classList.add("opacity-40");
      }
    });
  }

  function showFeedbackCard(isCorrect, message) {
    const feedbackBox = document.getElementById("quiz-feedback-box");
    const feedbackText = document.getElementById("quiz-feedback-text");
    const feedbackExpl = document.getElementById("quiz-feedback-explanation");
    const btnNext = document.getElementById("quiz-btn-next");

    if (feedbackBox) feedbackBox.classList.remove("hidden");
    if (feedbackText) {
      feedbackText.innerHTML = isCorrect ? `🎉 ${message}` : `💡 ${message}`;
      feedbackText.className = isCorrect ? "text-base font-extrabold text-emerald-700" : "text-base font-bold text-amber-800";
    }
    if (feedbackExpl) {
      const currentQ = state.questions[state.currentIndex];
      feedbackExpl.textContent = currentQ.explanation || "";
    }
    if (btnNext) btnNext.classList.remove("hidden");
  }

  function nextQuestion() {
    state.currentIndex++;
    if (state.currentIndex >= state.questions.length) {
      finishQuiz();
    } else {
      state.isAnswered = false;
      state.selectedOption = null;
      renderQuizView();
      startTimer();
    }
  }

  function finishQuiz() {
    clearInterval(state.timerInterval);
    state.isRunning = false;

    if (window.InteractiveTablet && typeof window.InteractiveTablet.playVictorySound === 'function') {
      window.InteractiveTablet.playVictorySound();
    }
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 }
      });
    }

    renderFinishedView();
  }

  // ── RENDERIZAÇÃO DA INTERFACE DO QUIZ ──
  function renderQuizView() {
    const container = document.getElementById("classroom-quiz-content");
    if (!container) return;

    const currentQ = state.questions[state.currentIndex];
    const total = state.questions.length;
    const mascotKey = window.KiddoApp?.getCurrentMascot?.() || "hikari";
    const mascotSvg = (window.ANIME_MASCOTS && window.ANIME_MASCOTS[mascotKey]) ? window.ANIME_MASCOTS[mascotKey].svg : "🌸";

    container.innerHTML = `
      <!-- Cabeçalho do Quiz: Placar e Categoria -->
      <div class="flex items-center justify-between border-b border-indigo-100 pb-3 mb-4">
        <div class="flex items-center gap-2">
          <span class="text-2xl">${currentQ.categoryIcon}</span>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 font-heading">
              ${currentQ.categoryName}
            </span>
            <div class="text-xs text-slate-500 font-semibold">
              Pergunta ${state.currentIndex + 1} de ${total}
            </div>
          </div>
        </div>

        <!-- Placar e Estrelas -->
        <div class="flex items-center gap-4">
          <div class="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-xs">
            <span class="text-base">⭐</span>
            <span class="text-sm font-extrabold text-amber-900 font-heading">Acertos: ${state.score}/${total}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-500">Tempo:</span>
            <span id="quiz-timer-text" class="text-base font-extrabold font-mono text-indigo-600">20s</span>
          </div>
        </div>
      </div>

      <!-- Barra de Progresso do Tempo -->
      <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-6 shadow-inner">
        <div id="quiz-timer-bar" class="h-full bg-indigo-500 transition-all duration-300" style="width: 100%"></div>
      </div>

      <!-- Card Central da Pergunta (Grande e Legível para Projetor) -->
      <div class="bg-gradient-to-r from-indigo-50/70 via-purple-50/50 to-pink-50/60 p-6 rounded-3xl border-2 border-indigo-200/80 mb-6 shadow-xs flex items-center gap-5">
        <div class="w-20 h-20 flex-shrink-0 bg-white rounded-2xl p-2 shadow-xs border border-indigo-100 hidden sm:block">
          ${mascotSvg}
        </div>
        <div class="flex-1">
          <span class="text-xs font-bold text-indigo-500 uppercase tracking-widest block mb-1">Desafio Soberano:</span>
          <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading leading-snug">
            ${currentQ.question}
          </h2>
        </div>
      </div>

      <!-- Grade de 4 Opções de Resposta (A, B, C, D) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
        ${currentQ.options.map((opt, idx) => {
          const letter = ["A", "B", "C", "D"][idx];
          return `
            <button type="button" class="quiz-option-btn p-4 rounded-2xl border-2 border-slate-200 bg-white hover:bg-indigo-50/50 hover:border-indigo-400 text-left transition-all flex items-center gap-3.5 group shadow-xs active:scale-[0.98]" onclick="window.ClassroomQuizModule.answerQuestion(${idx})">
              <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white text-slate-700 font-extrabold font-heading flex items-center justify-center text-sm transition-colors">
                ${letter}
              </span>
              <span class="text-base font-bold text-slate-800 flex-1">
                ${opt}
              </span>
              <span class="text-[11px] font-mono text-slate-300 group-hover:text-indigo-400 font-semibold">[${idx + 1}]</span>
            </button>
          `;
        }).join("")}
      </div>

      <!-- Caixa de Feedback e Explicação (Aparece após resposta) -->
      <div id="quiz-feedback-box" class="hidden p-4 rounded-2xl bg-white border-2 border-indigo-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex flex-col">
          <div id="quiz-feedback-text" class="text-sm font-bold text-slate-800"></div>
          <p id="quiz-feedback-explanation" class="text-xs text-slate-500 font-medium mt-0.5"></p>
        </div>
        <button id="quiz-btn-next" type="button" class="hidden px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold rounded-xl shadow-md flex items-center gap-2 transition-all active:scale-95 text-sm" onclick="window.ClassroomQuizModule.nextQuestion()">
          Próxima Pergunta <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  function renderFinishedView() {
    const container = document.getElementById("classroom-quiz-content");
    if (!container) return;

    const total = state.questions.length;
    const pct = Math.round((state.score / total) * 100);
    const mascotKey = window.KiddoApp?.getCurrentMascot?.() || "hikari";
    const mascotSvg = (window.ANIME_MASCOTS && window.ANIME_MASCOTS[mascotKey]) ? window.ANIME_MASCOTS[mascotKey].svg : "🌸";

    let medal = "🥇 MESTRE DO SABER";
    let medalColor = "from-amber-400 to-amber-600";
    if (pct < 60) {
      medal = "🎖️ APRENDIZ GUERREIRO";
      medalColor = "from-indigo-400 to-purple-600";
    }

    container.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center py-6 px-4">
        <div class="w-28 h-28 my-2 animate-bounce">
          ${mascotSvg}
        </div>

        <span class="px-4 py-1.5 rounded-full bg-gradient-to-r ${medalColor} text-white font-extrabold text-xs tracking-wider uppercase shadow-md my-2">
          ${medal}
        </span>

        <h2 class="text-3xl font-extrabold font-heading text-slate-900 mt-2">
          Quiz Show Concluído com Sucesso!
        </h2>
        <p class="text-sm font-medium text-slate-600 max-w-md my-1">
          A turma mostrou honra, foco e sabedoria em cada resposta!
        </p>

        <!-- Placar Final em Destaque -->
        <div class="grid grid-cols-2 gap-4 my-6 w-full max-w-sm">
          <div class="bg-indigo-50 border-2 border-indigo-200 p-4 rounded-2xl">
            <span class="text-xs font-bold text-indigo-600 uppercase block">Acertos Totais</span>
            <span class="text-3xl font-extrabold text-indigo-950 font-heading">${state.score} / ${total}</span>
          </div>
          <div class="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl">
            <span class="text-xs font-bold text-emerald-600 uppercase block">Aproveitamento</span>
            <span class="text-3xl font-extrabold text-emerald-900 font-heading">${pct}%</span>
          </div>
        </div>

        <!-- Botões de Ação -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button type="button" class="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2" onclick="window.ClassroomQuizModule.startQuiz('all')">
            <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Jogar Novamente
          </button>
          <button type="button" class="px-5 py-3 rounded-xl border-2 border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-sm transition-all" onclick="window.ClassroomQuizModule.closeModal()">
            Voltar à Lousa Digital
          </button>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // ── MODAL ABERTO/FECHADO ──
  function openModal(category = "all") {
    const modal = document.getElementById("classroom-quiz-modal");
    if (modal) modal.classList.remove("hidden");
    startQuiz(category);
  }

  function closeModal() {
    clearInterval(state.timerInterval);
    state.isRunning = false;
    const modal = document.getElementById("classroom-quiz-modal");
    if (modal) modal.classList.add("hidden");
  }

  // Atalhos de Teclado (1, 2, 3, 4 para A, B, C, D e Enter para Próxima)
  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener("keydown", (e) => {
      const modal = document.getElementById("classroom-quiz-modal");
      if (!modal || modal.classList.contains("hidden")) return;

      if (!state.isAnswered) {
        if (e.key === "1" || e.key === "a" || e.key === "A") answerQuestion(0);
        else if (e.key === "2" || e.key === "b" || e.key === "B") answerQuestion(1);
        else if (e.key === "3" || e.key === "c" || e.key === "C") answerQuestion(2);
        else if (e.key === "4" || e.key === "d" || e.key === "D") answerQuestion(3);
      } else {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          nextQuestion();
        }
      }
    });
  }

  return {
    QUESTION_BANK,
    state,
    selectQuestions,
    startQuiz,
    answerQuestion,
    nextQuestion,
    openModal,
    closeModal,
    playTickSound,
    playCorrectSound,
    playWrongSound
  };
});
