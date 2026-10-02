/**
 * DiagnosticAssessmentGenerator - Ficha de Avaliação Diagnóstica e Sondagem BNCC
 * Ensino Soberano Kids (Anime Edition)
 * Gera instrumentos avaliativos oficiais para professores, com rubricas curriculares,
 * gráfico radar de competências, parecer descritivo e homologação pedagógica.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.DiagnosticAssessmentGenerator = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const RUBRIC_AXES = [
    {
      id: "linguagem",
      nome: "Linguagem, Letramento & Alfabetização",
      icon: "📚",
      color: "#4f46e5",
      skills: [
        { code: "EF01LP02", desc: "Reconhece o sistema alfabético e a correspondência grafema-fonema." },
        { code: "EF01LP08", desc: "Identifica e segmenta palavras em sílabas com autonomia." },
        { code: "EF01LP16", desc: "Lê e compreende palavras e pequenas frases de forma contextualizada." }
      ]
    },
    {
      id: "matematica",
      nome: "Pensamento Lógico-Matemático",
      icon: "🧮",
      color: "#059669",
      skills: [
        { code: "EF01MA01", desc: "Associa contagem de elementos a quantidades numéricas e registros." },
        { code: "EF01MA06", desc: "Compreende fatos básicos da adição e cálculo mental estruturado." },
        { code: "EF02MA06", desc: "Interpreta pequenos enunciados e elabora estratégias de solução." }
      ]
    },
    {
      id: "cognitivo",
      nome: "Raciocínio Espacial, Lógica & Foco",
      icon: "🧩",
      color: "#d97706",
      skills: [
        { code: "EF01MA09", desc: "Identifica padrões, sequências lógicas e regularidades de figuras." },
        { code: "EF01MA12", desc: "Orienta-se em malhas, labirintos e esquemas espaciais com precisão." },
        { code: "EI03ET07", desc: "Demonstra atenção sustentada, dedução analítica e persistência motora." }
      ]
    },
    {
      id: "socioemocional",
      nome: "Autonomia & Desenvolvimento Socioemocional",
      icon: "🌟",
      color: "#dc2626",
      skills: [
        { code: "EI03EO01", desc: "Demonstra autoconfiança na execução de tarefas e desafios novos." },
        { code: "EI03CG05", desc: "Coordenação motora fina no manejo de lápis, traçado e pintura limpa." },
        { code: "EI03EO03", desc: "Compreende instruções coletivas, regras de convivência e cooperação." }
      ]
    }
  ];

  function generateRadarSvg(scores = [85, 90, 80, 95], size = 150) {
    const cx = size / 2;
    const cy = size / 2;
    const r = (size / 2) - 18;
    const angles = [
      -Math.PI / 2,         // Top: Linguagem
      0,                    // Right: Matemática
      Math.PI / 2,          // Bottom: Cognitivo
      Math.PI               // Left: Socioemocional
    ];

    // Círculos de referência (3 níveis)
    let gridCircles = "";
    [0.33, 0.66, 1.0].forEach(level => {
      gridCircles += `<circle cx="${cx}" cy="${cy}" r="${r * level}" fill="none" stroke="#cbd5e1" stroke-dasharray="2,2" stroke-width="1"/>`;
    });

    // Eixos
    let axisLines = "";
    angles.forEach(ang => {
      const x = cx + Math.cos(ang) * r;
      const y = cy + Math.sin(ang) * r;
      axisLines += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#94a3b8" stroke-width="1.2"/>`;
    });

    // Polígono de Pontuação
    const points = angles.map((ang, i) => {
      const factor = (scores[i] || 75) / 100;
      const px = cx + Math.cos(ang) * (r * factor);
      const py = cy + Math.sin(ang) * (r * factor);
      return `${px.toFixed(1)},${py.toFixed(1)}`;
    }).join(" ");

    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
        ${gridCircles}
        ${axisLines}
        <polygon points="${points}" fill="rgba(79, 70, 229, 0.25)" stroke="#4f46e5" stroke-width="2.5"/>
        ${angles.map((ang, i) => {
          const factor = (scores[i] || 75) / 100;
          const px = cx + Math.cos(ang) * (r * factor);
          const py = cy + Math.sin(ang) * (r * factor);
          return `<circle cx="${px}" cy="${py}" r="3.5" fill="#f43f5e" stroke="#ffffff" stroke-width="1.5"/>`;
        }).join("")}
      </svg>
    `;
  }

  function renderAssessmentSheet(options = {}) {
    const studentName = options.studentName || "Lucas Oliveira";
    const gradeClass = options.gradeClass || "1º Ano Fundamental";
    const teacherName = options.teacherName || "Prof. Responsável";
    const period = options.period || "1º Bimestre";
    const mascotKey = options.mascotKey || "hikari";

    const wl = (typeof window !== "undefined" && window.WhiteLabelModule) ? window.WhiteLabelModule.getSettings() : {};
    const schoolName = options.schoolName || wl.schoolName || "Ensino Soberano";
    const logoHtml = (wl.logoDataUrl && wl.showSchoolLogo) ?
      `<img src="${wl.logoDataUrl}" class="h-6 w-auto max-w-[80px] object-contain mr-2 inline-block">` :
      `<span class="text-amber-500 mr-2 text-base">👑</span>`;

    const radarSvg = generateRadarSvg([85, 90, 80, 95], 140);

    let rubricRowsHtml = "";
    RUBRIC_AXES.forEach(axis => {
      rubricRowsHtml += `
        <div class="mb-2.5 p-2 bg-slate-50/70 border border-slate-200 rounded-xl">
          <div class="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
            <span class="text-[11px] font-extrabold text-slate-800 flex items-center gap-1">
              <span>${axis.icon}</span> ${axis.nome}
            </span>
            <span class="text-[9px] font-bold text-slate-500">Níveis: [ C | ED | EC ]</span>
          </div>
          <div class="grid grid-cols-1 gap-1 text-[10px]">
            ${axis.skills.map(s => `
              <div class="flex items-center justify-between py-0.5 border-b border-dashed border-slate-100 last:border-0">
                <span class="text-slate-600 flex-1 pr-2"><strong class="text-indigo-900">${s.code}:</strong> ${s.desc}</span>
                <div class="flex items-center gap-1.5 flex-shrink-0 font-bold font-mono">
                  <span class="w-5 h-5 border border-slate-300 rounded flex items-center justify-center bg-white text-[9px] text-slate-700" title="Consolidado">C</span>
                  <span class="w-5 h-5 border border-slate-300 rounded flex items-center justify-center bg-white text-[9px] text-slate-700" title="Em Desenvolvimento">ED</span>
                  <span class="w-5 h-5 border border-slate-300 rounded flex items-center justify-center bg-white text-[9px] text-slate-700" title="Em Construção">EC</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    });

    return `
      <article class="worksheet-paper flex flex-col justify-between">
        <div class="worksheet-frame flex flex-col justify-between p-6">
          
          <!-- Cabeçalho Institucional -->
          <div class="student-header border-b-2 border-dashed border-indigo-200 pb-3 mb-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                ${logoHtml}
                <div>
                  <h1 class="text-sm font-extrabold text-indigo-950 uppercase tracking-wide font-heading">
                    ${schoolName}
                  </h1>
                  <p class="text-[10px] text-slate-500 font-semibold">Instrumento de Avaliação Diagnóstica & Mapeamento BNCC</p>
                </div>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full">
                  Ficha Bimestral • ${period}
                </span>
              </div>
            </div>

            <!-- Dados do Aluno -->
            <div class="grid grid-cols-12 gap-2 text-xs font-semibold pt-2.5 mt-1 border-t border-slate-100">
              <div class="col-span-6 flex items-baseline gap-1">
                <span class="text-slate-600">Aluno(a):</span>
                <span class="font-extrabold text-indigo-950 flex-1 border-b border-dotted border-slate-400 pb-0.5">${studentName}</span>
              </div>
              <div class="col-span-3 flex items-baseline gap-1">
                <span class="text-slate-600">Turma:</span>
                <span class="font-bold text-slate-800 flex-1 border-b border-dotted border-slate-400 pb-0.5">${gradeClass}</span>
              </div>
              <div class="col-span-3 flex items-baseline gap-1">
                <span class="text-slate-600">Data:</span>
                <span class="dotted-line flex-1"></span>
              </div>
            </div>
          </div>

          <!-- Grade de Rubricas BNCC com Radar ao Lado -->
          <div class="grid grid-cols-12 gap-3 my-1 items-start">
            <div class="col-span-8 flex flex-col">
              ${rubricRowsHtml}
            </div>

            <!-- Coluna Lateral: Legenda e Radar Gráfico -->
            <div class="col-span-4 flex flex-col gap-2">
              <div class="bg-indigo-50/60 p-2.5 rounded-xl border border-indigo-200 flex flex-col items-center text-center">
                <span class="text-[10px] font-extrabold text-indigo-900 uppercase font-heading mb-1">Mapeamento de Habilidades</span>
                <div class="w-full flex justify-center py-1">
                  ${radarSvg}
                </div>
                <div class="flex flex-col gap-1 text-[8.5px] text-slate-600 text-left w-full mt-1 border-t border-indigo-100 pt-1">
                  <span class="flex items-center gap-1"><strong class="text-indigo-700">C:</strong> Consolidado (Domínio Pleno)</span>
                  <span class="flex items-center gap-1"><strong class="text-amber-700">ED:</strong> Em Desenvolvimento (Com Apoio)</span>
                  <span class="flex items-center gap-1"><strong class="text-rose-700">EC:</strong> Em Construção (Intervenção)</span>
                </div>
              </div>

              <!-- Carimbo e Homologação -->
              <div class="p-2 border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-between">
                <div class="text-[9px] text-slate-500 leading-tight">
                  <span>Avaliação Oficial</span><br>
                  <strong class="text-slate-700">Aprovado pelo Conselho</strong>
                </div>
                <div class="anime-hanko-stamp scale-75 origin-right">
                  SUGOI! 🌸<br>AVALIADO<br><span class="text-[6px] text-red-500 font-bold">${(schoolName).substring(0, 14).toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Parecer Descritivo do Professor -->
          <div class="p-2.5 bg-white border border-slate-300 rounded-xl flex flex-col gap-1 my-1">
            <span class="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1">
              <span>✍️</span> Síntese Pedagógica & Parecer Descritivo do Educador:
            </span>
            <div class="min-h-[50px] border-b border-dashed border-slate-300 py-1 flex flex-col justify-between text-[11px] text-slate-600 italic">
              <span>O(A) estudante demonstrou excelente empenho nas atividades cognitivas, destacando-se na compreensão das instruções e raciocínio lógico...</span>
              <div class="border-b border-dashed border-slate-200 w-full my-1"></div>
              <div class="border-b border-dashed border-slate-200 w-full my-1"></div>
            </div>
          </div>

          <!-- Rodapé de Assinaturas -->
          <div class="mt-auto pt-2 border-t-2 border-slate-200 flex justify-between items-end text-[10px] text-slate-600">
            <div class="flex flex-col items-center">
              <span class="dotted-line w-44"></span>
              <span class="font-bold text-slate-700 mt-0.5">Assinatura do(a) Professor(a)</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="dotted-line w-44"></span>
              <span class="font-bold text-slate-700 mt-0.5">Coordenação Pedagógica</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="dotted-line w-44"></span>
              <span class="font-bold text-slate-700 mt-0.5">Responsável Legal</span>
            </div>
          </div>

        </div>
      </article>
    `;
  }

  return {
    RUBRIC_AXES,
    generateRadarSvg,
    renderAssessmentSheet
  };
});
