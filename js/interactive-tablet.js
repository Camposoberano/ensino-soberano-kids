/**
 * InteractiveTablet - Modo Tablet Interativo, Lousa Digital & Sintetizador de Áudio
 * Ensino Soberano Kids (Anime Edition)
 * Permite que a criança ou professor resolva qualquer atividade diretamente na tela via touch/mouse,
 * com canetas, marca-texto, borracha, síntese de áudio (Web Audio API) e leitura falada (Speech API).
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.InteractiveTablet = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  let isActive = false;
  let canvas = null;
  let ctx = null;
  let isDrawing = false;
  let lastPoint = null;
  let strokeHistory = []; // Para funcionalidade de Desfazer (Undo)
  let currentStroke = [];
  let audioCtx = null;

  // Estado atual das ferramentas
  const state = {
    currentTool: 'pencil', // pencil | blue_pen | red_pen | highlighter | eraser
    color: '#334155',
    lineWidth: 2.5,
    opacity: 0.85,
    soundEnabled: true
  };

  const TOOL_CONFIGS = {
    pencil: { color: '#334155', width: 2.5, opacity: 0.85, isEraser: false, name: 'Lápis Grafite' },
    blue_pen: { color: '#1d4ed8', width: 3.5, opacity: 1.0, isEraser: false, name: 'Caneta Azul' },
    red_pen: { color: '#dc2626', width: 3.5, opacity: 1.0, isEraser: false, name: 'Caneta Vermelha' },
    green_pen: { color: '#16a34a', width: 3.5, opacity: 1.0, isEraser: false, name: 'Caneta Verde' },
    pink_pen: { color: '#db2777', width: 3.5, opacity: 1.0, isEraser: false, name: 'Caneta Rosa' },
    brush: { color: '#8b5cf6', width: 12, opacity: 0.75, isEraser: false, name: 'Pincel de Pintura' },
    highlighter: { color: 'rgba(250, 204, 21, 0.45)', width: 18, opacity: 1.0, isEraser: false, name: 'Marca-Texto' },
    eraser: { color: '#000000', width: 24, opacity: 1.0, isEraser: true, name: 'Borracha Mágica' }
  };

  // ── SINTETIZADOR DE ÁUDIO NATIVO (WEB AUDIO API) ──
  function getAudioContext() {
    if (!audioCtx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type, duration, gainVal = 0.1, delay = 0) {
    if (!state.soundEnabled) return;
    try {
      const actx = getAudioContext();
      if (!actx) return;

      const osc = actx.createOscillator();
      const gain = actx.createGain();

      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, actx.currentTime + delay);

      gain.gain.setValueAtTime(gainVal, actx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(actx.destination);

      osc.start(actx.currentTime + delay);
      osc.stop(actx.currentTime + delay + duration);
    } catch (e) {
      // Navegadores sem suporte de áudio ignoram silenciosamente
    }
  }

  // Efeito sonoro: Toque sutil de ferramenta
  function playClickSound() {
    playTone(880, 'sine', 0.05, 0.04);
  }

  // Efeito sonoro: Início de traço suave
  function playStrokeSound() {
    playTone(520, 'triangle', 0.04, 0.02);
  }

  // Efeito sonoro: Fanfarra da Vitória Soberana (Arpeggio brilhante C5 - E5 - G5 - C6)
  function playVictorySound() {
    if (!state.soundEnabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      playTone(freq, 'triangle', 0.35, 0.15, idx * 0.1);
    });
    // Nota de brilho final
    if (typeof setTimeout === 'function') {
      setTimeout(() => {
        playTone(1318.51, 'sine', 0.6, 0.18, 0); // E6
      }, 450);
    }
  }

  // ── SÍNTESE DE VOZ (SPEECH SYNTHESIS API EM PT-BR) ──
  function speakText(text) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel(); // Para fala anterior se houver
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.95; // Velocidade acolhedora e clara para crianças
      utterance.pitch = 1.1; // Tom leve e alegre

      // Tenta selecionar voz feminina ou padrão brasileira
      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find(v => v.lang.startsWith('pt') || v.name.toLowerCase().includes('brazil') || v.name.toLowerCase().includes('portuguese'));
      if (ptVoice) {
        utterance.voice = ptVoice;
      }
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis não disponível:', e);
    }
  }

  function stopSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // ── GERENCIAMENTO DO CANVAS SOBRE A FOLHA ──
  function ensureCanvas() {
    if (canvas) return canvas;

    const paper = document.querySelector('.worksheet-paper');
    if (!paper) return null;

    canvas = document.createElement('canvas');
    canvas.id = 'tablet-drawing-canvas';
    canvas.className = 'tablet-overlay-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '30';
    canvas.style.touchAction = 'none'; // Impede rolagem indesejada ao desenhar
    canvas.style.cursor = 'crosshair';

    paper.style.position = 'relative';
    paper.appendChild(canvas);

    ctx = canvas.getContext('2d');
    resizeCanvas();

    // Eventos de Ponteiro (Mouse + Touch + Stylus)
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointercancel', handlePointerUp);

    window.addEventListener('resize', debounceResize);

    return canvas;
  }

  let resizeTimeout = null;
  function debounceResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (isActive) resizeCanvas(true);
    }, 150);
  }

  function resizeCanvas(preserveContent = false) {
    if (!canvas) return;
    const paper = document.querySelector('.worksheet-paper');
    if (!paper) return;

    let backupData = null;
    if (preserveContent && ctx && canvas.width > 0 && canvas.height > 0) {
      try {
        backupData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      } catch (e) {}
    }

    const rect = paper.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (backupData) {
      redrawFromHistory();
    }
  }

  function getCanvasPoint(evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  function handlePointerDown(evt) {
    if (!isActive) return;
    canvas.setPointerCapture(evt.pointerId);
    isDrawing = true;
    const pt = getCanvasPoint(evt);
    lastPoint = pt;

    currentStroke = {
      tool: state.currentTool,
      points: [pt]
    };

    playStrokeSound();

    // Desenha um ponto de início caso seja apenas um clique
    drawSegment(pt, pt, TOOL_CONFIGS[state.currentTool]);
  }

  function handlePointerMove(evt) {
    if (!isDrawing || !isActive) return;
    const currentPt = getCanvasPoint(evt);
    currentStroke.points.push(currentPt);

    drawSegment(lastPoint, currentPt, TOOL_CONFIGS[state.currentTool]);
    lastPoint = currentPt;
  }

  function handlePointerUp(evt) {
    if (!isDrawing) return;
    isDrawing = false;
    try {
      canvas.releasePointerCapture(evt.pointerId);
    } catch (e) {}

    if (currentStroke && currentStroke.points.length > 0) {
      saveStateForUndo();
    }
    currentStroke = null;
    lastPoint = null;
  }

  function drawSegment(p1, p2, cfg) {
    if (!ctx) return;
    ctx.save();
    if (cfg.isEraser) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = cfg.width;
      ctx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = cfg.color;
      ctx.lineWidth = cfg.width;
      ctx.globalAlpha = cfg.opacity;
    }

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.restore();
  }

  function saveStateForUndo() {
    if (!canvas || !ctx) return;
    if (strokeHistory.length >= 20) {
      strokeHistory.shift(); // Limita a 20 passos para manter memória leve
    }
    strokeHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  }

  function undo() {
    if (!ctx || strokeHistory.length === 0) return;
    playClickSound();
    strokeHistory.pop(); // Remove o estado atual
    if (strokeHistory.length > 0) {
      const prev = strokeHistory[strokeHistory.length - 1];
      ctx.putImageData(prev, 0, 0);
    } else {
      clearCanvas(false);
    }
  }

  function clearCanvas(recordUndo = true) {
    if (!canvas || !ctx) return;
    playClickSound();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (recordUndo) {
      strokeHistory = [];
    }
  }

  function redrawFromHistory() {
    if (!ctx || strokeHistory.length === 0) return;
    const last = strokeHistory[strokeHistory.length - 1];
    ctx.putImageData(last, 0, 0);
  }

  // ── SELEÇÃO DE FERRAMENTAS ──
  function setTool(toolName) {
    if (!TOOL_CONFIGS[toolName]) return;
    state.currentTool = toolName;
    playClickSound();

    // Atualiza botões ativos na UI
    document.querySelectorAll('.tablet-tool-btn').forEach(btn => {
      btn.classList.remove('ring-2', 'ring-indigo-600', 'bg-indigo-100', 'border-indigo-400');
      if (btn.dataset.tool === toolName) {
        btn.classList.add('ring-2', 'ring-indigo-600', 'bg-indigo-100', 'border-indigo-400');
      }
    });

    if (canvas) {
      canvas.style.cursor = toolName === 'eraser' ? 'cell' : 'crosshair';
    }
  }

  // ── ATIVAÇÃO E CONTROLE DO MODO TABLET ──
  function toggleTabletMode(forceState) {
    isActive = typeof forceState === 'boolean' ? forceState : !isActive;
    const toolbar = document.getElementById('tablet-floating-toolbar');
    const toggleBtn = document.getElementById('btn-tablet-mode');

    if (isActive) {
      ensureCanvas();
      if (canvas) canvas.style.display = 'block';
      if (toolbar) toolbar.classList.remove('hidden');
      if (toggleBtn) {
        toggleBtn.classList.add('bg-indigo-700', 'text-white', 'shadow-inner');
        toggleBtn.classList.remove('bg-white', 'text-slate-700');
      }
      playVictorySound();
    } else {
      if (canvas) canvas.style.display = 'none';
      if (toolbar) toolbar.classList.add('hidden');
      if (toggleBtn) {
        toggleBtn.classList.remove('bg-indigo-700', 'text-white', 'shadow-inner');
        toggleBtn.classList.add('bg-white', 'text-slate-700');
      }
      stopSpeech();
    }
    return isActive;
  }

  // ── LEITURA POR VOZ DA FOLHA ATUAL ──
  function readCurrentWorksheetVoice() {
    playClickSound();
    const title = document.getElementById('preview-title')?.innerText || 'Atividade Ensino Soberano';
    const instructions = document.getElementById('preview-instructions')?.innerText || '';
    const speech = document.getElementById('preview-mascot-speech')?.innerText || 'Dê o seu melhor!';

    const fullScript = `Atenção pequeno ninja! Hoje nossa missão é: ${title}. Instruções: ${instructions}. E lembre-se: ${speech}`;
    speakText(fullScript);
  }

  // ── CELEBRAÇÃO COM FANFARRA E CONFETES ──
  function celebrateActivity() {
    playVictorySound();
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#8b5cf6', '#f59e0b', '#10b981', '#3b82f6']
      });
    }
    const congratulationMsgs = [
      'Parabéns! Excelente trabalho, você é um verdadeiro ninja do saber!',
      'Sensacional! Você concluiu a atividade com honra e sabedoria Soberana!',
      'Incrível dedicação! Seu mascote está muito orgulhoso de você!'
    ];
    const msg = congratulationMsgs[Math.floor(Math.random() * congratulationMsgs.length)];
    speakText(msg);
  }

  return {
    state,
    ensureCanvas,
    setTool,
    undo,
    clearCanvas,
    toggleTabletMode,
    readCurrentWorksheetVoice,
    celebrateActivity,
    playVictorySound,
    playClickSound,
    speakText,
    stopSpeech,
    isActive: () => isActive
  };
});
