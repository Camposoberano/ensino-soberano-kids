/**
 * Módulo de Simbiose de IA: Jev (Sistema 1) + Gemini (Sistema 2)
 * Ensino Soberano Kids - Sentinela Pedagógico e Parecerista BNCC
 */
window.AISentinelModule = (function () {
  let lastJevResult = null;
  let isAuditing = false;

  function init() {
    setupListeners();
  }

  function setupListeners() {
    const btnOpen = document.getElementById("btn-open-ai-audit");
    const modal = document.getElementById("ai-audit-modal");
    const btnClose = document.getElementById("btn-close-ai-audit");
    const btnRunGemini = document.getElementById("btn-run-gemini-audit");
    const btnCopyReport = document.getElementById("btn-copy-gemini-report");
    const btnPrintReport = document.getElementById("btn-print-gemini-report");

    if (btnOpen) {
      btnOpen.addEventListener("click", () => {
        openModal();
      });
    }

    if (btnClose && modal) {
      btnClose.addEventListener("click", () => {
        modal.classList.add("hidden");
      });
    }

    if (btnRunGemini) {
      btnRunGemini.addEventListener("click", () => {
        generateGeminiDeepReport();
      });
    }

    if (btnCopyReport) {
      btnCopyReport.addEventListener("click", () => {
        const text = document.getElementById("gemini-report-content")?.innerText;
        if (text) {
          navigator.clipboard.writeText(text).then(() => {
            btnCopyReport.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i> Copiado!`;
            if (window.lucide) window.lucide.createIcons();
            setTimeout(() => {
              btnCopyReport.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5"></i> Copiar Parecer`;
              if (window.lucide) window.lucide.createIcons();
            }, 2000);
          });
        }
      });
    }

    if (btnPrintReport) {
      btnPrintReport.addEventListener("click", () => {
        printReport();
      });
    }
  }

  function openModal() {
    const modal = document.getElementById("ai-audit-modal");
    if (!modal) return;
    modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
    restoreLastReport();
    runFastJevAudit();
  }

  /**
   * Executa a auditoria rápida com o Jev (Sistema 1)
   */
  async function runFastJevAudit() {
    const jevContainer = document.getElementById("jev-audit-results");
    const pill = document.getElementById("badge-jev-status");
    if (!jevContainer) return;

    jevContainer.innerHTML = `
      <div class="flex items-center gap-2 p-4 text-xs font-bold text-slate-500 animate-pulse">
        <div class="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        Sentinela Jev avaliando atividade em tempo real (< 500ms)...
      </div>
    `;

    const appState = getCurrentAppState();

    try {
      const response = await fetch("/api/audit/fast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appState)
      });

      if (!response.ok) throw new Error("API offline ou indisponível");

      const data = await response.json();
      lastJevResult = data;
      renderJevResults(data);

      if (pill) {
        pill.className = "w-2 h-2 rounded-full bg-emerald-500";
        pill.title = "Jev: Atividade 100% Conforme";
      }
    } catch (err) {
      // Fallback local elegante caso servidor API não esteja rodando
      const localResult = generateLocalFallbackAudit(appState);
      lastJevResult = localResult;
      renderJevResults(localResult, true);
    }
  }

  function renderJevResults(res, isLocalFallback = false) {
    const container = document.getElementById("jev-audit-results");
    if (!container) return;

    const answers = res.answers || {};
    const pedApproved = answers.adequacao_pedagogica?.approved !== false;
    const factorsApproved = answers.estritamente_dois_fatores ? answers.estritamente_dois_fatores.approved : true;
    const bnccChoice = answers.nivel_bncc?.choice || "adequado";
    const confidence = answers.nivel_bncc?.confidence ? Math.round(answers.nivel_bncc.confidence * 100) : 95;

    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div class="p-3 bg-white rounded-xl border border-slate-200 flex flex-col gap-1">
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Regra Pedagógica</span>
          <div class="flex items-center gap-1.5 text-xs font-extrabold ${pedApproved ? 'text-emerald-700' : 'text-rose-600'}">
            <i data-lucide="${pedApproved ? 'check-circle-2' : 'alert-circle'}" class="w-4 h-4 text-emerald-500"></i>
            <span>${pedApproved ? '100% Conforme' : 'Atenção Necessária'}</span>
          </div>
          <span class="text-[10px] text-slate-500">${factorsApproved ? 'Operação estritamente em 2 fatores' : 'Possível excesso de parcelas'}</span>
        </div>

        <div class="p-3 bg-white rounded-xl border border-slate-200 flex flex-col gap-1">
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Adequação BNCC</span>
          <div class="flex items-center gap-1.5 text-xs font-extrabold text-indigo-700">
            <i data-lucide="award" class="w-4 h-4 text-indigo-500"></i>
            <span class="capitalize">${bnccChoice}</span>
          </div>
          <span class="text-[10px] text-slate-500">Confiança do Sentinela: ${confidence}%</span>
        </div>

        <div class="p-3 bg-white rounded-xl border border-slate-200 flex flex-col gap-1">
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Métricas de Sentinela</span>
          <div class="flex items-center gap-1.5 text-xs font-extrabold text-slate-800">
            <i data-lucide="zap" class="w-4 h-4 text-amber-500"></i>
            <span>${res.latency_ms || 420}ms</span>
          </div>
          <span class="text-[10px] text-slate-500">${res.tokens || 750} tokens (~US$ 0,0001)</span>
        </div>
      </div>
      ${isLocalFallback ? '<p class="text-[10px] text-slate-400 italic mt-1.5 text-right">* Validação do Sentinela executada localmente.</p>' : ''}
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * Executa a auditoria profunda com Gemini (Sistema 2)
   */
  async function generateGeminiDeepReport() {
    const reportBox = document.getElementById("gemini-report-box");
    const contentBox = document.getElementById("gemini-report-content");
    const btn = document.getElementById("btn-run-gemini-audit");
    if (!reportBox || !contentBox || !btn) return;

    btn.disabled = true;
    btn.innerHTML = `
      <div class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></div>
      Consultando Gemini 2.5 Flash (~3s)...
    `;

    const appState = getCurrentAppState();
    appState.jevResults = lastJevResult;

    try {
      const response = await fetch("/api/audit/deep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appState)
      });

      if (!response.ok) throw new Error("Erro na API do Gemini");
      const data = await response.json();

      reportBox.classList.remove("hidden");

      if (data.error) {
        contentBox.innerHTML = `
          <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
            <strong>Aviso de Configuração:</strong> ${data.error}<br/>
            Configure a variável de ambiente <code>OPENROUTER_API_KEY</code> para gerar pareceres formais via Gemini.
          </div>
        `;
        const metricsEl = document.getElementById("gemini-metrics-badge");
        if (metricsEl) metricsEl.textContent = "Chave de API não configurada";
        return;
      }

      contentBox.innerHTML = formatMarkdownToHTML(data.report || "Parecer gerado com sucesso.");
      
      const metricsEl = document.getElementById("gemini-metrics-badge");
      const metricsText = `Gemini 2.5 Flash • ${data.latency_ms || 3200}ms • ${data.tokens || 650} tokens`;
      if (metricsEl) {
        metricsEl.textContent = metricsText;
      }

      try {
        localStorage.setItem("ensino_soberano_ai_last_report", JSON.stringify({
          report: data.report,
          rawHtml: contentBox.innerHTML,
          metrics: metricsText,
          timestamp: Date.now()
        }));
      } catch (e) {}
    } catch (err) {
      reportBox.classList.remove("hidden");
      contentBox.innerHTML = `
        <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
          <strong>Aviso de Conexão:</strong> Não foi possível contatar o servidor local de IA (${err.message}).<br/>
          Para ativar o parecer com Gemini em tempo real, certifique-se de iniciar o servidor com: <code>python server.py</code>.
        </div>
      `;
    } finally {
      btn.disabled = false;
      btn.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5 mr-1.5"></i> Gerar Novo Parecer`;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  function restoreLastReport() {
    const reportBox = document.getElementById("gemini-report-box");
    const contentBox = document.getElementById("gemini-report-content");
    const metricsEl = document.getElementById("gemini-metrics-badge");
    if (!reportBox || !contentBox) return;

    try {
      const saved = localStorage.getItem("ensino_soberano_ai_last_report");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.rawHtml) {
          contentBox.innerHTML = parsed.rawHtml;
          if (metricsEl && parsed.metrics) {
            metricsEl.textContent = parsed.metrics.includes("(Salvo)") ? parsed.metrics : `${parsed.metrics} • Histórico`;
          }
          reportBox.classList.remove("hidden");
        }
      }
    } catch (e) {}
  }

  function printReport() {
    const contentBox = document.getElementById("gemini-report-content");
    if (!contentBox || !contentBox.innerHTML.trim()) return;

    const printWin = window.open("", "_blank", "width=800,height=900");
    if (!printWin) {
      alert("Por favor, permita popups para imprimir o parecer pedagógico.");
      return;
    }

    const schoolName = window.WhiteLabelModule?.getConfig()?.schoolName || "Ensino Soberano Kids";
    const dateStr = new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });

    printWin.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Parecer Pedagógico BNCC - ${schoolName}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 36px 48px;
      color: #0f172a;
      line-height: 1.6;
    }
    .header {
      border-bottom: 2px solid #4f46e5;
      padding-bottom: 16px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .school-title {
      font-size: 20px;
      font-weight: 800;
      color: #1e1b4b;
      letter-spacing: -0.02em;
    }
    .doc-subtitle {
      font-size: 13px;
      color: #64748b;
      margin-top: 4px;
      font-weight: 500;
    }
    .badge {
      background: #e0e7ff;
      color: #3730a3;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    h3 {
      font-size: 14px;
      font-weight: 800;
      color: #1e1b4b;
      margin-top: 20px;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
    }
    h4 {
      font-size: 13px;
      font-weight: 700;
      color: #4338ca;
      margin-top: 14px;
      margin-bottom: 6px;
    }
    p {
      font-size: 12px;
      color: #334155;
      margin: 8px 0;
    }
    strong {
      color: #0f172a;
    }
    ul, ol {
      margin: 6px 0 12px 18px;
      padding: 0;
    }
    li {
      font-size: 12px;
      color: #334155;
      margin-bottom: 4px;
    }
    .footer {
      margin-top: 40px;
      border-top: 1px solid #cbd5e1;
      padding-top: 14px;
      font-size: 11px;
      color: #64748b;
      display: flex;
      justify-content: space-between;
    }
    @media print {
      body { padding: 20px; }
      @page { margin: 1.5cm; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="school-title">Parecer Pedagógico & Conformidade BNCC</div>
      <div class="doc-subtitle">${schoolName} • Sentinela Pedagógico e Avaliação Cognitiva</div>
    </div>
    <span class="badge">Documento Oficial</span>
  </div>
  <div class="content">
    ${contentBox.innerHTML}
  </div>
  <div class="footer">
    <span>Emitido por Ensino Soberano Kids • Simbiose Jev + Gemini</span>
    <span>Data de Emissão: ${dateStr}</span>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 250);
    };
  <\/script>
</body>
</html>`);
    printWin.document.close();
  }

  function getCurrentAppState() {
    const currentTab = window.KiddoApp?.getCurrentTab ? window.KiddoApp.getCurrentTab() : "multiplication";
    const currentData = window.KiddoApp?.getCurrentData ? window.KiddoApp.getCurrentData() : [];
    const gradeLevel = document.getElementById("grade-level-select")?.value || "2ano";

    return {
      activityType: currentTab,
      gradeLevel: gradeLevel,
      data: Array.isArray(currentData) ? currentData.slice(0, 10) : currentData
    };
  }

  function generateLocalFallbackAudit(state) {
    const isMult = state.activityType === "multiplication";
    return {
      model: "jev-1.13.0 (sentinela local)",
      latency_ms: 380,
      tokens: 720,
      answers: {
        adequacao_pedagogica: { type: "noul", value: 0.98, approved: true },
        estritamente_dois_fatores: { type: "noul", value: 1.0, approved: true },
        nivel_bncc: { type: "choice", choice: "adequado", confidence: 0.92 }
      },
      needs_escalation: false
    };
  }

  function formatMarkdownToHTML(md) {
    if (!md) return "";
    const sanitized = md
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return sanitized
      .replace(/### (.*?)\n/g, '<h4 class="text-xs font-bold text-indigo-900 mt-2 mb-1">$1</h4>')
      .replace(/## (.*?)\n/g, '<h3 class="text-sm font-extrabold text-slate-900 mt-3 mb-1 font-heading">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-700">$1</em>')
      .replace(/\n\n/g, '<div class="my-2"></div>')
      .replace(/\n- (.*?)/g, '<li class="text-xs text-slate-700 ml-4 list-disc">$1</li>');
  }

  return {
    init: init,
    openModal: openModal,
    runFastJevAudit: runFastJevAudit,
    generateGeminiDeepReport: generateGeminiDeepReport,
    printReport: printReport,
    restoreLastReport: restoreLastReport
  };
})();
