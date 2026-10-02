/**
 * Gerador de Diplomas de Mérito e Passaporte de Aventuras
 * Ensino Soberano Kids (Anime Edition)
 */
window.CertificateGenerator = (function () {

  function renderCertificate(studentName, courseTitle, mascotKey) {
    const name = studentName || "Super Aluno(a)";
    const title = courseTitle || "Mestre do Conhecimento & Raciocínio Lógico";
    const mascot = window.ANIME_MASCOTS[mascotKey] || window.ANIME_MASCOTS.hikari;
    const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

    return `
      <div class="worksheet-paper flex flex-col justify-between p-10 border-8 border-double border-amber-400 rounded-3xl bg-gradient-to-b from-amber-50/40 via-white to-pink-50/40 text-center relative overflow-hidden select-none">
        
        <!-- Marca d'água de fundo -->
        <div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span class="text-9xl font-extrabold text-amber-900 font-heading">👑 SOBERANO</span>
        </div>

        <!-- Cabeçalho do Diploma -->
        <div class="w-full flex justify-between items-center border-b-2 border-amber-300 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-2xl">👑</span>
            <span class="text-sm font-extrabold text-indigo-950 uppercase tracking-widest font-heading">Ensino Soberano</span>
          </div>
          <span class="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            DIPLOMA DE HONRA AO MÉRITO • 2026
          </span>
        </div>

        <!-- Título Principal -->
        <div class="my-4">
          <div class="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">Certificado Oficial de Conquista</div>
          <h1 class="text-4xl font-extrabold font-heading text-indigo-950 tracking-tight">
            CERTIFICADO DE MÉRITO
          </h1>
          <p class="text-xs text-slate-500 mt-1 font-medium">Reconhecimento oficial de excelência, dedicação e aprendizado</p>
        </div>

        <!-- Corpo do Certificado -->
        <div class="max-w-xl mx-auto my-2">
          <p class="text-sm text-slate-600 leading-relaxed">
            Certificamos com muito orgulho e alegria que o(a) brilhante estudante:
          </p>

          <!-- Nome do Aluno em Destaque -->
          <div class="my-4 py-2 border-b-2 border-dashed border-indigo-400">
            <span class="text-3xl font-extrabold text-indigo-900 font-heading tracking-wide">
              ${name}
            </span>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed">
            concluiu com louvor e entusiasmo todas as suas atividades pedagógicas no módulo:
          </p>
          <div class="text-base font-bold text-pink-700 font-heading my-1">
            " ${title} "
          </div>
          <p class="text-xs text-slate-500">
            demonstrando notável raciocínio lógico, foco e paixão pelo saber.
          </p>
        </div>

        <!-- Mascote em Destaque e Mensagem -->
        <div class="flex items-center justify-center gap-4 my-2">
          <div class="w-20 h-20 drop-shadow-md">
            ${mascot.svg}
          </div>
          <div class="anime-speech-bubble text-xs text-slate-700 font-bold max-w-xs text-left">
            "Parabéns! Sua determinação brilhou como uma estrela! Você é um verdadeiro herói do saber! 🌟"
          </div>
        </div>

        <!-- Assinaturas e Carimbo Hanko -->
        <div class="w-full grid grid-cols-3 gap-6 pt-6 border-t-2 border-dashed border-slate-300 items-end">
          <div class="flex flex-col items-center">
            <div class="w-36 border-b border-slate-400 mb-1"></div>
            <span class="text-[10px] font-bold text-slate-600">Professor(a) / Orientador(a)</span>
          </div>

          <div class="flex flex-col items-center justify-center">
            <!-- Selo Hanko de Ouro Soberano -->
            <div class="anime-hanko-stamp scale-95">
              SUGOI! 🌸<br>APROVADO<br><span class="text-[7px] text-red-500 font-bold">SOBERANO</span>
            </div>
            <span class="text-[9px] text-slate-400 mt-1">${today}</span>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-36 border-b border-slate-400 mb-1"></div>
            <span class="text-[10px] font-bold text-slate-600">Pais / Responsáveis</span>
          </div>
        </div>

      </div>
    `;
  }

  function renderPassport(studentName, mascotKey) {
    const name = studentName || "Aventureiro(a)";
    const mascot = window.ANIME_MASCOTS[mascotKey] || window.ANIME_MASCOTS.hikari;

    const missions = [
      { id: 1, title: "Caça-Palavras Ninja", icon: "🔍", desc: "Achar 10 palavras escondidas" },
      { id: 2, title: "Mestre da Adição", icon: "➕", desc: "Resolver 20 continhas armadas" },
      { id: 3, title: "Desafio da Subtração", icon: "➖", desc: "Concluir sem nenhum erro" },
      { id: 4, title: "Tabuada de Ouro", icon: "✖️", desc: "Dominar a tabela pitagórica" },
      { id: 5, title: "Detetive do Labirinto", icon: "🌀", desc: "Achar o caminho até a coroa" },
      { id: 6, title: "Guardião do Tempo", icon: "⏰", desc: "Ler os relógios analógicos" },
      { id: 7, title: "Mago dos Padrões", icon: "✨", desc: "Completar as sequências lógicas" },
      { id: 8, title: "Rei das Formas", icon: "🔷", desc: "Contar lados e vértices" },
      { id: 9, title: "Cientista do Corpo", icon: "👀", desc: "Conectar os 5 sentidos" },
      { id: 10, title: "Artista da Pintura", icon: "🎨", desc: "Colorir o desenho com capricho" },
      { id: 11, title: "Mestre do Origami", icon: "🦊", desc: "Dobrar seu primeiro origami" },
      { id: 12, title: "Campeão Soberano", icon: "🏆", desc: "Completar a apostila inteira" }
    ];

    let missionsHtml = "";
    missions.forEach(m => {
      missionsHtml += `
        <div class="p-3 border-2 border-dashed border-indigo-200 rounded-2xl bg-white shadow-sm flex flex-col items-center text-center justify-between min-h-[125px]">
          <div class="flex items-center justify-between w-full">
            <span class="text-[9px] font-bold text-slate-400">#${m.id}</span>
            <span class="text-lg">${m.icon}</span>
          </div>
          <div class="text-xs font-extrabold text-indigo-900 font-heading my-1">${m.title}</div>
          <div class="text-[10px] text-slate-400 mb-2">${m.desc}</div>
          <div class="w-10 h-10 border-2 border-dashed border-amber-400 rounded-full flex items-center justify-center text-xs font-bold text-amber-500 bg-amber-50/50">
            Selo
          </div>
        </div>
      `;
    });

    return `
      <div class="worksheet-paper flex flex-col justify-between p-8 border-4 border-indigo-200 rounded-3xl bg-slate-50 select-none">
        <div class="student-header flex items-center justify-between pb-2 border-b-2 border-dashed border-slate-200">
          <div class="flex items-center gap-2">
            <span class="text-xl">👑</span>
            <span class="text-sm font-extrabold text-indigo-950 font-heading uppercase">Ensino Soberano Kids</span>
          </div>
          <div class="text-xs font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
            PASSAPORTE DE CONQUISTAS 🌟
          </div>
        </div>

        <div class="flex items-center justify-between my-2 p-3 bg-white border border-indigo-100 rounded-2xl">
          <div class="flex items-center gap-3">
            <div class="w-14 h-14">${mascot.svg}</div>
            <div>
              <div class="text-xs text-slate-500 font-bold">Passaporte de: <span class="text-indigo-900 font-extrabold text-sm">${name}</span></div>
              <div class="text-[11px] text-slate-400">A cada atividade concluída, cole seu selo ou pinte com uma estrela!</div>
            </div>
          </div>
          <div class="text-right">
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">Meta: 12 Selos</span>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-3 my-3">
          ${missionsHtml}
        </div>

        <div class="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Ao completar todos os selos, solicite seu <strong>Diploma Oficial Soberano</strong>!</span>
          <span class="font-bold text-amber-600">⭐ ⭐ ⭐ ⭐ ⭐</span>
        </div>
      </div>
    `;
  }

  return {
    renderCertificate: renderCertificate,
    renderPassport: renderPassport
  };
})();
