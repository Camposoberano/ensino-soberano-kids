/**
 * BoardGameGenerator - Gerador de Jogos de Tabuleiro Pedagógicos A4
 * Ensino Soberano Kids (Anime Edition)
 * Cria jogos de tabuleiro imprimíveis com trilha de desafios matemáticos e de vocabulário,
 * peões de mascotes chibi e dado 3D recortável com abas para dobradura.
 * Suporta múltiplos temas: Ninja (Padrão), Reino Medieval, Espaço Cósmico e Safári Selvagem.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BoardGameGenerator = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const TRACK_TILES = [
    { num: 1, type: "start", label: "LARGADA 🚀", tip: "Comece a jornada!" },
    { num: 2, type: "normal", label: "2", tip: "" },
    { num: 3, type: "math", label: "3 ⚡", tip: "Resolva: 5 + 4 = ? (Se acertar, avance 1)" },
    { num: 4, type: "normal", label: "4", tip: "" },
    { num: 5, type: "word", label: "5 📜", tip: "Fale 2 palavras com a letra M!" },
    { num: 6, type: "portal", label: "6 🌀", tip: "Portal Secreto! Avance para a casa 8!" },
    { num: 7, type: "normal", label: "7", tip: "" },
    { num: 8, type: "math", label: "8 ⚡", tip: "Resolva: 12 - 5 = ? (Se errar, volte 1)" },
    { num: 9, type: "rest", label: "9 🌸", tip: "Descanso do Sensei: Jogue o dado de novo!" },
    { num: 10, type: "normal", label: "10", tip: "" },
    { num: 11, type: "word", label: "11 📜", tip: "Diga o nome de 3 frutas saudáveis!" },
    { num: 12, type: "normal", label: "12", tip: "" },
    { num: 13, type: "trap", label: "13 🪤", tip: "Labirinto de fumaça! Fique 1 rodada sem jogar." },
    { num: 14, type: "math", label: "14 ⚡", tip: "Resolva: 3 x 4 = ? (Avance 2 casas!)" },
    { num: 15, type: "normal", label: "15", tip: "" },
    { num: 16, type: "word", label: "16 📜", tip: "Fale uma rima divertida para 'CORAÇÃO'!" },
    { num: 17, type: "normal", label: "17", tip: "" },
    { num: 18, type: "portal", label: "18 🌀", tip: "Vento Ninja! Avance para a casa 20!" },
    { num: 19, type: "math", label: "19 ⚡", tip: "Resolva: 20 - 8 = ?" },
    { num: 20, type: "rest", label: "20 🌸", tip: "Energia total! Escolha um amigo para avançar 1." },
    { num: 21, type: "normal", label: "21", tip: "" },
    { num: 22, type: "word", label: "22 📜", tip: "Diga 3 animais que vivem na floresta!" },
    { num: 23, type: "challenge", label: "23 ⭐", tip: "Grande Desafio Final: Diga um elogio ao colega!" },
    { num: 24, type: "finish", label: "CHEGADA 👑", tip: "Parabéns! Mestre Soberano!" }
  ];

  const THEMES = {
    ninja: {
      id: "ninja",
      name: "Trilha da Sabedoria Ninja",
      defaultTitle: "A Trilha da Sabedoria Ninja",
      icon: "🥋",
      badgeText: "2 a 4 Ninjas • BNCC",
      badgeColor: "bg-indigo-50 border-indigo-200 text-indigo-700",
      diceLabel: "Dado Ninja para Montar",
      players: [
        { name: "Hikari", icon: "🌸", color: "indigo", border: "border-indigo-400", text: "text-indigo-900" },
        { name: "Ren", icon: "⚡", color: "pink", border: "border-pink-400", text: "text-pink-900" },
        { name: "Daiki", icon: "🛡️", color: "amber", border: "border-amber-400", text: "text-amber-900" },
        { name: "Yuki", icon: "🔮", color: "purple", border: "border-purple-400", text: "text-purple-900" }
      ],
      tiles: TRACK_TILES
    },
    medieval: {
      id: "medieval",
      name: "A Jornada pelo Reino Encantado",
      defaultTitle: "A Jornada pelo Reino Encantado",
      icon: "🏰",
      badgeText: "2 a 4 Aventureiros • BNCC",
      badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-700",
      diceLabel: "Dado Real para Montar",
      players: [
        { name: "Arthur", icon: "🗡️", color: "emerald", border: "border-emerald-400", text: "text-emerald-900" },
        { name: "Luna", icon: "✨", color: "purple", border: "border-purple-400", text: "text-purple-900" },
        { name: "Maya", icon: "🏹", color: "amber", border: "border-amber-400", text: "text-amber-900" },
        { name: "Taviel", icon: "🦅", color: "blue", border: "border-blue-400", text: "text-blue-900" }
      ],
      tiles: [
        { num: 1, type: "start", label: "PORTÃO 🏰", tip: "Partida do Castelo Real!" },
        { num: 2, type: "normal", label: "2", tip: "" },
        { num: 3, type: "math", label: "3 🛡️", tip: "Conte as tochas: 6 + 3 = ? (Avance 1 se acertar)" },
        { num: 4, type: "normal", label: "4", tip: "" },
        { num: 5, type: "word", label: "5 📜", tip: "Diga 2 palavras que rimam com 'CASTELO'!" },
        { num: 6, type: "portal", label: "6 ✨", tip: "Poção de Voo! Pule direto para a casa 8!" },
        { num: 7, type: "normal", label: "7", tip: "" },
        { num: 8, type: "math", label: "8 🛡️", tip: "Moedas de ouro: 15 - 6 = ? (Se errar, volte 1)" },
        { num: 9, type: "rest", label: "9 🍃", tip: "Fonte Mística: Beba da água e jogue de novo!" },
        { num: 10, type: "normal", label: "10", tip: "" },
        { num: 11, type: "word", label: "11 📜", tip: "Nomeie 3 seres mágicos de histórias!" },
        { num: 12, type: "normal", label: "12", tip: "" },
        { num: 13, type: "trap", label: "13 🕸️", tip: "Fosso do Dragão! Fique 1 rodada sem jogar." },
        { num: 14, type: "math", label: "14 🛡️", tip: "Cálculo real: 4 x 3 = ? (Avance 2 casas!)" },
        { num: 15, type: "normal", label: "15", tip: "" },
        { num: 16, type: "word", label: "16 📜", tip: "Fale 3 palavras que começam com a letra R!" },
        { num: 17, type: "normal", label: "17", tip: "" },
        { num: 18, type: "portal", label: "18 ✨", tip: "Espelho Encantado! Teleporte para a casa 20!" },
        { num: 19, type: "math", label: "19 🛡️", tip: "Equação dos Magos: 20 - 7 = ?" },
        { num: 20, type: "rest", label: "20 🍃", tip: "Festa na Taberna! Escolha um amigo para avançar 1." },
        { num: 21, type: "normal", label: "21", tip: "" },
        { num: 22, type: "word", label: "22 📜", tip: "Descreva um castelo fantástico em 3 palavras!" },
        { num: 23, type: "challenge", label: "23 👑", tip: "Desafio Nobre: Faça uma reverência digna de realeza!" },
        { num: 24, type: "finish", label: "TRONO 👑", tip: "Glória! Você conquistou o Reino Soberano!" }
      ]
    },
    space: {
      id: "space",
      name: "Missão Cósmica: Rumo às Estrelas",
      defaultTitle: "Missão Cósmica: Rumo às Estrelas",
      icon: "🚀",
      badgeText: "2 a 4 Tripulantes • BNCC",
      badgeColor: "bg-sky-50 border-sky-200 text-sky-700",
      diceLabel: "Dado Cósmico para Montar",
      players: [
        { name: "Leo", icon: "👨‍🚀", color: "sky", border: "border-sky-400", text: "text-sky-900" },
        { name: "Bit", icon: "🤖", color: "indigo", border: "border-indigo-400", text: "text-indigo-900" },
        { name: "Nova", icon: "🛸", color: "purple", border: "border-purple-400", text: "text-purple-900" },
        { name: "Zog", icon: "👾", color: "emerald", border: "border-emerald-400", text: "text-emerald-900" }
      ],
      tiles: [
        { num: 1, type: "start", label: "BASE 🚀", tip: "Contagem regressiva: 3, 2, 1... Lançamento!" },
        { num: 2, type: "normal", label: "2", tip: "" },
        { num: 3, type: "math", label: "3 🛰️", tip: "Coordenadas estelares: 7 + 5 = ? (Avance 1 se acertar)" },
        { num: 4, type: "normal", label: "4", tip: "" },
        { num: 5, type: "word", label: "5 📡", tip: "Fale 2 palavras que rimam com 'PLANETA'!" },
        { num: 6, type: "portal", label: "6 🌌", tip: "Dobra Espacial! Avance supersônico para a casa 8!" },
        { num: 7, type: "normal", label: "7", tip: "" },
        { num: 8, type: "math", label: "8 🛰️", tip: "Combustível de foguete: 18 - 9 = ? (Se errar, volte 1)" },
        { num: 9, type: "rest", label: "9 🛸", tip: "Gravidade Zero: Flutue livre e jogue o dado de novo!" },
        { num: 10, type: "normal", label: "10", tip: "" },
        { num: 11, type: "word", label: "11 📡", tip: "Nomeie 3 planetas do Sistema Solar!" },
        { num: 12, type: "normal", label: "12", tip: "" },
        { num: 13, type: "trap", label: "13 ☄️", tip: "Chuva de Meteoros! Espere 1 rodada no escudo." },
        { num: 14, type: "math", label: "14 🛰️", tip: "Cálculo orbital: 5 x 3 = ? (Avance 2 casas!)" },
        { num: 15, type: "normal", label: "15", tip: "" },
        { num: 16, type: "word", label: "16 📡", tip: "Soletrar a palavra 'ESTRELA' sem errar!" },
        { num: 17, type: "normal", label: "17", tip: "" },
        { num: 18, type: "portal", label: "18 🌌", tip: "Tubo de Hiperespaço! Pule para a casa 20!" },
        { num: 19, type: "math", label: "19 🛰️", tip: "Velocidade da luz: 25 - 10 = ?" },
        { num: 20, type: "rest", label: "20 🛸", tip: "Satélite amigo! Ajude outro jogador a avançar 1." },
        { num: 21, type: "normal", label: "21", tip: "" },
        { num: 22, type: "word", label: "22 📡", tip: "O que tem no espaço? Diga 3 coisas incríveis!" },
        { num: 23, type: "challenge", label: "23 ⭐", tip: "Comunicação Alien: Imite uma voz de robô espacial!" },
        { num: 24, type: "finish", label: "GALÁXIA 🌟", tip: "Vitória Intergaláctica! Conquistador do Cosmos!" }
      ]
    },
    safari: {
      id: "safari",
      name: "Grande Safári: Expedição Selvagem",
      defaultTitle: "Grande Safári: Expedição Selvagem",
      icon: "🦁",
      badgeText: "2 a 4 Exploradores • BNCC",
      badgeColor: "bg-amber-50 border-amber-200 text-amber-700",
      diceLabel: "Dado da Selva para Montar",
      players: [
        { name: "Maya", icon: "🧭", color: "amber", border: "border-amber-400", text: "text-amber-900" },
        { name: "Simba", icon: "🦁", color: "yellow", border: "border-yellow-400", text: "text-yellow-900" },
        { name: "Tufão", icon: "🐘", color: "emerald", border: "border-emerald-400", text: "text-emerald-900" },
        { name: "Pipo", icon: "🐒", color: "orange", border: "border-orange-400", text: "text-orange-900" }
      ],
      tiles: [
        { num: 1, type: "start", label: "JEEP 🚙", tip: "Suba no jipe da expedição! A aventura começou!" },
        { num: 2, type: "normal", label: "2", tip: "" },
        { num: 3, type: "math", label: "3 🐾", tip: "Pegadas na areia: 8 + 4 = ? (Avance 1 se acertar)" },
        { num: 4, type: "normal", label: "4", tip: "" },
        { num: 5, type: "word", label: "5 🌿", tip: "Imite o som de 2 animais da selva!" },
        { num: 6, type: "portal", label: "6 🛶", tip: "Rio Correnteza! Desça de canoa até a casa 8!" },
        { num: 7, type: "normal", label: "7", tip: "" },
        { num: 8, type: "math", label: "8 🐾", tip: "Bananas do macaco: 14 - 6 = ? (Se errar, volte 1)" },
        { num: 9, type: "rest", label: "9 🌴", tip: "Sombra do Baobá: Beba água de coco e jogue de novo!" },
        { num: 10, type: "normal", label: "10", tip: "" },
        { num: 11, type: "word", label: "11 🌿", tip: "Qual o maior animal terrestre? Responda!" },
        { num: 12, type: "normal", label: "12", tip: "" },
        { num: 13, type: "trap", label: "13 🐊", tip: "Pântano dos Crocodilos! Fique 1 rodada em silêncio." },
        { num: 14, type: "math", label: "14 🐾", tip: "Pássaros em bando: 3 x 5 = ? (Avance 2 casas!)" },
        { num: 15, type: "normal", label: "15", tip: "" },
        { num: 16, type: "word", label: "16 🌿", tip: "Diga 3 animais que têm listras ou manchas!" },
        { num: 17, type: "normal", label: "17", tip: "" },
        { num: 18, type: "portal", label: "18 🛶", tip: "Ponte Suspensa! Atravesse rápido para a casa 20!" },
        { num: 19, type: "math", label: "19 🐾", tip: "Contagem da manada: 30 - 12 = ?" },
        { num: 20, type: "rest", label: "20 🌴", tip: "Guia Generoso! Dê carona e avance 1 casa com colega." },
        { num: 21, type: "normal", label: "21", tip: "" },
        { num: 22, type: "word", label: "22 🌿", tip: "Qual animal é o 'Rei da Selva'? Rugir forte!" },
        { num: 23, type: "challenge", label: "23 ⭐", tip: "Desafio Ecológico: Fale uma atitude pró-natureza!" },
        { num: 24, type: "finish", label: "ACAMPAMENTO ⛺", tip: "Sensacional! Expedição completada com sucesso!" }
      ]
    }
  };

  function renderBoardSheet(options = {}) {
    const themeKey = options.theme || options.themeKey || "ninja";
    const currentTheme = THEMES[themeKey] || THEMES.ninja;
    const title = options.title || currentTheme.defaultTitle;
    const mascotKey = options.mascotKey || "hikari";
    const wl = (typeof window !== "undefined" && window.WhiteLabelModule) ? window.WhiteLabelModule.getSettings() : {};
    const schoolName = options.schoolName || wl.schoolName || "Ensino Soberano";

    const tilesToRender = currentTheme.tiles || TRACK_TILES;
    const playersToRender = currentTheme.players || THEMES.ninja.players;

    let tilesHtml = "";
    tilesToRender.forEach(tile => {
      let bgStyle = "bg-white border-slate-300 text-slate-800";
      let badgeStyle = "bg-slate-100 text-slate-700";

      if (tile.type === "start") {
        bgStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-extrabold ring-2 ring-emerald-300";
      } else if (tile.type === "finish") {
        bgStyle = "bg-amber-100 border-amber-400 text-amber-950 font-extrabold ring-2 ring-amber-400";
      } else if (tile.type === "math") {
        bgStyle = "bg-indigo-50 border-indigo-300 text-indigo-900";
        badgeStyle = "bg-indigo-200 text-indigo-800";
      } else if (tile.type === "word") {
        bgStyle = "bg-pink-50 border-pink-300 text-pink-900";
        badgeStyle = "bg-pink-200 text-pink-800";
      } else if (tile.type === "portal") {
        bgStyle = "bg-purple-100 border-purple-400 text-purple-900";
      } else if (tile.type === "trap") {
        bgStyle = "bg-rose-50 border-rose-300 text-rose-900";
      }

      tilesHtml += `
        <div class="relative p-1.5 rounded-xl border-2 ${bgStyle} flex flex-col justify-between shadow-xs min-h-[58px]">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-extrabold ${badgeStyle} px-1.5 py-0.2 rounded-md">${tile.label}</span>
          </div>
          <p class="text-[8px] font-medium leading-tight mt-0.5 line-clamp-2">${tile.tip}</p>
        </div>
      `;
    });

    let playersHtml = playersToRender.map(p => `
      <div class="flex flex-col items-center p-1 bg-white border border-dashed ${p.border} rounded-lg text-center min-w-[42px]">
        <span class="text-base">${p.icon}</span>
        <span class="text-[7.5px] font-bold ${p.text}">${p.name}</span>
        <span class="text-[6px] text-slate-400 border-t border-slate-200 w-full mt-0.5">Dobre aqui</span>
      </div>
    `).join("");

    return `
      <article class="worksheet-paper flex flex-col justify-between">
        <div class="worksheet-frame flex flex-col justify-between p-5">
          
          <!-- Cabeçalho do Jogo de Tabuleiro -->
          <div class="student-header border-b-2 border-dashed border-indigo-200 pb-2 mb-2">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs font-extrabold text-indigo-950 uppercase font-heading">
                  👑 ${schoolName} • Jogo Educativo de Mesa
                </span>
                <h1 class="text-xl font-extrabold text-slate-900 font-heading tracking-tight">
                  ${currentTheme.icon} ${title}
                </h1>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-[9px] font-bold ${currentTheme.badgeColor} border px-2 py-0.5 rounded-full">
                  ${currentTheme.badgeText}
                </span>
              </div>
            </div>
          </div>

          <!-- Grade da Trilha do Tabuleiro (6 colunas x 4 linhas = 24 casas) -->
          <div class="grid grid-cols-6 gap-2 my-1">
            ${tilesHtml}
          </div>

          <!-- Seção de Recorte: Peões de Mascotes & Molde do Dado 3D -->
          <div class="mt-2 pt-2 border-t-2 border-dashed border-slate-300 flex items-center justify-between bg-slate-50/80 p-2.5 rounded-2xl">
            <!-- 4 Peões para Recorte e Dobra -->
            <div class="flex flex-col gap-1">
              <span class="text-[9px] font-bold text-slate-700 flex items-center gap-1">
                <span>✂️</span> Peões dos Jogadores (Recorte na linha pontilhada e dobre a base):
              </span>
              <div class="flex items-center gap-3">
                ${playersHtml}
              </div>
            </div>

            <!-- Molde do Dado 3D Recortável -->
            <div class="flex flex-col items-end gap-1">
              <span class="text-[9px] font-bold text-slate-700 flex items-center gap-1">
                <span>🎲</span> ${currentTheme.diceLabel || "Dado Ninja para Montar"}:
              </span>
              <div class="text-[8px] text-slate-500 max-w-[190px] text-right">
                Use qualquer dado comum de 6 faces ou monte o dado de papel recortando o molde anexo!
              </div>
              <div class="anime-hanko-stamp scale-75 origin-right">
                SUGOI! 🌸<br>DIVERSÃO<br><span class="text-[6px] text-red-500 font-bold">SOBERANO</span>
              </div>
            </div>
          </div>

          <!-- Rodapé com Regras Resumidas -->
          <div class="mt-auto pt-1 flex justify-between items-center text-[9px] text-slate-400">
            <span><strong>Regra de Ouro:</strong> Jogue o dado, ande as casas e resolva os desafios para ser coroado campeão!</span>
            <span>Ensino Soberano Kids • Material Lúdico Pedagógico</span>
          </div>

        </div>
      </article>
    `;
  }

  return {
    TRACK_TILES,
    THEMES,
    renderBoardSheet
  };
});
