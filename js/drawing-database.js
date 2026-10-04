/**
 * Catálogo Vetorial de Desenhos e Pinturas
 * Ensino Soberano Kids - 350 Itens para Aprender a Desenhar e Colorir
 * Alinhado à BNCC, Pronto para Impressão A4, Cópia por Grade e Livro de Colorir
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.DrawingDatabase = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const CATEGORIES = {
    animais: { id: "animais", name: "Animais", icon: "paw-print", count: 95 },
    paisagens: { id: "paisagens", name: "Paisagens & Natureza", icon: "mountain", count: 50 },
    objetos: { id: "objetos", name: "Objetos & Veículos", icon: "rocket", count: 90 },
    frutas: { id: "frutas", name: "Frutas & Alimentos", icon: "apple", count: 70 },
    fantasia: { id: "fantasia", name: "Fantasia & Mascotes", icon: "sparkles", count: 50 }
  };

  const ITEMS = [
  {
    "id": "cachorro",
    "name": "Cachorrinho Amigo",
    "category": "animais",
    "sub": "pets",
    "diff": "facil",
    "word": "C A C H O R R O",
    "colors": [
      "#d97706",
      "#fef3c7",
      "#1e293b",
      "#ef4444"
    ],
    "tags": [
      "cão",
      "pet",
      "amigo",
      "auau",
      "filhote"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça redonda amigável e o corpinho sentado do cãozinho.",
      "2. Acrescente as orelhinhas compridas e caídas nas laterais.",
      "3. Faça as quatro patinhas com almofadinhas e a cauda feliz abanando.",
      "4. Desenhe os olhos doces, a trufa preta do focinho e a linguinha de fora.",
      "5. Adicione a coleira com medalha redonda e linhas de alegria."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"78\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"34\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M72 65 C52 65 42 100 58 112 C70 118 78 95 76 75 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M128 65 C148 65 158 100 142 112 C130 118 122 95 124 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/> <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M132 142 Q160 135 155 110 Q145 106 138 124\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"86\" cy=\"74\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"84\" cy=\"72\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"87\" cy=\"70\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"114\" cy=\"74\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"112\" cy=\"72\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"115\" cy=\"70\" r=\"1.5\" fill=\"#ffffff\"/> <ellipse cx=\"100\" cy=\"85\" rx=\"7\" ry=\"5\" fill=\"#1e293b\"/> <path d=\"M96 92 Q100 95 104 92\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M98 94 Q100 104 104 94 Z\" fill=\"#ef4444\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>",
      "<path d=\"M76 112 Q100 118 124 112\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <circle cx=\"100\" cy=\"122\" r=\"4.5\" fill=\"#f59e0b\"/> <path d=\"M162 108 L168 104 M165 116 L172 114\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "gato",
    "name": "Gatinho Fofo",
    "category": "animais",
    "sub": "pets",
    "diff": "facil",
    "word": "G A T O",
    "colors": [
      "#94a3b8",
      "#f1f5f9",
      "#ec4899",
      "#1e293b"
    ],
    "tags": [
      "gatinho",
      "felino",
      "miau",
      "pet",
      "bigode"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada fofinha com bochechas cheias e o corpo dócil.",
      "2. Adicione as orelhas triangulares pontudas com interior rosado.",
      "3. Faça as patinhas dianteiras unidas e a cauda sinuosa graciosa.",
      "4. Desenhe os olhos grandes com brilho anime duplo, narizinho rosa e boca :3.",
      "5. Finalize com os bigodes compridos nas bochechas e detalhes das patinhas."
    ],
    "layers": [
      "<path d=\"M72 58 C60 70 58 88 72 98 C82 106 118 106 128 98 C142 88 140 70 128 58 C115 50 85 50 72 58 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M78 98 C72 118 74 148 82 165 C90 170 110 170 118 165 C126 148 128 118 122 98\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M74 58 L62 28 L88 46 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M126 58 L138 28 L112 46 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M72 50 L66 35 L82 44 Z\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M128 50 L134 35 L118 44 Z\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"88\" cy=\"166\" rx=\"9\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/> <ellipse cx=\"112\" cy=\"166\" rx=\"9\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M125 145 C155 140 165 110 148 95 C140 90 135 100 142 105 C150 112 142 135 125 148\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"85\" cy=\"76\" rx=\"8\" ry=\"11\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"83\" cy=\"72\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"87\" cy=\"78\" r=\"1.5\" fill=\"#1e293b\"/> <ellipse cx=\"115\" cy=\"76\" rx=\"8\" ry=\"11\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"113\" cy=\"72\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"117\" cy=\"78\" r=\"1.5\" fill=\"#1e293b\"/> <polygon points=\"97,85 103,85 100,90\" fill=\"#ec4899\"/> <path d=\"M94 92 Q100 96 100 92 Q100 96 106 92\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"72\" y1=\"84\" x2=\"45\" y2=\"80\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"72\" y1=\"90\" x2=\"42\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"128\" y1=\"84\" x2=\"155\" y2=\"80\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"128\" y1=\"90\" x2=\"158\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"135\" rx=\"16\" ry=\"18\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "leao",
    "name": "Leãozinho Real",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "L E Ã O",
    "colors": [
      "#f59e0b",
      "#b45309",
      "#78350f",
      "#fef3c7"
    ],
    "tags": [
      "rei",
      "selva",
      "juba",
      "felino",
      "safari"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça redonda e o corpinho sentado do leãozinho.",
      "2. Trace a MAGNÍFICA JUBA REAL ONDULADA como uma nuvem ao redor da cabeça.",
      "3. Faça as orelhas redondas espiando na juba e as patinhas fofas.",
      "4. Desenhe os olhos destemidos, nariz triangular largo e boca sorridente.",
      "5. Adicione a cauda com tufo de pelos na ponta e os bigodes reais."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"30\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M78 112 C72 130 72 155 80 170 C90 175 110 175 120 170 C128 155 128 130 122 112\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M70 42 C50 48 40 70 45 95 C40 115 55 135 75 138 C85 142 115 142 125 138 C145 135 160 115 155 95 C160 70 150 48 130 42 C115 35 85 35 70 42 Z\" fill=\"none\" stroke-width=\"3\"/> <path d=\"M62 48 Q45 68 52 88 Q40 108 62 120 Q80 135 100 135 Q120 135 138 120 Q160 108 148 88 Q155 68 138 48 Q120 30 100 30 Q80 30 62 48 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"74\" cy=\"62\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"126\" cy=\"62\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/> <ellipse cx=\"86\" cy=\"168\" rx=\"12\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/> <ellipse cx=\"114\" cy=\"168\" rx=\"12\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M125 145 C155 140 170 125 165 105\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M165 105 Q172 98 165 92 Q158 98 165 105 Z\" fill=\"#1e293b\"/>",
      "<circle cx=\"88\" cy=\"80\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"87\" cy=\"78\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"89\" cy=\"76\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"112\" cy=\"80\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"113\" cy=\"78\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"111\" cy=\"76\" r=\"1.5\" fill=\"#ffffff\"/> <polygon points=\"95,90 105,90 100,98\" fill=\"#1e293b\"/> <path d=\"M94 100 Q100 106 106 100\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<line x1=\"72\" y1=\"94\" x2=\"52\" y2=\"90\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"72\" y1=\"100\" x2=\"50\" y2=\"102\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"128\" y1=\"94\" x2=\"148\" y2=\"90\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"128\" y1=\"100\" x2=\"150\" y2=\"102\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "tigre",
    "name": "Tigre Listrado",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "T I G R E",
    "colors": [
      "#f97316",
      "#ffffff",
      "#1e293b",
      "#ea580c"
    ],
    "tags": [
      "selva",
      "listras",
      "felino",
      "garra",
      "safari"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça felina arredondada com bochechas largas e o corpo forte.",
      "2. Trace as orelhas redondas com interior preto e as patinhas.",
      "3. Faça a cauda longa com anéis e as patas musculosas.",
      "4. Desenhe os olhos selvagens penetrantes e o focinho felino.",
      "5. Adicione as LISTRAS TRIANGULARES DE TIGRE na testa, bochechas e corpo."
    ],
    "layers": [
      "<path d=\"M68 62 C58 75 58 92 72 102 C82 108 118 108 128 102 C142 92 142 75 132 62 C120 54 80 54 68 62 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M78 102 C72 122 72 148 80 168 C90 172 110 172 120 168 C128 148 128 122 122 102\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"70\" cy=\"56\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"70\" cy=\"56\" r=\"6\" fill=\"#1e293b\"/> <circle cx=\"130\" cy=\"56\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"130\" cy=\"56\" r=\"6\" fill=\"#1e293b\"/> <ellipse cx=\"86\" cy=\"168\" rx=\"12\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/> <ellipse cx=\"114\" cy=\"168\" rx=\"12\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M125 142 C155 135 170 120 165 95\" fill=\"none\" stroke-width=\"3\"/> <line x1=\"140\" y1=\"135\" x2=\"148\" y2=\"132\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"150\" y1=\"125\" x2=\"158\" y2=\"122\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"158\" y1=\"112\" x2=\"164\" y2=\"108\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"76\" rx=\"6\" ry=\"8\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"85\" cy=\"76\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"83\" cy=\"73\" r=\"1.8\" fill=\"#ffffff\"/> <ellipse cx=\"115\" cy=\"76\" rx=\"6\" ry=\"8\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"115\" cy=\"76\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"113\" cy=\"73\" r=\"1.8\" fill=\"#ffffff\"/> <polygon points=\"96,88 104,88 100,95\" fill=\"#1e293b\"/> <path d=\"M95 98 Q100 102 105 98\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,56 97,68 103,68\" fill=\"#1e293b\"/> <polygon points=\"66,78 78,80 72,85\" fill=\"#1e293b\"/> <polygon points=\"134,78 122,80 128,85\" fill=\"#1e293b\"/> <polygon points=\"72,125 86,128 75,134\" fill=\"#1e293b\"/> <polygon points=\"128,125 114,128 125,134\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "elefante",
    "name": "Elefante Feliz",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "E L E F A N T E",
    "colors": [
      "#94a3b8",
      "#cbd5e1",
      "#fbcfe8",
      "#475569"
    ],
    "tags": [
      "tromba",
      "orelhas",
      "gigante",
      "safari",
      "cinza"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada e o corpo rechonchudo do elefante.",
      "2. Trace as orelhas gigantes em formato de leque nas laterais.",
      "3. Desenhe a TROMBA CURVADA PARA CIMA soltando gotinhas e as 4 patas fortes.",
      "4. Faça as presas curvas de marfim, os olhos meigos e as unhas das patas.",
      "5. Adicione as dobras de pele na tromba e a cauda com pelos na ponta."
    ],
    "layers": [
      "<circle cx=\"105\" cy=\"80\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"120\" cy=\"125\" rx=\"42\" ry=\"34\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 65 C60 45 42 75 48 105 C54 125 75 125 88 105 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M130 65 C145 50 160 70 155 95 C150 110 138 112 130 100\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M96 92 C88 105 75 118 62 118 C52 118 48 106 56 98 C65 92 78 88 88 88\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/> <rect x=\"88\" y=\"140\" width=\"16\" height=\"36\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"112\" y=\"142\" width=\"16\" height=\"34\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"140\" y=\"138\" width=\"16\" height=\"38\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M84 98 Q92 105 90 115 Q82 110 82 98 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"98\" cy=\"74\" r=\"5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"97\" cy=\"73\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"96\" cy=\"72\" r=\"1\" fill=\"#ffffff\"/> <ellipse cx=\"96\" cy=\"172\" rx=\"3\" ry=\"2\" fill=\"none\" stroke-width=\"1.8\"/> <ellipse cx=\"120\" cy=\"172\" rx=\"3\" ry=\"2\" fill=\"none\" stroke-width=\"1.8\"/> <ellipse cx=\"148\" cy=\"172\" rx=\"3\" ry=\"2\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<line x1=\"68\" y1=\"105\" x2=\"74\" y2=\"108\" stroke-width=\"1.8\"/> <line x1=\"72\" y1=\"98\" x2=\"78\" y2=\"102\" stroke-width=\"1.8\"/> <line x1=\"78\" y1=\"92\" x2=\"84\" y2=\"95\" stroke-width=\"1.8\"/> <circle cx=\"48\" cy=\"85\" r=\"2.5\" fill=\"#38bdf8\"/> <circle cx=\"42\" cy=\"75\" r=\"3\" fill=\"#38bdf8\"/> <path d=\"M162 115 Q175 125 172 145\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M170 145 Q174 152 176 148\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "girafa",
    "name": "Girafinha Alta",
    "category": "animais",
    "sub": "selvagens",
    "diff": "facil",
    "word": "G I R A F A",
    "colors": [
      "#fbbf24",
      "#b45309",
      "#78350f",
      "#fef3c7"
    ],
    "tags": [
      "pescoço",
      "manchas",
      "alta",
      "savana",
      "safari"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça oval no topo e o corpo inclinado da girafa.",
      "2. Una a cabeça ao corpo com duas linhas verticais longas para o pescoço.",
      "3. Faça os chifrinhos com bolinhas (ossicones), orelhas em folha e as 4 pernas compridas.",
      "4. Desenhe os olhos grandes expressivos, o focinho meigo e a crina curta.",
      "5. Espalhe as manchinhas poligonais características da girafa pelo pescoço e corpo."
    ],
    "layers": [
      "<ellipse cx=\"85\" cy=\"45\" rx=\"18\" ry=\"14\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"125\" cy=\"135\" rx=\"32\" ry=\"22\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M78 54 L98 125 M94 48 L118 122\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<line x1=\"80\" y1=\"35\" x2=\"78\" y2=\"24\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <circle cx=\"78\" cy=\"22\" r=\"3\" fill=\"#1e293b\"/> <line x1=\"88\" y1=\"34\" x2=\"90\" y2=\"24\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <circle cx=\"90\" cy=\"22\" r=\"3\" fill=\"#1e293b\"/> <path d=\"M68 42 Q60 40 68 35 Q74 38 72 44 Z M96 40 Q105 38 100 34 Q92 35 94 42 Z\" fill=\"none\" stroke-width=\"2\"/> <line x1=\"105\" y1=\"152\" x2=\"105\" y2=\"186\" stroke-width=\"2.8\" stroke-linecap=\"round\"/> <line x1=\"116\" y1=\"154\" x2=\"116\" y2=\"186\" stroke-width=\"2.8\" stroke-linecap=\"round\"/> <line x1=\"135\" y1=\"152\" x2=\"135\" y2=\"186\" stroke-width=\"2.8\" stroke-linecap=\"round\"/> <line x1=\"146\" y1=\"150\" x2=\"146\" y2=\"186\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"80\" cy=\"42\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"79\" cy=\"41\" r=\"2.5\" fill=\"#1e293b\"/> <ellipse cx=\"73\" cy=\"50\" rx=\"8\" ry=\"5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"70\" cy=\"50\" r=\"1.5\" fill=\"#1e293b\"/> <path d=\"M96 52 L98 120\" stroke-width=\"3\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/>",
      "<rect x=\"85\" y=\"65\" width=\"8\" height=\"8\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/> <rect x=\"92\" y=\"82\" width=\"10\" height=\"9\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/> <rect x=\"88\" y=\"100\" width=\"11\" height=\"10\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/> <rect x=\"115\" y=\"128\" width=\"10\" height=\"9\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/> <rect x=\"132\" y=\"132\" width=\"11\" height=\"10\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/> <path d=\"M152 130 Q165 145 160 162\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/> <ellipse cx=\"160\" cy=\"164\" rx=\"3\" ry=\"5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "macaco",
    "name": "Macaquinho Sapeca",
    "category": "animais",
    "sub": "selvagens",
    "diff": "facil",
    "word": "M A C A C O",
    "colors": [
      "#854d0e",
      "#ca8a04",
      "#fef08a",
      "#1e293b"
    ],
    "tags": [
      "selva",
      "banana",
      "galho",
      "cipó",
      "sapeca"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada e o corpo flexível do macaquinho.",
      "2. Adicione as orelhas redondas abertas nas laterais da cabeça.",
      "3. Faça a cauda longa espiralada preênsil e as patinhas compridas.",
      "4. Desenhe a máscara do rosto em coração, olhos curiosos e boca alegre.",
      "5. Adicione uma banana saborosa na mão e detalhes do pelo."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"78\" r=\"28\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"136\" rx=\"30\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"65\" cy=\"78\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"65\" cy=\"78\" r=\"7\" fill=\"#1e293b\"/> <circle cx=\"135\" cy=\"78\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"135\" cy=\"78\" r=\"7\" fill=\"#1e293b\"/>",
      "<path d=\"M125 145 C155 145 175 115 160 90 C150 75 130 85 142 100 C150 110 135 125 120 135\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/> <ellipse cx=\"85\" cy=\"166\" rx=\"10\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/> <ellipse cx=\"115\" cy=\"166\" rx=\"10\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M80 65 Q90 60 100 68 Q110 60 120 65 Q125 80 115 92 Q100 100 85 92 Q75 80 80 65 Z\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"88\" cy=\"75\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"87\" cy=\"74\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"112\" cy=\"75\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"111\" cy=\"74\" r=\"2.5\" fill=\"#1e293b\"/> <path d=\"M94 88 Q100 94 106 88\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"16\" ry=\"18\" fill=\"none\" stroke-width=\"1.8\"/> <path d=\"M72 135 Q65 145 70 152\" stroke=\"#f59e0b\" stroke-width=\"4\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "zebra",
    "name": "Zebrinha Listrada",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "Z E B R A",
    "colors": [
      "#ffffff",
      "#1e293b",
      "#94a3b8",
      "#f1f5f9"
    ],
    "tags": [
      "listras",
      "preto",
      "branco",
      "savana",
      "cavalo"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada de potrinho, pescoço arqueado e o tronco.",
      "2. Trace as 4 pernas com cascos escuros e a cauda com tufo.",
      "3. Faça as orelhas alertas e a crina moicano de zigue-zague pelo pescoço.",
      "4. Desenhe o olho meigo com brilho anime e o focinho escuro em arco.",
      "5. Adicione as LISTRAS TRIANGULARES AUTÊNTICAS da zebra por todo o corpo."
    ],
    "layers": [
      "<path d=\"M68 60 C50 65 48 90 62 100 C75 108 92 102 92 85 C92 70 82 58 68 60 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M85 82 C95 95 110 105 130 110 C155 115 165 135 155 155 C145 168 115 168 95 150 C85 138 85 115 80 95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M98 145 L98 180 L108 180 L108 145\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M112 145 L112 180 L122 180 L122 145\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M135 148 L135 180 L145 180 L145 148\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M148 145 L148 180 L158 180 L158 145\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"98\" y=\"174\" width=\"10\" height=\"6\" fill=\"#1e293b\"/> <rect x=\"112\" y=\"174\" width=\"10\" height=\"6\" fill=\"#1e293b\"/> <rect x=\"135\" y=\"174\" width=\"10\" height=\"6\" fill=\"#1e293b\"/> <rect x=\"148\" y=\"174\" width=\"10\" height=\"6\" fill=\"#1e293b\"/> <path d=\"M155 128 C170 135 172 155 165 168 C160 165 162 150 155 142\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M165 168 Q170 175 165 178 Q160 175 165 168 Z\" fill=\"#1e293b\"/>",
      "<path d=\"M72 60 C70 40 78 32 82 32 C86 32 86 45 82 58\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M85 62 C88 42 96 35 100 35 C104 35 102 48 95 62\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M85 55 L92 44 L95 58 L102 48 L106 64 L115 55 L118 72 L126 65 L130 85 L136 80 L135 102\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"75\" cy=\"72\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"75\" cy=\"72\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"73\" cy=\"70\" r=\"1.8\" fill=\"#ffffff\"/> <circle cx=\"77\" cy=\"74\" r=\"1\" fill=\"#ffffff\"/> <path d=\"M52 82 C48 88 52 98 60 98 C65 98 68 90 65 85\" fill=\"#1e293b\" opacity=\"0.8\"/> <circle cx=\"56\" cy=\"90\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M58 95 Q64 98 68 94\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<polygon points=\"85,68 95,74 88,78\" fill=\"#1e293b\"/> <polygon points=\"95,80 108,86 98,90\" fill=\"#1e293b\"/> <polygon points=\"105,95 120,102 110,106\" fill=\"#1e293b\"/> <polygon points=\"112,118 110,138 116,138 118,118\" fill=\"#1e293b\"/> <polygon points=\"125,122 124,142 129,142 131,122\" fill=\"#1e293b\"/> <polygon points=\"138,124 136,145 142,145 144,124\" fill=\"#1e293b\"/> <polygon points=\"145,130 155,138 148,142\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "coelho",
    "name": "Coelhinho Saltitante",
    "category": "animais",
    "sub": "pets",
    "diff": "facil",
    "word": "C O E L H O",
    "colors": [
      "#ffffff",
      "#fbcfe8",
      "#cbd5e1",
      "#ec4899"
    ],
    "tags": [
      "orelhas",
      "cenoura",
      "pulo",
      "páscoa",
      "dente"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada e o corpinho fofinho do coelho.",
      "2. Trace as orelhas longas verticais com miolo rosado.",
      "3. Faça as patinhas dianteiras segurando uma cenoura e o rabo pompom.",
      "4. Desenhe os olhos grandes com brilho, focinho delicado e dois dentinhos.",
      "5. Finalize com bigodinhos finos e os detalhes da cenourinha."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"90\" r=\"28\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"145\" rx=\"34\" ry=\"30\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M82 66 C75 35 70 15 84 15 C96 15 94 40 92 64 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M118 66 C125 35 130 15 116 15 C104 15 106 40 108 64 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M82 58 C78 35 76 22 84 22 C92 22 90 40 88 56 Z\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M118 58 C122 35 124 22 116 22 C108 22 110 40 112 56 Z\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"70\" cy=\"165\" rx=\"14\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/> <ellipse cx=\"130\" cy=\"165\" rx=\"14\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"138\" cy=\"142\" r=\"9\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M92 135 L108 135 L100 162 Z\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M100 135 L96 125 M100 135 L104 125\" stroke=\"#10b981\" stroke-width=\"2\"/>",
      "<circle cx=\"86\" cy=\"88\" r=\"5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"85\" cy=\"87\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"114\" cy=\"88\" r=\"5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"113\" cy=\"87\" r=\"2.5\" fill=\"#1e293b\"/> <polygon points=\"98,96 102,96 100,99\" fill=\"#f472b6\"/> <path d=\"M96 101 Q100 103 104 101\" stroke-width=\"2\"/> <rect x=\"98\" y=\"103\" width=\"4\" height=\"5\" rx=\"1\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"75\" y1=\"96\" x2=\"55\" y2=\"93\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <line x1=\"75\" y1=\"100\" x2=\"52\" y2=\"103\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <line x1=\"125\" y1=\"96\" x2=\"145\" y2=\"93\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <line x1=\"125\" y1=\"100\" x2=\"148\" y2=\"103\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "urso",
    "name": "Ursinho Pardo",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "U R S O",
    "colors": [
      "#78350f",
      "#b45309",
      "#d97706",
      "#fef3c7"
    ],
    "tags": [
      "floresta",
      "mel",
      "forte",
      "inverno",
      "urso"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça redonda e o corpo grande e acolhedor do urso.",
      "2. Faça as orelhas redondas no topo com borda fofa.",
      "3. Trace as grandes patas dianteiras e traseiras com garras arredondadas.",
      "4. Desenhe o focinho largo oval com nariz preto e olhos meigos.",
      "5. Adicione a textura do pelo espesso e a barriguinha fofa."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"78\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"142\" rx=\"42\" ry=\"36\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"68\" cy=\"52\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"68\" cy=\"52\" r=\"6\" fill=\"#1e293b\"/> <circle cx=\"132\" cy=\"52\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"132\" cy=\"52\" r=\"6\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"70\" cy=\"130\" rx=\"14\" ry=\"22\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"130\" cy=\"130\" rx=\"14\" ry=\"22\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"78\" cy=\"170\" rx=\"15\" ry=\"10\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"122\" cy=\"170\" rx=\"15\" ry=\"10\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"85\" cy=\"72\" r=\"5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"84\" cy=\"71\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"115\" cy=\"72\" r=\"5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"114\" cy=\"71\" r=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"100\" cy=\"85\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2\"/> <ellipse cx=\"100\" cy=\"82\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/> <path d=\"M96 90 Q100 94 104 90\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"145\" rx=\"22\" ry=\"20\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "panda",
    "name": "Urso Panda Fofo",
    "category": "animais",
    "sub": "selvagens",
    "diff": "facil",
    "word": "P A N D A",
    "colors": [
      "#ffffff",
      "#1e293b",
      "#10b981",
      "#cbd5e1"
    ],
    "tags": [
      "bambu",
      "china",
      "preto",
      "branco",
      "fofo"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça redonda e o corpo rechonchudo do panda.",
      "2. Faça as orelhas pretas perfeitamente redondas no topo.",
      "3. Desenhe as patas pretas e a postura sentada característica.",
      "4. Trace as famosas MANCHAS OVAIS PRETAS nos olhos e o focinho.",
      "5. Adicione um ramo de bambu verde e os detalhes da barriguinha."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"142\" rx=\"38\" ry=\"34\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"68\" cy=\"54\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"132\" cy=\"54\" r=\"14\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"70\" cy=\"125\" rx=\"12\" ry=\"24\" fill=\"none\" stroke-width=\"2.8\" transform=\"rotate(20 70 125)\"/> <ellipse cx=\"130\" cy=\"125\" rx=\"12\" ry=\"24\" fill=\"none\" stroke-width=\"2.8\" transform=\"rotate(-20 130 125)\"/> <ellipse cx=\"80\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"#1e293b\"/> <ellipse cx=\"120\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"84\" cy=\"78\" rx=\"10\" ry=\"8\" fill=\"#1e293b\" transform=\"rotate(-15 84 78)\"/> <circle cx=\"83\" cy=\"77\" r=\"3\" fill=\"#ffffff\"/> <ellipse cx=\"116\" cy=\"78\" rx=\"10\" ry=\"8\" fill=\"#1e293b\" transform=\"rotate(15 116 78)\"/> <circle cx=\"117\" cy=\"77\" r=\"3\" fill=\"#ffffff\"/> <ellipse cx=\"100\" cy=\"88\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/> <path d=\"M96 94 Q100 98 104 94\" stroke-width=\"2\"/>",
      "<path d=\"M50 160 L60 80 L66 80 L56 160 Z\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M60 110 Q70 105 75 112 M62 130 Q72 125 78 132\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "raposa",
    "name": "Raposinha Esperta",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "R A P O S A",
    "colors": [
      "#ea580c",
      "#ffffff",
      "#1e293b",
      "#fed7aa"
    ],
    "tags": [
      "floresta",
      "cauda",
      "laranja",
      "esperta",
      "focinho"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com focinho empinado e o corpo esbelto da raposinha.",
      "2. Trace as orelhas pontudas alertas com borda branca e bochechas felpudas.",
      "3. Faça as 4 patinhas delicadas e a ENORME cauda felpuda curvada.",
      "4. Desenhe os olhos vivos amendoados e a trufinha preta no focinho.",
      "5. Adicione o peito fofo branco e a ponta branca em zigue-zague na cauda."
    ],
    "layers": [
      "<path d=\"M75 58 C65 72 65 88 80 98 C90 104 110 104 120 98 C135 88 135 72 125 58 C112 50 88 50 75 58 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M82 98 C76 115 78 145 85 165 C95 170 105 170 115 165 C122 145 124 115 118 98\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M78 56 L62 25 L88 48 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M122 56 L138 25 L112 48 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M76 48 L68 32 L84 44 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M124 48 L132 32 L116 44 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M68 85 L52 92 L68 98 M132 85 L148 92 L132 98\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M90 130 L90 168 C90 172 98 172 98 168 L98 140\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M102 140 L102 168 C102 172 110 172 110 168 L110 130\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M120 145 C150 145 180 125 175 88 C160 98 145 120 125 135\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"86\" cy=\"74\" r=\"5.5\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"85\" cy=\"73\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"71\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"114\" cy=\"74\" r=\"5.5\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"115\" cy=\"73\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"116\" cy=\"71\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"100\" cy=\"88\" r=\"3.5\" fill=\"#1e293b\"/> <path d=\"M96 93 Q100 96 104 93\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M88 102 C82 115 90 128 100 132 C110 128 118 115 112 102\" fill=\"none\" stroke-width=\"2\"/> <path d=\"M165 98 L158 108 L170 114\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "lobo",
    "name": "Lobinho Guardião",
    "category": "animais",
    "sub": "selvagens",
    "diff": "desafio",
    "word": "L O B O",
    "colors": [
      "#64748b",
      "#334155",
      "#cbd5e1",
      "#f8fafc"
    ],
    "tags": [
      "uivo",
      "lua",
      "floresta",
      "matilha",
      "cinzento"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada com bochechas fofas e o corpinho sentado.",
      "2. Trace as orelhas pontudas de lobo com pelos internos e o focinho.",
      "3. Faça as patinhas dianteiras, traseiras e a grande cauda felpuda.",
      "4. Desenhe os olhos expressivos com brilho, focinho escuro e dentinhos fofos.",
      "5. Adicione a pelagem no peito em zigue-zague e os detalhes de acabamento."
    ],
    "layers": [
      "<path d=\"M70 55 C60 70 58 85 70 98 C80 106 120 106 130 98 C142 85 140 70 130 55 C115 48 85 48 70 55 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M78 98 C72 118 72 145 80 165 C90 170 110 170 120 165 C128 145 128 118 122 98\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M72 55 C65 30 55 18 68 14 C80 14 85 35 88 52\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M128 55 C135 30 145 18 132 14 C120 14 115 35 112 52\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M70 40 C66 26 62 22 68 20 C74 20 78 32 80 44\" fill=\"none\" stroke-width=\"1.8\"/> <path d=\"M130 40 C134 26 138 22 132 20 C126 20 122 32 120 44\" fill=\"none\" stroke-width=\"1.8\"/> <path d=\"M62 85 L50 90 L64 95 M138 85 L150 90 L136 95\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <path d=\"M90 75 L100 85 L110 75\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M88 125 L88 168 C88 172 98 172 98 168 L98 135\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M102 135 L102 168 C102 172 112 172 112 168 L112 125\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M78 145 C68 150 68 165 78 168\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M122 145 C132 150 132 165 122 168\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M125 145 C155 140 175 115 165 85 C155 95 145 115 126 132\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M152 102 L160 98 L154 112\" fill=\"none\" stroke-width=\"2\"/>",
      "<ellipse cx=\"85\" cy=\"74\" rx=\"7\" ry=\"9\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"85\" cy=\"74\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"83\" cy=\"71\" r=\"2\" fill=\"#ffffff\"/> <ellipse cx=\"115\" cy=\"74\" rx=\"7\" ry=\"9\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"115\" cy=\"74\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"113\" cy=\"71\" r=\"2\" fill=\"#ffffff\"/> <ellipse cx=\"100\" cy=\"85\" rx=\"5\" ry=\"3.5\" fill=\"#1e293b\"/> <path d=\"M96 91 Q100 95 104 91\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M97 92 L98 96 L100 92 M100 92 L102 96 L103 92\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M92 105 L100 118 L108 105\" fill=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\"/> <line x1=\"93\" y1=\"165\" x2=\"93\" y2=\"168\" stroke-width=\"1.8\"/> <line x1=\"107\" y1=\"165\" x2=\"107\" y2=\"168\" stroke-width=\"1.8\"/> <path d=\"M96 55 L100 62 L104 55\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cervo",
    "name": "Cervo da Floresta",
    "category": "animais",
    "sub": "selvagens",
    "diff": "desafio",
    "word": "C E R V O",
    "colors": [
      "#b45309",
      "#d97706",
      "#ffffff",
      "#fef3c7"
    ],
    "tags": [
      "chifres",
      "floresta",
      "bambi",
      "galhadas",
      "elegante"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça graciosa com focinho delicado e o corpo esbelto.",
      "2. Trace as orelhas compridas atentas e os GRANDES CHIFRES GALHADOS ramificados.",
      "3. Faça as 4 perninhas finas e ágeis com cascos e o rabinho curto fofo.",
      "4. Desenhe os grandes olhos meigos com cílios e o focinho escuro.",
      "5. Adicione as manchinhas brancas no dorso estilo Bambi e o peito claro."
    ],
    "layers": [
      "<path d=\"M72 65 C62 75 60 92 72 102 C82 108 115 108 125 102 C135 92 135 75 125 65 C115 55 82 55 72 65 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M85 102 C78 120 80 148 90 168 C100 172 115 172 125 168 C132 148 132 120 125 102\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M68 62 C55 58 48 45 52 38 C58 35 70 48 72 58\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M128 62 C142 58 148 45 145 38 C138 35 126 48 124 58\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M80 55 C75 35 60 25 55 15 M68 28 C60 25 55 28 52 32 M75 38 C80 30 85 28 90 28\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/> <path d=\"M118 55 C122 35 138 25 142 15 M130 28 C138 25 142 28 145 32 M122 38 C118 30 112 28 108 28\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<path d=\"M92 135 L90 175 L98 175 L98 135\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M112 135 L112 175 L120 175 L118 135\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"90\" y=\"172\" width=\"8\" height=\"4\" fill=\"#1e293b\"/> <rect x=\"112\" y=\"172\" width=\"8\" height=\"4\" fill=\"#1e293b\"/> <path d=\"M128 145 C135 148 138 155 132 158\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"84\" cy=\"78\" rx=\"6\" ry=\"8\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"84\" cy=\"78\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"82\" cy=\"75\" r=\"1.8\" fill=\"#ffffff\"/> <ellipse cx=\"114\" cy=\"78\" rx=\"6\" ry=\"8\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"114\" cy=\"78\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"112\" cy=\"75\" r=\"1.8\" fill=\"#ffffff\"/> <ellipse cx=\"99\" cy=\"94\" rx=\"4.5\" ry=\"3\" fill=\"#1e293b\"/> <path d=\"M95 98 Q99 102 103 98\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"120\" r=\"2.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <circle cx=\"106\" cy=\"122\" r=\"2.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <circle cx=\"98\" cy=\"132\" r=\"2.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <circle cx=\"112\" cy=\"135\" r=\"2\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <path d=\"M90 102 C82 115 90 128 99 130 C108 128 116 115 108 102\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "esquilo",
    "name": "Esquilo com Noz",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "E S Q U I L O",
    "colors": [
      "#c2410c",
      "#ea580c",
      "#ffedd5",
      "#78350f"
    ],
    "tags": [
      "noz",
      "bolota",
      "árvore",
      "cauda",
      "dente"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada com bochechas salientes e o corpinho sentado.",
      "2. Trace as orelhinhas com tufos de pelo e os bracinhos segurando uma noz.",
      "3. Desenhe a ENORME CAUDA FELPUDA curvada em formato de S sobre as costas.",
      "4. Faça os olhinhos pretos brilhantes, focinho miúdo e os dentinhos de roedor.",
      "5. Adicione a textura da bolota/noz e os pelinhos arrepiados da cauda."
    ],
    "layers": [
      "<path d=\"M72 65 C60 75 60 95 72 105 C85 112 115 112 128 105 C140 95 140 75 128 65 C115 58 85 58 72 65 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M80 105 C72 125 72 150 82 170 C95 174 112 174 122 170 C128 150 128 125 120 105\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M75 62 C70 45 72 38 78 38 C84 38 85 48 85 60\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M125 62 C130 45 128 38 122 38 C116 38 115 48 115 60\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M74 38 L72 30 M126 38 L128 30\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M82 118 C85 130 92 135 98 135 M118 118 C115 130 108 135 102 135\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M125 155 C165 150 185 115 175 75 C165 45 140 45 135 55 C130 65 145 75 155 90 C165 115 145 140 120 148\" fill=\"none\" stroke-width=\"3\"/> <path d=\"M82 168 C72 170 72 178 85 178 M118 168 C128 170 128 178 115 178\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"85\" cy=\"80\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"83\" cy=\"78\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"115\" cy=\"80\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"113\" cy=\"78\" r=\"2\" fill=\"#ffffff\"/> <ellipse cx=\"100\" cy=\"92\" rx=\"3.5\" ry=\"2.5\" fill=\"#1e293b\"/> <path d=\"M96 96 Q100 100 104 96\" fill=\"none\" stroke-width=\"1.8\"/> <rect x=\"98\" y=\"97\" width=\"4\" height=\"4\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<path d=\"M92 130 Q100 122 108 130 L104 142 Q100 146 96 142 Z\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M92 130 Q100 125 108 130\" stroke=\"#78350f\" stroke-width=\"3\"/> <path d=\"M155 75 L165 72 M160 95 L172 92 M150 115 L162 118\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "ourico",
    "name": "Ouriço Espinhoso",
    "category": "animais",
    "sub": "selvagens",
    "diff": "facil",
    "word": "O U R I Ç O",
    "colors": [
      "#78350f",
      "#a16207",
      "#fef3c7",
      "#1e293b"
    ],
    "tags": [
      "espinhos",
      "bolinha",
      "fofo",
      "floresta",
      "patinhas"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho arredondado em domo com focinho empinado saindo na frente.",
      "2. Trace a borda do rostinho suave e a orelhinha redonda miúda.",
      "3. Faça as 4 patinhas curtas de caminhada embaixo do corpo.",
      "4. Desenhe o olho preto brilhante, focinho arrebitado e bigodinhos.",
      "5. Preencha todo o dorso com dezenas de ESPINHOS TRIANGULARES FOFOS em zigue-zague."
    ],
    "layers": [
      "<path d=\"M65 110 C50 105 45 125 58 132 C75 140 100 145 150 135 C165 115 155 85 130 75 C100 65 75 80 65 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M62 108 C75 112 82 125 78 135\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"82\" cy=\"115\" r=\"5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"82\" cy=\"115\" r=\"2.5\" fill=\"#fbcfe8\"/>",
      "<rect x=\"75\" y=\"132\" width=\"10\" height=\"14\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"95\" y=\"134\" width=\"10\" height=\"14\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"125\" y=\"132\" width=\"10\" height=\"14\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"142\" y=\"130\" width=\"10\" height=\"14\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"68\" cy=\"118\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"66\" cy=\"116\" r=\"1.8\" fill=\"#ffffff\"/> <circle cx=\"48\" cy=\"124\" r=\"4\" fill=\"#1e293b\"/> <path d=\"M54 128 Q60 132 66 128\" fill=\"none\" stroke-width=\"1.8\"/> <line x1=\"56\" y1=\"124\" x2=\"42\" y2=\"120\" stroke-width=\"1.5\"/> <line x1=\"56\" y1=\"126\" x2=\"42\" y2=\"128\" stroke-width=\"1.5\"/>",
      "<path d=\"M85 75 L92 65 L98 75 L108 62 L115 75 L125 65 L132 78 L142 68 L148 82 L158 75 L160 90 L168 85 L165 102 L172 100 L165 115 L170 120 L160 128\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/> <path d=\"M95 90 L102 82 L108 92 M115 95 L122 85 L128 98 M135 100 L142 90 L148 105\" stroke-width=\"2\" stroke-linejoin=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "canguru",
    "name": "Canguru Saltador",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "C A N G U R U",
    "colors": [
      "#b45309",
      "#d97706",
      "#fef3c7",
      "#451a03"
    ],
    "tags": [
      "bolsa",
      "salto",
      "austrália",
      "filhote",
      "boxe"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça alongada, o pescoço arqueado e o corpo musculoso com quadril largo.",
      "2. Trace as orelhas compridas de canguru e a CAUDA GROSSA E POTENTE apoiada no chão.",
      "3. Faça os bracinhos curtos no peito e as GRANDES PATAS TRASEIRAS de salto.",
      "4. Desenhe o olho doce, focinho arredondado e a BOLSA MARSUPIAL (marsúpio).",
      "5. Adicione a CABECINHA DO FILHOTINHO (JOEY) espiando de dentro da bolsa!"
    ],
    "layers": [
      "<path d=\"M75 50 C62 55 60 70 70 80 C80 88 95 85 98 72 C100 60 90 48 75 50 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M92 75 C100 90 108 110 115 130 C125 145 135 160 120 175 C105 180 85 170 85 150 C85 130 90 100 88 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M78 50 C75 30 82 20 88 20 C92 20 92 35 88 50\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M88 52 C92 32 98 22 104 22 C108 22 106 38 100 52\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M125 160 C150 165 175 175 180 182 C170 185 140 178 118 172\" fill=\"none\" stroke-width=\"3\"/>",
      "<path d=\"M85 100 C75 108 72 118 80 120 C88 120 90 110 92 102\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M95 155 C90 175 75 180 65 182 L90 182\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"78\" cy=\"62\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"76\" cy=\"60\" r=\"1.8\" fill=\"#ffffff\"/> <ellipse cx=\"64\" cy=\"72\" rx=\"4\" ry=\"3\" fill=\"#1e293b\"/> <path d=\"M66 76 Q72 80 78 76\" fill=\"none\" stroke-width=\"1.8\"/> <path d=\"M88 128 C85 145 105 155 115 145\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"95\" cy=\"132\" r=\"8\" fill=\"none\" stroke-width=\"2\"/> <path d=\"M92 125 C90 118 94 115 96 115 C98 115 97 122 96 126\" stroke-width=\"1.5\"/> <path d=\"M98 125 C100 118 104 115 106 115 C108 115 105 122 103 126\" stroke-width=\"1.5\"/> <circle cx=\"93\" cy=\"130\" r=\"1.2\" fill=\"#1e293b\"/> <circle cx=\"98\" cy=\"130\" r=\"1.2\" fill=\"#1e293b\"/> <ellipse cx=\"95\" cy=\"134\" rx=\"1.5\" ry=\"1\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "hipopotamo",
    "name": "Hipopótamo Guloso",
    "category": "animais",
    "sub": "selvagens",
    "diff": "facil",
    "word": "H I P O P Ó T A M O",
    "colors": [
      "#64748b",
      "#94a3b8",
      "#fbcfe8",
      "#334155"
    ],
    "tags": [
      "rio",
      "grande",
      "boca",
      "água",
      "áfrica"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com o ENORME FOCINHO ARREDONDADO em bloco e o corpo gorducho.",
      "2. Trace as orelhinhas redondas miúdas no topo da cabeça e narinas bem grandes.",
      "3. Faça as 4 patas curtas e grossas com unhas largas e o rabinho curto.",
      "4. Desenhe os olhinhos expressivos atentos e dois DENTINHOS/PRESAS curvas saindo.",
      "5. Adicione as dobras de pele no pescoço e ondinhas de água refrescante embaixo."
    ],
    "layers": [
      "<path d=\"M70 65 C60 70 55 90 55 115 C55 130 90 135 115 135 C135 135 140 120 140 100 C140 70 120 60 95 60 C80 60 75 62 70 65 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M125 95 C145 98 165 115 160 145 C155 165 130 165 110 160 C100 150 95 135 95 130\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"85\" cy=\"58\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"85\" cy=\"58\" r=\"3.5\" fill=\"#fbcfe8\"/> <circle cx=\"118\" cy=\"58\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"118\" cy=\"58\" r=\"3.5\" fill=\"#fbcfe8\"/> <ellipse cx=\"68\" cy=\"105\" rx=\"5\" ry=\"7\" fill=\"#1e293b\"/> <ellipse cx=\"88\" cy=\"105\" rx=\"5\" ry=\"7\" fill=\"#1e293b\"/>",
      "<rect x=\"75\" y=\"132\" width=\"18\" height=\"35\" rx=\"7\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"100\" y=\"132\" width=\"18\" height=\"35\" rx=\"7\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"130\" y=\"135\" width=\"18\" height=\"32\" rx=\"7\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M160 130 Q168 138 165 148\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"95\" cy=\"75\" r=\"5.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"94\" cy=\"74\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"93\" cy=\"72\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"125\" cy=\"75\" r=\"5.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"124\" cy=\"74\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"123\" cy=\"72\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M60 120 Q80 128 105 120\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <polygon points=\"68,124 72,132 76,124\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"98,124 102,132 106,124\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M98 88 Q108 92 118 88\" stroke-width=\"1.8\"/> <ellipse cx=\"84\" cy=\"164\" rx=\"3\" ry=\"2\" fill=\"#1e293b\"/> <ellipse cx=\"109\" cy=\"164\" rx=\"3\" ry=\"2\" fill=\"#1e293b\"/> <ellipse cx=\"139\" cy=\"164\" rx=\"3\" ry=\"2\" fill=\"#1e293b\"/> <path d=\"M45 172 Q70 166 100 172 T165 172\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "rinoceronte",
    "name": "Rinoceronte Forte",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "R I N O C E R O N T E",
    "colors": [
      "#64748b",
      "#94a3b8",
      "#cbd5e1",
      "#334155"
    ],
    "tags": [
      "chifre",
      "couro",
      "forte",
      "savana",
      "cinza"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça forte e angular e o corpo blindado robusto do rinoceronte.",
      "2. Trace o GRANDE CHIFRE CURVADO NA PONTA DO FOCINHO e o segundo chifre menor atrás.",
      "3. Faça as orelhas pontudinhas no topo com tufos e as 4 patas colunares fortes.",
      "4. Desenhe os olhinhos simpáticos atentos e as placas de pele sobrepostas.",
      "5. Adicione as dobras de couraça nos ombros e cascos triplos nas patas."
    ],
    "layers": [
      "<path d=\"M65 80 C50 85 45 105 60 115 C75 122 105 120 115 105 C125 90 110 75 90 75 C78 75 70 78 65 80 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M105 95 C120 95 155 105 160 135 C162 155 145 165 120 165 C105 160 98 145 98 135\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M48 95 C38 85 42 70 48 65 C54 75 58 85 58 95 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M62 90 C58 82 62 76 66 74 C69 80 70 86 68 92 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M88 72 C88 60 95 55 98 58 C100 62 98 70 94 75\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<rect x=\"75\" y=\"135\" width=\"16\" height=\"35\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"98\" y=\"135\" width=\"16\" height=\"35\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"130\" y=\"135\" width=\"16\" height=\"35\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M160 135 Q168 145 164 155\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"82\" cy=\"85\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"81\" cy=\"84\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M68 112 Q76 116 84 112\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M95 105 C98 125 105 145 102 165\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M135 105 C138 125 142 145 140 165\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"83\" cy=\"166\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"106\" cy=\"166\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"138\" cy=\"166\" r=\"2\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "camelo",
    "name": "Camelo do Deserto",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "C A M E L O",
    "colors": [
      "#d97706",
      "#b45309",
      "#fef3c7",
      "#78350f"
    ],
    "tags": [
      "corcunda",
      "deserto",
      "areia",
      "caravana",
      "oásis"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça orgânica com focinho alongado, pescoço em S e o corpo.",
      "2. Trace AS DUAS CORCOVAS ARREDONDADAS bem definidas nas costas do camelo.",
      "3. Faça as 4 pernas compridas com joelhos marcados e pés com almofadas para a areia.",
      "4. Desenhe o olho expressivo com longos cílios, narinas fecháveis e boca risonha.",
      "5. Adicione o rabinho com tufo de pelos na ponta e as dunas do deserto."
    ],
    "layers": [
      "<path d=\"M55 58 C45 65 48 80 58 85 C68 88 78 82 78 72 C78 60 68 55 55 58 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M72 82 C82 98 88 115 90 130 C95 130 110 132 120 130 C140 130 155 145 150 165 C135 170 100 168 88 152 C82 135 78 115 70 95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M98 125 C98 100 115 100 120 125\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M125 125 C125 102 142 102 148 128\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M68 56 C70 48 76 48 78 52 C78 56 75 60 72 62\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M92 152 L90 182 L98 182 L98 152\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M106 150 L106 182 L114 182 L114 150\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M135 155 L135 182 L143 182 L143 155\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M150 148 C160 158 158 172 152 178\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"152\" cy=\"180\" r=\"3.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"64\" cy=\"68\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"63\" cy=\"67\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M52 76 Q56 82 64 78\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"60\" y1=\"62\" x2=\"68\" y2=\"60\" stroke-width=\"2\"/>",
      "<circle cx=\"94\" cy=\"168\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/> <circle cx=\"110\" cy=\"168\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/> <circle cx=\"139\" cy=\"168\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/> <path d=\"M25 185 Q65 178 115 185 T185 185\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "bicho-preguica",
    "name": "Bicho-Preguiça Tranquilo",
    "category": "animais",
    "sub": "selvagens",
    "diff": "facil",
    "word": "P R E G U I Ç A",
    "colors": [
      "#78716c",
      "#a8a29e",
      "#f5f5f4",
      "#44403c"
    ],
    "tags": [
      "galho",
      "lento",
      "sono",
      "garras",
      "sorriso"
    ],
    "stepsDesc": [
      "1. Desenhe o GALHO HORIZONTAL e o corpo arredondado da preguiça pendurado de cabeça para baixo.",
      "2. Trace a cabecinha redonda simpática virada para nós com focinho claro.",
      "3. Faça os 4 braços e pernas longos abraçando o galho com 3 GARRAS CURVAS GRANDES.",
      "4. Desenhe as faixas escuras ao redor dos olhos e um sorriso tranquilo sereno.",
      "5. Adicione folhas verdes frescas no galho e a textura do pelo longo macio."
    ],
    "layers": [
      "<line x1=\"25\" y1=\"65\" x2=\"175\" y2=\"65\" stroke=\"#78350f\" stroke-width=\"6\" stroke-linecap=\"round\"/> <path d=\"M75 85 C75 125 145 125 145 85 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"75\" cy=\"115\" r=\"22\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"75\" cy=\"120\" rx=\"15\" ry=\"12\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M85 85 L85 68 C85 62 90 62 90 68\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M92 85 L92 68 C92 62 97 62 97 68\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M125 85 L125 68 C125 62 130 62 130 68\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M132 85 L132 68 C132 62 137 62 137 68\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"66\" cy=\"115\" rx=\"6\" ry=\"4\" fill=\"#64748b\" transform=\"rotate(20 66 115)\"/> <circle cx=\"66\" cy=\"115\" r=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"84\" cy=\"115\" rx=\"6\" ry=\"4\" fill=\"#64748b\" transform=\"rotate(-20 84 115)\"/> <circle cx=\"84\" cy=\"115\" r=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"75\" cy=\"122\" rx=\"4\" ry=\"2.5\" fill=\"#1e293b\"/> <path d=\"M71 126 Q75 130 79 126\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M155 60 C165 48 175 55 170 65 C160 68 152 65 155 60 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M95 105 L95 118 M115 108 L115 120 M130 102 L130 115\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "castor",
    "name": "Castor Construtor",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "C A S T O R",
    "colors": [
      "#78350f",
      "#b45309",
      "#fed7aa",
      "#1e293b"
    ],
    "tags": [
      "dentes",
      "represa",
      "rio",
      "madeira",
      "cauda"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada de roedor e o corpo robusto do castor sentado.",
      "2. Trace a FAMOSA CAUDA LARGA EM FORMA DE REMO com textura quadriculada.",
      "3. Faça os bracinhos dianteiros segurando um TRONCO DE MADEIRA e patas traseiras.",
      "4. Desenhe os DOIS DENTES INCISIVOS GRANDES LARANJAS/BRANCOS e o focinho gordinho.",
      "5. Adicione as aparas de madeira no chão e o acabamento texturizado do pelo."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"72\" rx=\"28\" ry=\"24\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M78 92 C68 115 70 145 82 165 C95 170 120 170 132 165 C142 145 142 115 132 92\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"78\" cy=\"56\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"122\" cy=\"56\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M135 150 C165 152 180 162 175 174 C165 182 135 178 125 168\" fill=\"none\" stroke-width=\"3\"/> <line x1=\"140\" y1=\"155\" x2=\"165\" y2=\"175\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"150\" y1=\"152\" x2=\"172\" y2=\"170\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"140\" y1=\"170\" x2=\"165\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"80\" y=\"165\" width=\"16\" height=\"12\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"115\" y=\"165\" width=\"16\" height=\"12\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M88 120 C92 135 98 135 102 125 M118 120 C114 135 108 135 104 125\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"88\" cy=\"70\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"86\" cy=\"68\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"112\" cy=\"70\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"110\" cy=\"68\" r=\"1.5\" fill=\"#ffffff\"/> <ellipse cx=\"100\" cy=\"78\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/> <path d=\"M96 84 Q100 88 104 84\" fill=\"none\" stroke-width=\"1.8\"/> <rect x=\"97\" y=\"85\" width=\"3\" height=\"6\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <rect x=\"101\" y=\"85\" width=\"3\" height=\"6\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<rect x=\"82\" y=\"125\" width=\"40\" height=\"14\" rx=\"4\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"2\"/> <ellipse cx=\"82\" cy=\"132\" rx=\"3\" ry=\"7\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"122\" cy=\"132\" rx=\"3\" ry=\"7\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "guaxinim",
    "name": "Guaxinim Mascarado",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "G U A X I N I M",
    "colors": [
      "#475569",
      "#94a3b8",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "máscara",
      "cauda",
      "listras",
      "noite",
      "esperto"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada com bochechas peludas e o corpinho ágil.",
      "2. Trace a MÁSCARA PRETA DE BANDIDO atravessando os olhos e orelhas arredondadas.",
      "3. Faça a CAUDA FELPUDA COM ANÉIS LISTRADOS pretos e cinzas alternados.",
      "4. Desenhe os olhinhos expressivos, focinho pontudinho e boca sorridente.",
      "5. Adicione as patinhas com dedos finos e o peito peludo com detalhes."
    ],
    "layers": [
      "<path d=\"M70 65 C58 75 58 92 72 104 C82 110 118 110 128 104 C142 92 142 75 130 65 C115 55 85 55 70 65 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M82 104 C74 125 74 150 82 168 C95 172 115 172 125 168 C132 150 132 125 124 104\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"75\" cy=\"55\" r=\"9\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"75\" cy=\"55\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"125\" cy=\"55\" r=\"9\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"125\" cy=\"55\" r=\"5\" fill=\"#1e293b\"/> <path d=\"M62 82 C72 75 92 78 100 82 C108 78 128 75 138 82 C142 92 135 98 125 98 C115 98 105 88 100 88 C95 88 85 98 75 98 C65 98 58 92 62 82 Z\" fill=\"#1e293b\"/>",
      "<path d=\"M125 145 C155 142 175 125 170 95 C160 90 145 110 125 130\" fill=\"none\" stroke-width=\"3\"/> <rect x=\"85\" y=\"166\" width=\"12\" height=\"12\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"110\" y=\"166\" width=\"12\" height=\"12\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"82\" cy=\"85\" r=\"4.5\" fill=\"#ffffff\"/> <circle cx=\"82\" cy=\"85\" r=\"3\" fill=\"#0284c7\"/> <circle cx=\"81\" cy=\"84\" r=\"1.2\" fill=\"#ffffff\"/> <circle cx=\"118\" cy=\"85\" r=\"4.5\" fill=\"#ffffff\"/> <circle cx=\"118\" cy=\"85\" r=\"3\" fill=\"#0284c7\"/> <circle cx=\"117\" cy=\"84\" r=\"1.2\" fill=\"#ffffff\"/> <ellipse cx=\"100\" cy=\"95\" rx=\"4\" ry=\"2.8\" fill=\"#1e293b\"/> <path d=\"M96 98 Q100 102 104 98\" stroke=\"#ffffff\" stroke-width=\"1.8\"/>",
      "<path d=\"M135 135 L145 130 M142 122 L152 118 M150 110 L160 105 M158 98 L168 95\" stroke=\"#1e293b\" stroke-width=\"3.5\"/> <path d=\"M92 110 L100 122 L108 110\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "morcego",
    "name": "Morceguinho Noturno",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "M O R C E G O",
    "colors": [
      "#334155",
      "#64748b",
      "#cbd5e1",
      "#c084fc"
    ],
    "tags": [
      "asas",
      "noite",
      "vampirinho",
      "caverna",
      "voo"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça fofinha arredondada e o corpinho peludo do morceguinho.",
      "2. Trace as GRANDES ORELHAS PONTUDAS COM NERVURAS internas e audição aguçada.",
      "3. Faça as ASAS DE COURO COM DEDOS LONGOS ABERTOS em arcos graciosos.",
      "4. Desenhe os olhinhos brilhantes curiosos, focinho miúdo e DOIS DENTINHOS FOFOS.",
      "5. Adicione as patinhas segurando um galho de cabeça para baixo e estrelinhas noturnas."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"24\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"125\" rx=\"18\" ry=\"22\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M82 65 C72 35 65 30 72 25 C82 25 88 45 92 60\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M118 65 C128 35 135 30 128 25 C118 25 112 45 108 60\" fill=\"none\" stroke-width=\"2.5\"/> <line x1=\"75\" y1=\"38\" x2=\"84\" y2=\"48\" stroke-width=\"1.8\"/> <line x1=\"125\" y1=\"38\" x2=\"116\" y2=\"48\" stroke-width=\"1.8\"/>",
      "<path d=\"M82 115 C55 100 35 90 20 105 C30 125 45 130 55 125 C65 140 75 135 85 130\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M118 115 C145 100 165 90 180 105 C170 125 155 130 145 125 C135 140 125 135 115 130\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"92\" cy=\"78\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"90\" cy=\"76\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"108\" cy=\"78\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"106\" cy=\"76\" r=\"2\" fill=\"#ffffff\"/> <ellipse cx=\"100\" cy=\"88\" rx=\"3.5\" ry=\"2.5\" fill=\"#1e293b\"/> <path d=\"M96 92 Q100 96 104 92\" stroke-width=\"1.8\"/> <polygon points=\"97,93 98.5,97 100,93\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/> <polygon points=\"100,93 101.5,97 103,93\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<line x1=\"45\" y1=\"105\" x2=\"55\" y2=\"125\" stroke-width=\"1.5\"/> <line x1=\"155\" y1=\"105\" x2=\"145\" y2=\"125\" stroke-width=\"1.5\"/> <polygon points=\"165,45 168,52 175,52 170,57 172,64 165,60 158,64 160,57 155,52 162,52\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "coala",
    "name": "Coala no Eucalipto",
    "category": "animais",
    "sub": "selvagens",
    "diff": "facil",
    "word": "C O A L A",
    "colors": [
      "#94a3b8",
      "#cbd5e1",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "fofo",
      "narizão",
      "eucalipto",
      "austrália",
      "árvore"
    ],
    "stepsDesc": [
      "1. Desenhe o TRONCO DE EUCALIPTO VERTICAL e o corpinho rechonchudo do coala agarrado a ele.",
      "2. Trace as ENORMES ORELHAS REDONDAS MUITO FELPUDAS nas laterais da cabeça.",
      "3. Faça os braços e pernas gordinhos abraçando o tronco da árvore com garras firmes.",
      "4. Desenhe o GRANDE NARIZ OVAL PRETO DE COURO e os olhinhos doces.",
      "5. Adicione folhas ovais de eucalipto brotando do galho e detalhes do pelo fofinho."
    ],
    "layers": [
      "<line x1=\"60\" y1=\"15\" x2=\"60\" y2=\"185\" stroke=\"#78350f\" stroke-width=\"12\" stroke-linecap=\"round\"/> <circle cx=\"110\" cy=\"75\" r=\"26\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"115\" cy=\"128\" rx=\"28\" ry=\"26\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"82\" cy=\"62\" r=\"14\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"82\" cy=\"62\" r=\"8\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"138\" cy=\"62\" r=\"14\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"138\" cy=\"62\" r=\"8\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M90 110 C70 108 55 110 55 115 C55 120 70 122 90 120\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M95 140 C75 138 55 140 55 146 C55 152 75 150 95 148\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"110\" cy=\"78\" rx=\"8\" ry=\"12\" fill=\"#1e293b\"/> <ellipse cx=\"108\" cy=\"74\" rx=\"2.5\" ry=\"4\" fill=\"#ffffff\" opacity=\"0.6\"/> <circle cx=\"95\" cy=\"70\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"94\" cy=\"69\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"125\" cy=\"70\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"124\" cy=\"69\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M104 94 Q110 98 116 94\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<path d=\"M45 55 C35 45 42 35 55 42 C60 52 52 60 45 55 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M42 90 C32 80 38 70 52 78 C58 88 48 95 42 90 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "lemure",
    "name": "Lêmure de Olhos Grandes",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "L Ê M U R E",
    "colors": [
      "#64748b",
      "#cbd5e1",
      "#fbbf24",
      "#1e293b"
    ],
    "tags": [
      "olhos",
      "madagascar",
      "cauda",
      "anel",
      "árvore"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com focinho pontudinho e o corpinho ágil e esbelto do lêmure.",
      "2. Trace as orelhas pontudas triangulares com tufos e a silhueta das patinhas.",
      "3. Desenhe a ENORME CAUDA VERTICAL COM ANÉIS EM PRETO E BRANCO destacados.",
      "4. Faça os FAMOSOS OLHOS GIGANTESCOS HIPNÓTICOS DOURADOS/PRETOS com máscara escura.",
      "5. Adicione as almofadas dos dedos e acabamento dos anéis da cauda."
    ],
    "layers": [
      "<circle cx=\"90\" cy=\"72\" r=\"22\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"95\" cy=\"125\" rx=\"20\" ry=\"26\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"72,58 65,35 84,48\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/> <polygon points=\"108,58 115,35 96,48\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/> <path d=\"M82 145 C82 170 108 170 108 145\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M110 135 C130 138 145 125 145 90 C145 50 140 25 140 18\" fill=\"none\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"80\" cy=\"70\" r=\"8\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"80\" cy=\"70\" r=\"5\" fill=\"#f59e0b\"/> <circle cx=\"80\" cy=\"70\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"78\" cy=\"68\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"100\" cy=\"70\" r=\"8\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"70\" r=\"5\" fill=\"#f59e0b\"/> <circle cx=\"100\" cy=\"70\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"98\" cy=\"68\" r=\"1.5\" fill=\"#ffffff\"/> <ellipse cx=\"90\" cy=\"82\" rx=\"3.5\" ry=\"2.5\" fill=\"#1e293b\"/> <path d=\"M86 86 Q90 89 94 86\" stroke-width=\"1.8\"/>",
      "<line x1=\"138\" y1=\"30\" x2=\"145\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"5\"/> <line x1=\"140\" y1=\"45\" x2=\"147\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"5\"/> <line x1=\"142\" y1=\"60\" x2=\"149\" y2=\"60\" stroke=\"#1e293b\" stroke-width=\"5\"/> <line x1=\"143\" y1=\"75\" x2=\"150\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"5\"/> <line x1=\"138\" y1=\"95\" x2=\"147\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cavalo",
    "name": "Cavalinho Veloz",
    "category": "animais",
    "sub": "fazenda",
    "diff": "medio",
    "word": "C A V A L O",
    "colors": [
      "#854d0e",
      "#a16207",
      "#fef08a",
      "#1e293b"
    ],
    "tags": [
      "crina",
      "ferradura",
      "galope",
      "fazenda",
      "rápido"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça nobre alongada, o pescoço arqueado e o corpo do cavalo.",
      "2. Trace as 4 pernas ágeis com cascos firmes e a cauda longa sedosa.",
      "3. Faça as orelhas eretas e a LINDA CRINA ONDULADA fluindo ao vento.",
      "4. Desenhe o olho meigo expressivo, narinas abertas e o focinho.",
      "5. Adicione a estrela branca na testa e os detalhes de acabamento."
    ],
    "layers": [
      "<path d=\"M70 60 C55 65 52 88 64 98 C76 106 92 100 92 85 C92 70 82 58 70 60 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M85 82 C95 95 110 105 130 110 C155 115 165 135 155 155 C145 168 115 168 95 150 C85 138 85 115 80 95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M98 145 L98 180 L108 180 L108 145\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M112 145 L112 180 L122 180 L122 145\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M135 148 L135 180 L145 180 L145 148\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M148 145 L148 180 L158 180 L158 145\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"98\" y=\"174\" width=\"10\" height=\"6\" fill=\"#1e293b\"/> <rect x=\"112\" y=\"174\" width=\"10\" height=\"6\" fill=\"#1e293b\"/> <rect x=\"135\" y=\"174\" width=\"10\" height=\"6\" fill=\"#1e293b\"/> <rect x=\"148\" y=\"174\" width=\"10\" height=\"6\" fill=\"#1e293b\"/> <path d=\"M155 125 C175 135 185 160 175 185 C165 175 165 150 155 140\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M72 60 C70 40 78 32 82 32 C86 32 86 45 82 58\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M85 62 C88 42 96 35 100 35 C104 35 102 48 95 62\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M85 52 C95 48 108 55 110 65 C115 62 125 70 125 82 C132 80 138 92 135 105\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"76\" cy=\"72\" r=\"5.5\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"76\" cy=\"72\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"74\" cy=\"70\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"56\" cy=\"88\" r=\"2.5\" fill=\"#1e293b\"/> <path d=\"M58 94 Q65 98 70 93\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<polygon points=\"76,55 78,62 84,62 79,66 81,72 76,68 71,72 73,66 68,62 74,62\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "vaca",
    "name": "Vaquinha Malhada",
    "category": "animais",
    "sub": "fazenda",
    "diff": "facil",
    "word": "V A C A",
    "colors": [
      "#ffffff",
      "#1e293b",
      "#fbcfe8",
      "#e2e8f0"
    ],
    "tags": [
      "leite",
      "manchas",
      "chifres",
      "fazenda",
      "muu"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça quadrada-arredondada e o corpo rechonchudo da vaquinha.",
      "2. Trace os chifres curvos nas laterais e as orelhas caídas em folha.",
      "3. Faça as 4 patas firmes com cascos pretos e a cauda com vassourinha.",
      "4. Desenhe o grande focinho oval com duas narinas redondas e olhos meigos.",
      "5. Espalhe as manchas pretas malhadas clássicas e o sininho no pescoço."
    ],
    "layers": [
      "<rect x=\"75\" y=\"55\" width=\"50\" height=\"45\" rx=\"14\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"140\" rx=\"42\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M78 58 Q65 45 68 38 Q78 45 84 54\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M122 58 Q135 45 132 38 Q122 45 116 54\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M72 68 Q55 68 62 78 Q72 78 74 72\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M128 68 Q145 68 138 78 Q128 78 126 72\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<rect x=\"78\" y=\"155\" width=\"14\" height=\"28\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"108\" y=\"155\" width=\"14\" height=\"28\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"78\" y=\"177\" width=\"14\" height=\"6\" fill=\"#1e293b\"/> <rect x=\"108\" y=\"177\" width=\"14\" height=\"6\" fill=\"#1e293b\"/> <path d=\"M138 140 Q160 145 155 165\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <ellipse cx=\"155\" cy=\"168\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"20\" ry=\"12\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"92\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"108\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"86\" cy=\"68\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"85\" cy=\"67\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"114\" cy=\"68\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"113\" cy=\"67\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M72 125 C62 135 75 145 82 135 C88 128 80 120 72 125 Z\" fill=\"#1e293b\"/> <path d=\"M115 130 C128 122 135 140 122 145 C115 148 110 135 115 130 Z\" fill=\"#1e293b\"/> <path d=\"M85 102 Q100 108 115 102\" fill=\"none\" stroke-width=\"3\"/> <polygon points=\"97,108 103,108 100,115\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "porco",
    "name": "Porquinho Rosado",
    "category": "animais",
    "sub": "fazenda",
    "diff": "facil",
    "word": "P O R C O",
    "colors": [
      "#f472b6",
      "#fbcfe8",
      "#db2777",
      "#ffffff"
    ],
    "tags": [
      "lama",
      "focinho",
      "rabo",
      "fazenda",
      "oinc"
    ],
    "stepsDesc": [
      "1. Desenhe o círculo da cabeça e o corpo rechonchudo do porquinho.",
      "2. Trace as orelhinhas triangulares caídas para a frente.",
      "3. Faça as 4 patinhas curtas com casquinhos e o rabinho enrolado em espiral.",
      "4. Desenhe o famoso FOCINHO OVAL TIPO TOMADA com duas narinas redondas.",
      "5. Adicione os olhos alegres, bochechas coradas e detalhes para colorir em rosa."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"140\" rx=\"38\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M76 60 L62 42 Q78 40 84 55 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M124 60 L138 42 Q122 40 116 55 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"80\" y=\"160\" width=\"12\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"108\" y=\"160\" width=\"12\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M136 140 C155 138 165 145 155 155 C148 160 162 165 168 155\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"95\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"105\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"72\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"83\" cy=\"71\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"116\" cy=\"72\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"115\" cy=\"71\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"75\" cy=\"85\" r=\"5\" fill=\"#fbcfe8\" opacity=\"0.6\"/> <circle cx=\"125\" cy=\"85\" r=\"5\" fill=\"#fbcfe8\" opacity=\"0.6\"/> <path d=\"M94 98 Q100 102 106 98\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "ovelha",
    "name": "Ovelhinha de Lã",
    "category": "animais",
    "sub": "fazenda",
    "diff": "facil",
    "word": "O V E L H A",
    "colors": [
      "#ffffff",
      "#e2e8f0",
      "#94a3b8",
      "#1e293b"
    ],
    "tags": [
      "lã",
      "fofa",
      "nuvem",
      "fazenda",
      "méé"
    ],
    "stepsDesc": [
      "1. Desenhe o grande corpo em formato de NUVEM DE LÃ FOFA encaracolada.",
      "2. Trace a cabecinha oval no centro com topete de lã no topo.",
      "3. Faça as orelhas caídas compridas e as 4 perninhas finas escuras.",
      "4. Desenhe os olhinhos meigos com cílios e o focinho em Y.",
      "5. Adicione os caracóis da lã ao redor do corpo para dar textura fofa."
    ],
    "layers": [
      "<path d=\"M70 115 C55 110 50 130 60 145 C50 160 70 175 85 165 C95 178 120 178 130 165 C145 175 165 160 155 145 C165 130 160 110 145 115 C140 100 120 95 110 105 C100 95 80 100 70 115 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"100\" cy=\"95\" rx=\"18\" ry=\"22\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M88 78 C80 72 90 62 100 68 C110 62 120 72 112 78 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M82 92 Q68 95 72 105 Q82 102 85 98 Z\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M118 92 Q132 95 128 105 Q118 102 115 98 Z\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"82\" y=\"165\" width=\"8\" height=\"22\" rx=\"3\" fill=\"#1e293b\"/> <rect x=\"110\" y=\"165\" width=\"8\" height=\"22\" rx=\"3\" fill=\"#1e293b\"/>",
      "<circle cx=\"92\" cy=\"92\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"108\" cy=\"92\" r=\"3.5\" fill=\"#1e293b\"/> <path d=\"M97 102 L100 106 L103 102 M100 106 L100 110\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"130\" r=\"4\" fill=\"none\" stroke-width=\"1.8\"/> <circle cx=\"115\" cy=\"130\" r=\"4\" fill=\"none\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"145\" r=\"4\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "hamster",
    "name": "Hamster Bochechudo",
    "category": "animais",
    "sub": "pets",
    "diff": "facil",
    "word": "H A M S T E R",
    "colors": [
      "#f59e0b",
      "#fde68a",
      "#ffffff",
      "#ec4899"
    ],
    "tags": [
      "bochechas",
      "sementes",
      "pequeno",
      "roda",
      "pet"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho super arredondado como uma bolinha de pelúcia fofa.",
      "2. Trace as BOCHECHAS GIGANTES E CHEINHAS DE SEMENTES dos dois lados.",
      "3. Faça as orelhinhas redondas miúdas e as patinhas dianteiras no peito segurando uma semente.",
      "4. Desenhe os olhinhos pretos brilhantes como jabuticabas, focinho rosa e bigodes.",
      "5. Adicione as sementinhas de girassol e as patinhas traseiras fofinhas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"38\" ry=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"75\" cy=\"72\" r=\"9\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"75\" cy=\"72\" r=\"5\" fill=\"#fbcfe8\"/> <circle cx=\"125\" cy=\"72\" r=\"9\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"125\" cy=\"72\" r=\"5\" fill=\"#fbcfe8\"/> <path d=\"M68 115 C58 125 58 140 72 145 M132 115 C142 125 142 140 128 145\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"152\" width=\"12\" height=\"8\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"113\" y=\"152\" width=\"12\" height=\"8\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"92\" cy=\"132\" r=\"5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"108\" cy=\"132\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"82\" cy=\"98\" r=\"5.5\" fill=\"#1e293b\"/> <circle cx=\"80\" cy=\"96\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"118\" cy=\"98\" r=\"5.5\" fill=\"#1e293b\"/> <circle cx=\"116\" cy=\"96\" r=\"2\" fill=\"#ffffff\"/> <ellipse cx=\"100\" cy=\"108\" rx=\"4\" ry=\"2.8\" fill=\"#f43f5e\"/> <path d=\"M96 112 Q100 116 104 112\" stroke-width=\"1.8\"/> <line x1=\"72\" y1=\"110\" x2=\"52\" y2=\"108\" stroke-width=\"1.5\"/> <line x1=\"72\" y1=\"114\" x2=\"52\" y2=\"116\" stroke-width=\"1.5\"/> <line x1=\"128\" y1=\"110\" x2=\"148\" y2=\"108\" stroke-width=\"1.5\"/> <line x1=\"128\" y1=\"114\" x2=\"148\" y2=\"116\" stroke-width=\"1.5\"/>",
      "<ellipse cx=\"100\" cy=\"132\" rx=\"4\" ry=\"6\" fill=\"#1e293b\" transform=\"rotate(15 100 132)\"/> <line x1=\"99\" y1=\"128\" x2=\"101\" y2=\"136\" stroke=\"#ffffff\" stroke-width=\"1\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "porquinho-da-india",
    "name": "Porquinho-da-Índia",
    "category": "animais",
    "sub": "pets",
    "diff": "facil",
    "word": "P O R Q U I N H O",
    "colors": [
      "#b45309",
      "#f59e0b",
      "#ffffff",
      "#78350f"
    ],
    "tags": [
      "roedor",
      "manchas",
      "fofo",
      "peludo",
      "pet"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo alongado em formato de feijãozinho sem rabo.",
      "2. Trace a divisão das MANCHAS GRANDES DE PELAGEM bicolor/tricolor no dorso.",
      "3. Faça as 4 patinhas curtas de unhas pequenas saindo na base.",
      "4. Desenhe o olho redondo curioso, focinho rosado e boquinha em Y.",
      "5. Adicione folhas de cenoura fresca que ele adora mastigar."
    ],
    "layers": [
      "<path d=\"M60 115 C55 95 75 75 110 75 C145 75 160 95 155 125 C150 145 130 152 95 152 C65 152 55 135 60 115 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"78\" cy=\"85\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"78\" cy=\"85\" r=\"4\" fill=\"#fbcfe8\"/> <path d=\"M105 75 C115 105 100 135 112 152\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<rect x=\"70\" y=\"146\" width=\"10\" height=\"12\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"90\" y=\"148\" width=\"10\" height=\"12\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"125\" y=\"146\" width=\"10\" height=\"12\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"142\" y=\"144\" width=\"10\" height=\"12\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"75\" cy=\"100\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"73\" cy=\"98\" r=\"1.8\" fill=\"#ffffff\"/> <ellipse cx=\"60\" cy=\"115\" rx=\"4\" ry=\"3\" fill=\"#f43f5e\"/> <path d=\"M60 118 L60 124 M56 124 Q60 128 64 124\" stroke-width=\"1.8\"/>",
      "<path d=\"M50 128 C35 130 25 120 30 110\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"2.5\"/> <circle cx=\"28\" cy=\"108\" r=\"3\" fill=\"#22c55e\"/> <path d=\"M125 90 C135 100 145 115 140 130\" stroke=\"#b45309\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "furao",
    "name": "Furão Curioso",
    "category": "animais",
    "sub": "pets",
    "diff": "medio",
    "word": "F U R Ã O",
    "colors": [
      "#78716c",
      "#d6d3d1",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "comprido",
      "brincalhão",
      "máscara",
      "ágil",
      "pet"
    ],
    "stepsDesc": [
      "1. Desenhe o CORPO TUBULAR LONGO E FLEXÍVEL curvado em arco elástico.",
      "2. Trace a cabecinha afilada com focinho pontudo e orelhas baixinhas.",
      "3. Faça as 4 patinhas curtinhas e a cauda peluda alongada acompanhando o corpo.",
      "4. Desenhe a máscara escura nos olhos, nariz arrebitado e bigodes curiosos.",
      "5. Adicione texturas das curvas e brinquedinho de bolinha perto dele."
    ],
    "layers": [
      "<path d=\"M60 70 C50 80 55 95 68 98 C85 100 100 90 98 75 C95 65 75 60 60 70 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M92 88 C115 85 135 95 145 115 C155 135 145 155 120 160 C95 165 75 155 75 145\" fill=\"none\" stroke-width=\"3\"/>",
      "<circle cx=\"70\" cy=\"62\" r=\"5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"88\" cy=\"66\" r=\"5\" fill=\"none\" stroke-width=\"2\"/> <path d=\"M65 76 C72 72 82 72 90 76\" stroke=\"#1e293b\" stroke-width=\"4\"/>",
      "<rect x=\"95\" y=\"102\" width=\"8\" height=\"15\" rx=\"3\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"135\" y=\"148\" width=\"8\" height=\"15\" rx=\"3\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M75 145 C55 140 45 145 40 155\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"72\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"71\" cy=\"75\" r=\"1.2\" fill=\"#ffffff\"/> <circle cx=\"85\" cy=\"78\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"77\" r=\"1.2\" fill=\"#ffffff\"/> <ellipse cx=\"60\" cy=\"85\" rx=\"3\" ry=\"2\" fill=\"#f43f5e\"/> <path d=\"M62 88 Q66 92 70 88\" stroke-width=\"1.8\"/>",
      "<line x1=\"58\" y1=\"84\" x2=\"45\" y2=\"80\" stroke-width=\"1.5\"/> <line x1=\"58\" y1=\"86\" x2=\"45\" y2=\"88\" stroke-width=\"1.5\"/> <circle cx=\"160\" cy=\"155\" r=\"8\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "lontra",
    "name": "Lontrinha Aquática",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "L O N T R A",
    "colors": [
      "#78350f",
      "#b45309",
      "#fed7aa",
      "#38bdf8"
    ],
    "tags": [
      "rio",
      "água",
      "concha",
      "barriga",
      "fofo"
    ],
    "stepsDesc": [
      "1. Desenhe a lontrinha DEITADA DE BARRIGA PARA CIMA boiando na água.",
      "2. Trace a cabeça arredondada com orelhinhas aquáticas e focinho largo.",
      "3. Faça as patinhas dianteiras APOIADAS NO PEITO SEGURANDO UMA CONCHA/PEDRINHA.",
      "4. Desenhe os olhinhos contentes, focinho escuro e longos bigodes sensíveis.",
      "5. Adicione as ondulações concêntricas de água ao redor do corpo."
    ],
    "layers": [
      "<path d=\"M50 115 C50 95 80 85 115 88 C145 92 165 110 160 125 C150 140 120 140 85 135 C65 132 50 125 50 115 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"62\" cy=\"98\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"52\" cy=\"88\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"72\" cy=\"88\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M155 125 C170 128 185 125 188 120\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <circle cx=\"95\" cy=\"110\" r=\"5\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"110\" cy=\"110\" r=\"5\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"58\" cy=\"96\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"57\" cy=\"95\" r=\"1.2\" fill=\"#ffffff\"/> <circle cx=\"68\" cy=\"96\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"67\" cy=\"95\" r=\"1.2\" fill=\"#ffffff\"/> <ellipse cx=\"63\" cy=\"104\" rx=\"4\" ry=\"2.5\" fill=\"#1e293b\"/> <path d=\"M60 108 Q63 112 66 108\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"102\" cy=\"110\" rx=\"6\" ry=\"4\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M35 125 Q75 118 115 125 T175 125\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <path d=\"M45 135 Q85 128 125 135 T165 135\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "ornitorrinco",
    "name": "Ornitorrinco Curioso",
    "category": "animais",
    "sub": "selvagens",
    "diff": "desafio",
    "word": "O R N I T O R R I N C O",
    "colors": [
      "#0d9488",
      "#115e59",
      "#b45309",
      "#fef3c7"
    ],
    "tags": [
      "bico",
      "pato",
      "cauda",
      "castor",
      "austrália"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo hidrodinâmico alongado do ornitorrinco nadando.",
      "2. Trace o FAMOSO BICO LARGO DE PATO achatado na frente da cabeça.",
      "3. Faça a CAUDA LARGA DE CASTOR atrás e as 4 PATAS COM MEMBRANAS de natação.",
      "4. Desenhe os olhinhos atentos miúdos e as narinas no bico.",
      "5. Adicione as bolhas de ar subindo e contornos da água."
    ],
    "layers": [
      "<path d=\"M68 95 C68 80 95 80 125 85 C150 90 160 110 155 125 C145 138 105 135 80 130 C70 120 68 105 68 95 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 98 C30 98 25 105 32 112 C42 118 68 115 68 102 C68 95 50 98 40 98 Z\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M152 115 C175 112 188 120 185 132 C178 138 155 132 148 125\" fill=\"none\" stroke-width=\"3\"/> <path d=\"M85 130 L78 142 L88 140 M130 132 L125 145 L135 142\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"76\" cy=\"92\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"75\" cy=\"91\" r=\"1.2\" fill=\"#ffffff\"/> <ellipse cx=\"45\" cy=\"104\" rx=\"2\" ry=\"1.5\" fill=\"#ffffff\"/> <ellipse cx=\"52\" cy=\"104\" rx=\"2\" ry=\"1.5\" fill=\"#ffffff\"/>",
      "<circle cx=\"45\" cy=\"80\" r=\"3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/> <circle cx=\"55\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/> <path d=\"M65 145 Q105 140 145 145\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "tamandua",
    "name": "Tamanduá-Bandeira",
    "category": "animais",
    "sub": "selvagens",
    "diff": "desafio",
    "word": "T A M A N D U Á",
    "colors": [
      "#78716c",
      "#44403c",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "formiga",
      "língua",
      "cauda",
      "cerrado",
      "brasil"
    ],
    "stepsDesc": [
      "1. Desenhe o FOCINHO TUBULAR LONGO CURVADO PARA BAIXO e o corpo arqueado.",
      "2. Trace a ENORME CAUDA BANDEIRA FELPUDA E VOLUMOSA cobrindo a traseira.",
      "3. Faça as patas dianteiras com GARRAS FORTES curvadas para abrir formigueiros.",
      "4. Desenhe a FAIXA PRETA DIAGONAL DO COLETE no peito e ombro.",
      "5. Adicione a longa língua fina saindo do focinho com uma formiguinha na ponta!"
    ],
    "layers": [
      "<path d=\"M35 110 C45 95 65 92 85 92 C115 92 145 105 145 135 C135 155 110 155 90 148 C75 140 50 130 35 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M140 125 C165 100 185 105 185 130 C185 160 150 170 130 155\" fill=\"none\" stroke-width=\"3.5\"/>",
      "<rect x=\"75\" y=\"142\" width=\"12\" height=\"25\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"110\" y=\"142\" width=\"12\" height=\"25\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M72 165 C68 170 75 172 78 168\" stroke-width=\"2.5\"/>",
      "<circle cx=\"68\" cy=\"98\" r=\"3.5\" fill=\"#1e293b\"/> <path d=\"M32 110 C20 115 15 112 10 118\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/> <circle cx=\"7\" cy=\"118\" r=\"1.5\" fill=\"#1e293b\"/>",
      "<path d=\"M68 115 L95 110 L108 145 L85 145 Z\" fill=\"#1e293b\"/> <path d=\"M150 115 L165 125 M155 135 L170 142 M145 150 L160 155\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "tatu",
    "name": "Tatu-Bola Protetor",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "T A T U",
    "colors": [
      "#a8a29e",
      "#78716c",
      "#57534e",
      "#e7e5e4"
    ],
    "tags": [
      "casca",
      "bola",
      "armadura",
      "terra",
      "brasil"
    ],
    "stepsDesc": [
      "1. Desenhe a COURAÇA ARREDONDADA EM DOMO que protege as costas do tatu.",
      "2. Trace as FAIXAS/CINTAS MÓVEIS articuladas no centro da armadura.",
      "3. Faça a cabeça triangular protegida com escudo e a cauda com anéis córneos.",
      "4. Desenhe as 4 patinhas curtas com unhas cavadoras afiadas.",
      "5. Adicione olhinhos alertas, orelhas pontudas e pedrinhas no chão."
    ],
    "layers": [
      "<path d=\"M55 125 C55 80 145 80 145 125 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"85\" y1=\"83\" x2=\"85\" y2=\"125\" stroke-width=\"2.5\"/> <line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"125\" stroke-width=\"2.5\"/> <line x1=\"115\" y1=\"83\" x2=\"115\" y2=\"125\" stroke-width=\"2.5\"/>",
      "<polygon points=\"55,115 35,122 45,130\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M145 122 L172 128 L145 132\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"65\" y=\"125\" width=\"10\" height=\"15\" rx=\"3\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"125\" y=\"125\" width=\"10\" height=\"15\" rx=\"3\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"46\" cy=\"120\" r=\"3\" fill=\"#1e293b\"/> <path d=\"M48 112 C46 102 52 100 55 106\" stroke-width=\"2\"/> <path d=\"M62 138 L58 144 M122 138 L118 144\" stroke-width=\"2\"/>",
      "<circle cx=\"70\" cy=\"100\" r=\"2.5\" fill=\"none\" stroke-width=\"1.5\"/> <circle cx=\"130\" cy=\"100\" r=\"2.5\" fill=\"none\" stroke-width=\"1.5\"/> <circle cx=\"92\" cy=\"105\" r=\"2\" fill=\"none\" stroke-width=\"1.5\"/> <circle cx=\"108\" cy=\"105\" r=\"2\" fill=\"none\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "capivara",
    "name": "Capivara Tranquila",
    "category": "animais",
    "sub": "selvagens",
    "diff": "facil",
    "word": "C A P I V A R A",
    "colors": [
      "#854d0e",
      "#a16207",
      "#ca8a04",
      "#fef08a"
    ],
    "tags": [
      "rio",
      "calma",
      "pantanal",
      "brasil",
      "amiga"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com o FOCINHO RETANGULAR EM BLOCO e o corpo rechonchudo sereno.",
      "2. Trace as orelhinhas redondas no alto da cabeça e os olhos SEMPRE TRANQUILOS (ZEN).",
      "3. Faça as 4 patas firmes apoiadas no capim e o corpo sem cauda.",
      "4. Desenhe as narinas largas, boca amigável e bochechas robustas.",
      "5. Adicione uma LARANJINHA OU PASSARINHO descansando em cima da cabeça da capivara!"
    ],
    "layers": [
      "<path d=\"M60 80 C50 82 45 102 48 118 C52 130 75 132 88 130 C95 125 95 95 90 85 C85 78 70 78 60 80 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M85 105 C105 105 145 110 155 135 C158 155 140 165 110 165 C85 165 80 145 80 135\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"85\" cy=\"78\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"85\" cy=\"78\" r=\"3\" fill=\"#fbcfe8\"/>",
      "<rect x=\"75\" y=\"135\" width=\"15\" height=\"32\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"98\" y=\"135\" width=\"15\" height=\"32\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"130\" y=\"135\" width=\"15\" height=\"32\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M70 92 Q78 88 84 92\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <ellipse cx=\"52\" cy=\"115\" rx=\"3.5\" ry=\"5\" fill=\"#1e293b\"/> <path d=\"M54 124 Q65 128 72 122\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"68\" r=\"8\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M70 60 C72 56 76 56 74 60\" stroke=\"#15803d\" stroke-width=\"2\"/> <path d=\"M35 172 Q65 168 115 172 T175 172\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "mico-leao-dourado",
    "name": "Mico-Leão-Dourado",
    "category": "animais",
    "sub": "selvagens",
    "diff": "medio",
    "word": "M I C O - L E Ã O",
    "colors": [
      "#f59e0b",
      "#d97706",
      "#b45309",
      "#fef3c7"
    ],
    "tags": [
      "dourado",
      "juba",
      "mata",
      "atlantica",
      "brasil"
    ],
    "stepsDesc": [
      "1. Desenhe a cabecinha arredondada cercada pela GLORIOSA JUBA DOURADA RADIANTE.",
      "2. Trace o rostinho escuro expressivo no centro da juba e orelhinhas escondidas.",
      "3. Faça o corpinho ágil e esguio e a LONGA CAUDA DOURADA fluindo.",
      "4. Desenhe os olhinhos castanhos vivos e inteligentes e as mãozinhas com dedos compridos.",
      "5. Adicione mechas douradas vibrantes na juba e no peito."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M85 100 C75 120 78 145 88 165 C98 170 115 170 122 165 C128 145 128 120 118 100\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M82 65 C65 50 60 75 55 90 C60 110 70 115 82 110 M118 65 C135 50 140 75 145 90 C140 110 130 115 118 110 M75 62 C85 45 115 45 125 62\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\"/>",
      "<path d=\"M120 145 C145 150 165 135 160 105 C155 85 148 70 152 50\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <rect x=\"88\" y=\"162\" width=\"8\" height=\"12\" rx=\"3\" fill=\"none\" stroke-width=\"2\"/> <rect x=\"110\" y=\"162\" width=\"8\" height=\"12\" rx=\"3\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"93\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"92\" cy=\"77\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"107\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"106\" cy=\"77\" r=\"1.5\" fill=\"#ffffff\"/> <ellipse cx=\"100\" cy=\"86\" rx=\"3\" ry=\"2\" fill=\"#1e293b\"/> <path d=\"M96 90 Q100 93 104 90\" stroke-width=\"1.8\"/>",
      "<path d=\"M68 75 L60 70 M65 95 L56 95 M132 75 L140 70 M135 95 L144 95\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M92 108 L100 120 L108 108\" stroke=\"#f59e0b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "onca-pintada",
    "name": "Onça-Pintada Soberana",
    "category": "animais",
    "sub": "selvagens",
    "diff": "desafio",
    "word": "O N Ç A",
    "colors": [
      "#f59e0b",
      "#d97706",
      "#1e293b",
      "#ffffff"
    ],
    "tags": [
      "rosetas",
      "pantanal",
      "forte",
      "brasil",
      "rainha"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça felina robusta e o corpo ágil da rainha da mata.",
      "2. Trace as orelhas redondas com interior escuro e as 4 patas fortes.",
      "3. Faça a cauda longa e as patas com almofadinhas macias.",
      "4. Desenhe os olhos destemidos, nariz rosado e boca felina.",
      "5. Espalhe as ROSETAS E PINTAS AUTÊNTICAS de onça-pintada pelo corpo."
    ],
    "layers": [
      "<path d=\"M64 70 C52 82 54 102 68 112 C80 118 120 118 132 112 C146 102 148 82 136 70 C125 58 75 58 64 70 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M72 112 C60 125 65 152 80 168 C95 174 125 174 135 165 C140 145 135 125 128 112\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"68\" cy=\"62\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"68\" cy=\"62\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"132\" cy=\"62\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"132\" cy=\"62\" r=\"5\" fill=\"#1e293b\"/> <rect x=\"80\" y=\"152\" width=\"14\" height=\"20\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"110\" y=\"152\" width=\"14\" height=\"20\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M132 148 C155 152 172 142 168 120 C165 110 155 112 152 122\" fill=\"none\" stroke-width=\"3\"/>",
      "<ellipse cx=\"85\" cy=\"76\" rx=\"6\" ry=\"8\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"85\" cy=\"76\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"83\" cy=\"73\" r=\"1.8\" fill=\"#ffffff\"/> <ellipse cx=\"115\" cy=\"76\" rx=\"6\" ry=\"8\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"115\" cy=\"76\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"113\" cy=\"73\" r=\"1.8\" fill=\"#ffffff\"/> <polygon points=\"96,88 104,88 100,95\" fill=\"#1e293b\"/> <path d=\"M95 98 Q100 102 105 98\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"82\" cy=\"125\" r=\"4\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"82\" cy=\"125\" r=\"1.5\" fill=\"#1e293b\"/> <circle cx=\"116\" cy=\"125\" r=\"4\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"116\" cy=\"125\" r=\"1.5\" fill=\"#1e293b\"/> <circle cx=\"98\" cy=\"138\" r=\"5\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"98\" cy=\"138\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"152\" r=\"3.5\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"114\" cy=\"152\" r=\"3.5\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pato",
    "name": "Patinho na Lagoa",
    "category": "animais",
    "sub": "aves",
    "diff": "facil",
    "word": "P A T O",
    "colors": [
      "#facc15",
      "#f97316",
      "#ffffff",
      "#38bdf8"
    ],
    "tags": [
      "quack",
      "água",
      "lagoa",
      "amarelo",
      "bico"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça redonda e o corpo em gota d água do patinho.",
      "2. Acrescente o bico largo e achatado de pato e a cauda empinada.",
      "3. Desenhe as asas laterais dobradas com penas suaves.",
      "4. Faça o olho vivo expressivo e as ondulações na lagoa.",
      "5. Adicione os detalhes das penas e textura na água."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M60 72 C42 70 38 84 58 86 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"75\" cy=\"69\" r=\"2.5\" fill=\"#1e293b\"/> <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/> <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"2\"/> <path d=\"M45 170 Q100 160 165 170\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "galinha",
    "name": "Galinha Carijó",
    "category": "animais",
    "sub": "aves",
    "diff": "facil",
    "word": "G A L I N H A",
    "colors": [
      "#ffffff",
      "#ef4444",
      "#f59e0b",
      "#1e293b"
    ],
    "tags": [
      "ovo",
      "pena",
      "crista",
      "fazenda",
      "cocó"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho gordinho e fofo em gota da galinha carijó.",
      "2. Trace a CRISTA VERMELHA ondulada na cabeça e a barbela sob o bico.",
      "3. Faça a asa lateral arredondada e a cauda com penas arrebitadas em leque.",
      "4. Desenhe o olhinho redondo esperto e o biquinho amarelo triangular.",
      "5. Espalhe as PINTINHAS BRANCAS CARIJÓ e desenhe os pés no ninho com ovos."
    ],
    "layers": [
      "<path d=\"M75 75 C65 85 62 105 75 125 C88 145 120 150 145 135 C158 120 155 95 138 82 C125 72 105 70 95 72\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 70 C80 55 90 50 95 55 C100 48 110 52 110 65\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M72 88 C68 95 74 98 76 92\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M100 95 C90 105 92 125 105 130 C120 135 128 115 122 100 Z\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M142 95 L165 85 L158 102 L168 108 L145 118\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/> <path d=\"M95 145 L92 165 M120 142 L122 165\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"80\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"83\" cy=\"78\" r=\"1.5\" fill=\"#ffffff\"/> <polygon points=\"72,82 60,86 74,90\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"105\" cy=\"110\" r=\"1.8\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"115\" cy=\"118\" r=\"1.8\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"98\" cy=\"122\" r=\"1.8\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/> <ellipse cx=\"85\" cy=\"168\" rx=\"8\" ry=\"5\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"102\" cy=\"170\" rx=\"8\" ry=\"5\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "galo",
    "name": "Galo Madrugador",
    "category": "animais",
    "sub": "aves",
    "diff": "medio",
    "word": "G A L O",
    "colors": [
      "#dc2626",
      "#2563eb",
      "#16a34a",
      "#f59e0b"
    ],
    "tags": [
      "canto",
      "manhã",
      "crista",
      "penas",
      "fazenda"
    ],
    "stepsDesc": [
      "1. Desenhe o peito estufado orgulhoso e o corpo altivo do galo cantador.",
      "2. Trace a ENORME CRISTA DENTADA VERMELHA ALTA e a barbela longa dupla.",
      "3. Faça as MAGNÍFICAS PENAS DA CAUDA EM FOICE longas e curvas caindo.",
      "4. Desenhe o bico aberto cantando ('Cocorocó!'), esporão afiado e pés firmes.",
      "5. Adicione notas musicais saindo do bico e o sol nascendo no horizonte."
    ],
    "layers": [
      "<path d=\"M78 80 C70 95 72 120 85 138 C102 152 135 148 142 125 C145 105 130 90 115 85 C102 82 90 75 85 70\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M78 68 C70 45 82 35 88 42 C94 32 105 35 106 48 C115 40 124 48 118 65\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M72 90 C65 102 78 108 78 95\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M135 105 C155 75 175 75 185 95 C175 125 150 135 138 128\" fill=\"none\" stroke-width=\"3\"/> <path d=\"M140 115 C165 95 185 110 180 135 C165 150 145 142 138 132\" fill=\"none\" stroke-width=\"2.5\"/> <line x1=\"98\" y1=\"145\" x2=\"95\" y2=\"175\" stroke-width=\"2.8\" stroke-linecap=\"round\"/> <line x1=\"120\" y1=\"142\" x2=\"122\" y2=\"175\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"88\" cy=\"78\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"86\" cy=\"76\" r=\"1.5\" fill=\"#ffffff\"/> <polygon points=\"75,80 58,82 74,88\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"74,88 62,90 74,92\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M48 72 Q42 62 50 55 M55 60 Q62 50 58 42\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <circle cx=\"165\" cy=\"40\" r=\"15\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pintinho",
    "name": "Pintinho Amarelinho",
    "category": "animais",
    "sub": "aves",
    "diff": "facil",
    "word": "P I N T I N H O",
    "colors": [
      "#fde047",
      "#facc15",
      "#f97316",
      "#1e293b"
    ],
    "tags": [
      "piu",
      "filhote",
      "amarelo",
      "fofo",
      "ovo"
    ],
    "stepsDesc": [
      "1. Desenhe a bolinha super fofinha da cabeça e o corpinho redondo do pintinho.",
      "2. Trace o TUFO DE PENINHAS ARREPIADAS no topo da cabeça e as asinhas curtinhas.",
      "3. Faça os pezinhos delicados em garfo e o rabinho pontudinho.",
      "4. Desenhe os olhinhos redondos grandes e o biquinho miúdo aberto piando.",
      "5. Adicione a CASCA DO OVO QUEBRADA embaixo de onde ele acabou de nascer!"
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"78\" r=\"25\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"120\" rx=\"28\" ry=\"24\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M96 54 C94 45 98 42 100 48 C102 42 106 44 104 54\" stroke-width=\"2\"/> <path d=\"M76 112 C68 118 70 128 80 128 M124 112 C132 118 130 128 120 128\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"90\" y1=\"144\" x2=\"88\" y2=\"168\" stroke-width=\"2.5\"/> <line x1=\"110\" y1=\"144\" x2=\"112\" y2=\"168\" stroke-width=\"2.5\"/> <path d=\"M82 168 L88 168 L94 168 M106 168 L112 168 L118 168\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"90\" cy=\"75\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"88\" cy=\"73\" r=\"1.8\" fill=\"#ffffff\"/> <circle cx=\"110\" cy=\"75\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"108\" cy=\"73\" r=\"1.8\" fill=\"#ffffff\"/> <polygon points=\"96,82 100,88 104,82\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M68 152 L78 140 L88 155 L100 138 L112 155 L122 140 L132 152 C130 175 70 175 68 152 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pinguim",
    "name": "Pinguim Imperador",
    "category": "animais",
    "sub": "aves",
    "diff": "facil",
    "word": "P I N G U I M",
    "colors": [
      "#1e293b",
      "#ffffff",
      "#f59e0b",
      "#38bdf8"
    ],
    "tags": [
      "gelo",
      "antártida",
      "peixe",
      "polar",
      "frio"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo oval ereto em formato de pino do pinguim.",
      "2. Trace as asas laterais em formato de nadadeiras prontas para mergulho.",
      "3. Faça as duas patinhas palmadas laranjas na base do gelo.",
      "4. Desenhe o fraque preto ao redor da barriguinha branca e o bico pontudo.",
      "5. Adicione os olhos simpáticos e o chão de gelo com neve."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"38\" ry=\"50\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M62 105 Q50 130 55 145 Q65 145 68 125\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M138 105 Q150 130 145 145 Q135 145 132 125\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"85\" cy=\"166\" rx=\"12\" ry=\"6\" fill=\"#f97316\"/> <ellipse cx=\"115\" cy=\"166\" rx=\"12\" ry=\"6\" fill=\"#f97316\"/>",
      "<path d=\"M75 90 C75 140 85 155 100 155 C115 155 125 140 125 90 C125 80 115 75 100 75 C85 75 75 80 75 90 Z\" fill=\"none\" stroke-width=\"2.5\"/> <polygon points=\"96,92 104,92 100,100\" fill=\"#f97316\"/> <circle cx=\"88\" cy=\"85\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"112\" cy=\"85\" r=\"3.5\" fill=\"#1e293b\"/>",
      "<path d=\"M30 172 Q100 162 170 172\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "tucano",
    "name": "Tucano do Bico Amarelo",
    "category": "animais",
    "sub": "aves",
    "diff": "medio",
    "word": "T U C A N O",
    "colors": [
      "#1e293b",
      "#f59e0b",
      "#dc2626",
      "#ffffff"
    ],
    "tags": [
      "bico",
      "brasil",
      "selva",
      "floresta",
      "frutas"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada e o corpo da ave empoleirada.",
      "2. Trace o BICO GIGANTE E CURVO característico do tucano.",
      "3. Adicione a asa lateral dobrada e o galho de árvore onde repousa.",
      "4. Faça o olho expressivo com anel colorido e o peito branco destacado.",
      "5. Desenhe as divisões de cores no bico e a cauda longa."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"75\" r=\"26\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"80\" cy=\"130\" rx=\"28\" ry=\"38\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M95 62 C125 56 168 70 172 95 C150 104 115 95 95 90 Z\" fill=\"none\" stroke-width=\"3\"/>",
      "<path d=\"M68 110 C62 135 75 160 88 155 C95 148 92 125 80 110 Z\" fill=\"none\" stroke-width=\"2.8\"/> <line x1=\"25\" y1=\"165\" x2=\"160\" y2=\"165\" stroke-width=\"4.5\" stroke-linecap=\"round\"/> <ellipse cx=\"78\" cy=\"165\" rx=\"4\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"88\" cy=\"165\" rx=\"4\" ry=\"3\" fill=\"#1e293b\"/>",
      "<circle cx=\"82\" cy=\"74\" r=\"7\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/> <circle cx=\"82\" cy=\"74\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"81\" cy=\"73\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M95 75 Q85 95 72 98 Q65 88 72 75\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M145 68 L148 98\" stroke-width=\"2.2\"/> <path d=\"M160 78 L162 98\" stroke-width=\"2.2\"/> <path d=\"M65 155 L55 185 L65 185 L75 155\" fill=\"none\" stroke-width=\"2.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "arara",
    "name": "Arara-Azul Colorida",
    "category": "animais",
    "sub": "aves",
    "diff": "medio",
    "word": "A R A R A",
    "colors": [
      "#2563eb",
      "#facc15",
      "#16a34a",
      "#1e293b"
    ],
    "tags": [
      "penas",
      "voo",
      "brasil",
      "azul",
      "floresta"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça elegante e o corpo altivo da arara pousada no galho.",
      "2. Trace o GRANDE BICO CURVADO EM GANCHO PODEROSO e a máscara branca ao redor do olho.",
      "3. Faça a LONGA CAUDA GRADUADA DE PENAS que desce quase até o final da página.",
      "4. Desenhe as camadas de penas das asas em faixas (azul, amarelo e vermelho).",
      "5. Adicione o galho com folhas tropicais e detalhes das garras firmes."
    ],
    "layers": [
      "<path d=\"M85 55 C70 65 70 90 82 105 C95 120 110 135 110 155\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M95 55 C115 65 125 90 120 130 C118 145 115 155 110 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M80 68 C65 72 58 85 68 98 C78 102 85 92 82 85 Z\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M82 85 C80 92 88 95 90 88 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M105 145 L112 195 L118 190 L122 145\" fill=\"none\" stroke-width=\"3\"/> <path d=\"M100 95 C115 105 125 120 120 145 C110 150 95 135 95 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"88\" cy=\"76\" rx=\"8\" ry=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"90\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"89\" cy=\"75\" r=\"1.2\" fill=\"#ffffff\"/> <path d=\"M84 76 L88 78 M84 79 L87 80\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<line x1=\"60\" y1=\"150\" x2=\"150\" y2=\"150\" stroke=\"#78350f\" stroke-width=\"6\" stroke-linecap=\"round\"/> <circle cx=\"98\" cy=\"150\" r=\"4\" fill=\"#64748b\"/> <circle cx=\"106\" cy=\"150\" r=\"4\" fill=\"#64748b\"/> <path d=\"M135 140 C145 130 155 135 150 145 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "coruja",
    "name": "Corujinha da Sabedoria",
    "category": "animais",
    "sub": "aves",
    "diff": "medio",
    "word": "C O R U J A",
    "colors": [
      "#78350f",
      "#b45309",
      "#fef3c7",
      "#f59e0b"
    ],
    "tags": [
      "olhos",
      "noite",
      "sabedoria",
      "livros",
      "estudo"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada e o corpo fofo da corujinha.",
      "2. Acrescente os penachos das orelhas no topo e as duas asas fechadas.",
      "3. Trace o galho de apoio com as garrinhas segurando firmemente.",
      "4. Desenhe os GRANDES OLHOS CONCÊNTRICOS e o biquinho curvo.",
      "5. Adicione as texturas de penas em escama no peito."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"75\" r=\"34\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"135\" rx=\"36\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"72,50 60,22 84,42\" fill=\"none\" stroke-width=\"2.8\"/> <polygon points=\"128,50 140,22 116,42\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M66 115 Q55 140 70 155 Q78 145 74 120\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M134 115 Q145 140 130 155 Q122 145 126 120\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"30\" y1=\"168\" x2=\"170\" y2=\"168\" stroke-width=\"4.5\" stroke-linecap=\"round\"/> <ellipse cx=\"88\" cy=\"168\" rx=\"5\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"112\" cy=\"168\" rx=\"5\" ry=\"3\" fill=\"#1e293b\"/>",
      "<circle cx=\"82\" cy=\"76\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"82\" cy=\"76\" r=\"8\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"82\" cy=\"76\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"80\" cy=\"74\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"118\" cy=\"76\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"118\" cy=\"76\" r=\"8\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"118\" cy=\"76\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"116\" cy=\"74\" r=\"1.5\" fill=\"#ffffff\"/> <polygon points=\"98,82 102,82 100,92\" fill=\"#f59e0b\"/>",
      "<path d=\"M85 125 Q92 120 100 125 Q108 120 115 125 M88 135 Q95 130 100 135 Q105 130 112 135 M90 145 Q95 140 100 145 Q105 140 110 145\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "flamingo",
    "name": "Flamingo Elegante",
    "category": "animais",
    "sub": "aves",
    "diff": "medio",
    "word": "F L A M I N G O",
    "colors": [
      "#f472b6",
      "#ec4899",
      "#1e293b",
      "#fbcfe8"
    ],
    "tags": [
      "rosa",
      "pescoço",
      "elegante",
      "uma_perna",
      "lago"
    ],
    "stepsDesc": [
      "1. Desenhe o LONGO PESCOÇO EM FORMA DE S GRACIOSO e o corpo oval do flamingo.",
      "2. Trace o BICO CURVADO PARA BAIXO com a ponta preta característica.",
      "3. Faça a PERNA LONGA EM PÉ e a OUTRA PERNA DOBRADA EM NÚMERO 4.",
      "4. Desenhe as penas onduladas da asa e a cauda delicada de plumas.",
      "5. Adicione as ondulações suaves na água onde ele se apoia com graça."
    ],
    "layers": [
      "<path d=\"M85 45 C75 52 75 65 85 70 C95 72 105 60 100 50 C95 42 88 42 85 45 Z\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M92 70 C98 85 85 105 92 120 C95 125 105 125 115 125\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"125\" cy=\"128\" rx=\"24\" ry=\"16\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M80 52 C68 55 65 65 68 72 C74 74 80 68 82 62 Z\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M68 64 C66 70 70 72 72 70 Z\" fill=\"#1e293b\"/>",
      "<line x1=\"120\" y1=\"144\" x2=\"120\" y2=\"185\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M128\" y1=\"144\" d=\"M128 144 L142 160 L120 162\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"90\" cy=\"52\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"89\" cy=\"51\" r=\"1.2\" fill=\"#ffffff\"/> <path d=\"M118 122 C125 115 138 118 140 128 C135 135 122 135 118 128 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M95 185 Q120 180 145 185\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <path d=\"M142 125 L155 122 L148 130\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "aguia",
    "name": "Águia Soberana",
    "category": "animais",
    "sub": "aves",
    "diff": "desafio",
    "word": "Á G U I A",
    "colors": [
      "#78350f",
      "#ffffff",
      "#f59e0b",
      "#1e293b"
    ],
    "tags": [
      "garra",
      "voo",
      "rainha",
      "montanha",
      "visão"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça imponente com o CORPO MUSCULOSO da águia soberana.",
      "2. Trace o FORTE BICO CURVADO EM GANCHO AMARELO e as penas do capuz branco.",
      "3. Faça as GRANDES ASAS ABERTAS COM PENAS DE VOO separadas e a cauda em leque.",
      "4. Desenhe o olhar feroz e focado com a sobrancelha marcada e pupila afiada.",
      "5. Adicione as GARRAS CURVADAS PODEROSAS agarrando um rochedo firme."
    ],
    "layers": [
      "<path d=\"M85 60 C75 75 75 95 88 110 C98 115 115 115 125 105 C132 95 130 75 122 62 C112 52 95 52 85 60 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M92 110 C85 130 90 155 102 170 C112 172 125 170 128 155 C125 135 122 115 120 110\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M80 78 C65 78 55 92 68 102 C75 100 80 92 82 85 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M82 108 L88 118 L95 108 L102 118 L110 108 L118 118 L124 108\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M82 120 C50 110 30 118 20 135 C35 142 55 138 78 132\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M125 120 C155 110 175 118 185 135 C170 142 150 138 128 132\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"88\" y1=\"72\" x2=\"100\" y2=\"76\" stroke=\"#1e293b\" stroke-width=\"3\"/> <circle cx=\"94\" cy=\"80\" r=\"4.5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"94\" cy=\"80\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"93\" cy=\"79\" r=\"1\" fill=\"#ffffff\"/>",
      "<path d=\"M92 170 L85 180 L92 178 M115 170 L122 180 L115 178\" stroke=\"#facc15\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M70 180 C90 175 125 175 140 180 L135 185 L75 185 Z\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pavao",
    "name": "Pavão Majestoso",
    "category": "animais",
    "sub": "aves",
    "diff": "desafio",
    "word": "P A V Ã O",
    "colors": [
      "#0284c7",
      "#059669",
      "#f59e0b",
      "#1e293b"
    ],
    "tags": [
      "penas",
      "leque",
      "olhos_pena",
      "azul",
      "realeza"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo esbelto do pavão e a base do seu magnífico leque.",
      "2. Trace o ENORME LEQUE SEMICIRCULAR DA CAUDA aberto em toda a sua glória.",
      "3. Faça a COROA DE PENAS COM BOLINHAS na cabeça e o peito real esbelto.",
      "4. Desenhe as dezenas de OCELOS (OLHOS MÁGICOS) concêntricos espalhados pelo leque.",
      "5. Adicione os olhinhos elegantes, biquinho gracioso e pés de príncipe."
    ],
    "layers": [
      "<path d=\"M50 140 C50 50 150 50 150 140 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M92 100 C85 110 85 130 92 145 C98 152 108 152 112 145 C118 130 118 110 110 100 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"102\" cy=\"85\" r=\"10\" fill=\"none\" stroke-width=\"2.2\"/> <line x1=\"102\" y1=\"75\" x2=\"96\" y2=\"62\" stroke-width=\"1.8\"/> <line x1=\"102\" y1=\"75\" x2=\"102\" y2=\"60\" stroke-width=\"1.8\"/> <line x1=\"102\" y1=\"75\" x2=\"108\" y2=\"62\" stroke-width=\"1.8\"/> <circle cx=\"96\" cy=\"62\" r=\"2.5\" fill=\"#0284c7\"/> <circle cx=\"102\" cy=\"60\" r=\"2.5\" fill=\"#0284c7\"/> <circle cx=\"108\" cy=\"62\" r=\"2.5\" fill=\"#0284c7\"/>",
      "<line x1=\"98\" y1=\"150\" x2=\"95\" y2=\"175\" stroke-width=\"2.2\"/> <line x1=\"106\" y1=\"150\" x2=\"108\" y2=\"175\" stroke-width=\"2.2\"/> <polygon points=\"98,88 92,92 98,94\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<circle cx=\"102\" cy=\"84\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"101\" cy=\"83\" r=\"1\" fill=\"#ffffff\"/> <ellipse cx=\"70\" cy=\"110\" rx=\"8\" ry=\"12\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2\"/> <circle cx=\"70\" cy=\"110\" r=\"4\" fill=\"#22c55e\"/> <ellipse cx=\"130\" cy=\"110\" rx=\"8\" ry=\"12\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2\"/> <circle cx=\"130\" cy=\"110\" r=\"4\" fill=\"#22c55e\"/>",
      "<ellipse cx=\"85\" cy=\"85\" rx=\"8\" ry=\"12\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2\"/> <circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#22c55e\"/> <ellipse cx=\"118\" cy=\"85\" rx=\"8\" ry=\"12\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2\"/> <circle cx=\"118\" cy=\"85\" r=\"4\" fill=\"#22c55e\"/> <ellipse cx=\"102\" cy=\"68\" rx=\"7\" ry=\"10\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2\"/> <circle cx=\"102\" cy=\"68\" r=\"3.5\" fill=\"#22c55e\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cisne",
    "name": "Cisne Encantado",
    "category": "animais",
    "sub": "aves",
    "diff": "medio",
    "word": "C I S N E",
    "colors": [
      "#ffffff",
      "#f97316",
      "#1e293b",
      "#e0f2fe"
    ],
    "tags": [
      "elegante",
      "lago",
      "branco",
      "conto",
      "princesa"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo suave flutuando na água e o PESCOÇO REGAL EM S gracioso.",
      "2. Trace as ASAS DOBRADAS COM PENAS EM CAMADAS macias como nuvens.",
      "3. Faça a cabeça delicada com o BICO LARANJA E A PROTUBERÂNCIA PRETA na base.",
      "4. Desenhe o olho expressivo meigo e a máscara escura elegante.",
      "5. Adicione as ondas cristalinas do lago e o reflexo suave embaixo."
    ],
    "layers": [
      "<path d=\"M70 120 C70 95 105 95 140 105 C155 110 160 125 155 135 C145 145 105 145 75 140 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M85 125 C82 95 95 75 90 62 C88 55 80 55 78 62\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"75\" cy=\"62\" r=\"10\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M68 64 L52 68 L68 72 Z\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2\"/> <ellipse cx=\"68\" cy=\"64\" rx=\"3\" ry=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M98 108 C115 100 135 105 145 115 C140 125 120 128 105 125\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M108 118 C120 112 135 115 142 125\" stroke-width=\"2\"/>",
      "<circle cx=\"74\" cy=\"62\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"73\" cy=\"61\" r=\"1\" fill=\"#ffffff\"/> <path d=\"M68 64 L72 61\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M55 142 Q100 135 145 142 T175 142\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <path d=\"M70 150 Q105 145 140 150\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pombo",
    "name": "Pombinha da Paz",
    "category": "animais",
    "sub": "aves",
    "diff": "facil",
    "word": "P O M B A",
    "colors": [
      "#ffffff",
      "#cbd5e1",
      "#10b981",
      "#fbcfe8"
    ],
    "tags": [
      "ramo",
      "paz",
      "oliva",
      "branca",
      "voo"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho macio e o peito estufadinho suave da pombinha da paz.",
      "2. Trace as asinhas fechadas e o rabinho delicado em leque.",
      "3. Faça a cabecinha redonda e o RAMINHO DE OLIVEIRA VERDE no bico.",
      "4. Desenhe o olhinho meigo com anel laranja e o biquinho claro.",
      "5. Adicione as folhinhas de paz no ramo e as patinhas cor-de-rosa."
    ],
    "layers": [
      "<circle cx=\"78\" cy=\"78\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M85 92 C80 110 82 135 98 145 C115 152 142 142 145 120 C145 105 130 92 108 88\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"65,80 50,83 66,86\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M100 102 C115 105 135 118 138 135 C125 140 110 135 102 120 Z\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M142 125 L165 128 L158 138 L138 135\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"102\" y1=\"148\" x2=\"100\" y2=\"168\" stroke=\"#f43f5e\" stroke-width=\"2.2\"/> <line x1=\"118\" y1=\"146\" x2=\"118\" y2=\"168\" stroke=\"#f43f5e\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"76\" r=\"4.5\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"1.5\"/> <circle cx=\"76\" cy=\"76\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"#ffffff\"/>",
      "<path d=\"M50 83 C35 75 25 80 20 85\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"2.2\"/> <ellipse cx=\"28\" cy=\"76\" rx=\"4\" ry=\"2\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1\" transform=\"rotate(-30 28 76)\"/> <ellipse cx=\"38\" cy=\"80\" rx=\"4\" ry=\"2\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1\" transform=\"rotate(20 38 80)\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "beija-flor",
    "name": "Beija-Flor Veloz",
    "category": "animais",
    "sub": "aves",
    "diff": "medio",
    "word": "B E I J A - F L O R",
    "colors": [
      "#10b981",
      "#06b6d4",
      "#ec4899",
      "#ffffff"
    ],
    "tags": [
      "flor",
      "néctar",
      "asas",
      "rápido",
      "colorido"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho minúsculo e ágil pairando no ar com calda pontuda.",
      "2. Trace o LONGO BICO FINO COMO UMA AGULHA voltado para a flor.",
      "3. Faça as ASAS RÁPIDAS COM LINHAS DE MOVIMENTO vibrante.",
      "4. Desenhe a FLOR EM FORMA DE SINO cheia de néctar doce perto do bico.",
      "5. Adicione o olhinho preto reluzente e o peito com brilho furta-cor."
    ],
    "layers": [
      "<ellipse cx=\"115\" cy=\"95\" rx=\"16\" ry=\"22\" fill=\"none\" stroke-width=\"2.8\" transform=\"rotate(-25 115 95)\"/> <circle cx=\"98\" cy=\"78\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"90\" y1=\"80\" x2=\"45\" y2=\"92\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M125 110 L145 135 L135 138 L120 118\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M115 80 C118 55 135 48 142 55 C142 70 128 85 118 88\" fill=\"none\" stroke-width=\"2.5\"/> <line x1=\"125\" y1=\"50\" x2=\"148\" y2=\"45\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"2 2\"/> <line x1=\"130\" y1=\"60\" x2=\"152\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"2 2\"/>",
      "<circle cx=\"96\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"95\" cy=\"75\" r=\"1.2\" fill=\"#ffffff\"/> <path d=\"M102 88 Q110 95 118 88\" stroke=\"#10b981\" stroke-width=\"2\"/>",
      "<path d=\"M35 105 C25 95 28 80 40 85 C45 92 42 102 35 105 Z\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"44\" cy=\"92\" r=\"2.5\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pelicano",
    "name": "Pelicano Pescador",
    "category": "animais",
    "sub": "aves",
    "diff": "medio",
    "word": "P E L I C A N O",
    "colors": [
      "#ffffff",
      "#f59e0b",
      "#38bdf8",
      "#1e293b"
    ],
    "tags": [
      "bolsa",
      "peixe",
      "mar",
      "bico",
      "porto"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça imponente com o corpo forte do pelicano.",
      "2. Trace a ENORME BOLSA GULAR ELÁSTICA pendurada embaixo do bico longo.",
      "3. Faça as asas robustas e as patas com membranas interdigitais.",
      "4. Desenhe o rabinho de um PEIXINHO PULANDO DENTRO DA BOLSA GULAR!",
      "5. Adicione olhinhos alertas, crista suave na nuca e água salpicando."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"65\" r=\"20\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"120\" cy=\"125\" rx=\"35\" ry=\"25\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"85\" y1=\"62\" x2=\"35\" y2=\"62\" stroke=\"#1e293b\" stroke-width=\"3\"/> <path d=\"M35\" y1=\"62\" d=\"M35 62 C35 85 75 95 85 80\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"105\" y=\"148\" width=\"10\" height=\"25\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"125\" y=\"148\" width=\"10\" height=\"25\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M110 110 C125 112 145 125 140 140 C128 142 115 130 110 115 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"85\" cy=\"60\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"59\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M48 70 C42 66 40 75 46 75\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"40,70 34,66 36,74\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M98 55 C108 52 110 60 102 65\" stroke-width=\"2\"/> <path d=\"M85 175 Q120 170 155 175\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "gaivota",
    "name": "Gaivota da Praia",
    "category": "animais",
    "sub": "aves",
    "diff": "facil",
    "word": "G A I V O T A",
    "colors": [
      "#ffffff",
      "#64748b",
      "#f59e0b",
      "#38bdf8"
    ],
    "tags": [
      "mar",
      "praia",
      "vento",
      "voo",
      "peixe"
    ],
    "stepsDesc": [
      "1. Desenhe a gaivota voando livre com peito aerodinâmico e cauda aberta.",
      "2. Trace as ASAS LONGAS ANGULADAS COM PONTAS PRETAS abertas no ar.",
      "3. Faça a cabeça afilada com o BICO AMARELO COM PONTINHO VERMELHO.",
      "4. Desenhe o olho focado no mar e as patinhas recolhidas durante o voo.",
      "5. Adicione as ondas do oceano quebrando embaixo e nuvenzinhas no céu."
    ],
    "layers": [
      "<path d=\"M85 95 C80 85 90 75 105 78 C120 82 135 95 130 110 C125 120 105 115 90 108 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 80 C80 60 55 58 35 70 C55 78 78 85 95 90\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M115 85 C135 60 160 58 180 70 C160 78 138 85 120 90\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"85,88 70,88 84,93\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"76\" cy=\"90\" r=\"1.5\" fill=\"#ef4444\"/> <polygon points=\"128,108 148,115 142,125 125,115\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"92\" cy=\"85\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"91\" cy=\"84\" r=\"1.2\" fill=\"#ffffff\"/> <polygon points=\"35,70 42,73 40,65\" fill=\"#1e293b\"/> <polygon points=\"180,70 173,73 175,65\" fill=\"#1e293b\"/>",
      "<path d=\"M30 165 Q60 155 90 165 T150 165 T190 165\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "periquito",
    "name": "Periquito Verde",
    "category": "animais",
    "sub": "aves",
    "diff": "facil",
    "word": "P E R I Q U I T O",
    "colors": [
      "#22c55e",
      "#facc15",
      "#0284c7",
      "#f97316"
    ],
    "tags": [
      "gaiola",
      "verde",
      "amigo",
      "penas",
      "cantor"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho arredondado simpático e o pescoço curto do periquito.",
      "2. Trace o BICO CURVADO DE GANCHO com a cera nasal em cima.",
      "3. Faça a asa com penas em escamas e a CAUDA FINA LONGA inclinada.",
      "4. Desenhe as MANCHAS AZUIS/VIOLETAS NAS BOCHECHAS com 3 pontinhos pretos.",
      "5. Adicione as patinhas segurando o poleiro e o espelhinho de brinquedo."
    ],
    "layers": [
      "<circle cx=\"90\" cy=\"72\" r=\"18\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M92 88 C85 105 85 130 98 142 C112 148 128 138 125 120 C122 105 110 92 102 88\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M78 72 C70 75 70 85 78 88 C82 86 84 76 80 72 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <ellipse cx=\"80\" cy=\"72\" rx=\"3\" ry=\"2\" fill=\"#38bdf8\"/>",
      "<path d=\"M102 98 C115 105 122 120 118 135 C110 138 100 130 98 115 Z\" fill=\"none\" stroke-width=\"2.2\"/> <line x1=\"110\" y1=\"140\" x2=\"135\" y2=\"182\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"90\" cy=\"70\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"89\" cy=\"69\" r=\"1.5\" fill=\"#ffffff\"/> <ellipse cx=\"86\" cy=\"80\" rx=\"4\" ry=\"2.5\" fill=\"#818cf8\"/> <circle cx=\"84\" cy=\"84\" r=\"1\" fill=\"#1e293b\"/> <circle cx=\"87\" cy=\"84\" r=\"1\" fill=\"#1e293b\"/> <circle cx=\"90\" cy=\"84\" r=\"1\" fill=\"#1e293b\"/>",
      "<line x1=\"60\" y1=\"145\" x2=\"140\" y2=\"145\" stroke=\"#78350f\" stroke-width=\"5\" stroke-linecap=\"round\"/> <circle cx=\"96\" cy=\"145\" r=\"3\" fill=\"#64748b\"/> <circle cx=\"104\" cy=\"145\" r=\"3\" fill=\"#64748b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "canario",
    "name": "Canarinho Cantador",
    "category": "animais",
    "sub": "aves",
    "diff": "facil",
    "word": "C A N Á R I O",
    "colors": [
      "#eab308",
      "#fde047",
      "#f97316",
      "#1e293b"
    ],
    "tags": [
      "canto",
      "ouro",
      "amarelo",
      "alegria",
      "música"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho gordinho e fofo cantando com o peito estufado.",
      "2. Trace o BICO ABERTO EM V CANTANDO alegremente.",
      "3. Faça a asa curta dobrada e a cauda com corte chanfrado na ponta.",
      "4. Desenhe as NOTAS MUSICAIS FLUTUANDO NO AR ao redor do canarinho.",
      "5. Adicione olhinhos vivos, patinhas no galho e peninhas amarelas vibrantes."
    ],
    "layers": [
      "<circle cx=\"88\" cy=\"75\" r=\"18\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M92 90 C85 105 85 130 100 140 C115 145 132 135 128 118 C125 105 112 92 102 90\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"75,72 60,70 75,76\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"75,76 62,80 75,80\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M102 98 C115 102 125 115 120 130 C110 132 100 125 98 112 Z\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M120 135 L145 152 L140 158 L115 140\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"88\" cy=\"72\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"87\" cy=\"71\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M48 62 C45 55 52 50 55 58 M52 55 L58 52\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M38 78 C35 72 40 68 44 74 M42 72 L46 70\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"65\" y1=\"145\" x2=\"135\" y2=\"145\" stroke=\"#78350f\" stroke-width=\"5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "avestruz",
    "name": "Avestruz Corredor",
    "category": "animais",
    "sub": "aves",
    "diff": "medio",
    "word": "A V E S T R U Z",
    "colors": [
      "#1e293b",
      "#ffffff",
      "#fbcfe8",
      "#78716c"
    ],
    "tags": [
      "pernas",
      "pescoço",
      "rápido",
      "terra",
      "grande"
    ],
    "stepsDesc": [
      "1. Desenhe o PESCOÇO GIGANTESCO LONGO E FINO e o corpo arredondado de pompom.",
      "2. Trace as PERNAS MUSCULOSAS ALTAS DE CORRIDA com 2 dedos fortes.",
      "3. Faça a cabeça pequena com bico largo e OLHOS ENORMES COM LONGOS CÍLIOS.",
      "4. Desenhe as penas fofas e esvoaçantes no corpo como plumas de carnaval.",
      "5. Adicione nuvenzinhas de poeira levantando atrás dos pés velozes."
    ],
    "layers": [
      "<circle cx=\"75\" cy=\"45\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M80 58 C85 85 92 110 98 125\" fill=\"none\" stroke-width=\"3\"/> <ellipse cx=\"125\" cy=\"132\" rx=\"30\" ry=\"22\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"65,45 48,48 64,52\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"115\" y1=\"152\" x2=\"110\" y2=\"185\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"135\" y1=\"152\" x2=\"138\" y2=\"185\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M102 185 L112 185 L118 185 M132 185 L140 185 L146 185\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M148 125 C162 120 168 135 155 142\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"42\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"74\" cy=\"41\" r=\"1.8\" fill=\"#ffffff\"/> <line x1=\"72\" y1=\"36\" x2=\"70\" y2=\"32\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"76\" y1=\"35\" x2=\"76\" y2=\"31\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"80\" y1=\"36\" x2=\"82\" y2=\"32\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M110 120 Q125 110 140 120 Q130 135 115 130\" stroke-width=\"2\"/> <path d=\"M145 180 C155 175 165 180 160 185\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "calopsita",
    "name": "Calopsita com Topete",
    "category": "animais",
    "sub": "aves",
    "diff": "facil",
    "word": "C A L O P S I T A",
    "colors": [
      "#e2e8f0",
      "#facc15",
      "#f97316",
      "#64748b"
    ],
    "tags": [
      "topete",
      "bochechas",
      "assobio",
      "amigo",
      "pet"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho carismático e o peito estufado da calopsita.",
      "2. Trace o FAMOSO TOPETE/CRISTA ALTA E PONTUDA no topo da cabeça.",
      "3. Faça as GRANDES BOCHECHAS LARANJAS REDONDAS inconfundíveis.",
      "4. Desenhe o bico curvado forte e o olho meigo curioso.",
      "5. Adicione a asa com faixa branca e a cauda longa afilada."
    ],
    "layers": [
      "<circle cx=\"88\" cy=\"75\" r=\"18\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M92 92 C85 110 88 135 100 145 C115 150 130 138 128 120 C125 105 112 92 102 92\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 58 C85 35 95 25 102 28 C98 38 95 50 95 58\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M88 58 C90 42 100 35 106 38 C102 46 98 52 96 58\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M102 98 C115 102 125 115 120 135 C112 138 102 130 98 115 Z\" fill=\"none\" stroke-width=\"2.2\"/> <line x1=\"115\" y1=\"140\" x2=\"138\" y2=\"185\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"72\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"85\" cy=\"71\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"82\" cy=\"82\" r=\"6\" fill=\"#f97316\"/> <path d=\"M74 74 C68 78 70 86 76 88 C80 86 80 78 76 74 Z\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"65\" y1=\"148\" x2=\"135\" y2=\"148\" stroke=\"#78350f\" stroke-width=\"5\" stroke-linecap=\"round\"/> <circle cx=\"98\" cy=\"148\" r=\"3\" fill=\"#64748b\"/> <circle cx=\"106\" cy=\"148\" r=\"3\" fill=\"#64748b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "peixe-palhaco",
    "name": "Peixinho Palhaço",
    "category": "animais",
    "sub": "marinhos",
    "diff": "facil",
    "word": "P E I X E",
    "colors": [
      "#f97316",
      "#ffffff",
      "#1e293b",
      "#38bdf8"
    ],
    "tags": [
      "nemo",
      "coral",
      "listras",
      "laranja",
      "aquário"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho oval alegre e hidrodinâmico do peixinho palhaço.",
      "2. Trace a barbatana caudal arredondada e as barbatanas dorsal e peitoral.",
      "3. Faça as TRÊS FAIXAS BRANCAS VERTICAIS CURVAS com bordas pretas grossas.",
      "4. Desenhe o olho expressivo com brilho anime e a boquinha sorridente.",
      "5. Adicione os tentáculos ondulantes da anêmona do mar protetora e bolhinhas."
    ],
    "layers": [
      "<path d=\"M60 100 C60 75 110 70 145 100 C110 130 60 125 60 100 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M142 98 C155 85 168 85 165 100 C168 115 155 115 142 102 Z\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M95 72 C105 60 125 62 130 75\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M100 125 C110 138 125 136 128 125\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M85 85 C82 95 82 105 85 115\" stroke=\"#1e293b\" stroke-width=\"3\"/> <path d=\"M92 82 C88 95 88 108 92 120\" stroke=\"#1e293b\" stroke-width=\"3\"/> <path d=\"M115 78 C112 95 112 108 115 124\" stroke=\"#1e293b\" stroke-width=\"3\"/> <path d=\"M122 80 C118 95 118 108 122 122\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<circle cx=\"78\" cy=\"95\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"76\" cy=\"93\" r=\"1.8\" fill=\"#ffffff\"/> <path d=\"M68 104 Q74 108 78 104\" stroke-width=\"1.8\"/>",
      "<path d=\"M40 160 C45 140 35 125 45 115 M52 165 C55 145 48 135 55 125 M65 165 C68 148 62 138 68 130\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-linecap=\"round\"/> <circle cx=\"65\" cy=\"80\" r=\"3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/> <circle cx=\"58\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "tubarao",
    "name": "Tubarãozinho Amigo",
    "category": "animais",
    "sub": "marinhos",
    "diff": "medio",
    "word": "T U B A R Ã O",
    "colors": [
      "#0284c7",
      "#ffffff",
      "#1e293b",
      "#ef4444"
    ],
    "tags": [
      "barbatana",
      "dentes",
      "oceano",
      "mar",
      "azul"
    ],
    "stepsDesc": [
      "1. Trace a silhueta fusiforme e veloz do tubarão no oceano.",
      "2. Adicione a grande barbatana dorsal triangular e a cauda em meia-lua.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, as 3 fendas branquiais e a boca com dentes afiados.",
      "5. Finalize com as ondas da água e bolhas de ar subindo."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M90 78 C96 52 110 42 115 48 C118 58 112 75 115 80\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"54\" cy=\"99\" r=\"2.5\" fill=\"#1e293b\"/> <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M42 110 Q52 118 65 112\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M48 113 L50 117 L52 113 L54 117 L56 113\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"2\"/> <circle cx=\"30\" cy=\"85\" r=\"3\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/> <circle cx=\"24\" cy=\"72\" r=\"4.5\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "baleia",
    "name": "Baleia Jubarte",
    "category": "animais",
    "sub": "marinhos",
    "diff": "facil",
    "word": "B A L E I A",
    "colors": [
      "#1e40af",
      "#60a5fa",
      "#ffffff",
      "#38bdf8"
    ],
    "tags": [
      "jorro",
      "mar",
      "gigante",
      "azul",
      "canto"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo gigante e imponente da baleia jubarte.",
      "2. Trace a grande cauda de flukes e a pequena barbatana dorsal.",
      "3. Faça a nadadeira peitoral longa e a linha da boca gentil.",
      "4. Desenhe o olho sereno e os sulcos ventilares na barriga.",
      "5. Adicione o famoso JORRO DE ÁGUA espirrando alto do espiráculo."
    ],
    "layers": [
      "<path d=\"M35 115 C55 75 140 75 160 115 C140 145 55 145 35 115 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M160 115 Q180 95 188 92 Q178 115 188 130 Q178 122 160 115\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M78 125 C90 145 112 150 115 145 C115 135 98 125 90 120\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"55\" cy=\"108\" r=\"3.5\" fill=\"#1e293b\"/> <path d=\"M40 120 Q65 130 95 125\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <path d=\"M55 130 Q75 135 95 132 M60 138 Q80 142 100 138\" stroke-width=\"1.8\"/>",
      "<path d=\"M70 82 C65 65 55 50 48 55 M70 82 C72 60 72 45 70 40 M70 82 C78 65 88 50 95 55\" stroke=\"#0ea5e9\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "golfinho",
    "name": "Golfinho Saltador",
    "category": "animais",
    "sub": "marinhos",
    "diff": "medio",
    "word": "G O L F I N H O",
    "colors": [
      "#0ea5e9",
      "#e0f2fe",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "salto",
      "onda",
      "inteligente",
      "mar",
      "alegria"
    ],
    "stepsDesc": [
      "1. Trace o corpo arqueado do golfinho saltando alegremente.",
      "2. Adicione a barbatana dorsal curva e a cauda com nadadeira horizontal.",
      "3. Faça as nadadeiras peitorais laterais para natação graciosa.",
      "4. Desenhe o olho piscando em arco e o bico em sorriso amigável.",
      "5. Finalize com a crista da onda espumante e gotas de água."
    ],
    "layers": [
      "<path d=\"M40 125 C65 75 135 75 165 115 C145 130 85 140 40 125 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M102 78 C108 60 122 55 125 62 C125 72 118 80 116 85\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M165 115 Q180 105 185 100 Q178 118 185 125 Q178 122 165 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M82 120 C92 135 105 142 108 138 C108 132 100 122 96 118\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M58 100 Q64 96 70 100\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M38 124 Q48 128 58 122\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <circle cx=\"65\" cy=\"90\" r=\"1.5\" fill=\"#1e293b\"/>",
      "<path d=\"M20 160 Q60 145 100 160 T180 155\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "polvo",
    "name": "Polvo dos Oito Braços",
    "category": "animais",
    "sub": "marinhos",
    "diff": "medio",
    "word": "P O L V O",
    "colors": [
      "#a855f7",
      "#c084fc",
      "#fbcfe8",
      "#1e293b"
    ],
    "tags": [
      "tentáculos",
      "ventosas",
      "tinta",
      "mar",
      "fundo"
    ],
    "stepsDesc": [
      "1. Desenhe o grande domo arredondado da cabeça do polvo.",
      "2. Trace os 8 tentáculos ondulados saindo da base em curvas livres.",
      "3. Adicione as ventosas circulares ao longo de cada tentáculo.",
      "4. Desenhe os olhos grandes curiosos com brilho e bochechas fofas.",
      "5. Finalize com as bolhas de água subindo ao redor."
    ],
    "layers": [
      "<path d=\"M60 110 C50 65 150 65 140 110 C140 125 60 125 60 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 120 Q45 140 40 165 M75 122 Q65 150 68 175 M90 125 Q85 155 92 178 M105 125 Q110 155 108 178 M120 122 Q130 150 128 175 M135 120 Q155 140 160 165\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"45\" cy=\"150\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/> <circle cx=\"68\" cy=\"155\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/> <circle cx=\"92\" cy=\"160\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/> <circle cx=\"110\" cy=\"160\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/> <circle cx=\"130\" cy=\"155\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/> <circle cx=\"152\" cy=\"150\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"84\" cy=\"93\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"115\" cy=\"95\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"114\" cy=\"93\" r=\"3.5\" fill=\"#1e293b\"/> <path d=\"M96 108 Q100 112 104 108\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"35\" cy=\"70\" r=\"4\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/> <circle cx=\"45\" cy=\"50\" r=\"6\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/> <circle cx=\"165\" cy=\"65\" r=\"5\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "tartaruga-marinha",
    "name": "Tartaruga Marinha",
    "category": "animais",
    "sub": "marinhos",
    "diff": "medio",
    "word": "T A R T A R U G A",
    "colors": [
      "#10b981",
      "#059669",
      "#fef3c7",
      "#1e293b"
    ],
    "tags": [
      "casco",
      "nadadeira",
      "mar",
      "praia",
      "verde"
    ],
    "stepsDesc": [
      "1. Desenhe o casco aerodinâmico em formato de coração da tartaruga nadadora.",
      "2. Trace as DUAS GRANDES NADADEIRAS DIANTEIRAS EM FORMA DE REMO estendidas.",
      "3. Faça a cabeça simpática esticada para a frente e as nadadeiras traseiras.",
      "4. Desenhe as placas poligonais geométricas do casco e o olhinho meigo.",
      "5. Adicione texturas das escamas nas nadadeiras e raios de sol penetrando a água."
    ],
    "layers": [
      "<path d=\"M100 65 C135 65 145 115 100 145 C55 115 65 65 100 65 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M80 80 C50 65 25 75 30 95 C40 105 65 98 75 92\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M120 80 C150 65 175 75 170 95 C160 105 135 98 125 92\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"100\" cy=\"52\" rx=\"14\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M82 135 C70 145 75 155 85 152 M118 135 C130 145 125 155 115 152\" stroke-width=\"2.2\"/>",
      "<circle cx=\"94\" cy=\"48\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"93\" cy=\"47\" r=\"1.2\" fill=\"#ffffff\"/> <circle cx=\"106\" cy=\"48\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"105\" cy=\"47\" r=\"1.2\" fill=\"#ffffff\"/> <path d=\"M96 56 Q100 59 104 56\" stroke-width=\"1.8\"/>",
      "<polygon points=\"100,80 88,95 88,110 100,122 112,110 112,95\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"68\" stroke-width=\"1.8\"/> <line x1=\"88\" y1=\"95\" x2=\"72\" y2=\"90\" stroke-width=\"1.8\"/> <line x1=\"112\" y1=\"95\" x2=\"128\" y2=\"90\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "caranguejo",
    "name": "Caranguejo da Praia",
    "category": "animais",
    "sub": "marinhos",
    "diff": "facil",
    "word": "C A R A N G U E J O",
    "colors": [
      "#ef4444",
      "#f87171",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "garras",
      "areia",
      "olhos",
      "mar",
      "andando"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo oval largo da carapaça do caranguejo.",
      "2. Trace os dois braços articulados erguendo as GRANDES PINÇAS abertas.",
      "3. Faça as 6 patinhas pontudas nas laterais para andar na areia.",
      "4. Desenhe os dois olhos redondos em hastes no topo da cabeça.",
      "5. Adicione a boca sorridente e texturas na carapaça."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"120\" rx=\"36\" ry=\"24\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M72 108 Q50 90 45 70 Q30 65 42 50 Q55 60 58 75 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M128 108 Q150 90 155 70 Q170 65 158 50 Q145 60 142 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 125 Q45 130 42 145 M68 132 Q50 142 52 155 M72 138 Q58 152 62 165\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M135 125 Q155 130 158 145 M132 132 Q150 142 148 155 M128 138 Q142 152 138 165\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"88\" y1=\"100\" x2=\"86\" y2=\"85\" stroke-width=\"2.5\"/> <circle cx=\"86\" cy=\"82\" r=\"5\" fill=\"#1e293b\"/> <line x1=\"112\" y1=\"100\" x2=\"114\" y2=\"85\" stroke-width=\"2.5\"/> <circle cx=\"114\" cy=\"82\" r=\"5\" fill=\"#1e293b\"/>",
      "<path d=\"M92 125 Q100 132 108 125\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cavalo-marinho",
    "name": "Cavalo-Marinho",
    "category": "animais",
    "sub": "marinhos",
    "diff": "medio",
    "word": "C A V A L O - M A R I N H O",
    "colors": [
      "#f59e0b",
      "#fbbf24",
      "#ec4899",
      "#38bdf8"
    ],
    "tags": [
      "coroa",
      "cauda",
      "coral",
      "mar",
      "gracioso"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com focinho tubular e a curva do peito saliente.",
      "2. Trace a cauda mágica longa enrolada em espiral na ponta inferior.",
      "3. Adicione a crista dentada no topo da cabeça e a barbatana dorsal.",
      "4. Desenhe o olho meigo e as placas aneladas ao longo do corpo.",
      "5. Finalize com bolhinhas de água e algas marinhas."
    ],
    "layers": [
      "<path d=\"M95 55 Q115 50 115 65 Q115 75 105 80 Q125 105 110 135\" fill=\"none\" stroke-width=\"2.8\"/> <line x1=\"95\" y1=\"62\" x2=\"80\" y2=\"65\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M110 135 C100 155 85 165 92 175 C98 182 108 175 104 165\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M112 52 L118 45 L116 55 L124 50 L120 60\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M120 100 Q130 110 120 120\" stroke-width=\"2.2\"/>",
      "<circle cx=\"102\" cy=\"62\" r=\"3.5\" fill=\"#1e293b\"/> <line x1=\"100\" y1=\"95\" x2=\"118\" y2=\"95\" stroke-width=\"2\"/> <line x1=\"98\" y1=\"108\" x2=\"116\" y2=\"108\" stroke-width=\"2\"/> <line x1=\"96\" y1=\"120\" x2=\"114\" y2=\"120\" stroke-width=\"2\"/>",
      "<circle cx=\"70\" cy=\"85\" r=\"4\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/> <circle cx=\"65\" cy=\"65\" r=\"3\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "estrela-do-mar",
    "name": "Estrela-do-Mar",
    "category": "animais",
    "sub": "marinhos",
    "diff": "facil",
    "word": "E S T R E L A",
    "colors": [
      "#ec4899",
      "#f43f5e",
      "#fef08a",
      "#1e293b"
    ],
    "tags": [
      "cinco_pontas",
      "areia",
      "fundo",
      "mar",
      "colorida"
    ],
    "stepsDesc": [
      "1. Desenhe os CINCO BRAÇOS CÔNICOS ARREDONDADOS radiantes da estrela do mar.",
      "2. Suavize as junções internas entre cada braço criando um contorno orgânico.",
      "3. Desenhe o ROSTINHO SUPER KAWAII FELIZ NO CENTRO da estrela.",
      "4. Adicione as CENTENAS DE VENTOSAS / BOLINHAS DE TEXTURA ao longo dos braços.",
      "5. Finalize o fundo com areia do mar e conchinhas fofas."
    ],
    "layers": [
      "<path d=\"M100 35 C105 55 115 65 135 68 C155 70 170 80 155 98 C140 110 135 125 142 145 C130 150 115 138 100 130 C85 138 70 150 58 145 C65 125 60 110 45 98 C30 80 45 70 65 68 C85 65 95 55 100 35 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"32\" fill=\"none\" stroke=\"#fbcfe8\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>",
      "<circle cx=\"88\" cy=\"98\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"86\" cy=\"96\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"112\" cy=\"98\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"110\" cy=\"96\" r=\"2\" fill=\"#ffffff\"/> <path d=\"M95 108 Q100 114 105 108\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"80\" cy=\"104\" r=\"4\" fill=\"#f43f5e\" opacity=\"0.6\"/> <circle cx=\"120\" cy=\"104\" r=\"4\" fill=\"#f43f5e\" opacity=\"0.6\"/>",
      "<circle cx=\"100\" cy=\"55\" r=\"2\" fill=\"#f97316\"/> <circle cx=\"100\" cy=\"65\" r=\"2\" fill=\"#f97316\"/> <circle cx=\"135\" cy=\"85\" r=\"2\" fill=\"#f97316\"/> <circle cx=\"145\" cy=\"95\" r=\"2\" fill=\"#f97316\"/> <circle cx=\"130\" cy=\"130\" r=\"2\" fill=\"#f97316\"/> <circle cx=\"70\" cy=\"130\" r=\"2\" fill=\"#f97316\"/> <circle cx=\"55\" cy=\"95\" r=\"2\" fill=\"#f97316\"/> <circle cx=\"65\" cy=\"85\" r=\"2\" fill=\"#f97316\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "agua-viva",
    "name": "Água-Viva Brilhante",
    "category": "animais",
    "sub": "marinhos",
    "diff": "facil",
    "word": "Á G U A - V I V A",
    "colors": [
      "#c084fc",
      "#e879f9",
      "#38bdf8",
      "#ffffff"
    ],
    "tags": [
      "campânula",
      "luz",
      "mar",
      "flutuar",
      "brilho"
    ],
    "stepsDesc": [
      "1. Desenhe a CÚPULA TRANSLÚCIDA EM COGUMELO/SINO da água-viva flutuando.",
      "2. Trace a BORDA INFERIOR ONDULADA EM BABADO graciosa da umbrela.",
      "3. Desenhe os BRAÇOS ORAIS CENTRAIS EM FITAS LARGAS ESPIRALADAS descendo.",
      "4. Adicione os TENTÁCULOS FINOS E LONGOS ondulando pelas correntes marinhas.",
      "5. Finalize com olhinhos simpáticos na cúpula e bolhinhas de bioluminescência."
    ],
    "layers": [
      "<path d=\"M55 90 C55 45 145 45 145 90 C145 102 55 102 55 90 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 92 Q65 100 75 92 Q85 100 95 92 Q105 100 115 92 Q125 100 135 92 Q145 100 145 92\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M80 100 C75 125 90 145 80 175 M95 100 C105 125 90 145 100 175 M115 100 C110 125 125 145 115 175\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"75\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"83\" cy=\"73\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"115\" cy=\"75\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"113\" cy=\"73\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<path d=\"M65 100 C60 120 70 145 65 170 M135 100 C140 120 130 145 135 170\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\" stroke-dasharray=\"3 2\"/> <circle cx=\"45\" cy=\"65\" r=\"3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/> <circle cx=\"155\" cy=\"65\" r=\"3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "lula",
    "name": "Lula das Profundezas",
    "category": "animais",
    "sub": "marinhos",
    "diff": "medio",
    "word": "L U L A",
    "colors": [
      "#f43f5e",
      "#fb7185",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "tentáculos",
      "fundo",
      "nadadeiras",
      "água",
      "mar"
    ],
    "stepsDesc": [
      "1. Desenhe o MANTO EM TORPEDO AERODINÂMICO e as barbatanas triangulares na ponta.",
      "2. Trace a cabeça larga com grandes olhos hipnóticos de águas profundas.",
      "3. Faça os 8 BRAÇOS ONDULANTES curtinhos em volta da boca.",
      "4. Desenhe os DOIS TENTÁCULOS EXTENSÍVEIS GIGANTES COM CLAVAS na ponta.",
      "5. Adicione as ventosas circulares e uma nuvenzinha de tinta preta defensiva."
    ],
    "layers": [
      "<path d=\"M75 90 C75 40 100 20 100 20 C100 20 125 40 125 90 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,20 68,45 88,48\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/> <polygon points=\"100,20 132,45 112,48\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/> <ellipse cx=\"100\" cy=\"98\" rx=\"26\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M82 108 C80 125 85 140 80 155 M92 108 C90 125 95 140 92 155 M108 108 C110 125 105 140 108 155 M118 108 C120 125 115 140 120 155\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 108 C65 135 60 160 55 185 C62 188 65 178 68 180 M130 108 C135 135 140 160 145 185 C138 188 135 178 132 180\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"96\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"83\" cy=\"94\" r=\"1.8\" fill=\"#ffffff\"/> <circle cx=\"115\" cy=\"96\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"113\" cy=\"94\" r=\"1.8\" fill=\"#ffffff\"/> <circle cx=\"56\" cy=\"182\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"144\" cy=\"182\" r=\"1.5\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "foca",
    "name": "Foquinha Brincalhona",
    "category": "animais",
    "sub": "marinhos",
    "diff": "facil",
    "word": "F O C A",
    "colors": [
      "#94a3b8",
      "#cbd5e1",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "bola",
      "gelo",
      "aplauso",
      "mar",
      "fofa"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo roliço em formato de gota curvado para cima com cauda-nadadeira.",
      "2. Trace a cabeça arredondada fofa e as NADADEIRAS ANTERIORES BATENDO PALMAS.",
      "3. Faça a BOLA COLORIDA DE CIRCO EQUILIBRADA NA PONTA DO NARIZ.",
      "4. Desenhe os grandes olhos pretos molhados, focinho arredondado e bigodinhos.",
      "5. Adicione as estrelinhas e o rochedo de gelo/mar onde ela se apoia feliz."
    ],
    "layers": [
      "<path d=\"M65 95 C55 105 60 125 80 135 C110 150 145 145 165 130 C175 120 168 115 155 125 C140 135 110 135 90 125 C82 118 80 105 80 95 Z\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"68\" cy=\"85\" r=\"20\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 125 C95 120 105 130 100 140 C90 142 85 135 85 125 Z\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M165 128 L180 120 L178 135 L165 132\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"55\" cy=\"50\" r=\"15\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\"/> <path d=\"M42 42 Q55 50 68 58 M45 60 Q55 50 65 40\" stroke=\"#facc15\" stroke-width=\"2\"/>",
      "<circle cx=\"64\" cy=\"82\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"62\" cy=\"80\" r=\"1.8\" fill=\"#ffffff\"/> <ellipse cx=\"54\" cy=\"90\" rx=\"4.5\" ry=\"3.5\" fill=\"#1e293b\"/> <path d=\"M52 94 Q56 98 60 94\" stroke-width=\"1.8\"/> <line x1=\"50\" y1=\"92\" x2=\"38\" y2=\"90\" stroke-width=\"1.5\"/> <line x1=\"50\" y1=\"94\" x2=\"38\" y2=\"96\" stroke-width=\"1.5\"/>",
      "<path d=\"M45 155 Q95 148 145 155 T185 155\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <polygon points=\"75,40 78,45 84,45 80,48 82,54 75,50 68,54 70,48 66,45 72,45\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "arraia",
    "name": "Arraia Manta",
    "category": "animais",
    "sub": "marinhos",
    "diff": "medio",
    "word": "A R R A I A",
    "colors": [
      "#0284c7",
      "#38bdf8",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "asas",
      "plano",
      "mar",
      "cauda",
      "voo_mar"
    ],
    "stepsDesc": [
      "1. Desenhe as GRANDES ASAS PEITORAIS EM LOSANGO/PIPA da arraia manta.",
      "2. Trace as pontas arqueadas das asas ondulando no nado gracioso subaquático.",
      "3. Faça a LONGA CAUDA EM CHICOTE afilada se estendendo para trás.",
      "4. Desenhe os LÓBULOS CEFÁLICOS (CHIFRINHOS) na frente da boca e os olhos no topo.",
      "5. Adicione as fendas branquiais e manchinhas geométricas no dorso escuro."
    ],
    "layers": [
      "<path d=\"M100 65 C135 60 185 95 180 110 C165 115 130 110 100 120 C70 110 35 115 20 110 C15 95 65 60 100 65 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"120\" x2=\"100\" y2=\"185\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linecap=\"round\"/> <path d=\"M92 65 C90 55 95 52 98 60 M108 65 C110 55 105 52 102 60\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"75\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"74\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"115\" cy=\"75\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"114\" cy=\"74\" r=\"1.5\" fill=\"#ffffff\"/>",
      "<path d=\"M96 90 Q100 94 104 90\" stroke-width=\"1.8\"/> <ellipse cx=\"75\" cy=\"95\" rx=\"3\" ry=\"2\" fill=\"#ffffff\" opacity=\"0.8\"/> <ellipse cx=\"125\" cy=\"95\" rx=\"3\" ry=\"2\" fill=\"#ffffff\" opacity=\"0.8\"/>",
      "<ellipse cx=\"60\" cy=\"102\" rx=\"2.5\" ry=\"1.8\" fill=\"#ffffff\" opacity=\"0.8\"/> <ellipse cx=\"140\" cy=\"102\" rx=\"2.5\" ry=\"1.8\" fill=\"#ffffff\" opacity=\"0.8\"/> <ellipse cx=\"100\" cy=\"105\" rx=\"3\" ry=\"2\" fill=\"#ffffff\" opacity=\"0.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "lagosta",
    "name": "Lagosta Vermelha",
    "category": "animais",
    "sub": "marinhos",
    "diff": "desafio",
    "word": "L A G O S T A",
    "colors": [
      "#dc2626",
      "#b91c1c",
      "#fca5a5",
      "#1e293b"
    ],
    "tags": [
      "antenas",
      "garras",
      "casca",
      "fundo",
      "vermelho"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo alongado segmentado e o LEQUE CAUDAL articulado atrás.",
      "2. Trace as DUAS GIGANTESCAS PINÇAS/GARRAS PODEROSAS abertas na frente.",
      "3. Faça as LONGAS ANTENAS CURVADAS varrendo a água e perninhas de andar.",
      "4. Desenhe os olhinhos pretos sobre pedúnculos e a carapaça com espinhos.",
      "5. Adicione texturas das articulações e pedrinhas marinhas do fundo."
    ],
    "layers": [
      "<path d=\"M85 75 C85 60 115 60 115 75 L118 125 C118 135 82 135 82 125 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M82 72 C65 65 52 45 42 55 C35 65 55 80 72 78\" fill=\"none\" stroke-width=\"2.8\"/> <polygon points=\"42,55 30,42 45,48\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"42,55 48,38 52,48\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M118 72 C135 65 148 45 158 55 C165 65 145 80 128 78\" fill=\"none\" stroke-width=\"2.8\"/> <polygon points=\"158,55 170,42 155,48\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"158,55 152,38 148,48\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M92 60 C80 35 60 25 45 20 M108 60 C120 35 140 25 155 20\" stroke=\"#ef4444\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <polygon points=\"85,135 70,155 100,165 130,155 115,135\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"92\" cy=\"68\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"108\" cy=\"68\" r=\"3.5\" fill=\"#1e293b\"/> <line x1=\"84\" y1=\"90\" x2=\"116\" y2=\"90\" stroke-width=\"2\"/> <line x1=\"84\" y1=\"105\" x2=\"116\" y2=\"105\" stroke-width=\"2\"/> <line x1=\"84\" y1=\"120\" x2=\"116\" y2=\"120\" stroke-width=\"2\"/>",
      "<path d=\"M80 100 L65 110 M80 112 L65 122 M120 100 L135 110 M120 112 L135 122\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "peixe-espada",
    "name": "Peixe-Espada Rápido",
    "category": "animais",
    "sub": "marinhos",
    "diff": "desafio",
    "word": "P E I X E - E S P A D A",
    "colors": [
      "#1e3a8a",
      "#0284c7",
      "#38bdf8",
      "#ffffff"
    ],
    "tags": [
      "espada",
      "bico",
      "velocidade",
      "mar",
      "oceano"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo longo esguio e super veloz em formato de míssil.",
      "2. Trace o LONGO E AFIADO BICO EM ESPADA pontiagudo saindo da mandíbula superior.",
      "3. Faça a ALTA BARBATANA DORSAL EM FORMA DE VELA majestosa nas costas.",
      "4. Desenhe a cauda potente em meia-lua (crescente) que dá grande velocidade.",
      "5. Adicione os olhos grandes de caçador veloz e linhas de água rasgando o mar."
    ],
    "layers": [
      "<path d=\"M70 100 C70 85 125 80 160 100 C125 118 70 115 70 100 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"70\" y1=\"98\" x2=\"15\" y2=\"96\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M158 98 C172 82 185 80 182 98 C185 115 172 115 158 102 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M98 85 L108 52 L128 78 L142 85\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M115 115 L125 128 L130 115\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"82\" cy=\"96\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"80\" cy=\"94\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M68 102 Q74 105 78 102\" stroke-width=\"1.8\"/>",
      "<line x1=\"85\" y1=\"102\" x2=\"150\" y2=\"102\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"8 4\"/> <path d=\"M30 110 Q50 115 80 110\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "sapo",
    "name": "Sapinho Cururu",
    "category": "animais",
    "sub": "anfibios",
    "diff": "facil",
    "word": "S A P O",
    "colors": [
      "#16a34a",
      "#4ade80",
      "#fef08a",
      "#1e293b"
    ],
    "tags": [
      "pulo",
      "lagoa",
      "mosca",
      "verde",
      "olhos"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça larga e o corpo rechonchudo do sapo.",
      "2. Trace os dois grandes olhos esbugalhados no alto da cabeça.",
      "3. Faça as pernas traseiras dobradas em Z prontas para o salto.",
      "4. Desenhe a boca aberta de orelha a orelha e as patinhas.",
      "5. Adicione a folha de vitória-régia embaixo e as manchinhas na pele."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"38\" ry=\"30\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"78\" cy=\"85\" r=\"14\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"122\" cy=\"85\" r=\"14\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 125 C45 125 40 150 55 160 C65 165 75 150 72 135\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M135 125 C155 125 160 150 145 160 C135 165 125 150 128 135\" fill=\"none\" stroke-width=\"2.8\"/> <rect x=\"85\" y=\"130\" width=\"8\" height=\"24\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/> <rect x=\"107\" y=\"130\" width=\"8\" height=\"24\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"78\" cy=\"85\" r=\"6\" fill=\"#1e293b\"/> <circle cx=\"76\" cy=\"83\" r=\"2.5\" fill=\"#ffffff\"/> <circle cx=\"122\" cy=\"85\" r=\"6\" fill=\"#1e293b\"/> <circle cx=\"120\" cy=\"83\" r=\"2.5\" fill=\"#ffffff\"/> <path d=\"M72 115 Q100 135 128 115\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"165\" rx=\"70\" ry=\"12\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/> <circle cx=\"85\" cy=\"135\" r=\"2\" fill=\"#15803d\"/> <circle cx=\"115\" cy=\"135\" r=\"2\" fill=\"#15803d\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "jacare",
    "name": "Jacaré do Pantanal",
    "category": "animais",
    "sub": "repteis",
    "diff": "medio",
    "word": "J A C A R É",
    "colors": [
      "#15803d",
      "#166534",
      "#fef08a",
      "#ffffff"
    ],
    "tags": [
      "dentes",
      "rio",
      "pantanal",
      "verde",
      "escamas"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com focinho longo e largo e o corpo forte.",
      "2. Trace as placas ósseas serrilhadas no dorso e a cauda musculosa.",
      "3. Faça as 4 patas abertas nas laterais com dedos bem separados.",
      "4. Desenhe os dentes afiados para fora e os olhos no topo da cabeça.",
      "5. Finalize as escamas texturizadas e contornos precisos."
    ],
    "layers": [
      "<path d=\"M35 115 C55 95 125 95 165 125\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M35 115 L165 130\" stroke-width=\"2.8\"/> <path d=\"M65 95 L70 88 L75 95 L80 88 L85 95 L90 88 L95 95 L100 88 L105 95 L110 88 L115 95\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"75\" cy=\"140\" rx=\"14\" ry=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <ellipse cx=\"130\" cy=\"142\" rx=\"14\" ry=\"6\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"55\" cy=\"102\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"54\" cy=\"101\" r=\"2.5\" fill=\"#1e293b\"/> <path d=\"M45 115 L48 119 L51 115 L54 119 L57 115\" stroke-width=\"2\"/>",
      "<path d=\"M65 122 L150 125\" stroke-dasharray=\"2 3\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "camaleao",
    "name": "Camaleão das Cores",
    "category": "animais",
    "sub": "repteis",
    "diff": "medio",
    "word": "C A M A L E Ã O",
    "colors": [
      "#10b981",
      "#fbbf24",
      "#ec4899",
      "#1e293b"
    ],
    "tags": [
      "cores",
      "língua",
      "árvore",
      "olhos",
      "cauda"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com crista e o corpo arqueado do camaleão.",
      "2. Trace a CAUDA ENROLADA EM ESPIRAL agarrada ao galho.",
      "3. Faça as patinhas bifurcadas segurando a madeira.",
      "4. Desenhe o olho cônico giratório e a longa língua saindo.",
      "5. Adicione um insetinho na ponta da língua e manchinhas na pele."
    ],
    "layers": [
      "<path d=\"M70 100 C70 70 125 70 135 105 C135 125 80 130 70 100 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M135 105 C155 105 170 125 155 145 C145 155 130 145 135 135\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M65 85 Q75 65 90 75\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"40\" y1=\"140\" x2=\"160\" y2=\"140\" stroke=\"#78350f\" stroke-width=\"4.5\" stroke-linecap=\"round\"/> <path d=\"M85 125 L85 140 M115 125 L115 140\" stroke-width=\"2.5\"/>",
      "<circle cx=\"82\" cy=\"90\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"82\" cy=\"90\" r=\"2.5\" fill=\"#1e293b\"/> <path d=\"M70 102 C50 100 40 115 25 105\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>",
      "<circle cx=\"22\" cy=\"104\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"100\" r=\"2.5\" fill=\"#f59e0b\"/> <circle cx=\"112\" cy=\"105\" r=\"2.5\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cobra",
    "name": "Cobrinha Amiga",
    "category": "animais",
    "sub": "repteis",
    "diff": "facil",
    "word": "C O B R A",
    "colors": [
      "#22c55e",
      "#15803d",
      "#fef08a",
      "#ef4444"
    ],
    "tags": [
      "língua",
      "sinuosa",
      "chocalho",
      "verde",
      "curva"
    ],
    "stepsDesc": [
      "1. Trace a linha guia sinuosa em formato de S do corpo da cobra.",
      "2. Desenhe a espessura contínua do corpo enrolado sobre o solo.",
      "3. Faça a cabeça triangular arredondada com olhos atentos.",
      "4. Desenhe a famosa LÍNGUA BÍFIDA EM Y saindo da boca.",
      "5. Adicione os padrões de escamas geométricas ao longo de todo o corpo."
    ],
    "layers": [
      "<path d=\"M60 80 Q100 50 120 90 T80 140 T145 160\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 85 Q95 55 115 95 T75 145 T140 165\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"60\" cy=\"80\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"58\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/> <path d=\"M50 82 L38 82 M38 82 L32 78 M38 82 L32 86\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M75 75 L82 72 M100 85 L108 82 M90 125 L98 122 M115 145 L122 142\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "tartaruga",
    "name": "Tartaruguinha da Terra",
    "category": "animais",
    "sub": "repteis",
    "diff": "facil",
    "word": "J A B U T I",
    "colors": [
      "#854d0e",
      "#15803d",
      "#ca8a04",
      "#fef3c7"
    ],
    "tags": [
      "casco",
      "lenta",
      "patas",
      "terra",
      "verde"
    ],
    "stepsDesc": [
      "1. Desenhe o grande casco arredondado em domo da tartaruga.",
      "2. Trace as PLACAS GEOMÉTRICAS HEXAGONAIS do casco.",
      "3. Faça a cabeça simpática esticada para a frente e o rabinho curto.",
      "4. Desenhe as 4 patas fortes com unhas para caminhar na terra.",
      "5. Adicione os olhos serenos e texturas do couro."
    ],
    "layers": [
      "<path d=\"M60 135 C60 85 140 85 140 135 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 95 L80 110 L80 125 L100 135 L120 125 L120 110 Z\" fill=\"none\" stroke-width=\"2.2\"/> <line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"85\" stroke-width=\"2.2\"/> <line x1=\"80\" y1=\"110\" x2=\"65\" y2=\"105\" stroke-width=\"2.2\"/> <line x1=\"120\" y1=\"110\" x2=\"135\" y2=\"105\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"50\" cy=\"120\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"70\" y=\"132\" width=\"16\" height=\"20\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"115\" y=\"132\" width=\"16\" height=\"20\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <polygon points=\"140,132 152,135 140,138\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"46\" cy=\"118\" r=\"3.5\" fill=\"#1e293b\"/> <path d=\"M42 125 Q48 128 54 125\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"78\" cy=\"150\" rx=\"2\" ry=\"1.5\" fill=\"#1e293b\"/> <ellipse cx=\"123\" cy=\"150\" rx=\"2\" ry=\"1.5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "iguana",
    "name": "Iguana com Crista",
    "category": "animais",
    "sub": "repteis",
    "diff": "desafio",
    "word": "I G U A N A",
    "colors": [
      "#15803d",
      "#4ade80",
      "#84cc16",
      "#1e293b"
    ],
    "tags": [
      "crista",
      "espinhos",
      "verde",
      "galho",
      "sol"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com papada arredondada e o corpo arqueado da iguana.",
      "2. Trace a CRISTA ESPINHOSA DENTADA ao longo de toda a coluna e cauda.",
      "3. Faça a GRANDE ESCAMA CIRCULAR (ESCUDO SUBTIMPÂNICO) na bochecha.",
      "4. Desenhe as 4 patas com dedos compridos e garras afiadas no galho.",
      "5. Adicione a cauda longa listrada e folhas tropicais ao redor."
    ],
    "layers": [
      "<path d=\"M60 85 C50 90 48 110 58 120 C70 128 105 125 145 115 C155 120 150 135 130 135 C95 135 60 130 50 115\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M58 85 L62 78 L68 85 L74 78 L80 85 L88 78 L95 85 L104 80 L112 88 L122 84 L132 92 L142 90 L152 98\" stroke=\"#15803d\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/> <path d=\"M55 115 C52 128 62 135 68 125\" fill=\"#86efac\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"75\" cy=\"108\" r=\"7\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"35\" y1=\"145\" x2=\"165\" y2=\"145\" stroke=\"#78350f\" stroke-width=\"6\" stroke-linecap=\"round\"/> <path d=\"M78 125 L75 145 M115 122 L115 145\" stroke-width=\"2.5\"/>",
      "<circle cx=\"68\" cy=\"95\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"67\" cy=\"94\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M52 108 Q60 112 68 108\" stroke-width=\"1.8\"/>",
      "<line x1=\"135\" y1=\"120\" x2=\"137\" y2=\"132\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"145\" y1=\"122\" x2=\"147\" y2=\"134\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "borboleta",
    "name": "Borboleta Colorida",
    "category": "animais",
    "sub": "insetos",
    "diff": "facil",
    "word": "B O R B O L E T A",
    "colors": [
      "#ec4899",
      "#3b82f6",
      "#facc15",
      "#1e293b"
    ],
    "tags": [
      "asas",
      "flores",
      "jardim",
      "primavera",
      "voo"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho fino central e a cabeça com olhinhos da borboleta.",
      "2. Trace o par de asas superiores amplas com curvas harmônicas.",
      "3. Faça o par de asas inferiores menores e arredondadas.",
      "4. Desenhe as anteninhas com pontas enroladas.",
      "5. Preencha as asas com arabescos e círculos perfeitos para colorir."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"6\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"100\" cy=\"75\" r=\"9\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M106 95 C135 55 180 60 172 105 C165 130 125 125 106 115 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M94 95 C65 55 20 60 28 105 C35 130 75 125 94 115 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M106 120 C130 125 160 140 148 168 C130 182 110 155 104 140 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M94 120 C70 125 40 140 52 168 C70 182 90 155 96 140 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M96 68 Q90 48 80 50 M104 68 Q110 48 120 50\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <circle cx=\"80\" cy=\"50\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"120\" cy=\"50\" r=\"3\" fill=\"#1e293b\"/>",
      "<circle cx=\"140\" cy=\"95\" r=\"10\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"60\" cy=\"95\" r=\"10\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"128\" cy=\"150\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/> <circle cx=\"72\" cy=\"150\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "abelha",
    "name": "Abelhinha Produtora",
    "category": "animais",
    "sub": "insetos",
    "diff": "facil",
    "word": "A B E L H A",
    "colors": [
      "#facc15",
      "#1e293b",
      "#ffffff",
      "#38bdf8"
    ],
    "tags": [
      "mel",
      "colmeia",
      "listras",
      "asas",
      "flor"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo oval fofinho da abelha e a cabeça redonda.",
      "2. Trace as LISTRAS PRETAS E AMARELAS no abdômen.",
      "3. Adicione o par de asas transparentes em formato de gota no dorso.",
      "4. Desenhe os olhos grandes com brilho, anteninhas e ferrão na ponta.",
      "5. Finalize com as patinhas pequeninas e o pote de mel."
    ],
    "layers": [
      "<circle cx=\"75\" cy=\"100\" r=\"24\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"125\" cy=\"105\" rx=\"34\" ry=\"26\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M110 82 L110 128 M125 80 L125 130 M140 82 L140 128\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"105\" cy=\"65\" rx=\"12\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(30 105 65)\"/> <ellipse cx=\"120\" cy=\"60\" rx=\"10\" ry=\"20\" fill=\"none\" stroke-width=\"2.2\" transform=\"rotate(45 120 60)\"/>",
      "<circle cx=\"72\" cy=\"96\" r=\"4.5\" fill=\"#1e293b\"/> <path d=\"M68 108 Q75 114 82 108\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M70 78 Q65 65 58 68 M78 78 Q80 65 85 66\" stroke-width=\"2.2\"/> <polygon points=\"158,102 166,105 158,108\" fill=\"#1e293b\"/>",
      "<path d=\"M30 145 C45 125 55 160 70 140\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "joaninha",
    "name": "Joaninha Pintadinha",
    "category": "animais",
    "sub": "insetos",
    "diff": "facil",
    "word": "J O A N I N H A",
    "colors": [
      "#ef4444",
      "#1e293b",
      "#ffffff",
      "#b91c1c"
    ],
    "tags": [
      "pontinhos",
      "vermelho",
      "sorte",
      "jardim",
      "folha"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo circular perfeito da joaninha da sorte.",
      "2. Trace a linha vertical central que divide as duas asas élitros.",
      "3. Adicione as 7 FAMOSAS PINTINHAS PRETAS redondas distribuídas.",
      "4. Desenhe a cabeça com máscara preta, olhinhos e anteninhas.",
      "5. Faça as 6 patinhas articuladas sobre uma folhinha verde."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"40\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"160\" stroke-width=\"2.8\"/>",
      "<circle cx=\"82\" cy=\"105\" r=\"6\" fill=\"#1e293b\"/> <circle cx=\"75\" cy=\"130\" r=\"7\" fill=\"#1e293b\"/> <circle cx=\"88\" cy=\"148\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"118\" cy=\"105\" r=\"6\" fill=\"#1e293b\"/> <circle cx=\"125\" cy=\"130\" r=\"7\" fill=\"#1e293b\"/> <circle cx=\"112\" cy=\"148\" r=\"5\" fill=\"#1e293b\"/>",
      "<path d=\"M80 84 C80 65 120 65 120 84 Z\" fill=\"#1e293b\"/> <circle cx=\"88\" cy=\"74\" r=\"2.5\" fill=\"#ffffff\"/> <circle cx=\"112\" cy=\"74\" r=\"2.5\" fill=\"#ffffff\"/> <path d=\"M88 66 Q80 52 74 54 M112 66 Q120 52 126 54\" stroke-width=\"2.2\"/>",
      "<path d=\"M60 105 L45 98 M60 125 L42 125 M60 145 L45 152 M140 105 L155 98 M140 125 L158 125 M140 145 L155 152\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "formiga",
    "name": "Formiguinha Valente",
    "category": "animais",
    "sub": "insetos",
    "diff": "facil",
    "word": "F O R M I G A",
    "colors": [
      "#78350f",
      "#451a03",
      "#b45309",
      "#ffffff"
    ],
    "tags": [
      "folha",
      "força",
      "trabalho",
      "formigueiro",
      "terra"
    ],
    "stepsDesc": [
      "1. Desenhe os TRÊS SEGMENTOS ESFÉRICOS: cabeça, tórax e abdômen.",
      "2. Trace as 6 pernas articuladas finas para caminhar na terra.",
      "3. Faça as anteninhas em ângulo no alto da cabeça.",
      "4. Desenhe o olho vivo expressivo e as mandíbulas fortes.",
      "5. Adicione uma folhinha verde que a formiga carrega com valentia."
    ],
    "layers": [
      "<circle cx=\"65\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"95\" cy=\"120\" r=\"12\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"135\" cy=\"118\" rx=\"24\" ry=\"18\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"88\" y1=\"125\" x2=\"80\" y2=\"155\" stroke-width=\"2.5\"/> <line x1=\"95\" y1=\"125\" x2=\"95\" y2=\"155\" stroke-width=\"2.5\"/> <line x1=\"102\" y1=\"125\" x2=\"110\" y2=\"155\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 102 L52 82 L42 85 M68 102 L72 82 L82 85\" stroke-width=\"2.2\"/>",
      "<circle cx=\"62\" cy=\"112\" r=\"3.5\" fill=\"#1e293b\"/> <path d=\"M52 120 L45 125 L45 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M35 90 C25 65 65 55 75 75 C60 85 45 95 35 90 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "caracol",
    "name": "Caracol no Jardim",
    "category": "animais",
    "sub": "insetos",
    "diff": "facil",
    "word": "C A R A C O L",
    "colors": [
      "#f59e0b",
      "#d97706",
      "#fef3c7",
      "#1e293b"
    ],
    "tags": [
      "concha",
      "espiral",
      "lento",
      "folha",
      "chuva"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho rastejante arredondado do caracol.",
      "2. Trace a GRANDE CONCHA CIRCULAR ESPIRALADA nas costas.",
      "3. Faça os tentáculos com olhinhos espertos nas pontas.",
      "4. Desenhe o rostinho alegre e sorridente.",
      "5. Finalize com folhinhas no chão e o rastro brilhante."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"16\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"90\" cy=\"110\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M90 110 C80 110 80 100 90 100 C105 100 105 120 90 120 C70 120 70 90 90 90\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"140\" y1=\"135\" x2=\"148\" y2=\"105\" stroke-width=\"2.5\"/> <circle cx=\"148\" cy=\"103\" r=\"4.5\" fill=\"#1e293b\"/> <line x1=\"148\" y1=\"136\" x2=\"158\" y2=\"108\" stroke-width=\"2.5\"/> <circle cx=\"158\" cy=\"106\" r=\"4.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"142\" cy=\"125\" r=\"2.5\" fill=\"#1e293b\"/> <path d=\"M142 132 Q148 136 152 132\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M40 160 Q100 152 160 160\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "libelula",
    "name": "Libélula Encantada",
    "category": "animais",
    "sub": "insetos",
    "diff": "medio",
    "word": "L I B É L U L A",
    "colors": [
      "#06b6d4",
      "#3b82f6",
      "#c084fc",
      "#ffffff"
    ],
    "tags": [
      "asas",
      "lago",
      "ágil",
      "brilho",
      "voo"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo super afilado: cabeça redonda, tórax e ABDÔMEN LONGO EM AGULHA.",
      "2. Trace os DOIS PARES DE ASAS LONGAS TRANSPARENTES abertas horizontalmente.",
      "3. Faça os GRANDES OLHOS COMPOSTOS brilhantes ocupando quase toda a cabeça.",
      "4. Desenhe as nervuras delicadas em rede geométrica nas quatro asas.",
      "5. Adicione as patinhas finas e brilho cintilante encantado no ar."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"55\" r=\"12\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"74\" rx=\"8\" ry=\"12\" fill=\"none\" stroke-width=\"2.8\"/> <line x1=\"100\" y1=\"86\" x2=\"100\" y2=\"175\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M96 70 C70 48 30 52 25 65 C25 78 68 78 94 74\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M104 70 C130 48 170 52 175 65 C175 78 132 78 106 74\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M96 76 C75 65 40 70 35 82 C35 92 72 90 95 80\" fill=\"none\" stroke-width=\"2.2\"/> <path d=\"M104 76 C125 65 160 70 165 82 C165 92 128 90 105 80\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"94\" cy=\"52\" r=\"6\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"93\" cy=\"50\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"106\" cy=\"52\" r=\"6\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"105\" cy=\"50\" r=\"2\" fill=\"#ffffff\"/>",
      "<line x1=\"45\" y1=\"65\" x2=\"75\" y2=\"72\" stroke=\"#38bdf8\" stroke-width=\"1.2\"/> <line x1=\"155\" y1=\"65\" x2=\"125\" y2=\"72\" stroke=\"#38bdf8\" stroke-width=\"1.2\"/> <circle cx=\"100\" cy=\"110\" r=\"1.5\" fill=\"#38bdf8\"/> <circle cx=\"100\" cy=\"130\" r=\"1.5\" fill=\"#38bdf8\"/> <circle cx=\"100\" cy=\"150\" r=\"1.5\" fill=\"#38bdf8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "lagarta",
    "name": "Lagartinha Fofa",
    "category": "animais",
    "sub": "insetos",
    "diff": "facil",
    "word": "L A G A R T A",
    "colors": [
      "#22c55e",
      "#86efac",
      "#eab308",
      "#1e293b"
    ],
    "tags": [
      "gomos",
      "folha",
      "verde",
      "casulo",
      "comilona"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo formado por 5 BOLINHAS GORDINHAS CONECTADAS ondulando.",
      "2. Trace a cabecinha alegre na frente com DUAS ANTENINHAS COM POMPOM.",
      "3. Faça as patinhas curtas em cada segmento e a FOLHA VERDE MORDIDA embaixo.",
      "4. Desenhe o sorriso largo comendo a folha e olhinhos felizes.",
      "5. Adicione as manchinhas coloridas nas costas e a marca de mordida na folha."
    ],
    "layers": [
      "<circle cx=\"65\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"88\" cy=\"112\" r=\"15\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"110\" cy=\"115\" r=\"14\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"130\" cy=\"120\" r=\"13\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"148\" cy=\"125\" r=\"11\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"60\" y1=\"100\" x2=\"55\" y2=\"85\" stroke-width=\"2.2\"/> <circle cx=\"55\" cy=\"85\" r=\"3.5\" fill=\"#f43f5e\"/> <line x1=\"70\" y1=\"100\" x2=\"72\" y2=\"85\" stroke-width=\"2.2\"/> <circle cx=\"72\" cy=\"85\" r=\"3.5\" fill=\"#f43f5e\"/>",
      "<path d=\"M45 145 C75 135 125 135 165 145 C155 165 95 165 45 145 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"85\" cy=\"135\" r=\"8\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"60\" cy=\"112\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"59\" cy=\"111\" r=\"1.2\" fill=\"#ffffff\"/> <path d=\"M58 122 Q64 126 70 122\" stroke-width=\"1.8\"/>",
      "<circle cx=\"88\" cy=\"106\" r=\"3\" fill=\"#facc15\"/> <circle cx=\"110\" cy=\"109\" r=\"3\" fill=\"#facc15\"/> <circle cx=\"130\" cy=\"115\" r=\"2.5\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "grilo",
    "name": "Grilinho Cantor",
    "category": "animais",
    "sub": "insetos",
    "diff": "medio",
    "word": "G R I L O",
    "colors": [
      "#16a34a",
      "#84cc16",
      "#fef08a",
      "#1e293b"
    ],
    "tags": [
      "música",
      "noite",
      "salto",
      "pernas",
      "verde"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com o corpo esguio e o élitro (asa de proteção).",
      "2. Trace as GRANDES PERNAS TRASEIRAS DE SALTO DOBRADAS EM ALTO Z.",
      "3. Faça as LONGAS ANTENAS CURVADAS que passam do comprimento do corpo.",
      "4. Desenhe os olhinhos espertos e o rostinho simpático do grilinho cantor.",
      "5. Adicione NOTAS MUSICAIS representando seu famoso cri-cri noturno!"
    ],
    "layers": [
      "<circle cx=\"75\" cy=\"95\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"110\" cy=\"105\" rx=\"26\" ry=\"14\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M115 105 L135 65 L145 125\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M125 108 L142 75 L152 128\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
      "<path d=\"M72 82 C65 55 52 45 35 35 M78 82 C75 55 70 42 62 30\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"85\" y1=\"110\" x2=\"80\" y2=\"128\" stroke-width=\"2.2\"/> <line x1=\"100\" y1=\"112\" x2=\"100\" y2=\"128\" stroke-width=\"2.2\"/>",
      "<circle cx=\"72\" cy=\"92\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"71\" cy=\"91\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M66 102 Q72 106 78 102\" stroke-width=\"1.8\"/>",
      "<path d=\"M155 55 C150 48 158 42 162 50 M158 48 L165 44\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <path d=\"M168 70 C165 65 170 60 174 66\" stroke=\"#f59e0b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "louva-a-deus",
    "name": "Louva-a-Deus Mestre",
    "category": "animais",
    "sub": "insetos",
    "diff": "desafio",
    "word": "L O U V A - A - D E U S",
    "colors": [
      "#15803d",
      "#22c55e",
      "#a3e635",
      "#1e293b"
    ],
    "tags": [
      "braços",
      "kungfu",
      "mestre",
      "verde",
      "ninja"
    ],
    "stepsDesc": [
      "1. Desenhe a CABEÇA TRIANGULAR QUE GIRA e o longo tórax esbelto em bastão.",
      "2. Trace os ENORMES BRAÇOS RAPTÓRIOS DOBRADOS EM POSE DE ORAÇÃO/KUNG-FU.",
      "3. Faça o abdômen alongado protegido por asas verdes e as 4 pernas de apoio.",
      "4. Desenhe os grandes olhos esbugalhados nas pontas do triângulo da cabeça.",
      "5. Adicione as garras serrilhadas nos braços e anteninhas alertas."
    ],
    "layers": [
      "<polygon points=\"100,55 85,75 115,75\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/> <line x1=\"100\" y1=\"75\" x2=\"100\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"140\" rx=\"14\" ry=\"26\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M96 85 L75 80 L68 105 L82 98\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-linejoin=\"round\"/> <path d=\"M104 85 L125 80 L132 105 L118 98\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-linejoin=\"round\"/>",
      "<line x1=\"95\" y1=\"115\" x2=\"75\" y2=\"155\" stroke-width=\"2.2\"/> <line x1=\"105\" y1=\"115\" x2=\"125\" y2=\"155\" stroke-width=\"2.2\"/> <line x1=\"95\" y1=\"60\" x2=\"80\" y2=\"40\" stroke-width=\"1.8\"/> <line x1=\"105\" y1=\"60\" x2=\"120\" y2=\"40\" stroke-width=\"1.8\"/>",
      "<circle cx=\"88\" cy=\"68\" r=\"5\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"87\" cy=\"67\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"112\" cy=\"68\" r=\"5\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"113\" cy=\"67\" r=\"2\" fill=\"#1e293b\"/>",
      "<line x1=\"70\" y1=\"95\" x2=\"68\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"130\" y1=\"95\" x2=\"132\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "t-rex",
    "name": "T-Rex Rei dos Dinos",
    "category": "animais",
    "sub": "dinossauros",
    "diff": "medio",
    "word": "T - R E X",
    "colors": [
      "#15803d",
      "#166534",
      "#fef08a",
      "#ef4444"
    ],
    "tags": [
      "rei",
      "dente",
      "rugido",
      "fóssil",
      "jurássico"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça forte com mandíbula aberta e o corpo robusto do T-Rex.",
      "2. Trace a cauda longa equilibradora e a postura bípede imponente.",
      "3. Faça as pernas musculosas com garras e os bracinhos curtos.",
      "4. Desenhe o olho destemido, narinas e os dentes afiados.",
      "5. Adicione as placas escamadas no dorso e texturas jurássicas."
    ],
    "layers": [
      "<path d=\"M65 60 C65 42 95 38 118 48 C128 55 128 78 105 82 L85 84 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M85 88 C95 88 118 105 112 135 C102 158 75 152 70 130 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M112 130 C138 130 172 145 182 162 C162 166 130 156 105 146\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M92 140 Q108 155 98 184 L80 184\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M78 105 Q92 108 90 122 L82 122\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"85\" cy=\"55\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"84\" cy=\"54\" r=\"2.5\" fill=\"#1e293b\"/> <line x1=\"85\" y1=\"74\" x2=\"118\" y2=\"72\" stroke-width=\"2.5\"/> <path d=\"M90 74 L93 78 L96 74 L99 78 L102 74 L105 78 L108 74\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M68 48 L72 42 L76 50 L80 44 L84 52 M102 92 L107 86 L110 95 M118 122 L123 116 L127 125\" stroke-width=\"2.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "triceratops",
    "name": "Tricerátops Forte",
    "category": "animais",
    "sub": "dinossauros",
    "diff": "medio",
    "word": "T R I C E R Á T O P S",
    "colors": [
      "#b45309",
      "#d97706",
      "#fef3c7",
      "#1e293b"
    ],
    "tags": [
      "três_chifres",
      "escudo",
      "fóssil",
      "placas",
      "amigo"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com o GRANDE ESCUDO ÓSSEO (GOLA) ondulado e corpo robusto.",
      "2. Trace os DOIS LONGOS CHIFRES ACIMA DOS OLHOS e o terceiro chifre no focinho.",
      "3. Faça o bico curvado de papagaio e as 4 patas colunares fortes de dinossauro.",
      "4. Desenhe os olhinhos meigos corajosos e a couraça com placas suaves.",
      "5. Adicione a cauda musculosa e pegadas gigantes pré-históricas no chão."
    ],
    "layers": [
      "<path d=\"M75 55 C60 65 55 90 65 105 C75 115 105 115 115 100 C120 85 110 65 95 55 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M105 90 C125 90 155 100 160 128 C162 148 145 158 120 158 C105 155 95 140 95 130\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M68 62 C50 48 55 35 70 38 C78 30 92 30 98 40 C108 32 120 40 115 55\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/> <path d=\"M72 75 C60 62 55 52 52 45 M88 72 C85 58 82 48 80 42\" stroke=\"#fde047\" stroke-width=\"3\" stroke-linecap=\"round\"/> <polygon points=\"55,98 42,95 52,104\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"75\" y=\"128\" width=\"16\" height=\"32\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"100\" y=\"128\" width=\"16\" height=\"32\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"130\" y=\"128\" width=\"16\" height=\"32\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M160 125 C175 132 182 145 180 152\" fill=\"none\" stroke-width=\"3\"/>",
      "<circle cx=\"82\" cy=\"85\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"81\" cy=\"84\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M60 106 Q68 110 75 106\" stroke-width=\"2\"/>",
      "<circle cx=\"83\" cy=\"158\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"108\" cy=\"158\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"138\" cy=\"158\" r=\"2\" fill=\"#1e293b\"/> <ellipse cx=\"125\" cy=\"110\" rx=\"3\" ry=\"4\" fill=\"#1e293b\" opacity=\"0.4\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "braquiossauro",
    "name": "Braquiossauro Alto",
    "category": "animais",
    "sub": "dinossauros",
    "diff": "facil",
    "word": "B R A Q U I O S S A U R O",
    "colors": [
      "#0284c7",
      "#38bdf8",
      "#f0f9ff",
      "#1e293b"
    ],
    "tags": [
      "pescoço",
      "gigante",
      "árvore",
      "alto",
      "jurássico"
    ],
    "stepsDesc": [
      "1. Desenhe o PESCOÇO SUPER LONGO E ELEVADO alcançando a copa das árvores.",
      "2. Trace a cabeça pequena no topo com crista nasal e o corpo gigante arredondado.",
      "3. Faça as patas dianteiras MAIS ALTAS QUE AS TRASEIRAS e cauda longa chicote.",
      "4. Desenhe o olho amigável meigo e um raminho de folhas na boca.",
      "5. Adicione nuvens no alto ao redor da cabeça do gigante gentil."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"35\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M88 45 C95 85 105 120 115 135\" fill=\"none\" stroke-width=\"3.5\"/> <ellipse cx=\"135\" cy=\"142\" rx=\"35\" ry=\"24\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"118\" y1=\"150\" x2=\"115\" y2=\"185\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"135\" y1=\"152\" x2=\"135\" y2=\"185\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"152\" y1=\"150\" x2=\"155\" y2=\"185\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M165 140 C185 145 195 155 190 165\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M78 40 C70 42 68 46 72 48\" stroke-width=\"2\"/>",
      "<circle cx=\"78\" cy=\"32\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"77\" cy=\"31\" r=\"1.2\" fill=\"#ffffff\"/> <path d=\"M68 45 C58 42 52 48 56 50\" stroke=\"#22c55e\" stroke-width=\"2\"/> <circle cx=\"54\" cy=\"46\" r=\"3\" fill=\"#22c55e\"/>",
      "<path d=\"M40 25 Q55 18 70 25 Q80 20 85 28\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <ellipse cx=\"130\" cy=\"132\" rx=\"4\" ry=\"3\" fill=\"#1e293b\" opacity=\"0.3\"/> <ellipse cx=\"145\" cy=\"135\" rx=\"4\" ry=\"3\" fill=\"#1e293b\" opacity=\"0.3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "estegossauro",
    "name": "Estegossauro com Placas",
    "category": "animais",
    "sub": "dinossauros",
    "diff": "medio",
    "word": "E S T E G O S S A U R O",
    "colors": [
      "#ca8a04",
      "#eab308",
      "#dc2626",
      "#fef08a"
    ],
    "tags": [
      "placas",
      "espinhos",
      "cauda",
      "costas",
      "fóssil"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo arqueado em domo e a cabeça pequena baixa próxima ao solo.",
      "2. Trace a FILEIRA DUPLA DE GRANDES PLACAS ÓSSEAS EM LOSANGO pelas costas.",
      "3. Faça os QUATRO ESPINHOS PONTUDOS NA PONTA DA CAUDA (TAGOMIZADOR).",
      "4. Desenhe as 4 patas curtas e fortes com unhas redondas.",
      "5. Adicione olhinhos meigos e plantinhas do período jurássico."
    ],
    "layers": [
      "<path d=\"M60 120 C60 90 140 90 140 125 C140 145 60 145 60 120 Z\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"50\" cy=\"125\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"75,95 82,72 90,95\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"90,92 98,68 106,92\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"106,95 115,70 124,95\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"122,98 130,78 138,98\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M140 125 L175 130\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"168\" y1=\"128\" x2=\"175\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"172\" y1=\"130\" x2=\"180\" y2=\"124\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"168\" y1=\"130\" x2=\"175\" y2=\"138\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"172\" y1=\"132\" x2=\"180\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"72\" y=\"135\" width=\"14\" height=\"24\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/> <rect x=\"115\" y=\"135\" width=\"14\" height=\"24\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"45\" cy=\"122\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"44\" cy=\"121\" r=\"1.2\" fill=\"#ffffff\"/>",
      "<ellipse cx=\"90\" cy=\"115\" rx=\"3\" ry=\"2\" fill=\"#1e293b\" opacity=\"0.4\"/> <ellipse cx=\"110\" cy=\"118\" rx=\"3\" ry=\"2\" fill=\"#1e293b\" opacity=\"0.4\"/> <ellipse cx=\"125\" cy=\"115\" rx=\"3\" ry=\"2\" fill=\"#1e293b\" opacity=\"0.4\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pterodactilo",
    "name": "Pterodáctilo Voador",
    "category": "animais",
    "sub": "dinossauros",
    "diff": "medio",
    "word": "P T E R O D Á C T I L O",
    "colors": [
      "#7c3aed",
      "#a855f7",
      "#f59e0b",
      "#ffffff"
    ],
    "tags": [
      "asas",
      "voo",
      "crista",
      "céu",
      "jurássico"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça com a LONGA CRISTA PONTUDA VOLTADA PARA TRÁS e bico longo.",
      "2. Trace as ENORMES ASAS MEMBRANOSAS ABERTAS planando pelos céus.",
      "3. Faça o corpo esguio e as patinhas recolhidas durante o voo.",
      "4. Desenhe o olho aguçado de águia pré-histórica e narinas no bico.",
      "5. Adicione as montanhas vulcânicas distantes embaixo e nuvens pré-históricas."
    ],
    "layers": [
      "<polygon points=\"100,68 65,70 120,55\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/> <ellipse cx=\"100\" cy=\"85\" rx=\"14\" ry=\"20\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 78 C65 65 35 70 20 85 C40 95 70 90 92 85\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M108 78 C135 65 165 70 180 85 C160 95 130 90 108 85\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"65,70 42,72 68,75\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"95\" y1=\"102\" x2=\"90\" y2=\"120\" stroke-width=\"2\"/> <line x1=\"105\" y1=\"102\" x2=\"110\" y2=\"120\" stroke-width=\"2\"/>",
      "<circle cx=\"85\" cy=\"68\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"67\" r=\"1.2\" fill=\"#ffffff\"/> <line x1=\"25\" y1=\"82\" x2=\"28\" y2=\"76\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"175\" y1=\"82\" x2=\"172\" y2=\"76\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"35,160 55,135 75,160\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"125,160 145,130 165,160\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M145 130 L145 125\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n      <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "praia-tropical",
    "name": "Praia Tropical com Coqueiro",
    "category": "paisagens",
    "sub": "costeira",
    "diff": "facil",
    "word": "P R A I A",
    "colors": [
      "#38bdf8",
      "#fbbf24",
      "#16a34a",
      "#fef08a"
    ],
    "tags": [
      "mar",
      "sol",
      "coqueiro",
      "areia",
      "verão"
    ],
    "stepsDesc": [
      "1. Trace a linha do mar azul no horizonte e a faixa de areia dourada curvada.",
      "2. Desenhe o TRONCO CURVADO E INCLINADO DO COQUEIRO TROPICAL com anéis.",
      "3. Faça a COPA EXUBERANTE DE PALHAS VERDES com cachos de cocos redondos.",
      "4. Desenhe o grande sol radiante brilhando no céu e as ondas quebrando na praia.",
      "5. Adicione conchinhas do mar na areia e gaivotas voando na brisa."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"120\" x2=\"180\" y2=\"120\" stroke=\"#0284c7\" stroke-width=\"2.5\"/> <path d=\"M20 155 Q90 130 180 150\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"3\"/>",
      "<path d=\"M140 155 C125 120 135 90 145 68\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"5\" stroke-linecap=\"round\"/> <line x1=\"134\" y1=\"135\" x2=\"142\" y2=\"135\" stroke=\"#b45309\" stroke-width=\"2\"/> <line x1=\"131\" y1=\"115\" x2=\"139\" y2=\"115\" stroke=\"#b45309\" stroke-width=\"2\"/> <line x1=\"134\" y1=\"95\" x2=\"142\" y2=\"95\" stroke=\"#b45309\" stroke-width=\"2\"/>",
      "<path d=\"M145 68 Q115 52 100 70 M145 68 Q130 40 148 32 M145 68 Q175 48 185 68 M145 68 Q168 85 155 100 M145 68 Q125 78 112 95\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"3\" stroke-linecap=\"round\"/> <circle cx=\"140\" cy=\"72\" r=\"4\" fill=\"#78350f\"/> <circle cx=\"148\" cy=\"74\" r=\"4\" fill=\"#78350f\"/>",
      "<circle cx=\"50\" cy=\"55\" r=\"18\" fill=\"#facc15\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/> <path d=\"M30 132 Q55 125 80 132 T130 132\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>",
      "<path d=\"M70 45 Q76 40 82 45 Q88 40 94 45\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <ellipse cx=\"65\" cy=\"165\" rx=\"5\" ry=\"3\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "montanhas-nevadas",
    "name": "Montanhas com Neve",
    "category": "paisagens",
    "sub": "relevo",
    "diff": "facil",
    "word": "M O N T A N H A",
    "colors": [
      "#0284c7",
      "#ffffff",
      "#047857",
      "#f59e0b"
    ],
    "tags": [
      "pico",
      "neve",
      "frio",
      "sol",
      "pinheiro"
    ],
    "stepsDesc": [
      "1. Trace a linha base dos vales alpinos e do lago aos pés da montanha.",
      "2. Desenhe o GRANDE PICO ROCHOSO IMPONENTE no centro e os picos laterais.",
      "3. Faça as CALOTAS DE NEVE ETERNA EM ZIGUE-ZAGUE cobrindo o cume dos picos.",
      "4. Desenhe a floresta de pinheiros pontiagudos subindo a encosta da montanha.",
      "5. Adicione nuvens fofas passando pelos picos e pássaros nas alturas."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke=\"#047857\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"165\" rx=\"70\" ry=\"12\" fill=\"#38bdf8\" opacity=\"0.3\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>",
      "<polygon points=\"100,45 45,150 155,150\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/> <polygon points=\"50,75 15,150 85,150\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/> <polygon points=\"150,70 110,150 185,150\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"100,45 85,75 92,80 100,72 108,80 115,75\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"50,75 40,95 46,98 52,94 58,98 62,95\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"150,70 140,92 146,95 152,90 158,95 162,92\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"35,145 30,155 40,155\" fill=\"#065f46\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"45,142 39,155 51,155\" fill=\"#065f46\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"155,145 150,155 160,155\" fill=\"#065f46\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"165,142 159,155 171,155\" fill=\"#065f46\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M25 45 Q40 38 55 45 Q70 38 85 45\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <circle cx=\"155\" cy=\"45\" r=\"12\" fill=\"#facc15\" stroke=\"#f59e0b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "floresta-pinheiros",
    "name": "Floresta Encantada",
    "category": "paisagens",
    "sub": "florestal",
    "diff": "medio",
    "word": "F L O R E S T A",
    "colors": [
      "#065f46",
      "#047857",
      "#10b981",
      "#78350f"
    ],
    "tags": [
      "árvores",
      "bosque",
      "pinheiro",
      "verde",
      "natureza"
    ],
    "stepsDesc": [
      "1. Desenhe as três camadas de solo ondulado criando profundidade na mata.",
      "2. Trace os TRONCOS ROBUSTOS DAS ÁRVORES com casca rugosa e galhos abertos.",
      "3. Faça as COPAS FRONDOSAS EM CAMADAS TRIPLAS de folhagem verdejante.",
      "4. Desenhe COGUMELOS ENCANTADOS COM PINTINHAS BRANCAS brotando no chão.",
      "5. Adicione feixes de luz solar atravessando as copas e borboletas voando."
    ],
    "layers": [
      "<path d=\"M15 165 Q60 155 100 162 T185 158\" fill=\"none\" stroke=\"#065f46\" stroke-width=\"3\"/> <path d=\"M15 145 Q80 135 140 142 T185 138\" fill=\"none\" stroke=\"#047857\" stroke-width=\"2.5\"/>",
      "<rect x=\"52\" y=\"100\" width=\"16\" height=\"55\" rx=\"3\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"132\" y=\"90\" width=\"18\" height=\"65\" rx=\"3\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"94\" y=\"115\" width=\"12\" height=\"45\" rx=\"2\" fill=\"#581c87\" opacity=\"0.3\"/>",
      "<circle cx=\"60\" cy=\"85\" r=\"32\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"141\" cy=\"75\" r=\"36\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M75 165 C72 155 88 155 85 165 Z\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"80\" cy=\"158\" r=\"1.5\" fill=\"#ffffff\"/> <path d=\"M115 163 C112 155 125 155 122 163 Z\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"118\" cy=\"158\" r=\"1.5\" fill=\"#ffffff\"/>",
      "<polygon points=\"50,40 70,160 55,160 40,40\" fill=\"#fef08a\" opacity=\"0.25\"/> <polygon points=\"120,30 145,150 130,150 110,30\" fill=\"#fef08a\" opacity=\"0.25\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "espaco-sideral",
    "name": "Espaço Cósmico & Planetas",
    "category": "paisagens",
    "sub": "espacial",
    "diff": "facil",
    "word": "E S P A Ç O",
    "colors": [
      "#312e81",
      "#4f46e5",
      "#f59e0b",
      "#38bdf8"
    ],
    "tags": [
      "saturno",
      "estrelas",
      "lua",
      "universo",
      "planeta"
    ],
    "stepsDesc": [
      "1. Desenhe o grande planeta SATURNO COM SEU MAJESTOSO ANEL ELÍPTICO.",
      "2. Trace o planeta vizinho com crateras e o planeta anão distante.",
      "3. Faça a LUA CRESCENTE BRILHANTE iluminando a imensidão do cosmos.",
      "4. Desenhe o FOGUETE ESPACIAL VIAJANDO EM VELOCIDADE com rastro de fogo.",
      "5. Espalhe constelações de estrelinhas cintilantes e poeira estelar."
    ],
    "layers": [
      "<circle cx=\"95\" cy=\"95\" r=\"32\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"95\" cy=\"95\" rx=\"58\" ry=\"14\" transform=\"rotate(-20 95 95)\" fill=\"none\" stroke=\"#fde047\" stroke-width=\"5\"/> <ellipse cx=\"95\" cy=\"95\" rx=\"58\" ry=\"14\" transform=\"rotate(-20 95 95)\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"14\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"42\" cy=\"42\" r=\"3\" fill=\"#b91c1c\"/> <circle cx=\"160\" cy=\"140\" r=\"18\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M145 40 A18 18 0 1 0 162 58 A14 14 0 1 1 145 40 Z\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"40,140 55,130 50,150\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"35,145 25,147 38,138\" fill=\"#ef4444\"/>",
      "<polygon points=\"30,85 32,80 37,82 32,85\" fill=\"#facc15\"/> <polygon points=\"160,85 162,80 167,82 162,85\" fill=\"#facc15\"/> <polygon points=\"85,35 87,30 92,32 87,35\" fill=\"#facc15\"/> <polygon points=\"120,165 122,160 127,162 122,165\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "fundo-do-mar",
    "name": "Fundo do Mar com Corais",
    "category": "paisagens",
    "sub": "marinha",
    "diff": "medio",
    "word": "O C E A N O",
    "colors": [
      "#0284c7",
      "#ec4899",
      "#f59e0b",
      "#10b981"
    ],
    "tags": [
      "coral",
      "peixes",
      "bolhas",
      "água",
      "algas"
    ],
    "stepsDesc": [
      "1. Desenhe o solo marinho ondulado coberto de areia fofa e pedras redondas.",
      "2. Trace os GRANDES CORAIS RAMIFICADOS em formato de galhos e leques coloridos.",
      "3. Faça as ALGAS MARINHAS ONDULANTES subindo em espirais verdes na correnteza.",
      "4. Desenhe um CARDUME DE PEIXINHOS TROPICAIS nadando alegremente entre os corais.",
      "5. Adicione colunas de bolhas de ar subindo para a superfície cristalina."
    ],
    "layers": [
      "<path d=\"M15 160 Q60 145 110 155 T185 150\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2.8\"/> <ellipse cx=\"60\" cy=\"165\" rx=\"14\" ry=\"6\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <ellipse cx=\"140\" cy=\"162\" rx=\"18\" ry=\"7\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M35 155 C32 120 45 110 50 125 C55 105 65 115 62 135 C70 120 78 130 75 155 Z\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"48\" cy=\"125\" r=\"2.5\" fill=\"#fbcfe8\"/> <circle cx=\"62\" cy=\"130\" r=\"2.5\" fill=\"#fbcfe8\"/>",
      "<path d=\"M155 155 Q165 125 150 100 Q165 75 155 50\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <path d=\"M168 152 Q175 125 165 105 Q175 85 170 65\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M95 85 C110 80 120 88 120 88 C120 88 110 96 95 91 L85 96 L88 88 L85 80 Z\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"112\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/> <path d=\"M125 60 C135 56 142 62 142 62 C142 62 135 68 125 64 L118 68 L120 62 L118 56 Z\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"4\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/> <circle cx=\"98\" cy=\"52\" r=\"3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/> <circle cx=\"102\" cy=\"40\" r=\"2.5\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "castelo-medieval",
    "name": "Castelo das Três Torres",
    "category": "paisagens",
    "sub": "construcoes",
    "diff": "medio",
    "word": "C A S T E L O",
    "colors": [
      "#64748b",
      "#cbd5e1",
      "#dc2626",
      "#fbbf24"
    ],
    "tags": [
      "torres",
      "rei",
      "muralha",
      "bandeiras",
      "medieval"
    ],
    "stepsDesc": [
      "1. Desenhe a grande muralha fortificada de pedra com o portão em arco central.",
      "2. Trace as TRÊS GRANDES TORRES CILÍNDRICAS com parapeitos ameados (merlões).",
      "3. Faça os TELHADOS CÔNICOS PONTUDOS vermelhos com bandeiras tremulando.",
      "4. Desenhe as janelas estreitas arqueadas em seteira e o portão levadiço de madeira.",
      "5. Adicione o fosso de água ao redor do castelo e montanhas no horizonte."
    ],
    "layers": [
      "<rect x=\"50\" y=\"105\" width=\"100\" height=\"48\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M88 153 L88 125 C88 118 112 118 112 125 L112 153 Z\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"35\" y=\"80\" width=\"25\" height=\"73\" rx=\"2\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"140\" y=\"80\" width=\"25\" height=\"73\" rx=\"2\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"85\" y=\"65\" width=\"30\" height=\"42\" rx=\"2\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"32,80 47,48 63,80\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"137,80 152,48 168,80\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"82,65 100,32 118,65\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"100\" y1=\"32\" x2=\"100\" y2=\"20\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"100,20 115,24 100,28\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <rect x=\"44\" y=\"98\" width=\"7\" height=\"14\" rx=\"2\" fill=\"#1e293b\"/> <rect x=\"149\" y=\"98\" width=\"7\" height=\"14\" rx=\"2\" fill=\"#1e293b\"/> <rect x=\"96\" y=\"80\" width=\"8\" height=\"16\" rx=\"2\" fill=\"#1e293b\"/>",
      "<path d=\"M20 155 Q100 168 180 155\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "cidade-moderna",
    "name": "Cidade com Arranha-Céus",
    "category": "paisagens",
    "sub": "urbana",
    "diff": "facil",
    "word": "C I D A D E",
    "colors": [
      "#475569",
      "#94a3b8",
      "#facc15",
      "#38bdf8"
    ],
    "tags": [
      "prédios",
      "janelas",
      "rua",
      "metrópole",
      "nuvens"
    ],
    "stepsDesc": [
      "1. Trace a linha da avenida asfaltada na base com faixas de pedestre.",
      "2. Desenhe o SKYLINE COM VÁRIOS ARRANHA-CÉUS de diferentes alturas e formatos.",
      "3. Faça as CENTENAS DE JANELINHAS QUADRADAS ILUMINADAS em grades alinhadas.",
      "4. Desenhe as antenas de comunicação, heliportos e cúpulas no topo dos edifícios.",
      "5. Adicione nuvens entre os prédios mais altos e o sol poente alaranjado."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"160\" x2=\"185\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"25\" y1=\"170\" x2=\"45\" y2=\"170\" stroke=\"#facc15\" stroke-width=\"3\"/> <line x1=\"65\" y1=\"170\" x2=\"85\" y2=\"170\" stroke=\"#facc15\" stroke-width=\"3\"/> <line x1=\"105\" y1=\"170\" x2=\"125\" y2=\"170\" stroke=\"#facc15\" stroke-width=\"3\"/> <line x1=\"145\" y1=\"170\" x2=\"165\" y2=\"170\" stroke=\"#facc15\" stroke-width=\"3\"/>",
      "<rect x=\"30\" y=\"85\" width=\"30\" height=\"75\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"65\" y=\"55\" width=\"35\" height=\"105\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <rect x=\"105\" y=\"70\" width=\"30\" height=\"90\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"140\" y=\"95\" width=\"30\" height=\"65\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"72\" y=\"65\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#facc15\"/> <rect x=\"84\" y=\"65\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#facc15\"/> <rect x=\"72\" y=\"80\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#facc15\"/> <rect x=\"84\" y=\"80\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#facc15\"/> <rect x=\"72\" y=\"95\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#facc15\"/> <rect x=\"84\" y=\"95\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#facc15\"/> <rect x=\"38\" y=\"98\" width=\"5\" height=\"7\" rx=\"1\" fill=\"#fef08a\"/> <rect x=\"48\" y=\"98\" width=\"5\" height=\"7\" rx=\"1\" fill=\"#fef08a\"/> <rect x=\"112\" y=\"82\" width=\"5\" height=\"7\" rx=\"1\" fill=\"#fef08a\"/> <rect x=\"122\" y=\"82\" width=\"5\" height=\"7\" rx=\"1\" fill=\"#fef08a\"/>",
      "<line x1=\"82\" y1=\"55\" x2=\"82\" y2=\"35\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"82\" cy=\"35\" r=\"2.5\" fill=\"#ef4444\"/> <polygon points=\"120,70 110,60 130,60\" fill=\"#334155\"/>",
      "<circle cx=\"160\" cy=\"50\" r=\"14\" fill=\"#f97316\" opacity=\"0.8\"/> <path d=\"M20 55 Q35 45 50 55\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "vulcao-erupcao",
    "name": "Vulcão em Erupção",
    "category": "paisagens",
    "sub": "relevo",
    "diff": "medio",
    "word": "V U L C Ã O",
    "colors": [
      "#b91c1c",
      "#f97316",
      "#78350f",
      "#475569"
    ],
    "tags": [
      "lava",
      "fogo",
      "fumaça",
      "cratera",
      "dinossauro"
    ],
    "stepsDesc": [
      "1. Desenhe a montanha cônica larga com a cratera aberta truncada no topo.",
      "2. Trace a GRANDE NUVEM DE FUMAÇA E CINZAS em cogumelo explodindo no céu.",
      "3. Faça os RIOS DE LAVA VERMELHA E ALARANJADA escorrendo pelas encostas.",
      "4. Desenhe as bombas vulcânicas de rocha em brasa sendo cuspidas no ar.",
      "5. Adicione faíscas incandescentes e fendas no solo de terra escura."
    ],
    "layers": [
      "<polygon points=\"40,155 82,85 118,85 160,155\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"20\" y1=\"155\" x2=\"180\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"18\" ry=\"5\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"52\" r=\"22\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"80\" cy=\"55\" r=\"16\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"120\" cy=\"55\" r=\"16\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M92 88 Q88 115 82 145\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4\" stroke-linecap=\"round\"/> <path d=\"M102 88 Q108 120 115 145\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <path d=\"M95 90 L96 130\" stroke=\"#facc15\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 75 Q75 50 65 65\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\"/> <circle cx=\"65\" cy=\"65\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <path d=\"M110 75 Q125 50 135 65\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\"/> <circle cx=\"135\" cy=\"65\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<circle cx=\"95\" cy=\"45\" r=\"2\" fill=\"#facc15\"/> <circle cx=\"105\" cy=\"40\" r=\"2\" fill=\"#facc15\"/> <circle cx=\"85\" cy=\"42\" r=\"1.5\" fill=\"#f97316\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "ilha-do-tesouro",
    "name": "Ilha do Tesouro Perdido",
    "category": "paisagens",
    "sub": "costeira",
    "diff": "facil",
    "word": "I L H A",
    "colors": [
      "#0284c7",
      "#f59e0b",
      "#16a34a",
      "#78350f"
    ],
    "tags": [
      "tesouro",
      "pirata",
      "palmeira",
      "mar",
      "baú"
    ],
    "stepsDesc": [
      "1. Desenhe o montículo de ilha arenosa cercado pela imensidão do oceano.",
      "2. Trace o BAÚ DO TESOURO PIRATA ENTREABERTO brilhando na praia.",
      "3. Faça a PALMEIRA INCLINADA COM COCOS protegendo o baú do sol.",
      "4. Desenhe o 'X' VERMELHO DO MAPA DO TESOURO cravado na areia.",
      "5. Adicione moedas de ouro transbordando do baú e um navio pirata distante."
    ],
    "layers": [
      "<path d=\"M35 145 C45 125 155 125 165 145 C150 160 50 160 35 145 Z\" fill=\"#fde68a\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke=\"#0284c7\" stroke-width=\"2\"/>",
      "<rect x=\"110\" y=\"125\" width=\"28\" height=\"18\" rx=\"3\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M108 125 C108 115 140 115 140 125 Z\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M65 145 C60 110 72 85 82 65\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"4.5\" stroke-linecap=\"round\"/> <path d=\"M82 65 Q55 52 45 70 M82 65 Q70 42 85 35 M82 65 Q110 52 118 70\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<line x1=\"88\" y1=\"135\" x2=\"98\" y2=\"145\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"98\" y1=\"135\" x2=\"88\" y2=\"145\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"120\" cy=\"123\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"126\" cy=\"122\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"132\" cy=\"124\" r=\"2.5\" fill=\"#facc15\"/> <polygon points=\"160,118 168,110 168,118\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "fazendinha-celeiro",
    "name": "Fazendinha com Celeiro",
    "category": "paisagens",
    "sub": "rural",
    "diff": "facil",
    "word": "F A Z E N D A",
    "colors": [
      "#dc2626",
      "#ffffff",
      "#16a34a",
      "#f59e0b"
    ],
    "tags": [
      "celeiro",
      "cerca",
      "sol",
      "campo",
      "trator"
    ],
    "stepsDesc": [
      "1. Desenhe as colinas de pasto verde e o cercado de madeira branca.",
      "2. Trace o GRANDE CELEIRO VERMELHO TRADICIONAL com teto em mansarda.",
      "3. Faça a GRANDE PORTA BRANCA COM O 'X' CLÁSSICO DE FAZENDA.",
      "4. Desenhe o SILO CILÍNDRICO DE GRÃOS alto com cúpula prateada ao lado.",
      "5. Adicione o cata-vento de galo no telhado e o trator verde na lavoura."
    ],
    "layers": [
      "<path d=\"M15 155 Q80 142 185 152\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"3\"/> <line x1=\"25\" y1=\"145\" x2=\"65\" y2=\"145\" stroke=\"#ffffff\" stroke-width=\"2.5\"/> <line x1=\"32\" y1=\"140\" x2=\"32\" y2=\"155\" stroke=\"#ffffff\" stroke-width=\"2\"/> <line x1=\"45\" y1=\"140\" x2=\"45\" y2=\"155\" stroke=\"#ffffff\" stroke-width=\"2\"/> <line x1=\"58\" y1=\"140\" x2=\"58\" y2=\"155\" stroke=\"#ffffff\" stroke-width=\"2\"/>",
      "<rect x=\"75\" y=\"95\" width=\"65\" height=\"55\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"70,95 85,68 130,68 145,95\" fill=\"#b91c1c\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"92\" y=\"115\" width=\"30\" height=\"35\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"92\" y1=\"115\" x2=\"122\" y2=\"150\" stroke=\"#dc2626\" stroke-width=\"2\"/> <line x1=\"122\" y1=\"115\" x2=\"92\" y2=\"150\" stroke=\"#dc2626\" stroke-width=\"2\"/>",
      "<rect x=\"145\" y=\"80\" width=\"18\" height=\"68\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M145 80 C145 70 163 70 163 80 Z\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"107\" y1=\"68\" x2=\"107\" y2=\"52\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"107,52 115,50 107,48\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <circle cx=\"35\" cy=\"55\" r=\"14\" fill=\"#facc15\" stroke=\"#f59e0b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "ceu-arco-iris",
    "name": "Céu com Lindo Arco-Íris",
    "category": "paisagens",
    "sub": "celeste",
    "diff": "facil",
    "word": "A R C O - Í R I S",
    "colors": [
      "#ef4444",
      "#f59e0b",
      "#10b981",
      "#3b82f6"
    ],
    "tags": [
      "cores",
      "nuvens",
      "sol",
      "chuva",
      "alegria"
    ],
    "stepsDesc": [
      "1. Trace os SETE ARCOS CONCÊNTRICOS CURVADOS do arco-íris atravessando o céu.",
      "2. Desenhe a GRANDE NUVEM FOFA BRANCA na ponta esquerda do arco-íris.",
      "3. Faça a NUVEM GÊMEA ESPELHADA na ponta direita acolhendo as cores.",
      "4. Desenhe o SOL RADIANTE COM ÓCULOS DE SOL OU ROSTINHO no canto superior.",
      "5. Adicione gotículas de chuva brilhantes e passarinhos comemorando o fim da tempestade."
    ],
    "layers": [
      "<path d=\"M40 145 C40 60 160 60 160 145\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4\"/> <path d=\"M44 145 C44 65 156 65 156 145\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"4\"/> <path d=\"M48 145 C48 70 152 70 152 145\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"4\"/> <path d=\"M52 145 C52 75 148 75 148 145\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"4\"/> <path d=\"M56 145 C56 80 144 80 144 145\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"4\"/> <path d=\"M60 145 C60 85 140 85 140 145\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"4\"/>",
      "<path d=\"M25 145 Q20 135 30 130 Q35 115 50 120 Q65 115 65 130 Q75 135 70 145 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M130 145 Q125 135 135 130 Q140 115 155 120 Q170 115 170 130 Q180 135 175 145 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"16\" fill=\"#facc15\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/> <line x1=\"45\" y1=\"22\" x2=\"45\" y2=\"15\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"22\" y1=\"45\" x2=\"15\" y2=\"45\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"68\" y1=\"45\" x2=\"75\" y2=\"45\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"95\" cy=\"120\" r=\"2\" fill=\"#38bdf8\"/> <circle cx=\"105\" cy=\"125\" r=\"2\" fill=\"#38bdf8\"/> <path d=\"M110 40 Q115 35 120 40 Q125 35 130 40\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "deserto-oasis",
    "name": "Deserto com Cactos",
    "category": "paisagens",
    "sub": "arida",
    "diff": "facil",
    "word": "D E S E R T O",
    "colors": [
      "#d97706",
      "#f59e0b",
      "#16a34a",
      "#fef3c7"
    ],
    "tags": [
      "dunas",
      "sol",
      "calor",
      "areia",
      "cacto"
    ],
    "stepsDesc": [
      "1. Trace as DUNAS DE AREIA ONDULADAS E SUAVES desenhando o relevo do deserto.",
      "2. Desenhe o GRANDE CACTO SAGUARO com tronco central e dois braços curvados para cima.",
      "3. Faça as LINHAS VERTICAIS DE NERVURAS E ESPINHOS pontiagudos pelo cacto.",
      "4. Desenhe o SOL ESCALDANTE GIGANTESCO brilhando no horizonte seco.",
      "5. Adicione um crânio decorativo ou pedras no chão e um pequeno lagarto."
    ],
    "layers": [
      "<path d=\"M15 135 Q70 115 130 140 T185 135\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"3\"/> <path d=\"M15 155 Q80 145 140 155 T185 150\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2.5\"/>",
      "<rect x=\"92\" y=\"70\" width=\"16\" height=\"75\" rx=\"8\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M92 95 L75 95 L75 75\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M92 95 L75 95 L75 75\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M108 105 L125 105 L125 85\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M108 105 L125 105 L125 85\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
      "<line x1=\"97\" y1=\"75\" x2=\"97\" y2=\"140\" stroke=\"#14532d\" stroke-width=\"1.5\"/> <line x1=\"103\" y1=\"75\" x2=\"103\" y2=\"140\" stroke=\"#14532d\" stroke-width=\"1.5\"/> <line x1=\"88\" y1=\"85\" x2=\"92\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <line x1=\"108\" y1=\"90\" x2=\"112\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<circle cx=\"50\" cy=\"50\" r=\"22\" fill=\"#facc15\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/> <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"12\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/> <line x1=\"20\" y1=\"50\" x2=\"12\" y2=\"50\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"150\" cy=\"155\" rx=\"12\" ry=\"5\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "cachoeira-bosque",
    "name": "Cachoeira na Mata",
    "category": "paisagens",
    "sub": "florestal",
    "diff": "medio",
    "word": "C A C H O E I R A",
    "colors": [
      "#0284c7",
      "#15803d",
      "#64748b",
      "#38bdf8"
    ],
    "tags": [
      "água",
      "queda",
      "rochas",
      "mata",
      "lago"
    ],
    "stepsDesc": [
      "1. Desenhe os dois grandes paredões rochosos verticais formando o desfiladeiro.",
      "2. Trace a QUEDA D'ÁGUA EM VÉU BRANCO ESPUMANTE despencando entre as pedras.",
      "3. Faça a LAGOA CRISTALINA NA BASE com círculos de ondulações na água.",
      "4. Desenhe as vegetações verdes e folhagens tropicais penduradas nas rochas.",
      "5. Adicione nuvens de vapor de água subindo na base da cachoeira e pedras lisas."
    ],
    "layers": [
      "<polygon points=\"20,50 65,50 55,145 20,145\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"145,50 180,50 180,145 135,145\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 52 L55 142 L135 142 L145 52 Z\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"80\" y1=\"55\" x2=\"75\" y2=\"140\" stroke=\"#ffffff\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"55\" x2=\"100\" y2=\"140\" stroke=\"#ffffff\" stroke-width=\"2.5\"/> <line x1=\"120\" y1=\"55\" x2=\"115\" y2=\"140\" stroke=\"#ffffff\" stroke-width=\"2\"/>",
      "<ellipse cx=\"100\" cy=\"155\" rx=\"65\" ry=\"15\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"100\" cy=\"155\" rx=\"35\" ry=\"8\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.8\"/>",
      "<path d=\"M25 60 C35 55 45 65 35 75\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M165 60 C155 55 145 65 155 75\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"75\" cy=\"142\" r=\"8\" fill=\"#ffffff\" opacity=\"0.6\"/> <circle cx=\"100\" cy=\"140\" r=\"10\" fill=\"#ffffff\" opacity=\"0.6\"/> <circle cx=\"125\" cy=\"142\" r=\"8\" fill=\"#ffffff\" opacity=\"0.6\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "lago-vitoria-regia",
    "name": "Lago das Vitórias-Régias",
    "category": "paisagens",
    "sub": "aquatica",
    "diff": "facil",
    "word": "L A G O",
    "colors": [
      "#059669",
      "#10b981",
      "#ec4899",
      "#38bdf8"
    ],
    "tags": [
      "flor",
      "lótus",
      "sapo",
      "água",
      "lagoa"
    ],
    "stepsDesc": [
      "1. Desenhe o contorno sinuoso e sereno do lago rodeado por juncos e capim.",
      "2. Trace as GRANDES FOLHAS CIRCULARES FLUTUANTES DE VITÓRIA-RÉGIA com borda virada.",
      "3. Faça a LINDA FLOR DE LÓTUS ROSA ABERTA no centro da maior folha.",
      "4. Desenhe um SAPINHO SIMPÁTICO sentado confortavelmente na folha vizinha.",
      "5. Adicione libélulas voando com asinhas transparentes e reflexos na água."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"120\" rx=\"82\" ry=\"50\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"75\" cy=\"125\" rx=\"32\" ry=\"18\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M75 125 L95 115\" stroke=\"#14532d\" stroke-width=\"2\"/> <ellipse cx=\"135\" cy=\"115\" rx=\"26\" ry=\"15\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 115 C70 100 80 100 75 115 Z\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M68 116 C60 105 72 105 70 116 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M82 116 C90 105 78 105 80 116 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"75\" cy=\"115\" r=\"3\" fill=\"#facc15\"/>",
      "<ellipse cx=\"135\" cy=\"108\" rx=\"8\" ry=\"6\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"132\" cy=\"104\" r=\"2.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"132\" cy=\"104\" r=\"1\" fill=\"#1e293b\"/> <circle cx=\"138\" cy=\"104\" r=\"2.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"138\" cy=\"104\" r=\"1\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"105\" cy=\"65\" rx=\"5\" ry=\"2\" fill=\"#38bdf8\"/> <line x1=\"105\" y1=\"65\" x2=\"105\" y2=\"72\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"20\" y1=\"95\" x2=\"25\" y2=\"70\" stroke=\"#15803d\" stroke-width=\"2\"/> <line x1=\"28\" y1=\"100\" x2=\"35\" y2=\"75\" stroke=\"#15803d\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "savana-sol",
    "name": "Savana ao Pôr do Sol",
    "category": "paisagens",
    "sub": "tropical",
    "diff": "medio",
    "word": "S A V A N A",
    "colors": [
      "#ea580c",
      "#f97316",
      "#78350f",
      "#fef08a"
    ],
    "tags": [
      "acácia",
      "silhueta",
      "crepúsculo",
      "áfrica",
      "safari"
    ],
    "stepsDesc": [
      "1. Trace a linha horizontal reta do horizonte africano banhado pelo crepúsculo.",
      "2. Desenhe o GIGANTESCO DISCO SOLAR ALARANJADO descendo ao fundo.",
      "3. Faça a SILHUETA NEGRA ELEGANTE DA ACÁCIA de copa plana espalmada.",
      "4. Desenhe as silhuetas de uma girafa e seu filhote caminhando na savana.",
      "5. Adicione aves migratórias cruzando o céu em formação em 'V'."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"150\" x2=\"185\" y2=\"150\" stroke=\"#78350f\" stroke-width=\"3\"/>",
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"#f97316\" stroke=\"#ea580c\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 150 L63 90 L52 75 M63 90 L75 75\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"4.5\" stroke-linecap=\"round\"/> <path d=\"M42 75 C45 68 85 68 88 75 C85 82 45 82 42 75 Z\" fill=\"#1e293b\"/>",
      "<path d=\"M135 150 L135 125 L142 95 L144 95 L140 125 L143 150\" fill=\"#1e293b\"/> <circle cx=\"143\" cy=\"94\" r=\"3\" fill=\"#1e293b\"/> <path d=\"M155 150 L155 135 L160 115 L161 115 L158 135 L160 150\" fill=\"#1e293b\"/>",
      "<path d=\"M75 42 Q80 38 85 42 Q90 38 95 42\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M90 48 Q94 45 98 48 Q102 45 106 48\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "polo-norte-geleira",
    "name": "Polo Norte com Geleiras",
    "category": "paisagens",
    "sub": "polar",
    "diff": "facil",
    "word": "G E L E I R A",
    "colors": [
      "#38bdf8",
      "#e0f2fe",
      "#0284c7",
      "#ffffff"
    ],
    "tags": [
      "iceberg",
      "gelo",
      "frio",
      "urso_polar",
      "mar"
    ],
    "stepsDesc": [
      "1. Desenhe a linha de blocos de gelo flutuantes e o mar ártico gelado.",
      "2. Trace o GRANDE ICEBERG IMPONENTE com picos afiados e paredes azuis.",
      "3. Faça a parte submersa do iceberg visível na água transparente.",
      "4. Desenhe um URSO POLAR CAMINHANDO no topo do bloco de gelo.",
      "5. Adicione flocos de neve caindo e um iglu distante no horizonte polar."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"135\" x2=\"185\" y2=\"135\" stroke=\"#0284c7\" stroke-width=\"2.5\"/> <polygon points=\"20,135 70,135 60,155 15,155\" fill=\"#e0f2fe\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"100,60 70,135 145,135\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/> <polygon points=\"125,75 105,135 160,135\" fill=\"#bae6fd\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"70,135 145,135 135,170 80,170\" fill=\"#38bdf8\" opacity=\"0.5\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"45\" cy=\"128\" rx=\"10\" ry=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"53\" cy=\"125\" r=\"4\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"55\" cy=\"125\" r=\"1.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"35\" cy=\"65\" r=\"2.5\" fill=\"#ffffff\" stroke=\"#38bdf8\" stroke-width=\"1\"/> <circle cx=\"65\" cy=\"45\" r=\"2.5\" fill=\"#ffffff\" stroke=\"#38bdf8\" stroke-width=\"1\"/> <circle cx=\"150\" cy=\"55\" r=\"2.5\" fill=\"#ffffff\" stroke=\"#38bdf8\" stroke-width=\"1\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "caverna-estalactites",
    "name": "Caverna com Cristais",
    "category": "paisagens",
    "sub": "subterranea",
    "diff": "desafio",
    "word": "C A V E R N A",
    "colors": [
      "#334155",
      "#a855f7",
      "#c084fc",
      "#64748b"
    ],
    "tags": [
      "cristal",
      "pedra",
      "estalactite",
      "mistério",
      "gruta"
    ],
    "stepsDesc": [
      "1. Desenhe a abóbada rochosa da gruta escura com solo irregular de pedras.",
      "2. Trace as ESTALACTITES PONTUDAS penduradas no teto da caverna.",
      "3. Faça as ESTALAGMITES SUBINDO DO CHÃO em colunas de calcário.",
      "4. Desenhe GRANDES CRISTAIS MÁGICOS BRILHANTES multifacetados reluzindo.",
      "5. Adicione gotinhas d'água pingando do teto formando pequenas poças de luz."
    ],
    "layers": [
      "<path d=\"M20 160 Q100 150 180 160\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/> <path d=\"M20 40 C60 25 140 25 180 40\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"4\"/>",
      "<polygon points=\"45,35 52,75 58,35\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"85,30 92,85 100,30\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"135,32 142,70 148,32\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"50,158 56,125 64,158\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"130,158 138,115 146,158\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"90,158 96,120 106,128 102,158\" fill=\"#c084fc\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"102,158 106,128 114,135 110,158\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"92\" cy=\"100\" r=\"2\" fill=\"#38bdf8\"/> <circle cx=\"92\" cy=\"112\" r=\"2\" fill=\"#38bdf8\"/> <ellipse cx=\"98\" cy=\"158\" rx=\"8\" ry=\"3\" fill=\"#38bdf8\" opacity=\"0.6\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "pantano-magico",
    "name": "Pântano das Fadas",
    "category": "paisagens",
    "sub": "fantastica",
    "diff": "medio",
    "word": "P Â N T A N O",
    "colors": [
      "#166534",
      "#15803d",
      "#86efac",
      "#84cc16"
    ],
    "tags": [
      "vagalume",
      "salgueiro",
      "névoa",
      "cogumelos",
      "magia"
    ],
    "stepsDesc": [
      "1. Desenhe as águas escuras e misteriosas do pântano com ilhotas de lodo.",
      "2. Trace o GRANDE SALGUEIRO-CHORÃO RETORCIDO com galhos caídos na água.",
      "3. Faça os CIPOZINHOS E MUSGOS PENDURADOS como cortinas mágicas.",
      "4. Desenhe COGUMELOS FLUORESCENTES BRILHANDO na base do tronco.",
      "5. Adicione VAGALUMES LUMINOSOS FLUTUANDO criando pontos de luz mágica."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"80\" ry=\"25\" fill=\"#14532d\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"65\" cy=\"148\" rx=\"25\" ry=\"10\" fill=\"#365314\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M60 148 C55 110 70 85 85 70\" fill=\"none\" stroke=\"#451a03\" stroke-width=\"6\" stroke-linecap=\"round\"/> <path d=\"M85 70 Q110 80 125 115\" fill=\"none\" stroke=\"#451a03\" stroke-width=\"4\" stroke-linecap=\"round\"/> <path d=\"M85 70 Q70 85 55 125\" fill=\"none\" stroke=\"#451a03\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<path d=\"M125 115 Q128 135 125 145\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <path d=\"M115 105 Q118 130 115 142\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <path d=\"M60 115 Q55 130 58 142\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M48 146 C45 138 58 138 55 146 Z\" fill=\"#84cc16\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M72 148 C69 140 82 140 79 148 Z\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"95\" cy=\"100\" r=\"4\" fill=\"#fef08a\"/> <circle cx=\"130\" cy=\"85\" r=\"3\" fill=\"#fef08a\"/> <circle cx=\"45\" cy=\"95\" r=\"3.5\" fill=\"#fef08a\"/> <circle cx=\"110\" cy=\"130\" r=\"3\" fill=\"#fef08a\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "colinas-verdes",
    "name": "Colinas com Flores",
    "category": "paisagens",
    "sub": "rural",
    "diff": "facil",
    "word": "C O L I N A S",
    "colors": [
      "#22c55e",
      "#16a34a",
      "#ec4899",
      "#facc15"
    ],
    "tags": [
      "grama",
      "flores",
      "vento",
      "sol",
      "primavera"
    ],
    "stepsDesc": [
      "1. Desenhe as três elevações suaves de colinas verdejantes onduladas.",
      "2. Trace o CAMINHO DE TERRA BATIDA SINUOSO descendo pela colina.",
      "3. Faça CENTENAS DE MARGARIDINHAS E TULIPAS coloridas espalhadas no pasto.",
      "4. Desenhe uma ÁRVORE SOLITÁRIA FRONDOSA no topo da colina mais alta.",
      "5. Adicione nuvens brancas de algodão e o sol suave da primavera."
    ],
    "layers": [
      "<path d=\"M15 155 Q65 125 125 145 T185 135\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\"/> <path d=\"M15 130 Q90 105 185 125\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 115 Q105 135 90 155 Q115 168 120 185\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"4\"/>",
      "<circle cx=\"40\" cy=\"140\" r=\"3\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"40\" cy=\"140\" r=\"1.5\" fill=\"#facc15\"/> <circle cx=\"55\" cy=\"148\" r=\"3\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"70\" cy=\"138\" r=\"3\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"70\" cy=\"138\" r=\"1.5\" fill=\"#facc15\"/> <circle cx=\"145\" cy=\"145\" r=\"3\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"160\" cy=\"140\" r=\"3\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<rect x=\"135\" y=\"85\" width=\"8\" height=\"28\" rx=\"2\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"139\" cy=\"75\" r=\"22\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"35\" cy=\"45\" r=\"15\" fill=\"#facc15\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <path d=\"M75 40 Q85 32 95 40 Q105 32 115 40\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "por-do-sol-mar",
    "name": "Pôr do Sol no Oceano",
    "category": "paisagens",
    "sub": "costeira",
    "diff": "facil",
    "word": "P Ô R  D O  S O L",
    "colors": [
      "#f97316",
      "#ef4444",
      "#a855f7",
      "#fef08a"
    ],
    "tags": [
      "sol",
      "horizonte",
      "mar",
      "ondas",
      "gaivotas"
    ],
    "stepsDesc": [
      "1. Trace a linha perfeita e nítida do horizonte dividindo o mar e o céu.",
      "2. Desenhe o GRANDE SOL VERMELHO-ALARANJADO descendo na linha d'água.",
      "3. Faça a TRILHA DE REFLEXO DOURADO CINTILANTE na superfície do oceano.",
      "4. Desenhe as ONDAS HORIZONTAIS SUAVES quebrando tranquilamente.",
      "5. Adicione silhuetas de gaivotas solitárias voando em direção ao sol poente."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"125\" x2=\"185\" y2=\"125\" stroke=\"#ef4444\" stroke-width=\"3\"/>",
      "<path d=\"M68 125 A32 32 0 0 1 132 125 Z\" fill=\"#f97316\" stroke=\"#ea580c\" stroke-width=\"2.5\"/>",
      "<line x1=\"88\" y1=\"130\" x2=\"112\" y2=\"130\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <line x1=\"82\" y1=\"136\" x2=\"118\" y2=\"136\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <line x1=\"75\" y1=\"143\" x2=\"125\" y2=\"143\" stroke=\"#facc15\" stroke-width=\"2.2\"/> <line x1=\"68\" y1=\"151\" x2=\"132\" y2=\"151\" stroke=\"#facc15\" stroke-width=\"2\"/> <line x1=\"60\" y1=\"160\" x2=\"140\" y2=\"160\" stroke=\"#facc15\" stroke-width=\"2\"/>",
      "<path d=\"M25 138 Q45 134 65 138\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2\"/> <path d=\"M135 138 Q155 134 175 138\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2\"/> <path d=\"M35 152 Q55 148 75 152\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2\"/> <path d=\"M125 152 Q145 148 165 152\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2\"/>",
      "<path d=\"M45 65 Q50 60 55 65 Q60 60 65 65\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M135 55 Q140 50 145 55 Q150 50 155 55\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "farol-penhasco",
    "name": "Farol com Facho de Luz",
    "category": "paisagens",
    "sub": "costeira",
    "diff": "medio",
    "word": "F A R O L",
    "colors": [
      "#dc2626",
      "#ffffff",
      "#fef08a",
      "#0284c7"
    ],
    "tags": [
      "luz",
      "mar",
      "rochas",
      "navio",
      "guia"
    ],
    "stepsDesc": [
      "1. Desenhe os penhascos rochosos pontiagudos e o mar revolto com ondas bravias.",
      "2. Trace a TORRE CÔNICA ALTA DO FAROL listrada em vermelho e branco.",
      "3. Faça a LANTERNA DE VIDRO NO TOPO com cúpula esférica e parapeito.",
      "4. Desenhe o PODEROSO FACHO DE LUZ AMARELO cortando a escuridão da noite.",
      "5. Adicione um barquinho seguro sendo guiado pela luz do farol."
    ],
    "layers": [
      "<polygon points=\"110,180 125,120 185,135 185,180\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"15\" y1=\"150\" x2=\"125\" y2=\"150\" stroke=\"#0284c7\" stroke-width=\"2.5\"/>",
      "<polygon points=\"140,55 132,125 168,125 160,55\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"137,70 135,88 165,88 163,70\" fill=\"#dc2626\"/> <polygon points=\"133,105 132,120 168,120 167,105\" fill=\"#dc2626\"/>",
      "<rect x=\"138\" y=\"42\" width=\"24\" height=\"14\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"135,42 150,28 165,42\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"134\" y1=\"56\" x2=\"166\" y2=\"56\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<polygon points=\"138,48 20,20 20,80\" fill=\"#fde047\" opacity=\"0.4\"/>",
      "<polygon points=\"50,148 65,148 60,158 45,158\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"55,148 55,135 62,148\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "casa-de-campo",
    "name": "Casa de Campo Floridinha",
    "category": "paisagens",
    "sub": "rural",
    "diff": "facil",
    "word": "C A S A",
    "colors": [
      "#d97706",
      "#dc2626",
      "#16a34a",
      "#38bdf8"
    ],
    "tags": [
      "telhado",
      "jardim",
      "chaminé",
      "fumaça",
      "família"
    ],
    "stepsDesc": [
      "1. Desenhe as paredes da casinha térrea e o jardim florido ao redor.",
      "2. Trace o TELHADO TRIANGULAR INCLINADO COM CHAMINÉ fumegante.",
      "3. Faça a PORTINHA COM MAÇANETA REDONDA e as duas janelas com jardineiras.",
      "4. Desenhe a CERQUINHA BRANCA DE PIQUETES com portãozinho no jardim.",
      "5. Adicione árvores frutíferas ao lado e fumaça em espiral saindo da chaminé."
    ],
    "layers": [
      "<rect x=\"65\" y=\"105\" width=\"70\" height=\"50\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"55,105 100,65 145,105\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <rect x=\"120\" y=\"62\" width=\"12\" height=\"22\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"90\" y=\"125\" width=\"20\" height=\"30\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"106\" cy=\"140\" r=\"2\" fill=\"#facc15\"/> <rect x=\"72\" y=\"115\" width=\"14\" height=\"14\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <rect x=\"114\" y=\"115\" width=\"14\" height=\"14\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"25\" y1=\"145\" x2=\"65\" y2=\"145\" stroke=\"#ffffff\" stroke-width=\"2.5\"/> <line x1=\"30\" y1=\"138\" x2=\"30\" y2=\"155\" stroke=\"#ffffff\" stroke-width=\"2\"/> <line x1=\"45\" y1=\"138\" x2=\"45\" y2=\"155\" stroke=\"#ffffff\" stroke-width=\"2\"/> <line x1=\"60\" y1=\"138\" x2=\"60\" y2=\"155\" stroke=\"#ffffff\" stroke-width=\"2\"/>",
      "<path d=\"M126 62 Q130 52 125 45 Q135 38 128 30\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-linecap=\"round\"/> <circle cx=\"35\" cy=\"115\" r=\"18\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"32\" y=\"125\" width=\"6\" height=\"30\" fill=\"#78350f\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "moinho-vento",
    "name": "Moinho de Vento Holandês",
    "category": "paisagens",
    "sub": "rural",
    "diff": "medio",
    "word": "M O I N H O",
    "colors": [
      "#78350f",
      "#ffffff",
      "#f59e0b",
      "#ec4899"
    ],
    "tags": [
      "pás",
      "tulipas",
      "vento",
      "holanda",
      "campo"
    ],
    "stepsDesc": [
      "1. Desenhe a torre octogonal afunilada do moinho tradicional de madeira.",
      "2. Trace o EIXO CENTRAL NO TOPO com a calota giratória protetora.",
      "3. Faça as QUATRO GRANDES PÁS EM CRUZ com treliça quadriculada de madeira.",
      "4. Desenhe o canteiro de tulipas holandesas coloridas aos pés do moinho.",
      "5. Adicione nuvens de vento mostrando as pás girando com a brisa."
    ],
    "layers": [
      "<polygon points=\"78,75 70,155 130,155 122,75\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M75 75 C75 62 125 62 125 75 Z\" fill=\"#451a03\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"72\" r=\"7\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"72\" x2=\"100\" y2=\"25\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <line x1=\"100\" y1=\"72\" x2=\"100\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <line x1=\"100\" y1=\"72\" x2=\"52\" y2=\"72\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <line x1=\"100\" y1=\"72\" x2=\"148\" y2=\"72\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <rect x=\"94\" y=\"28\" width=\"6\" height=\"38\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <rect x=\"100\" y=\"78\" width=\"6\" height=\"38\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <rect x=\"58\" y=\"66\" width=\"38\" height=\"6\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <rect x=\"106\" y=\"72\" width=\"38\" height=\"6\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M40 162 C38 155 45 155 42 162 Z\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <path d=\"M55 160 C53 153 60 153 58 160 Z\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <path d=\"M145 160 C143 153 150 153 148 160 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <path d=\"M160 162 C158 155 165 155 163 162 Z\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<path d=\"M35 45 Q50 38 65 45\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "ponte-sobre-rio",
    "name": "Ponte sobre o Rio Azul",
    "category": "paisagens",
    "sub": "construcoes",
    "diff": "medio",
    "word": "P O N T E",
    "colors": [
      "#78350f",
      "#0284c7",
      "#16a34a",
      "#64748b"
    ],
    "tags": [
      "arcos",
      "água",
      "pedras",
      "travessia",
      "árvores"
    ],
    "stepsDesc": [
      "1. Desenhe as duas margens com grama verde e o rio sinuoso passando pelo meio.",
      "2. Trace a GRANDE PONTE DE PEDRA COM ARCOS CLÁSSICOS cruzando as águas.",
      "3. Faça os GUARDA-CORPOS E PARAPEITOS DE PROTEÇÃO ao longo do tabuleiro.",
      "4. Desenhe os reflexos dos arcos espelhados na água límpida do rio.",
      "5. Adicione patinhos nadando embaixo dos arcos e árvores na beira do rio."
    ],
    "layers": [
      "<path d=\"M15 110 Q50 135 15 170\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M185 110 Q150 135 185 170\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"15\" y=\"115\" width=\"170\" height=\"55\" fill=\"#38bdf8\" opacity=\"0.4\"/>",
      "<path d=\"M15 115 L185 115 L185 135 L15 135 Z\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M45 135 A22 22 0 0 1 85 135\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M115 135 A22 22 0 0 1 155 135\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"15\" y1=\"108\" x2=\"185\" y2=\"108\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"35\" y1=\"108\" x2=\"35\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"75\" y1=\"108\" x2=\"75\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"115\" y1=\"108\" x2=\"115\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"155\" y1=\"108\" x2=\"155\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<ellipse cx=\"65\" cy=\"142\" rx=\"16\" ry=\"5\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/> <ellipse cx=\"135\" cy=\"142\" rx=\"16\" ry=\"5\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>",
      "<ellipse cx=\"98\" cy=\"150\" rx=\"6\" ry=\"4\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <circle cx=\"103\" cy=\"147\" r=\"2.5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "roda-gigante-parque",
    "name": "Parque com Roda-Gigante",
    "category": "paisagens",
    "sub": "lazer",
    "diff": "desafio",
    "word": "P A R Q U E",
    "colors": [
      "#ef4444",
      "#3b82f6",
      "#facc15",
      "#10b981"
    ],
    "tags": [
      "brinquedo",
      "cabines",
      "festa",
      "diversão",
      "circo"
    ],
    "stepsDesc": [
      "1. Desenhe os dois suportes em 'A' triangulares que sustentam o grande eixo.",
      "2. Trace o GRANDE CÍRCULO EXTERNO e o CÍRCULO INTERNO com os raios da roda.",
      "3. Faça as OITO GÔNDOLAS/CABINES COLORIDAS penduradas nos eixos da roda.",
      "4. Desenhe a bilheteria do parque e bandeirinhas festivas decorando o chão.",
      "5. Adicione balões de festa flutuando no céu e luzinhas na roda-gigante."
    ],
    "layers": [
      "<polygon points=\"100,85 70,165 82,165 100,105 118,165 130,165\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"20\" y1=\"165\" x2=\"180\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"85\" r=\"52\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\"/> <circle cx=\"100\" cy=\"85\" r=\"10\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"33\" x2=\"100\" y2=\"137\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"48\" y1=\"85\" x2=\"152\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"63\" y1=\"48\" x2=\"137\" y2=\"122\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"63\" y1=\"122\" x2=\"137\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"100\" cy=\"33\" r=\"6\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"137\" r=\"6\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"48\" cy=\"85\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"152\" cy=\"85\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"63\" cy=\"48\" r=\"6\" fill=\"#10b981\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"137\" cy=\"122\" r=\"6\" fill=\"#10b981\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"63\" cy=\"122\" r=\"6\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"137\" cy=\"48\" r=\"6\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"35\" y=\"145\" width=\"22\" height=\"20\" fill=\"#f43f5e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"32,145 46,138 60,145\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<circle cx=\"160\" cy=\"135\" r=\"6\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <line x1=\"160\" y1=\"141\" x2=\"162\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"1\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "circo-colorido",
    "name": "Tenda do Circo da Alegria",
    "category": "paisagens",
    "sub": "lazer",
    "diff": "facil",
    "word": "C I R C O",
    "colors": [
      "#dc2626",
      "#facc15",
      "#2563eb",
      "#ffffff"
    ],
    "tags": [
      "lona",
      "listras",
      "bandeira",
      "palhaço",
      "show"
    ],
    "stepsDesc": [
      "1. Desenhe a grande tenda cônica arredondada do circo com base circular.",
      "2. Trace a CÚPULA ALTA DO CIRCO encimada por um mastro com grande bandeira.",
      "3. Faça as FAIXAS VERTICAIS LISTRADAS EM VERMELHO E AMARELO por toda a lona.",
      "4. Desenhe a entrada triunfal com cortinas recolhidas em laço.",
      "5. Adicione estrelas brilhantes e luzinhas festivas em volta da tenda mágica."
    ],
    "layers": [
      "<polygon points=\"40,150 100,50 160,150\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"100\" y1=\"50\" x2=\"100\" y2=\"28\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <polygon points=\"100,28 122,34 100,40\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"100,50 82,150 94,150\" fill=\"#facc15\"/> <polygon points=\"100,50 106,150 118,150\" fill=\"#facc15\"/> <polygon points=\"100,50 130,150 142,150\" fill=\"#facc15\"/> <polygon points=\"100,50 58,150 70,150\" fill=\"#facc15\"/>",
      "<path d=\"M90 150 C90 125 110 125 110 150 Z\" fill=\"#1e293b\"/> <path d=\"M85 135 C88 140 92 140 92 135\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"1.5\"/> <path d=\"M108 135 C112 140 115 140 115 135\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"1.5\"/>",
      "<circle cx=\"50\" cy=\"90\" r=\"3\" fill=\"#fef08a\"/> <circle cx=\"150\" cy=\"90\" r=\"3\" fill=\"#fef08a\"/> <polygon points=\"100,65 102,60 107,62 102,65\" fill=\"#fef08a\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "estacao-trem",
    "name": "Estação de Trem a Vapor",
    "category": "paisagens",
    "sub": "construcoes",
    "diff": "medio",
    "word": "E S T A Ç Ã O",
    "colors": [
      "#78350f",
      "#475569",
      "#dc2626",
      "#cbd5e1"
    ],
    "tags": [
      "trilhos",
      "relógio",
      "plataforma",
      "viagem",
      "trem"
    ],
    "stepsDesc": [
      "1. Desenhe os dois trilhos de trem paralelos no chão com dormentes de madeira.",
      "2. Trace o PRÉDIO HISTÓRICO DA ESTAÇÃO com telhado de duas águas e relógio central.",
      "3. Faça a PLATAFORMA DE EMBARQUE COBERTA com colunas de ferro fundido.",
      "4. Desenhe o grande relógio redondo clássico marcando a hora da partida.",
      "5. Adicione nuvens de fumaça branca saindo da locomotiva a vapor chegando."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"160\" x2=\"180\" y2=\"160\" stroke=\"#475569\" stroke-width=\"3\"/> <line x1=\"20\" y1=\"170\" x2=\"180\" y2=\"170\" stroke=\"#475569\" stroke-width=\"3\"/> <line x1=\"40\" y1=\"158\" x2=\"40\" y2=\"172\" stroke=\"#78350f\" stroke-width=\"2.5\"/> <line x1=\"70\" y1=\"158\" x2=\"70\" y2=\"172\" stroke=\"#78350f\" stroke-width=\"2.5\"/> <line x1=\"100\" y1=\"158\" x2=\"100\" y2=\"172\" stroke=\"#78350f\" stroke-width=\"2.5\"/> <line x1=\"130\" y1=\"158\" x2=\"130\" y2=\"172\" stroke=\"#78350f\" stroke-width=\"2.5\"/> <line x1=\"160\" y1=\"158\" x2=\"160\" y2=\"172\" stroke=\"#78350f\" stroke-width=\"2.5\"/>",
      "<rect x=\"50\" y=\"80\" width=\"100\" height=\"65\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"40,80 100,45 160,80\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"40\" y=\"105\" width=\"120\" height=\"8\" rx=\"2\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"50\" y1=\"113\" x2=\"50\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"150\" y1=\"113\" x2=\"150\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"10\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"65\" x2=\"100\" y2=\"59\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"100\" y1=\"65\" x2=\"105\" y2=\"65\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"160\" cy=\"70\" r=\"12\" fill=\"#e2e8f0\" opacity=\"0.6\"/> <circle cx=\"170\" cy=\"55\" r=\"15\" fill=\"#e2e8f0\" opacity=\"0.5\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "templo-pagoda",
    "name": "Templo Pagoda Oriental",
    "category": "paisagens",
    "sub": "construcoes",
    "diff": "desafio",
    "word": "P A G O D A",
    "colors": [
      "#dc2626",
      "#f59e0b",
      "#1e293b",
      "#16a34a"
    ],
    "tags": [
      "telhados",
      "japão",
      "oriente",
      "cerejeira",
      "zen"
    ],
    "stepsDesc": [
      "1. Desenhe a base de pedra sólida com degraus cerimoniais de acesso.",
      "2. Trace o PRIMEIRO ANDAR COM TELHADO CURVADO ORIENTAL virado para cima nas pontas.",
      "3. Faça o SEGUNDO E TERCEIRO ANDAR SOBREPOSTOS em tamanhos decrescentes.",
      "4. Desenhe o pináculo dourado pontiagudo no topo coroando o templo.",
      "5. Adicione um galho de cerejeira com flores rosas (sakura) emoldurando a cena."
    ],
    "layers": [
      "<rect x=\"65\" y=\"145\" width=\"70\" height=\"15\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"75\" y1=\"153\" x2=\"125\" y2=\"153\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"75\" y=\"115\" width=\"50\" height=\"30\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M50 115 C75 110 125 110 150 115 L145 105 C125 105 75 105 55 105 Z\" fill=\"#b91c1c\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"82\" y=\"85\" width=\"36\" height=\"20\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M60 85 C80 80 120 80 140 85 L135 78 C120 78 80 78 65 78 Z\" fill=\"#b91c1c\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <rect x=\"88\" y=\"62\" width=\"24\" height=\"16\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M72 62 C85 58 115 58 128 62 L124 56 C115 56 85 56 76 56 Z\" fill=\"#b91c1c\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"56\" x2=\"100\" y2=\"35\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"33\" r=\"3\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<path d=\"M20 40 Q45 55 55 45\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/> <circle cx=\"35\" cy=\"48\" r=\"4\" fill=\"#f472b6\"/> <circle cx=\"48\" cy=\"52\" r=\"4\" fill=\"#f472b6\"/> <circle cx=\"56\" cy=\"44\" r=\"4\" fill=\"#f472b6\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "casa-na-arvore",
    "name": "Casa na Árvore dos Sonhos",
    "category": "paisagens",
    "sub": "lazer",
    "diff": "medio",
    "word": "C A S A  N A  Á R V O R E",
    "colors": [
      "#78350f",
      "#15803d",
      "#f59e0b",
      "#38bdf8"
    ],
    "tags": [
      "escada",
      "galhos",
      "brincadeira",
      "secreto",
      "amigos"
    ],
    "stepsDesc": [
      "1. Desenhe o enorme tronco de carvalho centenário com raízes fortes fincadas no chão.",
      "2. Trace a PLATAFORMA DE MADEIRA SEGURA apoiada na forquilha dos grandes galhos.",
      "3. Faça a CASINHA DE MADEIRA ACOLHEDORA com telhado inclinado e janelinha.",
      "4. Desenhe a ESCADA DE CORDA RÚSTICA pendurada balançando até o chão.",
      "5. Adicione folhas verdes fofas cobrindo o teto e um balde com roldana para puxar segredos."
    ],
    "layers": [
      "<path d=\"M85 165 C85 125 70 100 65 85\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"14\" stroke-linecap=\"round\"/> <path d=\"M85 125 Q115 105 130 90\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"10\" stroke-linecap=\"round\"/> <line x1=\"20\" y1=\"165\" x2=\"180\" y2=\"165\" stroke=\"#15803d\" stroke-width=\"3\"/>",
      "<rect x=\"75\" y=\"85\" width=\"60\" height=\"8\" rx=\"2\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<rect x=\"85\" y=\"55\" width=\"45\" height=\"30\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"78,55 107,32 138,55\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <rect x=\"98\" y=\"62\" width=\"12\" height=\"12\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<line x1=\"80\" y1=\"93\" x2=\"80\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"88\" y1=\"93\" x2=\"88\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"80\" y1=\"105\" x2=\"88\" y2=\"105\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <line x1=\"80\" y1=\"120\" x2=\"88\" y2=\"120\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <line x1=\"80\" y1=\"135\" x2=\"88\" y2=\"135\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <line x1=\"80\" y1=\"150\" x2=\"88\" y2=\"150\" stroke=\"#ca8a04\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"65\" r=\"24\" fill=\"#15803d\" opacity=\"0.8\"/> <circle cx=\"145\" cy=\"55\" r=\"26\" fill=\"#15803d\" opacity=\"0.8\"/> <circle cx=\"107\" cy=\"25\" r=\"18\" fill=\"#15803d\" opacity=\"0.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "igloo-esquimo",
    "name": "Igloo no Meio da Neve",
    "category": "paisagens",
    "sub": "polar",
    "diff": "facil",
    "word": "I G L O O",
    "colors": [
      "#e0f2fe",
      "#38bdf8",
      "#0284c7",
      "#ffffff"
    ],
    "tags": [
      "blocos",
      "gelo",
      "entrada",
      "pinguim",
      "ártico"
    ],
    "stepsDesc": [
      "1. Desenhe a grande cúpula hemisférica do iglu com base arredondada na neve.",
      "2. Trace o TÚNEL DE ENTRADA EM ARCO SALIENTE projetado na frente.",
      "3. Faça as LINHAS HORIZONTAIS E VERTICAIS DOS BLOCOS DE GELO esculpidos.",
      "4. Desenhe um simpático pinguinzinho de casaco no gelo ao lado.",
      "5. Adicione a aurora polar brilhante dançando no céu ártico ao fundo."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"38\" fill=\"#e0f2fe\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"20\" y1=\"155\" x2=\"180\" y2=\"155\" stroke=\"#38bdf8\" stroke-width=\"3\"/>",
      "<path d=\"M125 155 C125 130 155 130 155 155 Z\" fill=\"#bae6fd\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"140\" cy=\"155\" rx=\"10\" ry=\"14\" fill=\"#1e293b\"/>",
      "<path d=\"M52 135 Q100 120 148 135\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"1.8\"/> <path d=\"M60 120 Q100 108 140 120\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"1.8\"/> <path d=\"M75 105 Q100 95 125 105\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"1.8\"/> <line x1=\"80\" y1=\"120\" x2=\"80\" y2=\"135\" stroke=\"#0284c7\" stroke-width=\"1.5\"/> <line x1=\"120\" y1=\"120\" x2=\"120\" y2=\"135\" stroke=\"#0284c7\" stroke-width=\"1.5\"/> <line x1=\"100\" y1=\"105\" x2=\"100\" y2=\"120\" stroke=\"#0284c7\" stroke-width=\"1.5\"/>",
      "<ellipse cx=\"45\" cy=\"148\" rx=\"7\" ry=\"10\" fill=\"#1e293b\"/> <ellipse cx=\"45\" cy=\"149\" rx=\"4\" ry=\"7\" fill=\"#ffffff\"/> <polygon points=\"45,145 50,147 45,149\" fill=\"#f97316\"/>",
      "<path d=\"M25 45 Q70 25 120 50 T180 35\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"4\" opacity=\"0.6\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "noite-estrelada",
    "name": "Noite com Lua Crescente",
    "category": "paisagens",
    "sub": "celeste",
    "diff": "facil",
    "word": "N O I T E",
    "colors": [
      "#1e1b4b",
      "#312e81",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "estrelas",
      "lua",
      "dormir",
      "sonho",
      "céu"
    ],
    "stepsDesc": [
      "1. Desenhe a grande LUA CRESCENTE DOURADA com pontas afiladas e perfil suave.",
      "2. Trace o GORRINHO DE DORMIR COM POMPOM azul repousando na ponta da lua.",
      "3. Faça o rostinho sereno da lua dormindo com olhinho fechado em curva e sorriso doce.",
      "4. Desenhe nuvenzinhas fofas azul-escuras embalando o berço da lua no céu.",
      "5. Espalhe dezenas de estrelinhas douradas de quatro e cinco pontas cintilando."
    ],
    "layers": [
      "<path d=\"M90 40 A45 45 0 1 0 135 130 A38 38 0 1 1 90 40 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M125 50 Q145 35 155 45\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"6\" stroke-linecap=\"round\"/> <circle cx=\"158\" cy=\"46\" r=\"4.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M92 88 Q98 94 104 88\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <path d=\"M95 102 Q102 108 108 102\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M40 145 Q35 135 48 130 Q55 115 70 120 Q85 115 90 130 Q100 135 95 145 Z\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"45,60 47,52 52,55 47,58\" fill=\"#fef08a\"/> <polygon points=\"145,95 147,88 152,91 147,94\" fill=\"#fef08a\"/> <polygon points=\"120,145 122,138 127,141 122,144\" fill=\"#fef08a\"/> <polygon points=\"65,35 67,28 72,31 67,34\" fill=\"#fef08a\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "aurora-boreal",
    "name": "Céu com Aurora Boreal",
    "category": "paisagens",
    "sub": "polar",
    "diff": "medio",
    "word": "A U R O R A",
    "colors": [
      "#10b981",
      "#06b6d4",
      "#8b5cf6",
      "#1e1b4b"
    ],
    "tags": [
      "luzes",
      "verde",
      "roxo",
      "norte",
      "mágico"
    ],
    "stepsDesc": [
      "1. Trace a silhueta das montanhas árticas escuras na base com pinheiros na encosta.",
      "2. Desenhe a PRIMEIRA FAIXA ONDULADA ESMERALDA DA AURORA dançando pelo céu.",
      "3. Faça a SEGUNDA FAIXA ONDULANTE MAGENTA E TURQUESA sobrepondo a luz verde.",
      "4. Desenhe as cortinas de feixes verticais subindo das faixas onduladas.",
      "5. Adicione estrelas brilhando através da transparência das luzes celestes."
    ],
    "layers": [
      "<polygon points=\"15,165 50,140 85,165\" fill=\"#1e293b\"/> <polygon points=\"75,165 115,130 155,165\" fill=\"#1e293b\"/> <polygon points=\"140,165 165,145 185,165\" fill=\"#1e293b\"/> <line x1=\"15\" y1=\"165\" x2=\"185\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M20 90 Q65 50 110 85 T180 70\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"12\" opacity=\"0.75\" stroke-linecap=\"round\"/>",
      "<path d=\"M20 75 Q75 110 125 65 T180 95\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"10\" opacity=\"0.65\" stroke-linecap=\"round\"/>",
      "<line x1=\"50\" y1=\"65\" x2=\"50\" y2=\"35\" stroke=\"#34d399\" stroke-width=\"2\" opacity=\"0.8\"/> <line x1=\"85\" y1=\"80\" x2=\"85\" y2=\"40\" stroke=\"#34d399\" stroke-width=\"2\" opacity=\"0.8\"/> <line x1=\"120\" y1=\"65\" x2=\"120\" y2=\"30\" stroke=\"#a78bfa\" stroke-width=\"2\" opacity=\"0.8\"/> <line x1=\"155\" y1=\"85\" x2=\"155\" y2=\"45\" stroke=\"#a78bfa\" stroke-width=\"2\" opacity=\"0.8\"/>",
      "<circle cx=\"40\" cy=\"30\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"100\" cy=\"25\" r=\"2.5\" fill=\"#ffffff\"/> <circle cx=\"160\" cy=\"28\" r=\"2\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "tempestade-nuvem",
    "name": "Nuvem com Chuva & Trovão",
    "category": "paisagens",
    "sub": "celeste",
    "diff": "facil",
    "word": "T E M P E S T A D E",
    "colors": [
      "#475569",
      "#64748b",
      "#facc15",
      "#38bdf8"
    ],
    "tags": [
      "raio",
      "gotas",
      "nuvem",
      "vento",
      "chuva"
    ],
    "stepsDesc": [
      "1. Desenhe a GRANDE NUVEM PESADA DE TEMPESTADE com múltiplos gomos fofos.",
      "2. Trace o GRANDE RAIO EM ZIGUE-ZAGUE AMARELO ELÉTRICO cortando para baixo.",
      "3. Faça a SEGUNDA RAMIFICAÇÃO MENOR DO RELÂMPAGO faiscando no ar.",
      "4. Desenhe as dezenas de GOTÍCULAS DE CHUVA INCLINADAS caindo velozes.",
      "5. Adicione as poças de água formadas no chão com respingos saltando."
    ],
    "layers": [
      "<path d=\"M50 100 Q40 85 55 75 Q65 55 90 60 Q110 50 130 65 Q145 60 150 78 Q165 88 155 105 Q145 115 125 112 Q100 118 75 112 Q55 115 50 100 Z\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"105,108 90,135 102,135 85,168 115,130 102,130 115,108\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"75,115 65,132 72,132 60,150 78,128 70,128 78,115\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<line x1=\"50\" y1=\"130\" x2=\"45\" y2=\"148\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"65\" y1=\"140\" x2=\"60\" y2=\"158\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"125\" y1=\"130\" x2=\"120\" y2=\"148\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"140\" y1=\"140\" x2=\"135\" y2=\"158\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"155\" y1=\"130\" x2=\"150\" y2=\"148\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"60\" cy=\"168\" rx=\"14\" ry=\"4\" fill=\"#38bdf8\" opacity=\"0.6\"/> <ellipse cx=\"130\" cy=\"168\" rx=\"16\" ry=\"4\" fill=\"#38bdf8\" opacity=\"0.6\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "jardim-botanico",
    "name": "Estufa de Vidro do Jardim",
    "category": "paisagens",
    "sub": "rural",
    "diff": "desafio",
    "word": "J A R D I M",
    "colors": [
      "#10b981",
      "#047857",
      "#38bdf8",
      "#facc15"
    ],
    "tags": [
      "vidro",
      "plantas",
      "flores",
      "vasos",
      "estufa"
    ],
    "stepsDesc": [
      "1. Desenhe a grande estrutura em abóbada de ferro da estufa vitoriana.",
      "2. Trace a GRADE QUADRICULADA DAS VIDRAÇAS TRANSPARENTES em arcos elegantes.",
      "3. Faça as PLANTAS TROPICAIS E PALMEIRAS VISÍVEIS dentro do vidro.",
      "4. Desenhe a portinha de ferro forjado e os canteiros floridos externos.",
      "5. Adicione borboletas esvoaçando ao redor da estufa iluminada pelo sol."
    ],
    "layers": [
      "<path d=\"M45 155 L45 110 C45 65 155 65 155 110 L155 155 Z\" fill=\"#bae6fd\" opacity=\"0.5\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"25\" y1=\"155\" x2=\"175\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"100\" y1=\"65\" x2=\"100\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"72\" y1=\"80\" x2=\"72\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"128\" y1=\"80\" x2=\"128\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"45\" y1=\"110\" x2=\"155\" y2=\"110\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"45\" y1=\"132\" x2=\"155\" y2=\"132\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M90 145 C85 115 95 100 100 85 C105 100 115 115 110 145\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"75\" cy=\"138\" r=\"8\" fill=\"#16a34a\"/> <circle cx=\"125\" cy=\"138\" r=\"8\" fill=\"#16a34a\"/>",
      "<rect x=\"88\" y=\"125\" width=\"24\" height=\"30\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"98\" cy=\"140\" r=\"1.8\" fill=\"#facc15\"/>",
      "<polygon points=\"35,65 30,55 40,55\" fill=\"#ec4899\"/> <polygon points=\"165,75 160,65 170,65\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "vale-dos-dinossauros",
    "name": "Vale Pré-Histórico",
    "category": "paisagens",
    "sub": "relevo",
    "diff": "medio",
    "word": "V A L E",
    "colors": [
      "#15803d",
      "#78350f",
      "#b91c1c",
      "#fef08a"
    ],
    "tags": [
      "pegadas",
      "samambaia",
      "vulcão",
      "fóssil",
      "dinos"
    ],
    "stepsDesc": [
      "1. Desenhe os cânions rochosos escarpados e a vegetação primitiva do vale.",
      "2. Trace o GRANDE VULCÃO DISTANTE soltando fumaça no horizonte ancestral.",
      "3. Faça as SAMAMBAIAS GIGANTES E ÁRVORES PRÉ-HISTÓRICAS nas bordas.",
      "4. Desenhe as ENORMES PEGADAS TRIDÁCTILAS DE DINOSSAURO fossilizadas na lama.",
      "5. Adicione pterodáctilos alados planando pelas fendas do desfiladeiro."
    ],
    "layers": [
      "<polygon points=\"20,85 75,155 20,155\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"180,85 125,155 180,155\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"20\" y1=\"155\" x2=\"180\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"75,135 100,75 125,135\" fill=\"#b91c1c\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M100 75 Q105 60 98 48 Q108 42 102 32\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 155 Q40 120 28 105\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M30 115 Q45 110 50 115\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"2\"/> <path d=\"M32 130 Q48 125 52 130\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"2\"/>",
      "<ellipse cx=\"85\" cy=\"148\" rx=\"8\" ry=\"4\" fill=\"#451a03\"/> <line x1=\"80\" y1=\"146\" x2=\"74\" y2=\"142\" stroke=\"#451a03\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"85\" y1=\"144\" x2=\"85\" y2=\"138\" stroke=\"#451a03\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"90\" y1=\"146\" x2=\"96\" y2=\"142\" stroke=\"#451a03\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<polygon points=\"140,55 150,52 145,58\" fill=\"#1e293b\"/> <polygon points=\"155,45 163,42 159,47\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "cratera-lunar",
    "name": "Base na Cratera Lunar",
    "category": "paisagens",
    "sub": "espacial",
    "diff": "medio",
    "word": "L U A",
    "colors": [
      "#64748b",
      "#94a3b8",
      "#e2e8f0",
      "#38bdf8"
    ],
    "tags": [
      "astronauta",
      "crateras",
      "domo",
      "espaço",
      "bandeira"
    ],
    "stepsDesc": [
      "1. Desenhe o solo cinzento da lua com crateras circulares de impactos antigos.",
      "2. Trace o DOMO GEODÉSICO DA BASE ESPACIAL com painéis hexagonais de vidro.",
      "3. Faça a BANDEIRA PLANETÁRIA FINCADA no solo com haste metálica e esticador.",
      "4. Desenhe o veículo rover lunar com seis rodinhas especiais explorando a cratera.",
      "5. Adicione o lindo planeta Terra azul e branco nascendo no céu preto do espaço."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"155\" rx=\"80\" ry=\"25\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"45\" cy=\"150\" rx=\"16\" ry=\"6\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <ellipse cx=\"155\" cy=\"158\" rx=\"14\" ry=\"5\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"95\" cy=\"138\" rx=\"36\" ry=\"22\" fill=\"#38bdf8\" opacity=\"0.6\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"95\" y1=\"116\" x2=\"95\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M72 125 Q95 130 118 125\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<line x1=\"145\" y1=\"150\" x2=\"145\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <rect x=\"145\" y=\"115\" width=\"22\" height=\"14\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<rect x=\"35\" y=\"130\" width=\"16\" height=\"8\" rx=\"2\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"37\" cy=\"139\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"43\" cy=\"139\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"49\" cy=\"139\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"145\" cy=\"50\" r=\"18\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M135 45 C142 40 152 48 145 58\" fill=\"#22c55e\"/> <path d=\"M150 42 C158 45 155 55 152 58\" fill=\"#ffffff\" opacity=\"0.7\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "parque-balanco",
    "name": "Balanço Debaixo da Árvore",
    "category": "paisagens",
    "sub": "lazer",
    "diff": "facil",
    "word": "B A L A N Ç O",
    "colors": [
      "#15803d",
      "#78350f",
      "#f59e0b",
      "#38bdf8"
    ],
    "tags": [
      "cordas",
      "galho",
      "diversão",
      "parque",
      "grama"
    ],
    "stepsDesc": [
      "1. Desenhe o morrinho de grama verde macio com florzinhas do campo.",
      "2. Trace o GRANDE TRONCO DE CARVALHO com um galho horizontal grosso e resistente.",
      "3. Faça a COPA REDONDA E VOLUMOSA cheia de folhas verdes frescas.",
      "4. Desenhe as DUAS CORDAS PARALELAS COM O BANQUINHO DE MADEIRA do balanço.",
      "5. Adicione passarinhos cantando no galho e borboletas voando ao redor."
    ],
    "layers": [
      "<path d=\"M15 160 Q100 145 185 160\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\"/>",
      "<path d=\"M55 165 C55 120 45 85 55 70\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"12\" stroke-linecap=\"round\"/> <path d=\"M55 70 L140 70\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"50\" cy=\"55\" r=\"30\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"85\" cy=\"45\" r=\"28\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"105\" y1=\"74\" x2=\"105\" y2=\"135\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <line x1=\"125\" y1=\"74\" x2=\"125\" y2=\"135\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <rect x=\"100\" y=\"135\" width=\"30\" height=\"6\" rx=\"2\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"140\" cy=\"62\" rx=\"5\" ry=\"3\" fill=\"#ef4444\"/> <circle cx=\"144\" cy=\"60\" r=\"2\" fill=\"#ef4444\"/> <polygon points=\"146,60 150,59 146,61\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "acampamento-tenda",
    "name": "Acampamento com Fogueira",
    "category": "paisagens",
    "sub": "lazer",
    "diff": "facil",
    "word": "T E N D A",
    "colors": [
      "#ea580c",
      "#f59e0b",
      "#15803d",
      "#78350f"
    ],
    "tags": [
      "barraca",
      "fogo",
      "lenha",
      "noite",
      "floresta"
    ],
    "stepsDesc": [
      "1. Desenhe a clareira no meio do bosque com solo de terra batida.",
      "2. Trace a TENDA CANADENSE TRIANGULAR com estacas presas na grama.",
      "3. Faça a PORTA DA TENDA ABERTA mostrando o saco de dormir quentinho.",
      "4. Desenhe a FOGUEIRA COM TRONCOS EM CRUZ E LABAREDAS ALARANJADAS.",
      "5. Adicione a chaleira de acampamento fervendo sobre a brasa e céu estrelado."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"155\" x2=\"180\" y2=\"155\" stroke=\"#16a34a\" stroke-width=\"3\"/>",
      "<polygon points=\"75,85 35,155 115,155\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"75,85 115,155 135,145 95,78\" fill=\"#ea580c\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"75,85 55,155 95,155\" fill=\"#1e293b\"/> <ellipse cx=\"75\" cy=\"150\" rx=\"14\" ry=\"4\" fill=\"#3b82f6\"/>",
      "<line x1=\"140\" y1=\"155\" x2=\"165\" y2=\"148\" stroke=\"#78350f\" stroke-width=\"4\" stroke-linecap=\"round\"/> <line x1=\"165\" y1=\"155\" x2=\"140\" y2=\"148\" stroke=\"#78350f\" stroke-width=\"4\" stroke-linecap=\"round\"/> <path d=\"M152 148 C145 138 155 130 152 122 C160 132 162 142 152 148 Z\" fill=\"#ef4444\"/> <path d=\"M152 148 C148 142 154 136 152 130 C156 136 158 142 152 148 Z\" fill=\"#facc15\"/>",
      "<polygon points=\"45,45 47,40 52,42 47,45\" fill=\"#fef08a\"/> <polygon points=\"125,35 127,30 132,32 127,35\" fill=\"#fef08a\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "horta-comunitaria",
    "name": "Canteiros da Hortinha",
    "category": "paisagens",
    "sub": "rural",
    "diff": "facil",
    "word": "H O R T A",
    "colors": [
      "#854d0e",
      "#16a34a",
      "#ea580c",
      "#facc15"
    ],
    "tags": [
      "cenouras",
      "alface",
      "canteiro",
      "adubo",
      "hortaliça"
    ],
    "stepsDesc": [
      "1. Desenhe os três canteiros retangulares compridos de terra adubada fofa.",
      "2. Trace as FOLHAS VERDES DE ALFACE CRESPA no primeiro canteiro.",
      "3. Faça as FOLHAGENS DE CENOURA COM AS PONTAS LARANJAS despontando da terra.",
      "4. Desenhe o REGADOR DE JARDIM DE METAL molhando os vegetais.",
      "5. Adicione plaquinhas de madeira identificando cada canteiro da horta."
    ],
    "layers": [
      "<polygon points=\"35,115 165,115 155,130 25,130\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"25,135 155,135 145,152 15,152\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"15,157 145,157 135,175 5,175\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<circle cx=\"50\" cy=\"120\" r=\"7\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"80\" cy=\"120\" r=\"7\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"110\" cy=\"120\" r=\"7\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"140\" cy=\"120\" r=\"7\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"40,145 44,136 48,145\" fill=\"#ea580c\"/> <path d=\"M44 136 L40 128 M44 136 L44 126 M44 136 L48 128\" stroke=\"#15803d\" stroke-width=\"1.8\"/> <polygon points=\"75,145 79,136 83,145\" fill=\"#ea580c\"/> <path d=\"M79 136 L75 128 M79 136 L79 126 M79 136 L83 128\" stroke=\"#15803d\" stroke-width=\"1.8\"/> <polygon points=\"110,145 114,136 118,145\" fill=\"#ea580c\"/> <path d=\"M114 136 L110 128 M114 136 L114 126 M114 136 L118 128\" stroke=\"#15803d\" stroke-width=\"1.8\"/>",
      "<rect x=\"155\" y=\"65\" width=\"22\" height=\"18\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M155 70 C140 70 140 85 155 85\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"177\" y1=\"78\" x2=\"188\" y2=\"88\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"45\" y=\"85\" width=\"16\" height=\"12\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"53\" y1=\"97\" x2=\"53\" y2=\"115\" stroke=\"#78350f\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "campo-de-girassois",
    "name": "Campo Cheio de Girassóis",
    "category": "paisagens",
    "sub": "rural",
    "diff": "medio",
    "word": "G I R A S S O L",
    "colors": [
      "#eab308",
      "#ca8a04",
      "#78350f",
      "#15803d"
    ],
    "tags": [
      "flores",
      "amarelo",
      "sol",
      "sementes",
      "campo"
    ],
    "stepsDesc": [
      "1. Trace a linha ondulada das colinas douradas com o céu azul límpido.",
      "2. Desenhe o GRANDE GIRASSOL EM PRIMEIRO PLANO com miolo redondo marrom.",
      "3. Faça a COROA COMPLETA DE PÉTALAS AMARELAS RADIAIS em volta do miolo.",
      "4. Desenhe dezenas de outros girassóis diminuindo em perspectiva na plantação.",
      "5. Adicione abelhinhas colhendo néctar e raios de sol iluminando o campo."
    ],
    "layers": [
      "<path d=\"M15 155 Q80 140 185 150\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"3\"/>",
      "<circle cx=\"75\" cy=\"95\" r=\"20\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M75 115 L75 165\" stroke=\"#15803d\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"75\" cy=\"65\" rx=\"7\" ry=\"14\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"75\" cy=\"125\" rx=\"7\" ry=\"14\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"45\" cy=\"95\" rx=\"14\" ry=\"7\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"105\" cy=\"95\" rx=\"14\" ry=\"7\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"54\" cy=\"74\" rx=\"12\" ry=\"7\" transform=\"rotate(-45 54 74)\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"96\" cy=\"116\" rx=\"12\" ry=\"7\" transform=\"rotate(-45 96 116)\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"96\" cy=\"74\" rx=\"12\" ry=\"7\" transform=\"rotate(45 96 74)\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"54\" cy=\"116\" rx=\"12\" ry=\"7\" transform=\"rotate(45 54 116)\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<circle cx=\"140\" cy=\"115\" r=\"9\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"140\" cy=\"115\" r=\"15\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"4\"/> <line x1=\"140\" y1=\"124\" x2=\"140\" y2=\"155\" stroke=\"#15803d\" stroke-width=\"3\"/> <circle cx=\"165\" cy=\"130\" r=\"7\" fill=\"#78350f\"/> <circle cx=\"165\" cy=\"130\" r=\"12\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"3\"/>",
      "<ellipse cx=\"115\" cy=\"65\" rx=\"5\" ry=\"3.5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <line x1=\"114\" y1=\"62\" x2=\"114\" y2=\"68\" stroke=\"#1e293b\" stroke-width=\"1\"/> <ellipse cx=\"115\" cy=\"60\" rx=\"3\" ry=\"1.5\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "campo-de-tulipas",
    "name": "Canteiro de Tulipas",
    "category": "paisagens",
    "sub": "rural",
    "diff": "facil",
    "word": "T U L I P A S",
    "colors": [
      "#ec4899",
      "#dc2626",
      "#facc15",
      "#16a34a"
    ],
    "tags": [
      "tulipa",
      "primavera",
      "colorido",
      "jardim",
      "flores"
    ],
    "stepsDesc": [
      "1. Desenhe as linhas retas paralelas dos canteiros de flores holandeses.",
      "2. Trace as TULIPAS VERMELHAS EM FORMA DE TAÇA no primeiro canteiro.",
      "3. Faça as TULIPAS AMARELAS E ROXAS nos canteiros ao lado em fileiras.",
      "4. Desenhe as longas folhas verdes lanceoladas envolvendo cada haste.",
      "5. Adicione o tradicional moinho de vento holandês distante no horizonte."
    ],
    "layers": [
      "<line x1=\"30\" y1=\"110\" x2=\"10\" y2=\"175\" stroke=\"#16a34a\" stroke-width=\"2\"/> <line x1=\"75\" y1=\"110\" x2=\"65\" y2=\"175\" stroke=\"#16a34a\" stroke-width=\"2\"/> <line x1=\"120\" y1=\"110\" x2=\"120\" y2=\"175\" stroke=\"#16a34a\" stroke-width=\"2\"/> <line x1=\"165\" y1=\"110\" x2=\"175\" y2=\"175\" stroke=\"#16a34a\" stroke-width=\"2\"/>",
      "<path d=\"M40 145 C35 130 55 130 50 145 Z\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"45\" y1=\"145\" x2=\"45\" y2=\"165\" stroke=\"#15803d\" stroke-width=\"2.5\"/> <path d=\"M42 160 C35 155 40 150 44 155\" fill=\"#15803d\"/>",
      "<path d=\"M90 140 C85 125 105 125 100 140 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"95\" y1=\"140\" x2=\"95\" y2=\"162\" stroke=\"#15803d\" stroke-width=\"2.5\"/> <path d=\"M145 142 C140 127 160 127 155 142 Z\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"150\" y1=\"142\" x2=\"150\" y2=\"164\" stroke=\"#15803d\" stroke-width=\"2.5\"/>",
      "<path d=\"M38 125 C34 115 48 115 45 125 Z\" fill=\"#ef4444\"/> <line x1=\"42\" y1=\"125\" x2=\"42\" y2=\"140\" stroke=\"#15803d\" stroke-width=\"2\"/> <path d=\"M92 120 C88 110 102 110 98 120 Z\" fill=\"#facc15\"/> <line x1=\"95\" y1=\"120\" x2=\"95\" y2=\"135\" stroke=\"#15803d\" stroke-width=\"2\"/>",
      "<polygon points=\"155,75 150,95 165,95 160,75\" fill=\"#78350f\"/> <line x1=\"158\" y1=\"75\" x2=\"158\" y2=\"65\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"152\" y1=\"70\" x2=\"164\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "mina-de-ouro",
    "name": "Mina com Trilhos e Vagão",
    "category": "paisagens",
    "sub": "construcoes",
    "diff": "medio",
    "word": "M I N A",
    "colors": [
      "#78350f",
      "#ca8a04",
      "#475569",
      "#facc15"
    ],
    "tags": [
      "ouro",
      "vagão",
      "pedras",
      "caverna",
      "trilho"
    ],
    "stepsDesc": [
      "1. Desenhe a entrada em arco de madeira reforçada da galeria da mina na rocha.",
      "2. Trace os TRILHOS DE FERRO SAINDO DE DENTRO DA CAVERNA até o primeiro plano.",
      "3. Faça o VAGÃO DE CARGA DE FERRO COM QUATRO RODINHAS sobre os trilhos.",
      "4. Desenhe as PEPITAS E BARRAS DE OURO DOURADAS reluzindo transbordando do vagão.",
      "5. Adicione a picareta de mineiro encostada na pedra e uma lanterna acesa."
    ],
    "layers": [
      "<polygon points=\"35,160 35,70 165,70 165,160\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M65 160 L65 105 C65 85 135 85 135 105 L135 160 Z\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"120\" x2=\"60\" y2=\"175\" stroke=\"#94a3b8\" stroke-width=\"3\"/> <line x1=\"120\" y1=\"120\" x2=\"140\" y2=\"175\" stroke=\"#94a3b8\" stroke-width=\"3\"/> <line x1=\"72\" y1=\"135\" x2=\"128\" y2=\"135\" stroke=\"#78350f\" stroke-width=\"2.5\"/> <line x1=\"66\" y1=\"155\" x2=\"134\" y2=\"155\" stroke=\"#78350f\" stroke-width=\"2.5\"/>",
      "<polygon points=\"75,130 125,130 120,155 80,155\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"85\" cy=\"158\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"115\" cy=\"158\" r=\"5\" fill=\"#1e293b\"/>",
      "<circle cx=\"90\" cy=\"125\" r=\"4.5\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1\"/> <circle cx=\"100\" cy=\"122\" r=\"5\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1\"/> <circle cx=\"110\" cy=\"125\" r=\"4.5\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1\"/> <polygon points=\"98,115 105,115 102,122\" fill=\"#fef08a\"/>",
      "<line x1=\"145\" y1=\"125\" x2=\"155\" y2=\"150\" stroke=\"#78350f\" stroke-width=\"2.5\"/> <path d=\"M140 125 Q145 120 152 125\" stroke=\"#94a3b8\" stroke-width=\"3\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "aldeia-indigena",
    "name": "Ocas da Aldeia na Floresta",
    "category": "paisagens",
    "sub": "construcoes",
    "diff": "facil",
    "word": "A L D E I A",
    "colors": [
      "#d97706",
      "#78350f",
      "#15803d",
      "#38bdf8"
    ],
    "tags": [
      "oca",
      "palha",
      "rio",
      "mata",
      "brasil"
    ],
    "stepsDesc": [
      "1. Desenhe a grande oca comunitária arredondada coberta de palha trançada.",
      "2. Trace a ENTRADA BAIXA EM ARCO e as vigas estruturais de madeira roliça.",
      "3. Faça a SEGUNDA OCA MENOR AO FUNDO criando perspectiva de aldeia.",
      "4. Desenhe a fogueira central comunitária e cestos de barro artesanais.",
      "5. Adicione árvores da floresta tropical e o rio passando ao lado da aldeia."
    ],
    "layers": [
      "<ellipse cx=\"90\" cy=\"140\" rx=\"52\" ry=\"32\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"15\" y1=\"155\" x2=\"185\" y2=\"155\" stroke=\"#15803d\" stroke-width=\"2.5\"/>",
      "<path d=\"M80 155 C80 135 100 135 100 155 Z\" fill=\"#1e293b\"/> <path d=\"M50 140 Q90 120 130 140\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/>",
      "<ellipse cx=\"145\" cy=\"125\" rx=\"30\" ry=\"18\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M140 135 C140 125 150 125 150 135 Z\" fill=\"#1e293b\"/>",
      "<circle cx=\"50\" cy=\"160\" r=\"8\" fill=\"#451a03\"/> <polygon points=\"48,155 52,145 54,155\" fill=\"#ef4444\"/> <polygon points=\"50,155 52,148 54,155\" fill=\"#facc15\"/>",
      "<circle cx=\"165\" cy=\"75\" r=\"22\" fill=\"#15803d\" opacity=\"0.8\"/> <rect x=\"162\" y=\"85\" width=\"6\" height=\"40\" fill=\"#78350f\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "castelo-de-areia",
    "name": "Castelo de Areia na Praia",
    "category": "paisagens",
    "sub": "costeira",
    "diff": "facil",
    "word": "A R E I A",
    "colors": [
      "#f59e0b",
      "#fbbf24",
      "#dc2626",
      "#0284c7"
    ],
    "tags": [
      "baldinho",
      "pazinha",
      "bandeirinha",
      "mar",
      "conchas"
    ],
    "stepsDesc": [
      "1. Desenhe a montanha de areia esculpida com base circular na beira da água.",
      "2. Trace as TRÊS TORRES CILÍNDRICAS DE AREIA moldadas com baldinho.",
      "3. Faça os AMEIAS DE AÇÚCAR/AREIA e o fosso esculpido ao redor.",
      "4. Desenhe as BANDEIRINHAS COLORIDAS NO TOPO DE CADA TORRE.",
      "5. Adicione a pazinha e conchinhas decorativas incrustadas nas paredes."
    ],
    "layers": [
      "<path d=\"M45 155 Q100 145 155 155\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"3\"/> <path d=\"M15 165 Q100 155 185 165\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.5\"/>",
      "<rect x=\"60\" y=\"115\" width=\"80\" height=\"40\" fill=\"#fde68a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"52\" y=\"95\" width=\"22\" height=\"60\" fill=\"#fde68a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"126\" y=\"95\" width=\"22\" height=\"60\" fill=\"#fde68a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"88\" y=\"85\" width=\"24\" height=\"70\" fill=\"#fde68a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"52\" y1=\"95\" x2=\"52\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"59\" y1=\"95\" x2=\"59\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"67\" y1=\"95\" x2=\"67\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"74\" y1=\"95\" x2=\"74\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"85\" x2=\"100\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,70 112,74 100,78\" fill=\"#ef4444\"/> <line x1=\"63\" y1=\"95\" x2=\"63\" y2=\"82\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"63,82 72,85 63,88\" fill=\"#3b82f6\"/>",
      "<ellipse cx=\"160\" cy=\"155\" rx=\"5\" ry=\"3\" fill=\"#f472b6\"/> <polygon points=\"35,145 42,160 38,162 30,147\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "trilha-na-mata",
    "name": "Caminho Curvo na Mata",
    "category": "paisagens",
    "sub": "florestal",
    "diff": "facil",
    "word": "T R I L H A",
    "colors": [
      "#166534",
      "#15803d",
      "#854d0e",
      "#fef08a"
    ],
    "tags": [
      "passos",
      "árvores",
      "passeio",
      "natureza",
      "sombras"
    ],
    "stepsDesc": [
      "1. Desenhe a TRILHA SINUOSA EM 'S' AFUNILANDO EM PERSPECTIVA até o fundo da floresta.",
      "2. Trace as GRANDES ÁRVORES LATERAIS cujos galhos formam um túnel verde no topo.",
      "3. Faça a luz do sol filtrando pelas folhas criando manchas claras no chão.",
      "4. Desenhe pedras arredondadas e pequenos arbustos margeando o caminho.",
      "5. Adicione pegadas na trilha e uma plaquinha de madeira indicando o destino."
    ],
    "layers": [
      "<path d=\"M35 175 C55 140 120 130 95 90 C85 75 92 65 95 55\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"14\" stroke-linecap=\"round\"/> <path d=\"M35 175 C55 140 120 130 95 90 C85 75 92 65 95 55\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"20\" y=\"45\" width=\"16\" height=\"120\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <rect x=\"160\" y=\"45\" width=\"16\" height=\"120\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M28 65 Q95 35 168 65\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"16\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"28\" fill=\"#16a34a\" opacity=\"0.8\"/> <circle cx=\"150\" cy=\"50\" r=\"28\" fill=\"#16a34a\" opacity=\"0.8\"/> <circle cx=\"100\" cy=\"40\" r=\"22\" fill=\"#16a34a\" opacity=\"0.8\"/>",
      "<ellipse cx=\"65\" cy=\"155\" rx=\"8\" ry=\"4\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"130\" cy=\"148\" rx=\"10\" ry=\"5\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<rect x=\"140\" y=\"115\" width=\"18\" height=\"10\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"148\" y1=\"125\" x2=\"148\" y2=\"142\" stroke=\"#78350f\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "riacho-pedras",
    "name": "Riacho com Pedras Redondas",
    "category": "paisagens",
    "sub": "florestal",
    "diff": "facil",
    "word": "R I A C H O",
    "colors": [
      "#0284c7",
      "#38bdf8",
      "#64748b",
      "#15803d"
    ],
    "tags": [
      "água",
      "correnteza",
      "seixos",
      "peixinhos",
      "margem"
    ],
    "stepsDesc": [
      "1. Desenhe as duas margens verdes de grama com o riacho cristalino correndo ao meio.",
      "2. Trace as GRANDES PEDRAS REDONDAS DE RIO (SEIXOS) dispostas como caminho de travessia.",
      "3. Faça as LINHAS DE CORRENTEZA E ESPUMA BRANCA contornando cada pedra.",
      "4. Desenhe peixinhos coloridos visíveis na transparência da água límpida.",
      "5. Adicione libélulas voando e flores ribeirinhas nas margens do riacho."
    ],
    "layers": [
      "<path d=\"M15 65 C45 100 45 140 25 175\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"22\"/> <path d=\"M185 65 C155 100 155 140 175 175\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"22\"/> <path d=\"M35 65 C65 100 65 140 45 175\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M165 65 C135 100 135 140 155 175\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"75\" cy=\"150\" rx=\"12\" ry=\"8\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"105\" cy=\"125\" rx=\"14\" ry=\"9\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"88\" cy=\"95\" rx=\"11\" ry=\"7\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <ellipse cx=\"118\" cy=\"75\" rx=\"10\" ry=\"6\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M60 148 Q75 142 90 148\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/> <path d=\"M90 122 Q105 116 122 122\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/> <path d=\"M75 92 Q88 88 102 92\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>",
      "<path d=\"M85 165 C95 162 100 166 100 166 C100 166 95 170 85 167 L80 170 L82 166 L80 162 Z\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<ellipse cx=\"135\" cy=\"55\" rx=\"4\" ry=\"1.8\" fill=\"#38bdf8\"/> <line x1=\"135\" y1=\"55\" x2=\"135\" y2=\"62\" stroke=\"#1e293b\" stroke-width=\"1\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "arvore-frutifera",
    "name": "Grande Pomar com Frutas",
    "category": "paisagens",
    "sub": "rural",
    "diff": "facil",
    "word": "P O M A R",
    "colors": [
      "#15803d",
      "#dc2626",
      "#78350f",
      "#fef08a"
    ],
    "tags": [
      "maçãs",
      "copa",
      "tronco",
      "frutas",
      "sombra"
    ],
    "stepsDesc": [
      "1. Desenhe as três macieiras robustas enfileiradas na colina ensolarada.",
      "2. Trace o GRANDE TRONCO COM CASCA RUGOSA e copa fofa e arredondada.",
      "3. Faça as DEZENAS DE MAÇÃS VERMELHAS REDONDINHAS maduras na árvore.",
      "4. Desenhe uma CESTA DE VIME TRANÇADA NO CHÃO transbordando de frutas colhidas.",
      "5. Adicione maçãs caídas na grama e uma escada de madeira apoiada na árvore."
    ],
    "layers": [
      "<rect x=\"92\" y=\"95\" width=\"16\" height=\"60\" rx=\"3\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"20\" y1=\"155\" x2=\"180\" y2=\"155\" stroke=\"#15803d\" stroke-width=\"3\"/>",
      "<circle cx=\"100\" cy=\"75\" r=\"42\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"80\" cy=\"65\" r=\"5\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"100\" cy=\"55\" r=\"5\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"120\" cy=\"68\" r=\"5\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"90\" cy=\"85\" r=\"5\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"112\" cy=\"88\" r=\"5\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<rect x=\"135\" y=\"142\" width=\"24\" height=\"15\" rx=\"3\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"140\" cy=\"140\" r=\"4\" fill=\"#ef4444\"/> <circle cx=\"148\" cy=\"139\" r=\"4\" fill=\"#ef4444\"/> <circle cx=\"155\" cy=\"141\" r=\"4\" fill=\"#ef4444\"/>",
      "<line x1=\"65\" y1=\"85\" x2=\"55\" y2=\"155\" stroke=\"#ca8a04\" stroke-width=\"2.5\"/> <line x1=\"75\" y1=\"85\" x2=\"65\" y2=\"155\" stroke=\"#ca8a04\" stroke-width=\"2.5\"/> <line x1=\"62\" y1=\"105\" x2=\"72\" y2=\"105\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <line x1=\"59\" y1=\"125\" x2=\"69\" y2=\"125\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <line x1=\"56\" y1=\"145\" x2=\"66\" y2=\"145\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "mirante-da-serra",
    "name": "Mirante no Topo da Serra",
    "category": "paisagens",
    "sub": "relevo",
    "diff": "medio",
    "word": "M I R A N T E",
    "colors": [
      "#0284c7",
      "#64748b",
      "#15803d",
      "#f59e0b"
    ],
    "tags": [
      "cerca",
      "vista",
      "altitude",
      "serra",
      "horizonte"
    ],
    "stepsDesc": [
      "1. Desenhe o topo plano do penhasco rochoso alto com vista panorâmica ampla.",
      "2. Trace a CERCA / GUARDA-CORPO DE MADEIRA com postes firmes no mirante.",
      "3. Faça a CADEIA DE MONTANHAS DISTANTES EM DEGRADÊ de camadas no horizonte.",
      "4. Desenhe o TELESCÓPIO FIXO DE MIRANTE cromado apontado para a paisagem.",
      "5. Adicione nuvens flutuando abaixo do nível do mirante e o sol dourado."
    ],
    "layers": [
      "<polygon points=\"20,180 20,135 180,135 180,180\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"20\" y1=\"125\" x2=\"180\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"45\" y1=\"125\" x2=\"45\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"90\" y1=\"125\" x2=\"90\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"135\" y1=\"125\" x2=\"135\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"15,120 60,75 105,120\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"85,120 135,65 185,120\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"75\" y1=\"125\" x2=\"75\" y2=\"105\" stroke=\"#1e293b\" stroke-width=\"3\"/> <polygon points=\"65,102 85,98 85,106 65,106\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"60\" cy=\"115\" rx=\"35\" ry=\"8\" fill=\"#ffffff\" opacity=\"0.7\"/> <ellipse cx=\"140\" cy=\"110\" rx=\"40\" ry=\"9\" fill=\"#ffffff\" opacity=\"0.7\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "ceu-com-pipas",
    "name": "Céu Colorido com Pipas",
    "category": "paisagens",
    "sub": "lazer",
    "diff": "facil",
    "word": "P I P A S",
    "colors": [
      "#38bdf8",
      "#ef4444",
      "#f59e0b",
      "#10b981"
    ],
    "tags": [
      "rabiola",
      "vento",
      "voar",
      "infância",
      "linha"
    ],
    "stepsDesc": [
      "1. Desenhe as três grandes pipas voadoras em losangos de diferentes cores no ar.",
      "2. Trace a CRUZ DE VARETAS ESTRUTURAIS em cada pipa sustentando o papel.",
      "3. Faça as LONGAS LINHAS DE RABIOLA ONDULADAS dançando ao vento com lacinhos.",
      "4. Desenhe as linhas de carretel descendo até o chão em ângulo dinâmico.",
      "5. Adicione nuvens fofas de verão e o sol radiante assistindo à brincadeira."
    ],
    "layers": [
      "<polygon points=\"65,40 85,60 65,90 45,60\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"65\" y1=\"40\" x2=\"65\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M45 60 Q65 50 85 60\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"135,60 160,85 135,120 110,85\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"135\" y1=\"60\" x2=\"135\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M110 85 Q135 72 160 85\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M65 90 C60 105 75 115 65 130\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"62,102 68,100 66,106\" fill=\"#facc15\"/> <polygon points=\"68,115 74,113 72,119\" fill=\"#10b981\"/> <path d=\"M135 120 C130 140 148 150 140 170\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"132,132 138,130 136,136\" fill=\"#f43f5e\"/> <polygon points=\"142,148 148,146 146,152\" fill=\"#facc15\"/>",
      "<line x1=\"65\" y1=\"60\" x2=\"25\" y2=\"155\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/> <line x1=\"135\" y1=\"85\" x2=\"90\" y2=\"175\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/>",
      "<circle cx=\"160\" cy=\"35\" r=\"14\" fill=\"#facc15\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <path d=\"M20 75 Q35 68 50 75\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "cidade-submarina",
    "name": "Cúpula Submarina do Futuro",
    "category": "paisagens",
    "sub": "fantastica",
    "diff": "desafio",
    "word": "A T L Â N T I D A",
    "colors": [
      "#0284c7",
      "#38bdf8",
      "#a855f7",
      "#fef08a"
    ],
    "tags": [
      "cúpula",
      "vidro",
      "fundo_mar",
      "futuro",
      "peixes"
    ],
    "stepsDesc": [
      "1. Desenhe o solo marinho profundo com areia azulada e rochas submarinas.",
      "2. Trace a GIGANTESCA CÚPULA TRANSPARENTE GEODÉSICA abrigando a cidade futurista.",
      "3. Faça os EDIFÍCIOS MODERNOS E TUBOS DE TRANSPORTE iluminados dentro da cúpula.",
      "4. Desenhe submarinos de exploração amarelos nadando com faróis acesos do lado de fora.",
      "5. Adicione baleias e tartarugas marinhas nadando pacificamente ao redor da cidade."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"155\" rx=\"82\" ry=\"22\" fill=\"#0369a1\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M35 155 C35 75 165 75 165 155 Z\" fill=\"#38bdf8\" opacity=\"0.45\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<rect x=\"75\" y=\"115\" width=\"20\" height=\"38\" fill=\"#e0f2fe\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <rect x=\"105\" y=\"105\" width=\"22\" height=\"48\" fill=\"#e0f2fe\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"85,115 75,98 95,98\" fill=\"#facc15\"/> <line x1=\"55\" y1=\"140\" x2=\"145\" y2=\"140\" stroke=\"#a855f7\" stroke-width=\"3\"/>",
      "<ellipse cx=\"45\" cy=\"65\" rx=\"14\" ry=\"7\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"52\" cy=\"65\" r=\"2.5\" fill=\"#38bdf8\"/> <polygon points=\"45,65 15,50 15,80\" fill=\"#fef08a\" opacity=\"0.35\"/>",
      "<path d=\"M125 45 C145 42 165 50 160 55 C150 58 135 52 125 45 Z\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"40\" r=\"3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.2\"/> <circle cx=\"98\" cy=\"30\" r=\"2\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n      <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "carro-de-corrida",
    "name": "Carro de Corrida Veloz",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "C A R R O",
    "colors": [
      "#ef4444",
      "#1e293b",
      "#facc15",
      "#e2e8f0"
    ],
    "tags": [
      "corrida",
      "rodas",
      "pista",
      "piloto",
      "velocidade"
    ],
    "stepsDesc": [
      "1. Desenhe o chassi baixo e aerodinâmico do carro de fórmula esportivo.",
      "2. Trace o aerofólio traseiro elevado e o bico afilado na frente.",
      "3. Faça as DUAS GRANDES RODAS LARGAS com calotas de corrida.",
      "4. Desenhe o cockpit aberto com capacete do piloto e volante.",
      "5. Adicione o número de corrida 1 na lateral e faixas de velocidade."
    ],
    "layers": [
      "<path d=\"M40 135 L55 110 L100 110 L135 125 L165 130 L165 145 L40 145 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"65\" cy=\"145\" r=\"16\" fill=\"#1e293b\"/> <circle cx=\"65\" cy=\"145\" r=\"7\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"140\" cy=\"145\" r=\"16\" fill=\"#1e293b\"/> <circle cx=\"140\" cy=\"145\" r=\"7\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M35 115 L50 115 L45 130 L32 130 Z\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"160,135 175,138 165,145\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"95\" cy=\"102\" r=\"9\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M92 102 L102 102\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"102\" cy=\"130\" r=\"10\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <text x=\"98\" y=\"135\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#1e293b\">1</text> <line x1=\"20\" y1=\"155\" x2=\"180\" y2=\"155\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "aviao-comercial",
    "name": "Avião de Passageiros",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "A V I Ã O",
    "colors": [
      "#0284c7",
      "#ffffff",
      "#38bdf8",
      "#1e293b"
    ],
    "tags": [
      "asas",
      "céu",
      "voo",
      "viagem",
      "turbinas"
    ],
    "stepsDesc": [
      "1. Desenhe a fuselagem longa em charuto com bico arredondado.",
      "2. Trace as ASAS LARGAS EM FLECHA projetadas para os lados.",
      "3. Faça o LEME VERTICAL DE CAUDA e estabilizadores horizontais.",
      "4. Desenhe as TURBINAS A JATO embaixo das asas e fileira de janelinhas.",
      "5. Adicione nuvens ao redor mostrando o voo nas alturas."
    ],
    "layers": [
      "<path d=\"M35 105 C35 95 65 92 155 95 C165 96 170 102 165 108 C155 112 65 112 35 105 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"150,95 168,65 178,65 162,95\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"152,108 168,118 162,118 148,108\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"85,102 60,135 78,135 115,105\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"80\" cy=\"120\" rx=\"10\" ry=\"4\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M42 98 Q50 96 55 102\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"65\" cy=\"102\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"78\" cy=\"102\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"91\" cy=\"102\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"104\" cy=\"102\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"117\" cy=\"102\" r=\"2\" fill=\"#1e293b\"/> <circle cx=\"130\" cy=\"102\" r=\"2\" fill=\"#1e293b\"/>",
      "<path d=\"M25 65 Q40 55 55 65 Q65 60 70 70 L20 70 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <path d=\"M125 150 Q140 140 155 150 Q165 145 170 155 L120 155 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "foguete-espacial",
    "name": "Foguete Rumo à Lua",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "F O G U E T E",
    "colors": [
      "#ffffff",
      "#ef4444",
      "#f97316",
      "#38bdf8"
    ],
    "tags": [
      "espaço",
      "fogo",
      "lua",
      "astronauta",
      "nasa"
    ],
    "stepsDesc": [
      "1. Desenhe a fuselagem cilíndrica aerodinâmica com a ogiva cônica pontuda.",
      "2. Trace as TRÊS ALETAS/ASAS TRIANGULARES na base do foguete.",
      "3. Faça a JANELA/ESCOTILHA REDONDA com aro de metal no centro.",
      "4. Desenhe as LABAREDAS DE FOGO E FUMAÇA saindo do bocal de propulsão.",
      "5. Adicione estrelas e planetas no espaço sideral ao fundo."
    ],
    "layers": [
      "<path d=\"M100 35 C100 35 75 75 75 130 L125 130 C125 75 100 35 100 35 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"75,115 50,140 75,135\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <polygon points=\"125,115 150,140 125,135\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"85\" y=\"130\" width=\"30\" height=\"8\" rx=\"2\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"85\" r=\"14\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"85\" r=\"10\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M85 138 C85 165 100 185 100 185 C100 185 115 165 115 138 Z\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M92 138 C92 155 100 170 100 170 C100 170 108 155 108 138 Z\" fill=\"#facc15\"/>",
      "<polygon points=\"45,55 48,60 54,60 50,64 52,70 45,66 38,70 40,64 36,60 42,60\" fill=\"#facc15\"/> <circle cx=\"155\" cy=\"65\" r=\"8\" fill=\"#a855f7\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "barco-a-vela",
    "name": "Barco a Vela no Mar",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "B A R C O",
    "colors": [
      "#dc2626",
      "#ffffff",
      "#0284c7",
      "#78350f"
    ],
    "tags": [
      "vela",
      "mar",
      "ondas",
      "vento",
      "navegar"
    ],
    "stepsDesc": [
      "1. Desenhe o casco arredondado em meia-lua flutuando na água.",
      "2. Trace o MASTRO VERTICAL ALTO DE MADEIRA no centro do barco.",
      "3. Faça a GRANDE VELA TRIANGULAR PRINCIPAL estufada pelo vento.",
      "4. Desenhe a vela dianteira menor (foque) e a bandeirinha no topo.",
      "5. Adicione as ondas do mar balançando o veleiro com peixinhos."
    ],
    "layers": [
      "<path d=\"M45 135 L60 165 L140 165 L155 135 Z\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<line x1=\"100\" y1=\"135\" x2=\"100\" y2=\"45\" stroke=\"#78350f\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,52 145,125 100,125\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"96,65 65,125 96,125\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"100,45 115,40 100,40\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M30 168 Q65 160 100 168 T170 168\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.8\"/> <path d=\"M40 176 Q75 168 110 176 T180 176\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "trem-locomotiva",
    "name": "Trem a Vapor com Fumaça",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "T R E M",
    "colors": [
      "#1e293b",
      "#dc2626",
      "#f59e0b",
      "#cbd5e1"
    ],
    "tags": [
      "chaminé",
      "trilhos",
      "vagão",
      "fumaça",
      "piuí"
    ],
    "stepsDesc": [
      "1. Desenhe a cabine do maquinista e a caldeira cilíndrica horizontal.",
      "2. Trace a CHAMINÉ ALTA COM FUNIL no topo da caldeira.",
      "3. Faça as TRÊS RODAS DE TREM COM BIELAS DE LIGAÇÃO metálicas.",
      "4. Desenhe a janela da cabine, o farol dianteiro e o limpa-trilhos.",
      "5. Adicione as NUVENS DE FUMAÇA ESPIRALADAS saindo da chaminé e os trilhos."
    ],
    "layers": [
      "<rect x=\"50\" y=\"85\" width=\"40\" height=\"60\" rx=\"4\" fill=\"none\" stroke-width=\"2.8\"/> <rect x=\"90\" y=\"105\" width=\"60\" height=\"40\" rx=\"6\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"115,105 110,80 128,80 123,105\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"150,145 165,145 160,135 150,135\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"65\" cy=\"155\" r=\"16\" fill=\"#1e293b\"/> <circle cx=\"65\" cy=\"155\" r=\"7\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"105\" cy=\"155\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"105\" cy=\"155\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"135\" cy=\"155\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"135\" cy=\"155\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"65\" y1=\"155\" x2=\"135\" y2=\"155\" stroke=\"#eab308\" stroke-width=\"3\"/> <rect x=\"60\" y=\"95\" width=\"20\" height=\"20\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"152\" cy=\"118\" r=\"5\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"120\" cy=\"65\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <circle cx=\"132\" cy=\"50\" r=\"14\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <circle cx=\"150\" cy=\"35\" r=\"18\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <line x1=\"35\" y1=\"172\" x2=\"175\" y2=\"172\" stroke=\"#475569\" stroke-width=\"3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "helicoptero",
    "name": "Helicóptero de Resgate",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "H E L I C Ó P T E R O",
    "colors": [
      "#eab308",
      "#1e293b",
      "#38bdf8",
      "#ef4444"
    ],
    "tags": [
      "hélice",
      "resgate",
      "voo",
      "patins",
      "céu"
    ],
    "stepsDesc": [
      "1. Desenhe a cabine arredondada em bolha e o longo cone de cauda.",
      "2. Trace o ROTOR PRINCIPAL COM GRANDES HÉLICES GIRANDO no teto.",
      "3. Faça os dois ESQUIS DE POUSO (TREM DE POUSO) na base.",
      "4. Desenhe o rotor de cauda menor com estabilizador vertical.",
      "5. Adicione as janelas amplas com visão do piloto e nuvens no céu."
    ],
    "layers": [
      "<path d=\"M55 110 C55 85 85 80 115 80 C135 80 145 95 140 115 C135 130 115 135 85 135 C65 135 55 125 55 110 Z\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M135 105 L175 100 L175 110 L135 115 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"95\" y1=\"80\" x2=\"95\" y2=\"65\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"45\" y1=\"65\" x2=\"155\" y2=\"65\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"65\" rx=\"58\" ry=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>",
      "<line x1=\"75\" y1=\"135\" x2=\"70\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"110\" y1=\"135\" x2=\"115\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"55\" y1=\"150\" x2=\"135\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"175,95 185,90 185,115 175,110\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"180\" y1=\"90\" x2=\"180\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M62 108 C62 92 82 88 95 88 L95 125 C75 125 62 120 62 108 Z\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"105\" y=\"92\" width=\"18\" height=\"18\" rx=\"4\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "submarino",
    "name": "Submarino de Exploração",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "S U B M A R I N O",
    "colors": [
      "#eab308",
      "#ca8a04",
      "#0284c7",
      "#ffffff"
    ],
    "tags": [
      "periscópio",
      "fundo_mar",
      "escotilhas",
      "amarelo"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo oval longo em charuto do submarino amarelo.",
      "2. Trace a TORRE DE COMANDO NO TOPO COM O PERISCÓPIO CURVADO.",
      "3. Faça as ESCOTILHAS REDONDAS COM VIDRO para ver o fundo do mar.",
      "4. Desenhe a hélice propulsora na cauda girando na água.",
      "5. Adicione bolhas de ar subindo e peixinhos curiosos ao redor."
    ],
    "layers": [
      "<ellipse cx=\"95\" cy=\"115\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"80\" y=\"65\" width=\"30\" height=\"25\" rx=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M95 65 L95 42 L110 42 L110 48\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"115\" r=\"10\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"95\" cy=\"115\" r=\"10\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"120\" cy=\"115\" r=\"10\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"148,110 162,95 162,135 148,120\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"160\" y=\"108\" width=\"6\" height=\"14\" rx=\"2\" fill=\"#1e293b\"/>",
      "<circle cx=\"50\" cy=\"75\" r=\"4\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/> <circle cx=\"42\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/> <circle cx=\"35\" cy=\"48\" r=\"8\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "caminhao-bombeiro",
    "name": "Caminhão de Bombeiros",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "B O M B E I R O",
    "colors": [
      "#dc2626",
      "#facc15",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "escada",
      "sirene",
      "água",
      "herói",
      "mangueira"
    ],
    "stepsDesc": [
      "1. Desenhe a cabine alta e o baú longo de resgate do caminhão vermelho.",
      "2. Trace a GRANDE ESCADA MAGIRUS ARTICULADA DOBRADA no teto.",
      "3. Faça as QUATRO RODAS ROBUSTAS com calotas metálicas.",
      "4. Desenhe a SIRENE/GIROFLEX piscando no teto e a grade dianteira.",
      "5. Adicione a mangueira em carretel e esguicho de água na lateral."
    ],
    "layers": [
      "<path d=\"M40 145 L40 100 L95 100 L115 115 L165 115 L165 145 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"65\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"65\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"120\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"120\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"145\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"145\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"55\" y=\"85\" width=\"90\" height=\"12\" rx=\"3\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"70\" y1=\"85\" x2=\"70\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"100\" y1=\"85\" x2=\"100\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"115\" y1=\"85\" x2=\"115\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"130\" y1=\"85\" x2=\"130\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"100,100 115,115 100,115\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"98\" cy=\"95\" r=\"4\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"106\" cy=\"95\" r=\"4\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"50\" cy=\"122\" r=\"10\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"50\" cy=\"122\" r=\"4\" fill=\"#ef4444\"/> <line x1=\"25\" y1=\"162\" x2=\"175\" y2=\"162\" stroke=\"#475569\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "trator-fazenda",
    "name": "Trator Forte da Fazenda",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "T R A T O R",
    "colors": [
      "#16a34a",
      "#facc15",
      "#1e293b",
      "#78350f"
    ],
    "tags": [
      "rodas_grandes",
      "campo",
      "terra",
      "fazenda",
      "arado"
    ],
    "stepsDesc": [
      "1. Desenhe a cabine com teto protetor e o capô do motor na frente.",
      "2. Trace a GIGANTESCA RODA TRASEIRA COM GARRAS PROFUNDAS DE TRATOR.",
      "3. Faça a roda dianteira menor e o ESCAPAMENTO VERTICAL fumegante.",
      "4. Desenhe o volante, o banco do fazendeiro e o grande farol redondo.",
      "5. Adicione sulcos de terra arada que o trator está preparando."
    ],
    "layers": [
      "<rect x=\"50\" y=\"85\" width=\"45\" height=\"50\" rx=\"6\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M95 105 L150 105 L150 135 L95 135 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"70\" cy=\"142\" r=\"26\" fill=\"#1e293b\"/> <circle cx=\"70\" cy=\"142\" r=\"14\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"135\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"135\" cy=\"148\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"110\" y1=\"105\" x2=\"110\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <path d=\"M110 75 Q115 70 120 72\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<rect x=\"56\" y=\"92\" width=\"22\" height=\"22\" rx=\"4\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"148\" cy=\"115\" r=\"5\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M25 170 Q60 162 100 170 T175 170\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "onibus-escolar",
    "name": "Ônibus Escolar Amarelo",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "Ô N I B U S",
    "colors": [
      "#eab308",
      "#1e293b",
      "#ffffff",
      "#ef4444"
    ],
    "tags": [
      "escola",
      "janelas",
      "crianças",
      "amarelo",
      "parada"
    ],
    "stepsDesc": [
      "1. Desenhe a carroceria retangular longa clássica do ônibus escolar americano.",
      "2. Trace a fileira de QUATRO JANELAS QUADRADAS para os estudantes.",
      "3. Faça as DUAS RODAS ROBUSTAS com para-lamas recortados.",
      "4. Desenhe a faixa preta lateral, placa de STOP dobrável e faróis.",
      "5. Adicione as crianças acenando felizes pelas janelas do ônibus amarelo."
    ],
    "layers": [
      "<path d=\"M40 90 L145 90 C155 90 165 105 165 125 L165 145 L40 145 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"65\" cy=\"148\" r=\"15\" fill=\"#1e293b\"/> <circle cx=\"65\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"140\" cy=\"148\" r=\"15\" fill=\"#1e293b\"/> <circle cx=\"140\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"52\" y=\"98\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"74\" y=\"98\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"96\" y=\"98\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"118\" y=\"98\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"40\" y1=\"125\" x2=\"165\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"3.5\"/> <polygon points=\"50,118 40,112 40,124\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<circle cx=\"160\" cy=\"135\" r=\"4.5\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"25\" y1=\"163\" x2=\"175\" y2=\"163\" stroke=\"#475569\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "balao-ar-quente",
    "name": "Balão de Ar Quente",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "B A L Ã O",
    "colors": [
      "#ec4899",
      "#f59e0b",
      "#3b82f6",
      "#78350f"
    ],
    "tags": [
      "cesto",
      "chama",
      "listras",
      "voar",
      "céu"
    ],
    "stepsDesc": [
      "1. Desenhe a grande gota invertida arredondada do balão de ar quente.",
      "2. Trace o CESTO DE VIME QUADRADO pendurado embaixo.",
      "3. Faça as CORDAS DE SUSTENTAÇÃO ligando o cesto ao balão.",
      "4. Desenhe as FAIXAS VERTICAIS COLORIDAS em gomos pelo balão.",
      "5. Adicione o queimador soltando labareda de fogo e nuvens ao redor."
    ],
    "layers": [
      "<path d=\"M100 35 C60 35 45 70 65 115 L85 138 L115 138 L135 115 C155 70 140 35 100 35 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"88\" y=\"155\" width=\"24\" height=\"20\" rx=\"3\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"88\" y1=\"138\" x2=\"90\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"112\" y1=\"138\" x2=\"110\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"138\" x2=\"100\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M100 35 C85 65 85 110 100 138\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\"/> <path d=\"M100 35 C115 65 115 110 100 138\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\"/> <path d=\"M100 35 C70 65 65 110 85 138\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/> <path d=\"M100 35 C130 65 135 110 115 138\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/>",
      "<path d=\"M96 148 C94 142 98 140 100 142 C102 140 106 142 104 148 Z\" fill=\"#f59e0b\"/> <path d=\"M30 65 Q45 55 60 65 L25 65 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "bicicleta",
    "name": "Bicicleta com Cestinha",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "B I C I C L E T A",
    "colors": [
      "#ec4899",
      "#1e293b",
      "#94a3b8",
      "#facc15"
    ],
    "tags": [
      "pedal",
      "rodas",
      "guidão",
      "parque",
      "passeio"
    ],
    "stepsDesc": [
      "1. Desenhe o QUADRO TRIANGULAR EM DIAMANTE clássico da bicicleta.",
      "2. Trace as DUAS RODAS GRANDES CIRCULARES com raios metálicos.",
      "3. Faça o GUIDÃO COM MANOPLAS E O SELIM (BANCO) ergonômico.",
      "4. Desenhe os pedais com a coroa dentada e a corrente de transmissão.",
      "5. Adicione uma CESTINHA COM FLORES no guidão e campainha."
    ],
    "layers": [
      "<polygon points=\"75,135 105,95 140,95 115,135\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/> <line x1=\"75\" y1=\"135\" x2=\"105\" y2=\"135\" stroke=\"#0284c7\" stroke-width=\"3.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"24\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/> <circle cx=\"65\" cy=\"135\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"145\" cy=\"135\" r=\"24\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/> <circle cx=\"145\" cy=\"135\" r=\"4\" fill=\"#1e293b\"/>",
      "<line x1=\"145\" y1=\"135\" x2=\"135\" y2=\"85\" stroke=\"#0284c7\" stroke-width=\"3\"/> <line x1=\"128\" y1=\"85\" x2=\"142\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <path d=\"M98\" y1=\"88\" d=\"M98 88 L114 88\" stroke=\"#1e293b\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"105\" cy=\"135\" r=\"8\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"105\" y1=\"135\" x2=\"100\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"105\" y1=\"135\" x2=\"110\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"138\" y=\"75\" width=\"16\" height=\"12\" rx=\"2\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"146\" cy=\"75\" r=\"3\" fill=\"#f43f5e\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "moto-veloz",
    "name": "Motocicleta Esportiva",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "M O T O",
    "colors": [
      "#2563eb",
      "#1e293b",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "duas_rodas",
      "capacete",
      "ronco",
      "velocidade",
      "estrada"
    ],
    "stepsDesc": [
      "1. Desenhe a silhueta aerodinâmica esportiva da motocicleta veloz.",
      "2. Trace o tanque de combustível arqueado e a carenagem pontuda.",
      "3. Faça as DUAS RODAS LARGAS com freios a disco perfurados.",
      "4. Desenhe o cano de escapamento cromado e o guidão baixo.",
      "5. Adicione linhas de velocidade e o farol dianteiro afilado."
    ],
    "layers": [
      "<path d=\"M55 125 L75 95 L115 95 L145 105 L155 125 L135 135 L55 135 Z\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"58\" cy=\"138\" r=\"20\" fill=\"#1e293b\"/> <circle cx=\"58\" cy=\"138\" r=\"9\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"145\" cy=\"138\" r=\"20\" fill=\"#1e293b\"/> <circle cx=\"145\" cy=\"138\" r=\"9\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M85 105 C95 85 110 85 118 95\" stroke=\"#1e293b\" stroke-width=\"3\"/> <path d=\"M125 90 L138 85 L132 98\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"70\" y=\"132\" width=\"45\" height=\"8\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"152,112 162,115 152,120\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"20\" y1=\"158\" x2=\"180\" y2=\"158\" stroke=\"#64748b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "navio-pirata",
    "name": "Navio Pirata com Canhões",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "desafio",
    "word": "N A V I O",
    "colors": [
      "#78350f",
      "#1e293b",
      "#ffffff",
      "#dc2626"
    ],
    "tags": [
      "bandeira",
      "caveira",
      "velas",
      "mar",
      "tesouro"
    ],
    "stepsDesc": [
      "1. Desenhe o grande casco bojudo de madeira do galeão pirata.",
      "2. Trace os TRÊS MASTROS ALTOS com cordas de subida em escada (enxárcias).",
      "3. Faça as VELAS QUADRADAS COM O SÍMBOLO DA CAVEIRA PIRATA (JOLLY ROGER).",
      "4. Desenhe as escotilhas de canhão na lateral do casco e a proa alta.",
      "5. Adicione as ondas do mar revolto e a bandeira preta no topo."
    ],
    "layers": [
      "<path d=\"M35 125 C30 115 45 110 60 115 L145 115 C160 110 175 125 165 148 L65 152 Z\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"70\" y1=\"115\" x2=\"70\" y2=\"45\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"110\" y1=\"115\" x2=\"110\" y2=\"35\" stroke=\"#1e293b\" stroke-width=\"3.5\"/> <line x1=\"145\" y1=\"115\" x2=\"145\" y2=\"52\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<rect x=\"92\" y=\"48\" width=\"36\" height=\"30\" rx=\"3\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"58\" y=\"58\" width=\"24\" height=\"24\" rx=\"2\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"135\" y=\"65\" width=\"20\" height=\"22\" rx=\"2\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"110\" cy=\"60\" r=\"5\" fill=\"#1e293b\"/> <line x1=\"104\" y1=\"68\" x2=\"116\" y2=\"68\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"70\" cy=\"132\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"95\" cy=\"132\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"120\" cy=\"132\" r=\"4\" fill=\"#1e293b\"/>",
      "<polygon points=\"110,35 125,30 110,25\" fill=\"#1e293b\"/> <path d=\"M25 155 Q65 145 105 155 T180 155\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "ambulancia",
    "name": "Ambulância do Hospital",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "A M B U L Â N C I A",
    "colors": [
      "#ffffff",
      "#ef4444",
      "#38bdf8",
      "#1e293b"
    ],
    "tags": [
      "cruz",
      "sirene",
      "socorro",
      "médico",
      "saúde"
    ],
    "stepsDesc": [
      "1. Desenhe a van alta de resgate com capô dianteiro e teto reto.",
      "2. Trace a CRUZ VERMELHA DE EMERGÊNCIA médica na porta lateral.",
      "3. Faça as duas rodas robustas com calotas brancas.",
      "4. Desenhe as luzes de emergência/giroflex azul e vermelho no teto.",
      "5. Adicione faixas refletoras e a janela ampla do motorista."
    ],
    "layers": [
      "<path d=\"M40 145 L40 90 L125 90 L150 110 L165 110 L165 145 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"70\" cy=\"148\" r=\"15\" fill=\"#1e293b\"/> <circle cx=\"70\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"140\" cy=\"148\" r=\"15\" fill=\"#1e293b\"/> <circle cx=\"140\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"120,95 145,112 120,112\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"55\" y=\"98\" width=\"22\" height=\"18\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"80\" y=\"112\" width=\"24\" height=\"8\" fill=\"#ef4444\"/> <rect x=\"88\" y=\"104\" width=\"8\" height=\"24\" fill=\"#ef4444\"/>",
      "<circle cx=\"95\" cy=\"85\" r=\"4\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"105\" cy=\"85\" r=\"4\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"25\" y1=\"163\" x2=\"175\" y2=\"163\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "carro-policia",
    "name": "Carro de Polícia",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "P O L Í C I A",
    "colors": [
      "#1e293b",
      "#ffffff",
      "#2563eb",
      "#ef4444"
    ],
    "tags": [
      "sirene",
      "giroflex",
      "segurança",
      "estrela",
      "guarda"
    ],
    "stepsDesc": [
      "1. Desenhe o sedã clássico da viatura de patrulha policial.",
      "2. Trace a divisão preto e branco da pintura nas portas.",
      "3. Faça o GIROFLEX BARRA DUPLA (AZUL E VERMELHO) no teto.",
      "4. Desenhe a ESTRELA/DISTINTIVO DOURADO DA POLÍCIA na porta.",
      "5. Adicione os para-choques reforçados e rodas ágeis."
    ],
    "layers": [
      "<path d=\"M42 142 L55 115 L85 102 L132 102 L152 120 L168 122 L168 142 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"68\" cy=\"145\" r=\"15\" fill=\"#1e293b\"/> <circle cx=\"68\" cy=\"145\" r=\"6\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"142\" cy=\"145\" r=\"15\" fill=\"#1e293b\"/> <circle cx=\"142\" cy=\"145\" r=\"6\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"85,106 102,106 102,120 75,120\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"106,106 128,106 142,120 106,120\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"95\" y=\"96\" width=\"12\" height=\"6\" rx=\"2\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <rect x=\"107\" y=\"96\" width=\"12\" height=\"6\" rx=\"2\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<polygon points=\"105,125 107,130 112,130 108,133 110,138 105,135 100,138 102,133 98,130 103,130\" fill=\"#facc15\"/> <rect x=\"42\" y=\"122\" width=\"30\" height=\"20\" fill=\"#1e293b\"/> <rect x=\"135\" y=\"122\" width=\"33\" height=\"20\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "escavadeira",
    "name": "Escavadeira com Concha",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "E S C A V A D E I R A",
    "colors": [
      "#eab308",
      "#1e293b",
      "#475569",
      "#ca8a04"
    ],
    "tags": [
      "obra",
      "braço",
      "lagarta",
      "concha",
      "construção"
    ],
    "stepsDesc": [
      "1. Desenhe as ESTEIRAS DE LARGARTA PESADAS na base do trator.",
      "2. Trace a cabine giratória do operador com grandes janelas.",
      "3. Faça o BRAÇO HIDRÁULICO ARTICULADO EM DUAS PARTES.",
      "4. Desenhe a GRANDE CONCHA DE ESCAVAÇÃO COM DENTES AFIADOS.",
      "5. Adicione montanhas de terra que a escavadeira está cavando."
    ],
    "layers": [
      "<rect x=\"45\" y=\"138\" width=\"80\" height=\"22\" rx=\"10\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <circle cx=\"58\" cy=\"149\" r=\"6\" fill=\"#facc15\"/> <circle cx=\"75\" cy=\"149\" r=\"6\" fill=\"#facc15\"/> <circle cx=\"92\" cy=\"149\" r=\"6\" fill=\"#facc15\"/> <circle cx=\"109\" cy=\"149\" r=\"6\" fill=\"#facc15\"/>",
      "<rect x=\"52\" y=\"95\" width=\"45\" height=\"43\" rx=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <rect x=\"68\" y=\"100\" width=\"22\" height=\"22\" rx=\"3\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"90\" y1=\"115\" x2=\"135\" y2=\"70\" stroke=\"#facc15\" stroke-width=\"7\" stroke-linecap=\"round\"/> <line x1=\"90\" y1=\"115\" x2=\"135\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"135\" cy=\"70\" r=\"4\" fill=\"#1e293b\"/>",
      "<line x1=\"135\" y1=\"70\" x2=\"160\" y2=\"105\" stroke=\"#facc15\" stroke-width=\"6\" stroke-linecap=\"round\"/> <line x1=\"135\" y1=\"70\" x2=\"160\" y2=\"105\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M160 105 L175 125 L160 135 L150 115 Z\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"175,125 180,123 177,128\" fill=\"#1e293b\"/> <path d=\"M140 160 Q160 145 175 160\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "caminhao-guincho",
    "name": "Caminhão Guincho",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "G U I N C H O",
    "colors": [
      "#f97316",
      "#1e293b",
      "#ffffff",
      "#e2e8f0"
    ],
    "tags": [
      "gancho",
      "reboque",
      "socorro",
      "cabo",
      "oficina"
    ],
    "stepsDesc": [
      "1. Desenhe a cabine do caminhão guincho e a plataforma inclinada.",
      "2. Trace o BRAÇO DA LANÇA DO GUINCHO COM ROLDANA E CABO DE AÇO.",
      "3. Faça o GRANDE GANCHO DE FERRO para rebocar veículos quebrados.",
      "4. Desenhe as rodas duplas e luzes de advertência no teto.",
      "5. Adicione correntes de fixação e a calota metálica."
    ],
    "layers": [
      "<path d=\"M45 145 L45 105 L95 105 L115 118 L160 118 L160 145 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"70\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"70\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"135\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"135\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"115\" y1=\"118\" x2=\"155\" y2=\"78\" stroke=\"#1e293b\" stroke-width=\"4.5\" stroke-linecap=\"round\"/> <circle cx=\"155\" cy=\"78\" r=\"4\" fill=\"#ef4444\"/>",
      "<line x1=\"155\" y1=\"78\" x2=\"155\" y2=\"110\" stroke=\"#475569\" stroke-width=\"2\"/> <path d=\"M155 110 C155 122 145 122 145 115\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<rect x=\"98\" y=\"98\" width=\"12\" height=\"6\" rx=\"2\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"30\" y1=\"162\" x2=\"175\" y2=\"162\" stroke=\"#64748b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "skateboard",
    "name": "Skate Radical com Rodinhas",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "S K A T E",
    "colors": [
      "#10b981",
      "#ef4444",
      "#1e293b",
      "#facc15"
    ],
    "tags": [
      "manobra",
      "prancha",
      "pista",
      "radical",
      "esporte"
    ],
    "stepsDesc": [
      "1. Desenhe a PRANCHA (SHAPE) CURVADA EM MADEIRA com nose e tail elevados.",
      "2. Trace a lixa preta antiderrapante por cima da prancha.",
      "3. Faça os DOIS TRUCKS METÁLICOS DE FIXAÇÃO na base inferior.",
      "4. Desenhe as QUATRO RODINHAS DE URETANO velozes.",
      "5. Adicione uma estampa de chamas ou grafite radical na tábua."
    ],
    "layers": [
      "<path d=\"M40 115 C35 98 48 95 65 105 L135 105 C152 95 165 98 160 115 Z\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"62\" y=\"115\" width=\"12\" height=\"10\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"126\" y=\"115\" width=\"12\" height=\"10\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"68\" cy=\"132\" r=\"10\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"68\" cy=\"132\" r=\"4\" fill=\"#ffffff\"/> <circle cx=\"132\" cy=\"132\" r=\"10\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"132\" cy=\"132\" r=\"4\" fill=\"#ffffff\"/>",
      "<path d=\"M78 105 C85 95 95 115 105 100 C115 115 120 98 125 105\" fill=\"#facc15\" stroke=\"#ef4444\" stroke-width=\"1.8\"/>",
      "<line x1=\"30\" y1=\"145\" x2=\"170\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "patinete",
    "name": "Patinete com Guidão",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "P A T I N E T E",
    "colors": [
      "#06b6d4",
      "#1e293b",
      "#fbcfe8",
      "#ffffff"
    ],
    "tags": [
      "passeio",
      "parque",
      "rodinhas",
      "brinquedo",
      "pé"
    ],
    "stepsDesc": [
      "1. Desenhe a base plana de apoio dos pés e as duas rodinhas pequenas.",
      "2. Trace o TUBO VERTICAL DO GUIDÃO ALTO com ajuste de altura.",
      "3. Faça as MANOPLAS ERGONÔMICAS EMBORRACHADAS nas laterais do guidão.",
      "4. Desenhe o freio de pressão na roda traseira e presilhas.",
      "5. Adicione buzininha de patinete e linhas de velocidade."
    ],
    "layers": [
      "<line x1=\"60\" y1=\"148\" x2=\"145\" y2=\"148\" stroke=\"#0284c7\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"55\" cy=\"155\" r=\"12\" fill=\"#1e293b\"/> <circle cx=\"55\" cy=\"155\" r=\"5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"145\" cy=\"155\" r=\"12\" fill=\"#1e293b\"/> <circle cx=\"145\" cy=\"155\" r=\"5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"140\" y1=\"148\" x2=\"130\" y2=\"65\" stroke=\"#0284c7\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"115\" y1=\"65\" x2=\"145\" y2=\"65\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linecap=\"round\"/> <rect x=\"112\" y=\"62\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#f43f5e\"/> <rect x=\"140\" y=\"62\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#f43f5e\"/>",
      "<path d=\"M50 148 Q55 140 65 145\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"3\"/> <line x1=\"35\" y1=\"168\" x2=\"165\" y2=\"168\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "patins-quatro-rodas",
    "name": "Patins Clássico",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "P A T I N S",
    "colors": [
      "#ec4899",
      "#facc15",
      "#38bdf8",
      "#ffffff"
    ],
    "tags": [
      "freio",
      "cadarço",
      "rodas",
      "pista",
      "dança"
    ],
    "stepsDesc": [
      "1. Desenhe a bota retrô de patinação com cano médio e cadarço.",
      "2. Trace a base de metal resistente e o FREIO DE BORRACHA NA PONTA.",
      "3. Faça as DUAS RODAS DIANTEIRAS E DUAS TRASEIRAS com rolamentos.",
      "4. Desenhe os furos e ilhoses com cadarço colorido amarrado.",
      "5. Adicione estrelas e faixas retrô decorativas na bota."
    ],
    "layers": [
      "<path d=\"M65 85 L95 85 L95 125 L145 135 L145 155 L65 155 Z\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<rect x=\"60\" y=\"155\" width=\"88\" height=\"6\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"152\" cy=\"155\" r=\"7\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"78\" cy=\"168\" r=\"12\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"78\" cy=\"168\" r=\"4\" fill=\"#ffffff\"/> <circle cx=\"130\" cy=\"168\" r=\"12\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"130\" cy=\"168\" r=\"4\" fill=\"#ffffff\"/>",
      "<line x1=\"88\" y1=\"95\" x2=\"100\" y2=\"105\" stroke=\"#ffffff\" stroke-width=\"2\"/> <line x1=\"88\" y1=\"108\" x2=\"105\" y2=\"118\" stroke=\"#ffffff\" stroke-width=\"2\"/> <line x1=\"90\" y1=\"120\" x2=\"115\" y2=\"128\" stroke=\"#ffffff\" stroke-width=\"2\"/>",
      "<polygon points=\"75,105 78,110 84,110 80,114 82,120 75,116 68,120 70,114 66,110 72,110\" fill=\"#facc15\"/> <line x1=\"40\" y1=\"180\" x2=\"165\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "carrinho-bebe",
    "name": "Carrinho de Bebê",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "C A R R I N H O",
    "colors": [
      "#38bdf8",
      "#fbcfe8",
      "#64748b",
      "#ffffff"
    ],
    "tags": [
      "passeio",
      "capota",
      "bebê",
      "rodas",
      "família"
    ],
    "stepsDesc": [
      "1. Desenhe o cesto arredondado acolchoado do carrinho de bebê.",
      "2. Trace a CAPOTA RETRÁTIL CURVADA para proteger do sol.",
      "3. Faça a ESTRUTURA METÁLICA CRUZADA COM A BARRA DE EMPURRAR.",
      "4. Desenhe as quatro rodinhas macias com amortecedores.",
      "5. Adicione um móbile de brinquedo pendurado na capota."
    ],
    "layers": [
      "<path d=\"M60 120 C60 100 85 95 115 100 L135 120 C135 140 60 140 60 120 Z\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M60 120 C60 85 105 85 105 120 Z\" fill=\"#bae6fd\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"55\" y1=\"110\" x2=\"115\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"125\" y1=\"110\" x2=\"75\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"55\" y1=\"110\" x2=\"42\" y2=\"92\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"75\" cy=\"160\" r=\"12\" fill=\"#1e293b\"/> <circle cx=\"75\" cy=\"160\" r=\"5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"120\" cy=\"160\" r=\"12\" fill=\"#1e293b\"/> <circle cx=\"120\" cy=\"160\" r=\"5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"95\" cy=\"88\" r=\"4\" fill=\"#f43f5e\"/> <circle cx=\"85\" cy=\"92\" r=\"3\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "teleferico",
    "name": "Cabine de Teleférico",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "T E L E F É R I C O",
    "colors": [
      "#dc2626",
      "#ffffff",
      "#38bdf8",
      "#64748b"
    ],
    "tags": [
      "cabo",
      "montanha",
      "turismo",
      "altura",
      "cabine"
    ],
    "stepsDesc": [
      "1. Desenhe a cabine quadrada panorâmica com cantos arredondados.",
      "2. Trace o CABO DE AÇO DIAGONAL NO ALTO e o braço de suspensão com roldana.",
      "3. Faça as GRANDES JANELAS PANORÂMICAS DE VIDRO para ver a paisagem.",
      "4. Desenhe as portas de acesso e o para-choque de borracha.",
      "5. Adicione montanhas nevadas ao fundo onde o teleférico viaja."
    ],
    "layers": [
      "<rect x=\"65\" y=\"85\" width=\"70\" height=\"65\" rx=\"14\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"25\" y1=\"40\" x2=\"175\" y2=\"60\" stroke=\"#1e293b\" stroke-width=\"3.5\"/> <line x1=\"100\" y1=\"85\" x2=\"100\" y2=\"50\" stroke=\"#1e293b\" stroke-width=\"4\"/> <circle cx=\"100\" cy=\"50\" r=\"6\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"72\" y=\"95\" width=\"25\" height=\"30\" rx=\"4\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"103\" y=\"95\" width=\"25\" height=\"30\" rx=\"4\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"85\" x2=\"100\" y2=\"150\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"65\" y=\"140\" width=\"70\" height=\"8\" rx=\"2\" fill=\"#1e293b\"/>",
      "<polygon points=\"35,175 65,145 95,175\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"120,175 145,150 170,175\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "drone-voador",
    "name": "Drone com Quatro Hélices",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "D R O N E",
    "colors": [
      "#1e293b",
      "#3b82f6",
      "#ffffff",
      "#22c55e"
    ],
    "tags": [
      "câmera",
      "hélices",
      "controle",
      "tecnologia",
      "voo"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo central em cruz (X) com câmera frontal.",
      "2. Trace os QUATRO BRAÇOS RADIAIS com suportes de motor nas pontas.",
      "3. Faça as QUATRO HÉLICES DUPLAS GIRANDO rapidamente em círculos.",
      "4. Desenhe o GIMBAL COM A CÂMERA DE VÍDEO embaixo do corpo.",
      "5. Adicione luzes de navegação LED (vermelha e verde) nos braços."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"18\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"60\" y1=\"65\" x2=\"140\" y2=\"135\" stroke=\"#64748b\" stroke-width=\"6\" stroke-linecap=\"round\"/> <line x1=\"60\" y1=\"135\" x2=\"140\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"60\" cy=\"65\" rx=\"22\" ry=\"5\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.5\" stroke-dasharray=\"3 2\"/> <ellipse cx=\"140\" cy=\"65\" rx=\"22\" ry=\"5\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.5\" stroke-dasharray=\"3 2\"/> <ellipse cx=\"60\" cy=\"135\" rx=\"22\" ry=\"5\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.5\" stroke-dasharray=\"3 2\"/> <ellipse cx=\"140\" cy=\"135\" rx=\"22\" ry=\"5\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2.5\" stroke-dasharray=\"3 2\"/>",
      "<rect x=\"94\" y=\"112\" width=\"12\" height=\"15\" rx=\"3\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"120\" r=\"4\" fill=\"#38bdf8\"/>",
      "<circle cx=\"60\" cy=\"65\" r=\"3\" fill=\"#ef4444\"/> <circle cx=\"140\" cy=\"65\" r=\"3\" fill=\"#22c55e\"/> <circle cx=\"60\" cy=\"135\" r=\"3\" fill=\"#ef4444\"/> <circle cx=\"140\" cy=\"135\" r=\"3\" fill=\"#22c55e\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "lancha-rapida",
    "name": "Lancha Rápida no Mar",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "L A N C H A",
    "colors": [
      "#ffffff",
      "#0284c7",
      "#ef4444",
      "#38bdf8"
    ],
    "tags": [
      "motor",
      "mar",
      "espuma",
      "lago",
      "rapidez"
    ],
    "stepsDesc": [
      "1. Desenhe o casco afilado em cunha com proa alta rasgando a água.",
      "2. Trace o PARA-BRISA ESPORTIVO INCLINADO de vidro azul.",
      "3. Faça o MOTOR DE POPA POTENTE com hélice traseira.",
      "4. Desenhe o volante e assentos acolchoados para os navegantes.",
      "5. Adicione as GRANDES ESPUMAS BRANCAS DE ONDAS criadas pela lancha veloz."
    ],
    "layers": [
      "<path d=\"M40 135 L65 115 L145 115 L165 130 L155 145 L40 145 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"90,115 115,95 130,115\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"35\" y=\"125\" width=\"12\" height=\"22\" rx=\"3\" fill=\"#1e293b\"/> <polygon points=\"35,142 25,148 35,152\" fill=\"#64748b\"/>",
      "<line x1=\"50\" y1=\"130\" x2=\"155\" y2=\"130\" stroke=\"#ef4444\" stroke-width=\"3\"/>",
      "<path d=\"M25 152 Q55 145 85 152 T145 152 T185 152\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\"/> <path d=\"M15 158 Q50 152 80 158 T140 158\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "caminhao-carga",
    "name": "Caminhão Baú de Carga",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "C A M I N H Ã O",
    "colors": [
      "#2563eb",
      "#e2e8f0",
      "#1e293b",
      "#facc15"
    ],
    "tags": [
      "estrada",
      "baú",
      "carga",
      "viagem",
      "frete"
    ],
    "stepsDesc": [
      "1. Desenhe a cabine do cavalo mecânico e o ENORME BAÚ DE CARGA traseiro.",
      "2. Trace as portas traseiras de metal e o defletor de ar no teto da cabine.",
      "3. Faça as SEIS RODAS DUPLAS PESADAS com paralamas.",
      "4. Desenhe o tanque de combustível cilíndrico e degraus de subida.",
      "5. Adicione faixas refletoras zebradas na traseira e estrada longa."
    ],
    "layers": [
      "<rect x=\"75\" y=\"75\" width=\"90\" height=\"70\" rx=\"4\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M35 145 L35 110 L55 95 L75 95 L75 145 Z\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"55\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"55\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"105\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"105\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"135\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"135\" cy=\"148\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"50,100 65,100 65,115 42,115\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"80\" y=\"132\" width=\"18\" height=\"10\" rx=\"2\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"20\" y1=\"162\" x2=\"180\" y2=\"162\" stroke=\"#475569\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "caminhao-cacamba",
    "name": "Caminhão Caçamba Basculante",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "C A Ç A M B A",
    "colors": [
      "#eab308",
      "#78350f",
      "#1e293b",
      "#64748b"
    ],
    "tags": [
      "areia",
      "terra",
      "obra",
      "caçamba",
      "basculante"
    ],
    "stepsDesc": [
      "1. Desenhe a cabine forte do caminhão e o chassi reforçado.",
      "2. Trace a GRANDE CAÇAMBA BASCULANTE INCLINADA PARA CIMA descarregando.",
      "3. Faça o PISTÃO HIDRÁULICO METÁLICO erguendo a caçamba.",
      "4. Desenhe a CARGA DE PEDRAS E AREIA DESLIZANDO da caçamba aberta.",
      "5. Adicione as rodas pesadas para terreno de obra."
    ],
    "layers": [
      "<path d=\"M35 145 L35 105 L55 105 L72 120 L72 145 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"35\" y1=\"145\" x2=\"155\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"4\"/>",
      "<polygon points=\"80,135 155,105 160,125 90,145\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"55\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"115\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"140\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/>",
      "<line x1=\"85\" y1=\"145\" x2=\"105\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"4\"/>",
      "<circle cx=\"168\" cy=\"140\" r=\"5\" fill=\"#78350f\"/> <circle cx=\"175\" cy=\"148\" r=\"6\" fill=\"#78350f\"/> <circle cx=\"165\" cy=\"155\" r=\"7\" fill=\"#78350f\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "paraquedas",
    "name": "Paraquedas Aberto no Céu",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "facil",
    "word": "P A R A Q U E D A S",
    "colors": [
      "#ef4444",
      "#facc15",
      "#3b82f6",
      "#10b981"
    ],
    "tags": [
      "cordas",
      "salto",
      "céu",
      "vento",
      "cor"
    ],
    "stepsDesc": [
      "1. Desenhe a cúpula em semicírculo aberto do paraquedas de tecido.",
      "2. Trace os GOMOS VERTICAIS CURVOS listrados em cores vibrantes.",
      "3. Faça as DEZENAS DE LINHAS DE SUSPENSÃO descendo em cone.",
      "4. Desenhe o pequeno paraquedista pendurado com mochila de segurança.",
      "5. Adicione nuvens ao redor demonstrando o salto em queda livre suave."
    ],
    "layers": [
      "<path d=\"M45 75 C45 35 155 35 155 75 Z\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M45 75 C65 65 85 75 100 75 C115 75 135 65 155 75\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"75\" y1=\"45\" x2=\"75\" y2=\"72\" stroke=\"#ffffff\" stroke-width=\"2.5\"/> <line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"75\" stroke=\"#ffffff\" stroke-width=\"2.5\"/> <line x1=\"125\" y1=\"45\" x2=\"125\" y2=\"72\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>",
      "<line x1=\"45\" y1=\"75\" x2=\"100\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"75\" y1=\"72\" x2=\"100\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"125\" y1=\"72\" x2=\"100\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"155\" y1=\"75\" x2=\"100\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"100\" cy=\"148\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <rect x=\"96\" y=\"154\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M25 110 Q40 100 55 110 L20 110 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <path d=\"M145 120 Q160 110 175 120 L140 120 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "hovercraft",
    "name": "Hovercraft Anfíbio",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "desafio",
    "word": "A N F Í B I O",
    "colors": [
      "#0284c7",
      "#f97316",
      "#1e293b",
      "#ffffff"
    ],
    "tags": [
      "colchão",
      "ar",
      "terra",
      "água",
      "hélice"
    ],
    "stepsDesc": [
      "1. Desenhe a SAIA DE BORRACHA PRETA EM ALMOFADA DE AR na base.",
      "2. Trace o casco rígido em cunha e a cabine com ampla visão.",
      "3. Faça os DOIS GRANDES VENTILADORES/PROPULSORES TRASEIROS com lemes.",
      "4. Desenhe as grades de proteção das hélices de ar.",
      "5. Adicione spray de água e vento demonstrando que ele anda sobre terra e mar."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"65\" ry=\"16\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M45 135 L60 105 L135 105 L155 135 Z\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"75\" y=\"90\" width=\"45\" height=\"25\" rx=\"6\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"65\" cy=\"85\" r=\"14\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"65\" y1=\"71\" x2=\"65\" y2=\"99\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"51\" y1=\"85\" x2=\"79\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<circle cx=\"135\" cy=\"85\" r=\"14\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"135\" y1=\"71\" x2=\"135\" y2=\"99\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"121\" y1=\"85\" x2=\"149\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<path d=\"M25 162 Q60 155 95 162 T175 162\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <line x1=\"45\" y1=\"158\" x2=\"35\" y2=\"168\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <line x1=\"155\" y1=\"158\" x2=\"165\" y2=\"168\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "kart-corrida",
    "name": "Kart com Volante",
    "category": "objetos",
    "sub": "veiculos",
    "diff": "medio",
    "word": "K A R T",
    "colors": [
      "#16a34a",
      "#facc15",
      "#1e293b",
      "#ef4444"
    ],
    "tags": [
      "pista",
      "volante",
      "rodinhas",
      "esporte",
      "kartódromo"
    ],
    "stepsDesc": [
      "1. Desenhe o chassi super baixo de metal tubular do kart.",
      "2. Trace o PARA-CHOQUE DIANTEIRO LARGO e os pedais de acelerador/freio.",
      "3. Faça as QUATRO RODAS LARGAS SEM SUSPENSÃO tipo slick de pista.",
      "4. Desenhe o VOLANTE ESPORTIVO REDONDO e o banco concha de corrida.",
      "5. Adicione o motor pequeno ao lado com escapamento e número 7."
    ],
    "layers": [
      "<path d=\"M50 145 L65 125 L125 125 L155 138 L155 148 L50 148 Z\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"62\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"62\" cy=\"148\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"142\" cy=\"148\" r=\"14\" fill=\"#1e293b\"/> <circle cx=\"142\" cy=\"148\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"112\" cy=\"115\" r=\"9\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"112\" y1=\"124\" x2=\"112\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<path d=\"M78 112 L85 138\" stroke=\"#1e293b\" stroke-width=\"4.5\" stroke-linecap=\"round\"/> <rect x=\"68\" y=\"125\" width=\"12\" height=\"12\" fill=\"#64748b\"/>",
      "<circle cx=\"95\" cy=\"135\" r=\"7\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <text x=\"92\" y=\"139\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"10\" fill=\"#1e293b\">7</text> <line x1=\"25\" y1=\"162\" x2=\"175\" y2=\"162\" stroke=\"#64748b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "lapis-magico",
    "name": "Lápis com Borracha",
    "category": "objetos",
    "sub": "escolar",
    "diff": "facil",
    "word": "L Á P I S",
    "colors": [
      "#f59e0b",
      "#fbcfe8",
      "#94a3b8",
      "#1e293b"
    ],
    "tags": [
      "grafite",
      "escrever",
      "desenhar",
      "escola",
      "estudo"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo longo hexagonal do lápis inclinado.",
      "2. Trace a ponta cônica de madeira apontada e a ponta de grafite preta.",
      "3. Faça a ponteira metálica (virola) e a BORRACHA ROSA no topo.",
      "4. Desenhe as listras que definem as facetas do lápis amarelo.",
      "5. Adicione estrelinhas mágicas saindo do traço do lápis."
    ],
    "layers": [
      "<polygon points=\"65,145 135,55 145,63 75,153\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"65,145 45,170 75,153\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"45,170 42,174 48,172\" fill=\"#1e293b\"/>",
      "<polygon points=\"135,55 145,42 155,50 145,63\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M145 42 C148 35 158 42 155 50\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"68\" y1=\"147\" x2=\"138\" y2=\"57\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <line x1=\"72\" y1=\"151\" x2=\"142\" y2=\"61\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/>",
      "<path d=\"M42 174 Q30 180 20 170\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/> <polygon points=\"30,165 32,168 36,168 33,171 34,175 30,173 26,175 27,171 24,168 28,168\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "livro-aberto",
    "name": "Livro Aberto do Saber",
    "category": "objetos",
    "sub": "escolar",
    "diff": "facil",
    "word": "L I V R O",
    "colors": [
      "#3b82f6",
      "#ffffff",
      "#fef08a",
      "#1e293b"
    ],
    "tags": [
      "páginas",
      "leitura",
      "história",
      "conhecimento",
      "capa"
    ],
    "stepsDesc": [
      "1. Desenhe a lombada central curva e as DUAS PÁGINAS ABERTAS EM ARCO suave.",
      "2. Trace a capa dura de couro aparecendo nas bordas inferiores.",
      "3. Faça a FITA MARCADORA DE PÁGINAS vermelha pendurada.",
      "4. Desenhe as linhas de texto impressas e ilustrações nas folhas.",
      "5. Adicione o brilho do conhecimento saindo das páginas abertas."
    ],
    "layers": [
      "<path d=\"M100 135 C70 120 40 125 35 135 L40 85 C45 75 75 70 100 85 C125 70 155 75 160 85 L165 135 C160 125 130 120 100 135 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M35 138 C40 128 70 124 100 138 C130 124 160 128 165 138\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"3\"/>",
      "<path d=\"M100 85 C102 115 95 145 92 165\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<line x1=\"50\" y1=\"95\" x2=\"85\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"50\" y1=\"105\" x2=\"85\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"50\" y1=\"115\" x2=\"85\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"115\" y1=\"90\" x2=\"150\" y2=\"95\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"115\" y1=\"100\" x2=\"150\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"115\" y1=\"110\" x2=\"150\" y2=\"115\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>",
      "<polygon points=\"100,55 102,60 108,60 104,64 106,70 100,66 94,70 96,64 92,60 98,60\" fill=\"#facc15\"/> <circle cx=\"75\" cy=\"50\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"125\" cy=\"50\" r=\"2.5\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "mochila-escolar",
    "name": "Mochila Escolar com Bolsos",
    "category": "objetos",
    "sub": "escolar",
    "diff": "medio",
    "word": "M O C H I L A",
    "colors": [
      "#8b5cf6",
      "#ec4899",
      "#facc15",
      "#1e293b"
    ],
    "tags": [
      "alças",
      "zíper",
      "estudo",
      "bolsos",
      "caderno"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo arredondado bojudo da mochila escolar.",
      "2. Trace o GRANDE BOLSO FRONTAL COM ZÍPER na parte de baixo.",
      "3. Faça a alça de mão superior e as duas alças acolchoadas de ombro.",
      "4. Desenhe o bolso lateral em rede com uma GARRAFINHA DE ÁGUA.",
      "5. Adicione chaveirinho fofo pendurado no zíper."
    ],
    "layers": [
      "<path d=\"M65 85 C65 55 135 55 135 85 L140 160 C140 168 60 168 60 160 Z\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"70\" y=\"115\" width=\"60\" height=\"42\" rx=\"8\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 55 C90 42 110 42 110 55\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/> <path d=\"M60 95 C50 115 50 145 60 155 M140 95 C150 115 150 145 140 155\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<line x1=\"75\" y1=\"125\" x2=\"125\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"140\" y=\"120\" width=\"14\" height=\"28\" rx=\"4\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <rect x=\"142\" y=\"112\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<circle cx=\"100\" cy=\"125\" r=\"3.5\" fill=\"#facc15\"/> <circle cx=\"100\" cy=\"132\" r=\"5\" fill=\"#f43f5e\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "tesoura-escolar",
    "name": "Tesoura sem Ponta",
    "category": "objetos",
    "sub": "escolar",
    "diff": "facil",
    "word": "T E S O U R A",
    "colors": [
      "#ef4444",
      "#94a3b8",
      "#cbd5e1",
      "#1e293b"
    ],
    "tags": [
      "recorte",
      "papel",
      "arte",
      "argolas",
      "lâmina"
    ],
    "stepsDesc": [
      "1. Desenhe as DUAS LÂMINAS DE METAL COM PONTAS ARREDONDADAS seguras cruzadas.",
      "2. Trace o PINO/REBITE CIRCULAR DE FIXAÇÃO central onde elas se cruzam.",
      "3. Faça os DOIS ANÉIS COLORIDOS DE EMPUNHADURA nos cabos.",
      "4. Desenhe o corte de uma folha de papel pontilhada.",
      "5. Adicione o brilho do aço inoxidável nas lâminas."
    ],
    "layers": [
      "<polygon points=\"75,65 125,125 115,132 68,75\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <polygon points=\"125,65 75,125 85,132 132,75\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"5\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"68\" cy=\"150\" rx=\"16\" ry=\"18\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"68\" cy=\"150\" rx=\"9\" ry=\"11\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"132\" cy=\"150\" rx=\"16\" ry=\"18\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"132\" cy=\"150\" rx=\"9\" ry=\"11\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"45\" y1=\"50\" x2=\"100\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\"/> <line x1=\"72\" y1=\"72\" x2=\"115\" y2=\"120\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "regua-graduada",
    "name": "Régua Escolar com Números",
    "category": "objetos",
    "sub": "escolar",
    "diff": "facil",
    "word": "R É G U A",
    "colors": [
      "#facc15",
      "#1e293b",
      "#ffffff",
      "#ca8a04"
    ],
    "tags": [
      "centímetros",
      "medida",
      "traço",
      "linha",
      "escola"
    ],
    "stepsDesc": [
      "1. Desenhe a barra retangular longa da régua escolar transparente.",
      "2. Trace a escala com MARCAÇÕES DE CENTÍMETROS E MILÍMETROS no topo.",
      "3. Escreva os números de 0 a 10 nas marcações maiores.",
      "4. Faça o bisel inclinado na borda de medição.",
      "5. Adicione o orifício redondo para pendurar a régua na ponta."
    ],
    "layers": [
      "<rect x=\"35\" y=\"85\" width=\"130\" height=\"40\" rx=\"4\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"48\" cy=\"105\" r=\"4\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"60\" y1=\"85\" x2=\"60\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"75\" y1=\"85\" x2=\"75\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"90\" y1=\"85\" x2=\"90\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"105\" y1=\"85\" x2=\"105\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"120\" y1=\"85\" x2=\"120\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"135\" y1=\"85\" x2=\"135\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"150\" y1=\"85\" x2=\"150\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"67\" y1=\"85\" x2=\"67\" y2=\"94\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"82\" y1=\"85\" x2=\"82\" y2=\"94\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"97\" y1=\"85\" x2=\"97\" y2=\"94\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"112\" y1=\"85\" x2=\"112\" y2=\"94\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"127\" y1=\"85\" x2=\"127\" y2=\"94\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"142\" y1=\"85\" x2=\"142\" y2=\"94\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<text x=\"58\" y=\"116\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#1e293b\">1</text> <text x=\"88\" y=\"116\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#1e293b\">2</text> <text x=\"118\" y=\"116\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#1e293b\">3</text> <text x=\"148\" y=\"116\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#1e293b\">4</text>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "pincel-paleta",
    "name": "Paleta de Tintas com Pincel",
    "category": "objetos",
    "sub": "escolar",
    "diff": "medio",
    "word": "P I N C E L",
    "colors": [
      "#d97706",
      "#ef4444",
      "#3b82f6",
      "#10b981"
    ],
    "tags": [
      "tintas",
      "arte",
      "pintor",
      "cerdas",
      "aquarela"
    ],
    "stepsDesc": [
      "1. Desenhe o formato de feijão oval curvo da paleta de madeira do pintor.",
      "2. Trace o ORIFÍCIO REDONDO DE ENCAIXE DO POLEGAR na lateral.",
      "3. Faça as CINCO GOTAS DE TINTA COLORIDA (manchas) na borda.",
      "4. Desenhe o PINCEL COM CABO DE MADEIRA E CERDAS finas cruzando a paleta.",
      "5. Adicione a ponta do pincel molhada em tinta viva."
    ],
    "layers": [
      "<path d=\"M50 115 C45 75 95 65 135 75 C165 85 165 135 135 155 C105 175 60 155 50 115 Z\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"70\" cy=\"135\" r=\"9\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"75\" cy=\"88\" r=\"7\" fill=\"#ef4444\"/> <circle cx=\"98\" cy=\"78\" r=\"7\" fill=\"#f97316\"/> <circle cx=\"122\" cy=\"85\" r=\"7\" fill=\"#eab308\"/> <circle cx=\"142\" cy=\"105\" r=\"7\" fill=\"#22c55e\"/> <circle cx=\"140\" cy=\"130\" r=\"7\" fill=\"#3b82f6\"/>",
      "<polygon points=\"65,160 145,55 152,60 72,165\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"140\" y=\"55\" width=\"8\" height=\"12\" fill=\"#94a3b8\" transform=\"rotate(-40 140 55)\"/>",
      "<path d=\"M148 50 C155 42 158 45 152 55 Z\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "computador-laptop",
    "name": "Computador Portátil",
    "category": "objetos",
    "sub": "tecnologia",
    "diff": "facil",
    "word": "L A P T O P",
    "colors": [
      "#64748b",
      "#38bdf8",
      "#1e293b",
      "#ffffff"
    ],
    "tags": [
      "tela",
      "teclado",
      "mouse",
      "estudo",
      "internet"
    ],
    "stepsDesc": [
      "1. Desenhe a TELA ABERTA EM ÂNGULO e a base plana do teclado.",
      "2. Trace o visor iluminado com moldura fina mostrando um código ou desenho.",
      "3. Faça o TECLADO COM TECLAS ALINHADAS e o trackpad central.",
      "4. Desenhe a webcam no topo da tela e a maçã/logo na tampa.",
      "5. Adicione ícones divertidos na tela do computador."
    ],
    "layers": [
      "<polygon points=\"65,70 135,70 145,130 55,130\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"40,155 160,155 145,130 55,130\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"68,76 132,76 140,125 60,125\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"68\" y=\"134\" width=\"64\" height=\"10\" fill=\"#94a3b8\"/> <rect x=\"92\" y=\"147\" width=\"16\" height=\"6\" rx=\"1\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<circle cx=\"100\" cy=\"73\" r=\"1.5\" fill=\"#1e293b\"/> <circle cx=\"85\" cy=\"95\" r=\"5\" fill=\"#facc15\"/> <rect x=\"105\" y=\"90\" width=\"20\" height=\"12\" rx=\"2\" fill=\"#ffffff\" opacity=\"0.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "robo-amigo",
    "name": "Robô Metálico Amigo",
    "category": "objetos",
    "sub": "tecnologia",
    "diff": "medio",
    "word": "R O B Ô",
    "colors": [
      "#0284c7",
      "#38bdf8",
      "#facc15",
      "#ef4444"
    ],
    "tags": [
      "antena",
      "botões",
      "visor",
      "engrenagens",
      "futuro"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça quadrada e o corpo em bloco metálico do robô.",
      "2. Trace a ANTENA NO TOPO COM BOLINHA e orelhas em parafuso.",
      "3. Faça os OLHOS EM MOSTRADOR DIGITAL e a boca em zigue-zague.",
      "4. Desenhe o PAINEL COM BOTÕES E MEDIDOR DE ENERGIA no peito.",
      "5. Adicione os braços articulados com pinças e esteiras de locomoção."
    ],
    "layers": [
      "<rect x=\"75\" y=\"60\" width=\"50\" height=\"40\" rx=\"8\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <rect x=\"70\" y=\"105\" width=\"60\" height=\"50\" rx=\"8\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"60\" x2=\"100\" y2=\"42\" stroke=\"#1e293b\" stroke-width=\"3\"/> <circle cx=\"100\" cy=\"42\" r=\"5\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <rect x=\"68\" y=\"72\" width=\"7\" height=\"14\" rx=\"2\" fill=\"#64748b\"/> <rect x=\"125\" y=\"72\" width=\"7\" height=\"14\" rx=\"2\" fill=\"#64748b\"/>",
      "<circle cx=\"88\" cy=\"78\" r=\"6\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"112\" cy=\"78\" r=\"6\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M88 92 L94 88 L100 92 L106 88 L112 92\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<rect x=\"80\" y=\"115\" width=\"40\" height=\"22\" rx=\"4\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"90\" cy=\"126\" r=\"3\" fill=\"#22c55e\"/> <circle cx=\"100\" cy=\"126\" r=\"3\" fill=\"#facc15\"/> <circle cx=\"110\" cy=\"126\" r=\"3\" fill=\"#ef4444\"/>",
      "<path d=\"M70 120 L55 125 L55 140\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/> <path d=\"M130 120 L145 125 L145 140\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/> <rect x=\"75\" y=\"155\" width=\"18\" height=\"18\" rx=\"4\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"107\" y=\"155\" width=\"18\" height=\"18\" rx=\"4\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "lampada-ideias",
    "name": "Lâmpada de Boas Ideias",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "L Â M P A D A",
    "colors": [
      "#facc15",
      "#fde047",
      "#94a3b8",
      "#1e293b"
    ],
    "tags": [
      "luz",
      "brilho",
      "filamento",
      "ideia",
      "invenção"
    ],
    "stepsDesc": [
      "1. Desenhe o bulbo de vidro arredondado em gota clássico da lâmpada incandescente.",
      "2. Trace a ROSCA METÁLICA EM ESPIRAL e o contato elétrico na base.",
      "3. Faça o FILAMENTO DE TUNGSTÊNIO DUPLO EM ZIGUE-ZAGUE no centro.",
      "4. Desenhe os RAIOS DE LUZ RADIAIS AMARELOS representando uma grande ideia!",
      "5. Adicione estrelinhas cintilantes de inspiração."
    ],
    "layers": [
      "<path d=\"M80 120 C70 100 70 65 100 65 C130 65 130 100 120 120 Z\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"85\" y=\"120\" width=\"30\" height=\"20\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"85\" y1=\"126\" x2=\"115\" y2=\"126\" stroke=\"#64748b\" stroke-width=\"2\"/> <line x1=\"85\" y1=\"133\" x2=\"115\" y2=\"133\" stroke=\"#64748b\" stroke-width=\"2\"/> <path d=\"M92 140 C95 145 105 145 108 140\" fill=\"#1e293b\"/>",
      "<line x1=\"94\" y1=\"120\" x2=\"94\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"106\" y1=\"120\" x2=\"106\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M94 95 Q100 88 106 95\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>",
      "<line x1=\"100\" y1=\"48\" x2=\"100\" y2=\"35\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"68\" y1=\"58\" x2=\"58\" y2=\"48\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"132\" y1=\"58\" x2=\"142\" y2=\"48\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"55\" y1=\"92\" x2=\"42\" y2=\"92\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"145\" y1=\"92\" x2=\"158\" y2=\"92\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M82 82 C82 72 90 70 95 72\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "relogio-despertador",
    "name": "Relógio Despertador",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "R E L Ó G I O",
    "colors": [
      "#ef4444",
      "#ffffff",
      "#facc15",
      "#1e293b"
    ],
    "tags": [
      "ponteiros",
      "horas",
      "campainha",
      "manhã",
      "tempo"
    ],
    "stepsDesc": [
      "1. Desenhe a caixa circular perfeita do relógio despertador retrô.",
      "2. Trace OS DOIS SINOS METÁLICOS CURVOS e o martelo central no topo.",
      "3. Faça os dois PEZINHOS EM ÂNGULO apoiando o relógio na mesa.",
      "4. Desenhe o mostrador com os números das 12 horas e ponteiros marcando a hora de acordar.",
      "5. Adicione linhas de vibração sonora 'TRIIIM!' saindo dos sinos."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"42\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<path d=\"M68 75 C60 65 72 52 82 60 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M132 75 C140 65 128 52 118 60 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"97\" y=\"60\" width=\"6\" height=\"15\" rx=\"2\" fill=\"#64748b\"/> <circle cx=\"100\" cy=\"58\" r=\"4\" fill=\"#ef4444\"/>",
      "<line x1=\"75\" y1=\"152\" x2=\"65\" y2=\"170\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <line x1=\"125\" y1=\"152\" x2=\"135\" y2=\"170\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"3.5\" fill=\"#1e293b\"/> <line x1=\"100\" y1=\"115\" x2=\"100\" y2=\"88\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"100\" y1=\"115\" x2=\"120\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M55 55 Q50 65 58 72 M145 55 Q150 65 142 72\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"172\" rx=\"42\" ry=\"6\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "telescopio",
    "name": "Telescópio Astronômico",
    "category": "objetos",
    "sub": "tecnologia",
    "diff": "medio",
    "word": "T E L E S C Ó P I O",
    "colors": [
      "#4338ca",
      "#a855f7",
      "#64748b",
      "#facc15"
    ],
    "tags": [
      "estrelas",
      "tripé",
      "lentes",
      "planetas",
      "ciência"
    ],
    "stepsDesc": [
      "1. Desenhe o LONGO TUBO ÓPTICO CILÍNDRICO inclinado apontando para o céu.",
      "2. Trace a ocular na extremidade inferior e a lente objetiva larga na superior.",
      "3. Faça a luneta buscadora menor montada sobre o tubo.",
      "4. Desenhe o TRIPÉ DE TRÊS PERNAS METÁLICAS firmes no solo.",
      "5. Adicione as estrelas brilhantes e a lua cheia que ele observa."
    ],
    "layers": [
      "<polygon points=\"65,125 145,55 155,65 75,135\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"150\" cy=\"60\" rx=\"8\" ry=\"12\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\" transform=\"rotate(-40 150 60)\"/> <rect x=\"60\" y=\"125\" width=\"8\" height=\"14\" rx=\"2\" fill=\"#64748b\" transform=\"rotate(-40 60 125)\"/>",
      "<polygon points=\"105,75 135,48 140,54 110,81\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"105\" cy=\"100\" r=\"5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"105\" y1=\"105\" x2=\"65\" y2=\"175\" stroke=\"#475569\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <line x1=\"105\" y1=\"105\" x2=\"105\" y2=\"175\" stroke=\"#475569\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <line x1=\"105\" y1=\"105\" x2=\"145\" y2=\"175\" stroke=\"#475569\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"165\" cy=\"40\" r=\"10\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"135,30 137,33 142,33 138,36 140,40 135,38 130,40 132,36 128,33 133,33\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "microscopio",
    "name": "Microscópio de Cientista",
    "category": "objetos",
    "sub": "tecnologia",
    "diff": "desafio",
    "word": "C I Ê N C I A",
    "colors": [
      "#0284c7",
      "#64748b",
      "#cbd5e1",
      "#1e293b"
    ],
    "tags": [
      "lente",
      "células",
      "tubo",
      "laboratório",
      "estudo"
    ],
    "stepsDesc": [
      "1. Desenhe a BASE PESADA EM FERRADURA DE FERRO no fundo.",
      "2. Trace o braço curvo e a PLATINA QUADRADA COM PRESILHAS de lâminas.",
      "3. Faça o TUBO ÓPTICO COM A OCULAR no topo e o REVÓLVER DE OBJETIVAS.",
      "4. Desenhe os botões de ajuste micrométrico e o espelho refletor.",
      "5. Adicione a lâmina de vidro com uma célula viva sendo estudada."
    ],
    "layers": [
      "<rect x=\"65\" y=\"155\" width=\"70\" height=\"15\" rx=\"5\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M75 155 C70 120 80 95 95 85\" fill=\"none\" stroke=\"#334155\" stroke-width=\"8\" stroke-linecap=\"round\"/>",
      "<rect x=\"75\" y=\"125\" width=\"45\" height=\"8\" rx=\"2\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"95,85 115,55 125,62 105,92\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"102\" cy=\"95\" r=\"7\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"98\" y=\"102\" width=\"6\" height=\"10\" rx=\"1\" fill=\"#facc15\"/>",
      "<circle cx=\"82\" cy=\"115\" r=\"6\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"95\" cy=\"142\" r=\"5\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"85\" y=\"120\" width=\"20\" height=\"4\" fill=\"#ffffff\" opacity=\"0.8\"/> <circle cx=\"95\" cy=\"122\" r=\"1.5\" fill=\"#ef4444\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "lupa-detetive",
    "name": "Lupa de Detetive",
    "category": "objetos",
    "sub": "escolar",
    "diff": "facil",
    "word": "L U P A",
    "colors": [
      "#78350f",
      "#38bdf8",
      "#cbd5e1",
      "#ffffff"
    ],
    "tags": [
      "aumento",
      "vidro",
      "cabo",
      "investigar",
      "olhar"
    ],
    "stepsDesc": [
      "1. Desenhe a grande lente circular de vidro com aro metálico grosso.",
      "2. Trace o CABO DE MADEIRA TORNEADO ergonômico.",
      "3. Faça o arco curvo branco de reflexo espelhado no vidro da lente.",
      "4. Desenhe uma pegada ou detalhe ampliado visto através da lente.",
      "5. Adicione brilhos estelares na lente polida."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"85\" r=\"38\" fill=\"#e0f2fe\" stroke=\"#1e293b\" stroke-width=\"3.5\"/>",
      "<circle cx=\"85\" cy=\"85\" r=\"34\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2\"/>",
      "<polygon points=\"112,112 155,155 145,165 102,122\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/> <circle cx=\"150\" cy=\"160\" r=\"5\" fill=\"#facc15\"/>",
      "<path d=\"M62 65 C70 55 95 55 105 65\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"85\" r=\"8\" fill=\"#1e293b\" opacity=\"0.3\"/> <polygon points=\"130,55 132,60 138,60 134,64 136,70 130,66 124,70 126,64 122,60 128,60\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "chave-antiga",
    "name": "Chave Mágica Dourada",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "C H A V E",
    "colors": [
      "#f59e0b",
      "#fde047",
      "#b45309",
      "#ffffff"
    ],
    "tags": [
      "fechadura",
      "ouro",
      "dentes",
      "segredo",
      "abrir"
    ],
    "stepsDesc": [
      "1. Desenhe a CABEÇA ORNAMENTADA EM CORAÇÃO/TREVO da chave mágica.",
      "2. Trace a HASTE CILÍNDRICA METÁLICA longa e polida.",
      "3. Faça o PALHETÃO COM DENTES EM DEGRAUS recortados na ponta.",
      "4. Desenhe o anel vazado na cabeça para pendurar no chaveiro.",
      "5. Adicione o brilho dourado e faíscas mágicas de segredo."
    ],
    "layers": [
      "<circle cx=\"70\" cy=\"80\" r=\"22\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <circle cx=\"70\" cy=\"80\" r=\"10\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"88\" y1=\"92\" x2=\"155\" y2=\"145\" stroke=\"#facc15\" stroke-width=\"7\" stroke-linecap=\"round\"/> <line x1=\"88\" y1=\"92\" x2=\"155\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"142,135 158,122 165,128 152,142\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"148,140 162,128 165,132 154,145\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"58\" cy=\"72\" r=\"3\" fill=\"#ffffff\"/> <circle cx=\"82\" cy=\"72\" r=\"3\" fill=\"#ffffff\"/>",
      "<polygon points=\"135,85 137,90 142,90 138,93 140,98 135,95 130,98 132,93 128,90 133,90\" fill=\"#facc15\"/> <polygon points=\"160,105 162,109 166,109 163,112 164,116 160,114 156,116 157,112 154,109 158,109\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "cadeado-seguro",
    "name": "Cadeado de Ferro",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "C A D E A D O",
    "colors": [
      "#64748b",
      "#94a3b8",
      "#facc15",
      "#1e293b"
    ],
    "tags": [
      "arco",
      "segurança",
      "tranca",
      "ferro",
      "fechado"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo quadrado maciço com cantos arredondados do cadeado.",
      "2. Trace a ALÇA DE AÇO CURVADA EM U INVERTIDO no topo.",
      "3. Faça a FECHADURA/BURACO DA CHAVE em gota clássica no centro.",
      "4. Desenhe o chanfro decorativo e o brilho do aço maciço.",
      "5. Finalize o entalhe de travamento na haste do cadeado."
    ],
    "layers": [
      "<rect x=\"65\" y=\"105\" width=\"70\" height=\"60\" rx=\"10\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M78 105 L78 68 C78 50 122 50 122 68 L122 105\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"6\" stroke-linecap=\"round\"/> <path d=\"M78 105 L78 68 C78 50 122 50 122 68 L122 105\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"130\" r=\"6\" fill=\"#1e293b\"/> <polygon points=\"97,132 103,132 101,145 99,145\" fill=\"#1e293b\"/>",
      "<rect x=\"72\" y=\"112\" width=\"56\" height=\"46\" rx=\"6\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"1.8\"/>",
      "<path d=\"M85 70 C85 60 95 55 100 55\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"172\" rx=\"42\" ry=\"6\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "bussola-navegador",
    "name": "Bússola com Rosa dos Ventos",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "medio",
    "word": "B Ú S S O L A",
    "colors": [
      "#d97706",
      "#ef4444",
      "#0284c7",
      "#ffffff"
    ],
    "tags": [
      "norte",
      "agulha",
      "direção",
      "mapa",
      "trilha"
    ],
    "stepsDesc": [
      "1. Desenhe o mostrador circular de bolso da bússola com aro de latão.",
      "2. Trace a ROSA DOS VENTOS DE OITO PONTAS no fundo do mostrador.",
      "3. Faça a AGULHA MAGNÉTICA EM LOSANGO BIPARTIDO apontando para o NORTE (N).",
      "4. Desenhe as letras cardeais (N, S, L, O) e a argola de suspensão no topo.",
      "5. Adicione o vidro protetor espelhado."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"45\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"38\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"70\" r=\"8\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,82 105,115 95,115\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,148 105,115 95,115\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"115\" r=\"3.5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<text x=\"96\" y=\"94\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#ef4444\">N</text> <text x=\"96\" y=\"145\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"11\" fill=\"#1e293b\">S</text> <text x=\"126\" y=\"119\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"11\" fill=\"#1e293b\">L</text> <text x=\"66\" y=\"119\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"11\" fill=\"#1e293b\">O</text>",
      "<path d=\"M70 95 C75 85 90 80 100 80\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "ancora-marinheiro",
    "name": "Âncora Náutica de Navio",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "Â N C O R A",
    "colors": [
      "#475569",
      "#64748b",
      "#94a3b8",
      "#0284c7"
    ],
    "tags": [
      "mar",
      "ferro",
      "corrente",
      "fundo",
      "porto"
    ],
    "stepsDesc": [
      "1. Desenhe a HASTE VERTICAL CENTRAL com o grande anel no topo.",
      "2. Trace a BARRA TRANSVERSAL (CEPO) horizontal de estabilidade.",
      "3. Faça os BRAÇOS CURVADOS EM MEIA-LUA terminando em PATAS/GARRAS triangulares.",
      "4. Desenhe a CORDA NÁUTICA GROSSA ENROLADA em espiral pela haste.",
      "5. Adicione reflexos de ferro fundido marinho."
    ],
    "layers": [
      "<line x1=\"100\" y1=\"55\" x2=\"100\" y2=\"165\" stroke=\"#334155\" stroke-width=\"6\" stroke-linecap=\"round\"/> <line x1=\"100\" y1=\"55\" x2=\"100\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"45\" r=\"12\" fill=\"none\" stroke=\"#334155\" stroke-width=\"5\"/> <circle cx=\"100\" cy=\"45\" r=\"12\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"68\" y1=\"75\" x2=\"132\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M55 135 C55 175 145 175 145 135\" fill=\"none\" stroke=\"#334155\" stroke-width=\"6\" stroke-linecap=\"round\"/> <path d=\"M55 135 C55 175 145 175 145 135\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"55,135 45,142 55,125\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"145,135 155,142 145,125\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M92 65 C108 72 108 85 92 92 C108 100 108 112 92 120\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "bau-do-tesouro",
    "name": "Baú de Moedas de Ouro",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "medio",
    "word": "B A Ú",
    "colors": [
      "#78350f",
      "#facc15",
      "#b45309",
      "#1e293b"
    ],
    "tags": [
      "tampa",
      "moedas",
      "ouro",
      "pirata",
      "fechadura"
    ],
    "stepsDesc": [
      "1. Desenhe a caixa de madeira resistente com a TAMPA CURVA ARQUEADA aberta.",
      "2. Trace as CINTAS DE FERRO E REBITES DOURADOS reforçando o baú.",
      "3. Faça a MONTANHA DE MOEDAS DE OURO BRILHANTES transbordando de dentro.",
      "4. Desenhe o fecho com fechadura e alças laterais de transporte.",
      "5. Adicione colares de pérolas e pedras preciosas reluzentes."
    ],
    "layers": [
      "<rect x=\"55\" y=\"115\" width=\"90\" height=\"50\" rx=\"4\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M50 115 C50 75 150 75 150 115 Z\" fill=\"#92400e\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"75\" y1=\"115\" x2=\"75\" y2=\"165\" stroke=\"#facc15\" stroke-width=\"4\"/> <line x1=\"125\" y1=\"115\" x2=\"125\" y2=\"165\" stroke=\"#facc15\" stroke-width=\"4\"/> <rect x=\"94\" y=\"115\" width=\"12\" height=\"15\" rx=\"2\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"108\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"95\" cy=\"104\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"110\" cy=\"106\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"125\" cy=\"110\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<polygon points=\"100,90 103,96 110,96 105,100 107,106 100,102 93,106 95,100 90,96 97,96\" fill=\"#ef4444\"/> <circle cx=\"70\" cy=\"118\" r=\"3\" fill=\"#ffffff\"/> <circle cx=\"76\" cy=\"122\" r=\"3\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "guarda-chuva",
    "name": "Guarda-Chuva Colorido",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "C H U V A",
    "colors": [
      "#3b82f6",
      "#ef4444",
      "#facc15",
      "#1e293b"
    ],
    "tags": [
      "cabo",
      "tecido",
      "gotas",
      "proteção",
      "chuva"
    ],
    "stepsDesc": [
      "1. Desenhe a cúpula em arco arredondado aberta do guarda-chuva.",
      "2. Trace a BORDA INFERIOR EM ONDINHAS RECORTADAS (SUTIS).",
      "3. Faça a HASTE METÁLICA CENTRAL COM O CABO CURVADO EM J.",
      "4. Desenhe a ponteira superior pontuda e as varetas internas.",
      "5. Adicione pingos de chuva caindo e escorrendo pela lona colorida."
    ],
    "layers": [
      "<path d=\"M50 105 C50 55 150 55 150 105 Z\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M50 105 Q62 98 75 105 Q88 98 100 105 Q112 98 125 105 Q138 98 150 105\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"100\" y1=\"55\" x2=\"100\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"3.5\"/> <path d=\"M100 155 C100 170 115 170 115 160\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<line x1=\"100\" y1=\"55\" x2=\"100\" y2=\"42\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M75 105 C80 80 95 65 100 55 M125 105 C120 80 105 65 100 55\" stroke=\"#0284c7\" stroke-width=\"2\"/>",
      "<line x1=\"40\" y1=\"70\" x2=\"35\" y2=\"85\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"160\" y1=\"75\" x2=\"155\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"135\" y1=\"135\" x2=\"130\" y2=\"150\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "vaso-de-flores",
    "name": "Vaso com Lindas Flores",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "V A S O",
    "colors": [
      "#ea580c",
      "#ec4899",
      "#22c55e",
      "#facc15"
    ],
    "tags": [
      "pétalas",
      "barro",
      "jardim",
      "folhas",
      "mesa"
    ],
    "stepsDesc": [
      "1. Desenhe o vaso cônico bojudo de cerâmica terracota.",
      "2. Trace a borda superior reforçada do vaso.",
      "3. Faça os TALOS VERDES COM FOLHAS subindo em direção à luz.",
      "4. Desenhe as TRÊS LINDAS FLORES DESABROCHADAS com pétalas redondas.",
      "5. Adicione miolos amarelos e borboletinha pousando na flor."
    ],
    "layers": [
      "<polygon points=\"68,115 132,115 122,175 78,175\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<rect x=\"64\" y=\"110\" width=\"72\" height=\"10\" rx=\"3\" fill=\"#ea580c\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M85 110 C80 90 75 75 72 65 M100 110 L100 55 M115 110 C120 90 125 75 128 65\" stroke=\"#15803d\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"72\" cy=\"65\" r=\"14\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"72\" cy=\"65\" r=\"5\" fill=\"#facc15\"/> <circle cx=\"100\" cy=\"55\" r=\"16\" fill=\"#f43f5e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"55\" r=\"6\" fill=\"#facc15\"/> <circle cx=\"128\" cy=\"65\" r=\"14\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"128\" cy=\"65\" r=\"5\" fill=\"#facc15\"/>",
      "<path d=\"M85 95 C75 92 78 85 88 88 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <path d=\"M115 95 C125 92 122 85 112 88 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "camera-fotografica",
    "name": "Câmera Fotográfica",
    "category": "objetos",
    "sub": "tecnologia",
    "diff": "facil",
    "word": "C Â M E R A",
    "colors": [
      "#0284c7",
      "#1e293b",
      "#cbd5e1",
      "#facc15"
    ],
    "tags": [
      "lente",
      "flash",
      "foto",
      "sorriso",
      "botão"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo retangular clássico da câmera com cantos suaves.",
      "2. Trace a GRANDE LENTE CIRCULAR COM ANÉIS CONCÊNTRICOS no centro.",
      "3. Faça o BOTÃO DO OBTURADOR e o dial de modos no topo.",
      "4. Desenhe o flash retangular e o visor de enquadramento.",
      "5. Adicione o reflexo em arco de luz no vidro da lente e correia."
    ],
    "layers": [
      "<rect x=\"55\" y=\"80\" width=\"90\" height=\"65\" rx=\"10\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"112\" r=\"24\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"112\" r=\"18\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"112\" r=\"10\" fill=\"#0284c7\"/>",
      "<rect x=\"68\" y=\"72\" width=\"14\" height=\"8\" rx=\"2\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"125\" cy=\"74\" r=\"5\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"122\" y=\"88\" width=\"14\" height=\"10\" rx=\"2\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M90 102 C94 96 106 96 110 102\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M55 100 C40 110 40 145 55 155\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "xicara-de-cha",
    "name": "Xícara Fumegante de Chá",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "X Í C A R A",
    "colors": [
      "#ec4899",
      "#ffffff",
      "#b45309",
      "#cbd5e1"
    ],
    "tags": [
      "pires",
      "asa",
      "fumacinha",
      "bebida",
      "café"
    ],
    "stepsDesc": [
      "1. Desenhe a xícara arredondada elegante e o PIRES OVAL embaixo.",
      "2. Trace a ALÇA ERGONÔMICA EM ARCO graciosa na lateral.",
      "3. Faça o SAQUINHO DE CHÁ COM CORDÃO E ETIQUETA pendurado.",
      "4. Desenhe as ONDAS SINUOSAS DE VAPOR PERFUMADO subindo.",
      "5. Finalize florzinhas estampadas na porcelana da xícara."
    ],
    "layers": [
      "<path d=\"M65 95 C65 140 135 140 135 95 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"95\" rx=\"35\" ry=\"8\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"12\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M135 105 C155 105 155 130 135 130\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M85 95 C85 110 75 115 72 125\" stroke=\"#78350f\" stroke-width=\"1.8\"/> <rect x=\"68\" y=\"125\" width=\"8\" height=\"10\" rx=\"2\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<path d=\"M88 78 Q82 65 90 52 M102 78 Q108 62 100 48 M115 78 Q120 65 112 52\" stroke=\"#94a3b8\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "regador-jardim",
    "name": "Regador de Plantas",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "R E G A D O R",
    "colors": [
      "#10b981",
      "#38bdf8",
      "#059669",
      "#ffffff"
    ],
    "tags": [
      "bico",
      "água",
      "chuveirinho",
      "jardim",
      "plantas"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo cilíndrico bojudo do regador de metal.",
      "2. Trace o BICO LONGO INCLINADO COM O CHUVEIRINHO/CRIVO PERFURADO.",
      "3. Faça a GRANDE ALÇA CURVA SUPERIOR e a alça de apoio traseira.",
      "4. Desenhe os furos no crivo e GOTAS DE ÁGUA REFRESCANTE CHOVENDO.",
      "5. Adicione florzinha do jardim recebendo a água fresca."
    ],
    "layers": [
      "<path d=\"M65 110 L60 165 C60 170 125 170 125 165 L120 110 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"120\" y1=\"140\" x2=\"165\" y2=\"105\" stroke=\"#1e293b\" stroke-width=\"5\" stroke-linecap=\"round\"/> <polygon points=\"160,95 175,108 170,115 155,102\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M75 110 C75 75 110 75 110 110\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3.5\"/> <path d=\"M60 125 C45 125 45 155 60 155\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3.5\"/>",
      "<circle cx=\"172\" cy=\"118\" r=\"1.5\" fill=\"#38bdf8\"/> <circle cx=\"178\" cy=\"125\" r=\"1.5\" fill=\"#38bdf8\"/> <circle cx=\"170\" cy=\"132\" r=\"1.5\" fill=\"#38bdf8\"/> <circle cx=\"182\" cy=\"135\" r=\"1.5\" fill=\"#38bdf8\"/>",
      "<line x1=\"75\" y1=\"135\" x2=\"110\" y2=\"135\" stroke=\"#15803d\" stroke-width=\"2.5\"/> <ellipse cx=\"92\" cy=\"172\" rx=\"45\" ry=\"6\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "lanterna-trilha",
    "name": "Lanterna com Luz Brilhante",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "L A N T E R N A",
    "colors": [
      "#f59e0b",
      "#fde047",
      "#1e293b",
      "#ffffff"
    ],
    "tags": [
      "facho",
      "luz",
      "pilha",
      "trilha",
      "acampamento"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo tubular estriado da lanterna de trilha.",
      "2. Trace o CONE DO REFLETOR LARGO NA PONTA com a lente de vidro.",
      "3. Faça o BOTÃO INTERRUPTOR DE LIGAR no corpo emborrachado.",
      "4. Desenhe o FEIXE CÔNICO DE LUZ BRILHANTE iluminando a escuridão.",
      "5. Adicione a alça de pulso e ranhuras antiderrapantes."
    ],
    "layers": [
      "<rect x=\"45\" y=\"105\" width=\"65\" height=\"25\" rx=\"5\" fill=\"#eab308\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"110,105 135,92 135,142 110,130\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"135\" cy=\"117\" rx=\"5\" ry=\"25\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"70\" y=\"100\" width=\"12\" height=\"6\" rx=\"2\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"140,117 185,80 185,155\" fill=\"#fef08a\" opacity=\"0.6\"/>",
      "<path d=\"M45 117 C35 117 35 135 45 135\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"58\" y1=\"108\" x2=\"58\" y2=\"127\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"68\" y1=\"108\" x2=\"68\" y2=\"127\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "violao-acustico",
    "name": "Violão de Seis Cordas",
    "category": "objetos",
    "sub": "musica",
    "diff": "medio",
    "word": "V I O L Ã O",
    "colors": [
      "#b45309",
      "#d97706",
      "#fef3c7",
      "#1e293b"
    ],
    "tags": [
      "cordas",
      "boca",
      "música",
      "braço",
      "melodia"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo em formato de '8' com bojo superior menor e inferior maior.",
      "2. Trace o BRAÇO LONGO COM TRASTES METÁLICOS e a cabeça com as tarraxas.",
      "3. Faça a BOCA CIRCULAR CENTRAL e o cavalete onde prendem as cordas.",
      "4. Desenhe as SEIS CORDAS PARALELAS VIBRANDO com notas musicais flutuando.",
      "5. Adicione as tarraxas douradas de afinação e o escudo protetor da palheta."
    ],
    "layers": [
      "<path d=\"M85 70 C70 70 65 85 75 95 C65 105 60 135 78 150 C95 165 125 160 132 145 C142 125 130 102 120 95 C130 85 125 70 110 70 Z\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"94\" y=\"25\" width=\"8\" height=\"50\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"92,15 104,15 104,25 92,25\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"98\" cy=\"98\" r=\"12\" fill=\"#1e293b\"/> <circle cx=\"98\" cy=\"98\" r=\"15\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <rect x=\"88\" y=\"132\" width=\"20\" height=\"7\" rx=\"2\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<line x1=\"95\" y1=\"20\" x2=\"95\" y2=\"132\" stroke=\"#e2e8f0\" stroke-width=\"1\"/> <line x1=\"97\" y1=\"20\" x2=\"97\" y2=\"132\" stroke=\"#e2e8f0\" stroke-width=\"1\"/> <line x1=\"99\" y1=\"20\" x2=\"99\" y2=\"132\" stroke=\"#e2e8f0\" stroke-width=\"1\"/> <line x1=\"101\" y1=\"20\" x2=\"101\" y2=\"132\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>",
      "<circle cx=\"90\" cy=\"18\" r=\"1.8\" fill=\"#facc15\"/> <circle cx=\"90\" cy=\"22\" r=\"1.8\" fill=\"#facc15\"/> <circle cx=\"106\" cy=\"18\" r=\"1.8\" fill=\"#facc15\"/> <circle cx=\"106\" cy=\"22\" r=\"1.8\" fill=\"#facc15\"/> <path d=\"M145 75 Q155 70 152 60 Q145 68 140 65\" fill=\"#8b5cf6\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "piano-teclado",
    "name": "Teclado com Teclas Brancas",
    "category": "objetos",
    "sub": "musica",
    "diff": "facil",
    "word": "P I A N O",
    "colors": [
      "#1e293b",
      "#ffffff",
      "#cbd5e1",
      "#facc15"
    ],
    "tags": [
      "teclas",
      "notas",
      "música",
      "som",
      "canção"
    ],
    "stepsDesc": [
      "1. Desenhe o gabinete retangular do teclado ou piano de cauda com base firme.",
      "2. Trace a FILEIRA DE TECLAS BRANCAS ALINHADAS com espaçamento regular.",
      "3. Faça as TECLAS PRETAS EM GRUPOS RÍTMICOS DE DUAS E TRÊS.",
      "4. Desenhe o atril de partitura no topo com uma folha de música aberta.",
      "5. Adicione notas musicais coloridas dançando no ar saindo das teclas."
    ],
    "layers": [
      "<rect x=\"35\" y=\"85\" width=\"130\" height=\"55\" rx=\"5\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <rect x=\"42\" y=\"98\" width=\"116\" height=\"38\" rx=\"2\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"53\" y1=\"98\" x2=\"53\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"64\" y1=\"98\" x2=\"64\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"75\" y1=\"98\" x2=\"75\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"86\" y1=\"98\" x2=\"86\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"97\" y1=\"98\" x2=\"97\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"108\" y1=\"98\" x2=\"108\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"119\" y1=\"98\" x2=\"119\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"130\" y1=\"98\" x2=\"130\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"141\" y1=\"98\" x2=\"141\" y2=\"136\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"49\" y=\"98\" width=\"7\" height=\"23\" fill=\"#1e293b\"/> <rect x=\"60\" y=\"98\" width=\"7\" height=\"23\" fill=\"#1e293b\"/> <rect x=\"82\" y=\"98\" width=\"7\" height=\"23\" fill=\"#1e293b\"/> <rect x=\"93\" y=\"98\" width=\"7\" height=\"23\" fill=\"#1e293b\"/> <rect x=\"104\" y=\"98\" width=\"7\" height=\"23\" fill=\"#1e293b\"/> <rect x=\"126\" y=\"98\" width=\"7\" height=\"23\" fill=\"#1e293b\"/> <rect x=\"137\" y=\"98\" width=\"7\" height=\"23\" fill=\"#1e293b\"/>",
      "<polygon points=\"75,85 70,60 130,60 125,85\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"78\" y1=\"70\" x2=\"122\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <line x1=\"78\" y1=\"76\" x2=\"122\" y2=\"76\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<path d=\"M145 60 Q152 48 160 52\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.2\"/> <circle cx=\"160\" cy=\"52\" r=\"3.5\" fill=\"#ef4444\"/> <path d=\"M40 65 Q48 52 56 56\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2.2\"/> <circle cx=\"56\" cy=\"56\" r=\"3.5\" fill=\"#3b82f6\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "bateria-musical",
    "name": "Bateria com Tambores e Pratos",
    "category": "objetos",
    "sub": "musica",
    "diff": "desafio",
    "word": "B A T E R I A",
    "colors": [
      "#dc2626",
      "#facc15",
      "#cbd5e1",
      "#1e293b"
    ],
    "tags": [
      "baquetas",
      "pratos",
      "ritmo",
      "bumbo",
      "show"
    ],
    "stepsDesc": [
      "1. Desenhe o grande bumbo cilíndrico central com pele redonda.",
      "2. Trace os DOIS TONS MENORES NO TOPO e a caixa de som com esteira.",
      "3. Faça os DOIS PRATOS DE BRONZE (chimbal e ataque) nos pedestais metálicos.",
      "4. Desenhe as baquetas de madeira cruzadas prontas para tocar o ritmo.",
      "5. Adicione as vibrações sonoras 'TUM DUM TA!' e os aros cromados."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"130\" r=\"32\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <circle cx=\"100\" cy=\"130\" r=\"26\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"80\" cy=\"85\" rx=\"16\" ry=\"10\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"120\" cy=\"85\" rx=\"16\" ry=\"10\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"50\" cy=\"115\" rx=\"15\" ry=\"9\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"45\" cy=\"65\" rx=\"20\" ry=\"5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"45\" y1=\"65\" x2=\"45\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"155\" cy=\"65\" rx=\"20\" ry=\"5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"155\" y1=\"65\" x2=\"155\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"75\" y1=\"110\" x2=\"105\" y2=\"85\" stroke=\"#ca8a04\" stroke-width=\"2.8\" stroke-linecap=\"round\"/> <line x1=\"125\" y1=\"110\" x2=\"95\" y2=\"85\" stroke=\"#ca8a04\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,122 103,130 97,130\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"134\" r=\"3\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "trompete-dourado",
    "name": "Trompete Musical Reluzente",
    "category": "objetos",
    "sub": "musica",
    "diff": "medio",
    "word": "T R O M P E T E",
    "colors": [
      "#f59e0b",
      "#fde047",
      "#b45309",
      "#ffffff"
    ],
    "tags": [
      "válvulas",
      "campana",
      "vento",
      "som",
      "jazz"
    ],
    "stepsDesc": [
      "1. Desenhe os TUBOS DE LATÃO DOURADO CURVADOS em voltas elegantes.",
      "2. Trace a GRANDE CAMPANA CÔNICA ABERTA por onde sai o som potente.",
      "3. Faça os TRÊS PISTOS/VÁLVULAS VERTICAIS com botões de apertar no topo.",
      "4. Desenhe o bocal afunilado onde o músico sopra e o anel de apoio do dedo.",
      "5. Adicione as ondas sonoras douradas saindo da campana com notas musicais."
    ],
    "layers": [
      "<path d=\"M45 105 L130 105 L155 85 L155 125 L130 105\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"155\" cy=\"105\" rx=\"8\" ry=\"22\" fill=\"#eab308\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M55 105 L55 120 L120 120 L120 105\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<rect x=\"80\" y=\"88\" width=\"6\" height=\"24\" rx=\"2\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <rect x=\"92\" y=\"88\" width=\"6\" height=\"24\" rx=\"2\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <rect x=\"104\" y=\"88\" width=\"6\" height=\"24\" rx=\"2\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"83\" cy=\"85\" r=\"3\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"95\" cy=\"85\" r=\"3\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"107\" cy=\"85\" r=\"3\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<polygon points=\"45,103 35,100 35,110 45,107\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M168 95 Q178 105 168 115\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M176 88 Q188 105 176 122\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-linecap=\"round\"/> <circle cx=\"185\" cy=\"80\" r=\"3\" fill=\"#8b5cf6\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "saxofone-jazz",
    "name": "Saxofone Curvo Dourado",
    "category": "objetos",
    "sub": "musica",
    "diff": "desafio",
    "word": "S A X O F O N E",
    "colors": [
      "#d97706",
      "#fbbf24",
      "#78350f",
      "#ffffff"
    ],
    "tags": [
      "chaves",
      "curva",
      "bocal",
      "música",
      "jazz"
    ],
    "stepsDesc": [
      "1. Desenhe o tubo cônico de latão dourado em curva de 'J' invertido.",
      "2. Trace a GRANDE CAMPANA CURVADA PARA CIMA abrindo em cone largo.",
      "3. Faça as CHAVES E SAPATILHAS REDONDAS alinhadas ao longo do corpo.",
      "4. Desenhe o tudel superior fino com o bocal e a palheta de madeira.",
      "5. Adicione notas de jazz elegantes e brilho reluzente no metal dourado."
    ],
    "layers": [
      "<path d=\"M80 40 L85 125 C85 155 125 155 130 125 L135 110\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"12\" stroke-linecap=\"round\"/> <path d=\"M80 40 L85 125 C85 155 125 155 130 125 L135 110\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"125,115 150,90 162,102 135,125\" fill=\"#eab308\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"156\" cy=\"96\" rx=\"9\" ry=\"16\" transform=\"rotate(-40 156 96)\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"85\" cy=\"70\" r=\"3.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"85\" cy=\"82\" r=\"3.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"85\" cy=\"94\" r=\"3.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"86\" cy=\"106\" r=\"3.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"88\" cy=\"118\" r=\"3.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M80 40 Q75 30 65 35\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"4\" stroke-linecap=\"round\"/> <rect x=\"58\" y=\"32\" width=\"8\" height=\"5\" rx=\"1.5\" fill=\"#1e293b\"/>",
      "<path d=\"M165 85 Q175 75 168 65\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"2\"/> <circle cx=\"168\" cy=\"65\" r=\"3\" fill=\"#8b5cf6\"/> <path d=\"M150 70 Q160 55 152 45\" fill=\"none\" stroke=\"#ec4899\" stroke-width=\"2\"/> <circle cx=\"152\" cy=\"45\" r=\"3\" fill=\"#ec4899\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "flauta-doce",
    "name": "Flauta Doce de Madeira",
    "category": "objetos",
    "sub": "musica",
    "diff": "facil",
    "word": "F L A U T A",
    "colors": [
      "#78350f",
      "#b45309",
      "#fef3c7",
      "#1e293b"
    ],
    "tags": [
      "furos",
      "sopro",
      "música",
      "escola",
      "madeira"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo cilíndrico longo e esguio da flauta doce de madeira.",
      "2. Trace o BOCAL BISELADO NO TOPO com a janela retangular de sopro.",
      "3. Faça os OITO ORIFÍCIOS/FUROS CIRCULARES alinhados em ordem.",
      "4. Desenhe os anéis decorativos torneados nas juntas da madeira nobre.",
      "5. Adicione notas musicais suaves saindo pelo pé da flauta."
    ],
    "layers": [
      "<polygon points=\"94,30 106,30 108,165 92,165\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M94 30 L90 45 L110 45 L106 30 Z\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"97\" y=\"48\" width=\"6\" height=\"5\" rx=\"1\" fill=\"#1e293b\"/>",
      "<circle cx=\"100\" cy=\"68\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"80\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"92\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"104\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"116\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"128\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"140\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"100\" cy=\"152\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"100\" cy=\"60\" rx=\"7\" ry=\"2\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <ellipse cx=\"100\" cy=\"146\" rx=\"8\" ry=\"2\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<path d=\"M100 170 Q110 180 105 190\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/> <circle cx=\"105\" cy=\"190\" r=\"3.5\" fill=\"#3b82f6\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "microfone-palco",
    "name": "Microfone de Show Musical",
    "category": "objetos",
    "sub": "musica",
    "diff": "facil",
    "word": "M I C R O F O N E",
    "colors": [
      "#64748b",
      "#3b82f6",
      "#1e293b",
      "#facc15"
    ],
    "tags": [
      "canto",
      "globo",
      "pedestal",
      "voz",
      "show"
    ],
    "stepsDesc": [
      "1. Desenhe a CÁPSULA ESFÉRICA DE METAL no topo e o cabo cônico anatômico.",
      "2. Trace a GRADE QUADRICULADA OU TRUÇADA de proteção acústica do globo.",
      "3. Faça o BOTÃO DESLIZANTE 'ON/OFF' no corpo do microfone.",
      "4. Desenhe o anel metálico de trava e o conector XLR na base.",
      "5. Adicione ondas sonoras coloridas expandindo como num show de música."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"65\" r=\"24\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"92,89 108,89 104,160 96,160\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"80\" y1=\"65\" x2=\"120\" y2=\"65\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"83\" y1=\"55\" x2=\"117\" y2=\"55\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"83\" y1=\"75\" x2=\"117\" y2=\"75\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"100\" y1=\"41\" x2=\"100\" y2=\"89\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"90\" y1=\"45\" x2=\"90\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"110\" y1=\"45\" x2=\"110\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<rect x=\"97\" y=\"105\" width=\"6\" height=\"15\" rx=\"2\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <rect x=\"98\" y=\"107\" width=\"4\" height=\"6\" rx=\"1\" fill=\"#ffffff\"/>",
      "<rect x=\"91\" y=\"87\" width=\"18\" height=\"5\" rx=\"1.5\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"100\" y1=\"160\" x2=\"100\" y2=\"185\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<path d=\"M65 45 Q50 65 65 85\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M52 35 Q30 65 52 95\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M135 45 Q150 65 135 85\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M148 35 Q170 65 148 95\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "bola-de-futebol",
    "name": "Bola Clássica de Futebol",
    "category": "objetos",
    "sub": "esporte",
    "diff": "medio",
    "word": "F U T E B O L",
    "colors": [
      "#ffffff",
      "#1e293b",
      "#16a34a",
      "#e2e8f0"
    ],
    "tags": [
      "gomos",
      "pentágono",
      "chute",
      "gol",
      "jogo"
    ],
    "stepsDesc": [
      "1. Desenhe a circunferência redonda perfeita da bola oficial de campo.",
      "2. Trace o PENTÁGONO PRETO CENTRAL no meio exato da bola.",
      "3. Faça os CINCO PENTÁGONOS PERIFÉRICOS interligados por linhas de costura.",
      "4. Desenhe os hexágonos brancos completando o padrão geométrico clássico.",
      "5. Adicione sombras volumétricas que dão forma esférica tridimensional."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<polygon points=\"100,82 115,93 109,111 91,111 85,93\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"82\" x2=\"100\" y2=\"60\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"115\" y1=\"93\" x2=\"135\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"109\" y1=\"111\" x2=\"125\" y2=\"130\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"91\" y1=\"111\" x2=\"75\" y2=\"130\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"85\" y1=\"93\" x2=\"65\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"100,60 85,55 90,46 110,46 115,55\" fill=\"#1e293b\"/> <polygon points=\"135,85 145,72 153,82 150,95 138,98\" fill=\"#1e293b\"/> <polygon points=\"125,130 140,132 142,142 128,148 118,140\" fill=\"#1e293b\"/> <polygon points=\"75,130 60,132 58,142 72,148 82,140\" fill=\"#1e293b\"/> <polygon points=\"65,85 55,72 47,82 50,95 62,98\" fill=\"#1e293b\"/>",
      "<path d=\"M60 70 A45 45 0 0 1 120 50\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"160\" rx=\"42\" ry=\"7\" fill=\"#64748b\" opacity=\"0.3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "bola-de-basquete",
    "name": "Bola Laranja de Basquete",
    "category": "objetos",
    "sub": "esporte",
    "diff": "facil",
    "word": "B A S Q U E T E",
    "colors": [
      "#ea580c",
      "#1e293b",
      "#f97316",
      "#ffffff"
    ],
    "tags": [
      "linhas",
      "cesta",
      "quique",
      "quadra",
      "laranja"
    ],
    "stepsDesc": [
      "1. Desenhe a grande esfera redonda alaranjada da bola de basquete.",
      "2. Trace a LINHA PRETA VERTICAL e a LINHA PRETA HORIZONTAL cruzando ao centro.",
      "3. Faça as DUAS LINHAS CURVAS LATERAIS CÔNCAVAS que definem os gomos.",
      "4. Desenhe os micro-pontinhos antiderrapantes da borracha texturizada.",
      "5. Adicione as linhas de movimento dinâmico da bola quicando com energia."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<line x1=\"100\" y1=\"45\" x2=\"100\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"45\" y1=\"100\" x2=\"155\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<path d=\"M65 52 C85 75 85 125 65 148\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/> <path d=\"M135 52 C115 75 115 125 135 148\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<circle cx=\"85\" cy=\"85\" r=\"1.5\" fill=\"#c2410c\"/> <circle cx=\"115\" cy=\"85\" r=\"1.5\" fill=\"#c2410c\"/> <circle cx=\"85\" cy=\"115\" r=\"1.5\" fill=\"#c2410c\"/> <circle cx=\"115\" cy=\"115\" r=\"1.5\" fill=\"#c2410c\"/>",
      "<path d=\"M60 65 A45 45 0 0 1 110 50\" fill=\"none\" stroke=\"#fed7aa\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M90 162 Q100 170 110 162\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "trofeu-campeao",
    "name": "Troféu Dourado de Campeão",
    "category": "objetos",
    "sub": "esporte",
    "diff": "facil",
    "word": "T R O F É U",
    "colors": [
      "#f59e0b",
      "#fde047",
      "#1e293b",
      "#b45309"
    ],
    "tags": [
      "alças",
      "base",
      "estrela",
      "vitória",
      "ouro"
    ],
    "stepsDesc": [
      "1. Desenhe a taça cônica dourada com base estreita e topo largo.",
      "2. Trace as DUAS GRANDES ALÇAS CURVADAS EM ASA laterais.",
      "3. Faça a HASTE TORNEADA E A BASE QUADRADA DE MÁRMORE ESCURO.",
      "4. Desenhe a PLACA DOURADA COM O NÚMERO '1' DE CAMPEÃO no centro.",
      "5. Adicione estrelas brilhantes e confetes festivos comemorando a vitória."
    ],
    "layers": [
      "<path d=\"M65 55 L75 115 C75 130 125 130 125 115 L135 55 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M68 65 C40 65 40 105 73 105\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <path d=\"M132 65 C160 65 160 105 127 105\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<rect x=\"94\" y=\"125\" width=\"12\" height=\"18\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"70\" y=\"143\" width=\"60\" height=\"25\" rx=\"3\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"80\" y=\"149\" width=\"40\" height=\"13\" rx=\"2\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/> <text x=\"100\" y=\"95\" font-family=\"Arial\" font-size=\"24\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">1</text>",
      "<polygon points=\"50,45 52,38 57,41 52,44\" fill=\"#f59e0b\"/> <polygon points=\"150,45 148,38 143,41 148,44\" fill=\"#f59e0b\"/> <circle cx=\"45\" cy=\"130\" r=\"3\" fill=\"#ef4444\"/> <circle cx=\"155\" cy=\"130\" r=\"3\" fill=\"#3b82f6\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "medalha-ouro",
    "name": "Medalha com Fita Listrada",
    "category": "objetos",
    "sub": "esporte",
    "diff": "facil",
    "word": "M E D A L H A",
    "colors": [
      "#f59e0b",
      "#ef4444",
      "#2563eb",
      "#fde047"
    ],
    "tags": [
      "fita",
      "estrela",
      "número_1",
      "campeão",
      "ouro"
    ],
    "stepsDesc": [
      "1. Desenhe o grande círculo dourado espesso da medalha de honra.",
      "2. Trace a FITA DE CETIM EM 'V' LISTRADA saindo por cima do passador.",
      "3. Faça a ESTRELA DE CINCO PONTAS EM ALTO RELEVO no centro da medalha.",
      "4. Desenhe os RAMOS DE LOURO CIRCUNDANDO A ESTRELA da vitória.",
      "5. Adicione raios de brilho cintilante no ouro polido."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"125\" r=\"36\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <circle cx=\"100\" cy=\"125\" r=\"30\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\"/>",
      "<polygon points=\"75,25 92,90 108,90 125,25 110,25 100,65 90,25\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"85,25 96,65 104,65 115,25\" fill=\"#ef4444\"/>",
      "<polygon points=\"100,108 104,118 115,118 106,124 110,135 100,129 90,135 94,124 85,118 96,118\" fill=\"#eab308\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<rect x=\"92\" y=\"86\" width=\"16\" height=\"6\" rx=\"2\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"132,100 134,95 139,97 134,99\" fill=\"#ffffff\"/> <polygon points=\"68,145 70,140 75,142 70,144\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "pipa-com-rabiola",
    "name": "Pipa Losango com Rabiola",
    "category": "objetos",
    "sub": "brinquedos",
    "diff": "facil",
    "word": "P I P A",
    "colors": [
      "#ef4444",
      "#facc15",
      "#3b82f6",
      "#10b981"
    ],
    "tags": [
      "varetas",
      "lacinhos",
      "vento",
      "linha",
      "brincar"
    ],
    "stepsDesc": [
      "1. Desenhe o formato de LOSANGO GEOMÉTRICO PERFEITO da pipa no ar.",
      "2. Trace a VARETA CENTRAL RETA e a VARETA CURVADA EM ARCO transversal.",
      "3. Faça as QUATRO PARTES COLORIDAS EM CORES VIBRANTES contrastantes.",
      "4. Desenhe a LONGA LINHA DE RABIOLA ONDULADA descendo com laços de papel.",
      "5. Adicione nuvens fofas ao redor mostrando a pipa voando bem alto no céu azul."
    ],
    "layers": [
      "<polygon points=\"100,35 145,85 100,145 55,85\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M55 85 Q100 65 145 85\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,35 145,85 100,80\" fill=\"#facc15\"/> <polygon points=\"100,145 145,85 100,80\" fill=\"#3b82f6\"/> <polygon points=\"100,145 55,85 100,80\" fill=\"#10b981\"/>",
      "<path d=\"M100 145 C95 160 115 170 105 185\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"98,155 104,152 108,157 102,160\" fill=\"#f43f5e\"/> <polygon points=\"108,168 114,165 118,170 112,173\" fill=\"#facc15\"/> <polygon points=\"100,180 106,177 110,182 104,185\" fill=\"#3b82f6\"/>",
      "<path d=\"M35 50 Q45 42 55 50 Q65 42 75 50\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"80\" x2=\"70\" y2=\"120\" stroke=\"#cbd5e1\" stroke-width=\"1.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "peao-de-madeira",
    "name": "Pião de Madeira com Ponta",
    "category": "objetos",
    "sub": "brinquedos",
    "diff": "facil",
    "word": "P I Ã O",
    "colors": [
      "#78350f",
      "#ef4444",
      "#facc15",
      "#1e293b"
    ],
    "tags": [
      "cordão",
      "girar",
      "madeira",
      "brinquedo",
      "ponta"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo em formato de gota invertida largo em cima e pontudo embaixo.",
      "2. Trace a PONTA DE METAL AFIADA que gira no chão.",
      "3. Faça a COROA CILÍNDRICA NO TOPO onde se enrola o barbante.",
      "4. Desenhe as FAIXAS COLORIDAS PINTADAS NO BOJO que criam efeito ao girar.",
      "5. Adicione as elipses de rotação rápida 'ZUM ZUM' e o barbante solto ao lado."
    ],
    "layers": [
      "<path d=\"M60 80 C60 65 140 65 140 80 C140 105 105 140 100 150 C95 140 60 105 60 80 Z\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"97,150 103,150 100,165\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"94\" y=\"52\" width=\"12\" height=\"15\" rx=\"3\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"50\" r=\"4\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M63 88 C75 95 125 95 137 88\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\"/> <path d=\"M70 102 C80 108 120 108 130 102\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"3\"/> <path d=\"M78 116 C85 120 115 120 122 116\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\"/>",
      "<ellipse cx=\"100\" cy=\"165\" rx=\"25\" ry=\"5\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\"/> <path d=\"M120 155 Q135 160 145 150\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "ioio-brinquedo",
    "name": "Ioiô com Cordinha",
    "category": "objetos",
    "sub": "brinquedos",
    "diff": "facil",
    "word": "I O I Ô",
    "colors": [
      "#06b6d4",
      "#facc15",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "sobe_desce",
      "dedo",
      "cordinha",
      "truques",
      "girar"
    ],
    "stepsDesc": [
      "1. Desenhe os DOIS DISCOS CIRCULARES ESPESSOS unidos pelo eixo central.",
      "2. Trace o ESPAÇO ENTRE OS DISCOS onde a cordinha fica enrolada.",
      "3. Faça a LONGA CORDA DE ALGODÃO SUBINDO com o laço de dedo no topo.",
      "4. Desenhe as ESTAMPAS DE ESTRELAS OU CÍRCULOS na face externa do ioiô.",
      "5. Adicione as linhas de movimento de subida e descida rápida."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"135\" rx=\"36\" ry=\"24\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"100\" cy=\"130\" rx=\"36\" ry=\"24\" fill=\"#60a5fa\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"100\" cy=\"130\" rx=\"24\" ry=\"15\" fill=\"#93c5fd\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"100\" y1=\"130\" x2=\"100\" y2=\"45\" stroke=\"#ca8a04\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"40\" r=\"5\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2.2\"/>",
      "<polygon points=\"100,122 102,128 108,128 103,132 105,138 100,134 95,138 97,132 92,128 98,128\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<line x1=\"60\" y1=\"110\" x2=\"60\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <line x1=\"140\" y1=\"110\" x2=\"140\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "urso-de-pelucia",
    "name": "Ursinho de Pelúcia com Laço",
    "category": "objetos",
    "sub": "brinquedos",
    "diff": "facil",
    "word": "P E L Ú C I A",
    "colors": [
      "#b45309",
      "#fed7aa",
      "#ef4444",
      "#1e293b"
    ],
    "tags": [
      "costura",
      "laço",
      "fofo",
      "dormir",
      "amigo"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça redonda fofa e o corpinho rechonchudo do ursinho.",
      "2. Trace as DUAS ORELHINHAS ARREDONDADAS e o focinho oval macio.",
      "3. Faça os OLHINHOS DE BOTÃO BRILHANTES, nariz triangular e boca sorridente.",
      "4. Desenhe os BRAÇOS E PERNINHAS ACOLCHOADAS com almofadinhas nas patinhas.",
      "5. Adicione um lindo LAÇO DE FITA DE CETIM no pescoço e costuras felpudas."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"32\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"135\" rx=\"34\" ry=\"38\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"75\" cy=\"55\" r=\"14\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"75\" cy=\"55\" r=\"7\" fill=\"#fed7aa\"/> <circle cx=\"125\" cy=\"55\" r=\"14\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"125\" cy=\"55\" r=\"7\" fill=\"#fed7aa\"/> <ellipse cx=\"100\" cy=\"90\" rx=\"15\" ry=\"11\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"88\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"89\" cy=\"76\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"113\" cy=\"76\" r=\"1.5\" fill=\"#ffffff\"/> <polygon points=\"100,85 96,89 104,89\" fill=\"#1e293b\"/> <path d=\"M96 93 Q100 97 104 93\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"65\" cy=\"125\" rx=\"12\" ry=\"18\" transform=\"rotate(25 65 125)\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"135\" cy=\"125\" rx=\"12\" ry=\"18\" transform=\"rotate(-25 135 125)\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"78\" cy=\"165\" rx=\"14\" ry=\"11\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"78\" cy=\"165\" rx=\"8\" ry=\"6\" fill=\"#fed7aa\"/> <ellipse cx=\"122\" cy=\"165\" rx=\"14\" ry=\"11\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"122\" cy=\"165\" rx=\"8\" ry=\"6\" fill=\"#fed7aa\"/>",
      "<polygon points=\"100,108 88,102 92,114 100,110 108,114 112,102\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"108\" r=\"4\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "blocos-de-montar",
    "name": "Castelo de Blocos de Madeira",
    "category": "objetos",
    "sub": "brinquedos",
    "diff": "facil",
    "word": "B L O C O S",
    "colors": [
      "#ef4444",
      "#3b82f6",
      "#facc15",
      "#10b981"
    ],
    "tags": [
      "cubos",
      "triângulos",
      "construir",
      "empilhar",
      "formas"
    ],
    "stepsDesc": [
      "1. Desenhe os blocos de base retangulares e quadrados empilhados.",
      "2. Trace a TORRE CENTRAL ELEVADA COM UM TRIÂNGULO NO TOPO.",
      "3. Faça os CILINDROS E COLUNAS formando um castelinho colorido.",
      "4. Desenhe as portinhas em arco recortadas nos blocos de madeira.",
      "5. Adicione texturas das cores primárias: azul, vermelho, amarelo e verde."
    ],
    "layers": [
      "<rect x=\"50\" y=\"140\" width=\"100\" height=\"25\" rx=\"2\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"60\" y=\"105\" width=\"25\" height=\"35\" rx=\"2\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"115\" y=\"105\" width=\"25\" height=\"35\" rx=\"2\" fill=\"#10b981\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"85\" y=\"115\" width=\"30\" height=\"25\" rx=\"2\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,85 100,60 115,85\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <rect x=\"90\" y=\"85\" width=\"20\" height=\"30\" rx=\"2\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M93 140 C93 130 107 130 107 140 Z\" fill=\"#1e293b\"/> <circle cx=\"72\" cy=\"120\" r=\"5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"128\" cy=\"120\" r=\"5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<line x1=\"35\" y1=\"165\" x2=\"165\" y2=\"165\" stroke=\"#64748b\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "bola-de-praia",
    "name": "Bola Inflável Listrada",
    "category": "objetos",
    "sub": "brinquedos",
    "diff": "facil",
    "word": "P R A I A",
    "colors": [
      "#ef4444",
      "#3b82f6",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "gomos",
      "cores",
      "piscina",
      "areia",
      "brincar"
    ],
    "stepsDesc": [
      "1. Desenhe o grande círculo inflável da bola de praia leve e flutuante.",
      "2. Trace o CÍRCULO CENTRAL BRANCO NO TOPO onde fica a válvula.",
      "3. Faça os SEIS GOMOS CURVADOS COLORIDOS alternando cores do verão.",
      "4. Desenhe a válvulazinha de ar transparente encaixada no topo.",
      "5. Adicione o reflexo brilhante do sol de verão no plástico inflável."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<circle cx=\"100\" cy=\"55\" r=\"10\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M100 55 C80 65 55 85 45 100 C60 125 80 145 100 155 C90 125 90 85 100 55 Z\" fill=\"#ef4444\"/> <path d=\"M100 55 C120 65 145 85 155 100 C140 125 120 145 100 155 C110 125 110 85 100 55 Z\" fill=\"#3b82f6\"/> <path d=\"M100 55 C92 85 92 125 100 155 C108 125 108 85 100 55 Z\" fill=\"#facc15\"/>",
      "<path d=\"M45 100 C45 125 65 145 100 155\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M155 100 C155 125 135 145 100 155\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <circle cx=\"100\" cy=\"55\" r=\"10\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M60 75 A45 45 0 0 1 95 62\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"160\" rx=\"40\" ry=\"6\" fill=\"#cbd5e1\" opacity=\"0.4\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "dado-jogos",
    "name": "Dado com Pontinhos Pretos",
    "category": "objetos",
    "sub": "brinquedos",
    "diff": "facil",
    "word": "D A D O",
    "colors": [
      "#ffffff",
      "#1e293b",
      "#ef4444",
      "#cbd5e1"
    ],
    "tags": [
      "números",
      "pontos",
      "tabuleiro",
      "sorte",
      "jogo"
    ],
    "stepsDesc": [
      "1. Desenhe o CUBO ISOMÉTRICO TRIDIMENSIONAL com três faces visíveis.",
      "2. Trace os CANTOS ARREDONDADOS SUAVES característicos dos dados de tabuleiro.",
      "3. Faça os PONTINHOS PRETOS AFUNDADOS (PIPS) na face superior (1 ponto).",
      "4. Desenhe os três pontinhos na face esquerda e os cinco na face direita.",
      "5. Adicione o sombreamento sutil dando profundidade e relevo ao dado."
    ],
    "layers": [
      "<polygon points=\"100,50 145,75 100,100 55,75\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"55,75 100,100 100,150 55,125\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"145,75 100,100 100,150 145,125\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"75\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"70\" cy=\"98\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"78\" cy=\"112\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"86\" cy=\"126\" r=\"5\" fill=\"#1e293b\"/>",
      "<circle cx=\"114\" cy=\"98\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"132\" cy=\"98\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"123\" cy=\"112\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"114\" cy=\"126\" r=\"5\" fill=\"#1e293b\"/> <circle cx=\"132\" cy=\"126\" r=\"5\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"100\" cy=\"155\" rx=\"42\" ry=\"8\" fill=\"#64748b\" opacity=\"0.3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "ferradura-sorte",
    "name": "Ferradura da Boa Sorte",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "F E R R A D U R A",
    "colors": [
      "#64748b",
      "#94a3b8",
      "#facc15",
      "#1e293b"
    ],
    "tags": [
      "cavalo",
      "ferro",
      "furos",
      "sorte",
      "fazenda"
    ],
    "stepsDesc": [
      "1. Desenhe o formato clássico em U arredondado da ferradura de cavalo.",
      "2. Trace a ranhura interna paralela de fixação dos cravos.",
      "3. Faça os SETE FUROS QUADRADOS DOS CRAVOS (número da sorte!).",
      "4. Desenhe o TREVO DE QUATRO FOLHAS DA SORTE no centro.",
      "5. Adicione o brilho cintilante do metal prateado da sorte."
    ],
    "layers": [
      "<path d=\"M68 65 C68 125 132 125 132 65 L145 65 C145 145 55 145 55 65 Z\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M75 75 C75 115 125 115 125 75\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"62\" y=\"80\" width=\"4\" height=\"4\" fill=\"#1e293b\"/> <rect x=\"62\" y=\"100\" width=\"4\" height=\"4\" fill=\"#1e293b\"/> <rect x=\"68\" y=\"120\" width=\"4\" height=\"4\" fill=\"#1e293b\"/> <rect x=\"98\" y=\"132\" width=\"4\" height=\"4\" fill=\"#1e293b\"/> <rect x=\"128\" y=\"120\" width=\"4\" height=\"4\" fill=\"#1e293b\"/> <rect x=\"134\" y=\"100\" width=\"4\" height=\"4\" fill=\"#1e293b\"/> <rect x=\"134\" y=\"80\" width=\"4\" height=\"4\" fill=\"#1e293b\"/>",
      "<circle cx=\"100\" cy=\"85\" r=\"5\" fill=\"#22c55e\"/> <circle cx=\"100\" cy=\"95\" r=\"5\" fill=\"#22c55e\"/> <circle cx=\"95\" cy=\"90\" r=\"5\" fill=\"#22c55e\"/> <circle cx=\"105\" cy=\"90\" r=\"5\" fill=\"#22c55e\"/> <line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"108\" stroke=\"#15803d\" stroke-width=\"2\"/>",
      "<path d=\"M60 70 L60 85 M140 70 L140 85\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "machadinha-lenhador",
    "name": "Machado de Lenhador",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "M A C H A D O",
    "colors": [
      "#78350f",
      "#94a3b8",
      "#cbd5e1",
      "#1e293b"
    ],
    "tags": [
      "cabo",
      "lâmina",
      "lenha",
      "ferramenta",
      "corte"
    ],
    "stepsDesc": [
      "1. Desenhe o CABO CURVADO DE MADEIRA NOBRE com empunhadura ergonômica.",
      "2. Trace a CABEÇA DE AÇO FORJADO com olho de fixação e lâmina afiada.",
      "3. Faça o TOCO DE ÁRVORE CORTADO onde o machado está cravado.",
      "4. Desenhe as linhas de crescimento nos anéis da madeira.",
      "5. Adicione lascas de madeira voando do corte limpo."
    ],
    "layers": [
      "<path d=\"M125 65 C120 95 105 135 95 165 C92 172 85 170 85 162 C95 135 110 95 115 65 Z\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M110 65 L80 50 L75 80 L115 75 Z\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 50 C70 65 70 70 75 80\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"90\" cy=\"165\" rx=\"45\" ry=\"16\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"90\" cy=\"165\" rx=\"32\" ry=\"10\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"1.8\"/>",
      "<polygon points=\"65,95 72,92 70,98\" fill=\"#b45309\"/> <polygon points=\"60,115 68,110 64,118\" fill=\"#b45309\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "martelo-marcenaria",
    "name": "Martelo com Prego",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "M A R T E L O",
    "colors": [
      "#78350f",
      "#64748b",
      "#cbd5e1",
      "#1e293b"
    ],
    "tags": [
      "bater",
      "prego",
      "cabo",
      "ferramenta",
      "marceneiro"
    ],
    "stepsDesc": [
      "1. Desenhe o cabo reto de madeira torneada do martelo.",
      "2. Trace a CABEÇA DE FERRO PESADA COM O BATENTE CILÍNDRICO e as UNHAS DE ARRANCAR PREGO.",
      "3. Faça o PREGO DE METAL SENDO CRAVADO na tábua de madeira.",
      "4. Desenhe as linhas de impacto 'TOC TOC!' e faíscas.",
      "5. Finalize texturas da madeira e brilho do aço."
    ],
    "layers": [
      "<rect x=\"95\" y=\"75\" width=\"12\" height=\"95\" rx=\"4\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"75\" y=\"65\" width=\"35\" height=\"18\" rx=\"3\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M110 65 C125 65 135 75 130 88 L110 83 Z\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"68\" y1=\"74\" x2=\"52\" y2=\"74\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <polygon points=\"52,70 48,74 52,78\" fill=\"#1e293b\"/>",
      "<rect x=\"35\" y=\"145\" width=\"130\" height=\"25\" rx=\"4\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"62\" y1=\"60\" x2=\"58\" y2=\"52\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"72\" y1=\"55\" x2=\"72\" y2=\"45\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"62\" y1=\"88\" x2=\"58\" y2=\"96\" stroke=\"#f59e0b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "serrote-ferramenta",
    "name": "Serrote com Dentes Afiados",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "medio",
    "word": "S E R R O T E",
    "colors": [
      "#78350f",
      "#94a3b8",
      "#cbd5e1",
      "#1e293b"
    ],
    "tags": [
      "dentes",
      "lâmina",
      "serrar",
      "madeira",
      "corte"
    ],
    "stepsDesc": [
      "1. Desenhe a LÂMINA LARGA DE AÇO TRAPEZOIDAL afunilando até a ponta.",
      "2. Trace a FILEIRA DE DENTES AFIADOS EM ZIGUE-ZAGUE na borda inferior.",
      "3. Faça o CABO DE MADEIRA EM D com os parafusos de fixação cromados.",
      "4. Desenhe a tábua de madeira sendo serrada com serragem caindo.",
      "5. Adicione o reflexo do corte afiado na lâmina prateada."
    ],
    "layers": [
      "<polygon points=\"55,95 155,115 155,122 55,135\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 135 L62 133 L62 135 L69 133 L69 135 L76 133 L76 135 L83 133 L83 135 L90 133 L90 135 L97 133 L97 135 L104 133 L104 135 L111 133 L111 135 L118 133 L118 135 L125 133 L125 135 L132 133 L132 135 L139 133 L139 135 L146 133 L146 135 L155 122\" fill=\"#1e293b\"/>",
      "<path d=\"M55 95 C40 95 35 110 35 125 C35 140 40 145 55 135 Z\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"45\" cy=\"118\" rx=\"5\" ry=\"10\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"52\" cy=\"108\" r=\"2.5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"52\" cy=\"128\" r=\"2.5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<circle cx=\"105\" cy=\"148\" r=\"1.5\" fill=\"#eab308\"/> <circle cx=\"115\" cy=\"155\" r=\"1.5\" fill=\"#eab308\"/> <circle cx=\"125\" cy=\"150\" r=\"1.5\" fill=\"#eab308\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "pa-de-praia",
    "name": "Pazinha e Baldinho de Praia",
    "category": "objetos",
    "sub": "brinquedos",
    "diff": "facil",
    "word": "B A L D E",
    "colors": [
      "#ef4444",
      "#facc15",
      "#3b82f6",
      "#ffffff"
    ],
    "tags": [
      "areia",
      "castelo",
      "pá",
      "alça",
      "praia"
    ],
    "stepsDesc": [
      "1. Desenhe o BALDINHO TRAPEZOIDAL DE PRAIA com borda reforçada e base plana.",
      "2. Trace a ALÇA DE PLÁSTICO EM ARCO e a PÁ DE BRINQUEDO fincada ao lado.",
      "3. Faça a CABEÇA LARGA DA PÁ e o cabo com empunhadura em triângulo.",
      "4. Desenhe o montinho de areia molhada com conchinhas e estrelas-do-mar.",
      "5. Adicione marquinhas de castelo de areia e ondas da praia ao fundo."
    ],
    "layers": [
      "<polygon points=\"55,95 125,95 115,150 65,150\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"90\" cy=\"95\" rx=\"35\" ry=\"8\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M55 95 C55 60 125 60 125 95\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<polygon points=\"120,110 155,145 145,155 110,120\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"130\" y1=\"120\" x2=\"160\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <polygon points=\"155,85 168,72 175,79 162,92\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M35 155 Q80 145 130 155 Q165 150 175 160 L25 160 Z\" fill=\"#fde68a\" stroke=\"#ca8a04\" stroke-width=\"2\"/>",
      "<circle cx=\"48\" cy=\"148\" r=\"3\" fill=\"#ec4899\"/> <polygon points=\"148,152 150,147 155,149 150,152\" fill=\"#f59e0b\"/> <path d=\"M25 168 Q60 162 100 168 T175 168\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "chaleira-antiga",
    "name": "Chaleira com Apito de Vapor",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "C H A L E I R A",
    "colors": [
      "#dc2626",
      "#ffffff",
      "#1e293b",
      "#cbd5e1"
    ],
    "tags": [
      "bico",
      "vapor",
      "água",
      "quente",
      "fogão"
    ],
    "stepsDesc": [
      "1. Desenhe o bojo arredondado e gordinho da chaleira com base reta.",
      "2. Trace a ALÇA CURVADA EM ARCO NO TOPO e o bico alongado com apito.",
      "3. Faça a TAMPA REDONDA COM PUXADOR ESFÉRICO central.",
      "4. Desenhe as nuvenzinhas de vapor quente saindo pelo bico assobiando.",
      "5. Adicione o reflexo brilhante no metal esmaltado da chaleira."
    ],
    "layers": [
      "<path d=\"M60 145 C55 105 75 90 100 90 C125 90 145 105 140 145 Z\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M75 90 C75 55 125 55 125 90\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linecap=\"round\"/> <path d=\"M62 120 C48 115 42 100 48 95 L56 100\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"90\" rx=\"22\" ry=\"7\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"100\" cy=\"80\" r=\"5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M42 90 Q35 82 40 75 Q48 80 43 70\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M36 82 Q28 75 34 68\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<path d=\"M78 110 C82 125 90 135 90 140\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"50\" y1=\"152\" x2=\"150\" y2=\"152\" stroke=\"#64748b\" stroke-width=\"2.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "bule-de-cafe",
    "name": "Bule de Café Elegante",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "B U L E",
    "colors": [
      "#0284c7",
      "#ffffff",
      "#78350f",
      "#facc15"
    ],
    "tags": [
      "café",
      "alça",
      "tampa",
      "cafeteira",
      "manhã"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo cônico elegante e alto do bule de café de porcelana.",
      "2. Trace a ALÇA LATERAL EM FORMA DE ORELHA e o bico longo curvado em 'S'.",
      "3. Faça a TAMPA CÔNICA COM POMEL no topo e a base frisada.",
      "4. Desenhe o aroma espiral delicioso subindo do café quentinho.",
      "5. Adicione detalhes florais delicados na pintura da porcelana."
    ],
    "layers": [
      "<path d=\"M75 75 L65 145 C65 150 135 150 135 145 L125 75 Z\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M125 85 C148 95 148 130 120 138\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <path d=\"M72 125 C52 110 52 82 62 76 L70 82\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M73 75 Q100 62 127 75 Z\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"100\" cy=\"62\" r=\"4.5\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M60 68 Q52 58 58 50 Q66 54 62 44\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"115\" rx=\"16\" ry=\"12\" fill=\"#dbeafe\" stroke=\"#93c5fd\" stroke-width=\"1.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"4\" fill=\"#3b82f6\"/> <line x1=\"55\" y1=\"152\" x2=\"145\" y2=\"152\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "abajur-quarto",
    "name": "Abajur com Cúpula de Luz",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "A B A J U R",
    "colors": [
      "#ec4899",
      "#fef08a",
      "#64748b",
      "#ffffff"
    ],
    "tags": [
      "cúpula",
      "base",
      "luz",
      "quarto",
      "dormir"
    ],
    "stepsDesc": [
      "1. Desenhe a CÚPULA TRAPEZOIDAL DO ABAJUR que espalha a luminosidade.",
      "2. Trace o PEDESTAL CENTRAL TORNEADO e a base circular de apoio na mesa.",
      "3. Faça a CORRENTINHA COM BOLINHA para ligar e desligar a lâmpada.",
      "4. Desenhe o cone de luz aconchegante projetado para baixo.",
      "5. Adicione estampas de listras ou estrelinhas na cúpula de tecido."
    ],
    "layers": [
      "<polygon points=\"65,95 135,95 148,135 52,135\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"135\" x2=\"100\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"168\" rx=\"28\" ry=\"7\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"118\" y1=\"135\" x2=\"118\" y2=\"148\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"118\" cy=\"150\" r=\"3\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<path d=\"M52 135 L30 180 L170 180 L148 135 Z\" fill=\"#fef08a\" opacity=\"0.35\"/> <line x1=\"75\" y1=\"100\" x2=\"68\" y2=\"132\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"98\" x2=\"100\" y2=\"132\" stroke=\"#f59e0b\" stroke-width=\"2\"/> <line x1=\"125\" y1=\"100\" x2=\"132\" y2=\"132\" stroke=\"#f59e0b\" stroke-width=\"2\"/>",
      "<line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#475569\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "espelho-de-mao",
    "name": "Espelho Oval com Cabo",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "E S P E L H O",
    "colors": [
      "#f59e0b",
      "#38bdf8",
      "#fde047",
      "#ffffff"
    ],
    "tags": [
      "vidro",
      "reflexo",
      "moldura",
      "cabo",
      "rosto"
    ],
    "stepsDesc": [
      "1. Desenhe a MOLDURA OVAL ELEGANTE com borda dupla do espelho de mão.",
      "2. Trace o CABO ERGONÔMICO ALONGADO com pomo decorativo na ponta.",
      "3. Faça o VIDRO INTERNO com reflexos diagonais brilhantes.",
      "4. Desenhe pequenos arabescos e pérolas decorando a moldura vintage.",
      "5. Adicione estrelinhas de brilho 'plim plim' no reflexo límpido."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"36\" ry=\"46\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M96 131 L94 175 C94 180 106 180 106 175 L104 131 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"178\" r=\"5\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"27\" ry=\"37\" fill=\"#e0f2fe\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"88\" y1=\"65\" x2=\"112\" y2=\"95\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"94\" y1=\"60\" x2=\"118\" y2=\"90\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<polygon points=\"120,60 123,55 128,58 123,61\" fill=\"#f59e0b\"/> <polygon points=\"80,105 82,100 87,103 82,106\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "pente-de-cabelo",
    "name": "Pente com Dentes Finos",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "P E N T E",
    "colors": [
      "#a855f7",
      "#c084fc",
      "#ffffff",
      "#1e293b"
    ],
    "tags": [
      "dentes",
      "cabelo",
      "cuidar",
      "penteado",
      "beleza"
    ],
    "stepsDesc": [
      "1. Desenhe o CORPO CURVADO E ROBUSTO do dorso do pente.",
      "2. Trace o CABO FINO DE SEPARAR MECHAS na lateral.",
      "3. Faça a FILEIRA COMPLETA DE DENTES PARALELOS UNIFORMES.",
      "4. Desenhe os dentes mais largos de um lado e mais finos do outro.",
      "5. Adicione fios de cabelo ondulados soltos ao lado demonstrando o uso."
    ],
    "layers": [
      "<rect x=\"45\" y=\"85\" width=\"110\" height=\"18\" rx=\"5\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M155 88 C175 92 180 96 185 105 L155 98 Z\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<line x1=\"52\" y1=\"103\" x2=\"52\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"60\" y1=\"103\" x2=\"60\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"68\" y1=\"103\" x2=\"68\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"76\" y1=\"103\" x2=\"76\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"84\" y1=\"103\" x2=\"84\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <line x1=\"92\" y1=\"103\" x2=\"92\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <line x1=\"100\" y1=\"103\" x2=\"100\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"108\" y1=\"103\" x2=\"108\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"116\" y1=\"103\" x2=\"116\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"124\" y1=\"103\" x2=\"124\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"132\" y1=\"103\" x2=\"132\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"140\" y1=\"103\" x2=\"140\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"148\" y1=\"103\" x2=\"148\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M50 88 L145 88\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 120 Q50 140 38 160\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-linecap=\"round\"/> <path d=\"M42 125 Q58 145 45 165\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "escova-de-dentes",
    "name": "Escova com Pasta Dental",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "E S C O V A",
    "colors": [
      "#06b6d4",
      "#ffffff",
      "#3b82f6",
      "#ef4444"
    ],
    "tags": [
      "cerdas",
      "creme",
      "dentes",
      "sorriso",
      "higiene"
    ],
    "stepsDesc": [
      "1. Desenhe o CABO ANATÔMICO CURVADO e a cabeça oval da escova.",
      "2. Trace as CERDAS AGRUPADAS EM BLOCOS na ponta da escova.",
      "3. Faça a PORÇÃO DE PASTA DE DENTAL COLORIDA em onda ondulada sobre as cerdas.",
      "4. Desenhe as tiras antiderrapantes de borracha macia no cabo.",
      "5. Adicione gotículas de água fresca e estrelinhas de dente limpo."
    ],
    "layers": [
      "<path d=\"M45 155 C65 150 95 125 125 105 L155 85 C162 80 168 85 165 92 L142 108 C115 125 85 155 52 165 Z\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M140 82 L162 68 C165 66 170 70 167 75 L148 88 Z\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M142 70 Q152 58 162 65 Q170 60 172 68\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M145 71 Q155 60 165 67\" stroke=\"#ffffff\" stroke-width=\"1.5\" fill=\"none\"/>",
      "<ellipse cx=\"80\" cy=\"142\" rx=\"12\" ry=\"4\" transform=\"rotate(-30 80 142)\" fill=\"#1d4ed8\"/> <ellipse cx=\"98\" cy=\"130\" rx=\"10\" ry=\"3.5\" transform=\"rotate(-30 98 130)\" fill=\"#1d4ed8\"/>",
      "<circle cx=\"168\" cy=\"55\" r=\"3\" fill=\"#60a5fa\"/> <circle cx=\"178\" cy=\"62\" r=\"2\" fill=\"#60a5fa\"/> <polygon points=\"135,60 137,55 142,57 137,60\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "sabonete-bolhas",
    "name": "Sabonete com Espuma e Bolhas",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "S A B O N E T E",
    "colors": [
      "#fbcfe8",
      "#38bdf8",
      "#ffffff",
      "#ec4899"
    ],
    "tags": [
      "banho",
      "espuma",
      "cheiro",
      "limpeza",
      "bolhas"
    ],
    "stepsDesc": [
      "1. Desenhe o sabonete oval arredondado e macio visto em perspectiva.",
      "2. Trace a SABONETEIRA CANALETADA com pezinhos embaixo.",
      "3. Faça a ESPUMA FOFINHA E CREMOSA acumulada nas bordas.",
      "4. Desenhe VÁRIAS BOLHAS DE SABÃO ESFÉRICAS FLUTUANDO pelo ar.",
      "5. Adicione o brilho curvo iridescente em cada bolha de sabão."
    ],
    "layers": [
      "<path d=\"M65 110 C65 98 135 98 135 110 C135 128 65 128 65 110 Z\" fill=\"#a7f3d0\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M50 120 C50 138 150 138 150 120\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/> <line x1=\"68\" y1=\"135\" x2=\"62\" y2=\"148\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"132\" y1=\"135\" x2=\"138\" y2=\"148\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"68\" cy=\"105\" r=\"8\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"80\" cy=\"100\" r=\"10\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"95\" cy=\"98\" r=\"9\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"112\" cy=\"102\" r=\"8\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"45\" cy=\"80\" r=\"12\" fill=\"#bae6fd\" opacity=\"0.75\" stroke=\"#0284c7\" stroke-width=\"1.8\"/> <circle cx=\"75\" cy=\"55\" r=\"16\" fill=\"#bae6fd\" opacity=\"0.75\" stroke=\"#0284c7\" stroke-width=\"2\"/> <circle cx=\"130\" cy=\"50\" r=\"14\" fill=\"#bae6fd\" opacity=\"0.75\" stroke=\"#0284c7\" stroke-width=\"1.8\"/> <circle cx=\"155\" cy=\"75\" r=\"10\" fill=\"#bae6fd\" opacity=\"0.75\" stroke=\"#0284c7\" stroke-width=\"1.6\"/>",
      "<path d=\"M70 48 A10 10 0 0 1 82 48\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <path d=\"M41 74 A7 7 0 0 1 50 74\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <path d=\"M125 44 A8 8 0 0 1 135 44\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "toalha-de-banho",
    "name": "Toalha Macia Dobrada",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "T O A L H A",
    "colors": [
      "#38bdf8",
      "#0284c7",
      "#ffffff",
      "#e0f2fe"
    ],
    "tags": [
      "dobra",
      "banho",
      "enxugar",
      "macia",
      "listras"
    ],
    "stepsDesc": [
      "1. Desenhe a pilha fofa de duas toalhas macias dobradas retangulares.",
      "2. Trace as DOBRAS LATERAIS ARREDONDADAS que dão volume macio.",
      "3. Faça as BARRAS DECORATIVAS COM FRANJAS OU BORDADOS geométricos.",
      "4. Desenhe as linhas de costura e textura aveludada do algodão felpudo.",
      "5. Adicione vapor perfumado saindo das toalhas limpinhas."
    ],
    "layers": [
      "<rect x=\"55\" y=\"125\" width=\"90\" height=\"30\" rx=\"8\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"62\" y=\"98\" width=\"76\" height=\"28\" rx=\"7\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"75\" y1=\"125\" x2=\"75\" y2=\"155\" stroke=\"#0284c7\" stroke-width=\"2\"/> <line x1=\"80\" y1=\"125\" x2=\"80\" y2=\"155\" stroke=\"#0284c7\" stroke-width=\"2\"/> <line x1=\"78\" y1=\"98\" x2=\"78\" y2=\"126\" stroke=\"#db2777\" stroke-width=\"2\"/> <line x1=\"83\" y1=\"98\" x2=\"83\" y2=\"126\" stroke=\"#db2777\" stroke-width=\"2\"/>",
      "<path d=\"M55 140 C58 142 62 142 65 140\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"1.8\"/> <path d=\"M62 112 C65 114 69 114 72 112\" fill=\"none\" stroke=\"#db2777\" stroke-width=\"1.8\"/>",
      "<path d=\"M90 85 Q95 72 90 62\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <path d=\"M110 82 Q115 68 110 58\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <line x1=\"45\" y1=\"160\" x2=\"155\" y2=\"160\" stroke=\"#64748b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "travesseiro-fofo",
    "name": "Travesseiro Fofinho",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "S O N O",
    "colors": [
      "#ffffff",
      "#cbd5e1",
      "#fbcfe8",
      "#38bdf8"
    ],
    "tags": [
      "nuvem",
      "cama",
      "sono",
      "macio",
      "descanso"
    ],
    "stepsDesc": [
      "1. Desenhe o grande retângulo acolchoado com cantos estufados e macios.",
      "2. Trace a COSTURA REFORÇADA COM VIVEIRO em todo o perímetro.",
      "3. Faça a DEPRESSÃO CENTRAL CONFORTÁVEL onde repousa a cabeça.",
      "4. Desenhe as ruguinhas naturais de afundamento fofo do travesseiro.",
      "5. Adicione peninhas de ganso flutuando suavemente ao lado."
    ],
    "layers": [
      "<path d=\"M45 85 C75 75 125 75 155 85 C165 105 165 125 155 145 C125 155 75 155 45 145 C35 125 35 105 45 85 Z\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M48 88 C76 80 124 80 152 88 C160 105 160 125 152 142 C124 150 76 150 48 142 C40 125 40 105 48 88 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>",
      "<ellipse cx=\"100\" cy=\"115\" rx=\"35\" ry=\"18\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>",
      "<path d=\"M65 110 Q80 115 70 125\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <path d=\"M135 110 Q120 115 130 125\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>",
      "<path d=\"M150 65 Q160 55 155 48 Q148 55 150 65\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"150\" y1=\"65\" x2=\"155\" y2=\"48\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "cama-arrumada",
    "name": "Cama com Travesseiro e Cobertor",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "medio",
    "word": "C A M A",
    "colors": [
      "#78350f",
      "#3b82f6",
      "#ffffff",
      "#fef3c7"
    ],
    "tags": [
      "cabeceira",
      "edredom",
      "dormir",
      "quarto",
      "conforto"
    ],
    "stepsDesc": [
      "1. Desenhe a CABECEIRA DE MADEIRA ROBUSTA e a estrutura do colchão.",
      "2. Trace o COLCHÃO GROSSO COM O COBERTOR esticado cobrindo a cama.",
      "3. Faça a VIRA DO LENÇOL DOBRADA COM CAPRICHO e os pés de madeira.",
      "4. Desenhe os DOIS TRAVESSEIROS FOFOS apoiados na cabeceira.",
      "5. Adicione o tapete macio ao lado da cama."
    ],
    "layers": [
      "<rect x=\"40\" y=\"70\" width=\"120\" height=\"40\" rx=\"4\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <rect x=\"45\" y=\"105\" width=\"110\" height=\"48\" rx=\"5\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"45\" y=\"120\" width=\"110\" height=\"33\" rx=\"4\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <rect x=\"45\" y=\"112\" width=\"110\" height=\"12\" rx=\"3\" fill=\"#93c5fd\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"48\" y1=\"153\" x2=\"48\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linecap=\"round\"/> <line x1=\"152\" y1=\"153\" x2=\"152\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<rect x=\"55\" y=\"92\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"107\" y=\"92\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"100\" cy=\"172\" rx=\"58\" ry=\"8\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "globo-terrestre",
    "name": "Globo Terrestre Giratório",
    "category": "objetos",
    "sub": "escolar",
    "diff": "medio",
    "word": "G L O B O",
    "colors": [
      "#0284c7",
      "#22c55e",
      "#d97706",
      "#ffffff"
    ],
    "tags": [
      "planeta",
      "continentes",
      "eixo",
      "geografia",
      "escola"
    ],
    "stepsDesc": [
      "1. Desenhe a esfera perfeita do planeta Terra.",
      "2. Trace o ARCO METÁLICO SEMICIRCULAR INCLINADO DO MERIDIANO.",
      "3. Faça a BASE CIRCULAR FIRME DE MESA que sustenta o globo.",
      "4. Desenhe a silhueta dos continentes (Américas, África, etc.) no mapa.",
      "5. Adicione as linhas do Equador e trópicos."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"95\" r=\"38\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M62 95 C62 48 138 48 138 95 C138 142 62 142 62 95\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"3.5\"/>",
      "<line x1=\"100\" y1=\"140\" x2=\"100\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"4\"/> <ellipse cx=\"100\" cy=\"168\" rx=\"25\" ry=\"8\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 85 C80 95 90 105 85 115 C95 120 100 110 95 95 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M110 80 C125 85 120 100 115 105 C122 115 110 115 110 95 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"62\" y1=\"95\" x2=\"138\" y2=\"95\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "calculadora",
    "name": "Calculadora com Visor e Teclas",
    "category": "objetos",
    "sub": "escolar",
    "diff": "facil",
    "word": "C O N T A S",
    "colors": [
      "#334155",
      "#64748b",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "números",
      "matemática",
      "visor",
      "botões",
      "soma"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo retangular com cantos arredondados da calculadora.",
      "2. Trace o VISOR LCD HORIZONTAL NO TOPO com números digitais.",
      "3. Faça a CÉLULA SOLAR PEQUENA acima do visor.",
      "4. Desenhe a GRADE DE TECLAS NUMÉRICAS QUADRADAS (0 a 9) e operações.",
      "5. Adicione a tecla de IGUAL (=) colorida em destaque."
    ],
    "layers": [
      "<rect x=\"65\" y=\"65\" width=\"70\" height=\"105\" rx=\"10\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"74\" y=\"78\" width=\"52\" height=\"20\" rx=\"3\" fill=\"#a3e635\" stroke=\"#1e293b\" stroke-width=\"2\"/> <text x=\"80\" y=\"93\" font-family=\"monospace\" font-weight=\"bold\" font-size=\"12\" fill=\"#1e293b\">1234</text>",
      "<rect x=\"85\" y=\"70\" width=\"30\" height=\"5\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<rect x=\"74\" y=\"106\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"88\" y=\"106\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"102\" y=\"106\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"116\" y=\"106\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#f97316\"/> <rect x=\"74\" y=\"120\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"88\" y=\"120\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"102\" y=\"120\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"116\" y=\"120\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#f97316\"/>",
      "<rect x=\"74\" y=\"134\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"88\" y=\"134\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"102\" y=\"134\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"116\" y=\"134\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#ef4444\"/> <rect x=\"74\" y=\"148\" width=\"24\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"102\" y=\"148\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#e2e8f0\"/> <rect x=\"116\" y=\"148\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#22c55e\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "envelope-carta",
    "name": "Envelope com Selo de Coração",
    "category": "objetos",
    "sub": "cotidiano",
    "diff": "facil",
    "word": "C A R T A",
    "colors": [
      "#ffffff",
      "#ef4444",
      "#facc15",
      "#cbd5e1"
    ],
    "tags": [
      "dobra",
      "mensagem",
      "correio",
      "amor",
      "selo"
    ],
    "stepsDesc": [
      "1. Desenhe o retângulo horizontal clássico do envelope postal de papel.",
      "2. Trace a ABA TRIANGULAR ABERTA no topo mostrando a carta saindo.",
      "3. Faça as DOBRAS DIAGONAIS CRUZADAS que fecham o envelope.",
      "4. Desenhe a FOLHA DE CARTA DOBRADA com pautas e linhas escritas.",
      "5. Adicione o SELO POSTAL COM CORAÇÃO e carimbo redondo dos correios."
    ],
    "layers": [
      "<rect x=\"45\" y=\"95\" width=\"110\" height=\"65\" rx=\"4\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"45,95 100,55 155,95\" fill=\"#fdba74\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"45\" y1=\"95\" x2=\"100\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"155\" y1=\"95\" x2=\"100\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"45\" y1=\"160\" x2=\"85\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"155\" y1=\"160\" x2=\"115\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"58\" y=\"65\" width=\"84\" height=\"40\" rx=\"3\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"68\" y1=\"75\" x2=\"132\" y2=\"75\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"68\" y1=\"83\" x2=\"125\" y2=\"83\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <line x1=\"68\" y1=\"91\" x2=\"115\" y2=\"91\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>",
      "<rect x=\"130\" y=\"105\" width=\"18\" height=\"22\" rx=\"2\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <path d=\"M139 113 C137 110 134 112 134 114 C134 117 139 120 139 120 C139 120 144 117 144 114 C144 112 141 110 139 113 Z\" fill=\"#ffffff\"/> <circle cx=\"125\" cy=\"125\" r=\"9\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    </g>"
  },
  {
    "id": "maca-vermelha",
    "name": "Maçã com Cabinho e Folha",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "M A Ç Ã",
    "colors": [
      "#ef4444",
      "#15803d",
      "#78350f",
      "#fca5a5"
    ],
    "tags": [
      "vermelha",
      "cabinho",
      "folha",
      "saudável",
      "pomar"
    ],
    "stepsDesc": [
      "1. Desenhe o formato de coração arredondado com reentrância no topo e na base.",
      "2. Trace o cabinho curvado fino saindo da covinha superior.",
      "3. Faça a folha oval pontiaguda com nervura central decorando o cabinho.",
      "4. Desenhe o brilho curvo da casca polida vermelha.",
      "5. Finalize a base sombreada da maçã apetitosa."
    ],
    "layers": [
      "<path d=\"M100 70 C75 52 50 72 50 105 C50 142 80 162 100 162 C120 162 150 142 150 105 C150 72 125 52 100 70 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 70 C102 52 110 44 114 38\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M105 52 C122 42 135 48 138 56 C126 64 112 62 105 52 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"108\" y1=\"53\" x2=\"132\" y2=\"54\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<path d=\"M70 85 C62 98 62 120 70 135\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"45\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "banana-sorridente",
    "name": "Banana Sorridente",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "B A N A N A",
    "colors": [
      "#facc15",
      "#eab308",
      "#78350f",
      "#fef08a"
    ],
    "tags": [
      "amarela",
      "curva",
      "casca",
      "doce",
      "potássio"
    ],
    "stepsDesc": [
      "1. Trace a linha guia curvada em arco e a espessura da banana amarela.",
      "2. Desenhe a ponta escura inferior e a haste grossa do cabinho superior.",
      "3. Trace as linhas longitudinais que formam as facetas da casca.",
      "4. Desenhe um rostinho sorridente super simpático.",
      "5. Finalize os contornos nítidos para colorir em amarelo radiante."
    ],
    "layers": [
      "<path d=\"M45 75 C40 120 70 160 135 165 C155 165 170 155 165 145 C150 145 90 145 65 110 C50 85 55 70 45 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"36\" y=\"62\" width=\"12\" height=\"15\" rx=\"3\" fill=\"#65a30d\" stroke=\"#1e293b\" stroke-width=\"2.2\" transform=\"rotate(-15 42 70)\"/> <path d=\"M160 146 Q168 152 165 158 Q158 158 155 150 Z\" fill=\"#1e293b\"/>",
      "<path d=\"M45 75 C55 110 85 145 155 152\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"105\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"104\" r=\"1.8\" fill=\"#ffffff\"/> <circle cx=\"108\" cy=\"112\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"107\" cy=\"111\" r=\"1.8\" fill=\"#ffffff\"/> <path d=\"M92 122 Q100 128 108 122\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"78\" cy=\"114\" rx=\"4\" ry=\"2.5\" fill=\"#f43f5e\" opacity=\"0.6\"/> <ellipse cx=\"116\" cy=\"120\" rx=\"4\" ry=\"2.5\" fill=\"#f43f5e\" opacity=\"0.6\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "fatia-melancia",
    "name": "Fatia de Melancia",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "M E L A N C I A",
    "colors": [
      "#ef4444",
      "#16a34a",
      "#1e293b",
      "#ffffff"
    ],
    "tags": [
      "sementes",
      "casca",
      "verão",
      "fatia",
      "doce"
    ],
    "stepsDesc": [
      "1. Desenhe o triângulo com a base inferior curvada em arco.",
      "2. Trace a faixa paralela da casca verde e a borda branca da polpa.",
      "3. Faça a polpa vermelha central apetitosa.",
      "4. Desenhe as sementinhas pretas em formato de gota espalhadas.",
      "5. Adicione as listras escuras na casca verde e o brilho da fatia fresca."
    ],
    "layers": [
      "<path d=\"M100 35 L40 145 Q100 170 160 145 Z\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<path d=\"M44 135 Q100 160 156 135\" fill=\"none\" stroke-width=\"2.5\"/> <path d=\"M48 126 Q100 150 152 126\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M100 45 L52 122 Q100 144 148 122 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M96 75 C94 70 100 65 100 65 C100 65 106 70 104 75 C102 80 98 80 96 75 Z\" fill=\"#1e293b\"/> <path d=\"M78 95 C76 90 82 85 82 85 C82 85 88 90 86 95 C84 100 80 100 78 95 Z\" fill=\"#1e293b\"/> <path d=\"M116 95 C114 90 120 85 120 85 C120 85 126 90 124 95 C122 100 118 100 116 95 Z\" fill=\"#1e293b\"/>",
      "<path d=\"M55 142 L58 152 M75 148 L80 160 M100 150 L102 164 M125 148 L123 160 M145 142 L142 152\" stroke=\"#15803d\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cacho-de-uvas",
    "name": "Cacho de Uvas Roxas",
    "category": "frutas",
    "sub": "frutas",
    "diff": "medio",
    "word": "U V A S",
    "colors": [
      "#8b5cf6",
      "#7c3aed",
      "#15803d",
      "#78350f"
    ],
    "tags": [
      "roxa",
      "cacho",
      "bolinhas",
      "folha",
      "parreira"
    ],
    "stepsDesc": [
      "1. Desenhe o caule ramificado no topo com folhas de parreira recortadas.",
      "2. Trace a primeira camada superior de uvas redondas gordinhas.",
      "3. Desenhe as camadas intermediárias formando um cacho afunilado.",
      "4. Finalize a ponta inferior em gota com as últimas uvas menores.",
      "5. Adicione as gavinhas enroladas em espiral e brilhos nas uvas."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"85\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"115\" cy=\"85\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"98\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"108\" r=\"13\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"125\" cy=\"108\" r=\"13\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"90\" cy=\"122\" r=\"13\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"112\" cy=\"122\" r=\"13\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"142\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"162\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 75 L100 45 C100 40 106 35 112 35\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M98 52 C80 40 70 55 82 62 C75 75 92 78 98 68 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M106 42 C120 35 130 45 125 55\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"2\" stroke-linecap=\"round\"/> <circle cx=\"82\" cy=\"82\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"112\" cy=\"82\" r=\"2\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "laranja-metade",
    "name": "Laranja com Gomos",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "L A R A N J A",
    "colors": [
      "#f97316",
      "#fb923c",
      "#16a34a",
      "#fed7aa"
    ],
    "tags": [
      "suco",
      "vitamina",
      "gomos",
      "casca",
      "redonda"
    ],
    "stepsDesc": [
      "1. Desenhe o círculo perfeito da casca da metade de laranja aberta.",
      "2. Trace o círculo interno da polpa e o centro redondo pequeno.",
      "3. Desenhe as linhas radiais dividindo os GOMOS TRIANGULARES.",
      "4. Adicione as gotículas de suco e sementinhas nos gomos.",
      "5. Finalize uma folha verde fresca ao lado da fruta."
    ],
    "layers": [
      "<circle cx=\"95\" cy=\"105\" r=\"48\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"95\" cy=\"105\" r=\"42\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"95\" cy=\"105\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"95\" y1=\"63\" x2=\"95\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"95\" y1=\"113\" x2=\"95\" y2=\"147\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"53\" y1=\"105\" x2=\"87\" y2=\"105\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"103\" y1=\"105\" x2=\"137\" y2=\"105\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"65\" y1=\"75\" x2=\"89\" y2=\"99\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"125\" y1=\"135\" x2=\"101\" y2=\"111\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"65\" y1=\"135\" x2=\"89\" y2=\"111\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"125\" y1=\"75\" x2=\"101\" y2=\"99\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M135 65 C155 52 170 65 165 78 C150 85 140 75 135 65 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"90\" cy=\"80\" r=\"1.5\" fill=\"#f97316\"/> <circle cx=\"110\" cy=\"90\" r=\"1.5\" fill=\"#f97316\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "morango-fresco",
    "name": "Morango com Sementinhas",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "M O R A N G O",
    "colors": [
      "#ef4444",
      "#15803d",
      "#facc15",
      "#fca5a5"
    ],
    "tags": [
      "sementes",
      "coroa",
      "vermelho",
      "doce",
      "torta"
    ],
    "stepsDesc": [
      "1. Desenhe o formato cônico arredondado de coração do morango.",
      "2. Trace a coroa de sépalas (folhas verdes pontudas) no topo.",
      "3. Faça o cabinho curto no centro da coroa verde.",
      "4. Espalhe dezenas de sementinhas pretas em pequenos pontinhos ovais.",
      "5. Finalize o brilho da casca vermelha e texturas apetitosas."
    ],
    "layers": [
      "<path d=\"M100 65 C68 65 52 95 55 125 C58 155 92 175 100 175 C108 175 142 155 145 125 C148 95 132 65 100 65 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,65 92,48 100,55\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,65 108,48 100,55\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,65 78,55 88,62\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,65 122,55 112,62\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M100 55 C100 42 105 38 108 35\" stroke=\"#15803d\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"80\" cy=\"95\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"100\" cy=\"95\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"120\" cy=\"95\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"70\" cy=\"118\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"90\" cy=\"118\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"110\" cy=\"118\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"130\" cy=\"118\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"80\" cy=\"140\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"100\" cy=\"140\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"120\" cy=\"140\" rx=\"2\" ry=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"100\" cy=\"160\" rx=\"1.8\" ry=\"2.5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pera-suculenta",
    "name": "Pera Verde Suculenta",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "P E R A",
    "colors": [
      "#84cc16",
      "#65a30d",
      "#78350f",
      "#d9f99d"
    ],
    "tags": [
      "gota",
      "verde",
      "cabinho",
      "pomar",
      "fruta"
    ],
    "stepsDesc": [
      "1. Desenhe o formato característico de pera: topo estreito e base bojuda arredondada.",
      "2. Trace a haste curvada no topo e a covinha de onde ela brota.",
      "3. Faça a folha verde graciosa ao lado do cabinho.",
      "4. Desenhe o reflexo curvo de luz na casca verde-amarelada.",
      "5. Adicione pontinhos delicados de textura na casca da pera."
    ],
    "layers": [
      "<path d=\"M85 75 C82 55 118 55 115 75 C115 95 145 105 145 135 C145 165 125 172 100 172 C75 172 55 165 55 135 C55 105 85 95 85 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 58 C102 42 110 35 115 32\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M105 45 C122 35 135 42 138 50 C125 58 112 55 105 45 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M72 115 C65 128 68 148 78 158\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"135\" r=\"1.2\" fill=\"#a16207\"/> <circle cx=\"115\" cy=\"145\" r=\"1.2\" fill=\"#a16207\"/> <circle cx=\"125\" cy=\"125\" r=\"1.2\" fill=\"#a16207\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "abacaxi-real",
    "name": "Abacaxi com Coroa",
    "category": "frutas",
    "sub": "frutas",
    "diff": "medio",
    "word": "A B A C A X I",
    "colors": [
      "#eab308",
      "#ca8a04",
      "#15803d",
      "#fef08a"
    ],
    "tags": [
      "coroa",
      "losangos",
      "espinhos",
      "tropical",
      "amarelo"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo oval robusto do abacaxi.",
      "2. Trace a COROA IMPONENTE DE FOLHAS PONTUDAS em camadas espalmadas no topo.",
      "3. Desenhe o padrão de LINHAS CRUZADAS EM DIAGONAL (LOSANGOS) na casca.",
      "4. Adicione um pequeno triângulo/espinho no centro de cada losango.",
      "5. Finalize contornos firmes prontos para colorir de amarelo e dourado."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"125\" rx=\"38\" ry=\"48\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 L95 35 L105 52 L100 78\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M92 78 L75 42 L88 58 L92 78\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M108 78 L125 42 L112 58 L108 78\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M85 82 L65 55 L78 68 L85 82\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M115 82 L135 55 L122 68 L115 82\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"75\" y1=\"95\" x2=\"125\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"65\" y1=\"120\" x2=\"110\" y2=\"170\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"125\" y1=\"95\" x2=\"75\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"135\" y1=\"120\" x2=\"90\" y2=\"170\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"125\" r=\"2\" fill=\"#b45309\"/> <circle cx=\"85\" cy=\"110\" r=\"2\" fill=\"#b45309\"/> <circle cx=\"115\" cy=\"110\" r=\"2\" fill=\"#b45309\"/> <circle cx=\"85\" cy=\"140\" r=\"2\" fill=\"#b45309\"/> <circle cx=\"115\" cy=\"140\" r=\"2\" fill=\"#b45309\"/>",
      "<ellipse cx=\"100\" cy=\"176\" rx=\"42\" ry=\"7\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "limao-siciliano",
    "name": "Limão Siciliano Azedinho",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "L I M Ã O",
    "colors": [
      "#eab308",
      "#facc15",
      "#15803d",
      "#fef08a"
    ],
    "tags": [
      "azedo",
      "pontas",
      "amarelo",
      "suco",
      "limonada"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo oval com as DUAS PONTAS AFILADAS características do limão siciliano.",
      "2. Trace o cabinho curto e uma folha com nervuras decorativas.",
      "3. Desenhe a textura de poros na casca cítrica amarela.",
      "4. Adicione uma fatia redonda de limão mostrando os gomos ao lado.",
      "5. Finalize gotas de suco azedinho espirrando."
    ],
    "layers": [
      "<path d=\"M50 115 C55 85 85 75 115 85 C145 95 155 115 155 115 C145 145 115 155 85 145 C55 135 50 115 50 115 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M45 115 Q50 110 52 115 Q50 120 45 115 Z\" fill=\"#1e293b\"/> <path d=\"M155 115 Q160 110 162 115 Q160 120 155 115 Z\" fill=\"#1e293b\"/>",
      "<path d=\"M135 90 C145 75 160 78 165 88 C155 98 145 98 135 90 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"85\" cy=\"105\" r=\"1\" fill=\"#ca8a04\"/> <circle cx=\"105\" cy=\"110\" r=\"1\" fill=\"#ca8a04\"/> <circle cx=\"95\" cy=\"125\" r=\"1\" fill=\"#ca8a04\"/> <circle cx=\"120\" cy=\"120\" r=\"1\" fill=\"#ca8a04\"/>",
      "<circle cx=\"70\" cy=\"75\" r=\"3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/> <circle cx=\"80\" cy=\"65\" r=\"2\" fill=\"#38bdf8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cerejas-gemas",
    "name": "Dupla de Cerejas Vermelhas",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "C E R E J A S",
    "colors": [
      "#b91c1c",
      "#dc2626",
      "#15803d",
      "#fca5a5"
    ],
    "tags": [
      "par",
      "cabinho",
      "vermelho",
      "doce",
      "bolo"
    ],
    "stepsDesc": [
      "1. Desenhe as DUAS ESFERAS PERFEITAS das cerejas conectadas.",
      "2. Trace os DOIS CABINHOS LONGOS E CURVADOS subindo até se unirem no topo.",
      "3. Faça a folha dupla graciosa no ponto de junção dos cabinhos.",
      "4. Desenhe as covinhas onde os cabinhos entram em cada cereja.",
      "5. Adicione o brilho curvo branco espelhado em cada frutinha vermelha."
    ],
    "layers": [
      "<circle cx=\"75\" cy=\"135\" r=\"22\" fill=\"none\" stroke-width=\"2.8\"/> <circle cx=\"125\" cy=\"125\" r=\"22\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M75 115 C80 80 95 65 105 50\" fill=\"none\" stroke=\"#65a30d\" stroke-width=\"2.8\"/> <path d=\"M125 105 C120 80 112 65 105 50\" fill=\"none\" stroke=\"#65a30d\" stroke-width=\"2.8\"/>",
      "<path d=\"M105 50 C125 40 140 45 142 55 C128 62 115 58 105 50 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M68 120 Q75 125 82 120\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M118 110 Q125 115 132 110\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"68\" cy=\"130\" r=\"3.5\" fill=\"#ffffff\"/> <circle cx=\"118\" cy=\"120\" r=\"3.5\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pessego-aveludado",
    "name": "Pêssego Aveludado",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "P Ê S S E G O",
    "colors": [
      "#fb923c",
      "#f43f5e",
      "#15803d",
      "#ffedd5"
    ],
    "tags": [
      "aveludado",
      "risco",
      "folha",
      "doce",
      "fruta"
    ],
    "stepsDesc": [
      "1. Desenhe o formato de coração arredondado do pêssego com covinha na ponta.",
      "2. Trace a FENDA LONGITUDINAL SUAVE que divide os dois lados da fruta.",
      "3. Faça o cabinho curto e as folhas ovais aveludadas no topo.",
      "4. Desenhe o degradê de cores suaves (rosa, amarelo e laranja).",
      "5. Adicione texturas macias de veludo na casca."
    ],
    "layers": [
      "<path d=\"M100 70 C75 55 52 75 55 108 C58 145 88 165 100 170 C112 165 142 145 145 108 C148 75 125 55 100 70 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 70 Q95 115 100 170\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 70 C100 55 105 48 108 42\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M104 55 C122 45 135 52 135 60 C122 68 112 65 104 55 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M72 90 C65 105 65 125 72 140\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"82\" cy=\"115\" r=\"1.5\" fill=\"#f43f5e\"/> <circle cx=\"120\" cy=\"125\" r=\"1.5\" fill=\"#f43f5e\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "abacate-aberto",
    "name": "Abacate com Caroço Redondo",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "A B A C A T E",
    "colors": [
      "#15803d",
      "#a3e635",
      "#78350f",
      "#fef08a"
    ],
    "tags": [
      "caroço",
      "verde",
      "cremoso",
      "vitamina",
      "saudável"
    ],
    "stepsDesc": [
      "1. Desenhe a silhueta em forma de pera da metade do abacate aberto.",
      "2. Trace a borda da casca verde-escura e a polpa verde-clara cremosa.",
      "3. Desenhe o GRANDE CAROÇO MARROM REDONDO BRILHANTE no centro da base.",
      "4. Adicione o brilho esférico 3D refletido no caroço.",
      "5. Finalize o contorno suave da fruta tropical deliciosa."
    ],
    "layers": [
      "<path d=\"M85 70 C82 50 118 50 115 70 C115 90 148 100 148 135 C148 168 128 175 100 175 C72 175 52 168 52 135 C52 100 85 90 85 70 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M88 74 C86 58 114 58 112 74 C112 92 140 102 140 132 C140 162 122 168 100 168 C78 168 60 162 60 132 C60 102 88 92 88 74 Z\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"135\" r=\"22\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"94\" cy=\"128\" r=\"4.5\" fill=\"#ffffff\"/> <circle cx=\"104\" cy=\"142\" r=\"2\" fill=\"#ffffff\" opacity=\"0.6\"/>",
      "<ellipse cx=\"100\" cy=\"180\" rx=\"48\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "kiwi-fatiado",
    "name": "Kiwi Fatiado",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "K I W I",
    "colors": [
      "#65a30d",
      "#78350f",
      "#1e293b",
      "#ffffff"
    ],
    "tags": [
      "verde",
      "sementinhas",
      "fatia",
      "casca_peluda"
    ],
    "stepsDesc": [
      "1. Desenhe a rodela redonda perfeita da fatia de kiwi cortada.",
      "2. Trace a borda da casca marrom aveludada com pelinhos.",
      "3. Faça o CENTRO OVAL BRANCO CREMOSO de onde saem raios solares.",
      "4. Espalhe as PEQUENAS SEMENTINHAS PRETAS em círculo ao redor do centro.",
      "5. Adicione raios finos de polpa verde esmeralda translúcida."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"48\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"44\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"2\"/> <ellipse cx=\"100\" cy=\"115\" rx=\"14\" ry=\"18\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"85\" cy=\"102\" rx=\"1.5\" ry=\"2.5\" fill=\"#1e293b\"/> <ellipse cx=\"115\" cy=\"102\" rx=\"1.5\" ry=\"2.5\" fill=\"#1e293b\"/> <ellipse cx=\"85\" cy=\"128\" rx=\"1.5\" ry=\"2.5\" fill=\"#1e293b\"/> <ellipse cx=\"115\" cy=\"128\" rx=\"1.5\" ry=\"2.5\" fill=\"#1e293b\"/> <ellipse cx=\"78\" cy=\"115\" rx=\"1.5\" ry=\"2.5\" fill=\"#1e293b\"/> <ellipse cx=\"122\" cy=\"115\" rx=\"1.5\" ry=\"2.5\" fill=\"#1e293b\"/>",
      "<line x1=\"88\" y1=\"102\" x2=\"72\" y2=\"92\" stroke=\"#65a30d\" stroke-width=\"1.5\"/> <line x1=\"112\" y1=\"102\" x2=\"128\" y2=\"92\" stroke=\"#65a30d\" stroke-width=\"1.5\"/> <line x1=\"88\" y1=\"128\" x2=\"72\" y2=\"138\" stroke=\"#65a30d\" stroke-width=\"1.5\"/> <line x1=\"112\" y1=\"128\" x2=\"128\" y2=\"138\" stroke=\"#65a30d\" stroke-width=\"1.5\"/>",
      "<path d=\"M50 115 L45 115 M150 115 L155 115 M100 65 L100 60 M100 165 L100 170\" stroke=\"#78350f\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "caju-nordestino",
    "name": "Caju com Castanha",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "C A J U",
    "colors": [
      "#ea580c",
      "#facc15",
      "#78716c",
      "#15803d"
    ],
    "tags": [
      "castanha",
      "suco",
      "vermelho",
      "brasil",
      "nordeste"
    ],
    "stepsDesc": [
      "1. Desenhe o pseudofruto em formato oval piriforme alargado e suculento.",
      "2. Trace a VERDADEIRA FRUTA (CASTANHA DE CAJU CINZA EM FORMA DE RIM) no topo.",
      "3. Faça o cabinho prendendo a castanha ao galho com folhas.",
      "4. Desenhe o degradê característico do caju (amarelo passando para vermelho).",
      "5. Finalize as linhas de brilho na polpa cheia de caldo doce."
    ],
    "layers": [
      "<path d=\"M85 85 C65 95 60 130 75 155 C90 175 115 175 130 155 C145 130 140 95 120 85 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M92 82 C85 68 95 55 105 58 C115 62 118 75 112 82 C105 75 98 75 92 82 Z\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M105 58 C105 45 108 38 112 32\" stroke=\"#78350f\" stroke-width=\"2.8\" stroke-linecap=\"round\"/> <path d=\"M108 42 C125 32 140 40 138 50 C125 55 115 50 108 42 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M80 110 C75 125 78 145 88 155\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<line x1=\"102\" y1=\"85\" x2=\"102\" y2=\"165\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "coco-verde",
    "name": "Coco Verde com Canudinho",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "C O C O",
    "colors": [
      "#16a34a",
      "#ffffff",
      "#38bdf8",
      "#15803d"
    ],
    "tags": [
      "água_de_coco",
      "praia",
      "canudo",
      "redondo",
      "refrescante"
    ],
    "stepsDesc": [
      "1. Desenhe a esfera arredondada do coco verde cortada na tampa superior.",
      "2. Trace a abertura circular por onde se bebe a água de coco fresca.",
      "3. Faça o CANUDINHO LISTRADO CURVADO saindo da abertura.",
      "4. Desenhe uma florzinha tropical ou guarda-chuvinha decorativo espetado.",
      "5. Adicione gotículas de água gelada condensada escorrendo pela casca."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"125\" r=\"45\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"22\" ry=\"10\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M105 85 L125 45 L145 40\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4.5\" stroke-linecap=\"round\"/> <line x1=\"110\" y1=\"75\" x2=\"114\" y2=\"67\" stroke=\"#ffffff\" stroke-width=\"4.5\"/> <line x1=\"120\" y1=\"55\" x2=\"124\" y2=\"47\" stroke=\"#ffffff\" stroke-width=\"4.5\"/>",
      "<circle cx=\"78\" cy=\"115\" r=\"2.5\" fill=\"#38bdf8\"/> <circle cx=\"85\" cy=\"135\" r=\"2.5\" fill=\"#38bdf8\"/> <circle cx=\"125\" cy=\"120\" r=\"2.5\" fill=\"#38bdf8\"/>",
      "<ellipse cx=\"100\" cy=\"172\" rx=\"45\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "mamao-papaia",
    "name": "Mamão Papaia Aberto",
    "category": "frutas",
    "sub": "frutas",
    "diff": "medio",
    "word": "M A M Ã O",
    "colors": [
      "#f97316",
      "#eab308",
      "#1e293b",
      "#15803d"
    ],
    "tags": [
      "sementes_pretas",
      "laranja",
      "café_manhã",
      "saúde"
    ],
    "stepsDesc": [
      "1. Desenhe o contorno piriforme alongado do mamão papaia cortado ao meio.",
      "2. Trace a cavidade interna oval profunda cheia de polpa alaranjada.",
      "3. Desenhe as DEZENAS DE SEMENTINHAS PRETAS REDONDAS BRILHANTES na cavidade.",
      "4. Faça a borda dupla da casca verde e amarela.",
      "5. Finalize uma colherzinha ao lado pronta para saborear."
    ],
    "layers": [
      "<path d=\"M85 70 C70 85 65 125 75 155 C88 175 115 175 128 155 C138 125 132 85 118 70 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"101\" cy=\"120\" rx=\"16\" ry=\"32\" fill=\"#fb923c\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<circle cx=\"98\" cy=\"105\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"104\" cy=\"108\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"97\" cy=\"115\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"105\" cy=\"118\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"99\" cy=\"125\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"104\" cy=\"132\" r=\"3\" fill=\"#1e293b\"/>",
      "<circle cx=\"97\" cy=\"104\" r=\"1\" fill=\"#ffffff\"/> <circle cx=\"103\" cy=\"107\" r=\"1\" fill=\"#ffffff\"/> <circle cx=\"96\" cy=\"114\" r=\"1\" fill=\"#ffffff\"/>",
      "<path d=\"M145 95 C150 90 155 95 150 115 L145 155\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "manga-rosa",
    "name": "Manga Rosa Suculenta",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "M A N G A",
    "colors": [
      "#eab308",
      "#ef4444",
      "#15803d",
      "#fef08a"
    ],
    "tags": [
      "doce",
      "vermelha_amarela",
      "folha",
      "suco",
      "pomar"
    ],
    "stepsDesc": [
      "1. Desenhe a silhueta oval assimétrica clássica da manga rosa.",
      "2. Trace o bico suave na base e o cabinho curvado no topo.",
      "3. Faça a folha longa lanceolada característica da mangueira.",
      "4. Desenhe o brilho e o degradê entre rosa, vermelho e amarelo.",
      "5. Finalize com gotículas de orvalho na casca macia."
    ],
    "layers": [
      "<path d=\"M88 65 C68 75 58 105 65 135 C72 165 105 175 125 165 C145 150 148 115 135 85 C125 65 102 58 88 65 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M98 62 C100 48 106 42 110 38\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M105 48 C128 35 150 45 145 58 C125 65 112 58 105 48 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M80 100 C72 115 75 135 85 145\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"100\" cy=\"120\" r=\"2\" fill=\"#ef4444\"/> <circle cx=\"115\" cy=\"135\" r=\"2\" fill=\"#ef4444\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "melao-amarelo",
    "name": "Melão Redondo Amarelinho",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "M E L Ã O",
    "colors": [
      "#facc15",
      "#eab308",
      "#78350f",
      "#fef9c3"
    ],
    "tags": [
      "redondo",
      "listras",
      "casca",
      "doce",
      "fatia"
    ],
    "stepsDesc": [
      "1. Desenhe a grande esfera arredondada do melão amarelo da época.",
      "2. Trace o cabinho seco e a covinha superior.",
      "3. Desenhe as LINHAS LONGITUDINAIS SUAVES que dividem os gomos sutis.",
      "4. Adicione a textura ligeiramente rugosa da casca amarela canário.",
      "5. Finalize uma fatia cortada ao lado mostrando as sementinhas."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"46\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 74 C100 62 105 58 108 55\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"74\" rx=\"8\" ry=\"4\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M100 74 C82 90 82 150 100 166\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <path d=\"M100 74 C118 90 118 150 100 166\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\"/>",
      "<path d=\"M100 74 C65 95 65 145 100 166\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <path d=\"M100 74 C135 95 135 145 100 166\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\"/>",
      "<ellipse cx=\"100\" cy=\"170\" rx=\"48\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "mirtilo-bagas",
    "name": "Tigela de Mirtilos Azuis",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "M I R T I L O",
    "colors": [
      "#1e3a8a",
      "#3b82f6",
      "#ffffff",
      "#cbd5e1"
    ],
    "tags": [
      "azul",
      "bagas",
      "coroa",
      "antioxidante",
      "tigela"
    ],
    "stepsDesc": [
      "1. Desenhe a TIGELINHA REDONDA OVAL de cerâmica na base.",
      "2. Trace várias BAGAS REDONDAS DE MIRTILO (BLUEBERRIES) empilhadas dentro dela.",
      "3. Faça a COROINHA ESTRELADA CARACTERÍSTICA no topo de cada mirtilo.",
      "4. Adicione folhinhas verdes frescas brotando entre as frutinhas azuis.",
      "5. Desenhe os reflexos esféricos e o acabamento da tigela."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"140\" rx=\"45\" ry=\"22\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M55 140 C55 165 145 165 145 140\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"85\" cy=\"120\" r=\"14\" fill=\"#1e3a8a\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"115\" cy=\"120\" r=\"14\" fill=\"#1e3a8a\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"108\" r=\"14\" fill=\"#1e3a8a\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"75\" cy=\"132\" r=\"12\" fill=\"#1e3a8a\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"125\" cy=\"132\" r=\"12\" fill=\"#1e3a8a\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"100,104 98,100 102,100\" fill=\"#ffffff\"/> <polygon points=\"85,116 83,112 87,112\" fill=\"#ffffff\"/> <polygon points=\"115,116 113,112 117,112\" fill=\"#ffffff\"/>",
      "<path d=\"M100 94 C112 85 125 90 120 98 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "framboesa",
    "name": "Framboesa Vermelhinha",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "F R A M B O E S A",
    "colors": [
      "#be123c",
      "#e11d48",
      "#15803d",
      "#ffffff"
    ],
    "tags": [
      "gominhos",
      "vermelho",
      "fruta_vermelha",
      "doce"
    ],
    "stepsDesc": [
      "1. Desenhe a silhueta cônica arredondada em domo da framboesa.",
      "2. Trace as DEZENAS DE DRUPAS ESFÉRICAS GORDINHAS que formam a fruta.",
      "3. Faça a coroa de sépalas verdes e o cabinho no topo.",
      "4. Desenhe o brilho luminoso em cada bolinha suculenta.",
      "5. Finalize folhinhas serrilhadas de framboeseira ao lado."
    ],
    "layers": [
      "<path d=\"M75 95 C75 80 125 80 125 95 C128 125 115 155 100 162 C85 155 72 125 75 95 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"88\" cy=\"95\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"102\" cy=\"95\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"115\" cy=\"95\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"82\" cy=\"110\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"96\" cy=\"110\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"110\" cy=\"110\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"88\" cy=\"125\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"102\" cy=\"125\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"115\" cy=\"125\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"95\" cy=\"140\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"107\" cy=\"140\" r=\"7\" fill=\"none\" stroke-width=\"2\"/> <circle cx=\"101\" cy=\"154\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"100,85 92,72 98,78\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,85 108,72 102,78\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M100 78 C100 68 104 62 106 58\" stroke=\"#15803d\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"95\" cy=\"108\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"109\" cy=\"108\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"101\" cy=\"123\" r=\"1.5\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "amora-silvestre",
    "name": "Amora Silvestre Roxa",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "A M O R A",
    "colors": [
      "#3b0764",
      "#581c87",
      "#15803d",
      "#ffffff"
    ],
    "tags": [
      "roxa",
      "arvore",
      "gomos",
      "silvestre",
      "mancha"
    ],
    "stepsDesc": [
      "1. Desenhe o formato cônico arredondado da amora silvestre.",
      "2. Trace as dezenas de pequenas drupas esféricas em roxo profundo.",
      "3. Faça o cabinho lenhoso e pequenas folhas verdes serrilhadas.",
      "4. Adicione o brilho suculento em cada bolinha da amora.",
      "5. Finalize folhinhas delicadas do bosque."
    ],
    "layers": [
      "<path d=\"M78 95 C78 78 122 78 122 95 C125 125 115 155 100 162 C85 155 75 125 78 95 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"88\" cy=\"95\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"102\" cy=\"95\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"114\" cy=\"95\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"82\" cy=\"110\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"96\" cy=\"110\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"110\" cy=\"110\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"88\" cy=\"125\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"102\" cy=\"125\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"114\" cy=\"125\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"95\" cy=\"140\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"107\" cy=\"140\" r=\"6.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"101\" cy=\"154\" r=\"5.5\" fill=\"#581c87\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M100 78 L100 55\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/> <polygon points=\"100,78 90,68 96,74\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,78 110,68 104,74\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"95\" cy=\"108\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"109\" cy=\"108\" r=\"1.5\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "figo-fresco",
    "name": "Figo Doce com Folha",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "F I G O",
    "colors": [
      "#701a75",
      "#be185d",
      "#15803d",
      "#fdf4ff"
    ],
    "tags": [
      "gota",
      "roxo",
      "folha_verde",
      "doce",
      "árvore"
    ],
    "stepsDesc": [
      "1. Desenhe o formato de gota piriforme bojuda e clássica do figo.",
      "2. Trace o cabinho curto curvado e a fenda suave na base.",
      "3. Faça a folha grande recortada de figueira ao fundo.",
      "4. Desenhe as linhas sutis que percorrem a casca roxa aveludada.",
      "5. Adicione uma gota de néctar doce escorrendo da pontinha."
    ],
    "layers": [
      "<path d=\"M90 75 C85 60 115 60 110 75 C110 90 145 105 145 140 C145 168 125 172 100 172 C75 172 55 168 55 140 C55 105 90 90 90 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 62 C100 50 106 42 110 38\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M98 168 Q100 174 102 168\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M105 48 C125 35 145 45 140 60 C125 65 115 58 105 48 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M78 115 C72 130 75 150 85 160\" stroke=\"#a855f7\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M122 115 C128 130 125 150 115 160\" stroke=\"#a855f7\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"178\" rx=\"3\" ry=\"5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "goiaba-vermelha",
    "name": "Goiaba com Polpa Rosada",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "G O I A B A",
    "colors": [
      "#16a34a",
      "#f43f5e",
      "#fef08a",
      "#ffffff"
    ],
    "tags": [
      "polpa",
      "sementinhas",
      "verde",
      "doce",
      "goiabada"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo oval da goiaba e a metade aberta ao lado.",
      "2. Trace a coroa de sépalas secas na ponta da goiaba inteira.",
      "3. Faça a polpa rosada viva cheia de sementinhas duras redondas.",
      "4. Desenhe a casca verde-amarelada contrastando com o vermelho.",
      "5. Finalize folhinhas verdes com nervuras bem visíveis."
    ],
    "layers": [
      "<ellipse cx=\"80\" cy=\"115\" rx=\"35\" ry=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"125\" cy=\"125\" rx=\"28\" ry=\"32\" fill=\"#f43f5e\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"125\" cy=\"125\" rx=\"22\" ry=\"26\" fill=\"#fb7185\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"118\" cy=\"115\" r=\"2\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"130\" cy=\"118\" r=\"2\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"122\" cy=\"128\" r=\"2\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1\"/> <circle cx=\"132\" cy=\"132\" r=\"2\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<path d=\"M80 73 C80 62 84 56 86 52\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/> <polygon points=\"80,157 76,164 80,161 84,164\" fill=\"#78350f\"/>",
      "<path d=\"M85 58 C102 48 115 55 112 65 C98 70 90 65 85 58 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "maracuja-aberto",
    "name": "Maracujá com Suco Amarelo",
    "category": "frutas",
    "sub": "frutas",
    "diff": "medio",
    "word": "M A R A C U J Á",
    "colors": [
      "#eab308",
      "#facc15",
      "#1e293b",
      "#78350f"
    ],
    "tags": [
      "sementes",
      "calmante",
      "suco",
      "azedinho",
      "casca"
    ],
    "stepsDesc": [
      "1. Desenhe o formato redondo do maracujá cortado em cuia.",
      "2. Trace a casca grossa amarela com borda branca interna.",
      "3. Faça o LAGO DE SUCO AMARELO DOURADO BRILHANTE no interior.",
      "4. Desenhe as dezenas de sementinhas pretas envoltas em polpa gelatinosa.",
      "5. Finalize gotinhas de suco fresco aromático."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"46\" ry=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"100\" cy=\"115\" rx=\"38\" ry=\"34\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"85\" cy=\"105\" rx=\"4\" ry=\"6\" fill=\"#1e293b\" transform=\"rotate(20 85 105)\"/> <ellipse cx=\"112\" cy=\"102\" rx=\"4\" ry=\"6\" fill=\"#1e293b\" transform=\"rotate(-30 112 102)\"/> <ellipse cx=\"98\" cy=\"120\" rx=\"4\" ry=\"6\" fill=\"#1e293b\" transform=\"rotate(10 98 120)\"/> <ellipse cx=\"82\" cy=\"125\" rx=\"4\" ry=\"6\" fill=\"#1e293b\" transform=\"rotate(-40 82 125)\"/> <ellipse cx=\"115\" cy=\"122\" rx=\"4\" ry=\"6\" fill=\"#1e293b\" transform=\"rotate(35 115 122)\"/>",
      "<circle cx=\"84\" cy=\"103\" r=\"1.2\" fill=\"#ffffff\"/> <circle cx=\"111\" cy=\"100\" r=\"1.2\" fill=\"#ffffff\"/> <circle cx=\"97\" cy=\"118\" r=\"1.2\" fill=\"#ffffff\"/>",
      "<path d=\"M100 73 C100 62 105 55 108 50\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"165\" rx=\"46\" ry=\"7\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "caqui-maduro",
    "name": "Caqui Doce Vermelho",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "C A Q U I",
    "colors": [
      "#ea580c",
      "#f97316",
      "#15803d",
      "#fed7aa"
    ],
    "tags": [
      "outono",
      "folhas_topo",
      "doce",
      "vermelho",
      "pomar"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo arredondado levemente achatado e gordinho do caqui.",
      "2. Trace as QUATRO SÉPALAS GRANDES EM CRUZ de folhas secas no topo.",
      "3. Faça o cabinho lenhoso curto no centro da coroa de sépalas.",
      "4. Desenhe a cor vermelha alaranjada brilhante e translúcida.",
      "5. Adicione reflexos de doçura e maturidade na casca."
    ],
    "layers": [
      "<path d=\"M60 110 C55 85 80 80 100 80 C120 80 145 85 140 110 C140 145 125 158 100 158 C75 158 60 145 60 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 80 L88 65 L96 72 L100 80\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M100 80 L112 65 L104 72 L100 80\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M100 80 L82 82 L90 85 L100 80\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M100 80 L118 82 L110 85 L100 80\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M100 72 L100 58\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M75 105 C70 120 72 138 82 148\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"164\" rx=\"42\" ry=\"7\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "jabuticaba",
    "name": "Raminho de Jabuticabas",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "J A B U T I C A B A",
    "colors": [
      "#1e1b4b",
      "#312e81",
      "#78350f",
      "#ffffff"
    ],
    "tags": [
      "pretinhas",
      "tronco",
      "bolinhas",
      "doces",
      "brasil"
    ],
    "stepsDesc": [
      "1. Desenhe o TRONCO DE ÁRVORE MARROM e as várias jabuticabas pretas brotando direto dele.",
      "2. Trace as esferas perfeitamente redondas pretas brilhantes coladas na casca.",
      "3. Faça a covinha no ápice de cada jabuticaba.",
      "4. Adicione o ponto de brilho espelhado intenso em cada bolinha.",
      "5. Finalize folhas verdes frescas de jabuticabeira ao redor."
    ],
    "layers": [
      "<line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"185\" stroke=\"#78350f\" stroke-width=\"14\" stroke-linecap=\"round\"/>",
      "<circle cx=\"75\" cy=\"95\" r=\"16\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"125\" cy=\"85\" r=\"16\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"78\" cy=\"135\" r=\"15\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"122\" cy=\"130\" r=\"15\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"70\" cy=\"90\" r=\"3\" fill=\"#ffffff\"/> <circle cx=\"120\" cy=\"80\" r=\"3\" fill=\"#ffffff\"/> <circle cx=\"74\" cy=\"130\" r=\"3\" fill=\"#ffffff\"/> <circle cx=\"118\" cy=\"125\" r=\"3\" fill=\"#ffffff\"/>",
      "<path d=\"M60 85 C45 75 48 65 60 70 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M140 120 C155 110 152 100 140 105 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pitanga",
    "name": "Pitanga com Oito Gomos",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "P I T A N G A",
    "colors": [
      "#dc2626",
      "#ef4444",
      "#15803d",
      "#fca5a5"
    ],
    "tags": [
      "gomos",
      "vermelhinha",
      "árvore",
      "folha",
      "azedinha"
    ],
    "stepsDesc": [
      "1. Desenhe o formato arredondado achatado da pitanga.",
      "2. Trace os OITO GOMOS VERTICAIS SALIENTES característicos da pitanga.",
      "3. Faça as folhas secas em coroa no topo da fruta.",
      "4. Desenhe o cabinho longo curvado segurando a frutinha vermelha.",
      "5. Adicione brilho cintilante nos gomos apetitosos."
    ],
    "layers": [
      "<path d=\"M65 110 C65 85 135 85 135 110 C135 145 65 145 65 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 85 C92 105 92 135 100 145\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.2\"/> <path d=\"M100 85 C108 105 108 135 100 145\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.2\"/> <path d=\"M82 92 C75 108 75 130 85 140\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.2\"/> <path d=\"M118 92 C125 108 125 130 115 140\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.2\"/>",
      "<polygon points=\"100,85 95,78 100,80 105,78\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M100 80 C100 65 105 55 108 50\" stroke=\"#78350f\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M72 105 C68 118 70 130 76 138\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"155\" rx=\"38\" ry=\"6\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "carambola-estrela",
    "name": "Carambola em Formato de Estrela",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "E S T R E L A",
    "colors": [
      "#eab308",
      "#facc15",
      "#15803d",
      "#fef9c3"
    ],
    "tags": [
      "estrela",
      "cinco_quinas",
      "amarela",
      "fatia",
      "doce"
    ],
    "stepsDesc": [
      "1. Desenhe o formato alongado da carambola com suas 5 QUINAS/ARESTAS marcadas.",
      "2. Desenhe uma FATIA CORTADA AO LADO MOSTRANDO O PERFEITO FORMATO DE ESTRELA DE 5 PONTAS.",
      "3. Trace as bordas verdes nas arestas amarelas translúcidas.",
      "4. Adicione as sementinhas no centro da fatia estrelada.",
      "5. Finalize os reflexos de luz dourada na fruta tropical."
    ],
    "layers": [
      "<path d=\"M85 70 C70 95 65 130 80 155 C95 165 115 165 130 155 C145 130 140 95 125 70 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"105\" y1=\"70\" x2=\"105\" y2=\"162\" stroke=\"#65a30d\" stroke-width=\"2.5\"/> <line x1=\"88\" y1=\"78\" x2=\"82\" y2=\"152\" stroke=\"#65a30d\" stroke-width=\"2.5\"/> <line x1=\"122\" y1=\"78\" x2=\"128\" y2=\"152\" stroke=\"#65a30d\" stroke-width=\"2.5\"/>",
      "<polygon points=\"50,115 56,128 70,128 58,136 62,148 50,140 38,148 42,136 30,128 44,128\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"50\" cy=\"134\" r=\"2\" fill=\"#78350f\"/>",
      "<path d=\"M105 70 C105 58 110 52 112 48\" stroke=\"#78350f\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "acerola",
    "name": "Trio de Acerolas Vermelhas",
    "category": "frutas",
    "sub": "frutas",
    "diff": "facil",
    "word": "A C E R O L A",
    "colors": [
      "#dc2626",
      "#ef4444",
      "#15803d",
      "#ffffff"
    ],
    "tags": [
      "vitamina_c",
      "pequena",
      "vermelha",
      "suco",
      "cabinho"
    ],
    "stepsDesc": [
      "1. Desenhe o TRIO DE PEQUENAS ACEROLAS VERMELHAS agrupadas.",
      "2. Trace os três cabinhos finos convergindo para o mesmo galho.",
      "3. Faça os gomos sutis e a covinha no topo de cada frutinha.",
      "4. Desenhe folhas verdes brilhantes decorando o ramo.",
      "5. Adicione o brilho de vitamina C em cada acerola."
    ],
    "layers": [
      "<circle cx=\"75\" cy=\"125\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"115\" cy=\"115\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/> <circle cx=\"95\" cy=\"145\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 107 C82 90 92 75 100 65\" fill=\"none\" stroke=\"#65a30d\" stroke-width=\"2.2\"/> <path d=\"M115 97 C110 85 105 75 100 65\" fill=\"none\" stroke=\"#65a30d\" stroke-width=\"2.2\"/> <path d=\"M95 127 C96 105 98 85 100 65\" fill=\"none\" stroke=\"#65a30d\" stroke-width=\"2.2\"/>",
      "<path d=\"M100 65 C115 50 130 55 125 65 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"70\" cy=\"120\" r=\"2.5\" fill=\"#ffffff\"/> <circle cx=\"110\" cy=\"110\" r=\"2.5\" fill=\"#ffffff\"/> <circle cx=\"90\" cy=\"140\" r=\"2.5\" fill=\"#ffffff\"/>",
      "<path d=\"M72 108 Q75 112 78 108 M112 98 Q115 102 118 98 M92 128 Q95 132 98 128\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "roma-aberta",
    "name": "Romã Aberta com Rubis",
    "category": "frutas",
    "sub": "frutas",
    "diff": "medio",
    "word": "R O M Ã",
    "colors": [
      "#be123c",
      "#e11d48",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "sementes_rubi",
      "coroa",
      "natal",
      "sorte",
      "vermelha"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo redondo da romã com sua COROA DENTADA NO TOPO.",
      "2. Trace a abertura na casca revelando as câmaras internas cheias de sementes.",
      "3. Desenhe as DEZENAS DE SEMENTES POLIGONAIS VERMELHAS COMO RUBIS.",
      "4. Faça a casca grossa avermelhada e as membranas brancas internas.",
      "5. Finalize os reflexos preciosos em cada semente da romã."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"45\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"90,75 85,62 92,68 100,58 108,68 115,62 110,75\" fill=\"#b91c1c\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 105 C75 90 125 90 125 105 C130 135 120 150 100 150 C80 150 70 135 75 105 Z\" fill=\"#fecdd3\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"90,105 96,100 102,105 96,110\" fill=\"#be123c\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"105,108 112,102 118,108 112,114\" fill=\"#be123c\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"85,120 92,115 98,120 92,126\" fill=\"#be123c\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"102,125 108,120 114,125 108,132\" fill=\"#be123c\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<circle cx=\"95\" cy=\"103\" r=\"1\" fill=\"#ffffff\"/> <circle cx=\"110\" cy=\"106\" r=\"1\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cenoura-crocante",
    "name": "Cenoura com Rama Verde",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "C E N O U R A",
    "colors": [
      "#ea580c",
      "#f97316",
      "#16a34a",
      "#78350f"
    ],
    "tags": [
      "laranja",
      "folhas",
      "coelho",
      "terra",
      "riscos"
    ],
    "stepsDesc": [
      "1. Desenhe o formato cônico alongado afunilando até a ponta inferior.",
      "2. Trace a RAMA VERDE FRONDOSA DE FOLHAS no topo da cenoura.",
      "3. Faça as linhas horizontais de textura ao longo do corpo alaranjado.",
      "4. Desenhe um rostinho sorridente simpático se desejar.",
      "5. Finalize montinhos de terra fresca da colheita."
    ],
    "layers": [
      "<path d=\"M85 70 C85 62 115 62 115 70 L102 175 L98 175 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 65 L95 35 L100 48 L105 35 L100 65\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M96 65 L82 40 L90 52 L96 65\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M104 65 L118 40 L110 52 L104 65\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"88\" y1=\"90\" x2=\"102\" y2=\"90\" stroke=\"#c2410c\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"96\" y1=\"110\" x2=\"112\" y2=\"110\" stroke=\"#c2410c\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"92\" y1=\"130\" x2=\"106\" y2=\"130\" stroke=\"#c2410c\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"97\" y1=\"150\" x2=\"104\" y2=\"150\" stroke=\"#c2410c\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"95\" cy=\"95\" r=\"3.5\" fill=\"#1e293b\"/> <circle cx=\"105\" cy=\"95\" r=\"3.5\" fill=\"#1e293b\"/> <path d=\"M96 102 Q100 105 104 102\" stroke-width=\"1.8\"/>",
      "<path d=\"M70 175 Q100 170 130 175\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "milho-na-espiga",
    "name": "Espiga de Milho Amarelinha",
    "category": "frutas",
    "sub": "legumes",
    "diff": "medio",
    "word": "M I L H O",
    "colors": [
      "#facc15",
      "#eab308",
      "#16a34a",
      "#78350f"
    ],
    "tags": [
      "grãos",
      "palha",
      "pipoca",
      "amarelo",
      "fazenda"
    ],
    "stepsDesc": [
      "1. Desenhe a espiga cilíndrica arredondada no topo e na base.",
      "2. Trace as PALHAS VERDES ABERTAS abraçando a espiga como asas.",
      "3. Desenhe a grade de GRÃOS DE MILHO AMARELOS QUADRICULADOS alinhados.",
      "4. Faça os cabelinhos finos de milho saindo no topo.",
      "5. Finalize o cabinho na base onde a espiga foi colhida."
    ],
    "layers": [
      "<rect x=\"80\" y=\"65\" width=\"40\" height=\"95\" rx=\"18\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M80 150 C60 135 60 95 72 75 C75 105 75 135 85 155\" fill=\"#84cc16\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M120 150 C140 135 140 95 128 75 C125 105 125 135 115 155\" fill=\"#84cc16\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"90\" y1=\"75\" x2=\"90\" y2=\"150\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <line x1=\"100\" y1=\"70\" x2=\"100\" y2=\"155\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <line x1=\"110\" y1=\"75\" x2=\"110\" y2=\"150\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/>",
      "<line x1=\"82\" y1=\"90\" x2=\"118\" y2=\"90\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <line x1=\"82\" y1=\"105\" x2=\"118\" y2=\"105\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <line x1=\"82\" y1=\"120\" x2=\"118\" y2=\"120\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <line x1=\"82\" y1=\"135\" x2=\"118\" y2=\"135\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/>",
      "<path d=\"M96 65 C92 50 88 45 85 40 M100 65 C100 48 102 42 105 38 M104 65 C108 50 112 45 115 40\" stroke=\"#a16207\" stroke-width=\"1.5\"/> <rect x=\"95\" y=\"160\" width=\"10\" height=\"15\" rx=\"3\" fill=\"#65a30d\" stroke=\"#1e293b\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "tomate-vermelho",
    "name": "Tomate Redondo com Raminho",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "T O M A T E",
    "colors": [
      "#dc2626",
      "#ef4444",
      "#15803d",
      "#fca5a5"
    ],
    "tags": [
      "salada",
      "molho",
      "estrelinha",
      "vermelho",
      "redondo"
    ],
    "stepsDesc": [
      "1. Desenhe a esfera perfeita ligeiramente achatada no topo do tomate.",
      "2. Trace a ESTRELA DE FOLHAS VERDES (SÉPALAS) de 5 pontas no topo.",
      "3. Faça o cabinho curvado no centro da estrela verde.",
      "4. Desenhe o reflexo curvo branco na pele vermelha reluzente.",
      "5. Finalize gotas de água fresca sobre o tomate maduro."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"120\" rx=\"46\" ry=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,78 95,62 100,72 105,62\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"100,78 82,70 94,76\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"100,78 118,70 106,76\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"100,78 85,88 95,82\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"100,78 115,88 105,82\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M100 74 C100 60 105 52 110 48\" stroke=\"#15803d\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M72 105 C65 120 68 140 78 148\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"115\" cy=\"115\" r=\"2.5\" fill=\"#38bdf8\"/> <circle cx=\"125\" cy=\"125\" r=\"2\" fill=\"#38bdf8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cogumelo-da-floresta",
    "name": "Cogumelo com Pintinhas",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "C O G U M E L O",
    "colors": [
      "#ef4444",
      "#ffffff",
      "#fef3c7",
      "#78350f"
    ],
    "tags": [
      "chapéu",
      "pontinhos",
      "floresta",
      "haste",
      "fada"
    ],
    "stepsDesc": [
      "1. Desenhe o CHAPÉU EM DOMO ARREDONDADO vermelho do cogumelo da floresta.",
      "2. Trace o CAULE BRANCO GORDINHO e fofo sustentando o chapéu.",
      "3. Desenhe as GRANDES BOLINHAS BRANCAS ESPALHADAS no chapéu.",
      "4. Faça a gola/anel de babado decorativo no meio do caule.",
      "5. Adicione plantinhas e graminha na base do cogumelo."
    ],
    "layers": [
      "<path d=\"M50 105 C50 55 150 55 150 105 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 105 L80 165 C80 172 120 172 120 165 L115 105\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"75\" cy=\"85\" r=\"7\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"72\" r=\"8\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"125\" cy=\"85\" r=\"7\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M78 128 Q100 135 122 128\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M65 172 Q75 160 85 172 M115 172 Q125 160 135 172\" stroke=\"#22c55e\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "berinjela-roxa",
    "name": "Berinjela Roxa Brilhante",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "B E R I N J E L A",
    "colors": [
      "#581c87",
      "#7e22ce",
      "#15803d",
      "#ffffff"
    ],
    "tags": [
      "roxa",
      "coroa_verde",
      "curva",
      "brilho",
      "legume"
    ],
    "stepsDesc": [
      "1. Desenhe o formato em gota alongada e bojuda na base da berinjela.",
      "2. Trace o CÁLICE VERDE COM PONTAS afiadas abraçando o topo da fruta.",
      "3. Faça o cabinho curvo e grosso no topo.",
      "4. Desenhe o brilho curvo branco espelhado na casca roxa escura.",
      "5. Finalize contornos nítidos para colorir de roxo beringela profundo."
    ],
    "layers": [
      "<path d=\"M88 75 C85 65 115 65 112 75 C112 95 145 110 145 145 C145 172 122 175 100 175 C78 175 55 172 55 145 C55 110 88 95 88 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,75 88,88 95,82\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"100,75 112,88 105,82\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"100,75 100,92 103,82\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M100 75 C100 62 105 52 110 46\" stroke=\"#15803d\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M75 115 C68 130 70 152 82 162\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"180\" rx=\"42\" ry=\"7\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "brocolis-arvore",
    "name": "Brócolis em Formato de Árvore",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "B R Ó C O L I S",
    "colors": [
      "#15803d",
      "#16a34a",
      "#86efac",
      "#78350f"
    ],
    "tags": [
      "arvorezinha",
      "floretes",
      "verde",
      "saudável",
      "talo"
    ],
    "stepsDesc": [
      "1. Desenhe o talo grosso bifurcado do brócolis na base.",
      "2. Trace a COPA NUVEM DE FLORETES VERDES cheia de ondinhas como uma arvorezinha.",
      "3. Desenhe as divisões internas dos pequenos buquês de flores.",
      "4. Adicione os pontinhos de textura granulada em cada florete.",
      "5. Finalize um rostinho simpático no tronco."
    ],
    "layers": [
      "<path d=\"M85 125 L80 170 C80 175 120 175 120 170 L115 125\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M70 125 C50 120 45 95 60 80 C50 65 70 45 90 52 C100 38 120 38 130 52 C145 45 165 65 155 80 C170 95 165 120 145 125 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M78 88 Q95 100 100 125 M122 88 Q110 100 100 125\" stroke=\"#15803d\" stroke-width=\"2.2\"/>",
      "<circle cx=\"92\" cy=\"145\" r=\"3\" fill=\"#1e293b\"/> <circle cx=\"108\" cy=\"145\" r=\"3\" fill=\"#1e293b\"/> <path d=\"M96 155 Q100 158 104 155\" stroke-width=\"1.8\"/>",
      "<circle cx=\"75\" cy=\"75\" r=\"1.5\" fill=\"#15803d\"/> <circle cx=\"100\" cy=\"60\" r=\"1.5\" fill=\"#15803d\"/> <circle cx=\"135\" cy=\"75\" r=\"1.5\" fill=\"#15803d\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "abobora-outono",
    "name": "Abóbora Redonda com Gomos",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "A B Ó B O R A",
    "colors": [
      "#ea580c",
      "#f97316",
      "#15803d",
      "#78350f"
    ],
    "tags": [
      "gomos",
      "talo_curvo",
      "outono",
      "sopa",
      "halloween"
    ],
    "stepsDesc": [
      "1. Desenhe o formato redondo achatado e bojudo da abóbora.",
      "2. Trace os GOMOS CURVOS PROFUNDOS que dividem a fruta de cima a baixo.",
      "3. Faça o CABO LENHOSO CURVADO E ANGULAR no topo.",
      "4. Desenhe gavinhas em espiral saindo perto do cabo.",
      "5. Finalize o acabamento do gomo central e reflexos de outono."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"125\" rx=\"52\" ry=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 83 C82 98 82 152 100 167\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M100 83 C118 98 118 152 100 167\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M100 83 C65 98 65 152 100 167\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M100 83 C135 98 135 152 100 167\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M96 83 L92 55 C92 48 108 48 108 55 L104 83 Z\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M108 58 C120 48 130 55 125 65\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"172\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "batata-sorridente",
    "name": "Batatinha Sorridente",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "B A T A T A",
    "colors": [
      "#d97706",
      "#b45309",
      "#fef3c7",
      "#1e293b"
    ],
    "tags": [
      "pontinhos",
      "marrom",
      "terra",
      "frita",
      "fofa"
    ],
    "stepsDesc": [
      "1. Desenhe a forma oval orgânica irregular e divertida da batata.",
      "2. Trace as covinhas e brotos ('olhos') da casca marrom suave.",
      "3. Desenhe um ROSTINHO SUPER ALEGRE E SORRIDENTE com bochechas.",
      "4. Faça mãozinhas e pezinhos acenando felizes.",
      "5. Adicione texturas salpicadas da terra fresca da horta."
    ],
    "layers": [
      "<path d=\"M65 95 C55 120 60 150 85 160 C115 170 145 155 145 125 C145 95 120 75 95 80 C80 82 70 88 65 95 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"85\" cy=\"115\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"114\" r=\"1.8\" fill=\"#ffffff\"/> <circle cx=\"115\" cy=\"115\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"114\" cy=\"114\" r=\"1.8\" fill=\"#ffffff\"/> <path d=\"M92 128 Q100 138 108 128\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"76\" cy=\"124\" r=\"4\" fill=\"#f43f5e\" opacity=\"0.6\"/> <circle cx=\"124\" cy=\"124\" r=\"4\" fill=\"#f43f5e\" opacity=\"0.6\"/>",
      "<ellipse cx=\"80\" cy=\"92\" rx=\"3\" ry=\"1.5\" fill=\"#a16207\"/> <ellipse cx=\"130\" cy=\"105\" rx=\"3\" ry=\"1.5\" fill=\"#a16207\"/> <ellipse cx=\"110\" cy=\"148\" rx=\"3\" ry=\"1.5\" fill=\"#a16207\"/>",
      "<path d=\"M58 118 C48 115 45 120 52 125 M148 118 C158 115 160 120 152 125\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pimentao-colorido",
    "name": "Pimentão com Caule Verde",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "P I M E N T Ã O",
    "colors": [
      "#dc2626",
      "#eab308",
      "#15803d",
      "#ffffff"
    ],
    "tags": [
      "três_gomos",
      "brilho",
      "salada",
      "caule",
      "colorido"
    ],
    "stepsDesc": [
      "1. Desenhe o formato em bloco com 3 a 4 lóbulos arredondados do pimentão.",
      "2. Trace o PEDÚNCULO/CAULE VERDE GROSSO E FORTE no centro superior.",
      "3. Faça as covinhas profundas entre os gomos do pimentão.",
      "4. Desenhe o reflexo curvo branco na pele reluzente e lisa.",
      "5. Finalize contornos firmes para colorir de verde, amarelo ou vermelho."
    ],
    "layers": [
      "<path d=\"M65 95 C55 105 55 150 75 165 C85 170 115 170 125 165 C145 150 145 105 135 95 C125 85 75 85 65 95 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 92 C80 110 82 155 90 168 M115 92 C120 110 118 155 110 168\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M98 85 L95 55 C95 48 105 48 105 55 L102 85 Z\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"100\" cy=\"85\" rx=\"10\" ry=\"5\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M72 108 C68 122 70 145 78 155\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"174\" rx=\"42\" ry=\"7\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "ervilha-na-vagem",
    "name": "Vagem de Ervilhas",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "E R V I L H A",
    "colors": [
      "#16a34a",
      "#22c55e",
      "#86efac",
      "#15803d"
    ],
    "tags": [
      "bolinhas",
      "vagem",
      "aberta",
      "verde",
      "grãos"
    ],
    "stepsDesc": [
      "1. Desenhe a VAGEM CURVADA EM FORMA DE CANOA aberta.",
      "2. Trace as QUATRO ERVILHAS REDONDAS PERFEITAS aninhadas dentro dela.",
      "3. Faça a pontinha afilada na extremidade da vagem e o cabinho.",
      "4. Desenhe rostinhos fofos em cada uma das 4 ervilhinhas bebês.",
      "5. Adicione folhas de ervilheira e gavinha encaracolada."
    ],
    "layers": [
      "<path d=\"M45 125 C75 155 135 155 165 125 C145 138 65 138 45 125 Z\" fill=\"#84cc16\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"75\" cy=\"125\" r=\"12\" fill=\"#a3e635\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"95\" cy=\"122\" r=\"12\" fill=\"#a3e635\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"115\" cy=\"122\" r=\"12\" fill=\"#a3e635\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"135\" cy=\"125\" r=\"12\" fill=\"#a3e635\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<circle cx=\"73\" cy=\"123\" r=\"1.8\" fill=\"#1e293b\"/> <circle cx=\"77\" cy=\"123\" r=\"1.8\" fill=\"#1e293b\"/> <circle cx=\"93\" cy=\"120\" r=\"1.8\" fill=\"#1e293b\"/> <circle cx=\"97\" cy=\"120\" r=\"1.8\" fill=\"#1e293b\"/> <circle cx=\"113\" cy=\"120\" r=\"1.8\" fill=\"#1e293b\"/> <circle cx=\"117\" cy=\"120\" r=\"1.8\" fill=\"#1e293b\"/> <circle cx=\"133\" cy=\"123\" r=\"1.8\" fill=\"#1e293b\"/> <circle cx=\"137\" cy=\"123\" r=\"1.8\" fill=\"#1e293b\"/>",
      "<path d=\"M45 125 C40 120 35 125 32 120\" stroke=\"#65a30d\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M165 125 C175 120 180 122 185 125\" stroke=\"#65a30d\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 115 C25 105 28 95 38 98\" fill=\"none\" stroke=\"#65a30d\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "alface-crespa",
    "name": "Pé de Alface Fresquinha",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "A L F A C E",
    "colors": [
      "#22c55e",
      "#16a34a",
      "#86efac",
      "#ffffff"
    ],
    "tags": [
      "folhas_onduladas",
      "salada",
      "horta",
      "verde",
      "crocante"
    ],
    "stepsDesc": [
      "1. Desenhe a base do talo e as folhas centrais sobrepostas.",
      "2. Trace as FOLHAS EXTERNAS CHEIAS DE ONDULAÇÕES E BABADOS volumosos.",
      "3. Faça as nervuras brancas ramificadas subindo pelo centro das folhas.",
      "4. Adicione texturas das folhas crespas bem frescas.",
      "5. Finalize gotas de orvalho cristalino nas folhas verdes."
    ],
    "layers": [
      "<path d=\"M90 160 C90 168 110 168 110 160 Z\" fill=\"#84cc16\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 145 C45 130 50 100 65 95 C55 80 80 65 95 72 C105 58 130 65 132 82 C148 78 160 105 145 125 C155 140 140 155 125 150 C110 158 90 158 75 150 Z\" fill=\"#4ade80\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 150 C95 125 90 105 95 85 M100 150 C105 125 115 105 118 90\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M78 120 Q85 110 95 120 M122 120 Q115 110 105 120\" stroke=\"#15803d\" stroke-width=\"2\"/>",
      "<circle cx=\"85\" cy=\"100\" r=\"2.5\" fill=\"#38bdf8\"/> <circle cx=\"125\" cy=\"105\" r=\"2.5\" fill=\"#38bdf8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cebola-camadas",
    "name": "Cebola com Casca Dourada",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "C E B O L A",
    "colors": [
      "#d97706",
      "#f59e0b",
      "#15803d",
      "#fef3c7"
    ],
    "tags": [
      "camadas",
      "raiz",
      "tempero",
      "redonda",
      "casca"
    ],
    "stepsDesc": [
      "1. Desenhe a forma em gota arredondada bojuda com ponta cônica da cebola.",
      "2. Trace as RAÍZES FINAS EM BARBA saindo na base inferior.",
      "3. Faça o broto verde pontiagudo saindo no topo da casca dourada.",
      "4. Desenhe as LINHAS LONGITUDINAIS DAS CAMADAS da casca.",
      "5. Adicione o brilho característico da casca brilhante da cebola."
    ],
    "layers": [
      "<path d=\"M100 70 C70 85 58 120 68 145 C78 165 122 165 132 145 C142 120 130 85 100 70 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"95\" y1=\"165\" x2=\"90\" y2=\"182\" stroke=\"#a16207\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <line x1=\"100\" y1=\"165\" x2=\"100\" y2=\"185\" stroke=\"#a16207\" stroke-width=\"1.8\" stroke-linecap=\"round\"/> <line x1=\"105\" y1=\"165\" x2=\"110\" y2=\"182\" stroke=\"#a16207\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 L96 48 L100 55 L104 48 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M100 70 C88 95 88 145 100 165\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/> <path d=\"M100 70 C112 95 112 145 100 165\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/> <path d=\"M100 70 C75 100 75 140 100 165\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/> <path d=\"M100 70 C125 100 125 140 100 165\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/>",
      "<circle cx=\"85\" cy=\"120\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"115\" cy=\"120\" r=\"1.5\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "alho-cabeca",
    "name": "Cabeça de Alho com Dentes",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "A L H O",
    "colors": [
      "#ffffff",
      "#e2e8f0",
      "#a855f7",
      "#78350f"
    ],
    "tags": [
      "dentes",
      "tempero",
      "branco",
      "talo",
      "gourmet"
    ],
    "stepsDesc": [
      "1. Desenhe a silhueta em bulbo bojudo da cabeça de alho inteira.",
      "2. Trace as DIVISÕES VERTICAIS CURVAS DOS VÁRIOS DENTES DE ALHO unidos.",
      "3. Faça a haste seca central no topo e as raízes curtas embaixo.",
      "4. Desenhe um DENTE DE ALHO DESCASCADO solto ao lado.",
      "5. Adicione texturas das películas de casca branca e arroxeada."
    ],
    "layers": [
      "<path d=\"M90 75 C60 90 60 145 80 162 C90 168 110 168 120 162 C140 145 140 90 110 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 75 C92 95 90 145 98 165\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M100 75 C108 95 110 145 102 165\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M100 75 C78 100 78 140 88 162\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M100 75 C122 100 122 140 112 162\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"96\" y=\"52\" width=\"8\" height=\"25\" rx=\"3\" fill=\"#d6d3d1\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M92 166 L90 178 M100 166 L100 180 M108 166 L110 178\" stroke=\"#a8a29e\" stroke-width=\"1.8\"/>",
      "<path d=\"M142 140 C140 128 155 125 158 135 C162 148 155 160 148 158 Z\" fill=\"#f5f5f4\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"100\" cy=\"172\" rx=\"42\" ry=\"7\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pepino-salada",
    "name": "Pepino Verde Listradinho",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "P E P I N O",
    "colors": [
      "#15803d",
      "#22c55e",
      "#86efac",
      "#fef08a"
    ],
    "tags": [
      "alongado",
      "pontinhos",
      "refrescante",
      "salada",
      "verde"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo cilíndrico alongado levemente arqueado do pepino.",
      "2. Trace as pontas arredondadas e o cabinho verde com flor amarela.",
      "3. Faça as LINHAS LONGITUDINAIS SUAVES COM PEQUENAS VERRUGAS/PONTINHOS.",
      "4. Adicione duas rodelas de pepino cortadas ao lado.",
      "5. Finalize o brilho da casca verde escura fresca."
    ],
    "layers": [
      "<path d=\"M55 110 C50 95 65 85 80 88 L145 105 C158 110 158 128 145 132 L80 145 C65 148 50 135 55 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M52 105 C42 100 40 108 35 105\" stroke=\"#15803d\" stroke-width=\"3\" stroke-linecap=\"round\"/> <polygon points=\"35,105 30,98 32,106 28,108 34,110\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M65 105 L145 118\" stroke=\"#15803d\" stroke-width=\"1.8\" stroke-dasharray=\"8 4\"/> <path d=\"M70 125 L140 132\" stroke=\"#15803d\" stroke-width=\"1.8\" stroke-dasharray=\"8 4\"/>",
      "<circle cx=\"85\" cy=\"100\" r=\"1.5\" fill=\"#15803d\"/> <circle cx=\"115\" cy=\"108\" r=\"1.5\" fill=\"#15803d\"/> <circle cx=\"100\" cy=\"125\" r=\"1.5\" fill=\"#15803d\"/> <circle cx=\"130\" cy=\"128\" r=\"1.5\" fill=\"#15803d\"/>",
      "<ellipse cx=\"65\" cy=\"155\" rx=\"14\" ry=\"10\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"65\" cy=\"155\" r=\"3\" fill=\"#fef08a\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "rabanete-rosa",
    "name": "Rabanete com Folhas Verdes",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "R A B A N E T E",
    "colors": [
      "#e11d48",
      "#f43f5e",
      "#15803d",
      "#ffffff"
    ],
    "tags": [
      "raiz_fina",
      "rosa",
      "redondo",
      "crocante",
      "folhas"
    ],
    "stepsDesc": [
      "1. Desenhe a esfera perfeita rosada/vermelha do rabanete.",
      "2. Trace a RAIZ FINA COMO UM FIO esticada para baixo.",
      "3. Faça o BUQUÊ DE FOLHAS VERDES LANCEOLADAS brotando no topo.",
      "4. Desenhe a base branca degradê antes da raiz.",
      "5. Adicione gotinhas de frescor e terra adubada."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"35\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 155 C100 170 102 180 106 188\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M96 85 C90 55 80 45 75 40 C85 52 92 68 96 85\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M100 85 C100 52 102 42 102 35 C106 48 104 68 100 85\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M104 85 C110 55 120 45 125 40 C115 52 108 68 104 85\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M82 110 C76 122 78 138 88 145\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M80 145 Q100 152 120 145\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "beterraba-roxa",
    "name": "Beterraba Vermelha da Terra",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "B E T E R R A B A",
    "colors": [
      "#881337",
      "#9f1239",
      "#15803d",
      "#f43f5e"
    ],
    "tags": [
      "roxa",
      "raiz",
      "talo_vermelho",
      "suco",
      "doce"
    ],
    "stepsDesc": [
      "1. Desenhe o formato em bulbo arredondado cônico da beterraba da terra.",
      "2. Trace a raiz pontiaguda longa saindo na base.",
      "3. Faça os TALOS VERMELHOS FORTES com grandes folhas arroxeadas.",
      "4. Desenhe os anéis concêntricos na fatia cortada ao lado.",
      "5. Finalize a cor roxa/vinho escura intensa."
    ],
    "layers": [
      "<path d=\"M68 110 C65 85 135 85 132 110 C132 140 105 165 100 170 C95 165 68 140 68 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"170\" x2=\"100\" y2=\"188\" stroke=\"#831843\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M95 88 L85 45 C80 55 88 72 95 88\" fill=\"#15803d\" stroke=\"#831843\" stroke-width=\"2.5\"/> <path d=\"M105 88 L115 45 C120 55 112 72 105 88\" fill=\"#15803d\" stroke=\"#831843\" stroke-width=\"2.5\"/>",
      "<path d=\"M82 108 C78 122 80 138 90 148\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"20\" ry=\"14\" fill=\"none\" stroke=\"#be185d\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "mandioca",
    "name": "Mandioca com Casca Marrom",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "M A N D I O C A",
    "colors": [
      "#78350f",
      "#ffffff",
      "#b45309",
      "#cbd5e1"
    ],
    "tags": [
      "raiz",
      "aipim",
      "branca",
      "brasil",
      "frita"
    ],
    "stepsDesc": [
      "1. Desenhe a raiz cilíndrica rústica alongada com casca marrom áspera.",
      "2. Trace a quebra ou corte mostrando a POLPA BRANQUINHA PURA no interior.",
      "3. Faça as cascas soltando nas bordas do corte.",
      "4. Adicione anéis e rugosidades na casca lenhosa marrom.",
      "5. Finalize pedaços de mandioca empilhados prontos para cozinhar."
    ],
    "layers": [
      "<path d=\"M50 115 C45 100 60 92 85 95 L145 112 C155 118 152 135 140 138 L80 142 C58 142 45 130 50 115 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"142\" cy=\"125\" rx=\"8\" ry=\"14\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"142\" cy=\"125\" r=\"2.5\" fill=\"#78350f\"/>",
      "<line x1=\"75\" y1=\"102\" x2=\"72\" y2=\"135\" stroke=\"#78350f\" stroke-width=\"2\"/> <line x1=\"105\" y1=\"110\" x2=\"102\" y2=\"138\" stroke=\"#78350f\" stroke-width=\"2\"/>",
      "<path d=\"M60 148 L135 152\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"172\" rx=\"55\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "couve-flor",
    "name": "Couve-Flor com Talo Verde",
    "category": "frutas",
    "sub": "legumes",
    "diff": "facil",
    "word": "C O U V E - F L O R",
    "colors": [
      "#ffffff",
      "#f1f5f9",
      "#16a34a",
      "#86efac"
    ],
    "tags": [
      "branca",
      "folhas_base",
      "floretes",
      "vegetal",
      "saudável"
    ],
    "stepsDesc": [
      "1. Desenhe a grande cabeça arredondada formada por buquês brancos cremosos.",
      "2. Trace as FOLHAS VERDES LARGAS envolvendo a base da couve-flor como um berço.",
      "3. Faça os contornos encaracolados dos floretes de couve-flor.",
      "4. Desenhe as nervuras grossas nas folhas verdes de proteção.",
      "5. Finalize sombreamento sutil demonstrando o volume da flor."
    ],
    "layers": [
      "<path d=\"M70 125 C55 120 52 95 68 85 C62 70 80 55 95 60 C105 48 125 50 132 65 C148 58 160 80 152 98 C165 115 150 135 135 135 Z\" fill=\"#f5f5f4\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 135 C50 155 75 168 95 162 M145 135 C150 155 125 168 105 162\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 92 Q100 105 100 135 M115 92 Q100 105 100 135\" stroke=\"#d6d3d1\" stroke-width=\"2\"/>",
      "<path d=\"M75 150 L95 162 M125 150 L105 162\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>",
      "<circle cx=\"85\" cy=\"80\" r=\"1.5\" fill=\"#a8a29e\"/> <circle cx=\"115\" cy=\"80\" r=\"1.5\" fill=\"#a8a29e\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "aspargo-feixe",
    "name": "Feixe de Aspargos",
    "category": "frutas",
    "sub": "legumes",
    "diff": "medio",
    "word": "A S P A R G O",
    "colors": [
      "#15803d",
      "#22c55e",
      "#86efac",
      "#78350f"
    ],
    "tags": [
      "pontas_escamosas",
      "amarrado",
      "verde",
      "elegante",
      "hastes"
    ],
    "stepsDesc": [
      "1. Desenhe o FEIXE DE TRÊS ASPARGOS RETOS E ELEGANTES juntos.",
      "2. Trace a FITA OU LAÇO AMARRANDO O FEIXE no centro.",
      "3. Faça as PONTAS EM ESCAMAS TRIANGULARES pontiagudas no topo.",
      "4. Desenhe as pequenas brácteas triangulares ao longo de cada talo.",
      "5. Finalize o corte limpo reto na base dos aspargos."
    ],
    "layers": [
      "<rect x=\"75\" y=\"55\" width=\"14\" height=\"115\" rx=\"6\" fill=\"#84cc16\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"93\" y=\"48\" width=\"14\" height=\"122\" rx=\"6\" fill=\"#84cc16\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"111\" y=\"55\" width=\"14\" height=\"115\" rx=\"6\" fill=\"#84cc16\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"70\" y=\"110\" width=\"60\" height=\"14\" rx=\"3\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"117\" r=\"4\" fill=\"#facc15\"/>",
      "<polygon points=\"82,55 78,42 86,42\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,48 96,35 104,35\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"118,55 114,42 122,42\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"82,85 78,78 86,78\" fill=\"#15803d\"/> <polygon points=\"100,75 96,68 104,68\" fill=\"#15803d\"/> <polygon points=\"118,85 114,78 122,78\" fill=\"#15803d\"/>",
      "<line x1=\"75\" y1=\"170\" x2=\"125\" y2=\"170\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "alcachofra",
    "name": "Alcachofra com Pétalas",
    "category": "frutas",
    "sub": "legumes",
    "diff": "desafio",
    "word": "A L C A C H O F R A",
    "colors": [
      "#166534",
      "#15803d",
      "#86efac",
      "#a855f7"
    ],
    "tags": [
      "escamas",
      "coração",
      "folhas_camadas",
      "verde",
      "flor"
    ],
    "stepsDesc": [
      "1. Desenhe o formato de pinha/globo oval da flor da alcachofra.",
      "2. Trace as DEZENAS DE BRÁCTEAS/PÉTALAS CARNOSAS TRIANGULARES sobrepostas.",
      "3. Faça o caule grosso carnoso sustentando a flor.",
      "4. Adicione as pontinhas espinhosas no ápice de cada pétala.",
      "5. Finalize o degradê de verde oliva e pontas arroxeadas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"38\" ry=\"45\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,72 88,90 100,85 112,90\" fill=\"#65a30d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"85,92 72,110 85,105 98,110\" fill=\"#65a30d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"115,92 102,110 115,105 128,110\" fill=\"#65a30d\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"100,112 88,130 100,125 112,130\" fill=\"#65a30d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"85,132 75,148 88,144 100,148\" fill=\"#65a30d\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"115,132 100,148 112,144 125,148\" fill=\"#65a30d\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"94\" y=\"155\" width=\"12\" height=\"28\" rx=\"4\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"72\" r=\"1.5\" fill=\"#a855f7\"/> <circle cx=\"85\" cy=\"92\" r=\"1.5\" fill=\"#a855f7\"/> <circle cx=\"115\" cy=\"92\" r=\"1.5\" fill=\"#a855f7\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "hamburguer-completo",
    "name": "Hambúrguer com Pão e Queijo",
    "category": "frutas",
    "sub": "lanches",
    "diff": "medio",
    "word": "L A N C H E",
    "colors": [
      "#d97706",
      "#78350f",
      "#facc15",
      "#ef4444"
    ],
    "tags": [
      "gergelim",
      "carne",
      "queijo",
      "alface",
      "pão"
    ],
    "stepsDesc": [
      "1. Desenhe o pão superior arredondado em domo com gergelim.",
      "2. Trace o hambúrguer suculento e a fatia de queijo com pontas derretidas.",
      "3. Faça as folhas crespas de alface verde e fatias de tomate.",
      "4. Desenhe o pão inferior reto com bordas macias.",
      "5. Adicione os pontinhos de gergelim no topo do pão dourado."
    ],
    "layers": [
      "<path d=\"M60 85 C60 55 140 55 140 85 Z\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"55\" y=\"112\" width=\"90\" height=\"18\" rx=\"6\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <polygon points=\"65,115 135,115 125,128 100,122 75,130\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M52 102 Q60 95 68 102 Q76 95 84 102 Q92 95 100 102 Q108 95 116 102 Q124 95 132 102 Q140 95 148 102\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"3.5\"/> <circle cx=\"80\" cy=\"108\" r=\"8\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"120\" cy=\"108\" r=\"8\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"62\" y=\"132\" width=\"76\" height=\"20\" rx=\"8\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"80\" cy=\"70\" rx=\"2\" ry=\"3\" fill=\"#ffffff\" transform=\"rotate(20 80 70)\"/> <ellipse cx=\"100\" cy=\"65\" rx=\"2\" ry=\"3\" fill=\"#ffffff\"/> <ellipse cx=\"120\" cy=\"70\" rx=\"2\" ry=\"3\" fill=\"#ffffff\" transform=\"rotate(-20 120 70)\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "fatia-de-pizza",
    "name": "Fatia de Pizza com Queijo",
    "category": "frutas",
    "sub": "lanches",
    "diff": "facil",
    "word": "P I Z Z A",
    "colors": [
      "#eab308",
      "#dc2626",
      "#d97706",
      "#15803d"
    ],
    "tags": [
      "calabresa",
      "queijo_derretido",
      "borda",
      "triângulo",
      "fatia"
    ],
    "stepsDesc": [
      "1. Desenhe o triângulo com a borda superior curvada da fatia de pizza.",
      "2. Trace a CROSTA DOURADA GROSSA CROCANTE na borda superior.",
      "3. Faça as rodelas redondas de calabresa/pepperoni espalhadas.",
      "4. Desenhe o QUEIJO DERRETIDO PUXANDO EM FIOS na ponta inferior.",
      "5. Adicione folhas de manjericão e azeitonas pretas saborosas."
    ],
    "layers": [
      "<polygon points=\"100,165 50,75 150,75\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<path d=\"M46 75 C46 65 154 65 154 75 C154 82 46 82 46 75 Z\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"85\" cy=\"100\" r=\"10\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"115\" cy=\"105\" r=\"10\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"130\" r=\"9\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M100 165 C95 175 100 185 102 188 M102 165 C108 178 105 185 104 188\" stroke=\"#facc15\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"75\" cy=\"118\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"125\" cy=\"122\" r=\"4\" fill=\"#1e293b\"/> <path d=\"M98 90 C92 85 96 80 102 85 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "casquinha-sorvete",
    "name": "Sorvete com Duas Bolas",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "facil",
    "word": "S O R V E T E",
    "colors": [
      "#ec4899",
      "#38bdf8",
      "#d97706",
      "#ef4444"
    ],
    "tags": [
      "bolas",
      "casquinha",
      "waffle",
      "calda",
      "cereja"
    ],
    "stepsDesc": [
      "1. Desenhe o cone triangular invertido da casquinha de waffer.",
      "2. Trace a PRIMEIRA BOLA DE SORVETE cremosa com ondinhas derretidas.",
      "3. Desenhe a SEGUNDA BOLA DE SORVETE no topo.",
      "4. Faça a grade quadriculada de waffer na casquinha.",
      "5. Adicione confeitos coloridos salpicados e calda escorrendo."
    ],
    "layers": [
      "<polygon points=\"100,180 75,120 125,120\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<path d=\"M72 120 C65 105 75 90 90 90 C100 90 100 95 105 90 C115 90 128 102 122 120 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"78\" r=\"22\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"82\" y1=\"130\" x2=\"118\" y2=\"170\" stroke=\"#b45309\" stroke-width=\"1.8\"/> <line x1=\"88\" y1=\"120\" x2=\"112\" y2=\"160\" stroke=\"#b45309\" stroke-width=\"1.8\"/> <line x1=\"118\" y1=\"130\" x2=\"82\" y2=\"170\" stroke=\"#b45309\" stroke-width=\"1.8\"/> <line x1=\"112\" y1=\"120\" x2=\"88\" y2=\"160\" stroke=\"#b45309\" stroke-width=\"1.8\"/>",
      "<rect x=\"92\" y=\"68\" width=\"5\" height=\"2\" fill=\"#ef4444\" transform=\"rotate(30 92 68)\"/> <rect x=\"108\" y=\"72\" width=\"5\" height=\"2\" fill=\"#eab308\" transform=\"rotate(-20 108 72)\"/> <rect x=\"100\" y=\"82\" width=\"5\" height=\"2\" fill=\"#22c55e\" transform=\"rotate(45 100 82)\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cupcake-cereja",
    "name": "Cupcake com Confeitos",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "facil",
    "word": "C U P C A K E",
    "colors": [
      "#f472b6",
      "#ec4899",
      "#facc15",
      "#ef4444"
    ],
    "tags": [
      "cobertura",
      "forminha",
      "confeitos",
      "cereja",
      "doce"
    ],
    "stepsDesc": [
      "1. Desenhe a forminha plissada trapezoidal de papel do cupcake.",
      "2. Trace o BOLO FOFINHO DOURADO crescendo acima da forminha.",
      "3. Faça a COBERTURA ESPIRALADA VOLUMOSA EM NUVEM de glacê cremoso.",
      "4. Desenhe a CEREJA VERMELHA BRILHANTE COM CABINHO no topo.",
      "5. Espalhe granulados coloridos e estrelinhas sobre o glacê."
    ],
    "layers": [
      "<polygon points=\"72,120 78,168 122,168 128,120\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<line x1=\"84\" y1=\"120\" x2=\"88\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"96\" y1=\"120\" x2=\"98\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"108\" y1=\"120\" x2=\"106\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"118\" y1=\"120\" x2=\"114\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M68 120 C55 105 85 95 100 95 C115 95 145 105 132 120 Z\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 102 C65 85 85 70 100 70 C115 70 135 85 125 102 C115 110 85 110 75 102 Z\" fill=\"#f43f5e\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"58\" r=\"10\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M100 50 C105 38 115 35 120 32\" stroke=\"#78350f\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"88\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"115\" cy=\"88\" r=\"1.5\" fill=\"#ffffff\"/> <rect x=\"92\" y=\"78\" width=\"4\" height=\"2\" fill=\"#38bdf8\"/> <rect x=\"108\" y=\"80\" width=\"4\" height=\"2\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "picole-frutas",
    "name": "Picolé Gelado no Palito",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "facil",
    "word": "P I C O L É",
    "colors": [
      "#06b6d4",
      "#ec4899",
      "#d97706",
      "#ffffff"
    ],
    "tags": [
      "palito",
      "gelo",
      "mordida",
      "verão",
      "doce"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo retangular com topo arredondado do picolé de frutas.",
      "2. Trace o PALITO DE MADEIRA RETO saindo na base inferior.",
      "3. Faça a COBERTURA DE CHOCOLATE COM MORDIDA no canto superior.",
      "4. Desenhe as listras horizontais coloridas de sabor.",
      "5. Adicione gotinhas de picolé gelado derretendo no calor."
    ],
    "layers": [
      "<path d=\"M72 145 L72 70 C72 50 128 50 128 70 L128 145 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"93\" y=\"145\" width=\"14\" height=\"35\" rx=\"4\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M115 50 Q120 60 128 58 Q135 68 128 75\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"72\" y1=\"95\" x2=\"128\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"72\" y1=\"120\" x2=\"128\" y2=\"120\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M80 80 L80 135\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/> <circle cx=\"136\" cy=\"155\" r=\"2.5\" fill=\"#0ea5e9\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "donut-rosquinha",
    "name": "Donut com Calda de Morango",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "facil",
    "word": "D O N U T",
    "colors": [
      "#f472b6",
      "#d97706",
      "#facc15",
      "#3b82f6"
    ],
    "tags": [
      "furo",
      "glacê",
      "confeitos",
      "rosquinha",
      "doce"
    ],
    "stepsDesc": [
      "1. Desenhe o grande círculo externo bojudo da rosquinha donut.",
      "2. Trace o FURO CIRCULAR PERFEITO no centro do donut.",
      "3. Faça a COBERTURA CREMOSA DE MORANGO COM ONDINHAS derretidas.",
      "4. Espalhe DEZENAS DE GRANULADOS COLORIDOS em pauzinhos e bolinhas.",
      "5. Finalize o brilho da calda açucarada deliciosa."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"48\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"18\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M60 115 C60 85 85 75 100 75 C115 75 140 85 140 115 C135 125 125 120 120 130 C115 122 105 125 100 130 C95 122 85 125 80 130 C75 120 65 125 60 115 Z\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"90\" width=\"6\" height=\"2.5\" rx=\"1\" fill=\"#38bdf8\" transform=\"rotate(30 75 90)\"/> <rect x=\"120\" y=\"92\" width=\"6\" height=\"2.5\" rx=\"1\" fill=\"#facc15\" transform=\"rotate(-40 120 92)\"/> <rect x=\"90\" y=\"80\" width=\"6\" height=\"2.5\" rx=\"1\" fill=\"#ffffff\" transform=\"rotate(10 90 80)\"/> <rect x=\"110\" y=\"80\" width=\"6\" height=\"2.5\" rx=\"1\" fill=\"#22c55e\" transform=\"rotate(60 110 80)\"/> <rect x=\"70\" y=\"110\" width=\"6\" height=\"2.5\" rx=\"1\" fill=\"#facc15\" transform=\"rotate(-20 70 110)\"/> <rect x=\"130\" y=\"110\" width=\"6\" height=\"2.5\" rx=\"1\" fill=\"#38bdf8\" transform=\"rotate(45 130 110)\"/>",
      "<ellipse cx=\"100\" cy=\"170\" rx=\"46\" ry=\"7\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "bolo-aniversario",
    "name": "Fatia de Bolo de Festa",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "facil",
    "word": "B O L O",
    "colors": [
      "#ec4899",
      "#facc15",
      "#ffffff",
      "#ef4444"
    ],
    "tags": [
      "recheio",
      "camadas",
      "vela",
      "festa",
      "glacê"
    ],
    "stepsDesc": [
      "1. Desenhe a FATIA TRIANGULAR ALTA DO BOLO DE FESTA.",
      "2. Trace as CAMADAS PARALELAS DE RECHEIO CREMOSO no meio da massa.",
      "3. Faça a VELINHA DE ANIVERSÁRIO LISTRADA COM CHAMA DE FOGO no topo.",
      "4. Desenhe as gotinhas de calda e moranguinho decorativo no prato.",
      "5. Finalize o pratinho elegante de festa embaixo."
    ],
    "layers": [
      "<polygon points=\"50,135 110,85 145,115 85,165\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"110,85 145,115 145,135 110,105\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"58\" y1=\"142\" x2=\"95\" y2=\"112\" stroke=\"#ef4444\" stroke-width=\"3.5\"/> <line x1=\"68\" y1=\"150\" x2=\"105\" y2=\"120\" stroke=\"#ef4444\" stroke-width=\"3.5\"/>",
      "<rect x=\"95\" y=\"55\" width=\"8\" height=\"28\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"95\" y1=\"65\" x2=\"103\" y2=\"60\" stroke=\"#ffffff\" stroke-width=\"2\"/> <line x1=\"95\" y1=\"75\" x2=\"103\" y2=\"70\" stroke=\"#ffffff\" stroke-width=\"2\"/>",
      "<path d=\"M99 55 C96 48 97 42 99 38 C101 42 102 48 99 55 Z\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"99\" cy=\"45\" r=\"2\" fill=\"#ef4444\"/>",
      "<ellipse cx=\"100\" cy=\"165\" rx=\"65\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pao-quentinho",
    "name": "Pão Francês Quentinho",
    "category": "frutas",
    "sub": "padaria",
    "diff": "facil",
    "word": "P Ã O",
    "colors": [
      "#d97706",
      "#f59e0b",
      "#fef3c7",
      "#78350f"
    ],
    "tags": [
      "corte",
      "crocante",
      "padaria",
      "manteiga",
      "café"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo oval alongado e fofinho do pão francês crocante.",
      "2. Trace a PESTANA CLÁSSICA (CORTE CENTRAL NA CROSTA DOURADA).",
      "3. Faça as pontas afiladas e a base firme do pão.",
      "4. Desenhe as linhas de brilho na casca torradinha.",
      "5. Finalize com fumacinha saindo do pão quentinho acabado de assar."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M60 110 Q100 95 140 110 Q100 125 60 110 Z\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"75\" y1=\"110\" x2=\"125\" y2=\"110\" stroke=\"#78350f\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q100 85 130 95\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M85 75 Q80 62 88 52 M100 75 Q105 60 98 48 M115 75 Q120 62 112 52\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-linecap=\"round\"/> <ellipse cx=\"100\" cy=\"155\" rx=\"65\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pipoca-cinema",
    "name": "Caixa Listrada de Pipoca",
    "category": "frutas",
    "sub": "lanches",
    "diff": "facil",
    "word": "P I P O C A",
    "colors": [
      "#ef4444",
      "#ffffff",
      "#fef08a",
      "#facc15"
    ],
    "tags": [
      "cinema",
      "balde",
      "listras",
      "milho",
      "manteiga"
    ],
    "stepsDesc": [
      "1. Desenhe o baldinho trapezoidal com topo aberto do cinema.",
      "2. Trace as LISTRAS VERTICAIS VERMELHAS E BRANCAS clássicas na caixa.",
      "3. Desenhe a NUVEM DE PIPOCAS FOFAS EM FLOR transbordando no topo.",
      "4. Faça pipoquinhas individuais pulando para fora no ar.",
      "5. Adicione estrelas de cinema decorando a caixa."
    ],
    "layers": [
      "<polygon points=\"70,95 76,170 124,170 130,95\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<line x1=\"82\" y1=\"95\" x2=\"86\" y2=\"170\" stroke=\"#ef4444\" stroke-width=\"4\"/> <line x1=\"94\" y1=\"95\" x2=\"96\" y2=\"170\" stroke=\"#ef4444\" stroke-width=\"4\"/> <line x1=\"106\" y1=\"95\" x2=\"104\" y2=\"170\" stroke=\"#ef4444\" stroke-width=\"4\"/> <line x1=\"118\" y1=\"95\" x2=\"114\" y2=\"170\" stroke=\"#ef4444\" stroke-width=\"4\"/>",
      "<circle cx=\"85\" cy=\"85\" r=\"12\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"80\" r=\"14\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"115\" cy=\"85\" r=\"12\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"65\" r=\"12\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"70\" cy=\"65\" r=\"8\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"130\" cy=\"65\" r=\"8\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"100,125 102,130 108,130 104,134 106,140 100,136 94,140 96,134 92,130 98,130\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pirulito-espiral",
    "name": "Pirulito Espiral Colorido",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "facil",
    "word": "D O C E",
    "colors": [
      "#ec4899",
      "#3b82f6",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "espiral",
      "palito",
      "bala",
      "doce",
      "cores"
    ],
    "stepsDesc": [
      "1. Desenhe o grande círculo perfeito do pirulito de caramelo.",
      "2. Trace o HASTE/PALITO BRANCO RETO sustentando o pirulito.",
      "3. Desenhe a ESPIRAL HIPNÓTICA COLORIDA girando do centro para a borda.",
      "4. Faça o LAÇO DE FITA DECORATIVO amarrado no palito.",
      "5. Adicione brilho de açúcar cristalizado em toda a espiral."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"127\" x2=\"100\" y2=\"185\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 85 C100 80 105 80 108 85 C112 92 102 96 95 92 C85 86 88 72 100 70 C116 68 122 86 118 100 C112 118 88 122 75 110 C60 95 65 70 82 60 C105 48 132 58 138 82\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,130 85,122 88,138\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,130 115,122 112,138\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"130\" r=\"4\" fill=\"#facc15\"/>",
      "<circle cx=\"80\" cy=\"70\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"120\" cy=\"75\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"110\" cy=\"105\" r=\"2\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "cookie-chocolate",
    "name": "Cookie com Gotas de Chocolate",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "facil",
    "word": "C O O K I E",
    "colors": [
      "#d97706",
      "#78350f",
      "#fef3c7",
      "#451a03"
    ],
    "tags": [
      "gotas",
      "biscoito",
      "redondo",
      "chocolate",
      "crocante"
    ],
    "stepsDesc": [
      "1. Desenhe o círculo rústico imperfeito e apetitoso do cookie assado.",
      "2. Trace as DEZENAS DE GOTAS DE CHOCOLATE ESCURO EM BLOCO salpicadas.",
      "3. Faça as rachaduras douradas na crosta crocante do biscoito.",
      "4. Desenhe uma MORDIDA NO CANTO revelando a textura macia interna.",
      "5. Finalize farelos de biscoito caídos ao redor."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"46\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"140\" cy=\"95\" r=\"14\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,90 92,85 96,92 88,96\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"110,85 118,80 122,88 114,92\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"98,110 106,105 110,114 102,118\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"78,115 85,110 90,118 82,122\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"92,135 100,130 104,138 96,142\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <polygon points=\"115,130 122,125 126,132 118,138\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M72 102 Q80 106 85 98 M102 125 Q110 128 115 122\" stroke=\"#d97706\" stroke-width=\"2\"/>",
      "<circle cx=\"65\" cy=\"158\" r=\"1.5\" fill=\"#b45309\"/> <circle cx=\"75\" cy=\"165\" r=\"2\" fill=\"#b45309\"/> <circle cx=\"125\" cy=\"162\" r=\"1.5\" fill=\"#b45309\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "bala-embrulho",
    "name": "Bala Doce com Embrulho",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "facil",
    "word": "B A L A",
    "colors": [
      "#ec4899",
      "#facc15",
      "#ffffff",
      "#3b82f6"
    ],
    "tags": [
      "laço",
      "papel",
      "doce",
      "guloseima",
      "açúcar"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo central cilíndrico oval da bala doce.",
      "2. Trace os DOIS LADOS DO EMBRULHO TORCIDOS EM LEQUE franzido.",
      "3. Faça as listras diagonais coloridas no papel de bala.",
      "4. Desenhe as dobras franzidas onde o papel é torcido.",
      "5. Adicione estrelinhas e brilho açucarado ao redor."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"32\" ry=\"24\" fill=\"#f43f5e\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"68,115 35,95 40,135\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <polygon points=\"132,115 165,95 160,135\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M80 94 L95 136 M95 92 L110 137 M110 94 L122 135\" stroke=\"#ffffff\" stroke-width=\"3\"/>",
      "<line x1=\"68\" y1=\"105\" x2=\"68\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"132\" y1=\"105\" x2=\"132\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"50,75 52,80 58,80 54,84 56,90 50,86 44,90 46,84 42,80 48,80\" fill=\"#facc15\"/> <polygon points=\"150,75 152,80 158,80 154,84 156,90 150,86 144,90 146,84 142,80 148,80\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "batata-frita",
    "name": "Pacote de Batatas Fritas",
    "category": "frutas",
    "sub": "lanches",
    "diff": "facil",
    "word": "F R I T A S",
    "colors": [
      "#ef4444",
      "#facc15",
      "#fef08a",
      "#ffffff"
    ],
    "tags": [
      "palito",
      "caixinha",
      "sal",
      "crocante",
      "lanche"
    ],
    "stepsDesc": [
      "1. Desenhe o pacote vermelho clássico de batatas fritas.",
      "2. Trace o ARCO AMARELO OU LOGO na frente da embalagem.",
      "3. Desenhe as DEZENAS DE PALITOS DE BATATA DOURADA CROCANTE saindo no topo.",
      "4. Faça batatas de diferentes alturas com cortes quadrados precisos.",
      "5. Finalize gotas de ketchup e salpicado de sal."
    ],
    "layers": [
      "<polygon points=\"70,110 75,175 125,175 130,110\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<path d=\"M70 110 Q100 125 130 110\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"145\" r=\"14\" fill=\"#facc15\"/>",
      "<rect x=\"75\" y=\"65\" width=\"8\" height=\"55\" rx=\"2\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"85\" y=\"52\" width=\"8\" height=\"68\" rx=\"2\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"95\" y=\"45\" width=\"8\" height=\"75\" rx=\"2\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"105\" y=\"55\" width=\"8\" height=\"65\" rx=\"2\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"115\" y=\"70\" width=\"8\" height=\"50\" rx=\"2\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<rect x=\"88\" y=\"75\" width=\"8\" height=\"45\" rx=\"2\" fill=\"#eab308\" stroke=\"#1e293b\" stroke-width=\"1.8\" transform=\"rotate(-15 88 75)\"/> <rect x=\"102\" y=\"75\" width=\"8\" height=\"45\" rx=\"2\" fill=\"#eab308\" stroke=\"#1e293b\" stroke-width=\"1.8\" transform=\"rotate(15 102 75)\"/>",
      "<path d=\"M145 155 Q150 165 142 172\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "coxinha-delicia",
    "name": "Coxinha Douradinha",
    "category": "frutas",
    "sub": "lanches",
    "diff": "facil",
    "word": "C O X I N H A",
    "colors": [
      "#d97706",
      "#f59e0b",
      "#78350f",
      "#ffffff"
    ],
    "tags": [
      "frango",
      "ponta",
      "massa",
      "frito",
      "salgado"
    ],
    "stepsDesc": [
      "1. Desenhe o formato clássico em gota cônica da coxinha brasileira.",
      "2. Trace a base arredondada gordinha e a ponta arrebitada no topo.",
      "3. Desenhe a textura da CASCA DE FARINHA DE ROSCA CROCANTE DOURADA.",
      "4. Faça o guardanapo de papel rendado embaixo.",
      "5. Finalize fumacinha de coxinha quentinha saindo da ponta."
    ],
    "layers": [
      "<path d=\"M100 60 C80 85 60 115 62 145 C65 170 135 170 138 145 C140 115 120 85 100 60 Z\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M80 120 C75 135 78 152 88 158\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"135\" r=\"1.2\" fill=\"#78350f\"/> <circle cx=\"105\" cy=\"142\" r=\"1.2\" fill=\"#78350f\"/> <circle cx=\"118\" cy=\"130\" r=\"1.2\" fill=\"#78350f\"/> <circle cx=\"98\" cy=\"118\" r=\"1.2\" fill=\"#78350f\"/>",
      "<path d=\"M50 165 Q100 175 150 165 L145 175 L55 175 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M98 52 Q95 42 100 35 M104 52 Q108 40 102 32\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pastel-feira",
    "name": "Pastel de Feira Crocante",
    "category": "frutas",
    "sub": "lanches",
    "diff": "facil",
    "word": "P A S T E L",
    "colors": [
      "#eab308",
      "#d97706",
      "#fef3c7",
      "#78350f"
    ],
    "tags": [
      "bolhas",
      "borda_garfo",
      "crocante",
      "feira",
      "queijo"
    ],
    "stepsDesc": [
      "1. Desenhe o retângulo crocante e dourado do pastel de feira.",
      "2. Trace os MARCADORES DE GARFO DENTADOS em todas as bordas seladas.",
      "3. Faça as BOLHAS DE MASSA FRITA CROCANTE estufadas na superfície.",
      "4. Desenhe o copo de caldo de cana com limão ao lado.",
      "5. Finalize o brilho sequinho e apetitoso do pastel."
    ],
    "layers": [
      "<polygon points=\"50,95 150,95 140,165 40,165\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<line x1=\"50\" y1=\"102\" x2=\"148\" y2=\"102\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/> <line x1=\"42\" y1=\"158\" x2=\"138\" y2=\"158\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/> <line x1=\"52\" y1=\"95\" x2=\"42\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/> <line x1=\"148\" y1=\"95\" x2=\"138\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/>",
      "<circle cx=\"75\" cy=\"125\" r=\"8\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"115\" cy=\"130\" r=\"10\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"95\" cy=\"140\" r=\"6\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"73\" cy=\"123\" rx=\"2\" ry=\"1\" fill=\"#ffffff\"/> <ellipse cx=\"113\" cy=\"128\" rx=\"2.5\" ry=\"1.2\" fill=\"#ffffff\"/>",
      "<ellipse cx=\"90\" cy=\"172\" rx=\"60\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pao-de-queijo",
    "name": "Cesta de Pães de Queijo",
    "category": "frutas",
    "sub": "padaria",
    "diff": "facil",
    "word": "Q U E I J O",
    "colors": [
      "#facc15",
      "#d97706",
      "#78350f",
      "#fef08a"
    ],
    "tags": [
      "bolinhas",
      "queijo",
      "minas",
      "quentinho",
      "cesta"
    ],
    "stepsDesc": [
      "1. Desenhe a CESTA DE VIME TRANÇADA na base.",
      "2. Trace as VÁRIAS BOLINHAS DOURADAS DE PÃO DE QUEIJO empilhadas nela.",
      "3. Faça as casquinhas crocantes craqueladas com queijo meia-cura.",
      "4. Desenhe um pão de queijo partido ao meio com QUEIJO PUXANDO macio.",
      "5. Adicione a fumacinha perfumada de café da manhã mineiro."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"24\" fill=\"none\" stroke-width=\"2.8\"/> <path d=\"M45 145 C45 175 155 175 155 145\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"80\" cy=\"125\" r=\"18\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"120\" cy=\"125\" r=\"18\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"100\" cy=\"112\" r=\"18\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<circle cx=\"82\" cy=\"120\" r=\"2\" fill=\"#ca8a04\"/> <circle cx=\"118\" cy=\"120\" r=\"2\" fill=\"#ca8a04\"/> <circle cx=\"98\" cy=\"108\" r=\"2\" fill=\"#ca8a04\"/>",
      "<line x1=\"55\" y1=\"150\" x2=\"145\" y2=\"150\" stroke=\"#78350f\" stroke-width=\"2\"/> <line x1=\"65\" y1=\"160\" x2=\"135\" y2=\"160\" stroke=\"#78350f\" stroke-width=\"2\"/>",
      "<path d=\"M95 90 Q90 75 98 65 M105 90 Q110 75 102 65\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "torta-de-maca",
    "name": "Torta de Maçã Trançadinha",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "medio",
    "word": "T O R T A",
    "colors": [
      "#d97706",
      "#ef4444",
      "#fef3c7",
      "#78350f"
    ],
    "tags": [
      "tranças",
      "maçã",
      "canela",
      "borda",
      "forno"
    ],
    "stepsDesc": [
      "1. Desenhe a forma redonda de torta com as bordas onduladas plissadas.",
      "2. Trace a LINDA GRADE TRANÇADA DE TIRAS DE MASSA DOURADA no topo.",
      "3. Faça o recheio de maçã e canela borbulhando entre as aberturas da grade.",
      "4. Desenhe o brilho de açúcar cristal e canela salpicados na massa.",
      "5. Finalize uma folhinha de maçã decorando o centro da torta."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"125\" rx=\"60\" ry=\"32\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M40 125 C40 155 160 155 160 125\" fill=\"#d97706\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"60\" y1=\"110\" x2=\"140\" y2=\"140\" stroke=\"#b45309\" stroke-width=\"3\"/> <line x1=\"75\" y1=\"100\" x2=\"150\" y2=\"130\" stroke=\"#b45309\" stroke-width=\"3\"/> <line x1=\"140\" y1=\"110\" x2=\"60\" y2=\"140\" stroke=\"#b45309\" stroke-width=\"3\"/> <line x1=\"125\" y1=\"100\" x2=\"50\" y2=\"130\" stroke=\"#b45309\" stroke-width=\"3\"/>",
      "<circle cx=\"100\" cy=\"125\" r=\"3\" fill=\"#ef4444\"/> <circle cx=\"85\" cy=\"120\" r=\"2.5\" fill=\"#ef4444\"/> <circle cx=\"115\" cy=\"120\" r=\"2.5\" fill=\"#ef4444\"/>",
      "<path d=\"M40 125 Q45 118 50 125 Q55 118 60 125 Q65 118 70 125 Q75 118 80 125 Q85 118 90 125 Q95 118 100 125 Q105 118 110 125 Q115 118 120 125 Q125 118 130 125 Q135 118 140 125 Q145 118 150 125 Q155 118 160 125\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"100\" cy=\"165\" rx=\"65\" ry=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "pudim-com-calda",
    "name": "Pudim de Leite com Calda",
    "category": "frutas",
    "sub": "sobremesas",
    "diff": "facil",
    "word": "P U D I M",
    "colors": [
      "#fde047",
      "#78350f",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "caramelo",
      "furo",
      "calda_escorrendo",
      "doce",
      "prato"
    ],
    "stepsDesc": [
      "1. Desenhe o formato cilíndrico cônico do pudim com o furo central.",
      "2. Trace a DELICIOSA CALDA DE CARAMELO DOURADA ESCORRENDO pelas laterais.",
      "3. Faça o prato redondo espelhado onde o caramelo forma uma piscininha.",
      "4. Desenhe as bolinhas de ar e brilho sedoso na textura macia do pudim.",
      "5. Finalize uma cereja brilhante com cabinho no topo."
    ],
    "layers": [
      "<path d=\"M65 95 L55 145 C55 160 145 160 145 145 L135 95 Z\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"95\" rx=\"35\" ry=\"14\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"100\" cy=\"95\" rx=\"14\" ry=\"6\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M65 95 C65 115 75 125 72 135 M90 95 C92 110 88 125 90 140 M120 95 C118 115 125 125 122 138\" stroke=\"#b45309\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"152\" rx=\"65\" ry=\"16\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"80\" r=\"8\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M100 72 C105 60 115 58 118 55\" stroke=\"#78350f\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "waffle-quadriculado",
    "name": "Waffle com Manteiga e Mel",
    "category": "frutas",
    "sub": "padaria",
    "diff": "facil",
    "word": "W A F F L E",
    "colors": [
      "#d97706",
      "#facc15",
      "#fef08a",
      "#b45309"
    ],
    "tags": [
      "quadradinhos",
      "mel",
      "manteiga",
      "dourado",
      "café"
    ],
    "stepsDesc": [
      "1. Desenhe os dois círculos ou quadrados crocantes do waffle belga.",
      "2. Trace a GRADE QUADRICULADA PROFUNDA DE FAVO no waffle.",
      "3. Faça o CUBO DE MANTEIGA DERRETENDO SUAVEMENTE no centro.",
      "4. Desenhe o mel dourado escorrendo pelos favos.",
      "5. Adicione frutas vermelhas (morangos/mirtilos) decorando o prato."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"120\" rx=\"52\" ry=\"38\" fill=\"#fde047\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"68\" y1=\"105\" x2=\"132\" y2=\"105\" stroke=\"#b45309\" stroke-width=\"2\"/> <line x1=\"60\" y1=\"120\" x2=\"140\" y2=\"120\" stroke=\"#b45309\" stroke-width=\"2\"/> <line x1=\"68\" y1=\"135\" x2=\"132\" y2=\"135\" stroke=\"#b45309\" stroke-width=\"2\"/> <line x1=\"85\" y1=\"92\" x2=\"85\" y2=\"148\" stroke=\"#b45309\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"88\" x2=\"100\" y2=\"152\" stroke=\"#b45309\" stroke-width=\"2\"/> <line x1=\"115\" y1=\"92\" x2=\"115\" y2=\"148\" stroke=\"#b45309\" stroke-width=\"2\"/>",
      "<polygon points=\"95,108 108,102 118,108 105,114\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"95,108 105,114 105,122 95,116\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"105,114 118,108 118,116 105,122\" fill=\"#eab308\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M102 118 Q100 130 108 135\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"162\" rx=\"60\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "achocolatado-caneca",
    "name": "Caneca de Achocolatado Quente",
    "category": "frutas",
    "sub": "bebidas",
    "diff": "facil",
    "word": "C A C A U",
    "colors": [
      "#78350f",
      "#ffffff",
      "#ec4899",
      "#cbd5e1"
    ],
    "tags": [
      "marshmallow",
      "fumacinha",
      "caneca",
      "leite",
      "inverno"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo cilíndrico da caneca e a boca oval no topo.",
      "2. Trace a ALÇA ERGONÔMICA EM ARCO GRACIOSO na lateral.",
      "3. Adicione o nível do achocolatado fumegante com MARSHMALLOWS fofos.",
      "4. Desenhe as ONDAS SINUOSAS DE VAPOR PERFUMADO subindo.",
      "5. Finalize com um CORAÇÃO ESTAMPADO NA CANECA."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"85\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"80\" rx=\"35\" ry=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M135 95 C160 95 160 145 135 145\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"30\" ry=\"8\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"85\" y=\"80\" width=\"10\" height=\"8\" rx=\"3\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <rect x=\"105\" y=\"82\" width=\"10\" height=\"8\" rx=\"3\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M85 65 Q80 50 88 40 M100 65 Q105 48 98 35 M115 65 Q120 50 112 40\" stroke=\"#94a3b8\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M95 118 C90 110 82 115 88 122 L100 134 L112 122 C118 115 110 110 105 118 Z\" fill=\"#ef4444\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    </g>"
  },
  {
    "id": "kitsune-raposa",
    "name": "Kitsune Raposinha Mística",
    "category": "fantasia",
    "sub": "mascotes",
    "diff": "medio",
    "word": "K I T S U N E",
    "colors": [
      "#f97316",
      "#ffffff",
      "#dc2626",
      "#fef08a"
    ],
    "tags": [
      "anime",
      "raposa",
      "orelhas_fofas",
      "magia",
      "três_caudas"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça triangular graciosa com bochechinhas fofas e corpo sentado.",
      "2. Trace as DUAS ORELHAS PONTUDAS DE RAPOSA com o interior aveludado e marcas vermelhas.",
      "3. Faça as TRÊS CAUDAS FELPUDAS MAGNÍFICAS abrindo em leque nas costas.",
      "4. Desenhe os olhos rasgados expressivos de anime, focinho delicado e bochechas coradas.",
      "5. Adicione a esfera mágica espiritual (hoshi-no-tama) flutuando sobre a cabeça."
    ],
    "layers": [
      "<path d=\"M100 65 C80 50 60 70 70 95 C75 110 90 115 100 115 C110 115 125 110 130 95 C140 70 120 50 100 65 Z\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"140\" rx=\"24\" ry=\"26\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"75,68 55,30 85,50\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <polygon points=\"75,60 62,38 80,48\" fill=\"#ffffff\"/> <polygon points=\"125,68 145,30 115,50\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <polygon points=\"125,60 138,38 120,48\" fill=\"#ffffff\"/>",
      "<path d=\"M120 135 C150 125 170 100 162 70 C150 82 138 105 128 122\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M100 138 C115 115 120 70 100 50 C90 75 95 110 100 138\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M80 135 C50 125 30 100 38 70 C50 82 62 105 72 122\" fill=\"#f97316\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"88\" cy=\"85\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/> <circle cx=\"87\" cy=\"83\" r=\"1.8\" fill=\"#ffffff\"/> <ellipse cx=\"112\" cy=\"85\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/> <circle cx=\"111\" cy=\"83\" r=\"1.8\" fill=\"#ffffff\"/> <polygon points=\"100,94 97,98 103,98\" fill=\"#1e293b\"/> <ellipse cx=\"80\" cy=\"95\" rx=\"5\" ry=\"2.5\" fill=\"#f43f5e\" opacity=\"0.6\"/> <ellipse cx=\"120\" cy=\"95\" rx=\"5\" ry=\"2.5\" fill=\"#f43f5e\" opacity=\"0.6\"/>",
      "<circle cx=\"100\" cy=\"35\" r=\"8\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"2\"/> <circle cx=\"98\" cy=\"33\" r=\"2.5\" fill=\"#ffffff\"/> <circle cx=\"100\" cy=\"120\" r=\"4\" fill=\"#dc2626\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "dragao-ryu",
    "name": "Dragãozinho Ryu da Sabedoria",
    "category": "fantasia",
    "sub": "mascotes",
    "diff": "medio",
    "word": "D R A G Ã O",
    "colors": [
      "#0284c7",
      "#38bdf8",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "chifres",
      "bigodes",
      "nuvens",
      "sabedoria",
      "mitologia"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo serpentino oriental ondulando em curvas suaves de 'S'.",
      "2. Trace a CABEÇA CHIBI FOFA com focinho largo e os GRANDES CHIFRES DE CERVO dourados.",
      "3. Faça os LONGOS BIGODES MÍSTICOS ONDULANTES e a juba dorsal de nuvens.",
      "4. Desenhe as QUATRO PATINHAS COM TRÊS GARRINHAS segurando a pérola da sabedoria.",
      "5. Adicione nuvenzinhas orientais mágicas flutuando ao redor do dragãozinho feliz."
    ],
    "layers": [
      "<path d=\"M60 85 Q100 45 135 80 T90 135 T155 155\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"14\" stroke-linecap=\"round\"/> <path d=\"M60 85 Q100 45 135 80 T90 135 T155 155\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"65\" cy=\"78\" r=\"18\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M72 65 L82 45 M82 45 L78 35 M82 45 L90 40\" stroke=\"#facc15\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M58 65 L48 45 M48 45 L52 35 M48 45 L40 40\" stroke=\"#facc15\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M55 82 Q35 95 25 88\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M72 82 Q90 95 100 88\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M85 70 Q95 62 105 72 T125 75\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"60\" cy=\"76\" rx=\"3.5\" ry=\"5\" fill=\"#1e293b\"/> <circle cx=\"59\" cy=\"74\" r=\"1.5\" fill=\"#ffffff\"/> <ellipse cx=\"70\" cy=\"76\" rx=\"3.5\" ry=\"5\" fill=\"#1e293b\"/> <circle cx=\"69\" cy=\"74\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"100\" cy=\"120\" r=\"10\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <circle cx=\"97\" cy=\"117\" r=\"3\" fill=\"#ffffff\"/>",
      "<path d=\"M35 135 Q45 125 55 135 T70 135\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <path d=\"M125 45 Q135 35 145 45 T160 45\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "neko-sorte",
    "name": "Gatinho Neko da Boa Sorte",
    "category": "fantasia",
    "sub": "mascotes",
    "diff": "facil",
    "word": "N E K O",
    "colors": [
      "#ffffff",
      "#ef4444",
      "#facc15",
      "#1e293b"
    ],
    "tags": [
      "patinha_levantada",
      "moeda",
      "guizo",
      "japão",
      "sorte"
    ],
    "stepsDesc": [
      "1. Desenhe a silhueta gordinha e rechonchuda do gatinho sentado em posição zen.",
      "2. Trace a PATINHA DIREITA LEVANTADA ACENANDO chamando sorte e fortuna.",
      "3. Faça a COLEIRA VERMELHA COM GUIZO DOURADO REDONDO no pescoço.",
      "4. Desenhe a GRANDE MOEDA DE OURO OVAL (KOBAN) que ele segura na patinha esquerda.",
      "5. Adicione as manchinhas pretas e alaranjadas de gato calico e o bigodinho simpático."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" r=\"32\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"138\" rx=\"36\" ry=\"32\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"75,62 65,35 90,52\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"76,58 70,42 85,52\" fill=\"#f472b6\"/> <polygon points=\"125,62 135,35 110,52\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"124,58 130,42 115,52\" fill=\"#f472b6\"/> <ellipse cx=\"132\" cy=\"98\" rx=\"10\" ry=\"18\" transform=\"rotate(25 132 98)\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<rect x=\"75\" y=\"108\" width=\"50\" height=\"8\" rx=\"3\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"116\" r=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"97\" y1=\"116\" x2=\"103\" y2=\"116\" stroke=\"#1e293b\" stroke-width=\"1\"/>",
      "<ellipse cx=\"78\" cy=\"135\" rx=\"14\" ry=\"20\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"74\" y=\"128\" width=\"8\" height=\"14\" rx=\"2\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>",
      "<path d=\"M85 85 Q90 90 95 85\" stroke=\"#1e293b\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <path d=\"M105 85 Q110 90 115 85\" stroke=\"#1e293b\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <polygon points=\"100,90 97,93 103,93\" fill=\"#1e293b\"/> <line x1=\"75\" y1=\"92\" x2=\"62\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"75\" y1=\"95\" x2=\"62\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"125\" y1=\"92\" x2=\"138\" y2=\"90\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"125\" y1=\"95\" x2=\"138\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "panda-sensei",
    "name": "Panda Sensei com Faixa Ninja",
    "category": "fantasia",
    "sub": "mascotes",
    "diff": "facil",
    "word": "S E N S E I",
    "colors": [
      "#ffffff",
      "#1e293b",
      "#dc2626",
      "#10b981"
    ],
    "tags": [
      "faixa_ninja",
      "bambu",
      "sensei",
      "artes_marciais",
      "fofo"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça redonda grandona e o corpo rechonchudo fofo do ursinho panda.",
      "2. Trace a FAIXA NINJA VERMELHA AMARRADA NA TESTA com as pontas esvoaçando.",
      "3. Faça as MANCHAS NEGRAS OVAIS EM VOLTA DOS OLHOS e as orelhas pretas redondas.",
      "4. Desenhe o RAMINHO DE BAMBU VERDE que ele segura com sabedoria.",
      "5. Adicione olhinhos brilhantes determinados e bochechas coradas de guerreiro."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"35\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"140\" rx=\"35\" ry=\"32\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"70\" cy=\"52\" r=\"12\" fill=\"#1e293b\"/> <circle cx=\"130\" cy=\"52\" r=\"12\" fill=\"#1e293b\"/> <rect x=\"65\" y=\"65\" width=\"70\" height=\"12\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"135,70 155,62 148,78\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<ellipse cx=\"85\" cy=\"88\" rx=\"8\" ry=\"11\" transform=\"rotate(-15 85 88)\" fill=\"#1e293b\"/> <circle cx=\"86\" cy=\"86\" r=\"3\" fill=\"#ffffff\"/> <ellipse cx=\"115\" cy=\"88\" rx=\"8\" ry=\"11\" transform=\"rotate(15 115 88)\" fill=\"#1e293b\"/> <circle cx=\"114\" cy=\"86\" r=\"3\" fill=\"#ffffff\"/>",
      "<polygon points=\"100,96 96,100 104,100\" fill=\"#1e293b\"/> <path d=\"M96 103 Q100 106 104 103\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <ellipse cx=\"78\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#f43f5e\" opacity=\"0.6\"/> <ellipse cx=\"122\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#f43f5e\" opacity=\"0.6\"/>",
      "<rect x=\"52\" y=\"115\" width=\"6\" height=\"45\" rx=\"2\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <ellipse cx=\"48\" cy=\"125\" rx=\"8\" ry=\"3\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <ellipse cx=\"62\" cy=\"135\" rx=\"8\" ry=\"3\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "unicornio-magico",
    "name": "Unicórnio com Chifre Espiral",
    "category": "fantasia",
    "sub": "criaturas",
    "diff": "medio",
    "word": "U N I C Ó R N I O",
    "colors": [
      "#ec4899",
      "#a855f7",
      "#38bdf8",
      "#facc15"
    ],
    "tags": [
      "chifre_dourado",
      "crina_arco_iris",
      "magia",
      "estrelas",
      "fada"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça e o pescoço arqueado nobre do pônei mágico de perfil.",
      "2. Trace o LONGO CHIFRE ESPIRAL DOURADO pontiagudo brotando da testa.",
      "3. Faça a CRINA EM ONDAS FLUIDAS ARCO-ÍRIS descendo pelas costas.",
      "4. Desenhe o olho doce com longos cílios sonhadores e focinho com coração.",
      "5. Adicione estrelinhas mágicas cintilantes em volta do chifre encantado."
    ],
    "layers": [
      "<path d=\"M70 120 C60 105 75 75 90 70 C105 65 125 75 135 90 C140 100 135 115 120 120 C110 125 105 145 105 165 L75 165 C75 145 75 130 70 120 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"98,68 115,22 108,66\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <line x1=\"102\" y1=\"55\" x2=\"112\" y2=\"45\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <line x1=\"104\" y1=\"42\" x2=\"114\" y2=\"32\" stroke=\"#ca8a04\" stroke-width=\"1.8\"/> <polygon points=\"90,65 85,45 96,55\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M95 65 C80 75 70 95 65 125\" fill=\"none\" stroke=\"#ec4899\" stroke-width=\"5\" stroke-linecap=\"round\"/> <path d=\"M98 75 C85 85 75 105 70 135\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"5\" stroke-linecap=\"round\"/> <path d=\"M102 85 C90 95 80 115 75 145\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<path d=\"M110 90 Q118 96 122 90\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"112\" y1=\"92\" x2=\"110\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"116\" y1=\"93\" x2=\"116\" y2=\"98\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <line x1=\"120\" y1=\"92\" x2=\"122\" y2=\"97\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"128\" cy=\"108\" r=\"2\" fill=\"#f43f5e\"/>",
      "<polygon points=\"125,25 127,20 132,22 127,25\" fill=\"#facc15\"/> <polygon points=\"85,30 87,25 92,27 87,30\" fill=\"#facc15\"/> <polygon points=\"135,45 137,40 142,42 137,45\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "pegaso-alado",
    "name": "Pégaso com Asas Abertas",
    "category": "fantasia",
    "sub": "criaturas",
    "diff": "desafio",
    "word": "P É G A S O",
    "colors": [
      "#ffffff",
      "#38bdf8",
      "#facc15",
      "#c084fc"
    ],
    "tags": [
      "asas_plumas",
      "cavalo",
      "voo",
      "céu",
      "mitologia"
    ],
    "stepsDesc": [
      "1. Desenhe o corpo esbelto do cavalo alado alçando voo nas nuvens.",
      "2. Trace as DUAS GRANDES ASAS EMPLUMADAS ABERTAS apontando para o céu.",
      "3. Faça as CAMADAS TRIPLAS DE PENAS detalhadas em cada asa majestosa.",
      "4. Desenhe as quatro patas recolhidas suavemente em pleno galope aéreo.",
      "5. Adicione a cauda longa sedosa ondulando ao vento e nuvens douradas."
    ],
    "layers": [
      "<path d=\"M60 135 C55 110 70 95 95 90 C110 88 125 95 135 110 C145 125 140 140 125 145 C100 150 70 145 60 135 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <circle cx=\"130\" cy=\"85\" r=\"14\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M85 92 C70 50 85 25 115 25 C105 45 100 65 98 92\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M75 95 C65 65 75 45 95 45\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>",
      "<path d=\"M95 50 C85 65 88 85 92 92\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/> <path d=\"M105 40 C98 55 98 75 100 88\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/>",
      "<line x1=\"75\" y1=\"145\" x2=\"68\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"88\" y1=\"145\" x2=\"82\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"120\" y1=\"145\" x2=\"115\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <line x1=\"130\" y1=\"145\" x2=\"128\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M60 135 C40 140 30 155 35 168\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3.5\" stroke-linecap=\"round\"/> <path d=\"M20 170 Q40 160 60 170 T100 170\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "estrela-cadente",
    "name": "Estrelinha Mágica Sorridente",
    "category": "fantasia",
    "sub": "celeste",
    "diff": "facil",
    "word": "E S T R E L A",
    "colors": [
      "#facc15",
      "#fde047",
      "#f43f5e",
      "#ffffff"
    ],
    "tags": [
      "cauda_de_luz",
      "brilho",
      "desejo",
      "sorriso",
      "céu"
    ],
    "stepsDesc": [
      "1. Desenhe a grande estrela de cinco pontas gordinha e simétrica.",
      "2. Trace a LONGA CAUDA DE COMETA EM ARCO com faixas curvas luminosas.",
      "3. Faça os GRANDES OLHINHOS BRILHANTES DE ANIME com reflexo duplo.",
      "4. Desenhe a boquinha aberta sorridente e bochechas coradas kawaii.",
      "5. Adicione mini-estrelinhas e poeira mágica cintilando ao longo da cauda."
    ],
    "layers": [
      "<polygon points=\"100,35 112,65 145,68 120,90 128,122 100,105 72,122 80,90 55,68 88,65\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 115 C70 135 45 155 20 165\" fill=\"none\" stroke=\"#fde047\" stroke-width=\"6\" stroke-linecap=\"round\"/> <path d=\"M95 115 C85 140 65 160 35 175\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"5\" stroke-linecap=\"round\"/> <path d=\"M105 112 C100 140 85 165 50 182\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"78\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"91\" cy=\"76\" r=\"1.8\" fill=\"#ffffff\"/> <circle cx=\"108\" cy=\"78\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"107\" cy=\"76\" r=\"1.8\" fill=\"#ffffff\"/>",
      "<path d=\"M96 88 Q100 93 104 88\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <ellipse cx=\"85\" cy=\"85\" rx=\"3.5\" ry=\"2\" fill=\"#f43f5e\" opacity=\"0.6\"/> <ellipse cx=\"115\" cy=\"85\" rx=\"3.5\" ry=\"2\" fill=\"#f43f5e\" opacity=\"0.6\"/>",
      "<polygon points=\"45,140 47,135 52,137 47,140\" fill=\"#ffffff\"/> <polygon points=\"70,145 72,140 77,142 72,145\" fill=\"#ffffff\"/> <circle cx=\"30\" cy=\"150\" r=\"1.5\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "nuvem-fofa-kawaii",
    "name": "Nuvem Feliz com Arco-Íris",
    "category": "fantasia",
    "sub": "celeste",
    "diff": "facil",
    "word": "N U V E M",
    "colors": [
      "#38bdf8",
      "#fbcfe8",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "gotas_coloridas",
      "bochechas",
      "arco_iris",
      "fofa",
      "céu"
    ],
    "stepsDesc": [
      "1. Desenhe a nuvem fofa com contornos arredondados em bolhas conectadas.",
      "2. Trace o ARCO-ÍRIS MULTICOLORIDO SAINDO DEBAIXO DA NUVEM.",
      "3. Faça os olhinhos piscando felizes e boquinha alegre com covinhas.",
      "4. Desenhe as bochechinhas ovais cor-de-rosa pastel iluminadas.",
      "5. Adicione gotículas de chuva coloridas em formato de coração caindo."
    ],
    "layers": [
      "<path d=\"M60 105 Q45 90 60 75 Q75 55 100 60 Q125 50 140 70 Q155 80 145 105 Q155 120 135 125 Q100 130 65 125 Q45 120 60 105 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M75 128 L55 168\" stroke=\"#ef4444\" stroke-width=\"4\"/> <path d=\"M82 128 L62 168\" stroke=\"#f97316\" stroke-width=\"4\"/> <path d=\"M89 128 L69 168\" stroke=\"#facc15\" stroke-width=\"4\"/> <path d=\"M96 128 L76 168\" stroke=\"#22c55e\" stroke-width=\"4\"/> <path d=\"M103 128 L83 168\" stroke=\"#3b82f6\" stroke-width=\"4\"/> <path d=\"M110 128 L90 168\" stroke=\"#8b5cf6\" stroke-width=\"4\"/>",
      "<circle cx=\"85\" cy=\"88\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"84\" cy=\"86\" r=\"1.5\" fill=\"#ffffff\"/> <circle cx=\"115\" cy=\"88\" r=\"4\" fill=\"#1e293b\"/> <circle cx=\"114\" cy=\"86\" r=\"1.5\" fill=\"#ffffff\"/>",
      "<path d=\"M96 98 Q100 103 104 98\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linecap=\"round\"/> <ellipse cx=\"76\" cy=\"95\" rx=\"5\" ry=\"3\" fill=\"#fbcfe8\"/> <ellipse cx=\"124\" cy=\"95\" rx=\"5\" ry=\"3\" fill=\"#fbcfe8\"/>",
      "<path d=\"M135 145 C132 140 138 140 135 145 Z\" fill=\"#38bdf8\"/> <path d=\"M145 155 C142 150 148 150 145 155 Z\" fill=\"#38bdf8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "sol-sorridente",
    "name": "Solzinho com Óculos Escuros",
    "category": "fantasia",
    "sub": "celeste",
    "diff": "facil",
    "word": "S O L",
    "colors": [
      "#f59e0b",
      "#facc15",
      "#1e293b",
      "#ef4444"
    ],
    "tags": [
      "óculos",
      "raios",
      "verão",
      "praia",
      "alegria"
    ],
    "stepsDesc": [
      "1. Desenhe o grande círculo amarelo radiante perfeito do sol do verão.",
      "2. Trace os ÓCULOS DE SOL ESCUROS ESTILOSOS com armação preta e lentes reflexivas.",
      "3. Faça os RAIOS SOLARES TRIANGULARES EM TORNO DE TODO O CÍRCULO.",
      "4. Desenhe o grande sorriso aberto confiante e bochechinhas de calor.",
      "5. Adicione o reflexo branco diagonal clássico nas lentes dos óculos escuros."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,45 95,25 105,25\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"100,155 95,175 105,175\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"45,100 25,95 25,105\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"155,100 175,95 175,105\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"62,62 48,48 56,42\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"138,138 152,152 144,158\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"138,62 152,48 158,56\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"62,138 48,152 42,144\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"70\" y=\"85\" width=\"26\" height=\"18\" rx=\"4\" fill=\"#1e293b\"/> <rect x=\"104\" y=\"85\" width=\"26\" height=\"18\" rx=\"4\" fill=\"#1e293b\"/> <line x1=\"96\" y1=\"92\" x2=\"104\" y2=\"92\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<path d=\"M85 115 Q100 130 115 115\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <ellipse cx=\"68\" cy=\"115\" rx=\"5\" ry=\"3\" fill=\"#f97316\" opacity=\"0.6\"/> <ellipse cx=\"132\" cy=\"115\" rx=\"5\" ry=\"3\" fill=\"#f97316\" opacity=\"0.6\"/>",
      "<line x1=\"74\" y1=\"88\" x2=\"84\" y2=\"98\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"108\" y1=\"88\" x2=\"118\" y2=\"98\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "lua-crescente-sono",
    "name": "Lua com Touca de Dormir",
    "category": "fantasia",
    "sub": "celeste",
    "diff": "facil",
    "word": "L U A",
    "colors": [
      "#facc15",
      "#38bdf8",
      "#ffffff",
      "#6366f1"
    ],
    "tags": [
      "touca_estrelada",
      "sono",
      "noite",
      "sonho",
      "dormir"
    ],
    "stepsDesc": [
      "1. Desenhe a lua crescente amarela gordinha com perfil de rosto sereno.",
      "2. Trace a LONGA TOUCA DE DORMIR AZUL COM LISTRAS BRANCAS cobrindo a ponta superior.",
      "3. Faça o POMPOM BRANCO REDONDO FELPUDO balançando na ponta da touca.",
      "4. Desenhe o olhinho fechado dormindo em arco com cílios longos e boca bocejando.",
      "5. Adicione as letrinhas 'Z z z' flutuando no ar e estrelinhas adormecidas."
    ],
    "layers": [
      "<path d=\"M95 45 A42 42 0 1 0 135 125 A35 35 0 1 1 95 45 Z\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M125 55 C145 35 165 45 170 65 L158 72 C152 58 138 52 120 62 Z\" fill=\"#3b82f6\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"172\" cy=\"68\" r=\"6\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"130\" y1=\"52\" x2=\"126\" y2=\"60\" stroke=\"#ffffff\" stroke-width=\"3\"/> <line x1=\"142\" y1=\"48\" x2=\"138\" y2=\"58\" stroke=\"#ffffff\" stroke-width=\"3\"/> <line x1=\"154\" y1=\"52\" x2=\"150\" y2=\"64\" stroke=\"#ffffff\" stroke-width=\"3\"/>",
      "<path d=\"M95 85 Q102 92 108 85\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <circle cx=\"106\" cy=\"98\" r=\"3\" fill=\"#1e293b\"/> <ellipse cx=\"88\" cy=\"95\" rx=\"4\" ry=\"2.5\" fill=\"#f43f5e\" opacity=\"0.6\"/>",
      "<text x=\"135\" y=\"115\" font-family=\"Arial\" font-size=\"16\" font-weight=\"bold\" fill=\"#3b82f6\">Z</text> <text x=\"148\" y=\"105\" font-family=\"Arial\" font-size=\"12\" font-weight=\"bold\" fill=\"#3b82f6\">z</text> <text x=\"158\" y=\"96\" font-family=\"Arial\" font-size=\"9\" font-weight=\"bold\" fill=\"#3b82f6\">z</text>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "fada-encantada",
    "name": "Fadinha com Asas Brilhantes",
    "category": "fantasia",
    "sub": "criaturas",
    "diff": "medio",
    "word": "F A D A",
    "colors": [
      "#ec4899",
      "#c084fc",
      "#fde047",
      "#ffffff"
    ],
    "tags": [
      "varinha",
      "pó_magico",
      "asas_borboleta",
      "vestido",
      "conto"
    ],
    "stepsDesc": [
      "1. Desenhe a cabecinha delicada e o corpinho em vestido rodado da fadinha.",
      "2. Trace as GRANDES ASAS TRANSLÚCIDAS DE BORBOLETA com veios brilhantes.",
      "3. Faça a VARINHA DE CONDÃO ESTRELADA na mãozinha lançando pó mágico.",
      "4. Desenhe os cabelos longos com tiara de flores e olhinhos brilhantes.",
      "5. Adicione nuvens de pó de pirlimpimpim cintilando ao redor da fadinha."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"70\" r=\"18\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"90,88 110,88 122,140 78,140\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M88 95 C55 65 50 105 82 110 Z\" fill=\"#c084fc\" opacity=\"0.7\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M85 110 C60 115 65 135 88 125 Z\" fill=\"#c084fc\" opacity=\"0.7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <path d=\"M112 95 C145 65 150 105 118 110 Z\" fill=\"#c084fc\" opacity=\"0.7\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M115 110 C140 115 135 135 112 125 Z\" fill=\"#c084fc\" opacity=\"0.7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"115\" y1=\"105\" x2=\"148\" y2=\"85\" stroke=\"#facc15\" stroke-width=\"2\"/> <polygon points=\"148,85 150,78 155,80 150,85 153,90 148,87 143,90 145,85\" fill=\"#fde047\"/>",
      "<circle cx=\"95\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"105\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/> <path d=\"M98 76 Q100 79 102 76\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <path d=\"M85 65 C85 50 115 50 115 65\" fill=\"#78350f\"/>",
      "<polygon points=\"158,75 160,70 164,72 160,75\" fill=\"#facc15\"/> <circle cx=\"165\" cy=\"90\" r=\"1.5\" fill=\"#facc15\"/> <circle cx=\"140\" cy=\"75\" r=\"1.5\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "duende-floresta",
    "name": "Duende com Chapéu Pontudo",
    "category": "fantasia",
    "sub": "criaturas",
    "diff": "medio",
    "word": "D U E N D E",
    "colors": [
      "#16a34a",
      "#84cc16",
      "#d97706",
      "#fef3c7"
    ],
    "tags": [
      "barba",
      "trevo",
      "chapéu_verde",
      "floresta",
      "ouro"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho rechonchudo do duende com casaquinho verde de feltro.",
      "2. Trace o LONGO CHAPÉU CÔNICO PONTUDO dobrado na ponta com guizo dourado.",
      "3. Faça a LONGA BARBA BRANCA FELPUDA cobrindo o peito e o nariz batatinha.",
      "4. Desenhe as botinhas de elfo com pontas viradas para cima e fivela.",
      "5. Adicione um trevo de quatro folhas da sorte na mão e moedinhas de ouro."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"120\" rx=\"26\" ry=\"30\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <circle cx=\"100\" cy=\"85\" r=\"20\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"75,80 125,80 110,35\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M110 35 Q125 35 130 45\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"6\" stroke-linecap=\"round\"/> <circle cx=\"132\" cy=\"48\" r=\"4.5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<path d=\"M82 92 C82 125 118 125 118 92 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"90\" r=\"5\" fill=\"#fca5a5\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M85 150 L80 165 L95 165\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linejoin=\"round\"/> <path d=\"M115 150 L120 165 L105 165\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"65\" cy=\"125\" r=\"4\" fill=\"#22c55e\"/> <circle cx=\"65\" cy=\"117\" r=\"4\" fill=\"#22c55e\"/> <circle cx=\"59\" cy=\"121\" r=\"4\" fill=\"#22c55e\"/> <circle cx=\"71\" cy=\"121\" r=\"4\" fill=\"#22c55e\"/> <line x1=\"65\" y1=\"125\" x2=\"65\" y2=\"135\" stroke=\"#15803d\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "mago-aprendiz",
    "name": "Mago com Livro de Feitiços",
    "category": "fantasia",
    "sub": "personagens",
    "diff": "desafio",
    "word": "M A G O",
    "colors": [
      "#4338ca",
      "#a855f7",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "cajado",
      "túnica",
      "estrelas",
      "feitiço",
      "magia"
    ],
    "stepsDesc": [
      "1. Desenhe a longa túnica mística azul-marinho com mangas amplas de feiticeiro.",
      "2. Trace o GRANDE CHAPÉU PONTUDO ESTRELADO com estrelas douradas estampadas.",
      "3. Faça o LIVRO DE FEITIÇOS ABERTO nas mãos com símbolos arcanos brilhantes.",
      "4. Desenhe a barba branca de sábio e a varinha de cristal acesa.",
      "5. Adicione faíscas mágicas e runas douradas levitando ao redor do livro."
    ],
    "layers": [
      "<polygon points=\"85,85 115,85 130,160 70,160\" fill=\"#312e81\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <circle cx=\"100\" cy=\"75\" r=\"16\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"70,75 130,75 100,25\" fill=\"#1e1b4b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"100\" cy=\"75\" rx=\"34\" ry=\"7\" fill=\"#1e1b4b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"85,115 100,122 115,115 115,135 100,142 85,135\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"87,117 100,123 113,117 113,133 100,139 87,133\" fill=\"#fef3c7\"/>",
      "<path d=\"M88 82 C88 110 112 110 112 82 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"80\" r=\"3\" fill=\"#fca5a5\"/>",
      "<polygon points=\"95,45 97,40 102,42 97,45\" fill=\"#facc15\"/> <polygon points=\"105,58 107,53 112,55 107,58\" fill=\"#facc15\"/> <circle cx=\"100\" cy=\"110\" r=\"3.5\" fill=\"#38bdf8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "coroa-real-soberano",
    "name": "Coroa Real Ensino Soberano",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "C O R O A",
    "colors": [
      "#f59e0b",
      "#fde047",
      "#dc2626",
      "#0284c7"
    ],
    "tags": [
      "joias",
      "rubi",
      "realeza",
      "ouro",
      "soberano"
    ],
    "stepsDesc": [
      "1. Desenhe a base circular dourada com veludo vermelho real no interior.",
      "2. Trace as CINCO PONTAS MAJESTOSAS com a ponta central mais alta.",
      "3. Faça os GRANDES RUBIS VERMELHOS E ESMERALDAS incrustados na coroa.",
      "4. Desenhe as pérolas brancas esféricas coroando o cume de cada ponta.",
      "5. Adicione o brilho áureo soberano 'plim plim' ao redor da tiara real."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"135\" rx=\"55\" ry=\"14\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M50 135 C50 100 150 100 150 135 Z\" fill=\"#b91c1c\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"45,135 50,75 75,105 100,60 125,105 150,75 155,135\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"50\" cy=\"72\" r=\"4.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"100\" cy=\"57\" r=\"5.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"150\" cy=\"72\" r=\"4.5\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<polygon points=\"100,105 94,115 100,125 106,115\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"75\" cy=\"125\" r=\"4\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <circle cx=\"125\" cy=\"125\" r=\"4\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<polygon points=\"40,55 42,48 48,51 42,54\" fill=\"#ffffff\"/> <polygon points=\"160,55 162,48 168,51 162,54\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "varinha-magica",
    "name": "Varinha de Condão com Estrela",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "V A R I N H A",
    "colors": [
      "#ec4899",
      "#facc15",
      "#ffffff",
      "#c084fc"
    ],
    "tags": [
      "estrela_brilhante",
      "faíscas",
      "magia",
      "fada",
      "desejo"
    ],
    "stepsDesc": [
      "1. Desenhe a haste cilíndrica elegante da varinha em ângulo diagonal dinâmico.",
      "2. Trace a GRANDE ESTRELA DOURADA reluzente na ponta superior da varinha.",
      "3. Faça as FITAS DE CETIM ROSA E LILÁS esvoaçando na base da estrela.",
      "4. Desenhe o rastro ondulado de magia espiralando ao redor da haste.",
      "5. Espalhe faíscas brilhantes de pó de fada ao redor do feitiço."
    ],
    "layers": [
      "<polygon points=\"50,165 58,157 142,73 134,81\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"142,73 145,52 162,42 165,62 185,68 168,80 172,100 152,90 138,102 142,82\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M140 82 Q125 100 120 125\" fill=\"none\" stroke=\"#ec4899\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M140 82 Q145 105 135 130\" fill=\"none\" stroke=\"#c084fc\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M65 145 Q85 125 105 110 T145 75\" fill=\"none\" stroke=\"#fde047\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/>",
      "<polygon points=\"175,35 177,28 182,31 177,34\" fill=\"#facc15\"/> <circle cx=\"160\" cy=\"25\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"185\" cy=\"50\" r=\"2\" fill=\"#ec4899\"/> <circle cx=\"130\" cy=\"40\" r=\"2\" fill=\"#38bdf8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "escudo-heroi",
    "name": "Escudo com Brasão de Leão",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "medio",
    "word": "E S C U D O",
    "colors": [
      "#0284c7",
      "#facc15",
      "#dc2626",
      "#ffffff"
    ],
    "tags": [
      "brasão",
      "leão",
      "defesa",
      "cavaleiro",
      "herói"
    ],
    "stepsDesc": [
      "1. Desenhe a forma heráldica curvilínea do escudo triangular com topo reto.",
      "2. Trace a BORDA METÁLICA REFORÇADA COM REBITES cromados em toda a borda.",
      "3. Faça a CABEÇA DE LEÃO IMPONENTE RUGINDO em alto relevo ao centro.",
      "4. Desenhe os detalhes da juba majestosa e o olhar corajoso do leão.",
      "5. Adicione reflexos dourados de lâmina e arranhões de batalhas heroicas."
    ],
    "layers": [
      "<path d=\"M55 55 L145 55 L145 115 C145 145 100 165 100 165 C100 165 55 145 55 115 Z\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<path d=\"M62 62 L138 62 L138 115 C138 140 100 155 100 155 C100 155 62 140 62 115 Z\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"3\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"22\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <circle cx=\"100\" cy=\"100\" r=\"14\" fill=\"#fed7aa\"/>",
      "<polygon points=\"100,98 96,104 104,104\" fill=\"#1e293b\"/> <circle cx=\"93\" cy=\"94\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"107\" cy=\"94\" r=\"2.5\" fill=\"#1e293b\"/> <path d=\"M96 108 Q100 112 104 108\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"70\" cy=\"70\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"130\" cy=\"70\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"100\" cy=\"150\" r=\"2\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "espada-lendaria",
    "name": "Espada Ninja com Bainha",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "medio",
    "word": "E S P A D A",
    "colors": [
      "#64748b",
      "#cbd5e1",
      "#dc2626",
      "#facc15"
    ],
    "tags": [
      "lâmina",
      "fita",
      "guarda_ouro",
      "ninja",
      "honra"
    ],
    "stepsDesc": [
      "1. Desenhe a lâmina reta e afiada da katana de aço brilhando de comprido.",
      "2. Trace a TSUBA (GUARDA DE MÃO REDONDA DOURADA) separando a lâmina do cabo.",
      "3. Faça o CABO LONGO ENFAIXADO COM TRANÇADO TRADICIONAL em losangos.",
      "4. Desenhe a BAINHA DE MADEIRA LAQUEADA PRETA repousando ao lado.",
      "5. Adicione o reflexo de corte prateado na lâmina e o nó de fita na bainha."
    ],
    "layers": [
      "<polygon points=\"98,30 102,30 104,125 96,125\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"100\" cy=\"125\" rx=\"16\" ry=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<rect x=\"96\" y=\"128\" width=\"8\" height=\"42\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"96\" y1=\"135\" x2=\"104\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"96\" y1=\"145\" x2=\"104\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"96\" y1=\"155\" x2=\"104\" y2=\"155\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"172\" r=\"4\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<rect x=\"115\" y=\"45\" width=\"8\" height=\"110\" rx=\"2\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"113\" y=\"60\" width=\"12\" height=\"6\" rx=\"1\" fill=\"#facc15\"/>",
      "<line x1=\"99\" y1=\"35\" x2=\"99\" y2=\"115\" stroke=\"#ffffff\" stroke-width=\"1.8\"/> <polygon points=\"95,45 97,38 102,40 97,43\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "pocao-magica",
    "name": "Frasco de Poção com Bolhas",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "P O Ç Ã O",
    "colors": [
      "#a855f7",
      "#c084fc",
      "#38bdf8",
      "#ffffff"
    ],
    "tags": [
      "frasco_redondo",
      "rolha",
      "líquido",
      "brilhos",
      "alquimia"
    ],
    "stepsDesc": [
      "1. Desenhe o frasco de vidro arredondado com bojo esférico e gargalo estreito.",
      "2. Trace a ROLHA DE CORTIÇA TRAPEZOIDAL vedando a boca do frasco.",
      "3. Faça o LÍQUIDO MÁGICO ROXO TRANSLÚCIDO brilhando até a metade.",
      "4. Desenhe as BOLHAS EFERVESCENTES SUBINDO e escapando em vapor brilhante.",
      "5. Adicione estrelinhas cintilantes e uma etiqueta antiga amarrada por barbante."
    ],
    "layers": [
      "<path d=\"M92 70 L92 85 C65 95 65 145 100 145 C135 145 135 95 108 85 L108 70 Z\" fill=\"#e0f2fe\" opacity=\"0.6\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"90,70 110,70 106,55 94,55\" fill=\"#b45309\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"88\" y=\"68\" width=\"24\" height=\"5\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M72 110 C72 142 128 142 128 110 Q100 115 72 110 Z\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<circle cx=\"90\" cy=\"125\" r=\"4\" fill=\"#ffffff\" opacity=\"0.8\"/> <circle cx=\"110\" cy=\"120\" r=\"3.5\" fill=\"#ffffff\" opacity=\"0.8\"/> <circle cx=\"102\" cy=\"130\" r=\"2.5\" fill=\"#ffffff\" opacity=\"0.8\"/> <circle cx=\"100\" cy=\"100\" r=\"4.5\" fill=\"#c084fc\"/> <circle cx=\"95\" cy=\"85\" r=\"3\" fill=\"#c084fc\"/>",
      "<polygon points=\"120,95 122,90 127,92 122,95\" fill=\"#facc15\"/> <polygon points=\"75,100 77,95 82,97 77,100\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "fantasminha-camarada",
    "name": "Fantasminha Feliz e Amigo",
    "category": "fantasia",
    "sub": "criaturas",
    "diff": "facil",
    "word": "F A N T A S M A",
    "colors": [
      "#ffffff",
      "#e2e8f0",
      "#38bdf8",
      "#1e293b"
    ],
    "tags": [
      "ondulado",
      "amigável",
      "assombração",
      "fofo",
      "doçura"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça arredondada e o corpo fluido em lençol flutuando.",
      "2. Trace a SAIA INFERIOR CHEIA DE ONDULAÇÕES FLUTUANTES em zigue-zague suave.",
      "3. Faça os GRANDES OLHOS OVAIS PRETOS CURIOSOS com brilho expressivo.",
      "4. Desenhe os dois bracinhos curtos abertos prontos para dar um abraço amigável.",
      "5. Adicione bochechinhas rosadas tímidas e estrelinhas assustadoramente fofas."
    ],
    "layers": [
      "<path d=\"M65 95 C65 55 135 55 135 95 C135 130 145 155 130 155 C120 155 115 145 105 145 C95 145 90 155 80 155 C65 155 65 130 65 95 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 105 Q50 100 52 112 Q65 115 68 112\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M135 105 Q150 100 148 112 Q135 115 132 112\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"88\" cy=\"88\" rx=\"5\" ry=\"8\" fill=\"#1e293b\"/> <circle cx=\"86\" cy=\"85\" r=\"2.5\" fill=\"#ffffff\"/> <ellipse cx=\"112\" cy=\"88\" rx=\"5\" ry=\"8\" fill=\"#1e293b\"/> <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#ffffff\"/>",
      "<path d=\"M96 102 Q100 108 104 102\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.2\" stroke-linecap=\"round\"/> <ellipse cx=\"78\" cy=\"98\" rx=\"5\" ry=\"3\" fill=\"#fbcfe8\"/> <ellipse cx=\"122\" cy=\"98\" rx=\"5\" ry=\"3\" fill=\"#fbcfe8\"/>",
      "<polygon points=\"50,65 52,60 57,62 52,65\" fill=\"#38bdf8\"/> <polygon points=\"145,60 147,55 152,57 147,60\" fill=\"#38bdf8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "bola-de-cristal",
    "name": "Bola de Cristal Iluminada",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "medio",
    "word": "C R I S T A L",
    "colors": [
      "#38bdf8",
      "#818cf8",
      "#f59e0b",
      "#ffffff"
    ],
    "tags": [
      "pedestal_dourado",
      "névoa",
      "previsão",
      "mágico",
      "luz"
    ],
    "stepsDesc": [
      "1. Desenhe a grande esfera circular transparente e pura da bola de cristal.",
      "2. Trace o PEDESTAL DOURADO ORNAMENTADO COM TRÊS GARRAS segurando a esfera.",
      "3. Faça a NÉVOA MÍSTICA AZUL E VIOLETA girando no interior do cristal.",
      "4. Desenhe as constelações e símbolos que surgem na fumaça do futuro.",
      "5. Adicione raios de luz mágica projetando-se para fora da bola de adivinhação."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"42\" fill=\"#e0f2fe\" opacity=\"0.65\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M70 120 C70 140 130 140 130 120\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"5\"/> <rect x=\"75\" y=\"132\" width=\"50\" height=\"22\" rx=\"4\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <ellipse cx=\"100\" cy=\"155\" rx=\"36\" ry=\"10\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M80 85 Q100 65 120 85 T100 105\" fill=\"none\" stroke=\"#818cf8\" stroke-width=\"5\" opacity=\"0.6\"/> <circle cx=\"100\" cy=\"85\" r=\"12\" fill=\"#c084fc\" opacity=\"0.5\"/>",
      "<path d=\"M72 70 A25 25 0 0 1 105 52\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/> <circle cx=\"112\" cy=\"58\" r=\"2.5\" fill=\"#ffffff\"/>",
      "<polygon points=\"45,45 47,38 52,41 47,44\" fill=\"#facc15\"/> <polygon points=\"155,45 157,38 162,41 157,44\" fill=\"#facc15\"/> <circle cx=\"50\" cy=\"95\" r=\"2\" fill=\"#38bdf8\"/> <circle cx=\"150\" cy=\"95\" r=\"2\" fill=\"#38bdf8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "chapeu-de-bruxo",
    "name": "Chapéu de Bruxo com Fivela",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "C H A P É U",
    "colors": [
      "#312e81",
      "#a855f7",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "aba_larga",
      "ponta_dobrada",
      "fivela_ouro",
      "magia"
    ],
    "stepsDesc": [
      "1. Desenhe a grande aba circular ampla ondulada do chapéu clássico.",
      "2. Trace o CONE ALTO COM A PONTA DOBRADA PARA O LADO com caimento elegante.",
      "3. Faça a FAIXA DE COURO ROXA COM A FIVELA QUADRADA DOURADA na base do cone.",
      "4. Desenhe as rugas de tecido místico ao longo do cone do chapéu.",
      "5. Adicione estrelinhas e luas crescentes bordadas no feltro escuro."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"65\" ry=\"16\" fill=\"#1e1b4b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M60 140 L85 55 Q115 35 135 45 Q125 65 110 85 L140 140 Z\" fill=\"#312e81\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M58 138 C58 130 142 130 142 138 L140 145 C140 137 60 137 60 145 Z\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"90\" y=\"130\" width=\"20\" height=\"15\" rx=\"3\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"94\" y=\"133\" width=\"12\" height=\"9\" fill=\"#a855f7\"/>",
      "<path d=\"M80 110 Q95 105 115 110\" fill=\"none\" stroke=\"#1e1b4b\" stroke-width=\"2\"/> <path d=\"M90 85 Q102 80 118 85\" fill=\"none\" stroke=\"#1e1b4b\" stroke-width=\"2\"/>",
      "<polygon points=\"85,65 87,60 92,62 87,65\" fill=\"#facc15\"/> <path d=\"M110 65 A6 6 0 1 0 116 73 A5 5 0 1 1 110 65 Z\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "lampada-genio",
    "name": "Lâmpada dos Três Desejos",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "medio",
    "word": "L Â M P A D A",
    "colors": [
      "#f59e0b",
      "#fde047",
      "#38bdf8",
      "#b45309"
    ],
    "tags": [
      "gênio",
      "bico",
      "fumaça_azul",
      "ouro",
      "desejos"
    ],
    "stepsDesc": [
      "1. Desenhe o bojo arredondado e rebaixado da lâmpada mágica de latão dourado.",
      "2. Trace o BICO LONGO AFUNILADO CURVADO de onde sai a fumaça mística.",
      "3. Faça a ALÇA EM VOLUTA ELEGANTE e a base circular frisada.",
      "4. Desenhe a grande espiral de fumaça azul mágica do gênio brotando do bico.",
      "5. Adicione estrelinhas de desejos realizados cintilando na fumaça."
    ],
    "layers": [
      "<ellipse cx=\"90\" cy=\"135\" rx=\"38\" ry=\"18\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"90\" cy=\"155\" rx=\"22\" ry=\"6\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M125 130 C155 125 170 105 168 95 L155 98 C150 110 130 120 115 125 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M55 130 C35 115 35 155 60 145\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"5\" stroke-linecap=\"round\"/> <ellipse cx=\"90\" cy=\"120\" rx=\"14\" ry=\"5\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"90\" cy=\"115\" r=\"3\" fill=\"#ca8a04\"/>",
      "<path d=\"M165 95 C175 75 150 65 160 45 C170 25 140 20 130 35\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"6\" stroke-linecap=\"round\"/> <circle cx=\"130\" cy=\"35\" r=\"8\" fill=\"#38bdf8\"/>",
      "<polygon points=\"145,55 147,50 152,52 147,55\" fill=\"#fde047\"/> <polygon points=\"120,25 122,20 127,22 122,25\" fill=\"#fde047\"/> <circle cx=\"165\" cy=\"40\" r=\"2\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "tapete-voador",
    "name": "Tapete Mágico com Franjas",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "medio",
    "word": "T A P E T E",
    "colors": [
      "#dc2626",
      "#facc15",
      "#2563eb",
      "#ffffff"
    ],
    "tags": [
      "ondulado",
      "franjas",
      "arabescos",
      "voar",
      "mil_e_uma_noites"
    ],
    "stepsDesc": [
      "1. Desenhe o tapete retangular ondulando em curva dupla de 'S' voando pelo ar.",
      "2. Trace as FRANJAS DE FIOS DE OURO penduradas nas duas pontas do tapete.",
      "3. Faça a MOLDURA GEOMÉTRICA ORIENTAL com arabescos e losangos coloridos.",
      "4. Desenhe o medalhão central decorativo clássico de Mil e Uma Noites.",
      "5. Adicione nuvens passando por baixo e estrelinhas mágicas pelo céu noturno."
    ],
    "layers": [
      "<path d=\"M35 105 C55 85 85 85 105 105 C125 125 155 125 175 105 L165 135 C145 155 115 155 95 135 C75 115 45 115 25 135 Z\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"25\" y1=\"135\" x2=\"18\" y2=\"145\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <line x1=\"28\" y1=\"132\" x2=\"22\" y2=\"142\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <line x1=\"32\" y1=\"128\" x2=\"26\" y2=\"138\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <line x1=\"165\" y1=\"135\" x2=\"172\" y2=\"145\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <line x1=\"168\" y1=\"132\" x2=\"175\" y2=\"142\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <line x1=\"172\" y1=\"128\" x2=\"179\" y2=\"138\" stroke=\"#facc15\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 C60 95 82 95 102 110 C122 128 148 128 166 110\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"2\"/> <path d=\"M32 130 C50 115 72 115 92 130 C112 148 138 148 156 130\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"2\"/>",
      "<polygon points=\"100,115 108,122 100,129 92,122\" fill=\"#3b82f6\" stroke=\"#facc15\" stroke-width=\"1.5\"/>",
      "<path d=\"M50 160 Q70 150 90 160 T130 160\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <polygon points=\"140,55 142,50 147,52 142,55\" fill=\"#fef08a\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "pena-tinteiro",
    "name": "Pena com Frasco de Tinta",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "P E N A",
    "colors": [
      "#475569",
      "#cbd5e1",
      "#3b82f6",
      "#1e293b"
    ],
    "tags": [
      "escrever",
      "antigo",
      "tinteiro",
      "caligrafia",
      "poema"
    ],
    "stepsDesc": [
      "1. Desenhe a longa haste curvada da pena de ganso branca com farpas suaves.",
      "2. Trace a PONTA METÁLICA AFIADA BISELADA com fenda por onde corre a tinta.",
      "3. Faça o FRASCO DE VIDRO OCTOGONAL DO TINTEIRO com tinta azul-escura.",
      "4. Desenhe o pergaminho antigo enrolado ao lado com escrita caligráfica.",
      "5. Adicione gotículas de tinta preta espirrando artisticamente da pena."
    ],
    "layers": [
      "<path d=\"M135 35 C115 55 95 85 80 120 C95 110 115 95 130 75 C145 55 145 40 135 35 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <line x1=\"135\" y1=\"35\" x2=\"72\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"72,135 65,145 75,142\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"42\" y=\"130\" width=\"30\" height=\"28\" rx=\"4\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <rect x=\"48\" y=\"122\" width=\"18\" height=\"10\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<rect x=\"95\" y=\"140\" width=\"60\" height=\"18\" rx=\"3\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"102\" y1=\"146\" x2=\"148\" y2=\"146\" stroke=\"#78350f\" stroke-width=\"1.2\"/> <line x1=\"102\" y1=\"151\" x2=\"138\" y2=\"151\" stroke=\"#78350f\" stroke-width=\"1.2\"/>",
      "<circle cx=\"68\" cy=\"155\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"75\" cy=\"160\" r=\"1.5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "pergaminho-ninja",
    "name": "Pergaminho Ninja Aberto",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "P E R G A M I N H O",
    "colors": [
      "#d97706",
      "#fef3c7",
      "#dc2626",
      "#1e293b"
    ],
    "tags": [
      "rolos",
      "segredo",
      "kanji",
      "ninja",
      "missão"
    ],
    "stepsDesc": [
      "1. Desenhe os dois rolos cilíndricos de madeira laqueada nas extremidades.",
      "2. Trace a FOLHA DE PAPEL DE ARROZ ESTICADA ABERTA entre os dois rolos.",
      "3. Faça os KANJIS E SÍMBOLOS MÍSTICOS NINJA desenhados com pincel de tinta.",
      "4. Desenhe a fita vermelha de amarrar com pingente pendurada em um dos rolos.",
      "5. Adicione nuvenzinhas orientais decorativas estampadas nas bordas do pergaminho."
    ],
    "layers": [
      "<rect x=\"40\" y=\"70\" width=\"12\" height=\"75\" rx=\"3\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <rect x=\"148\" y=\"70\" width=\"12\" height=\"75\" rx=\"3\" fill=\"#78350f\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"52\" y=\"78\" width=\"96\" height=\"58\" fill=\"#fef3c7\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"100\" y1=\"88\" x2=\"100\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"85\" y1=\"95\" x2=\"115\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"88\" y1=\"110\" x2=\"112\" y2=\"110\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"100\" cy=\"107\" r=\"18\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\" opacity=\"0.6\"/>",
      "<path d=\"M42 145 C40 160 48 165 44 175\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <circle cx=\"44\" cy=\"177\" r=\"3.5\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "shuriken-estrela",
    "name": "Shuriken Ninja de 4 Pontas",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "S H U R I K E N",
    "colors": [
      "#475569",
      "#94a3b8",
      "#cbd5e1",
      "#1e293b"
    ],
    "tags": [
      "furo_central",
      "lâminas",
      "ninja",
      "aço",
      "estrela"
    ],
    "stepsDesc": [
      "1. Desenhe a grande cruz de lâminas simétricas afiadas de quatro pontas.",
      "2. Trace o FURO CIRCULAR CENTRAL característico da shuriken de metal.",
      "3. Faça as BISELAGENS E FACETAS ANGULARES afiadas em cada lâmina de aço.",
      "4. Desenhe as linhas de reflexo de luz metálica prateada nas bordas cortantes.",
      "5. Adicione linhas de rotação dinâmica 'VUUP' simulando o voo giratório."
    ],
    "layers": [
      "<polygon points=\"100,30 115,85 170,100 115,115 100,170 85,115 30,100 85,85\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"14\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"86\" stroke=\"#cbd5e1\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"170\" x2=\"100\" y2=\"114\" stroke=\"#cbd5e1\" stroke-width=\"2\"/> <line x1=\"30\" y1=\"100\" x2=\"86\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"2\"/> <line x1=\"170\" y1=\"100\" x2=\"114\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>",
      "<polygon points=\"100,30 106,75 115,85\" fill=\"#94a3b8\"/> <polygon points=\"170,100 125,106 115,115\" fill=\"#94a3b8\"/> <polygon points=\"100,170 94,125 85,115\" fill=\"#94a3b8\"/> <polygon points=\"30,100 75,94 85,85\" fill=\"#94a3b8\"/>",
      "<ellipse cx=\"100\" cy=\"100\" rx=\"75\" ry=\"75\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"6 6\"/> <polygon points=\"100,20 102,15 107,17 102,20\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "kunai-ferramenta",
    "name": "Kunai Ninja com Argola",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "K U N A I",
    "colors": [
      "#334155",
      "#64748b",
      "#dc2626",
      "#cbd5e1"
    ],
    "tags": [
      "argola",
      "cabo_enfaixado",
      "lâmina",
      "ninja",
      "ferramenta"
    ],
    "stepsDesc": [
      "1. Desenhe a lâmina losangular larga e pontuda de aço da adaga kunai.",
      "2. Trace o CABO CILÍNDRICO ENFAIXADO COM TIRAS BRANCAS DE PANO.",
      "3. Faça a GRANDE ARGOLA CIRCULAR DE METAL na extremidade do cabo.",
      "4. Desenhe a fita vermelha decorativa amarrada na argola balançando.",
      "5. Adicione o reflexo de luz chanfrado dividindo a lâmina ao meio."
    ],
    "layers": [
      "<polygon points=\"100,25 125,95 100,105 75,95\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<rect x=\"94\" y=\"105\" width=\"12\" height=\"40\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"94\" y1=\"115\" x2=\"106\" y2=\"115\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"94\" y1=\"125\" x2=\"106\" y2=\"125\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"94\" y1=\"135\" x2=\"106\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"100\" cy=\"155\" r=\"10\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/>",
      "<path d=\"M100 165 C95 175 110 185 105 195\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<line x1=\"100\" y1=\"25\" x2=\"100\" y2=\"105\" stroke=\"#ffffff\" stroke-width=\"2\"/> <polygon points=\"80,50 82,45 87,47 82,50\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "mascara-raposa",
    "name": "Máscara Kitsune Tradicional",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "medio",
    "word": "M Á S C A R A",
    "colors": [
      "#ffffff",
      "#dc2626",
      "#1e293b",
      "#facc15"
    ],
    "tags": [
      "pinturas_vermelhas",
      "orelhas",
      "festival",
      "japão",
      "teatro"
    ],
    "stepsDesc": [
      "1. Desenhe a máscara facial oval de porcelana branca com focinho fino.",
      "2. Trace as DUAS ORELHAS PONTUDAS COM O INTERIOR VERMELHO no topo.",
      "3. Faça os OLHOS RASGADOS CURVADOS VAZADOS tradicionais do teatro nô.",
      "4. Desenhe as PINTURAS RITUAIS VERMELHAS nas bochechas e na testa.",
      "5. Adicione o cordão vermelho lateral com dois pompons ou guizos pendurados."
    ],
    "layers": [
      "<path d=\"M100 50 C65 50 60 90 70 125 C75 145 90 160 100 160 C110 160 125 145 130 125 C140 90 135 50 100 50 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"72,58 55,25 85,45\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"128,58 145,25 115,45\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<path d=\"M80 95 Q88 88 95 95 Q88 98 80 95 Z\" fill=\"#1e293b\"/> <path d=\"M120 95 Q112 88 105 95 Q112 98 120 95 Z\" fill=\"#1e293b\"/> <polygon points=\"100,120 97,125 103,125\" fill=\"#1e293b\"/> <path d=\"M96 132 Q100 135 104 132\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>",
      "<path d=\"M72 110 Q80 115 76 125\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M128 110 Q120 115 124 125\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/> <circle cx=\"100\" cy=\"70\" r=\"4\" fill=\"#dc2626\"/>",
      "<path d=\"M65 115 C55 125 50 145 55 155\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/> <circle cx=\"55\" cy=\"158\" r=\"4\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/> <path d=\"M135 115 C145 125 150 145 145 155\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/> <circle cx=\"145\" cy=\"158\" r=\"4\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "leque-japones",
    "name": "Leque Japonês de Cerejeira",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "L E Q U E",
    "colors": [
      "#f43f5e",
      "#fbcfe8",
      "#78350f",
      "#ffffff"
    ],
    "tags": [
      "sakura",
      "dobras",
      "haste",
      "vento",
      "dança"
    ],
    "stepsDesc": [
      "1. Desenhe o grande semicírculo leque aberto em arco de 180 graus.",
      "2. Trace as VARETAS DE BAMBU RADIANDO DO PONTO PIVÔ CENTRAL na base.",
      "3. Faça as DOBRAS DE PAPEL PLISSADO em gomos alternados com sombra.",
      "4. Desenhe o LINDO GALHO DE CEREJEIRA COM FLORES ROSAS pintado no papel.",
      "5. Adicione o pingente de seda vermelha com borla balançando no pivô."
    ],
    "layers": [
      "<path d=\"M35 140 C35 75 165 75 165 140 L125 140 C125 105 75 105 75 140 Z\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"165\" x2=\"35\" y2=\"140\" stroke=\"#78350f\" stroke-width=\"2.2\"/> <line x1=\"100\" y1=\"165\" x2=\"65\" y2=\"95\" stroke=\"#78350f\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"165\" x2=\"100\" y2=\"78\" stroke=\"#78350f\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"165\" x2=\"135\" y2=\"95\" stroke=\"#78350f\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"165\" x2=\"165\" y2=\"140\" stroke=\"#78350f\" stroke-width=\"2.2\"/> <circle cx=\"100\" cy=\"165\" r=\"5\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<path d=\"M60 120 Q85 105 115 110 T145 100\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"110\" r=\"5\" fill=\"#f43f5e\"/> <circle cx=\"110\" cy=\"105\" r=\"5\" fill=\"#f43f5e\"/> <circle cx=\"130\" cy=\"102\" r=\"4\" fill=\"#f43f5e\"/> <circle cx=\"95\" cy=\"118\" r=\"4\" fill=\"#f43f5e\"/>",
      "<path d=\"M100 170 C95 180 105 185 100 195\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"195\" r=\"3\" fill=\"#dc2626\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "lanterna-oriental",
    "name": "Lanterna de Papel Vermelha",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "L A N T E R N A",
    "colors": [
      "#dc2626",
      "#facc15",
      "#1e293b",
      "#ffffff"
    ],
    "tags": [
      "franjas",
      "nervuras",
      "luz",
      "festival",
      "papel"
    ],
    "stepsDesc": [
      "1. Desenhe o grande corpo oval gordinho da lanterna de papel de seda vermelha.",
      "2. Trace o ARO SUPERIOR E INFERIOR DE MADEIRA PRETA com os anéis metálicos.",
      "3. Faça as LINHAS CURVAS VERTICAIS DAS NERVURAS DE BAMBU que dão forma à lanterna.",
      "4. Desenhe o CARACTERE CHINÊS DOURADO DE FELICIDADE (FU) pintado no centro.",
      "5. Adicione a franja de fios de seda dourada pendurada na base balançando suavemente."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"100\" rx=\"42\" ry=\"46\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<rect x=\"80\" y=\"50\" width=\"40\" height=\"8\" rx=\"2\" fill=\"#1e293b\"/> <rect x=\"80\" y=\"142\" width=\"40\" height=\"8\" rx=\"2\" fill=\"#1e293b\"/> <line x1=\"100\" y1=\"50\" x2=\"100\" y2=\"30\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 54 C82 70 82 130 100 146\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"2\"/> <path d=\"M100 54 C118 70 118 130 100 146\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"54\" x2=\"100\" y2=\"146\" stroke=\"#b91c1c\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"14\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/> <line x1=\"94\" y1=\"100\" x2=\"106\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"94\" x2=\"100\" y2=\"106\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"90\" y1=\"150\" x2=\"88\" y2=\"175\" stroke=\"#facc15\" stroke-width=\"2\"/> <line x1=\"95\" y1=\"150\" x2=\"94\" y2=\"178\" stroke=\"#facc15\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"150\" x2=\"100\" y2=\"180\" stroke=\"#facc15\" stroke-width=\"2.5\"/> <line x1=\"105\" y1=\"150\" x2=\"106\" y2=\"178\" stroke=\"#facc15\" stroke-width=\"2\"/> <line x1=\"110\" y1=\"150\" x2=\"112\" y2=\"175\" stroke=\"#facc15\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "torii-portal",
    "name": "Portal Sagrado Torii",
    "category": "fantasia",
    "sub": "arquitetura",
    "diff": "facil",
    "word": "P O R T A L",
    "colors": [
      "#dc2626",
      "#b91c1c",
      "#1e293b",
      "#ffffff"
    ],
    "tags": [
      "colunas",
      "viga_curva",
      "japão",
      "sagrado",
      "madeira"
    ],
    "stepsDesc": [
      "1. Desenhe os dois grandes pilares cilíndricos verticais avermelhados com bases pretas.",
      "2. Trace a GRANDE VIGA SUPERIOR CURVADA KASAGI que curva graciosa nas pontas.",
      "3. Faça a SEGUNDA VIGA HORIZONTAL RETA NUKI logo abaixo com a placa central gakuzuka.",
      "4. Desenhe as bases pretas kamaboko que protegem os pilares no solo sagrado.",
      "5. Adicione nuvenzinhas místicas e lanternas de pedra toro ao redor do portal."
    ],
    "layers": [
      "<line x1=\"65\" y1=\"75\" x2=\"65\" y2=\"165\" stroke=\"#dc2626\" stroke-width=\"10\" stroke-linecap=\"round\"/> <line x1=\"65\" y1=\"75\" x2=\"65\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <line x1=\"135\" y1=\"75\" x2=\"135\" y2=\"165\" stroke=\"#dc2626\" stroke-width=\"10\" stroke-linecap=\"round\"/> <line x1=\"135\" y1=\"75\" x2=\"135\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 60 C80 52 120 52 160 60 L155 72 C120 66 80 66 45 72 Z\" fill=\"#b91c1c\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<rect x=\"52\" y=\"85\" width=\"96\" height=\"10\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <rect x=\"94\" y=\"68\" width=\"12\" height=\"18\" fill=\"#1e293b\"/>",
      "<rect x=\"58\" y=\"155\" width=\"14\" height=\"12\" rx=\"2\" fill=\"#1e293b\"/> <rect x=\"128\" y=\"155\" width=\"14\" height=\"12\" rx=\"2\" fill=\"#1e293b\"/> <line x1=\"25\" y1=\"167\" x2=\"175\" y2=\"167\" stroke=\"#64748b\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 45 Q35 38 45 45\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/> <path d=\"M155 45 Q165 38 175 45\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "cerejeira-sakura",
    "name": "Galho com Flores de Sakura",
    "category": "fantasia",
    "sub": "natureza",
    "diff": "facil",
    "word": "S A K U R A",
    "colors": [
      "#f472b6",
      "#fbcfe8",
      "#78350f",
      "#ffffff"
    ],
    "tags": [
      "pétalas",
      "primavera",
      "flor",
      "japão",
      "delicada"
    ],
    "stepsDesc": [
      "1. Desenhe o galho marrom sinuoso de cerejeira bifurcando em ramos delicados.",
      "2. Trace as CINCO PÉTALAS OVALADAS ARREDONDADAS da primeira grande flor de sakura.",
      "3. Faça os BOTÕES FECHADOS E FLORES MENORES brotando ao longo do galho.",
      "4. Desenhe o miolo com estames delicados e pontinhos de pólen em cada florzinha.",
      "5. Adicione pétalas cor-de-rosa soltas voando suavemente na brisa da primavera."
    ],
    "layers": [
      "<path d=\"M25 145 C60 135 85 110 115 95 C140 82 165 80 175 75\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"6\" stroke-linecap=\"round\"/> <path d=\"M85 110 Q95 75 110 65\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<circle cx=\"115\" cy=\"95\" r=\"9\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"106\" cy=\"88\" r=\"9\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"124\" cy=\"88\" r=\"9\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"110\" cy=\"105\" r=\"9\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"120\" cy=\"105\" r=\"9\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"115\" cy=\"95\" r=\"4\" fill=\"#f43f5e\"/>",
      "<circle cx=\"65\" cy=\"125\" r=\"7\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"58\" cy=\"120\" r=\"7\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"72\" cy=\"120\" r=\"7\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <circle cx=\"65\" cy=\"125\" r=\"3\" fill=\"#f43f5e\"/>",
      "<ellipse cx=\"145\" cy=\"80\" rx=\"5\" ry=\"8\" transform=\"rotate(30 145 80)\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"165\" cy=\"74\" rx=\"4\" ry=\"7\" transform=\"rotate(-20 165 74)\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<ellipse cx=\"45\" cy=\"85\" rx=\"5\" ry=\"3\" transform=\"rotate(-35 45 85)\" fill=\"#fbcfe8\"/> <ellipse cx=\"80\" cy=\"55\" rx=\"5\" ry=\"3\" transform=\"rotate(25 80 55)\" fill=\"#fbcfe8\"/> <ellipse cx=\"155\" cy=\"120\" rx=\"5\" ry=\"3\" transform=\"rotate(-15 155 120)\" fill=\"#fbcfe8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "origami-tsuru",
    "name": "Pássaro Tsuru de Papel",
    "category": "fantasia",
    "sub": "artes",
    "diff": "medio",
    "word": "T S U R U",
    "colors": [
      "#38bdf8",
      "#0284c7",
      "#ffffff",
      "#e0f2fe"
    ],
    "tags": [
      "dobradura",
      "paz",
      "asas",
      "papel",
      "tradição"
    ],
    "stepsDesc": [
      "1. Desenhe as linhas geométricas de dobradura do corpo romboide do origami.",
      "2. Trace as DUAS GRANDES ASAS TRIANGULARES ABERTAS apontando para cima.",
      "3. Faça o PESCOÇO LONGO ANGULAR COM O BICO DOBRADO característico do tsuru.",
      "4. Desenhe a cauda afilada simétrica apontando para trás em ângulo harmônico.",
      "5. Adicione sombras delicadas nas facetas de dobra evidenciando o papel dobrado."
    ],
    "layers": [
      "<polygon points=\"100,95 80,120 100,140 120,120\" fill=\"#e0f2fe\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,95 40,65 80,120\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <polygon points=\"100,95 160,65 120,120\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"80,120 55,95 50,75 56,78 65,95\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"50,75 42,80 50,83\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<polygon points=\"120,120 145,95 152,98 135,122\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"140\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"40,65 70,95 80,120\" fill=\"#bae6fd\" opacity=\"0.6\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "carpa-koi",
    "name": "Carpa Koi da Prosperidade",
    "category": "fantasia",
    "sub": "criaturas",
    "diff": "medio",
    "word": "K O I",
    "colors": [
      "#ea580c",
      "#ffffff",
      "#1e293b",
      "#38bdf8"
    ],
    "tags": [
      "escamas",
      "bigodes",
      "barbatanas_longas",
      "rio",
      "água"
    ],
    "stepsDesc": [
      "1. Desenhe a forma fluida em 'S' da carpa japonesa nadando graciosamente.",
      "2. Trace as LONGAS BARBATANAS PEITORAIS TRANSLÚCIDAS abertas como leques.",
      "3. Faça a CAUDA BIPARTIDA ONDULANTE com raios delicados que parecem seda.",
      "4. Desenhe as MANCHAS VERMELHAS E PRETAS VIBRANTES (KOHAKU) no dorso branco.",
      "5. Adicione os dois bigodes orientais no focinho e ondulações na água límpida."
    ],
    "layers": [
      "<path d=\"M70 65 C60 85 60 115 85 135 C105 150 125 140 135 120 C145 95 125 65 95 55 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M62 95 C40 100 35 115 45 122 C55 125 65 115 68 105 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M125 85 C145 88 155 100 148 110 C140 115 130 105 122 98 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M85 135 C80 155 70 170 85 180 C95 170 100 155 95 140 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M95 140 C110 155 125 170 115 180 C105 170 95 155 92 138 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M78 72 C70 85 75 100 88 95 C95 85 90 70 78 72 Z\" fill=\"#ea580c\"/> <path d=\"M92 110 C88 122 105 128 112 118 C115 108 100 105 92 110 Z\" fill=\"#ea580c\"/> <circle cx=\"82\" cy=\"115\" r=\"3.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"75\" cy=\"62\" r=\"3\" fill=\"#1e293b\"/> <line x1=\"72\" y1=\"58\" x2=\"65\" y2=\"52\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <ellipse cx=\"100\" cy=\"100\" rx=\"65\" ry=\"65\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "arvore-bonsai",
    "name": "Pequeno Bonsai no Vaso",
    "category": "fantasia",
    "sub": "natureza",
    "diff": "medio",
    "word": "B O N S A I",
    "colors": [
      "#15803d",
      "#78350f",
      "#0284c7",
      "#ffffff"
    ],
    "tags": [
      "tronco_retorcido",
      "copa_nuvem",
      "vaso_azul",
      "arte",
      "zen"
    ],
    "stepsDesc": [
      "1. Desenhe o vaso retangular raso de cerâmica esmaltada azul com pezinhos curtos.",
      "2. Trace o TRONCO RETORCIDO ESCULPIDO COM NÓS E CURVAS elegante do bonsai.",
      "3. Faça as COPAS EM PLATAFORMAS ARREDONDADAS DE NUVENS DE FOLHAS verdes.",
      "4. Desenhe o musgo verde aveludado e pequenas pedras de rio cobrindo a terra.",
      "5. Adicione raízes expostas abraçando o solo e galhos finos com estilo zen."
    ],
    "layers": [
      "<polygon points=\"50,145 150,145 142,165 58,165\" fill=\"#0284c7\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <rect x=\"62\" y=\"165\" width=\"8\" height=\"6\" fill=\"#1e293b\"/> <rect x=\"130\" y=\"165\" width=\"8\" height=\"6\" fill=\"#1e293b\"/>",
      "<path d=\"M95 145 C90 120 115 110 100 85 C92 70 80 75 75 60\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"10\" stroke-linecap=\"round\"/> <path d=\"M102 105 Q125 95 135 85\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"65\" cy=\"55\" rx=\"24\" ry=\"14\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"105\" cy=\"72\" rx=\"22\" ry=\"13\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <ellipse cx=\"138\" cy=\"82\" rx=\"20\" ry=\"12\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"144\" rx=\"42\" ry=\"6\" fill=\"#16a34a\"/> <circle cx=\"82\" cy=\"143\" r=\"3\" fill=\"#64748b\"/> <circle cx=\"118\" cy=\"143\" r=\"2.5\" fill=\"#64748b\"/>",
      "<line x1=\"88\" y1=\"145\" x2=\"82\" y2=\"152\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"105\" y1=\"145\" x2=\"112\" y2=\"152\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "cogumelo-magico",
    "name": "Cogumelo Brilhante com Olhos",
    "category": "fantasia",
    "sub": "criaturas",
    "diff": "facil",
    "word": "C O G U M E L O",
    "colors": [
      "#a855f7",
      "#c084fc",
      "#fde047",
      "#ffffff"
    ],
    "tags": [
      "brilhos",
      "chapéu_curvo",
      "floresta_mágica",
      "fada",
      "fofo"
    ],
    "stepsDesc": [
      "1. Desenhe o caule rechonchudo gordinho do cogumelo mágico da floresta encantada.",
      "2. Trace o GRANDE CHAPÉU ARREDONDADO EM CÚPULA vermelho com abas salientes.",
      "3. Faça as GRANDES PINTAS BRANCAS CIRCULARES espalhadas pela cúpula vermelha.",
      "4. Desenhe os DOIS GRANDES OLHINHOS BRILHANTES KAWAII e boquinha doce no caule.",
      "5. Adicione estrelinhas e pólen mágico cintilando ao redor do cogumelinho."
    ],
    "layers": [
      "<path d=\"M85 115 L80 160 C80 165 120 165 120 160 L115 115 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M45 115 C45 65 155 65 155 115 Z\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<circle cx=\"75\" cy=\"85\" r=\"10\" fill=\"#ffffff\"/> <circle cx=\"100\" cy=\"75\" r=\"12\" fill=\"#ffffff\"/> <circle cx=\"125\" cy=\"88\" r=\"9\" fill=\"#ffffff\"/> <circle cx=\"60\" cy=\"105\" r=\"6\" fill=\"#ffffff\"/> <circle cx=\"140\" cy=\"105\" r=\"6\" fill=\"#ffffff\"/>",
      "<ellipse cx=\"92\" cy=\"132\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/> <circle cx=\"91\" cy=\"130\" r=\"1.8\" fill=\"#ffffff\"/> <ellipse cx=\"108\" cy=\"132\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/> <circle cx=\"107\" cy=\"130\" r=\"1.8\" fill=\"#ffffff\"/> <path d=\"M96 142 Q100 146 104 142\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <ellipse cx=\"85\" cy=\"138\" rx=\"4\" ry=\"2\" fill=\"#f43f5e\" opacity=\"0.6\"/> <ellipse cx=\"115\" cy=\"138\" rx=\"4\" ry=\"2\" fill=\"#f43f5e\" opacity=\"0.6\"/>",
      "<polygon points=\"40,65 42,60 47,62 42,65\" fill=\"#facc15\"/> <polygon points=\"155,60 157,55 162,57 157,60\" fill=\"#facc15\"/> <circle cx=\"35\" cy=\"120\" r=\"2\" fill=\"#a855f7\"/> <circle cx=\"165\" cy=\"120\" r=\"2\" fill=\"#a855f7\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "cristal-mineral",
    "name": "Ametista Roxa Multifacetada",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "A M E T I S T A",
    "colors": [
      "#7e22ce",
      "#a855f7",
      "#c084fc",
      "#ffffff"
    ],
    "tags": [
      "facetas",
      "ponta",
      "mineral",
      "brilho",
      "geodo"
    ],
    "stepsDesc": [
      "1. Desenhe o aglomerado de prismas pontiagudos de cristal crescendo em grupo.",
      "2. Trace o GRANDE CRISTAL CENTRAL COM PONTA HEXAGONAL afiada e elegante.",
      "3. Faça os CRISTAIS SECUNDÁRIOS MENORES inclinados nas laterais em feixe.",
      "4. Desenhe as FACETAS GEOMÉTRICAS CHANFRADAS refletindo tons de violeta e lilás.",
      "5. Adicione pontos de luz intensa cintilando nas arestas polidas do mineral."
    ],
    "layers": [
      "<polygon points=\"100,35 120,70 115,160 85,160 80,70\" fill=\"#7e22ce\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"65,75 82,100 80,160 55,160 52,105\" fill=\"#9333ea\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <polygon points=\"135,70 148,100 145,160 120,160 118,95\" fill=\"#a855f7\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>",
      "<polygon points=\"100,35 100,160 115,160 120,70\" fill=\"#a855f7\"/> <polygon points=\"100,35 80,70 100,75\" fill=\"#c084fc\"/> <polygon points=\"100,35 120,70 100,75\" fill=\"#e9d5ff\"/>",
      "<polygon points=\"65,75 75,100 60,105\" fill=\"#c084fc\"/> <polygon points=\"135,70 125,95 140,100\" fill=\"#c084fc\"/>",
      "<polygon points=\"98,30 100,24 104,27 100,30\" fill=\"#ffffff\"/> <polygon points=\"122,65 124,60 128,62 124,65\" fill=\"#ffffff\"/> <polygon points=\"62,70 64,65 68,67 64,70\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "pedra-filosofal",
    "name": "Rubi Vermelho Brilhante",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "R U B I",
    "colors": [
      "#dc2626",
      "#b91c1c",
      "#fca5a5",
      "#ffffff"
    ],
    "tags": [
      "lapidado",
      "diamante",
      "vermelho",
      "precioso",
      "brilho"
    ],
    "stepsDesc": [
      "1. Desenhe a silhueta clássica do diamante lapidado com mesa superior plana.",
      "2. Trace o CINTURÃO HORIZONTAL LARGO dividindo a coroa da culatra pontuda.",
      "3. Faça os TRIÂNGULOS E PIPAS GEOMÉTRICAS lapidadas na coroa superior.",
      "4. Desenhe as FACETAS INFERIORES AFUNILANDO até a ponta aguda da culatra.",
      "5. Adicione raios brilhantes vermelhos incandescentes irradiando poder ancestral."
    ],
    "layers": [
      "<polygon points=\"60,65 140,65 165,95 100,165 35,95\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linejoin=\"round\"/>",
      "<line x1=\"35\" y1=\"95\" x2=\"165\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"75,65 125,65 145,95 55,95\" fill=\"#ef4444\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"60\" y1=\"65\" x2=\"55\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"140\" y1=\"65\" x2=\"145\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <line x1=\"100\" y1=\"65\" x2=\"100\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"100\" y1=\"165\" x2=\"55\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"165\" x2=\"100\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"165\" x2=\"145\" y2=\"95\" stroke=\"#1e293b\" stroke-width=\"2\"/> <polygon points=\"100,165 100,95 145,95\" fill=\"#b91c1c\"/>",
      "<polygon points=\"70,60 72,52 78,55 72,58\" fill=\"#ffffff\"/> <polygon points=\"150,85 152,78 158,81 152,84\" fill=\"#ffffff\"/> <circle cx=\"100\" cy=\"115\" r=\"3\" fill=\"#fca5a5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "asas-de-anjo",
    "name": "Par de Asas de Plumas Brancas",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "medio",
    "word": "A S A S",
    "colors": [
      "#ffffff",
      "#cbd5e1",
      "#facc15",
      "#38bdf8"
    ],
    "tags": [
      "penas",
      "abertas",
      "anjo",
      "auréola",
      "luz"
    ],
    "stepsDesc": [
      "1. Desenhe os dois grandes ossos curvos superiores das asas abertas em simetria.",
      "2. Trace a PRIMEIRA CAMADA DE PENAS CURTAS MACIAS na base dos braços.",
      "3. Faça a SEGUNDA CAMADA DE REMIGES MÉDIAS sobrepondo em ordem rítmica.",
      "4. Desenhe as GRANDES PENAS PRIMÁRIAS LONGAS E AFILADAS nas extremidades das asas.",
      "5. Adicione a auréola dourada flutuando com brilhos angelicais entre as asas."
    ],
    "layers": [
      "<path d=\"M90 100 C75 55 40 45 25 65 C20 95 35 125 50 145 L90 100\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <path d=\"M110 100 C125 55 160 45 175 65 C180 95 165 125 150 145 L110 100\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M35 85 C42 105 55 120 65 130\" stroke=\"#cbd5e1\" stroke-width=\"2\"/> <path d=\"M165 85 C158 105 145 120 135 130\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>",
      "<path d=\"M25 65 C15 85 20 115 35 140\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2.5\"/> <path d=\"M175 65 C185 85 180 115 165 140\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"100\" cy=\"45\" rx=\"26\" ry=\"7\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"3.5\"/>",
      "<polygon points=\"100,28 102,22 107,25 102,28\" fill=\"#fef08a\"/> <circle cx=\"65\" cy=\"50\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"135\" cy=\"50\" r=\"2\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "harpa-encantada",
    "name": "Harpa Dourada dos Céus",
    "category": "fantasia",
    "sub": "musica",
    "diff": "medio",
    "word": "H A R P A",
    "colors": [
      "#f59e0b",
      "#fde047",
      "#cbd5e1",
      "#ffffff"
    ],
    "tags": [
      "cordas",
      "curva",
      "som_suave",
      "anjo",
      "música"
    ],
    "stepsDesc": [
      "1. Desenhe a coluna vertical esculpida e a curva sinuosa superior do console.",
      "2. Trace a CAIXA DE RESSONÂNCIA DIAGONAL ROBUSTA fechando o triângulo harmônico.",
      "3. Faça as SETE CORDAS PARALELAS AFINADAS brilhando esticadas de ponta a ponta.",
      "4. Desenhe as cravelhas douradas de afinação e arabescos no topo da harpa.",
      "5. Adicione notas musicais douradas flutuando suavemente pelo ar celestial."
    ],
    "layers": [
      "<path d=\"M60 165 L60 55 C80 50 115 65 145 45 C145 75 140 135 125 165 Z\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"5\" stroke-linejoin=\"round\"/> <path d=\"M60 165 L60 55 C80 50 115 65 145 45 C145 75 140 135 125 165 Z\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<line x1=\"72\" y1=\"58\" x2=\"72\" y2=\"165\" stroke=\"#cbd5e1\" stroke-width=\"1.8\"/> <line x1=\"82\" y1=\"60\" x2=\"82\" y2=\"165\" stroke=\"#cbd5e1\" stroke-width=\"1.8\"/> <line x1=\"92\" y1=\"62\" x2=\"92\" y2=\"165\" stroke=\"#cbd5e1\" stroke-width=\"1.8\"/> <line x1=\"102\" y1=\"60\" x2=\"102\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"1.8\"/> <line x1=\"112\" y1=\"58\" x2=\"112\" y2=\"155\" stroke=\"#cbd5e1\" stroke-width=\"1.8\"/> <line x1=\"122\" y1=\"54\" x2=\"122\" y2=\"148\" stroke=\"#cbd5e1\" stroke-width=\"1.8\"/> <line x1=\"132\" y1=\"50\" x2=\"132\" y2=\"135\" stroke=\"#cbd5e1\" stroke-width=\"1.8\"/>",
      "<circle cx=\"72\" cy=\"58\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"82\" cy=\"60\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"92\" cy=\"62\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"102\" cy=\"60\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"112\" cy=\"58\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"122\" cy=\"54\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"132\" cy=\"50\" r=\"2.5\" fill=\"#facc15\"/>",
      "<path d=\"M145 45 C155 35 165 45 158 55\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"3\"/>",
      "<path d=\"M155 75 Q165 70 162 60\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <circle cx=\"162\" cy=\"60\" r=\"3\" fill=\"#ca8a04\"/> <path d=\"M140 100 Q152 95 150 85\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\"/> <circle cx=\"150\" cy=\"85\" r=\"3\" fill=\"#ca8a04\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "sino-de-igreja",
    "name": "Sino Dourado com Laço Vermelho",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "S I N O",
    "colors": [
      "#f59e0b",
      "#fde047",
      "#dc2626",
      "#1e293b"
    ],
    "tags": [
      "badalo",
      "laço",
      "toque",
      "natal",
      "ouro"
    ],
    "stepsDesc": [
      "1. Desenhe a silhueta cônica curvada em sino com saia larga ondulada na base.",
      "2. Trace o GRANDE LAÇO DE FITA DE CETIM VERMELHO com pontas longas no topo.",
      "3. Faça o BADALO ESFÉRICO DOURADO pendurado sob a borda inferior do sino.",
      "4. Desenhe as listras gravadas decorativas em relevo no bojo do sino.",
      "5. Adicione as ondas sonoras 'BLÉM BLÉM' e o brilho do ouro polido reluzindo."
    ],
    "layers": [
      "<path d=\"M75 75 C75 55 125 55 125 75 C125 105 145 125 145 140 L55 140 C55 125 75 105 75 75 Z\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,50 82,42 88,58 100,52 112,58 118,42\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"50\" r=\"4.5\" fill=\"#b91c1c\"/> <path d=\"M92 55 Q80 75 85 90\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M108 55 Q120 75 115 90\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"45\" ry=\"10\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"100\" cy=\"150\" r=\"8\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M70 120 Q100 128 130 120\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2.5\"/> <path d=\"M75 105 Q100 112 125 105\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\"/>",
      "<path d=\"M42 125 Q32 140 42 155\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <path d=\"M158 125 Q168 140 158 155\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/> <polygon points=\"80,85 82,80 87,82 82,85\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "vela-acesa",
    "name": "Vela Aconchegante com Chama",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "V E L A",
    "colors": [
      "#ffffff",
      "#f59e0b",
      "#ef4444",
      "#d97706"
    ],
    "tags": [
      "chama",
      "cera_derretendo",
      "pires",
      "luz",
      "quente"
    ],
    "stepsDesc": [
      "1. Desenhe o cilindro vertical de cera branca da vela com o topo ligeiramente côncavo.",
      "2. Trace o PIRES DE APOIO COM ALÇA DE DEDO segurando a vela com segurança.",
      "3. Faça a LINDA CHAMA EM GOTA ALARANJADA E AMARELA dançando no pavio.",
      "4. Desenhe as GOTAS DE CERA DERRETENDO escorrendo suavemente pela lateral.",
      "5. Adicione a aura circular de luminosidade calorosa iluminando a penumbra."
    ],
    "layers": [
      "<rect x=\"85\" y=\"85\" width=\"30\" height=\"65\" rx=\"3\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"100\" cy=\"150\" rx=\"42\" ry=\"12\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M142 150 C155 145 155 160 140 158\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"3.5\"/>",
      "<line x1=\"100\" y1=\"85\" x2=\"100\" y2=\"72\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M100 72 C92 65 92 48 100 38 C108 48 108 65 100 72 Z\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M100 72 C96 68 96 55 100 48 C104 55 104 68 100 72 Z\" fill=\"#fde047\"/>",
      "<path d=\"M92 85 C92 98 96 102 96 95\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"3\" stroke-linecap=\"round\"/> <path d=\"M108 85 C108 105 112 110 112 100\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"100\" cy=\"55\" r=\"28\" fill=\"#fef08a\" opacity=\"0.25\"/> <polygon points=\"75,45 77,40 82,42 77,45\" fill=\"#facc15\"/> <polygon points=\"125,45 127,40 132,42 127,45\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "tora-fogueira",
    "name": "Fogueira Mágica com Faíscas",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "F O G O",
    "colors": [
      "#f97316",
      "#ef4444",
      "#facc15",
      "#78350f"
    ],
    "tags": [
      "chamas",
      "lenha",
      "faíscas",
      "acampamento",
      "luz"
    ],
    "stepsDesc": [
      "1. Desenhe as três toras de madeira cruzadas em pirâmide na base da fogueira.",
      "2. Trace o CÍRCULO DE PEDRAS DE PROTEÇÃO organizadas em volta do fogo.",
      "3. Faça as LABAREDAS ALTAS EM FORMAS ORGÂNICAS dançando com pontas afiadas.",
      "4. Desenhe as camadas internas de fogo amarelo e azul na raiz da chama.",
      "5. Adicione dezenas de faíscas incandescentes flutuando para o céu noturno."
    ],
    "layers": [
      "<line x1=\"55\" y1=\"150\" x2=\"145\" y2=\"135\" stroke=\"#78350f\" stroke-width=\"12\" stroke-linecap=\"round\"/> <line x1=\"55\" y1=\"150\" x2=\"145\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linecap=\"round\"/> <line x1=\"145\" y1=\"150\" x2=\"55\" y2=\"135\" stroke=\"#78350f\" stroke-width=\"12\" stroke-linecap=\"round\"/> <line x1=\"145\" y1=\"150\" x2=\"55\" y2=\"135\" stroke=\"#1e293b\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"60\" cy=\"158\" rx=\"10\" ry=\"5\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <ellipse cx=\"80\" cy=\"162\" rx=\"11\" ry=\"6\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <ellipse cx=\"100\" cy=\"163\" rx=\"12\" ry=\"6\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <ellipse cx=\"120\" cy=\"162\" rx=\"11\" ry=\"6\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <ellipse cx=\"140\" cy=\"158\" rx=\"10\" ry=\"5\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M100 135 C75 125 70 85 90 70 C85 85 95 90 100 80 C105 90 115 85 110 70 C130 85 125 125 100 135 Z\" fill=\"#ea580c\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 135 C85 128 85 100 95 90 C92 98 98 100 100 95 C102 100 108 98 105 90 C115 100 115 128 100 135 Z\" fill=\"#facc15\"/>",
      "<circle cx=\"85\" cy=\"55\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"115\" cy=\"50\" r=\"2.5\" fill=\"#facc15\"/> <circle cx=\"95\" cy=\"40\" r=\"2\" fill=\"#ef4444\"/> <circle cx=\"105\" cy=\"35\" r=\"2\" fill=\"#f97316\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "caldeirao-bruxa",
    "name": "Caldeirão com Poção Borbulhante",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "C A L D E I R Ã O",
    "colors": [
      "#1e293b",
      "#22c55e",
      "#a855f7",
      "#86efac"
    ],
    "tags": [
      "três_pés",
      "alças",
      "bolhas_verdes",
      "bruxa",
      "fumacinha"
    ],
    "stepsDesc": [
      "1. Desenhe o bojo arredondado e bojudo de ferro fundido escuro do caldeirão.",
      "2. Trace os TRÊS PÉS CURTOS ROBUSTOS sustentando o caldeirão sobre o chão.",
      "3. Faça as DUAS ALÇAS LATERAIS EM ARGOLA e a borda alargada com relevo.",
      "4. Desenhe o LÍQUIDO MÁGICO VERDE ESMERALDA BORBULHANDO e transbordando.",
      "5. Adicione nuvens de vapor misterioso subindo com estrelas e bolhas de sabão místicas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"52\" ry=\"42\" fill=\"#1e293b\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"85\" rx=\"46\" ry=\"12\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"68\" y1=\"145\" x2=\"60\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"6\" stroke-linecap=\"round\"/> <line x1=\"132\" y1=\"145\" x2=\"140\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"6\" stroke-linecap=\"round\"/> <line x1=\"100\" y1=\"152\" x2=\"100\" y2=\"168\" stroke=\"#1e293b\" stroke-width=\"6\" stroke-linecap=\"round\"/>",
      "<circle cx=\"48\" cy=\"95\" r=\"6\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <circle cx=\"152\" cy=\"95\" r=\"6\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"40\" ry=\"9\" fill=\"#22c55e\"/> <circle cx=\"85\" cy=\"80\" r=\"6\" fill=\"#86efac\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"105\" cy=\"78\" r=\"8\" fill=\"#86efac\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"120\" cy=\"82\" r=\"5\" fill=\"#86efac\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"95\" cy=\"58\" r=\"5\" fill=\"#a855f7\" opacity=\"0.8\"/> <circle cx=\"112\" cy=\"48\" r=\"4\" fill=\"#a855f7\" opacity=\"0.8\"/> <circle cx=\"82\" cy=\"45\" r=\"3.5\" fill=\"#a855f7\" opacity=\"0.8\"/> <polygon points=\"100,32 102,28 106,30 102,32\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "chave-coracao",
    "name": "Chave com Cabeça de Coração",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "A M O R",
    "colors": [
      "#ec4899",
      "#facc15",
      "#f43f5e",
      "#ffffff"
    ],
    "tags": [
      "coração",
      "dentes",
      "segredo",
      "diário",
      "abrir"
    ],
    "stepsDesc": [
      "1. Desenhe a cabeça da chave em formato de coração romântico vazado com detalhes.",
      "2. Trace a HASTE CILÍNDRICA LONGA com anéis decorativos torneados.",
      "3. Faça o PALHETÃO COM DENTES EM FORMATO DE CASTELO OU COROA na ponta.",
      "4. Desenhe as pérolas e arabescos dourados adornando a cabeça de coração.",
      "5. Adicione estrelinhas de magia e a fechadura mística luminosa ao lado."
    ],
    "layers": [
      "<path d=\"M100 48 C85 30 65 42 65 60 C65 80 100 95 100 95 C100 95 135 80 135 60 C135 42 115 30 100 48 Z\" fill=\"#f43f5e\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 56 C90 44 76 52 76 64 C76 76 100 88 100 88 C100 88 124 76 124 64 C124 52 110 44 100 56 Z\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"165\" stroke=\"#facc15\" stroke-width=\"7\" stroke-linecap=\"round\"/> <line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"115\" rx=\"8\" ry=\"3\" fill=\"#ca8a04\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>",
      "<rect x=\"104\" y=\"145\" width=\"16\" height=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <rect x=\"104\" y=\"155\" width=\"12\" height=\"6\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<polygon points=\"60,35 62,30 67,32 62,35\" fill=\"#facc15\"/> <polygon points=\"140,35 142,30 147,32 142,35\" fill=\"#facc15\"/> <circle cx=\"100\" cy=\"172\" r=\"3\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "amuleto-da-sorte",
    "name": "Trevo de Quatro Folhas Mágico",
    "category": "fantasia",
    "sub": "itens_magicos",
    "diff": "facil",
    "word": "T R E V O",
    "colors": [
      "#16a34a",
      "#22c55e",
      "#fef08a",
      "#15803d"
    ],
    "tags": [
      "quatro_folhas",
      "corações",
      "sorte",
      "verde",
      "haste"
    ],
    "stepsDesc": [
      "1. Desenhe as quatro folhas arredondadas em formato de coração unidas pelo centro.",
      "2. Trace a LONGA HASTE CURVADA EM 'S' graciosa descendo da junção.",
      "3. Faça as NERVURAS CLARAS EM 'V' no centro de cada folhinha verdejante.",
      "4. Desenhe o contorno duplo brilhante que destaca a raridade da quarta folha da sorte.",
      "5. Adicione gotículas de orvalho brilhando como diamantes nas folhas de trevo."
    ],
    "layers": [
      "<path d=\"M100 95 C85 80 85 55 100 65 C115 55 115 80 100 95 Z\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M100 95 C85 110 85 135 100 125 C115 135 115 110 100 95 Z\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M95 95 C80 80 55 80 65 95 C55 110 80 110 95 95 Z\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/> <path d=\"M105 95 C120 80 145 80 135 95 C145 110 120 110 105 95 Z\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 95 C98 125 110 145 105 170\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"70\" stroke=\"#86efac\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"120\" stroke=\"#86efac\" stroke-width=\"2\"/> <line x1=\"95\" y1=\"95\" x2=\"70\" y2=\"95\" stroke=\"#86efac\" stroke-width=\"2\"/> <line x1=\"105\" y1=\"95\" x2=\"130\" y2=\"95\" stroke=\"#86efac\" stroke-width=\"2\"/>",
      "<circle cx=\"95\" cy=\"78\" r=\"2.5\" fill=\"#ffffff\" opacity=\"0.8\"/> <circle cx=\"118\" cy=\"90\" r=\"2.5\" fill=\"#ffffff\" opacity=\"0.8\"/>",
      "<polygon points=\"50,60 52,55 57,57 52,60\" fill=\"#facc15\"/> <polygon points=\"150,60 152,55 157,57 152,60\" fill=\"#facc15\"/> <polygon points=\"145,130 147,125 152,127 147,130\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "concha-perola",
    "name": "Concha Aberta com Pérola Real",
    "category": "fantasia",
    "sub": "marinha",
    "diff": "facil",
    "word": "P É R O L A",
    "colors": [
      "#fbcfe8",
      "#ffffff",
      "#facc15",
      "#0284c7"
    ],
    "tags": [
      "ondulações",
      "brilho",
      "fundo_mar",
      "preciosa",
      "ostra"
    ],
    "stepsDesc": [
      "1. Desenhe as duas valvas em leque ondulado da concha marinha entreaberta.",
      "2. Trace as CANELURAS RADIAIS EM RELEVO esculpidas na casca de madrepérola.",
      "3. Faça a GRANDE PÉROLA ESFÉRICA PERFEITA reluzindo no centro acolchoado.",
      "4. Desenhe o brilho iridescente perolado refletindo tons de rosa e azul-celeste.",
      "5. Adicione bolhas de ar subindo e estrelinhas submarinas ao redor da ostra."
    ],
    "layers": [
      "<path d=\"M50 135 C50 160 150 160 150 135 C150 120 50 120 50 135 Z\" fill=\"#fbcfe8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M50 135 C50 75 150 75 150 135 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<line x1=\"100\" y1=\"135\" x2=\"100\" y2=\"78\" stroke=\"#db2777\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"135\" x2=\"75\" y2=\"88\" stroke=\"#db2777\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"135\" x2=\"125\" y2=\"88\" stroke=\"#db2777\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"135\" x2=\"58\" y2=\"108\" stroke=\"#db2777\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"135\" x2=\"142\" y2=\"108\" stroke=\"#db2777\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"130\" r=\"14\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <path d=\"M95 125 A8 8 0 0 1 105 125\" fill=\"none\" stroke=\"#bae6fd\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"65\" cy=\"95\" r=\"3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/> <circle cx=\"135\" cy=\"90\" r=\"4\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/> <polygon points=\"100,105 102,100 107,102 102,105\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "sereia-pequena",
    "name": "Sereiazinha com Cauda Brilhante",
    "category": "fantasia",
    "sub": "criaturas",
    "diff": "medio",
    "word": "S E R E I A",
    "colors": [
      "#06b6d4",
      "#ec4899",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "cauda_escamas",
      "cabelo_longo",
      "estrela_mar",
      "fundo_mar"
    ],
    "stepsDesc": [
      "1. Desenhe o corpinho gracioso e o rosto amável da pequena sereia chibi.",
      "2. Trace a LONGA CAUDA CURVADA DE PEIXE turquesa brilhante terminando em nadadeira dupla.",
      "3. Faça os LONGOS CABELOS ONDULADOS FLUTUANDO na água com estrela-do-mar na cabeça.",
      "4. Desenhe o top de conchinhas e o padrão de escamas reluzentes na cauda.",
      "5. Adicione cardumes de peixinhos amigos nadando em volta e bolhas de água."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"65\" r=\"16\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"2.2\"/> <path d=\"M92 81 L108 81 L105 105 L95 105 Z\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<path d=\"M100 105 C115 115 125 130 115 150 C110 160 95 165 90 175\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"12\" stroke-linecap=\"round\"/> <polygon points=\"90,175 75,185 85,168\" fill=\"#0891b2\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <polygon points=\"90,175 105,185 95,168\" fill=\"#0891b2\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<path d=\"M85 62 C75 75 70 105 82 120\" fill=\"none\" stroke=\"#ec4899\" stroke-width=\"5\" stroke-linecap=\"round\"/> <path d=\"M115 62 C125 75 130 105 118 120\" fill=\"none\" stroke=\"#ec4899\" stroke-width=\"5\" stroke-linecap=\"round\"/> <polygon points=\"112,55 118,52 116,58 120,62 114,62 112,68 110,62 104,62 108,58 106,52\" fill=\"#facc15\"/>",
      "<circle cx=\"95\" cy=\"64\" r=\"2.5\" fill=\"#1e293b\"/> <circle cx=\"105\" cy=\"64\" r=\"2.5\" fill=\"#1e293b\"/> <path d=\"M98 70 Q100 73 102 70\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.5\"/> <ellipse cx=\"90\" cy=\"68\" rx=\"3\" ry=\"1.5\" fill=\"#f43f5e\" opacity=\"0.6\"/> <ellipse cx=\"110\" cy=\"68\" rx=\"3\" ry=\"1.5\" fill=\"#f43f5e\" opacity=\"0.6\"/>",
      "<circle cx=\"65\" cy=\"80\" r=\"3\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.2\"/> <circle cx=\"135\" cy=\"75\" r=\"4\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "cometa-viajante",
    "name": "Cometa com Poeira Estelar",
    "category": "fantasia",
    "sub": "celeste",
    "diff": "facil",
    "word": "C O M E T A",
    "colors": [
      "#38bdf8",
      "#818cf8",
      "#facc15",
      "#ffffff"
    ],
    "tags": [
      "núcleo_gelo",
      "cauda_longa",
      "velocidade",
      "espaço",
      "brilho"
    ],
    "stepsDesc": [
      "1. Desenhe o núcleo esférico de gelo cósmico brilhante cruzando o espaço.",
      "2. Trace a GIGANTESCA CAUDA DE FOGO AZUL E LILÁS expandindo em cone fluido.",
      "3. Faça as LINHAS INTERNAS DE VELOCIDADE cortando pelo centro da cauda estelar.",
      "4. Desenhe as crateras e fraturas luminosas no núcleo do cometa.",
      "5. Espalhe dezenas de estrelas cadentes menores e partículas de poeira cósmica."
    ],
    "layers": [
      "<circle cx=\"145\" cy=\"55\" r=\"22\" fill=\"#38bdf8\" stroke=\"#1e293b\" stroke-width=\"2.8\"/>",
      "<path d=\"M130 42 C100 55 55 95 25 155 L45 168 C80 120 125 75 158 68 Z\" fill=\"#818cf8\" opacity=\"0.75\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<line x1=\"140\" y1=\"62\" x2=\"40\" y2=\"155\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/> <line x1=\"148\" y1=\"50\" x2=\"65\" y2=\"135\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/> <line x1=\"132\" y1=\"72\" x2=\"55\" y2=\"165\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"140\" cy=\"50\" r=\"3.5\" fill=\"#0284c7\"/> <circle cx=\"152\" cy=\"60\" r=\"3\" fill=\"#0284c7\"/> <circle cx=\"148\" cy=\"45\" r=\"2\" fill=\"#0284c7\"/>",
      "<polygon points=\"25,120 27,115 32,117 27,120\" fill=\"#facc15\"/> <polygon points=\"60,95 62,90 67,92 62,95\" fill=\"#facc15\"/> <circle cx=\"85\" cy=\"75\" r=\"2\" fill=\"#ffffff\"/> <circle cx=\"50\" cy=\"140\" r=\"2\" fill=\"#ffffff\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  },
  {
    "id": "mascote-hikari",
    "name": "Hikari Sensei (Ensino Soberano)",
    "category": "fantasia",
    "sub": "mascotes",
    "diff": "medio",
    "word": "H I K A R I",
    "colors": [
      "#ec4899",
      "#f43f5e",
      "#fde047",
      "#ffffff"
    ],
    "tags": [
      "laço",
      "coroa",
      "livro",
      "mascote_oficial",
      "soberano"
    ],
    "stepsDesc": [
      "1. Desenhe a cabecinha redonda e fofa da mascote oficial Hikari com coroa soberana.",
      "2. Trace o LINDO LAÇO DE FITA ROSA com a insígnia dourada no peito.",
      "3. Faça o LIVRO ABERTO DO SABER nas mãozinhas ensinando com alegria.",
      "4. Desenhe os olhos grandes brilhantes de anime cheios de sabedoria e ternura.",
      "5. Adicione estrelinhas mágicas do Ensino Soberano cintilando ao redor da Hikari."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"78\" r=\"32\" fill=\"#fed7aa\" stroke=\"#1e293b\" stroke-width=\"2.8\"/> <ellipse cx=\"100\" cy=\"138\" rx=\"28\" ry=\"26\" fill=\"#ec4899\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,50 90,32 100,42 110,32 115,50\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"2\"/> <circle cx=\"100\" cy=\"38\" r=\"2.5\" fill=\"#dc2626\"/>",
      "<polygon points=\"100,110 88,102 92,118 100,114 108,118 112,102\" fill=\"#f43f5e\" stroke=\"#1e293b\" stroke-width=\"1.8\"/> <circle cx=\"100\" cy=\"110\" r=\"4\" fill=\"#facc15\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>",
      "<polygon points=\"82,130 100,135 118,130 118,152 100,158 82,152\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/> <line x1=\"100\" y1=\"135\" x2=\"100\" y2=\"158\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>",
      "<circle cx=\"88\" cy=\"76\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"87\" cy=\"74\" r=\"1.8\" fill=\"#ffffff\"/> <circle cx=\"112\" cy=\"76\" r=\"4.5\" fill=\"#1e293b\"/> <circle cx=\"111\" cy=\"74\" r=\"1.8\" fill=\"#ffffff\"/> <path d=\"M96 85 Q100 89 104 85\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/> <ellipse cx=\"78\" cy=\"84\" rx=\"4\" ry=\"2\" fill=\"#f43f5e\" opacity=\"0.6\"/> <ellipse cx=\"122\" cy=\"84\" rx=\"4\" ry=\"2\" fill=\"#f43f5e\" opacity=\"0.6\"/> <polygon points=\"140,55 142,50 147,52 142,55\" fill=\"#facc15\"/> <polygon points=\"60,55 62,50 67,52 62,55\" fill=\"#facc15\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n      <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n    </g>"
  }
];

  function getAll() {
    return ITEMS;
  }

  function getById(id) {
    return ITEMS.find(item => item.id === id) || ITEMS[0];
  }

  function getByCategory(category) {
    if (!category || category === "all") return ITEMS;
    return ITEMS.filter(item => item.category === category);
  }

  function search(query, category) {
    let list = getByCategory(category);
    if (!query || !query.trim()) return list;
    const q = query.trim().toLowerCase();
    return list.filter(item => {
      return item.name.toLowerCase().includes(q) ||
        item.word.toLowerCase().replace(/\s+/g, "").includes(q) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q)));
    });
  }

  function getRandom(category) {
    const list = getByCategory(category);
    if (!list || list.length === 0) return ITEMS[0];
    const idx = Math.floor(Math.random() * list.length);
    return list[idx];
  }

  function getCategories() {
    return CATEGORIES;
  }

  return {
    CATEGORIES: CATEGORIES,
    ITEMS: ITEMS,
    getAll: getAll,
    getById: getById,
    getByCategory: getByCategory,
    search: search,
    getRandom: getRandom,
    getCategories: getCategories,
    TOTAL_COUNT: 355
  };
});
