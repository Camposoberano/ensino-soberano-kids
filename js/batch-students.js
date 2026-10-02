/**
 * BatchStudentsModule - Mala Direta Escolar e Geração em Massa por Lista de Alunos
 * Ensino Soberano Kids (Anime Edition)
 * Permite ao educador gerar coleções completas de Diplomas, Passaportes, Fichas de Avaliação
 * ou Capas de Cadernos personalizadas para uma turma inteira com 1 clique.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BatchStudentsModule = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  let isBatchRunning = false;

  function openBatchModal() {
    const modal = document.getElementById("batch-students-modal");
    if (modal) modal.classList.remove("hidden");
  }

  function closeBatchModal() {
    const modal = document.getElementById("batch-students-modal");
    if (modal) modal.classList.add("hidden");
  }

  function parseNamesList(text) {
    if (!text || typeof text !== "string") return [];
    return text
      .split("\n")
      .map(n => n.trim())
      .filter(n => n.length > 0);
  }

  function generateBatchPreview(namesInput, docType, titleVal, mascotKey) {
    const names = typeof namesInput === "string" ? parseNamesList(namesInput) : (Array.isArray(namesInput) ? namesInput : []);
    const doc = docType || "certificate";
    const mascot = mascotKey || "hikari";
    const title = titleVal || "Certificado de Mérito";

    return names.map(name => {
      let pageHtml = "";
      if (doc === "certificate" || doc === "diploma") {
        pageHtml = window.CertificateGenerator ? window.CertificateGenerator.renderCertificate(name, title, mascot) : "";
      } else if (doc === "passport") {
        pageHtml = window.CertificateGenerator ? window.CertificateGenerator.renderPassport(name, mascot) : "";
      } else if (doc === "diagnostic") {
        pageHtml = window.DiagnosticAssessmentGenerator ? window.DiagnosticAssessmentGenerator.renderAssessmentSheet({
          studentName: name,
          mascotKey: mascot
        }) : "";
      } else {
        pageHtml = `<div class="worksheet-paper"><h1>${name}</h1></div>`;
      }
      return `<div class="booklet-page folha-a4-preview mb-8 w-full flex justify-center">${pageHtml}</div>`;
    }).join("\n");
  }

  function generateBatchCollection() {
    if (isBatchRunning) return;

    const namesInput = document.getElementById("batch-names-input")?.value || "";
    const names = parseNamesList(namesInput);
    if (names.length === 0) {
      alert("Por favor, digite ou cole pelo menos o nome de um aluno para gerar a mala direta.");
      return;
    }

    const docType = document.getElementById("batch-doc-type")?.value || "certificate";
    const mascotKey = window.KiddoApp?.getCurrentMascot?.() || "hikari";
    const titleVal = document.getElementById("batch-custom-title")?.value || "Mestre do Conhecimento";

    const container = document.getElementById("batch-render-target");
    if (!container) return;
    container.innerHTML = "";

    const progressModal = document.getElementById("batch-progress-modal");
    const progressBar = document.getElementById("batch-progress-bar");
    const progressText = document.getElementById("batch-progress-text");
    if (progressModal) progressModal.classList.remove("hidden");

    isBatchRunning = true;

    function processStudent(index) {
      if (index >= names.length) {
        if (progressModal) progressModal.classList.add("hidden");
        document.getElementById("batch-view-modal")?.classList.remove("hidden");
        closeBatchModal();
        isBatchRunning = false;
        return;
      }

      const name = names[index];
      const pageWrapper = document.createElement("div");
      pageWrapper.className = "booklet-page mb-8 w-full flex justify-center";

      if (docType === "certificate") {
        pageWrapper.innerHTML = window.CertificateGenerator.renderCertificate(name, titleVal, mascotKey);
      } else if (docType === "passport") {
        pageWrapper.innerHTML = window.CertificateGenerator.renderPassport(name, mascotKey);
      } else if (docType === "diagnostic") {
        pageWrapper.innerHTML = window.DiagnosticAssessmentGenerator.renderAssessmentSheet({
          studentName: name,
          mascotKey: mascotKey
        });
      } else if (docType === "cover") {
        const wl = window.WhiteLabelModule ? window.WhiteLabelModule.getSettings() : {};
        pageWrapper.innerHTML = `
          <div class="worksheet-paper flex flex-col justify-between items-center text-center p-10 border-8 border-double border-pink-300 rounded-3xl bg-gradient-to-b from-pink-50/50 via-white to-purple-50/50">
            <div class="w-full flex justify-between items-center border-b-2 border-dashed border-pink-200 pb-3">
              <span class="text-sm font-extrabold uppercase text-indigo-900 font-heading">👑 ${wl.schoolName || "Ensino Soberano"}</span>
              <span class="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">Capa do Caderno</span>
            </div>
            <div class="my-4 flex flex-col items-center">
              <div class="w-36 h-36 my-2">${(window.ANIME_MASCOTS && window.ANIME_MASCOTS[mascotKey]) ? window.ANIME_MASCOTS[mascotKey].svg : "🌸"}</div>
              <h1 class="text-2xl font-extrabold font-heading text-slate-900">${titleVal}</h1>
            </div>
            <div class="w-full max-w-md bg-white border-2 border-indigo-100 rounded-2xl p-5 shadow-xs text-left text-xs">
              <div class="flex items-baseline gap-2 mb-2">
                <span class="font-bold text-slate-600">Aluno(a):</span>
                <span class="font-extrabold text-indigo-900 border-b-2 border-dotted border-slate-400 flex-1 pb-0.5 text-sm">${name}</span>
              </div>
              <div class="flex items-baseline gap-2">
                <span class="font-bold text-slate-600">Turma:</span>
                <span class="text-slate-800">${wl.gradeClass || "1º Ano"}</span>
              </div>
            </div>
            <div class="w-full pt-4 flex justify-between text-[11px] text-slate-400">
              <span>Ensino Soberano Kids</span>
              <div class="anime-hanko-stamp scale-75">SUGOI! 🌸<br>APROVADO</div>
            </div>
          </div>
        `;
      }

      container.appendChild(pageWrapper);

      const pct = Math.round(((index + 1) / names.length) * 100);
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressText) progressText.textContent = `Gerando documento ${index + 1} de ${names.length} (${name})...`;

      setTimeout(() => {
        processStudent(index + 1);
      }, 15);
    }

    processStudent(0);
  }

  function downloadBatchPDF() {
    const element = document.getElementById("batch-render-target");
    if (!element) return;

    const opt = {
      margin: 4,
      filename: "mala-direta-ensino-soberano.pdf",
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
    openModal: openBatchModal,
    closeModal: closeBatchModal,
    generate: generateBatchCollection,
    generateBatchPreview,
    downloadPDF: downloadBatchPDF,
    parseNamesList,
    parseNames: parseNamesList
  };
});
