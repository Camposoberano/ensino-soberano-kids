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
      "1. Desenhe a cabeça redonda e o corpinho sentado do cãozinho.",
      "2. Acrescente as orelhinhas compridas e caídas nas laterais.",
      "3. Faça as quatro patinhas com coxins e a cauda feliz levantada.",
      "4. Desenhe os olhos expressivos, a trufa preta do focinho e a linguinha de fora.",
      "5. Adicione a coleira com medalha redonda e os detalhes finais do pelo."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"78\" r=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"34\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M72 65 C52 65 42 100 58 112 C70 118 78 95 76 75 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M128 65 C148 65 158 100 142 112 C130 118 122 95 124 75 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110 Q145 106 138 124\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"74\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"84\" cy=\"72\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"74\" r=\"6\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"112\" cy=\"72\" r=\"3\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"85\" rx=\"7\" ry=\"5\" fill=\"#1e293b\"/>\n          <path d=\"M96 92 Q100 95 104 92\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M98 94 Q100 102 104 94 Z\" fill=\"#ef4444\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>",
      "<path d=\"M76 112 Q100 118 124 112\" fill=\"none\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"122\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <ellipse cx=\"100\" cy=\"142\" rx=\"15\" ry=\"18\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo sentado e dócil do gatinho.",
      "2. Adicione as orelhas triangulares pontudas no alto da cabeça.",
      "3. Faça as patinhas dianteiras reunidas e a cauda curvada e sinuosa.",
      "4. Desenhe os olhos grandes com brilho anime, o narizinho triangular e boca de gatinho.",
      "5. Finalize com os bigodes compridos nas bochechas e detalhes das orelhas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"78\" rx=\"34\" ry=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"136\" rx=\"32\" ry=\"34\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M72 60 L62 32 L88 48 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <path d=\"M128 60 L138 32 L112 48 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <path d=\"M70 54 L66 38 L82 48 Z\" fill=\"none\" stroke-width=\"1.8\"/>\n          <path d=\"M130 54 L134 38 L118 48 Z\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"88\" cy=\"166\" rx=\"9\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"112\" cy=\"166\" rx=\"9\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M128 145 C155 140 160 105 145 95 C138 90 135 100 142 105 C150 112 142 135 125 148\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"76\" rx=\"8\" ry=\"11\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"83\" cy=\"72\" r=\"3.5\" fill=\"#1e293b\"/>\n          <circle cx=\"87\" cy=\"78\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"76\" rx=\"8\" ry=\"11\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"113\" cy=\"72\" r=\"3.5\" fill=\"#1e293b\"/>\n          <circle cx=\"117\" cy=\"78\" r=\"1.5\" fill=\"#1e293b\"/>\n          <polygon points=\"97,85 103,85 100,90\" fill=\"#ec4899\"/>\n          <path d=\"M94 92 Q100 96 100 92 Q100 96 106 92\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"72\" y1=\"84\" x2=\"45\" y2=\"80\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"72\" y1=\"90\" x2=\"42\" y2=\"92\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"128\" y1=\"84\" x2=\"155\" y2=\"80\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"128\" y1=\"90\" x2=\"158\" y2=\"92\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <ellipse cx=\"100\" cy=\"135\" rx=\"16\" ry=\"18\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o círculo da cabeça e a estrutura do corpo do leão.",
      "2. Trace a magnífica juba real ao redor da cabeça com pontas e curvas.",
      "3. Faça as orelhas redondas no topo e as patinhas musculosas.",
      "4. Desenhe os olhos destemidos, nariz triangular largo e boca imponente.",
      "5. Adicione a cauda longa com tufo de pelos na ponta e os bigodes reais."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"38\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M70 42 C50 60 50 95 62 112 C72 126 90 128 100 128 C110 128 128 126 138 112 C150 95 150 60 130 42 C115 32 85 32 70 42 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M62 48 Q45 68 52 88 Q40 108 62 120 Q80 135 100 135 Q120 135 138 120 Q160 108 148 88 Q155 68 138 48 Q120 30 100 30 Q80 30 62 48 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"55\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"55\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"80\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"120\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"88\" cy=\"76\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"87\" cy=\"74\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"112\" cy=\"76\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"111\" cy=\"74\" r=\"2.5\" fill=\"#1e293b\"/>\n          <polygon points=\"95,86 105,86 100,94\" fill=\"#1e293b\"/>\n          <path d=\"M94 97 Q100 102 106 97\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<line x1=\"72\" y1=\"92\" x2=\"52\" y2=\"88\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"72\" y1=\"98\" x2=\"50\" y2=\"99\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"128\" y1=\"92\" x2=\"148\" y2=\"88\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"128\" y1=\"98\" x2=\"150\" y2=\"99\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M135 145 Q165 135 160 115\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <path d=\"M160 115 Q168 105 160 98 Q152 105 160 115 Z\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo felino forte e ágil.",
      "2. Trace as orelhas redondas com interior escuro e as bochechas tufadas.",
      "3. Faça as 4 patas musculosas com garras recolhidas e a cauda longa.",
      "4. Desenhe os olhos selvagens penetrantes, o focinho e as narinas.",
      "5. Adicione as listras pretas triangulares e bigodes firmes."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"78\" r=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"38\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"72\" cy=\"54\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"72\" cy=\"54\" r=\"6\" fill=\"#1e293b\"/>\n          <circle cx=\"128\" cy=\"54\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"128\" cy=\"54\" r=\"6\" fill=\"#1e293b\"/>\n          <path d=\"M68 85 Q60 92 68 100 M132 85 Q140 92 132 100\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"80\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"120\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M136 142 Q168 135 160 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"74\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"73\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"74\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"73\" r=\"2.5\" fill=\"#1e293b\"/>\n          <polygon points=\"96,86 104,86 100,92\" fill=\"#1e293b\"/>\n          <path d=\"M95 95 Q100 99 105 95\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,52 97,62 103,62\" fill=\"#1e293b\"/>\n            <polygon points=\"68,76 80,78 72,82\" fill=\"#1e293b\"/>\n            <polygon points=\"132,76 120,78 128,82\" fill=\"#1e293b\"/>\n            <polygon points=\"70,130 84,133 72,138\" fill=\"#1e293b\"/>\n            <polygon points=\"130,130 116,133 128,138\" fill=\"#1e293b\"/>\n            <line x1=\"72\" y1=\"92\" x2=\"52\" y2=\"90\" stroke-width=\"1.8\"/>\n            <line x1=\"128\" y1=\"92\" x2=\"148\" y2=\"90\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo robusto do elefante.",
      "2. Trace as orelhas gigantes em formato de leque nas laterais.",
      "3. Desenhe a tromba curvada para cima em arco alegre e as 4 patas fortes.",
      "4. Faça as presas curvas de marfim, os olhos meigos e as unhas das patas.",
      "5. Adicione as rugas da tromba, a cauda com pelos e contornos firmes."
    ],
    "layers": [
      "<circle cx=\"105\" cy=\"80\" r=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"120\" cy=\"125\" rx=\"42\" ry=\"34\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 65 C60 45 42 75 48 105 C54 125 75 125 88 105 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M130 65 C145 50 160 70 155 95 C150 110 138 112 130 100\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M96 92 C88 105 75 118 62 118 C52 118 48 106 56 98 C65 92 78 88 88 88\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <rect x=\"88\" y=\"140\" width=\"16\" height=\"36\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"112\" y=\"142\" width=\"16\" height=\"34\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"140\" y=\"138\" width=\"16\" height=\"38\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M84 98 Q92 105 90 115 Q82 110 82 98 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"98\" cy=\"74\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"97\" cy=\"73\" r=\"2\" fill=\"#1e293b\"/>\n          <ellipse cx=\"96\" cy=\"172\" rx=\"3\" ry=\"2\" fill=\"none\" stroke-width=\"1.8\"/>\n          <ellipse cx=\"120\" cy=\"172\" rx=\"3\" ry=\"2\" fill=\"none\" stroke-width=\"1.8\"/>\n          <ellipse cx=\"148\" cy=\"172\" rx=\"3\" ry=\"2\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<line x1=\"68\" y1=\"105\" x2=\"74\" y2=\"108\" stroke-width=\"1.8\"/>\n          <line x1=\"72\" y1=\"98\" x2=\"78\" y2=\"102\" stroke-width=\"1.8\"/>\n          <line x1=\"78\" y1=\"92\" x2=\"84\" y2=\"95\" stroke-width=\"1.8\"/>\n          <path d=\"M162 115 Q175 125 172 145\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M170 145 Q174 152 176 148\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "5. Espalhe as manchinhas características da girafa pelo pescoço e pelo corpo."
    ],
    "layers": [
      "<ellipse cx=\"85\" cy=\"45\" rx=\"18\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"125\" cy=\"135\" rx=\"32\" ry=\"22\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M78 54 L98 125 M94 48 L118 122\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"80\" y1=\"35\" x2=\"78\" y2=\"24\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <circle cx=\"78\" cy=\"22\" r=\"3\" fill=\"#1e293b\"/>\n          <line x1=\"88\" y1=\"34\" x2=\"90\" y2=\"24\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <circle cx=\"90\" cy=\"22\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M68 42 Q60 40 68 35 Q74 38 72 44 Z M96 40 Q105 38 100 34 Q92 35 94 42 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"152\" x2=\"105\" y2=\"186\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"116\" y1=\"154\" x2=\"116\" y2=\"186\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"135\" y1=\"152\" x2=\"135\" y2=\"186\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"146\" y1=\"150\" x2=\"146\" y2=\"186\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"80\" cy=\"42\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"79\" cy=\"41\" r=\"2\" fill=\"#1e293b\"/>\n          <ellipse cx=\"73\" cy=\"50\" rx=\"8\" ry=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"70\" cy=\"50\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M96 52 L98 120\" stroke-width=\"3\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/>",
      "<rect x=\"85\" y=\"65\" width=\"8\" height=\"8\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"92\" y=\"82\" width=\"10\" height=\"9\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"88\" y=\"100\" width=\"11\" height=\"10\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"115\" y=\"128\" width=\"10\" height=\"9\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"132\" y=\"132\" width=\"11\" height=\"10\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M152 130 Q165 145 160 162\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <ellipse cx=\"160\" cy=\"164\" rx=\"3\" ry=\"5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça redonda e o corpo flexível do macaquinho.",
      "2. Adicione as orelhas redondas bem abertas nas laterais da cabeça.",
      "3. Faça a cauda longa espiralada preênsil e as patinhas compridas.",
      "4. Desenhe a máscara do rosto em coração, olhos curiosos e boca alegre.",
      "5. Adicione uma banana saborosa na mão e detalhes do pelo."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"78\" r=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"136\" rx=\"30\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"78\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"65\" cy=\"78\" r=\"7\" fill=\"#1e293b\"/>\n          <circle cx=\"135\" cy=\"78\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"135\" cy=\"78\" r=\"7\" fill=\"#1e293b\"/>",
      "<path d=\"M125 145 C155 145 175 115 160 90 C150 75 130 85 142 100 C150 110 135 125 120 135\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <ellipse cx=\"85\" cy=\"166\" rx=\"10\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"166\" rx=\"10\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M80 65 Q90 60 100 68 Q110 60 120 65 Q125 80 115 92 Q100 100 85 92 Q75 80 80 65 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"88\" cy=\"75\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"87\" cy=\"74\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"112\" cy=\"75\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"111\" cy=\"74\" r=\"2\" fill=\"#1e293b\"/>\n          <path d=\"M94 88 Q100 94 106 88\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"16\" ry=\"18\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça nobre alongada e o pescoço arqueado e forte.",
      "2. Trace o corpo esguio e as 4 pernas ágeis com cascos firmes.",
      "3. Faça as orelhas pontudas atentas e a crina comprida no pescoço.",
      "4. Desenhe os olhos doces e vivos, narinas abertas e o focinho.",
      "5. Adicione as listras verticais da zebra e contornos finos."
    ],
    "layers": [
      "<ellipse cx=\"82\" cy=\"65\" rx=\"18\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-30 82 65)\"/>\n          <path d=\"M88 80 Q105 110 125 125\" fill=\"none\" stroke-width=\"3\"/>\n          <ellipse cx=\"130\" cy=\"138\" rx=\"36\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"110\" y1=\"155\" x2=\"110\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"122\" y1=\"158\" x2=\"122\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"145\" y1=\"156\" x2=\"145\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"158\" y1=\"154\" x2=\"158\" y2=\"186\" stroke-width=\"2.5\"/>\n          <rect x=\"107\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>\n          <rect x=\"119\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>\n          <rect x=\"142\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>\n          <rect x=\"155\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>",
      "<polygon points=\"90,45 92,30 98,42\" fill=\"none\" stroke-width=\"2.2\"/>\n          <polygon points=\"98,48 102,32 106,45\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M96 46 Q115 70 120 115\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<circle cx=\"82\" cy=\"58\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"81\" cy=\"57\" r=\"2\" fill=\"#1e293b\"/>\n          <ellipse cx=\"68\" cy=\"76\" rx=\"4\" ry=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M95 72 L105 78 M98 88 L110 92 M102 102 L116 106 M122 130 L124 145 M135 128 L137 145 M148 132 L150 145\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça oval e o corpinho arredondado do coelho.",
      "2. Trace as orelhas longas e verticais com a parte interna rosada.",
      "3. Faça as patinhas dianteiras apoiadas, patas traseiras e o rabo pompom.",
      "4. Desenhe os olhos grandes com brilho, focinho delicado e dois dentinhos.",
      "5. Finalize com bigodinhos finos e uma cenourinha na pata."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"90\" r=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"34\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M82 66 C75 35 70 15 84 15 C96 15 94 40 92 64 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M118 66 C125 35 130 15 116 15 C104 15 106 40 108 64 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M82 58 C78 35 76 22 84 22 C92 22 90 40 88 56 Z\" fill=\"none\" stroke-width=\"1.8\"/>\n          <path d=\"M118 58 C122 35 124 22 116 22 C108 22 110 40 112 56 Z\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"90\" cy=\"145\" rx=\"7\" ry=\"14\" fill=\"none\" stroke-width=\"2\"/>\n          <ellipse cx=\"110\" cy=\"145\" rx=\"7\" ry=\"14\" fill=\"none\" stroke-width=\"2\"/>\n          <ellipse cx=\"70\" cy=\"165\" rx=\"14\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"130\" cy=\"165\" rx=\"14\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"138\" cy=\"142\" r=\"9\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"86\" cy=\"88\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"87\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"88\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"87\" r=\"2.5\" fill=\"#1e293b\"/>\n          <polygon points=\"98,96 102,96 100,99\" fill=\"#f472b6\"/>\n          <path d=\"M96 101 Q100 103 104 101\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"98\" y=\"103\" width=\"4\" height=\"5\" rx=\"1\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<line x1=\"75\" y1=\"96\" x2=\"55\" y2=\"93\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"75\" y1=\"100\" x2=\"52\" y2=\"103\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"125\" y1=\"96\" x2=\"145\" y2=\"93\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"125\" y1=\"100\" x2=\"148\" y2=\"103\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "<circle cx=\"100\" cy=\"78\" r=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"142\" rx=\"42\" ry=\"36\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"68\" cy=\"52\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"68\" cy=\"52\" r=\"6\" fill=\"#1e293b\"/>\n          <circle cx=\"132\" cy=\"52\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"132\" cy=\"52\" r=\"6\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"70\" cy=\"130\" rx=\"14\" ry=\"22\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"130\" cy=\"130\" rx=\"14\" ry=\"22\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"78\" cy=\"170\" rx=\"15\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"122\" cy=\"170\" rx=\"15\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"85\" cy=\"72\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"84\" cy=\"71\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"72\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"114\" cy=\"71\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"85\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2\"/>\n          <ellipse cx=\"100\" cy=\"82\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 90 Q100 94 104 90\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"145\" rx=\"22\" ry=\"20\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "4. Trace as famosas manchas ovais pretas ao redor dos olhos e o focinho.",
      "5. Adicione um ramo de bambu verde e os detalhes da barriguinha."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"142\" rx=\"38\" ry=\"34\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"68\" cy=\"54\" r=\"14\" fill=\"#1e293b\"/>\n          <circle cx=\"132\" cy=\"54\" r=\"14\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"70\" cy=\"125\" rx=\"12\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(20 70 125)\"/>\n          <ellipse cx=\"130\" cy=\"125\" rx=\"12\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-20 130 125)\"/>\n          <ellipse cx=\"80\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"#1e293b\"/>\n          <ellipse cx=\"120\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"84\" cy=\"78\" rx=\"10\" ry=\"8\" fill=\"#1e293b\" transform=\"rotate(-15 84 78)\"/>\n          <circle cx=\"83\" cy=\"77\" r=\"3\" fill=\"#ffffff\"/>\n          <ellipse cx=\"116\" cy=\"78\" rx=\"10\" ry=\"8\" fill=\"#1e293b\" transform=\"rotate(15 116 78)\"/>\n          <circle cx=\"117\" cy=\"77\" r=\"3\" fill=\"#ffffff\"/>\n          <ellipse cx=\"100\" cy=\"88\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 94 Q100 98 104 94\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M50 160 L60 80 L66 80 L56 160 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M60 110 Q70 105 75 112 M62 130 Q72 125 78 132\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça com formato triangular e o corpo ágil.",
      "2. Trace as orelhas pontudas em alerta e as bochechas felpudas.",
      "3. Faça as 4 patas esguias e a grande cauda felpuda com ponta branca.",
      "4. Desenhe os olhos vivos com olhar esperto, focinho fino e trufa escura.",
      "5. Adicione as marcas de pelagem no peito e detalhes da cauda."
    ],
    "layers": [
      "<polygon points=\"100,50 68,82 132,82\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"30\" ry=\"34\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"76,55 60,20 86,45\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <polygon points=\"124,55 140,20 114,45\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <path d=\"M68 82 Q55 90 68 100 M132 82 Q145 90 132 100\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"10\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"10\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M125 145 C150 145 175 125 170 95 C160 85 145 105 135 125\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"85\" cy=\"74\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"84\" cy=\"73\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"74\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"114\" cy=\"73\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"88\" r=\"3.5\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M152 102 Q158 98 168 95\" stroke-width=\"2\" stroke-dasharray=\"2 2\"/>\n          <path d=\"M85 105 Q100 120 115 105\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça com formato triangular e o corpo ágil.",
      "2. Trace as orelhas pontudas em alerta e as bochechas felpudas.",
      "3. Faça as 4 patas esguias e a grande cauda felpuda com ponta branca.",
      "4. Desenhe os olhos vivos com olhar esperto, focinho fino e trufa escura.",
      "5. Adicione as marcas de pelagem no peito e detalhes da cauda."
    ],
    "layers": [
      "<polygon points=\"100,50 68,82 132,82\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"30\" ry=\"34\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"76,55 60,20 86,45\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <polygon points=\"124,55 140,20 114,45\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <path d=\"M68 82 Q55 90 68 100 M132 82 Q145 90 132 100\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"10\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"10\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M125 145 C150 145 175 125 170 95 C160 85 145 105 135 125\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"85\" cy=\"74\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"84\" cy=\"73\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"74\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"114\" cy=\"73\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"88\" r=\"3.5\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M152 102 Q158 98 168 95\" stroke-width=\"2\" stroke-dasharray=\"2 2\"/>\n          <path d=\"M85 105 Q100 120 115 105\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça delicada e o corpo esbelto do cervo da floresta.",
      "2. Trace a majestosa galhadura de chifres ramificados no topo da cabeça.",
      "3. Faça as orelhas atentas e as 4 pernas longas e graciosas.",
      "4. Desenhe os olhos pretos dóceis, focinho escuro e pescoço nobre.",
      "5. Adicione as manchinhas brancas no dorso e o rabinho empinado."
    ],
    "layers": [
      "<ellipse cx=\"80\" cy=\"70\" rx=\"15\" ry=\"18\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-15 80 70)\"/>\n          <ellipse cx=\"125\" cy=\"135\" rx=\"34\" ry=\"22\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M78 55 L70 30 M70 30 L62 24 M70 30 L74 18 M73 38 L62 36\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <path d=\"M86 52 L94 28 M94 28 L102 22 M94 28 L92 16 M91 36 L102 34\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 62 Q55 58 60 50 Q72 56 74 62\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M92 60 Q105 56 100 48 Q88 54 86 60\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"150\" x2=\"105\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"152\" x2=\"115\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"135\" y1=\"150\" x2=\"135\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"145\" y1=\"148\" x2=\"145\" y2=\"186\" stroke-width=\"2.5\"/>",
      "<circle cx=\"78\" cy=\"68\" r=\"4.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"70\" cy=\"78\" rx=\"4\" ry=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M85 82 Q105 110 110 130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"120\" cy=\"128\" r=\"2\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n          <circle cx=\"130\" cy=\"125\" r=\"2\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n          <circle cx=\"140\" cy=\"130\" r=\"2\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n          <path d=\"M155 130 Q165 125 162 135 Z\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpinho sentado do esquilo.",
      "2. Trace a ENORME cauda felpuda em formato de caracol subindo nas costas.",
      "3. Faça as patinhas dianteiras segurando uma deliciosa noz ou avelã.",
      "4. Desenhe as orelhas com penachos, olhos vivos e bochechas cheias.",
      "5. Adicione os dentinhos incisivos e os detalhes dos pelos da cauda."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"80\" r=\"22\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"95\" cy=\"135\" rx=\"26\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M115 145 C155 150 180 120 170 80 C160 50 130 55 135 75 C140 90 155 95 150 115 C145 135 125 135 110 130\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"75\" cy=\"120\" r=\"9\" fill=\"none\" stroke-width=\"2.2\"/>\n          <ellipse cx=\"88\" cy=\"165\" rx=\"14\" ry=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"80\" cy=\"78\" r=\"4.5\" fill=\"#1e293b\"/>\n          <circle cx=\"70\" cy=\"84\" r=\"2.5\" fill=\"#1e293b\"/>\n          <polygon points=\"78,60 76,46 84,54\" fill=\"none\" stroke-width=\"2\"/>\n          <polygon points=\"88,60 90,46 94,54\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M72 118 L78 118 M75 112 L75 125\" stroke-width=\"1.8\"/>\n          <path d=\"M145 70 Q160 65 155 85\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpinho oval e o focinho fino arrebitado do ouriço.",
      "2. Trace o manto de dezenas de espinhos triangulares em leque nas costas.",
      "3. Faça as 4 patinhas pequeninas sob a barriguinha macia.",
      "4. Desenhe os olhos meigos redondos, a trufinha preta e o sorriso fofo.",
      "5. Adicione uma folhinha de outono presa nos espinhos e textura."
    ],
    "layers": [
      "<path d=\"M45 130 Q40 100 80 85 Q130 75 160 110 Q170 140 130 160 Q80 165 45 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 88 L80 65 L88 85 L96 62 L104 84 L114 65 L122 86 L134 70 L138 92 L152 80 L148 102 L165 95 L156 115 L172 112 L160 130 L174 135 L158 145\" fill=\"none\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"75\" cy=\"160\" rx=\"6\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n          <ellipse cx=\"120\" cy=\"160\" rx=\"6\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"65\" cy=\"115\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"45\" cy=\"128\" r=\"3.5\" fill=\"#1e293b\"/>\n          <path d=\"M52 135 Q58 140 65 136\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M125 75 Q135 60 145 68 Q140 80 128 78 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça triangular e a curva arqueada das costas do canguru.",
      "2. Trace as orelhas compridas de lebre e a grande cauda grossa de apoio.",
      "3. Faça as pernas traseiras grandes para saltos e os bracinhos curtos.",
      "4. Desenhe a bolsa marsupial na barriga com o filhotinho espiando.",
      "5. Adicione os olhos alertas, focinho preto e texturas do pelo."
    ],
    "layers": [
      "<ellipse cx=\"85\" cy=\"65\" rx=\"16\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M95 72 Q125 100 120 145\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M82 54 L80 30 Q88 32 88 52 Z M92 56 L96 32 Q102 34 98 54 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M120 145 C150 155 170 170 175 180 C155 180 135 168 115 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"98\" cy=\"155\" rx=\"22\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-20 98 155)\"/>\n          <rect x=\"75\" y=\"168\" width=\"35\" height=\"10\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M88 95 Q82 108 92 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M88 125 C88 145 112 145 112 125\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"100\" cy=\"120\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"98\" cy=\"118\" r=\"1.5\" fill=\"#1e293b\"/>\n          <circle cx=\"102\" cy=\"118\" r=\"1.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"82\" cy=\"62\" r=\"3.5\" fill=\"#1e293b\"/>\n          <circle cx=\"74\" cy=\"68\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M74 72 Q78 76 82 73\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça imensa e o corpo gigante e blindado do animal.",
      "2. Trace as 4 patas curtas e grossas como pilares de sustentação.",
      "3. Faça as orelhinhas pequenas e as presas na boca larga.",
      "4. Desenhe as narinas no alto do focinho e os olhos atentos.",
      "5. Adicione as dobras de pele grossa e contornos firmes."
    ],
    "layers": [
      "<rect x=\"65\" y=\"60\" width=\"60\" height=\"50\" rx=\"18\" fill=\"none\" stroke-width=\"2.8\"/>\n          <ellipse cx=\"120\" cy=\"135\" rx=\"45\" ry=\"35\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"85\" y=\"150\" width=\"16\" height=\"32\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"110\" y=\"152\" width=\"16\" height=\"30\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"140\" y=\"148\" width=\"16\" height=\"34\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"55\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"115\" cy=\"55\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"85\" cy=\"65\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"65\" r=\"4\" fill=\"#1e293b\"/>\n          <ellipse cx=\"78\" cy=\"95\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/>\n          <ellipse cx=\"112\" cy=\"95\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/>",
      "<path d=\"M80 120 Q110 115 130 125\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M155 125 Q170 135 168 150\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça imensa e o corpo gigante e blindado do animal.",
      "2. Trace as 4 patas curtas e grossas como pilares de sustentação.",
      "3. Faça as orelhinhas pequenas e o chifre grande e pontiagudo no focinho.",
      "4. Desenhe as narinas no alto do focinho e os olhos atentos.",
      "5. Adicione as dobras de pele grossa e contornos firmes."
    ],
    "layers": [
      "<rect x=\"65\" y=\"60\" width=\"60\" height=\"50\" rx=\"18\" fill=\"none\" stroke-width=\"2.8\"/>\n          <ellipse cx=\"120\" cy=\"135\" rx=\"45\" ry=\"35\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"85\" y=\"150\" width=\"16\" height=\"32\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"110\" y=\"152\" width=\"16\" height=\"30\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"140\" y=\"148\" width=\"16\" height=\"34\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"55\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"115\" cy=\"55\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/><path d=\"M60 75 Q45 60 52 50 Q65 65 65 75 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n             <path d=\"M68 70 Q62 62 66 58 Q72 65 72 70 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"85\" cy=\"65\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"65\" r=\"4\" fill=\"#1e293b\"/>\n          <ellipse cx=\"78\" cy=\"95\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/>\n          <ellipse cx=\"112\" cy=\"95\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/>",
      "<path d=\"M80 120 Q110 115 130 125\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M155 125 Q170 135 168 150\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça com focinho longo e o pescoço curvado em arco.",
      "2. Trace as corcovas arredondadas marcantes nas costas do camelo.",
      "3. Faça as 4 pernas longas e esguias adaptadas para caminhar na areia.",
      "4. Desenhe os olhos com cílios compridos, as orelhas e o focinho.",
      "5. Adicione a sela decorada do deserto e a cauda com pelos na ponta."
    ],
    "layers": [
      "<ellipse cx=\"70\" cy=\"65\" rx=\"16\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M78 75 C95 90 90 120 100 130\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 130 C105 105 120 105 125 130 C130 105 145 105 150 130 C155 145 145 160 125 160 C105 160 95 145 100 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"105\" y1=\"160\" x2=\"105\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"118\" y1=\"160\" x2=\"118\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"138\" y1=\"160\" x2=\"138\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"148\" y1=\"160\" x2=\"148\" y2=\"186\" stroke-width=\"2.5\"/>",
      "<circle cx=\"72\" cy=\"62\" r=\"3.5\" fill=\"#1e293b\"/>\n          <line x1=\"68\" y1=\"58\" x2=\"74\" y2=\"58\" stroke-width=\"2\"/>\n          <ellipse cx=\"60\" cy=\"68\" rx=\"4\" ry=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"82\" cy=\"55\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M112 135 Q125 145 138 135\" stroke-width=\"2.5\"/>\n          <path d=\"M152 140 Q165 150 162 165\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o tronco de eucalipto ou galho de árvore onde o animal está abraçado.",
      "2. Trace o corpo rechonchudo e a cabeça com bochechas arredondadas.",
      "3. Faça os braços e pernas longos com 3 garras curvas agarrando o tronco.",
      "4. Desenhe a máscara facial serena.",
      "5. Adicione folhinhas verdes ao redor e o rostinho tranquilo."
    ],
    "layers": [
      "<rect x=\"50\" y=\"20\" width=\"22\" height=\"170\" fill=\"none\" stroke-width=\"3\"/>",
      "<circle cx=\"115\" cy=\"80\" r=\"26\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"110\" cy=\"130\" rx=\"30\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M95 105 C75 105 60 90 68 80\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <path d=\"M95 145 C75 145 60 135 68 125\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<path d=\"M64 78 L58 75 M64 82 L56 82 M64 86 L58 89\" stroke-width=\"2.5\"/>\n            <circle cx=\"108\" cy=\"78\" r=\"3\" fill=\"#1e293b\"/>\n            <circle cx=\"122\" cy=\"78\" r=\"3\" fill=\"#1e293b\"/>\n            <path d=\"M110 88 Q115 92 120 88\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M72 45 Q90 35 85 55 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M72 155 Q90 145 85 165 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Castor Construtor.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Guaxinim Mascarado.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Morceguinho Noturno.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o tronco de eucalipto ou galho de árvore onde o animal está abraçado.",
      "2. Trace o corpo rechonchudo e a cabeça com bochechas arredondadas.",
      "3. Faça os braços e pernas longos com patas fofas agarrando o tronco.",
      "4. Desenhe o grande nariz preto oval e orelhas felpudas.",
      "5. Adicione folhinhas verdes ao redor e o rostinho tranquilo."
    ],
    "layers": [
      "<rect x=\"50\" y=\"20\" width=\"22\" height=\"170\" fill=\"none\" stroke-width=\"3\"/>",
      "<circle cx=\"115\" cy=\"80\" r=\"26\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"110\" cy=\"130\" rx=\"30\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M95 105 C75 105 60 90 68 80\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <path d=\"M95 145 C75 145 60 135 68 125\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<circle cx=\"88\" cy=\"65\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n            <circle cx=\"142\" cy=\"65\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"115\" cy=\"85\" rx=\"8\" ry=\"12\" fill=\"#1e293b\"/>\n            <circle cx=\"104\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n            <circle cx=\"126\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>",
      "<path d=\"M72 45 Q90 35 85 55 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M72 155 Q90 145 85 165 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Lêmure de Olhos Grandes.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça nobre alongada e o pescoço arqueado e forte.",
      "2. Trace o corpo esguio e as 4 pernas ágeis com cascos firmes.",
      "3. Faça as orelhas pontudas atentas e a crina comprida no pescoço.",
      "4. Desenhe os olhos doces e vivos, narinas abertas e o focinho.",
      "5. Adicione a cauda longa fluida e contornos finos."
    ],
    "layers": [
      "<ellipse cx=\"82\" cy=\"65\" rx=\"18\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-30 82 65)\"/>\n          <path d=\"M88 80 Q105 110 125 125\" fill=\"none\" stroke-width=\"3\"/>\n          <ellipse cx=\"130\" cy=\"138\" rx=\"36\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"110\" y1=\"155\" x2=\"110\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"122\" y1=\"158\" x2=\"122\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"145\" y1=\"156\" x2=\"145\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"158\" y1=\"154\" x2=\"158\" y2=\"186\" stroke-width=\"2.5\"/>\n          <rect x=\"107\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>\n          <rect x=\"119\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>\n          <rect x=\"142\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>\n          <rect x=\"155\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>",
      "<polygon points=\"90,45 92,30 98,42\" fill=\"none\" stroke-width=\"2.2\"/>\n          <polygon points=\"98,48 102,32 106,45\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M96 46 Q115 70 120 115\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<circle cx=\"82\" cy=\"58\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"81\" cy=\"57\" r=\"2\" fill=\"#1e293b\"/>\n          <ellipse cx=\"68\" cy=\"76\" rx=\"4\" ry=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M162 130 Q178 145 172 175\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "<rect x=\"75\" y=\"55\" width=\"50\" height=\"45\" rx=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"140\" rx=\"42\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M78 58 Q65 45 68 38 Q78 45 84 54\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M122 58 Q135 45 132 38 Q122 45 116 54\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M72 68 Q55 68 62 78 Q72 78 74 72\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M128 68 Q145 68 138 78 Q128 78 126 72\" fill=\"none\" stroke-width=\"2\"/>",
      "<rect x=\"78\" y=\"155\" width=\"14\" height=\"28\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"108\" y=\"155\" width=\"14\" height=\"28\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"78\" y=\"177\" width=\"14\" height=\"6\" fill=\"#1e293b\"/>\n          <rect x=\"108\" y=\"177\" width=\"14\" height=\"6\" fill=\"#1e293b\"/>\n          <path d=\"M138 140 Q160 145 155 165\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n          <ellipse cx=\"155\" cy=\"168\" rx=\"4\" ry=\"6\" fill=\"#1e293b\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"20\" ry=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"92\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"86\" cy=\"68\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"67\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"68\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"67\" r=\"2\" fill=\"#1e293b\"/>",
      "<path d=\"M72 125 C62 135 75 145 82 135 C88 128 80 120 72 125 Z\" fill=\"#1e293b\"/>\n          <path d=\"M115 130 C128 122 135 140 122 145 C115 148 110 135 115 130 Z\" fill=\"#1e293b\"/>\n          <path d=\"M85 102 Q100 108 115 102\" fill=\"none\" stroke-width=\"3\"/>\n          <polygon points=\"97,108 103,108 100,115\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "4. Desenhe o famoso focinho oval tipo tomada com duas narinas redondas.",
      "5. Adicione os olhos alegres, bochechas coradas e detalhes para colorir em rosa."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"140\" rx=\"38\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M76 60 L62 42 Q78 40 84 55 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M124 60 L138 42 Q122 40 116 55 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"80\" y=\"160\" width=\"12\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"108\" y=\"160\" width=\"12\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M136 140 C155 138 165 145 155 155 C148 160 162 165 168 155\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"95\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"105\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"84\" cy=\"72\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"83\" cy=\"71\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"116\" cy=\"72\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"115\" cy=\"71\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"75\" cy=\"85\" r=\"5\" fill=\"#fbcfe8\" opacity=\"0.6\"/>\n          <circle cx=\"125\" cy=\"85\" r=\"5\" fill=\"#fbcfe8\" opacity=\"0.6\"/>\n          <path d=\"M94 98 Q100 102 106 98\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o grande corpo em formato de nuvem de lã fofa e encaracolada.",
      "2. Trace a cabecinha oval no centro com topete de lã no topo.",
      "3. Faça as orelhas caídas compridas e as 4 perninhas finas escuras.",
      "4. Desenhe os olhinhos meigos com cílios e o focinho em \"Y\".",
      "5. Adicione os caracóis da lã ao redor do corpo para dar textura fofa."
    ],
    "layers": [
      "<path d=\"M70 115 C55 110 50 130 60 145 C50 160 70 175 85 165 C95 178 120 178 130 165 C145 175 165 160 155 145 C165 130 160 110 145 115 C140 100 120 95 110 105 C100 95 80 100 70 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"100\" cy=\"95\" rx=\"18\" ry=\"22\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M88 78 C80 72 90 62 100 68 C110 62 120 72 112 78 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M82 92 Q68 95 72 105 Q82 102 85 98 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M118 92 Q132 95 128 105 Q118 102 115 98 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"82\" y=\"165\" width=\"8\" height=\"22\" rx=\"3\" fill=\"#1e293b\"/>\n          <rect x=\"110\" y=\"165\" width=\"8\" height=\"22\" rx=\"3\" fill=\"#1e293b\"/>",
      "<circle cx=\"92\" cy=\"92\" r=\"3.5\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"92\" r=\"3.5\" fill=\"#1e293b\"/>\n          <path d=\"M97 102 L100 106 L103 102 M100 106 L100 110\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"130\" r=\"4\" fill=\"none\" stroke-width=\"1.8\"/>\n          <circle cx=\"115\" cy=\"130\" r=\"4\" fill=\"none\" stroke-width=\"1.8\"/>\n          <circle cx=\"100\" cy=\"145\" r=\"4\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Hamster Bochechudo.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o círculo da cabeça e o corpo rechonchudo do porquinho.",
      "2. Trace as orelhinhas triangulares caídas para a frente.",
      "3. Faça as 4 patinhas curtas com casquinhos e o rabinho enrolado em espiral.",
      "4. Desenhe o famoso focinho oval tipo tomada com duas narinas redondas.",
      "5. Adicione os olhos alegres, bochechas coradas e detalhes para colorir em rosa."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"140\" rx=\"38\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M76 60 L62 42 Q78 40 84 55 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M124 60 L138 42 Q122 40 116 55 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"80\" y=\"160\" width=\"12\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"108\" y=\"160\" width=\"12\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M136 140 C155 138 165 145 155 155 C148 160 162 165 168 155\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"95\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"105\" cy=\"85\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"84\" cy=\"72\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"83\" cy=\"71\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"116\" cy=\"72\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"115\" cy=\"71\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"75\" cy=\"85\" r=\"5\" fill=\"#fbcfe8\" opacity=\"0.6\"/>\n          <circle cx=\"125\" cy=\"85\" r=\"5\" fill=\"#fbcfe8\" opacity=\"0.6\"/>\n          <path d=\"M94 98 Q100 102 106 98\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Furão Curioso.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Lontrinha Aquática.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Ornitorrinco Curioso.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Tamanduá-Bandeira.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Tatu-Bola Protetor.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo dócil de Capivara Tranquila.",
      "2. Trace as orelhas ou traços anatômicos próprios da espécie.",
      "3. Faça as 4 patas firmes e a cauda equilibrada.",
      "4. Desenhe os olhos expressivos com brilho, focinho e boca sorridente.",
      "5. Finalize os detalhes de pelagem e contornos firmes para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"58\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"115\" cy=\"168\" rx=\"12\" ry=\"9\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 142 Q158 135 152 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"76\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"86\" rx=\"6\" ry=\"4\" fill=\"#1e293b\"/>\n          <path d=\"M96 93 Q100 96 104 93\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"140\" rx=\"15\" ry=\"16\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o círculo da cabeça e a estrutura do corpo do leão.",
      "2. Trace a magnífica juba real ao redor da cabeça com pontas e curvas.",
      "3. Faça as orelhas redondas no topo e as patinhas musculosas.",
      "4. Desenhe os olhos destemidos, nariz triangular largo e boca imponente.",
      "5. Adicione a cauda longa com tufo de pelos na ponta e os bigodes reais."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"38\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M70 42 C50 60 50 95 62 112 C72 126 90 128 100 128 C110 128 128 126 138 112 C150 95 150 60 130 42 C115 32 85 32 70 42 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M62 48 Q45 68 52 88 Q40 108 62 120 Q80 135 100 135 Q120 135 138 120 Q160 108 148 88 Q155 68 138 48 Q120 30 100 30 Q80 30 62 48 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"55\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"55\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"80\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"120\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"88\" cy=\"76\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"87\" cy=\"74\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"112\" cy=\"76\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"111\" cy=\"74\" r=\"2.5\" fill=\"#1e293b\"/>\n          <polygon points=\"95,86 105,86 100,94\" fill=\"#1e293b\"/>\n          <path d=\"M94 97 Q100 102 106 97\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<line x1=\"72\" y1=\"92\" x2=\"52\" y2=\"88\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"72\" y1=\"98\" x2=\"50\" y2=\"99\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"128\" y1=\"92\" x2=\"148\" y2=\"88\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"128\" y1=\"98\" x2=\"150\" y2=\"99\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M135 145 Q165 135 160 115\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <path d=\"M160 115 Q168 105 160 98 Q152 105 160 115 Z\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo felino forte e ágil.",
      "2. Trace as orelhas redondas com interior escuro e as bochechas tufadas.",
      "3. Faça as 4 patas musculosas com garras recolhidas e a cauda longa.",
      "4. Desenhe os olhos selvagens penetrantes, o focinho e as narinas.",
      "5. Adicione as rosetas pintadas e bigodes firmes."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"78\" r=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"38\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"72\" cy=\"54\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"72\" cy=\"54\" r=\"6\" fill=\"#1e293b\"/>\n          <circle cx=\"128\" cy=\"54\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"128\" cy=\"54\" r=\"6\" fill=\"#1e293b\"/>\n          <path d=\"M68 85 Q60 92 68 100 M132 85 Q140 92 132 100\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"80\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"120\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M136 142 Q168 135 160 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"86\" cy=\"74\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"85\" cy=\"73\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"114\" cy=\"74\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"113\" cy=\"73\" r=\"2.5\" fill=\"#1e293b\"/>\n          <polygon points=\"96,86 104,86 100,92\" fill=\"#1e293b\"/>\n          <path d=\"M95 95 Q100 99 105 95\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"78\" cy=\"125\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"95\" cy=\"135\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"118\" cy=\"125\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"82\" cy=\"148\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"112\" cy=\"148\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n            <line x1=\"72\" y1=\"92\" x2=\"52\" y2=\"90\" stroke-width=\"1.8\"/>\n            <line x1=\"128\" y1=\"92\" x2=\"148\" y2=\"90\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e a crista vermelha no topo.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/><path d=\"M72 52 C70 40 85 35 88 45 C92 38 100 42 96 52 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "<path d=\"M62 105 Q50 130 55 145 Q65 145 68 125\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M138 105 Q150 130 145 145 Q135 145 132 125\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"166\" rx=\"12\" ry=\"6\" fill=\"#f97316\"/>\n            <ellipse cx=\"115\" cy=\"166\" rx=\"12\" ry=\"6\" fill=\"#f97316\"/>",
      "<path d=\"M75 90 C75 140 85 155 100 155 C115 155 125 140 125 90 C125 80 115 75 100 75 C85 75 75 80 75 90 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n            <polygon points=\"96,92 104,92 100,100\" fill=\"#f97316\"/>\n            <circle cx=\"88\" cy=\"85\" r=\"3.5\" fill=\"#1e293b\"/>\n            <circle cx=\"112\" cy=\"85\" r=\"3.5\" fill=\"#1e293b\"/>",
      "<path d=\"M30 172 Q100 162 170 172\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo oval e a cabeça da ave pousada.",
      "2. Trace o famoso BICO GIGANTE curvo característico do tucano.",
      "3. Adicione a asa lateral com penas e o galho sob os pés.",
      "4. Faça o olho vivo com o anel colorido e o peito branco destacado.",
      "5. Desenhe as divisões coloridas do bico e a cauda longa."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"75\" r=\"26\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"80\" cy=\"130\" rx=\"28\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M95 62 C125 58 165 72 170 95 C150 102 115 95 95 90 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M68 110 C62 135 75 160 88 155 C95 148 92 125 80 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <line x1=\"25\" y1=\"165\" x2=\"160\" y2=\"165\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n            <ellipse cx=\"78\" cy=\"165\" rx=\"4\" ry=\"3\" fill=\"#1e293b\"/>\n            <ellipse cx=\"88\" cy=\"165\" rx=\"4\" ry=\"3\" fill=\"#1e293b\"/>",
      "<circle cx=\"82\" cy=\"74\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"82\" cy=\"74\" r=\"3.5\" fill=\"#1e293b\"/>\n            <path d=\"M95 75 Q85 95 72 98 Q65 88 72 75\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M145 68 L148 98\" stroke-width=\"2\"/>\n            <path d=\"M160 78 L162 98\" stroke-width=\"2\"/>\n            <path d=\"M65 155 L55 185 L65 185 L75 155\" fill=\"none\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo da corujinha da sabedoria.",
      "2. Acrescente os penachos das orelhas no topo e as duas asas fechadas.",
      "3. Trace o galho de apoio com as garrinhas segurando firmemente.",
      "4. Desenhe os famosos OLHOS GIGANTES concêntricos e o biquinho curvo.",
      "5. Adicione as texturas de escaminhas no peito e detalhes de penas."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"75\" r=\"34\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"100\" cy=\"135\" rx=\"36\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"72,50 62,25 82,42\" fill=\"none\" stroke-width=\"2.5\"/>\n            <polygon points=\"128,50 138,25 118,42\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M66 115 Q55 140 70 155 Q78 145 74 120\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M134 115 Q145 140 130 155 Q122 145 126 120\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"30\" y1=\"168\" x2=\"170\" y2=\"168\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n            <ellipse cx=\"88\" cy=\"168\" rx=\"5\" ry=\"3\" fill=\"#1e293b\"/>\n            <ellipse cx=\"112\" cy=\"168\" rx=\"5\" ry=\"3\" fill=\"#1e293b\"/>",
      "<circle cx=\"82\" cy=\"76\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n            <circle cx=\"82\" cy=\"76\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"82\" cy=\"76\" r=\"4\" fill=\"#1e293b\"/>\n            <circle cx=\"118\" cy=\"76\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n            <circle cx=\"118\" cy=\"76\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"118\" cy=\"76\" r=\"4\" fill=\"#1e293b\"/>\n            <polygon points=\"98,82 102,82 100,90\" fill=\"#f59e0b\"/>",
      "<path d=\"M85 125 Q92 120 100 125 Q108 120 115 125 M88 135 Q95 130 100 135 Q105 130 112 135 M90 145 Q95 140 100 145 Q105 140 110 145\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o pescoço longo e sinuoso em formato de \"S\" e o corpo em gota.",
      "2. Trace a perna finíssima de apoio e a outra perna dobrada em quatro.",
      "3. Adicione o bico curvo característico com a ponta preta marcante.",
      "4. Desenhe as penas da asa estilizada e o olho com anel claro.",
      "5. Adicione as ondulações da água onde o flamingo repousa."
    ],
    "layers": [
      "<circle cx=\"75\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"120\" cy=\"115\" rx=\"26\" ry=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M80 68 C85 85 110 85 112 102\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<line x1=\"115\" y1=\"133\" x2=\"115\" y2=\"186\" stroke-width=\"2.5\"/>\n            <path d=\"M125 133 L140 155 L125 155\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M62 55 Q50 60 52 72 Q64 74 68 64 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n            <path d=\"M52 68 Q52 72 58 73 Z\" fill=\"#1e293b\"/>",
      "<circle cx=\"72\" cy=\"52\" r=\"2.5\" fill=\"#1e293b\"/>\n            <path d=\"M110 110 Q135 105 132 125\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M85 186 Q115 182 145 186\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo elegante e a cabeça altiva do pavão real.",
      "2. Trace o GRANDE LEQUE semicircular aberto da cauda nas costas.",
      "3. Adicione os ocelos (olhos concêntricos de penas) espalhados pelo leque.",
      "4. Desenhe o penacho de três penas na coroa da cabeça e o bico fino.",
      "5. Finalize as patinhas com esporões e as penas detalhadas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"120\" rx=\"16\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <circle cx=\"100\" cy=\"85\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M35 135 C35 60 165 60 165 135 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <line x1=\"100\" y1=\"120\" x2=\"45\" y2=\"110\" stroke-width=\"1.8\"/>\n            <line x1=\"100\" y1=\"120\" x2=\"60\" y2=\"80\" stroke-width=\"1.8\"/>\n            <line x1=\"100\" y1=\"120\" x2=\"85\" y2=\"60\" stroke-width=\"1.8\"/>\n            <line x1=\"100\" y1=\"120\" x2=\"115\" y2=\"60\" stroke-width=\"1.8\"/>\n            <line x1=\"100\" y1=\"120\" x2=\"140\" y2=\"80\" stroke-width=\"1.8\"/>\n            <line x1=\"100\" y1=\"120\" x2=\"155\" y2=\"110\" stroke-width=\"1.8\"/>",
      "<circle cx=\"48\" cy=\"108\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"64\" cy=\"78\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"88\" cy=\"58\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"112\" cy=\"58\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"136\" cy=\"78\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"152\" cy=\"108\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"98,82 102,82 100,88\" fill=\"#f59e0b\"/>\n            <circle cx=\"96\" cy=\"82\" r=\"2\" fill=\"#1e293b\"/>\n            <line x1=\"100\" y1=\"73\" x2=\"95\" y2=\"62\" stroke-width=\"2\"/>\n            <circle cx=\"95\" cy=\"61\" r=\"2\" fill=\"#1e293b\"/>\n            <line x1=\"100\" y1=\"73\" x2=\"100\" y2=\"60\" stroke-width=\"2\"/>\n            <circle cx=\"100\" cy=\"59\" r=\"2\" fill=\"#1e293b\"/>\n            <line x1=\"100\" y1=\"73\" x2=\"105\" y2=\"62\" stroke-width=\"2\"/>\n            <circle cx=\"105\" cy=\"61\" r=\"2\" fill=\"#1e293b\"/>",
      "<line x1=\"94\" y1=\"144\" x2=\"92\" y2=\"168\" stroke-width=\"2.2\"/>\n            <line x1=\"106\" y1=\"144\" x2=\"108\" y2=\"168\" stroke-width=\"2.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo em gota d'água da ave.",
      "2. Acrescente o bico característico e a cauda empinada com penas.",
      "3. Desenhe as asas laterais dobradas e as perninhas firmes.",
      "4. Faça o olho vivo expressivo e as penas suaves.",
      "5. Adicione os detalhes das penas e textura das patinhas."
    ],
    "layers": [
      "<circle cx=\"80\" cy=\"75\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 95 C115 95 155 105 160 130 C155 155 100 160 75 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 72 C45 70 40 82 58 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 120 Q175 110 170 130\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 112 C115 108 135 120 130 140 C115 145 100 135 92 112 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"76\" cy=\"70\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"75\" cy=\"69\" r=\"2\" fill=\"#1e293b\"/>\n            <ellipse cx=\"90\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"115\" cy=\"165\" rx=\"10\" ry=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M105 122 Q115 125 120 132 M98 128 Q108 132 115 138\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, o sorriso amigável.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, os dentes afiados e guelras.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><path d=\"M48 114 L50 117 L52 114 L54 117 L56 114\" stroke-width=\"1.8\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, o sorriso amigável.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, o sorriso amigável.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "<circle cx=\"45\" cy=\"150\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"68\" cy=\"155\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"92\" cy=\"160\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"110\" cy=\"160\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"130\" cy=\"155\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"152\" cy=\"150\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"84\" cy=\"93\" r=\"3.5\" fill=\"#1e293b\"/>\n            <circle cx=\"115\" cy=\"95\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"114\" cy=\"93\" r=\"3.5\" fill=\"#1e293b\"/>\n            <path d=\"M96 108 Q100 112 104 108\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"35\" cy=\"70\" r=\"4\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>\n            <circle cx=\"45\" cy=\"50\" r=\"6\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>\n            <circle cx=\"165\" cy=\"65\" r=\"5\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, o sorriso amigável.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "<path d=\"M72 108 Q50 90 45 70 Q30 65 42 50 Q55 60 58 75 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M128 108 Q150 90 155 70 Q170 65 158 50 Q145 60 142 75 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 125 Q45 130 42 145 M68 132 Q50 142 52 155 M72 138 Q58 152 62 165\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n            <path d=\"M135 125 Q155 130 158 145 M132 132 Q150 142 148 155 M128 138 Q142 152 138 165\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"88\" y1=\"100\" x2=\"86\" y2=\"85\" stroke-width=\"2.5\"/>\n            <circle cx=\"86\" cy=\"82\" r=\"5\" fill=\"#1e293b\"/>\n            <line x1=\"112\" y1=\"100\" x2=\"114\" y2=\"85\" stroke-width=\"2.5\"/>\n            <circle cx=\"114\" cy=\"82\" r=\"5\" fill=\"#1e293b\"/>",
      "<path d=\"M92 125 Q100 132 108 125\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça nobre alongada e o pescoço arqueado e forte.",
      "2. Trace o corpo esguio e as 4 pernas ágeis com cascos firmes.",
      "3. Faça as orelhas pontudas atentas e a crina comprida no pescoço.",
      "4. Desenhe os olhos doces e vivos, narinas abertas e o focinho.",
      "5. Adicione a cauda longa fluida e contornos finos."
    ],
    "layers": [
      "<ellipse cx=\"82\" cy=\"65\" rx=\"18\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-30 82 65)\"/>\n          <path d=\"M88 80 Q105 110 125 125\" fill=\"none\" stroke-width=\"3\"/>\n          <ellipse cx=\"130\" cy=\"138\" rx=\"36\" ry=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"110\" y1=\"155\" x2=\"110\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"122\" y1=\"158\" x2=\"122\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"145\" y1=\"156\" x2=\"145\" y2=\"186\" stroke-width=\"2.5\"/>\n          <line x1=\"158\" y1=\"154\" x2=\"158\" y2=\"186\" stroke-width=\"2.5\"/>\n          <rect x=\"107\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>\n          <rect x=\"119\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>\n          <rect x=\"142\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>\n          <rect x=\"155\" y=\"182\" width=\"6\" height=\"4\" fill=\"#1e293b\"/>",
      "<polygon points=\"90,45 92,30 98,42\" fill=\"none\" stroke-width=\"2.2\"/>\n          <polygon points=\"98,48 102,32 106,45\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M96 46 Q115 70 120 115\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<circle cx=\"82\" cy=\"58\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"81\" cy=\"57\" r=\"2\" fill=\"#1e293b\"/>\n          <ellipse cx=\"68\" cy=\"76\" rx=\"4\" ry=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M162 130 Q178 145 172 175\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, o sorriso amigável.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, o sorriso amigável.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o grande domo arredondado da cabeça do polvo.",
      "2. Trace os 8 tentáculos ondulados saindo da base em curvas livres.",
      "3. Adicione as ventosas circulares ao longo de cada tentáculo.",
      "4. Desenhe os olhos grandes curiosos com brilho e bochechas fofas.",
      "5. Finalize com as bolhas de água subindo ao redor."
    ],
    "layers": [
      "<path d=\"M60 110 C50 65 150 65 140 110 C140 125 60 125 60 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 120 Q45 140 40 165 M75 122 Q65 150 68 175 M90 125 Q85 155 92 178 M105 125 Q110 155 108 178 M120 122 Q130 150 128 175 M135 120 Q155 140 160 165\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"45\" cy=\"150\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"68\" cy=\"155\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"92\" cy=\"160\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"110\" cy=\"160\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"130\" cy=\"155\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"152\" cy=\"150\" r=\"2.5\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"84\" cy=\"93\" r=\"3.5\" fill=\"#1e293b\"/>\n            <circle cx=\"115\" cy=\"95\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"114\" cy=\"93\" r=\"3.5\" fill=\"#1e293b\"/>\n            <path d=\"M96 108 Q100 112 104 108\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"35\" cy=\"70\" r=\"4\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>\n            <circle cx=\"45\" cy=\"50\" r=\"6\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>\n            <circle cx=\"165\" cy=\"65\" r=\"5\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, o sorriso amigável.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, o sorriso amigável.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo oval largo da carapaça do caranguejo.",
      "2. Trace os dois braços articulados erguendo as GRANDES PINÇAS abertas.",
      "3. Faça as 6 patinhas pontudas nas laterais para andar na areia.",
      "4. Desenhe os dois olhos redondos em hastes no topo da cabeça.",
      "5. Adicione a boca sorridente e texturas na carapaça."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"120\" rx=\"36\" ry=\"24\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M72 108 Q50 90 45 70 Q30 65 42 50 Q55 60 58 75 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M128 108 Q150 90 155 70 Q170 65 158 50 Q145 60 142 75 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 125 Q45 130 42 145 M68 132 Q50 142 52 155 M72 138 Q58 152 62 165\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n            <path d=\"M135 125 Q155 130 158 145 M132 132 Q150 142 148 155 M128 138 Q142 152 138 165\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"88\" y1=\"100\" x2=\"86\" y2=\"85\" stroke-width=\"2.5\"/>\n            <circle cx=\"86\" cy=\"82\" r=\"5\" fill=\"#1e293b\"/>\n            <line x1=\"112\" y1=\"100\" x2=\"114\" y2=\"85\" stroke-width=\"2.5\"/>\n            <circle cx=\"114\" cy=\"82\" r=\"5\" fill=\"#1e293b\"/>",
      "<path d=\"M92 125 Q100 132 108 125\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a silhueta fusiforme aerodinâmica do animal marinho.",
      "2. Adicione a barbatana dorsal triangular no dorso e a cauda bifurcada.",
      "3. Desenhe as barbatanas peitorais laterais para natação.",
      "4. Faça o olho vivo, o sorriso amigável.",
      "5. Finalize com as ondas da água e detalhes da barriga."
    ],
    "layers": [
      "<path d=\"M35 110 C55 80 115 75 155 105 C140 125 85 135 35 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 78 C96 55 110 45 115 50 C118 60 112 75 115 80\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M155 105 Q175 85 180 80 Q170 105 178 112 Q170 120 180 135 Q170 125 155 115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M75 118 C85 135 102 145 105 142 C108 135 98 122 92 118\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M65 112 C72 125 82 130 84 128\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"99\" r=\"2\" fill=\"#1e293b\"/>\n            <path d=\"M78 98 Q76 108 78 114 M83 98 Q81 108 83 114 M88 98 Q86 108 88 114\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n            <path d=\"M42 110 Q52 118 65 112\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M35 110 C60 112 110 118 155 115\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça larga e o corpo rechonchudo do sapinho cururu.",
      "2. Trace os dois grandes olhos esbugalhados no alto da cabeça.",
      "3. Faça as pernas traseiras dobradas em \"Z\" prontas para o salto.",
      "4. Desenhe a enorme boca de orelha a orelha e as patinhas dianteiras.",
      "5. Adicione a folha de vitória-régia embaixo e as manchinhas na pele."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"38\" ry=\"30\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"78\" cy=\"85\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n            <circle cx=\"122\" cy=\"85\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 125 C45 125 40 150 55 160 C65 165 75 150 72 135\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M135 125 C155 125 160 150 145 160 C135 165 125 150 128 135\" fill=\"none\" stroke-width=\"2.8\"/>\n            <rect x=\"85\" y=\"130\" width=\"8\" height=\"24\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/>\n            <rect x=\"107\" y=\"130\" width=\"8\" height=\"24\" rx=\"4\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"78\" cy=\"85\" r=\"6\" fill=\"#1e293b\"/>\n            <circle cx=\"76\" cy=\"83\" r=\"2.5\" fill=\"#ffffff\"/>\n            <circle cx=\"122\" cy=\"85\" r=\"6\" fill=\"#1e293b\"/>\n            <circle cx=\"120\" cy=\"83\" r=\"2.5\" fill=\"#ffffff\"/>\n            <path d=\"M72 115 Q100 135 128 115\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"165\" rx=\"70\" ry=\"12\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça com mandíbula alongada e o corpo rastejante forte.",
      "2. Trace as placas ósseas serrilhadas no dorso e a cauda musculosa.",
      "3. Faça as 4 patas abertas nas laterais com dedos bem separados.",
      "4. Desenhe os dentes afiados para fora e os olhos no topo da cabeça.",
      "5. Finalize as escamas texturizadas e contornos precisos."
    ],
    "layers": [
      "<path d=\"M35 115 C55 95 125 95 165 125\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M35 115 L165 130\" stroke-width=\"2.8\"/>\n            <path d=\"M65 95 L70 88 L75 95 L80 88 L85 95 L90 88 L95 95 L100 88 L105 95 L110 88 L115 95\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"75\" cy=\"140\" rx=\"14\" ry=\"6\" fill=\"none\" stroke-width=\"2.2\"/>\n            <ellipse cx=\"130\" cy=\"142\" rx=\"14\" ry=\"6\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"55\" cy=\"102\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"101\" r=\"2.5\" fill=\"#1e293b\"/>\n            <path d=\"M45 115 L48 119 L51 115 L54 119 L57 115\" stroke-width=\"1.8\"/>",
      "<path d=\"M65 122 L150 125\" stroke-dasharray=\"2 3\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o círculo da cabeça e a estrutura do corpo do leão.",
      "2. Trace a magnífica juba real ao redor da cabeça com pontas e curvas.",
      "3. Faça as orelhas redondas no topo e as patinhas musculosas.",
      "4. Desenhe os olhos destemidos, nariz triangular largo e boca imponente.",
      "5. Adicione a cauda longa com tufo de pelos na ponta e os bigodes reais."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"138\" rx=\"38\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M70 42 C50 60 50 95 62 112 C72 126 90 128 100 128 C110 128 128 126 138 112 C150 95 150 60 130 42 C115 32 85 32 70 42 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M62 48 Q45 68 52 88 Q40 108 62 120 Q80 135 100 135 Q120 135 138 120 Q160 108 148 88 Q155 68 138 48 Q120 30 100 30 Q80 30 62 48 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"55\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"55\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"80\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"120\" cy=\"168\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"88\" cy=\"76\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"87\" cy=\"74\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"112\" cy=\"76\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"111\" cy=\"74\" r=\"2.5\" fill=\"#1e293b\"/>\n          <polygon points=\"95,86 105,86 100,94\" fill=\"#1e293b\"/>\n          <path d=\"M94 97 Q100 102 106 97\" fill=\"none\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<line x1=\"72\" y1=\"92\" x2=\"52\" y2=\"88\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"72\" y1=\"98\" x2=\"50\" y2=\"99\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"128\" y1=\"92\" x2=\"148\" y2=\"88\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <line x1=\"128\" y1=\"98\" x2=\"150\" y2=\"99\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M135 145 Q165 135 160 115\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <path d=\"M160 115 Q168 105 160 98 Q152 105 160 115 Z\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a linha guia sinuosa em formato de \"S\" do corpo da cobra.",
      "2. Desenhe a espessura contínua do corpo enrolado sobre o solo.",
      "3. Faça a cabeça triangular arredondada com olhos atentos.",
      "4. Desenhe a famosa língua bífida em formato de \"Y\" saindo da boca.",
      "5. Adicione os padrões de escamas geométricas ao longo de todo o corpo."
    ],
    "layers": [
      "<path d=\"M60 80 Q100 50 120 90 T80 140 T145 160\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M55 85 Q95 55 115 95 T75 145 T140 165\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"60\" cy=\"80\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"58\" cy=\"76\" r=\"3\" fill=\"#1e293b\"/>\n            <path d=\"M50 82 L38 82 M38 82 L32 78 M38 82 L32 86\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M75 75 L82 72 M100 85 L108 82 M90 125 L98 122 M115 145 L122 142\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a grande carapaça em domo arredondado da tartaruga.",
      "2. Trace as placas geométricas hexagonais do casco.",
      "3. Faça a cabeça simpática esticada para a frente e o rabinho curto.",
      "4. Desenhe as 4 patas fortes com unhas para caminhar na terra.",
      "5. Adicione os olhos serenos e texturas do couro."
    ],
    "layers": [
      "<path d=\"M60 135 C60 85 140 85 140 135 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 95 L80 110 L80 125 L100 135 L120 125 L120 110 Z\" fill=\"none\" stroke-width=\"2\"/>\n            <line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"85\" stroke-width=\"2\"/>\n            <line x1=\"80\" y1=\"110\" x2=\"65\" y2=\"105\" stroke-width=\"2\"/>\n            <line x1=\"120\" y1=\"110\" x2=\"135\" y2=\"105\" stroke-width=\"2\"/>",
      "<ellipse cx=\"50\" cy=\"120\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"70\" y=\"132\" width=\"16\" height=\"20\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"115\" y=\"132\" width=\"16\" height=\"20\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n            <polygon points=\"140,132 152,135 140,138\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"46\" cy=\"118\" r=\"3.5\" fill=\"#1e293b\"/>\n            <path d=\"M42 125 Q48 128 54 125\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"78\" cy=\"150\" rx=\"2\" ry=\"1.5\" fill=\"#1e293b\"/>\n            <ellipse cx=\"123\" cy=\"150\" rx=\"2\" ry=\"1.5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça com mandíbula alongada e o corpo rastejante forte.",
      "2. Trace as placas ósseas serrilhadas no dorso e a cauda musculosa.",
      "3. Faça as 4 patas abertas nas laterais com dedos bem separados.",
      "4. Desenhe os dentes afiados para fora e os olhos no topo da cabeça.",
      "5. Finalize as escamas texturizadas e contornos precisos."
    ],
    "layers": [
      "<path d=\"M35 115 C55 95 125 95 165 125\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M35 115 L165 130\" stroke-width=\"2.8\"/>\n            <path d=\"M65 95 L70 88 L75 95 L80 88 L85 95 L90 88 L95 95 L100 88 L105 95 L110 88 L115 95\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"75\" cy=\"140\" rx=\"14\" ry=\"6\" fill=\"none\" stroke-width=\"2.2\"/>\n            <ellipse cx=\"130\" cy=\"142\" rx=\"14\" ry=\"6\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"55\" cy=\"102\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"54\" cy=\"101\" r=\"2.5\" fill=\"#1e293b\"/>\n            <path d=\"M45 115 L48 119 L51 115 L54 119 L57 115\" stroke-width=\"1.8\"/>",
      "<path d=\"M65 122 L150 125\" stroke-dasharray=\"2 3\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo fino central e a cabeça redonda da borboleta.",
      "2. Trace o grande par de asas superiores abertas simétricas.",
      "3. Faça o par de asas inferiores menores com curvas harmônicas.",
      "4. Desenhe as anteninhas com pontas arredondadas e o rostinho meigo.",
      "5. Preencha as asas com arabescos e círculos perfeitos para colorir."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"6\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n            <circle cx=\"100\" cy=\"75\" r=\"9\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M106 95 C135 60 175 65 170 105 C165 130 125 125 106 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M94 95 C65 60 25 65 30 105 C35 130 75 125 94 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M106 120 C130 125 155 140 145 165 C130 180 110 155 104 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M94 120 C70 125 45 140 55 165 C70 180 90 155 96 140 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M96 68 Q90 50 82 52 M104 68 Q110 50 118 52\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <circle cx=\"82\" cy=\"52\" r=\"2.5\" fill=\"#1e293b\"/>\n            <circle cx=\"118\" cy=\"52\" r=\"2.5\" fill=\"#1e293b\"/>\n            <circle cx=\"97\" cy=\"74\" r=\"1.5\" fill=\"#1e293b\"/>\n            <circle cx=\"103\" cy=\"74\" r=\"1.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"140\" cy=\"95\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"60\" cy=\"95\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"128\" cy=\"150\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"72\" cy=\"150\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "2. Trace as listras pretas e amarelas características no abdômen.",
      "3. Adicione o par de asas transparentes em formato de gota no dorso.",
      "4. Desenhe os olhos grandes com brilho, anteninhas e ferrão na ponta.",
      "5. Finalize com as patinhas pequeninas e o rastro de voo pontilhado."
    ],
    "layers": [
      "<circle cx=\"75\" cy=\"100\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"125\" cy=\"105\" rx=\"34\" ry=\"26\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M110 82 L110 128 M125 80 L125 130 M140 82 L140 128\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"105\" cy=\"65\" rx=\"12\" ry=\"24\" fill=\"none\" stroke-width=\"2.2\" transform=\"rotate(30 105 65)\"/>\n            <ellipse cx=\"120\" cy=\"60\" rx=\"10\" ry=\"20\" fill=\"none\" stroke-width=\"2\" transform=\"rotate(45 120 60)\"/>",
      "<circle cx=\"72\" cy=\"96\" r=\"4.5\" fill=\"#1e293b\"/>\n            <path d=\"M68 108 Q75 114 82 108\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M70 78 Q65 65 58 68 M78 78 Q80 65 85 66\" stroke-width=\"2\"/>\n            <polygon points=\"158,102 166,105 158,108\" fill=\"#1e293b\"/>",
      "<path d=\"M30 145 C45 125 55 160 70 140\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "3. Adicione as 6 famosas pintinhas pretas redondas distribuídas.",
      "4. Desenhe a cabeça com máscara preta, olhinhos e anteninhas.",
      "5. Faça as 6 patinhas articuladas sobre uma folhinha verde."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"40\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"160\" stroke-width=\"2.8\"/>",
      "<circle cx=\"82\" cy=\"105\" r=\"6\" fill=\"#1e293b\"/>\n            <circle cx=\"75\" cy=\"130\" r=\"7\" fill=\"#1e293b\"/>\n            <circle cx=\"88\" cy=\"148\" r=\"5\" fill=\"#1e293b\"/>\n            <circle cx=\"118\" cy=\"105\" r=\"6\" fill=\"#1e293b\"/>\n            <circle cx=\"125\" cy=\"130\" r=\"7\" fill=\"#1e293b\"/>\n            <circle cx=\"112\" cy=\"148\" r=\"5\" fill=\"#1e293b\"/>",
      "<path d=\"M80 84 C80 65 120 65 120 84 Z\" fill=\"#1e293b\"/>\n            <circle cx=\"88\" cy=\"74\" r=\"2.5\" fill=\"#ffffff\"/>\n            <circle cx=\"112\" cy=\"74\" r=\"2.5\" fill=\"#ffffff\"/>\n            <path d=\"M88 66 Q80 52 74 54 M112 66 Q120 52 126 54\" stroke-width=\"2\"/>",
      "<path d=\"M60 105 L45 98 M60 125 L42 125 M60 145 L45 152 M140 105 L155 98 M140 125 L158 125 M140 145 L155 152\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpinho rastejante e a cabeça do inseto.",
      "2. Trace a concha espiral circular nas costas ou segmentos.",
      "3. Adicione as anteninhas longas com olhos espertos na ponta.",
      "4. Desenhe o rostinho alegre e simpático.",
      "5. Finalize os detalhes de acabamento e o solo com folhas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"90\" cy=\"110\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M90 110 C80 110 80 100 90 100 C105 100 105 120 90 120 C70 120 70 90 90 90\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"140\" y1=\"135\" x2=\"148\" y2=\"105\" stroke-width=\"2.5\"/>\n            <circle cx=\"148\" cy=\"103\" r=\"4\" fill=\"#1e293b\"/>\n            <line x1=\"148\" y1=\"136\" x2=\"158\" y2=\"108\" stroke-width=\"2.5\"/>\n            <circle cx=\"158\" cy=\"106\" r=\"4\" fill=\"#1e293b\"/>",
      "<circle cx=\"142\" cy=\"125\" r=\"2.5\" fill=\"#1e293b\"/>\n            <path d=\"M142 132 Q148 136 152 132\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M40 160 Q100 152 160 160\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpinho rastejante e a cabeça do inseto.",
      "2. Trace a concha espiral circular nas costas ou segmentos.",
      "3. Adicione as anteninhas longas com olhos espertos na ponta.",
      "4. Desenhe o rostinho alegre e simpático.",
      "5. Finalize os detalhes de acabamento e o solo com folhas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"90\" cy=\"110\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M90 110 C80 110 80 100 90 100 C105 100 105 120 90 120 C70 120 70 90 90 90\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"140\" y1=\"135\" x2=\"148\" y2=\"105\" stroke-width=\"2.5\"/>\n            <circle cx=\"148\" cy=\"103\" r=\"4\" fill=\"#1e293b\"/>\n            <line x1=\"148\" y1=\"136\" x2=\"158\" y2=\"108\" stroke-width=\"2.5\"/>\n            <circle cx=\"158\" cy=\"106\" r=\"4\" fill=\"#1e293b\"/>",
      "<circle cx=\"142\" cy=\"125\" r=\"2.5\" fill=\"#1e293b\"/>\n            <path d=\"M142 132 Q148 136 152 132\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M40 160 Q100 152 160 160\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpinho rastejante e a cabeça do inseto.",
      "2. Trace a concha espiral circular nas costas ou segmentos.",
      "3. Adicione as anteninhas longas com olhos espertos na ponta.",
      "4. Desenhe o rostinho alegre e simpático.",
      "5. Finalize os detalhes de acabamento e o solo com folhas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"90\" cy=\"110\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M90 110 C80 110 80 100 90 100 C105 100 105 120 90 120 C70 120 70 90 90 90\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"140\" y1=\"135\" x2=\"148\" y2=\"105\" stroke-width=\"2.5\"/>\n            <circle cx=\"148\" cy=\"103\" r=\"4\" fill=\"#1e293b\"/>\n            <line x1=\"148\" y1=\"136\" x2=\"158\" y2=\"108\" stroke-width=\"2.5\"/>\n            <circle cx=\"158\" cy=\"106\" r=\"4\" fill=\"#1e293b\"/>",
      "<circle cx=\"142\" cy=\"125\" r=\"2.5\" fill=\"#1e293b\"/>\n            <path d=\"M142 132 Q148 136 152 132\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M40 160 Q100 152 160 160\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpinho rastejante e a cabeça do inseto.",
      "2. Trace a concha espiral circular nas costas ou segmentos.",
      "3. Adicione as anteninhas longas com olhos espertos na ponta.",
      "4. Desenhe o rostinho alegre e simpático.",
      "5. Finalize os detalhes de acabamento e o solo com folhas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"90\" cy=\"110\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M90 110 C80 110 80 100 90 100 C105 100 105 120 90 120 C70 120 70 90 90 90\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"140\" y1=\"135\" x2=\"148\" y2=\"105\" stroke-width=\"2.5\"/>\n            <circle cx=\"148\" cy=\"103\" r=\"4\" fill=\"#1e293b\"/>\n            <line x1=\"148\" y1=\"136\" x2=\"158\" y2=\"108\" stroke-width=\"2.5\"/>\n            <circle cx=\"158\" cy=\"106\" r=\"4\" fill=\"#1e293b\"/>",
      "<circle cx=\"142\" cy=\"125\" r=\"2.5\" fill=\"#1e293b\"/>\n            <path d=\"M142 132 Q148 136 152 132\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M40 160 Q100 152 160 160\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpinho rastejante e a cabeça do inseto.",
      "2. Trace a concha espiral circular nas costas ou segmentos.",
      "3. Adicione as anteninhas longas com olhos espertos na ponta.",
      "4. Desenhe o rostinho alegre e simpático.",
      "5. Finalize os detalhes de acabamento e o solo com folhas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"90\" cy=\"110\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M90 110 C80 110 80 100 90 100 C105 100 105 120 90 120 C70 120 70 90 90 90\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"140\" y1=\"135\" x2=\"148\" y2=\"105\" stroke-width=\"2.5\"/>\n            <circle cx=\"148\" cy=\"103\" r=\"4\" fill=\"#1e293b\"/>\n            <line x1=\"148\" y1=\"136\" x2=\"158\" y2=\"108\" stroke-width=\"2.5\"/>\n            <circle cx=\"158\" cy=\"106\" r=\"4\" fill=\"#1e293b\"/>",
      "<circle cx=\"142\" cy=\"125\" r=\"2.5\" fill=\"#1e293b\"/>\n            <path d=\"M142 132 Q148 136 152 132\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M40 160 Q100 152 160 160\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpinho rastejante e a cabeça do inseto.",
      "2. Trace a concha espiral circular nas costas ou segmentos.",
      "3. Adicione as anteninhas longas com olhos espertos na ponta.",
      "4. Desenhe o rostinho alegre e simpático.",
      "5. Finalize os detalhes de acabamento e o solo com folhas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"145\" rx=\"55\" ry=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"90\" cy=\"110\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M90 110 C80 110 80 100 90 100 C105 100 105 120 90 120 C70 120 70 90 90 90\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"140\" y1=\"135\" x2=\"148\" y2=\"105\" stroke-width=\"2.5\"/>\n            <circle cx=\"148\" cy=\"103\" r=\"4\" fill=\"#1e293b\"/>\n            <line x1=\"148\" y1=\"136\" x2=\"158\" y2=\"108\" stroke-width=\"2.5\"/>\n            <circle cx=\"158\" cy=\"106\" r=\"4\" fill=\"#1e293b\"/>",
      "<circle cx=\"142\" cy=\"125\" r=\"2.5\" fill=\"#1e293b\"/>\n            <path d=\"M142 132 Q148 136 152 132\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M40 160 Q100 152 160 160\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "3. Faça as pernas fortes com garras e os bracinhos dianteiros pequenos.",
      "4. Desenhe o olho destemido, narinas e os dentes pontiagudos.",
      "5. Adicione as placas escamadas no dorso e texturas jurássicas."
    ],
    "layers": [
      "<path d=\"M65 60 C65 45 95 40 115 48 C125 55 125 75 105 78 L85 80 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 85 C95 85 115 105 110 135 C100 155 75 150 70 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M110 130 C135 130 170 145 180 160 C160 165 130 155 105 145\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 140 Q105 155 95 182 L80 182\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M78 105 Q90 108 88 120 L82 120\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"85\" cy=\"55\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"84\" cy=\"54\" r=\"2\" fill=\"#1e293b\"/>\n            <line x1=\"85\" y1=\"72\" x2=\"115\" y2=\"70\" stroke-width=\"2\"/>\n            <path d=\"M90 72 L93 76 L96 72 L99 76 L102 72 L105 76\" stroke-width=\"1.8\"/>",
      "<path d=\"M68 50 L72 45 L76 52 L80 46 L84 54 M100 95 L105 90 L108 98 M115 125 L120 120 L124 128\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a grande cabeça com o ESCUDO ÓSSEO em leque na nuca.",
      "2. Trace os TRÊS CHIFRES afiados (dois grandes na testa, um no focinho).",
      "3. Faça o corpo robusto, as 4 patas fortes e a cauda curta.",
      "4. Desenhe o bico córneo tipo papagaio e os olhos destemidos.",
      "5. Adicione os espinhos decorativos na borda do escudo e texturas."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"85\" r=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"130\" cy=\"135\" rx=\"38\" ry=\"28\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 85 C55 50 115 50 110 85\" fill=\"none\" stroke-width=\"3\"/>\n            <polygon points=\"68,68 55,42 75,62\" fill=\"none\" stroke-width=\"2.5\"/>\n            <polygon points=\"98,68 112,42 92,62\" fill=\"none\" stroke-width=\"2.5\"/>\n            <polygon points=\"62,95 45,90 62,100\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<rect x=\"100\" y=\"150\" width=\"14\" height=\"32\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"140\" y=\"148\" width=\"14\" height=\"34\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M165 140 Q185 145 180 155\" stroke-width=\"2.8\"/>",
      "<circle cx=\"82\" cy=\"82\" r=\"4\" fill=\"#1e293b\"/>\n            <path d=\"M62 100 Q72 108 82 100\" stroke-width=\"2.2\"/>",
      "<circle cx=\"62\" cy=\"58\" r=\"2\" fill=\"#1e293b\"/>\n            <circle cx=\"78\" cy=\"50\" r=\"2\" fill=\"#1e293b\"/>\n            <circle cx=\"94\" cy=\"50\" r=\"2\" fill=\"#1e293b\"/>\n            <circle cx=\"108\" cy=\"58\" r=\"2\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace o PESCOÇO SUPER LONGO subindo em arco até as nuvens.",
      "2. Desenhe a cabeça pequena no topo e o corpo imenso e pesado.",
      "3. Faça as 4 patas colossais como pilares e a cauda longa de chicote.",
      "4. Desenhe o olho meigo, o sorriso gentil e a copa da árvore alta.",
      "5. Adicione as manchinhas pré-históricas pelo dorso."
    ],
    "layers": [
      "<ellipse cx=\"125\" cy=\"140\" rx=\"40\" ry=\"28\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M100 135 C85 85 70 45 65 35\" fill=\"none\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"65\" cy=\"30\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M165 145 C185 155 195 170 190 180\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<rect x=\"95\" y=\"152\" width=\"14\" height=\"32\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"115\" y=\"154\" width=\"14\" height=\"30\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"140\" y=\"152\" width=\"14\" height=\"32\" rx=\"5\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"62\" cy=\"28\" r=\"3\" fill=\"#1e293b\"/>\n            <path d=\"M58 35 Q65 38 72 35\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"115\" cy=\"130\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"130\" cy=\"135\" r=\"4\" fill=\"none\" stroke-width=\"1.8\"/>\n            <circle cx=\"145\" cy=\"130\" r=\"3\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça forte com mandíbula aberta e o corpo robusto do T-Rex.",
      "2. Trace a cauda longa equilibradora e a postura bípede imponente.",
      "3. Faça as pernas fortes com garras e os bracinhos dianteiros pequenos.",
      "4. Desenhe o olho destemido, narinas e os dentes pontiagudos.",
      "5. Adicione as placas escamadas no dorso e texturas jurássicas."
    ],
    "layers": [
      "<path d=\"M65 60 C65 45 95 40 115 48 C125 55 125 75 105 78 L85 80 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 85 C95 85 115 105 110 135 C100 155 75 150 70 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M110 130 C135 130 170 145 180 160 C160 165 130 155 105 145\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 140 Q105 155 95 182 L80 182\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M78 105 Q90 108 88 120 L82 120\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"85\" cy=\"55\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"84\" cy=\"54\" r=\"2\" fill=\"#1e293b\"/>\n            <line x1=\"85\" y1=\"72\" x2=\"115\" y2=\"70\" stroke-width=\"2\"/>\n            <path d=\"M90 72 L93 76 L96 72 L99 76 L102 72 L105 76\" stroke-width=\"1.8\"/>",
      "<path d=\"M68 50 L72 45 L76 52 L80 46 L84 54 M100 95 L105 90 L108 98 M115 125 L120 120 L124 128\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça forte com mandíbula aberta e o corpo robusto do T-Rex.",
      "2. Trace a cauda longa equilibradora e a postura bípede imponente.",
      "3. Faça as pernas fortes com garras e os bracinhos dianteiros pequenos.",
      "4. Desenhe o olho destemido, narinas e os dentes pontiagudos.",
      "5. Adicione as placas escamadas no dorso e texturas jurássicas."
    ],
    "layers": [
      "<path d=\"M65 60 C65 45 95 40 115 48 C125 55 125 75 105 78 L85 80 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M85 85 C95 85 115 105 110 135 C100 155 75 150 70 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M110 130 C135 130 170 145 180 160 C160 165 130 155 105 145\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 140 Q105 155 95 182 L80 182\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M78 105 Q90 108 88 120 L82 120\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"85\" cy=\"55\" r=\"4.5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"84\" cy=\"54\" r=\"2\" fill=\"#1e293b\"/>\n            <line x1=\"85\" y1=\"72\" x2=\"115\" y2=\"70\" stroke-width=\"2\"/>\n            <path d=\"M90 72 L93 76 L96 72 L99 76 L102 72 L105 76\" stroke-width=\"1.8\"/>",
      "<path d=\"M68 50 L72 45 L76 52 L80 46 L84 54 M100 95 L105 90 L108 98 M115 125 L120 120 L124 128\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M10 185 Q50 178 100 185 T190 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <path d=\"M25 185 Q28 172 35 185 M30 185 Q35 170 40 185 M160 185 Q165 170 170 185 M165 185 Q172 173 178 185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <path d=\"M150 35 Q160 25 175 32 Q190 22 195 38 Q205 50 185 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a linha do horizonte do oceano e o arco da praia de areia.",
      "2. Desenhe o tronco curvado e anelado do coqueiro tropical.",
      "3. Faça a copa exuberante de folhas pontiagudas de palmeira e cocos.",
      "4. Desenhe o grande sol radiante no céu e as ondas do mar quebrando suavemente.",
      "5. Adicione gaivotas voando na brisa marinha e conchinhas na areia."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"125\" x2=\"180\" y2=\"125\" stroke-width=\"2.5\"/>\n          <path d=\"M20 160 Q80 135 180 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M135 155 C125 115 138 95 142 75\" fill=\"none\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<path d=\"M142 75 Q115 62 105 82 M142 75 Q132 50 145 42 M142 75 Q168 55 178 72 M142 75 Q162 88 152 102 M142 75 Q125 80 115 95\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>\n            <circle cx=\"138\" cy=\"78\" r=\"3.5\" fill=\"#1e293b\"/>\n            <circle cx=\"145\" cy=\"80\" r=\"3.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"55\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 138 Q55 132 75 138 T115 138\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>",
      "<path d=\"M75 52 Q82 46 89 52 Q96 46 103 52\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 Q110 55 115 60 Q120 55 125 60\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha base do solo e o vale entre as elevações.",
      "2. Desenhe o grande pico pontiagudo central da montanha mais alta.",
      "3. Faça os dois picos secundários sobrepostos nas laterais.",
      "4. Desenhe as calotas de neve eterna com bordas em ziguezague nos topos.",
      "5. Adicione pinheiros coníferos na base e nuvens passando pelos cumes."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"160\" x2=\"180\" y2=\"160\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,55 45,160 155,160\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"55,85 20,160 90,160\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <polygon points=\"145,75 105,160 185,160\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M85 85 L92 92 L100 88 L108 94 L115 85\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M45 105 L50 110 L55 108 L62 112 L67 105\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M132 98 L138 104 L145 100 L152 105 L158 98\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"35,160 30,145 40,145\" fill=\"#1e293b\"/>\n          <polygon points=\"50,160 45,142 55,142\" fill=\"#1e293b\"/>\n          <polygon points=\"160,160 155,145 165,145\" fill=\"#1e293b\"/>\n          <path d=\"M125 45 Q135 38 145 45 Q155 38 165 45\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace os níveis de terreno e as margens da floresta.",
      "2. Desenhe os troncos fortes dos pinheiros e carvalhos.",
      "3. Faça as copas volumosas das árvores cheias de folhas.",
      "4. Adicione as pedras arredondadas no chão e arbustos floridos.",
      "5. Finalize com raios de sol filtrando pela copa das árvores."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"165\" x2=\"180\" y2=\"165\" stroke-width=\"2.5\"/>\n          <path d=\"M20 120 Q60 115 90 125\" stroke-width=\"2.5\"/>",
      "<rect x=\"65\" y=\"115\" width=\"14\" height=\"50\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"125\" y=\"105\" width=\"16\" height=\"60\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"72\" cy=\"95\" r=\"28\" fill=\"none\" stroke-width=\"2.8\"/>\n            <polygon points=\"133,55 105,110 160,110\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"45\" cy=\"160\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"155\" cy=\"160\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"168\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M35 152 Q38 142 42 152 M140 152 Q143 140 147 152\" stroke=\"#10b981\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Desenhe o grande planeta redondo central no espaço cósmico.",
      "2. Trace os anéis elípticos majestosos cruzando o planeta em perspectiva.",
      "3. Faça a lua com suas crateras circulares e um planeta menor ao longe.",
      "4. Espalhe estrelas cintilantes de 4 pontas de diferentes tamanhos.",
      "5. Adicione um cometa veloz riscando o céu com sua cauda de poeira estelar."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"95\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"85\" cy=\"95\" rx=\"55\" ry=\"14\" fill=\"none\" stroke-width=\"2.8\" transform=\"rotate(-25 85 95)\"/>",
      "<circle cx=\"148\" cy=\"65\" r=\"16\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"144\" cy=\"62\" r=\"3\" fill=\"none\" stroke-width=\"1.5\"/>\n          <circle cx=\"152\" cy=\"70\" r=\"2.5\" fill=\"none\" stroke-width=\"1.5\"/>",
      "<path d=\"M40 45 L42 52 L49 54 L42 56 L40 63 L38 56 L31 54 L38 52 Z\" fill=\"#f59e0b\"/>\n          <path d=\"M140 135 L141 140 L146 141 L141 142 L140 147 L139 142 L134 141 L139 140 Z\" fill=\"#f59e0b\"/>\n          <circle cx=\"50\" cy=\"130\" r=\"2\" fill=\"#ffffff\"/>\n          <circle cx=\"165\" cy=\"110\" r=\"2\" fill=\"#ffffff\"/>",
      "<circle cx=\"115\" cy=\"145\" r=\"4\" fill=\"#0ea5e9\"/>\n          <line x1=\"118\" y1=\"147\" x2=\"135\" y2=\"160\" stroke=\"#0ea5e9\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n          <line x1=\"117\" y1=\"149\" x2=\"130\" y2=\"165\" stroke=\"#0ea5e9\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace as dunas de areia onduladas do leito oceânico.",
      "2. Desenhe os corais ramificados cheios de pontas arredondadas.",
      "3. Faça as algas marinhas compridas ondulando suavemente na água.",
      "4. Adicione uma linda concha aberta no solo com uma pérola reluzente.",
      "5. Finalize com um cardume de pequenos peixinhos nadando e bolhas."
    ],
    "layers": [
      "<path d=\"M20 160 Q60 148 100 160 T180 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M45 160 C40 135 48 120 55 125 C62 118 68 135 62 145 C75 140 75 155 70 160\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M145 160 Q135 130 145 110 T138 75\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M158 160 Q168 135 158 115 T165 85\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M92 165 C85 152 115 152 108 165 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"100\" cy=\"158\" r=\"3.5\" fill=\"#fef08a\"/>",
      "<path d=\"M75 85 C85 80 92 85 90 90 C85 92 80 88 75 85 Z\" fill=\"none\" stroke-width=\"1.8\"/>\n          <circle cx=\"100\" cy=\"80\" r=\"2.5\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>\n          <circle cx=\"105\" cy=\"65\" r=\"4\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha base do morro rochoso e a muralha principal de pedra.",
      "2. Desenhe as três torres verticais (torre central mais alta e duas laterais).",
      "3. Faça os telhados cônicos pontiagudos com bandeirinhas tremulando.",
      "4. Desenhe o grande portão em arco com grade levadiça e ameias de pedra.",
      "5. Adicione as janelinhas seteiras e a textura dos blocos de cantaria."
    ],
    "layers": [
      "<line x1=\"25\" y1=\"165\" x2=\"175\" y2=\"165\" stroke-width=\"2.8\"/>\n          <rect x=\"55\" y=\"110\" width=\"90\" height=\"55\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"42\" y=\"85\" width=\"26\" height=\"80\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"70\" width=\"30\" height=\"95\" fill=\"none\" stroke-width=\"2.8\"/>\n          <rect x=\"132\" y=\"85\" width=\"26\" height=\"80\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"55,55 38,85 72,85\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"100,38 80,70 120,70\" fill=\"none\" stroke-width=\"2.8\"/>\n          <polygon points=\"145,55 128,85 162,85\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"100\" y1=\"38\" x2=\"100\" y2=\"28\" stroke-width=\"2\"/>\n          <polygon points=\"100,28 112,23 100,18\" fill=\"#ef4444\"/>",
      "<path d=\"M88 165 L88 135 C88 122 112 122 112 135 L112 165 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"94\" y1=\"135\" x2=\"94\" y2=\"165\" stroke-width=\"1.8\"/>\n          <line x1=\"106\" y1=\"135\" x2=\"106\" y2=\"165\" stroke-width=\"1.8\"/>",
      "<rect x=\"52\" y=\"102\" width=\"6\" height=\"12\" rx=\"2\" fill=\"#1e293b\"/>\n          <rect x=\"142\" y=\"102\" width=\"6\" height=\"12\" rx=\"2\" fill=\"#1e293b\"/>\n          <path d=\"M70 110 L70 105 L76 105 L76 110 M124 110 L124 105 L130 105 L130 110\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha da avenida asfaltada com a faixa central de trânsito.",
      "2. Desenhe os arranha-céus retangulares modernos de alturas variadas.",
      "3. Faça as antenas de telecomunicação e heliponto nos topos dos prédios.",
      "4. Desenhe as grades ordenadas de janelas iluminadas nos edifícios.",
      "5. Adicione postes de luz urbanos e nuvens no horizonte."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"165\" x2=\"180\" y2=\"165\" stroke-width=\"3\"/>\n          <line x1=\"20\" y1=\"172\" x2=\"180\" y2=\"172\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>",
      "<rect x=\"35\" y=\"90\" width=\"30\" height=\"75\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"70\" y=\"55\" width=\"38\" height=\"110\" fill=\"none\" stroke-width=\"2.8\"/>\n          <rect x=\"112\" y=\"75\" width=\"32\" height=\"90\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"148\" y=\"105\" width=\"22\" height=\"60\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"89\" y1=\"55\" x2=\"89\" y2=\"38\" stroke-width=\"2.5\"/>\n          <circle cx=\"89\" cy=\"36\" r=\"2.5\" fill=\"#ef4444\"/>",
      "<rect x=\"78\" y=\"68\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#fef08a\"/>\n          <rect x=\"92\" y=\"68\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#fef08a\"/>\n          <rect x=\"78\" y=\"85\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#fef08a\"/>\n          <rect x=\"92\" y=\"85\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#fef08a\"/>\n          <rect x=\"78\" y=\"102\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#fef08a\"/>\n          <rect x=\"92\" y=\"102\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#fef08a\"/>",
      "<line x1=\"165\" y1=\"165\" x2=\"165\" y2=\"148\" stroke-width=\"2\"/>\n          <circle cx=\"165\" cy=\"146\" r=\"3\" fill=\"#fef08a\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Desenhe as encostas cônicas inclinadas da grande montanha vulcânica.",
      "2. Trace a cratera aberta e imponente no topo da montanha.",
      "3. Faça a grande nuvem densa de cinzas e fumaça subindo ao céu.",
      "4. Desenhe os rios de lava alaranjada incandescente escorrendo pelas encostas.",
      "5. Adicione bombas vulcânicas e faíscas brilhando na escuridão."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"165\" x2=\"180\" y2=\"165\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 165 L85 95 L115 95 L160 165 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M80 85 C65 65 80 40 100 45 C120 35 135 60 120 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M92 95 Q88 120 80 145 M102 95 Q105 125 112 155 M108 95 Q118 115 125 140\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"75\" cy=\"55\" r=\"2.5\" fill=\"#f59e0b\"/>\n          <circle cx=\"125\" cy=\"48\" r=\"3\" fill=\"#f59e0b\"/>\n          <circle cx=\"98\" cy=\"35\" r=\"2.5\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte do oceano e o arco da praia de areia.",
      "2. Desenhe o tronco curvado e anelado do coqueiro tropical.",
      "3. Faça a copa exuberante de folhas pontiagudas de palmeira e cocos.",
      "4. Desenhe o grande sol radiante no céu e as ondas do mar quebrando suavemente.",
      "5. Adicione gaivotas voando na brisa marinha e conchinhas na areia."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"125\" x2=\"180\" y2=\"125\" stroke-width=\"2.5\"/>\n          <path d=\"M20 160 Q80 135 180 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M135 155 C125 115 138 95 142 75\" fill=\"none\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<path d=\"M142 75 Q115 62 105 82 M142 75 Q132 50 145 42 M142 75 Q168 55 178 72 M142 75 Q162 88 152 102 M142 75 Q125 80 115 95\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>\n            <circle cx=\"138\" cy=\"78\" r=\"3.5\" fill=\"#1e293b\"/>\n            <circle cx=\"145\" cy=\"80\" r=\"3.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"55\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 138 Q55 132 75 138 T115 138\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>",
      "<path d=\"M75 52 Q82 46 89 52 Q96 46 103 52\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 Q110 55 115 60 Q120 55 125 60\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha da colina verde suave onde a construção está pousada.",
      "2. Desenhe o celeiro com teto clássico em duas águas.",
      "3. Faça o grande portão duplo com as traves em \"X\".",
      "4. Adicione o silo cilíndrico ao lado e a cerca de piquete.",
      "5. Finalize o sol radiante no campo e vaquinhas ou flores ao redor."
    ],
    "layers": [
      "<path d=\"M20 160 Q100 145 180 160\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,75 60,105 60,160 140,160 140,105\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"85\" y=\"125\" width=\"30\" height=\"35\" fill=\"none\" stroke-width=\"2.5\"/>\n            <line x1=\"85\" y1=\"125\" x2=\"115\" y2=\"160\" stroke-width=\"2\"/>\n            <line x1=\"115\" y1=\"125\" x2=\"85\" y2=\"160\" stroke-width=\"2\"/>",
      "<line x1=\"25\" y1=\"155\" x2=\"55\" y2=\"155\" stroke-width=\"2.2\"/>\n          <line x1=\"35\" y1=\"148\" x2=\"35\" y2=\"162\" stroke-width=\"2.2\"/>\n          <line x1=\"45\" y1=\"148\" x2=\"45\" y2=\"162\" stroke-width=\"2.2\"/>",
      "<circle cx=\"45\" cy=\"65\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Desenhe as duas nuvens brancas fofas apoiadas nas laterais.",
      "2. Trace o arco superior mais externo do arco-íris perfeito.",
      "3. Faça as faixas curvas paralelas interiores dividindo as cores.",
      "4. Desenhe o sol alegre espiando por trás de uma das nuvens.",
      "5. Adicione gotinhas de chuva brilhante ou corações caindo."
    ],
    "layers": [
      "<path d=\"M30 145 C20 145 20 130 30 130 C30 115 50 115 55 125 C65 115 80 125 75 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M125 145 C115 145 115 130 125 130 C125 115 145 115 150 125 C160 115 175 125 170 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M45 125 C45 60 155 60 155 125\" fill=\"none\" stroke-width=\"3\"/>",
      "<path d=\"M52 125 C52 70 148 70 148 125\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M59 125 C59 80 141 80 141 125\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M66 125 C66 90 134 90 134 125\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>\n          <line x1=\"100\" y1=\"36\" x2=\"100\" y2=\"28\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"42\" x2=\"74\" y2=\"36\" stroke-width=\"2\"/>\n          <line x1=\"120\" y1=\"42\" x2=\"126\" y2=\"36\" stroke-width=\"2\"/>",
      "<circle cx=\"65\" cy=\"165\" r=\"2\" fill=\"#0ea5e9\"/>\n          <circle cx=\"95\" cy=\"170\" r=\"2\" fill=\"#0ea5e9\"/>\n          <circle cx=\"135\" cy=\"165\" r=\"2\" fill=\"#0ea5e9\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Deserto com Cactos).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace os níveis de terreno e as margens da floresta.",
      "2. Desenhe a queda d água em véu descendo pelo penhasco.",
      "3. Faça as copas volumosas das árvores cheias de folhas.",
      "4. Adicione as pedras arredondadas no chão e arbustos floridos.",
      "5. Finalize com raios de sol filtrando pela copa das árvores."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"165\" x2=\"180\" y2=\"165\" stroke-width=\"2.5\"/>\n          <path d=\"M20 120 Q60 115 90 125\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 125 L90 165 M115 125 L115 165\" stroke-width=\"2.5\"/>\n            <path d=\"M95 128 L95 162 M102 128 L102 162 M110 128 L110 162\" stroke=\"#0ea5e9\" stroke-width=\"1.8\" stroke-dasharray=\"4 2\"/>",
      "<ellipse cx=\"102\" cy=\"168\" rx=\"24\" ry=\"6\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"160\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"155\" cy=\"160\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"168\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M35 152 Q38 142 42 152 M140 152 Q143 140 147 152\" stroke=\"#10b981\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Lago das Vitórias-Régias).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Savana ao Pôr do Sol).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Polo Norte com Geleiras).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Caverna com Cristais).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Pântano das Fadas).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha base do solo e o vale entre as elevações.",
      "2. Desenhe o grande pico pontiagudo central da montanha mais alta.",
      "3. Faça os dois picos secundários sobrepostos nas laterais.",
      "4. Desenhe as calotas de neve eterna com bordas em ziguezague nos topos.",
      "5. Adicione pinheiros coníferos na base e nuvens passando pelos cumes."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"160\" x2=\"180\" y2=\"160\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,55 45,160 155,160\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"55,85 20,160 90,160\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <polygon points=\"145,75 105,160 185,160\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M85 85 L92 92 L100 88 L108 94 L115 85\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M45 105 L50 110 L55 108 L62 112 L67 105\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M132 98 L138 104 L145 100 L152 105 L158 98\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"35,160 30,145 40,145\" fill=\"#1e293b\"/>\n          <polygon points=\"50,160 45,142 55,142\" fill=\"#1e293b\"/>\n          <polygon points=\"160,160 155,145 165,145\" fill=\"#1e293b\"/>\n          <path d=\"M125 45 Q135 38 145 45 Q155 38 165 45\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte do oceano e o arco da praia de areia.",
      "2. Desenhe o tronco curvado e anelado do coqueiro tropical.",
      "3. Faça a copa exuberante de folhas pontiagudas de palmeira e cocos.",
      "4. Desenhe o grande sol radiante no céu e as ondas do mar quebrando suavemente.",
      "5. Adicione gaivotas voando na brisa marinha e conchinhas na areia."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"125\" x2=\"180\" y2=\"125\" stroke-width=\"2.5\"/>\n          <path d=\"M20 160 Q80 135 180 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M135 155 C125 115 138 95 142 75\" fill=\"none\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<path d=\"M142 75 Q115 62 105 82 M142 75 Q132 50 145 42 M142 75 Q168 55 178 72 M142 75 Q162 88 152 102 M142 75 Q125 80 115 95\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>\n            <circle cx=\"138\" cy=\"78\" r=\"3.5\" fill=\"#1e293b\"/>\n            <circle cx=\"145\" cy=\"80\" r=\"3.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"55\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 138 Q55 132 75 138 T115 138\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>",
      "<path d=\"M75 52 Q82 46 89 52 Q96 46 103 52\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 Q110 55 115 60 Q120 55 125 60\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte do oceano e o arco da praia de areia.",
      "2. Desenhe a torre alta e imponente do farol no penhasco.",
      "3. Faça o facho de luz saindo da lanterna do topo.",
      "4. Desenhe o grande sol radiante no céu e as ondas do mar quebrando suavemente.",
      "5. Adicione gaivotas voando na brisa marinha e conchinhas na areia."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"125\" x2=\"180\" y2=\"125\" stroke-width=\"2.5\"/>\n          <path d=\"M20 160 Q80 135 180 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M125 150 L132 75 L148 75 L155 150 Z\" fill=\"none\" stroke-width=\"2.8\"/>\n            <rect x=\"130\" y=\"65\" width=\"20\" height=\"10\" fill=\"none\" stroke-width=\"2.2\"/>\n            <polygon points=\"140,52 130,65 150,65\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"125\" y1=\"100\" x2=\"155\" y2=\"100\" stroke-width=\"2.5\"/>\n            <line x1=\"128\" y1=\"125\" x2=\"152\" y2=\"125\" stroke-width=\"2.5\"/>\n            <polygon points=\"140,70 40,55 40,85\" fill=\"#fef08a\" opacity=\"0.35\"/>",
      "<circle cx=\"55\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 138 Q55 132 75 138 T115 138\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>",
      "<path d=\"M75 52 Q82 46 89 52 Q96 46 103 52\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 Q110 55 115 60 Q120 55 125 60\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Casa de Campo Floridinha).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha da colina verde suave onde a construção está pousada.",
      "2. Desenhe a torre cônica rústica do moinho holandês.",
      "3. Faça as 4 grandes pás de hélice em cruz com treliça.",
      "4. Adicione a portinha e janelas rústicas.",
      "5. Finalize o sol radiante no campo e vaquinhas ou flores ao redor."
    ],
    "layers": [
      "<path d=\"M20 160 Q100 145 180 160\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"85,160 90,85 110,85 115,160\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M90 85 C90 75 110 75 110 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"100\" y1=\"80\" x2=\"60\" y2=\"40\" stroke-width=\"2.5\"/>\n            <line x1=\"100\" y1=\"80\" x2=\"140\" y2=\"120\" stroke-width=\"2.5\"/>\n            <line x1=\"100\" y1=\"80\" x2=\"140\" y2=\"40\" stroke-width=\"2.5\"/>\n            <line x1=\"100\" y1=\"80\" x2=\"60\" y2=\"120\" stroke-width=\"2.5\"/>\n            <circle cx=\"100\" cy=\"80\" r=\"4\" fill=\"#1e293b\"/>",
      "<line x1=\"25\" y1=\"155\" x2=\"55\" y2=\"155\" stroke-width=\"2.2\"/>\n          <line x1=\"35\" y1=\"148\" x2=\"35\" y2=\"162\" stroke-width=\"2.2\"/>\n          <line x1=\"45\" y1=\"148\" x2=\"45\" y2=\"162\" stroke-width=\"2.2\"/>",
      "<circle cx=\"45\" cy=\"65\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Ponte sobre o Rio Azul).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Parque com Roda-Gigante).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Tenda do Circo da Alegria).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Estação de Trem a Vapor).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Templo Pagoda Oriental).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace os níveis de terreno e as margens da floresta.",
      "2. Desenhe os troncos fortes dos pinheiros e carvalhos.",
      "3. Faça as copas volumosas das árvores cheias de folhas.",
      "4. Adicione as pedras arredondadas no chão e arbustos floridos.",
      "5. Finalize com raios de sol filtrando pela copa das árvores."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"165\" x2=\"180\" y2=\"165\" stroke-width=\"2.5\"/>\n          <path d=\"M20 120 Q60 115 90 125\" stroke-width=\"2.5\"/>",
      "<rect x=\"65\" y=\"115\" width=\"14\" height=\"50\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"125\" y=\"105\" width=\"16\" height=\"60\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"72\" cy=\"95\" r=\"28\" fill=\"none\" stroke-width=\"2.8\"/>\n            <polygon points=\"133,55 105,110 160,110\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"45\" cy=\"160\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"155\" cy=\"160\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"168\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M35 152 Q38 142 42 152 M140 152 Q143 140 147 152\" stroke=\"#10b981\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Igloo no Meio da Neve).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Desenhe o grande planeta redondo central no espaço cósmico.",
      "2. Trace os anéis elípticos majestosos cruzando o planeta em perspectiva.",
      "3. Faça a lua com suas crateras circulares e um planeta menor ao longe.",
      "4. Espalhe estrelas cintilantes de 4 pontas de diferentes tamanhos.",
      "5. Adicione um cometa veloz riscando o céu com sua cauda de poeira estelar."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"95\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"85\" cy=\"95\" rx=\"55\" ry=\"14\" fill=\"none\" stroke-width=\"2.8\" transform=\"rotate(-25 85 95)\"/>",
      "<circle cx=\"148\" cy=\"65\" r=\"16\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"144\" cy=\"62\" r=\"3\" fill=\"none\" stroke-width=\"1.5\"/>\n          <circle cx=\"152\" cy=\"70\" r=\"2.5\" fill=\"none\" stroke-width=\"1.5\"/>",
      "<path d=\"M40 45 L42 52 L49 54 L42 56 L40 63 L38 56 L31 54 L38 52 Z\" fill=\"#f59e0b\"/>\n          <path d=\"M140 135 L141 140 L146 141 L141 142 L140 147 L139 142 L134 141 L139 140 Z\" fill=\"#f59e0b\"/>\n          <circle cx=\"50\" cy=\"130\" r=\"2\" fill=\"#ffffff\"/>\n          <circle cx=\"165\" cy=\"110\" r=\"2\" fill=\"#ffffff\"/>",
      "<circle cx=\"115\" cy=\"145\" r=\"4\" fill=\"#0ea5e9\"/>\n          <line x1=\"118\" y1=\"147\" x2=\"135\" y2=\"160\" stroke=\"#0ea5e9\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n          <line x1=\"117\" y1=\"149\" x2=\"130\" y2=\"165\" stroke=\"#0ea5e9\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Céu com Aurora Boreal).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Nuvem com Chuva & Trovão).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Estufa de Vidro do Jardim).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Vale Pré-Histórico).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Desenhe o grande planeta redondo central no espaço cósmico.",
      "2. Trace os anéis elípticos majestosos cruzando o planeta em perspectiva.",
      "3. Faça a lua com suas crateras circulares e um planeta menor ao longe.",
      "4. Espalhe estrelas cintilantes de 4 pontas de diferentes tamanhos.",
      "5. Adicione um cometa veloz riscando o céu com sua cauda de poeira estelar."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"95\" r=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"85\" cy=\"95\" rx=\"55\" ry=\"14\" fill=\"none\" stroke-width=\"2.8\" transform=\"rotate(-25 85 95)\"/>",
      "<circle cx=\"148\" cy=\"65\" r=\"16\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"144\" cy=\"62\" r=\"3\" fill=\"none\" stroke-width=\"1.5\"/>\n          <circle cx=\"152\" cy=\"70\" r=\"2.5\" fill=\"none\" stroke-width=\"1.5\"/>",
      "<path d=\"M40 45 L42 52 L49 54 L42 56 L40 63 L38 56 L31 54 L38 52 Z\" fill=\"#f59e0b\"/>\n          <path d=\"M140 135 L141 140 L146 141 L141 142 L140 147 L139 142 L134 141 L139 140 Z\" fill=\"#f59e0b\"/>\n          <circle cx=\"50\" cy=\"130\" r=\"2\" fill=\"#ffffff\"/>\n          <circle cx=\"165\" cy=\"110\" r=\"2\" fill=\"#ffffff\"/>",
      "<circle cx=\"115\" cy=\"145\" r=\"4\" fill=\"#0ea5e9\"/>\n          <line x1=\"118\" y1=\"147\" x2=\"135\" y2=\"160\" stroke=\"#0ea5e9\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n          <line x1=\"117\" y1=\"149\" x2=\"130\" y2=\"165\" stroke=\"#0ea5e9\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Balanço Debaixo da Árvore).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Acampamento com Fogueira).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Canteiros da Hortinha).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Campo Cheio de Girassóis).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Canteiro de Tulipas).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Mina com Trilhos e Vagão).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e os relevos base da paisagem (Ocas da Aldeia na Floresta).",
      "2. Desenhe o marco geográfico principal da cena no centro.",
      "3. Faça os planos secundários com vegetação ou relevos harmônicos.",
      "4. Adicione o céu temático com nuvens e elementos celestes.",
      "5. Finalize as texturas do solo e retoques para colorir."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"150\" x2=\"180\" y2=\"150\" stroke-width=\"2.8\"/>",
      "<path d=\"M40 150 Q100 95 160 150\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"60\" cy=\"140\" r=\"12\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"140\" cy=\"140\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 55 Q50 45 65 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>",
      "<path d=\"M50 162 Q100 155 150 162\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha base do morro rochoso e a muralha principal de pedra.",
      "2. Desenhe as três torres verticais (torre central mais alta e duas laterais).",
      "3. Faça os telhados cônicos pontiagudos com bandeirinhas tremulando.",
      "4. Desenhe o grande portão em arco com grade levadiça e ameias de pedra.",
      "5. Adicione as janelinhas seteiras e a textura dos blocos de cantaria."
    ],
    "layers": [
      "<line x1=\"25\" y1=\"165\" x2=\"175\" y2=\"165\" stroke-width=\"2.8\"/>\n          <rect x=\"55\" y=\"110\" width=\"90\" height=\"55\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"42\" y=\"85\" width=\"26\" height=\"80\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"70\" width=\"30\" height=\"95\" fill=\"none\" stroke-width=\"2.8\"/>\n          <rect x=\"132\" y=\"85\" width=\"26\" height=\"80\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"55,55 38,85 72,85\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"100,38 80,70 120,70\" fill=\"none\" stroke-width=\"2.8\"/>\n          <polygon points=\"145,55 128,85 162,85\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"100\" y1=\"38\" x2=\"100\" y2=\"28\" stroke-width=\"2\"/>\n          <polygon points=\"100,28 112,23 100,18\" fill=\"#ef4444\"/>",
      "<path d=\"M88 165 L88 135 C88 122 112 122 112 135 L112 165 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"94\" y1=\"135\" x2=\"94\" y2=\"165\" stroke-width=\"1.8\"/>\n          <line x1=\"106\" y1=\"135\" x2=\"106\" y2=\"165\" stroke-width=\"1.8\"/>",
      "<rect x=\"52\" y=\"102\" width=\"6\" height=\"12\" rx=\"2\" fill=\"#1e293b\"/>\n          <rect x=\"142\" y=\"102\" width=\"6\" height=\"12\" rx=\"2\" fill=\"#1e293b\"/>\n          <path d=\"M70 110 L70 105 L76 105 L76 110 M124 110 L124 105 L130 105 L130 110\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha do horizonte do oceano e o arco da praia de areia.",
      "2. Desenhe o tronco curvado e anelado do coqueiro tropical.",
      "3. Faça a copa exuberante de folhas pontiagudas de palmeira e cocos.",
      "4. Desenhe o grande sol radiante no céu e as ondas do mar quebrando suavemente.",
      "5. Adicione gaivotas voando na brisa marinha e conchinhas na areia."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"125\" x2=\"180\" y2=\"125\" stroke-width=\"2.5\"/>\n          <path d=\"M20 160 Q80 135 180 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M135 155 C125 115 138 95 142 75\" fill=\"none\" stroke-width=\"5\" stroke-linecap=\"round\"/>",
      "<path d=\"M142 75 Q115 62 105 82 M142 75 Q132 50 145 42 M142 75 Q168 55 178 72 M142 75 Q162 88 152 102 M142 75 Q125 80 115 95\" fill=\"none\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>\n            <circle cx=\"138\" cy=\"78\" r=\"3.5\" fill=\"#1e293b\"/>\n            <circle cx=\"145\" cy=\"80\" r=\"3.5\" fill=\"#1e293b\"/>",
      "<circle cx=\"55\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M35 138 Q55 132 75 138 T115 138\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>",
      "<path d=\"M75 52 Q82 46 89 52 Q96 46 103 52\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 Q110 55 115 60 Q120 55 125 60\" fill=\"none\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace os níveis de terreno e as margens da floresta.",
      "2. Desenhe a queda d água em véu descendo pelo penhasco.",
      "3. Faça as copas volumosas das árvores cheias de folhas.",
      "4. Adicione as pedras arredondadas no chão e arbustos floridos.",
      "5. Finalize com raios de sol filtrando pela copa das árvores."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"165\" x2=\"180\" y2=\"165\" stroke-width=\"2.5\"/>\n          <path d=\"M20 120 Q60 115 90 125\" stroke-width=\"2.5\"/>",
      "<path d=\"M90 125 L90 165 M115 125 L115 165\" stroke-width=\"2.5\"/>\n            <path d=\"M95 128 L95 162 M102 128 L102 162 M110 128 L110 162\" stroke=\"#0ea5e9\" stroke-width=\"1.8\" stroke-dasharray=\"4 2\"/>",
      "<ellipse cx=\"102\" cy=\"168\" rx=\"24\" ry=\"6\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"160\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"155\" cy=\"160\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"168\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M35 152 Q38 142 42 152 M140 152 Q143 140 147 152\" stroke=\"#10b981\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace os níveis de terreno e as margens da floresta.",
      "2. Desenhe os troncos fortes dos pinheiros e carvalhos.",
      "3. Faça as copas volumosas das árvores cheias de folhas.",
      "4. Adicione as pedras arredondadas no chão e arbustos floridos.",
      "5. Finalize com raios de sol filtrando pela copa das árvores."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"165\" x2=\"180\" y2=\"165\" stroke-width=\"2.5\"/>\n          <path d=\"M20 120 Q60 115 90 125\" stroke-width=\"2.5\"/>",
      "<rect x=\"65\" y=\"115\" width=\"14\" height=\"50\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"125\" y=\"105\" width=\"16\" height=\"60\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"72\" cy=\"95\" r=\"28\" fill=\"none\" stroke-width=\"2.8\"/>\n            <polygon points=\"133,55 105,110 160,110\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"45\" cy=\"160\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"155\" cy=\"160\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"168\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M35 152 Q38 142 42 152 M140 152 Q143 140 147 152\" stroke=\"#10b981\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace a linha base do solo e o vale entre as elevações.",
      "2. Desenhe o grande pico pontiagudo central da montanha mais alta.",
      "3. Faça os dois picos secundários sobrepostos nas laterais.",
      "4. Desenhe as calotas de neve eterna com bordas em ziguezague nos topos.",
      "5. Adicione pinheiros coníferos na base e nuvens passando pelos cumes."
    ],
    "layers": [
      "<line x1=\"20\" y1=\"160\" x2=\"180\" y2=\"160\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,55 45,160 155,160\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<polygon points=\"55,85 20,160 90,160\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <polygon points=\"145,75 105,160 185,160\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M85 85 L92 92 L100 88 L108 94 L115 85\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M45 105 L50 110 L55 108 L62 112 L67 105\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M132 98 L138 104 L145 100 L152 105 L158 98\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"35,160 30,145 40,145\" fill=\"#1e293b\"/>\n          <polygon points=\"50,160 45,142 55,142\" fill=\"#1e293b\"/>\n          <polygon points=\"160,160 155,145 165,145\" fill=\"#1e293b\"/>\n          <path d=\"M125 45 Q135 38 145 45 Q155 38 165 45\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Desenhe as duas nuvens brancas fofas apoiadas nas laterais.",
      "2. Trace o arco superior mais externo do arco-íris perfeito.",
      "3. Faça as faixas curvas paralelas interiores dividindo as cores.",
      "4. Desenhe o sol alegre espiando por trás de uma das nuvens.",
      "5. Adicione gotinhas de chuva brilhante ou corações caindo."
    ],
    "layers": [
      "<path d=\"M30 145 C20 145 20 130 30 130 C30 115 50 115 55 125 C65 115 80 125 75 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M125 145 C115 145 115 130 125 130 C125 115 145 115 150 125 C160 115 175 125 170 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M45 125 C45 60 155 60 155 125\" fill=\"none\" stroke-width=\"3\"/>",
      "<path d=\"M52 125 C52 70 148 70 148 125\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M59 125 C59 80 141 80 141 125\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M66 125 C66 90 134 90 134 125\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.2\"/>\n          <line x1=\"100\" y1=\"36\" x2=\"100\" y2=\"28\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"42\" x2=\"74\" y2=\"36\" stroke-width=\"2\"/>\n          <line x1=\"120\" y1=\"42\" x2=\"126\" y2=\"36\" stroke-width=\"2\"/>",
      "<circle cx=\"65\" cy=\"165\" r=\"2\" fill=\"#0ea5e9\"/>\n          <circle cx=\"95\" cy=\"170\" r=\"2\" fill=\"#0ea5e9\"/>\n          <circle cx=\"135\" cy=\"165\" r=\"2\" fill=\"#0ea5e9\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Trace as dunas de areia onduladas do leito oceânico.",
      "2. Desenhe os corais ramificados cheios de pontas arredondadas.",
      "3. Faça as algas marinhas compridas ondulando suavemente na água.",
      "4. Adicione uma linda concha aberta no solo com uma pérola reluzente.",
      "5. Finalize com um cardume de pequenos peixinhos nadando e bolhas."
    ],
    "layers": [
      "<path d=\"M20 160 Q60 148 100 160 T180 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M45 160 C40 135 48 120 55 125 C62 118 68 135 62 145 C75 140 75 155 70 160\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M145 160 Q135 130 145 110 T138 75\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M158 160 Q168 135 158 115 T165 85\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M92 165 C85 152 115 152 108 165 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"100\" cy=\"158\" r=\"3.5\" fill=\"#fef08a\"/>",
      "<path d=\"M75 85 C85 80 92 85 90 90 C85 92 80 88 75 85 Z\" fill=\"none\" stroke-width=\"1.8\"/>\n          <circle cx=\"100\" cy=\"80\" r=\"2.5\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>\n          <circle cx=\"105\" cy=\"65\" r=\"4\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-frame\" opacity=\"0.45\">\n    <rect x=\"15\" y=\"25\" width=\"170\" height=\"150\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  </g>"
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
      "1. Desenhe a silhueta aerodinâmica baixa do chassi do carro.",
      "2. Trace o cockpit com para-brisa inclinado e assento do piloto.",
      "3. Faça as duas rodas largas com calotas de competição.",
      "4. Adicione o grande aerofólio traseiro e o número esportivo.",
      "5. Finalize os escapamentos velozes e linhas de movimento na pista."
    ],
    "layers": [
      "<path d=\"M35 140 L50 115 L120 115 L155 130 L168 140 L165 155 L35 155 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 115 L80 90 L125 90 L140 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"155\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"65\" cy=\"155\" r=\"7\" fill=\"#1e293b\"/>\n          <circle cx=\"140\" cy=\"155\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"140\" cy=\"155\" r=\"7\" fill=\"#1e293b\"/>",
      "<circle cx=\"102\" cy=\"135\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <text x=\"98\" y=\"140\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#1e293b\">7</text>\n          <path d=\"M30 118 L45 118 L40 135\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<path d=\"M20 150 L10 150 M25 155 L5 155\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"162\" cy=\"138\" r=\"4\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a fuselagem cilíndrica aerodinâmica com o bico arredondado.",
      "2. Trace as grandes asas enflechadas abertas nas laterais.",
      "3. Faça o leme vertical de cauda e os estabilizadores horizontais.",
      "4. Desenhe as turbinas a jato em cápsulas sob as asas e o para-brisa da cabine.",
      "5. Adicione a fileira de janelinhas ovais de passageiros e nuvens no céu."
    ],
    "layers": [
      "<path d=\"M30 110 C45 95 150 95 170 110 C150 125 45 125 30 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M90 102 L110 50 L128 50 L115 102 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M90 118 L110 170 L128 170 L115 118 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"155,102 175,68 185,68 172,102\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"160,118 175,135 182,135 170,118\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<rect x=\"95\" y=\"65\" width=\"20\" height=\"8\" rx=\"4\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"95\" y=\"147\" width=\"20\" height=\"8\" rx=\"4\" fill=\"none\" stroke-width=\"2\"/>\n          <path d=\"M38 106 Q45 102 52 108\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"65\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"78\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"91\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"104\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"117\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"130\" cy=\"110\" r=\"2.5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo cilíndrico vertical e o nariz cônico pontiagudo no topo.",
      "2. Trace as três aletas triangulares estabilizadoras na base.",
      "3. Faça a escotilha redonda com aro de rebites no centro.",
      "4. Desenhe as labaredas de fogo de propulsão saindo da tubeira inferior.",
      "5. Finalize com estrelas cintilantes e planetas ao redor no espaço."
    ],
    "layers": [
      "<path d=\"M100 35 C85 70 85 130 85 145 L115 145 C115 130 115 70 100 35 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 125 L60 155 L85 145 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <path d=\"M115 125 L140 155 L115 145 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <rect x=\"92\" y=\"145\" width=\"16\" height=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"90\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"100\" cy=\"90\" r=\"9\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M92 151 Q100 178 95 185 Q100 175 105 185 Q100 178 108 151 Z\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n          <path d=\"M96 151 Q100 168 104 151 Z\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"78\" r=\"1\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"102\" r=\"1\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"90\" r=\"1\" fill=\"#1e293b\"/>\n          <circle cx=\"112\" cy=\"90\" r=\"1\" fill=\"#1e293b\"/>\n          <path d=\"M85 65 L115 65\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o casco arqueado e flutuante do barco sobre a linha d'água.",
      "2. Trace o mastro vertical alto e a travessa da retranca.",
      "3. Faça a grande vela triangular enfunada pelo vento e a bujarrona dianteira.",
      "4. Adicione a bandeirinha no topo e a âncora lateral.",
      "5. Finalize as ondas do mar batendo no casco e gaivotas voando."
    ],
    "layers": [
      "<path d=\"M45 135 L60 165 L140 165 L160 135 Z\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<line x1=\"100\" y1=\"50\" x2=\"100\" y2=\"135\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M102 55 Q145 90 102 125 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M98 65 Q65 95 98 125 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,50 120,44 100,38\" fill=\"#ef4444\"/>\n            <circle cx=\"135\" cy=\"145\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 168 Q65 158 100 168 T170 168\" stroke=\"#0ea5e9\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a caldeira cilíndrica horizontal e a cabine alta do maquinista.",
      "2. Trace a chaminé clássica vertical e o teto arredondado da cabine.",
      "3. Faça a grande roda motriz traseira e as duas rodas dianteiras nos trilhos.",
      "4. Desenhe as bielas de ferro conectando as rodas e a janela da cabine.",
      "5. Adicione nuvens fofas de fumaça de vapor saindo da chaminé."
    ],
    "layers": [
      "<rect x=\"50\" y=\"105\" width=\"75\" height=\"45\" rx=\"6\" fill=\"none\" stroke-width=\"2.8\"/>\n          <rect x=\"115\" y=\"80\" width=\"45\" height=\"70\" rx=\"4\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"62,105 58,80 72,80 68,105\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M112 80 Q137 72 162 80\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <polygon points=\"38,150 50,135 50,150\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"70\" cy=\"155\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"95\" cy=\"155\" r=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"138\" cy=\"150\" r=\"18\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"70\" y1=\"155\" x2=\"138\" y2=\"150\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <rect x=\"125\" y=\"92\" width=\"22\" height=\"18\" rx=\"3\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"65\" cy=\"68\" r=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <circle cx=\"60\" cy=\"52\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <circle cx=\"50\" cy=\"35\" r=\"16\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabine arredondada com o amplo vidro do para-brisa.",
      "2. Trace a cauda longa horizontal com o pequeno rotor traseiro na ponta.",
      "3. Faça os esquis de pouso resistentes fixados na base da cabine.",
      "4. Desenhe o mastro superior e as duas pás longas da hélice principal.",
      "5. Adicione a porta lateral, farol de resgate e linhas de rotação."
    ],
    "layers": [
      "<path d=\"M55 125 C45 95 110 90 125 120 C125 145 65 145 55 125 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M125 115 L175 110 L175 100 L180 100 L180 118 L125 122 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <ellipse cx=\"178\" cy=\"100\" rx=\"3\" ry=\"10\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"68\" y1=\"138\" x2=\"65\" y2=\"155\" stroke-width=\"2.5\"/>\n          <line x1=\"105\" y1=\"138\" x2=\"108\" y2=\"155\" stroke-width=\"2.5\"/>\n          <line x1=\"50\" y1=\"155\" x2=\"125\" y2=\"155\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<rect x=\"85\" y=\"90\" width=\"8\" height=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"30\" y1=\"90\" x2=\"150\" y2=\"90\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M60 110 Q78 98 88 120\" stroke-width=\"2.2\"/>\n          <rect x=\"95\" y=\"110\" width=\"18\" height=\"18\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o casco em cápsula oval alongada do submarino.",
      "2. Trace a torre de comando no topo com o periscópio apontado para a superfície.",
      "3. Faça a hélice propulsora na cauda traseira com pás curvas.",
      "4. Desenhe as três escotilhas circulares com aros de rebites.",
      "5. Adicione bolhas de ar subindo e peixinhos nadando nas profundezas."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"125\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"85\" y=\"82\" width=\"26\" height=\"18\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M92 82 L92 65 L102 65\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<polygon points=\"155,125 170,110 170,140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"125\" r=\"9\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"100\" cy=\"125\" r=\"9\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"125\" cy=\"125\" r=\"9\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"45\" cy=\"95\" r=\"3\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/>\n          <circle cx=\"55\" cy=\"75\" r=\"4.5\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/>\n          <circle cx=\"65\" cy=\"55\" r=\"6\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Caminhão de Bombeiros.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a grande roda traseira tratorada e o capô robusto do motor.",
      "2. Trace a cabine com teto reto e a roda dianteira menor.",
      "3. Adicione as garras tratoradas nas rodas para trabalho no campo.",
      "4. Desenhe a chaminé vertical de escape e a grade do radiador.",
      "5. Finalize o assento do operador, o volante e o farol dianteiro."
    ],
    "layers": [
      "<circle cx=\"135\" cy=\"145\" r=\"28\" fill=\"none\" stroke-width=\"3.2\"/>\n          <rect x=\"50\" y=\"115\" width=\"55\" height=\"35\" rx=\"4\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"62\" cy=\"155\" r=\"15\" fill=\"none\" stroke-width=\"2.8\"/>\n          <path d=\"M105 115 L105 85 L145 85 L145 125\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M135 120 L135 128 M135 162 L135 170 M112 145 L120 145 M150 145 L158 145\" stroke-width=\"3\"/>\n          <circle cx=\"135\" cy=\"145\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"72\" y1=\"115\" x2=\"72\" y2=\"85\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n          <rect x=\"52\" y=\"122\" width=\"6\" height=\"20\" fill=\"#1e293b\"/>",
      "<line x1=\"115\" y1=\"105\" x2=\"122\" y2=\"95\" stroke-width=\"2.5\"/>\n          <circle cx=\"48\" cy=\"125\" r=\"4\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Ônibus Escolar Amarelo.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Balão de Ar Quente.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as duas rodas redondas idênticas com pneus e cubos centrais.",
      "2. Trace o quadro geométrico em triângulos conectando as rodas.",
      "3. Faça os pedais com a coroa dentada no centro e o selim confortável.",
      "4. Desenhe a coluna de direção com o guidão ergonômico e cestinha de flores.",
      "5. Adicione os raios metálicos das rodas e a correntinha de tração."
    ],
    "layers": [
      "<circle cx=\"60\" cy=\"145\" r=\"25\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"140\" cy=\"145\" r=\"25\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"60\" y1=\"145\" x2=\"95\" y2=\"145\" stroke-width=\"2.5\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"85\" y2=\"105\" stroke-width=\"2.5\"/>\n          <line x1=\"60\" y1=\"145\" x2=\"85\" y2=\"105\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"105\" x2=\"128\" y2=\"105\" stroke-width=\"2.5\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"128\" y2=\"105\" stroke-width=\"2.5\"/>\n          <line x1=\"140\" y1=\"145\" x2=\"128\" y2=\"105\" stroke-width=\"2.5\"/>",
      "<line x1=\"128\" y1=\"105\" x2=\"124\" y2=\"88\" stroke-width=\"2.8\"/>\n          <path d=\"M115 88 Q125 85 135 88\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M78 102 Q88 100 95 102\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"95\" cy=\"145\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"100\" y2=\"155\" stroke-width=\"2.5\"/>\n          <rect x=\"125\" y=\"88\" width=\"14\" height=\"12\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"60\" y1=\"125\" x2=\"60\" y2=\"165\" stroke-width=\"1.5\"/>\n          <line x1=\"40\" y1=\"145\" x2=\"80\" y2=\"145\" stroke-width=\"1.5\"/>\n          <line x1=\"140\" y1=\"125\" x2=\"140\" y2=\"165\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"145\" x2=\"160\" y2=\"145\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as duas rodas redondas idênticas com pneus e cubos centrais.",
      "2. Trace o quadro geométrico em triângulos conectando as rodas.",
      "3. Faça os pedais com a coroa dentada no centro e o selim confortável.",
      "4. Desenhe a coluna de direção com o guidão ergonômico e cestinha de flores.",
      "5. Adicione os raios metálicos das rodas e a correntinha de tração."
    ],
    "layers": [
      "<circle cx=\"60\" cy=\"145\" r=\"25\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"140\" cy=\"145\" r=\"25\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"60\" y1=\"145\" x2=\"95\" y2=\"145\" stroke-width=\"2.5\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"85\" y2=\"105\" stroke-width=\"2.5\"/>\n          <line x1=\"60\" y1=\"145\" x2=\"85\" y2=\"105\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"105\" x2=\"128\" y2=\"105\" stroke-width=\"2.5\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"128\" y2=\"105\" stroke-width=\"2.5\"/>\n          <line x1=\"140\" y1=\"145\" x2=\"128\" y2=\"105\" stroke-width=\"2.5\"/>",
      "<line x1=\"128\" y1=\"105\" x2=\"124\" y2=\"88\" stroke-width=\"2.8\"/>\n          <path d=\"M115 88 Q125 85 135 88\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M78 102 Q88 100 95 102\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"95\" cy=\"145\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"100\" y2=\"155\" stroke-width=\"2.5\"/>\n          <rect x=\"125\" y=\"88\" width=\"14\" height=\"12\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"60\" y1=\"125\" x2=\"60\" y2=\"165\" stroke-width=\"1.5\"/>\n          <line x1=\"40\" y1=\"145\" x2=\"80\" y2=\"145\" stroke-width=\"1.5\"/>\n          <line x1=\"140\" y1=\"125\" x2=\"140\" y2=\"165\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"145\" x2=\"160\" y2=\"145\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o casco arqueado e flutuante do barco sobre a linha d'água.",
      "2. Trace o mastro vertical alto e a travessa da retranca.",
      "3. Faça a grande vela triangular enfunada pelo vento e a bujarrona dianteira.",
      "4. Adicione a bandeira com a caveira pirata no mastro.",
      "5. Finalize as ondas do mar batendo no casco e gaivotas voando."
    ],
    "layers": [
      "<path d=\"M45 135 L60 165 L140 165 L160 135 Z\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<line x1=\"100\" y1=\"50\" x2=\"100\" y2=\"135\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M102 55 Q145 90 102 125 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M98 65 Q65 95 98 125 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"100\" y=\"42\" width=\"20\" height=\"12\" fill=\"#1e293b\"/>\n            <circle cx=\"110\" cy=\"48\" r=\"2.5\" fill=\"#ffffff\"/>",
      "<path d=\"M30 168 Q65 158 100 168 T170 168\" stroke=\"#0ea5e9\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta aerodinâmica baixa do chassi do carro.",
      "2. Trace o cockpit com para-brisa inclinado e assento do piloto.",
      "3. Faça as duas rodas largas com calotas de competição.",
      "4. Adicione as portas, faróis e retrovisores.",
      "5. Finalize os escapamentos velozes e linhas de movimento na pista."
    ],
    "layers": [
      "<path d=\"M35 140 L50 115 L120 115 L155 130 L168 140 L165 155 L35 155 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 115 L80 90 L125 90 L140 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"155\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"65\" cy=\"155\" r=\"7\" fill=\"#1e293b\"/>\n          <circle cx=\"140\" cy=\"155\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"140\" cy=\"155\" r=\"7\" fill=\"#1e293b\"/>",
      "<circle cx=\"102\" cy=\"135\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <text x=\"98\" y=\"140\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#1e293b\">7</text>\n          <path d=\"M30 118 L45 118 L40 135\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<path d=\"M20 150 L10 150 M25 155 L5 155\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"162\" cy=\"138\" r=\"4\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta aerodinâmica baixa do chassi do carro.",
      "2. Trace o cockpit com para-brisa inclinado e assento do piloto.",
      "3. Faça as duas rodas largas com calotas de competição.",
      "4. Adicione as portas, faróis e retrovisores.",
      "5. Finalize os escapamentos velozes e linhas de movimento na pista."
    ],
    "layers": [
      "<path d=\"M35 140 L50 115 L120 115 L155 130 L168 140 L165 155 L35 155 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 115 L80 90 L125 90 L140 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"155\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"65\" cy=\"155\" r=\"7\" fill=\"#1e293b\"/>\n          <circle cx=\"140\" cy=\"155\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"140\" cy=\"155\" r=\"7\" fill=\"#1e293b\"/>",
      "<circle cx=\"102\" cy=\"135\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <text x=\"98\" y=\"140\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#1e293b\">7</text>\n          <path d=\"M30 118 L45 118 L40 135\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<path d=\"M20 150 L10 150 M25 155 L5 155\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"162\" cy=\"138\" r=\"4\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Escavadeira com Concha.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Caminhão Guincho.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Skate Radical com Rodinhas.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Patinete com Guidão.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Patins Clássico.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Carrinho de Bebê.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Cabine de Teleférico.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Drone com Quatro Hélices.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o casco arqueado e flutuante do barco sobre a linha d'água.",
      "2. Trace o mastro vertical alto e a travessa da retranca.",
      "3. Faça a grande vela triangular enfunada pelo vento e a bujarrona dianteira.",
      "4. Adicione a bandeirinha no topo e a âncora lateral.",
      "5. Finalize as ondas do mar batendo no casco e gaivotas voando."
    ],
    "layers": [
      "<path d=\"M45 135 L60 165 L140 165 L160 135 Z\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<line x1=\"100\" y1=\"50\" x2=\"100\" y2=\"135\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M102 55 Q145 90 102 125 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M98 65 Q65 95 98 125 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,50 120,44 100,38\" fill=\"#ef4444\"/>\n            <circle cx=\"135\" cy=\"145\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 168 Q65 158 100 168 T170 168\" stroke=\"#0ea5e9\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Caminhão Baú de Carga.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Caminhão Caçamba Basculante.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Paraquedas Aberto no Céu.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Hovercraft Anfíbio.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta aerodinâmica baixa do chassi do carro.",
      "2. Trace o cockpit com para-brisa inclinado e assento do piloto.",
      "3. Faça as duas rodas largas com calotas de competição.",
      "4. Adicione o grande aerofólio traseiro e o número esportivo.",
      "5. Finalize os escapamentos velozes e linhas de movimento na pista."
    ],
    "layers": [
      "<path d=\"M35 140 L50 115 L120 115 L155 130 L168 140 L165 155 L35 155 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 115 L80 90 L125 90 L140 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"155\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"65\" cy=\"155\" r=\"7\" fill=\"#1e293b\"/>\n          <circle cx=\"140\" cy=\"155\" r=\"16\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"140\" cy=\"155\" r=\"7\" fill=\"#1e293b\"/>",
      "<circle cx=\"102\" cy=\"135\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <text x=\"98\" y=\"140\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#1e293b\">7</text>\n          <path d=\"M30 118 L45 118 L40 135\" stroke-width=\"2.8\" stroke-linecap=\"round\"/>",
      "<path d=\"M20 150 L10 150 M25 155 L5 155\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"162\" cy=\"138\" r=\"4\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo retangular longo e reto do lápis.",
      "2. Trace o cone triangular da ponta de madeira apontada.",
      "3. Adicione o grafite afiado escuro na ponta do cone.",
      "4. Desenhe a virola metálica com anéis e a borracha rosada no topo.",
      "5. Faça as linhas facetas hexagonais ao longo de todo o corpo."
    ],
    "layers": [
      "<rect x=\"85\" y=\"55\" width=\"30\" height=\"95\" rx=\"2\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"85,150 115,150 100,180\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"95,170 105,170 100,180\" fill=\"#1e293b\"/>",
      "<rect x=\"85\" y=\"42\" width=\"30\" height=\"14\" fill=\"none\" stroke-width=\"2.2\"/>\n            <path d=\"M85 42 C85 28 115 28 115 42 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"55\" x2=\"95\" y2=\"150\" stroke-width=\"1.8\"/>\n            <line x1=\"105\" y1=\"55\" x2=\"105\" y2=\"150\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a curva superior simétrica das duas páginas abertas.",
      "2. Trace a base inferior espelhada com a lombada central.",
      "3. Faça a espessura das folhas laterais sobrepostas.",
      "4. Desenhe as linhas de texto poético simuladas em cada página.",
      "5. Adicione a fita marcadora de páginas pendurada e estrelinhas de imaginação."
    ],
    "layers": [
      "<path d=\"M100 85 C80 75 50 78 40 85 L40 145 C50 138 80 135 100 145 C120 135 150 138 160 145 L160 85 C150 78 120 75 100 85 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"85\" x2=\"100\" y2=\"145\" stroke-width=\"2.5\"/>",
      "<path d=\"M40 145 L40 152 C50 145 80 142 100 152 C120 142 150 145 160 152 L160 145\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"50\" y1=\"100\" x2=\"90\" y2=\"100\" stroke-width=\"1.8\"/>\n          <line x1=\"50\" y1=\"112\" x2=\"90\" y2=\"112\" stroke-width=\"1.8\"/>\n          <line x1=\"50\" y1=\"124\" x2=\"85\" y2=\"124\" stroke-width=\"1.8\"/>\n          <line x1=\"110\" y1=\"100\" x2=\"150\" y2=\"100\" stroke-width=\"1.8\"/>\n          <line x1=\"110\" y1=\"112\" x2=\"150\" y2=\"112\" stroke-width=\"1.8\"/>\n          <line x1=\"110\" y1=\"124\" x2=\"145\" y2=\"124\" stroke-width=\"1.8\"/>",
      "<path d=\"M100 145 Q105 160 95 172\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo oval alto e ergonômico da mochila.",
      "2. Trace o grande bolso frontal arredondado com zíper.",
      "3. Faça a alça de mão superior e as alças acolchoadas dos ombros.",
      "4. Desenhe os bolsos laterais de redinha para garrafinha d'água.",
      "5. Adicione puxadores divertidos nos zíperes e chaveiro decorativo."
    ],
    "layers": [
      "<rect x=\"65\" y=\"70\" width=\"70\" height=\"95\" rx=\"20\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"72\" y=\"110\" width=\"56\" height=\"45\" rx=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M78 118 L122 118\" stroke-width=\"2\" stroke-dasharray=\"2 2\"/>",
      "<path d=\"M88 70 C88 52 112 52 112 70\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M68 85 Q50 110 65 140\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M132 85 Q150 110 135 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"58\" y=\"115\" width=\"8\" height=\"28\" rx=\"3\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"134\" y=\"115\" width=\"8\" height=\"28\" rx=\"3\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"92\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"124\" cy=\"118\" r=\"2.5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe os dois anéis plásticos ovais de apoio para os dedos.",
      "2. Trace o pino central redondo de articulação das lâminas.",
      "3. Faça as duas lâminas de aço arredondadas sem ponta cruzadas.",
      "4. Adicione o gume afiado desenhado nas lâminas metálicas.",
      "5. Finalize com pontinhos de reflexo de aço polido."
    ],
    "layers": [
      "<ellipse cx=\"75\" cy=\"150\" rx=\"15\" ry=\"18\" fill=\"none\" stroke-width=\"2.8\"/>\n            <ellipse cx=\"125\" cy=\"150\" rx=\"15\" ry=\"18\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"4.5\" fill=\"#1e293b\"/>",
      "<path d=\"M85 135 L98 115 L78 45 Q85 42 90 48 L104 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M115 135 L102 115 L122 45 Q115 42 110 48 L96 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"82\" y1=\"55\" x2=\"98\" y2=\"110\" stroke-width=\"1.8\"/>\n            <line x1=\"118\" y1=\"55\" x2=\"102\" y2=\"110\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"75\" cy=\"150\" rx=\"8\" ry=\"10\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"125\" cy=\"150\" rx=\"8\" ry=\"10\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe os dois anéis plásticos ovais de apoio para os dedos.",
      "2. Trace o pino central redondo de articulação das lâminas.",
      "3. Faça as duas lâminas de aço arredondadas sem ponta cruzadas.",
      "4. Adicione o gume afiado desenhado nas lâminas metálicas.",
      "5. Finalize com pontinhos de reflexo de aço polido."
    ],
    "layers": [
      "<ellipse cx=\"75\" cy=\"150\" rx=\"15\" ry=\"18\" fill=\"none\" stroke-width=\"2.8\"/>\n            <ellipse cx=\"125\" cy=\"150\" rx=\"15\" ry=\"18\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"4.5\" fill=\"#1e293b\"/>",
      "<path d=\"M85 135 L98 115 L78 45 Q85 42 90 48 L104 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M115 135 L102 115 L122 45 Q115 42 110 48 L96 115 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"82\" y1=\"55\" x2=\"98\" y2=\"110\" stroke-width=\"1.8\"/>\n            <line x1=\"118\" y1=\"55\" x2=\"102\" y2=\"110\" stroke-width=\"1.8\"/>",
      "<ellipse cx=\"75\" cy=\"150\" rx=\"8\" ry=\"10\" fill=\"none\" stroke-width=\"2\"/>\n            <ellipse cx=\"125\" cy=\"150\" rx=\"8\" ry=\"10\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Paleta de Tintas com Pincel.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a tela plana retangular aberta do computador portátil.",
      "2. Trace a moldura interna da tela e a câmera web no topo.",
      "3. Faça a base com teclado inclinado em perspectiva.",
      "4. Desenhe as teclas ordenadas e o trackpad ergonômico no centro.",
      "5. Adicione um desenho divertido na tela iluminada."
    ],
    "layers": [
      "<rect x=\"60\" y=\"60\" width=\"80\" height=\"55\" rx=\"4\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"65\" y=\"65\" width=\"70\" height=\"45\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"100\" cy=\"62\" r=\"1.5\" fill=\"#1e293b\"/>",
      "<polygon points=\"50,140 150,140 140,115 60,115\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"65\" y=\"118\" width=\"70\" height=\"14\" fill=\"none\" stroke-width=\"1.8\"/>\n            <rect x=\"90\" y=\"134\" width=\"20\" height=\"5\" rx=\"1\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<path d=\"M92 88 Q100 80 108 88\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça quadrada metálica e o corpo cúbico do robô amigo.",
      "2. Trace a antena com bolinha no topo e as orelhas em parafuso.",
      "3. Faça os braços mecânicos sanfonados com pinças e pernas de mola.",
      "4. Desenhe os olhos digitais luminosos, boca de grade e botões no peito.",
      "5. Adicione o mostrador de energia e parafusos nos cantos."
    ],
    "layers": [
      "<rect x=\"75\" y=\"55\" width=\"50\" height=\"42\" rx=\"8\" fill=\"none\" stroke-width=\"2.8\"/>\n            <rect x=\"70\" y=\"105\" width=\"60\" height=\"50\" rx=\"8\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"55\" x2=\"100\" y2=\"35\" stroke-width=\"2.5\"/>\n            <circle cx=\"100\" cy=\"32\" r=\"5\" fill=\"#f59e0b\"/>\n            <rect x=\"68\" y=\"70\" width=\"7\" height=\"12\" rx=\"2\" fill=\"#1e293b\"/>\n            <rect x=\"125\" y=\"70\" width=\"7\" height=\"12\" rx=\"2\" fill=\"#1e293b\"/>",
      "<path d=\"M70 115 L52 125 L58 140\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n            <circle cx=\"58\" cy=\"142\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <path d=\"M130 115 L148 125 L142 140\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n            <circle cx=\"142\" cy=\"142\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n            <rect x=\"80\" y=\"155\" width=\"12\" height=\"22\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"108\" y=\"155\" width=\"12\" height=\"22\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"88\" cy=\"72\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"88\" cy=\"72\" r=\"2.5\" fill=\"#0ea5e9\"/>\n            <circle cx=\"112\" cy=\"72\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n            <circle cx=\"112\" cy=\"72\" r=\"2.5\" fill=\"#0ea5e9\"/>\n            <line x1=\"88\" y1=\"85\" x2=\"112\" y2=\"85\" stroke-width=\"2\"/>",
      "<circle cx=\"85\" cy=\"125\" r=\"4\" fill=\"#ef4444\"/>\n            <circle cx=\"100\" cy=\"125\" r=\"4\" fill=\"#10b981\"/>\n            <circle cx=\"115\" cy=\"125\" r=\"4\" fill=\"#f59e0b\"/>\n            <rect x=\"82\" y=\"136\" width=\"36\" height=\"10\" rx=\"2\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o bulbo de vidro arredondado em formato de gota clássica.",
      "2. Trace o bocal metálico com roscas na base.",
      "3. Faça o contato elétrico na ponta inferior.",
      "4. Desenhe o filamento incandescente em \"M\" brilhando no centro.",
      "5. Adicione raios cintilantes de boas ideias ao redor da lâmpada."
    ],
    "layers": [
      "<path d=\"M80 130 C65 115 60 85 80 65 C100 45 120 45 140 65 C160 85 155 115 140 130 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"85\" y=\"130\" width=\"30\" height=\"16\" rx=\"2\" fill=\"none\" stroke-width=\"2.5\"/>\n            <line x1=\"85\" y1=\"135\" x2=\"115\" y2=\"135\" stroke-width=\"1.8\"/>\n            <line x1=\"85\" y1=\"141\" x2=\"115\" y2=\"141\" stroke-width=\"1.8\"/>",
      "<path d=\"M92 146 Q100 152 108 146\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M95 115 L95 95 L100 102 L105 95 L105 115\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"28\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n            <line x1=\"60\" y1=\"60\" x2=\"50\" y2=\"52\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n            <line x1=\"140\" y1=\"60\" x2=\"150\" y2=\"52\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n            <line x1=\"50\" y1=\"95\" x2=\"38\" y2=\"95\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n            <line x1=\"150\" y1=\"95\" x2=\"162\" y2=\"95\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o círculo perfeito da caixa do relógio.",
      "2. Trace os dois sinos metálicos curvos no topo com o martelinho central.",
      "3. Faça os dois pezinhos de apoio angulares na base.",
      "4. Desenhe os ponteiros de horas e minutos e o pontinho central.",
      "5. Adicione as 12 marcações numéricas ao redor do mostrador."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M68 80 C60 68 75 55 85 68 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M132 80 C140 68 125 55 115 68 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <circle cx=\"100\" cy=\"65\" r=\"4\" fill=\"#1e293b\"/>",
      "<line x1=\"72\" y1=\"150\" x2=\"62\" y2=\"165\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n            <line x1=\"128\" y1=\"150\" x2=\"138\" y2=\"165\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"3.5\" fill=\"#1e293b\"/>\n            <line x1=\"100\" y1=\"115\" x2=\"100\" y2=\"90\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n            <line x1=\"100\" y1=\"115\" x2=\"120\" y2=\"115\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"100\" cy=\"80\" r=\"1.5\" fill=\"#1e293b\"/>\n            <circle cx=\"100\" cy=\"150\" r=\"1.5\" fill=\"#1e293b\"/>\n            <circle cx=\"65\" cy=\"115\" r=\"1.5\" fill=\"#1e293b\"/>\n            <circle cx=\"135\" cy=\"115\" r=\"1.5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Telescópio Astronômico.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Microscópio de Cientista.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Lupa de Detetive.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Chave Mágica Dourada.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Cadeado de Ferro.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Bússola com Rosa dos Ventos.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Âncora Náutica de Navio.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo retangular de carvalho e a tampa curva do baú.",
      "2. Trace as faixas reforçadas de ferro com cravos nas bordas.",
      "3. Faça a grande fechadura dourada com buraco de chave no centro.",
      "4. Desenhe as alças laterais de ferro articuladas para transporte.",
      "5. Adicione moedas de ouro e colares de pérola transbordando."
    ],
    "layers": [
      "<rect x=\"55\" y=\"105\" width=\"90\" height=\"55\" rx=\"4\" fill=\"none\" stroke-width=\"2.8\"/>\n            <path d=\"M55 105 C55 75 145 75 145 105 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"75\" y1=\"80\" x2=\"75\" y2=\"160\" stroke-width=\"3\"/>\n            <line x1=\"125\" y1=\"80\" x2=\"125\" y2=\"160\" stroke-width=\"3\"/>",
      "<rect x=\"94\" y=\"100\" width=\"12\" height=\"18\" rx=\"2\" fill=\"none\" stroke-width=\"2.5\"/>\n            <circle cx=\"100\" cy=\"107\" r=\"2\" fill=\"#1e293b\"/>\n            <line x1=\"100\" y1=\"109\" x2=\"100\" y2=\"114\" stroke-width=\"2\"/>",
      "<path d=\"M55 125 C45 125 45 140 55 140\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M145 125 C155 125 155 140 145 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"85\" cy=\"98\" r=\"4\" fill=\"#f59e0b\"/>\n            <circle cx=\"92\" cy=\"95\" r=\"4\" fill=\"#f59e0b\"/>\n            <circle cx=\"110\" cy=\"96\" r=\"4\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Guarda-Chuva Colorido.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Vaso com Lindas Flores.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Câmera Fotográfica.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Xícara Fumegante de Chá.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Regador de Plantas.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Lanterna com Luz Brilhante.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo em formato de oito com curvas harmônicas do violão.",
      "2. Trace o braço longo reto com os trastes de metal.",
      "3. Faça a mão do violão no topo com as seis tarraxas de afinação.",
      "4. Desenhe a boca circular central e o cavalete de suporte das cordas.",
      "5. Estique as cordas retas e adicione notas musicais dançando no ar."
    ],
    "layers": [
      "<path d=\"M85 95 C75 80 90 65 105 75 C115 65 130 80 120 95 C135 115 130 145 110 155 C90 155 80 125 85 95 Z\" fill=\"none\" stroke-width=\"2.8\" transform=\"rotate(-20 100 115)\"/>",
      "<rect x=\"94\" y=\"35\" width=\"12\" height=\"60\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-20 100 65)\"/>",
      "<polygon points=\"98,30 112,30 110,15 96,15\" fill=\"none\" stroke-width=\"2.2\" transform=\"rotate(-20 104 22)\"/>\n            <circle cx=\"95\" cy=\"20\" r=\"2\" fill=\"#1e293b\"/>\n            <circle cx=\"112\" cy=\"20\" r=\"2\" fill=\"#1e293b\"/>",
      "<circle cx=\"104\" cy=\"98\" r=\"10\" fill=\"none\" stroke-width=\"2.2\"/>\n            <rect x=\"98\" y=\"125\" width=\"18\" height=\"6\" rx=\"2\" fill=\"#1e293b\" transform=\"rotate(-20 107 128)\"/>",
      "<line x1=\"104\" y1=\"20\" x2=\"107\" y2=\"128\" stroke-width=\"1.5\"/>\n            <path d=\"M145 70 Q155 60 160 75 M150 72 L160 72\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma estrutural do instrumento musical (Teclado com Teclas Brancas).",
      "2. Trace as partes acústicas ou chaves de sustentação do som.",
      "3. Faça os detalhes que produzem harmonia (teclas, pratos ou campana).",
      "4. Desenhe os apoios firmes e acabamentos metálicos reluzentes.",
      "5. Finalize com claves de sol e notas musicais flutuando."
    ],
    "layers": [
      "<rect x=\"55\" y=\"90\" width=\"90\" height=\"45\" rx=\"6\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"70\" y1=\"90\" x2=\"70\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"85\" y1=\"90\" x2=\"85\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"100\" y1=\"90\" x2=\"100\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"115\" y1=\"90\" x2=\"115\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"130\" y1=\"90\" x2=\"130\" y2=\"135\" stroke-width=\"2\"/>",
      "<rect x=\"66\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>\n            <rect x=\"81\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>\n            <rect x=\"111\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>\n            <rect x=\"126\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>",
      "<line x1=\"65\" y1=\"135\" x2=\"60\" y2=\"168\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n            <line x1=\"135\" y1=\"135\" x2=\"140\" y2=\"168\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M75 60 Q85 45 95 65 M90 55 L100 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma estrutural do instrumento musical (Bateria com Tambores e Pratos).",
      "2. Trace as partes acústicas ou chaves de sustentação do som.",
      "3. Faça os detalhes que produzem harmonia (teclas, pratos ou campana).",
      "4. Desenhe os apoios firmes e acabamentos metálicos reluzentes.",
      "5. Finalize com claves de sol e notas musicais flutuando."
    ],
    "layers": [
      "<rect x=\"55\" y=\"90\" width=\"90\" height=\"45\" rx=\"6\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"70\" y1=\"90\" x2=\"70\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"85\" y1=\"90\" x2=\"85\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"100\" y1=\"90\" x2=\"100\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"115\" y1=\"90\" x2=\"115\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"130\" y1=\"90\" x2=\"130\" y2=\"135\" stroke-width=\"2\"/>",
      "<rect x=\"66\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>\n            <rect x=\"81\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>\n            <rect x=\"111\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>\n            <rect x=\"126\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>",
      "<line x1=\"65\" y1=\"135\" x2=\"60\" y2=\"168\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n            <line x1=\"135\" y1=\"135\" x2=\"140\" y2=\"168\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M75 60 Q85 45 95 65 M90 55 L100 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma estrutural do instrumento musical (Trompete Musical Reluzente).",
      "2. Trace as partes acústicas ou chaves de sustentação do som.",
      "3. Faça os detalhes que produzem harmonia (teclas, pratos ou campana).",
      "4. Desenhe os apoios firmes e acabamentos metálicos reluzentes.",
      "5. Finalize com claves de sol e notas musicais flutuando."
    ],
    "layers": [
      "<rect x=\"55\" y=\"90\" width=\"90\" height=\"45\" rx=\"6\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"70\" y1=\"90\" x2=\"70\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"85\" y1=\"90\" x2=\"85\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"100\" y1=\"90\" x2=\"100\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"115\" y1=\"90\" x2=\"115\" y2=\"135\" stroke-width=\"2\"/>\n            <line x1=\"130\" y1=\"90\" x2=\"130\" y2=\"135\" stroke-width=\"2\"/>",
      "<rect x=\"66\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>\n            <rect x=\"81\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>\n            <rect x=\"111\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>\n            <rect x=\"126\" y=\"90\" width=\"8\" height=\"25\" fill=\"#1e293b\"/>",
      "<line x1=\"65\" y1=\"135\" x2=\"60\" y2=\"168\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n            <line x1=\"135\" y1=\"135\" x2=\"140\" y2=\"168\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M75 60 Q85 45 95 65 M90 55 L100 55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Saxofone Curvo Dourado.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Flauta Doce de Madeira.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Microfone de Show Musical.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o círculo perfeito da bola clássica de futebol.",
      "2. Trace o pentágono central escuro no meio da bola.",
      "3. Conecte os 5 vértices com linhas radiais formando os hexágonos vizinhos.",
      "4. Desenhe os outros pentágonos distribuídos ao redor da curvatura.",
      "5. Adicione as costuras reforçadas e o efeito esférico tridimensional."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"48\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,100 112,108 108,122 92,122 88,108\" fill=\"#1e293b\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"82\" stroke-width=\"2\"/>\n            <line x1=\"112\" y1=\"108\" x2=\"128\" y2=\"102\" stroke-width=\"2\"/>\n            <line x1=\"108\" y1=\"122\" x2=\"120\" y2=\"138\" stroke-width=\"2\"/>\n            <line x1=\"92\" y1=\"122\" x2=\"80\" y2=\"138\" stroke-width=\"2\"/>\n            <line x1=\"88\" y1=\"108\" x2=\"72\" y2=\"102\" stroke-width=\"2\"/>",
      "<polygon points=\"100,82 88,72 94,67 106,67 112,72\" fill=\"#1e293b\"/>\n            <polygon points=\"128,102 138,92 145,98 143,112 135,116\" fill=\"#1e293b\"/>\n            <polygon points=\"72,102 65,116 57,112 55,98 62,92\" fill=\"#1e293b\"/>",
      "<path d=\"M68 85 A40 40 0 0 1 95 70\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica perfeitamente circular de Bola Laranja de Basquete.",
      "2. Trace as faixas decorativas ou curvas de textura esportiva.",
      "3. Faça as linhas estruturais de relevo da bola ou medalha.",
      "4. Desenhe os símbolos esportivos no centro da peça.",
      "5. Finalize os contornos nítidos para colorir em cores vibrantes."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"45\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 115 L145 115\" stroke-width=\"2.5\"/>\n            <path d=\"M100 70 L100 160\" stroke-width=\"2.5\"/>",
      "<path d=\"M68 85 Q100 115 68 145\" fill=\"none\" stroke-width=\"2.2\"/>\n            <path d=\"M132 85 Q100 115 132 145\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M70 90 A35 35 0 0 1 95 75\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a grande taça dourada com curvas harmônicas.",
      "2. Trace as duas alças laterais arqueadas em asa de troféu.",
      "3. Faça a base pesada retangular de mármore e a haste do pedestal.",
      "4. Desenhe a grande estrela de campeão em relevo na frente da taça.",
      "5. Adicione os raios de luz e brilho dourado da grande vitória."
    ],
    "layers": [
      "<path d=\"M68 65 L132 65 L125 110 C125 128 75 128 75 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M68 75 C45 75 45 105 75 105\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n            <path d=\"M132 75 C155 75 155 105 125 105\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<rect x=\"94\" y=\"125\" width=\"12\" height=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n            <rect x=\"75\" y=\"143\" width=\"50\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"100,80 103,88 111,88 105,93 107,101 100,96 93,101 95,93 89,88 97,88\" fill=\"#f59e0b\"/>",
      "<line x1=\"85\" y1=\"153\" x2=\"115\" y2=\"153\" stroke-width=\"2\"/>\n            <path d=\"M80 72 L120 72\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica perfeitamente circular de Medalha com Fita Listrada.",
      "2. Trace as faixas decorativas ou curvas de textura esportiva.",
      "3. Faça as linhas estruturais de relevo da bola ou medalha.",
      "4. Desenhe os símbolos esportivos no centro da peça.",
      "5. Finalize os contornos nítidos para colorir em cores vibrantes."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"45\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 115 L145 115\" stroke-width=\"2.5\"/>\n            <path d=\"M100 70 L100 160\" stroke-width=\"2.5\"/>",
      "<path d=\"M68 85 Q100 115 68 145\" fill=\"none\" stroke-width=\"2.2\"/>\n            <path d=\"M132 85 Q100 115 132 145\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M70 90 A35 35 0 0 1 95 75\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o losango geométrico perfeito da pipa de papel de seda.",
      "2. Trace a vareta vertical reta e a vareta horizontal arqueada em cruz.",
      "3. Faça a cauda longa e sinuosa de rabiola descendo no céu.",
      "4. Adicione os três lacinhos coloridos amarrados ao longo da rabiola.",
      "5. Finalize os padrões decorativos da pipa e nuvens de vento."
    ],
    "layers": [
      "<polygon points=\"100,45 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"100\" y1=\"45\" x2=\"100\" y2=\"145\" stroke-width=\"2.5\"/>\n            <path d=\"M55 95 Q100 80 145 95\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 145 C105 160 85 165 95 180 C105 190 120 185 115 195\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<polygon points=\"90,160 100,163 90,166\" fill=\"#ec4899\"/>\n            <polygon points=\"100,163 110,160 110,166\" fill=\"#ec4899\"/>\n            <polygon points=\"90,178 100,181 90,184\" fill=\"#0ea5e9\"/>\n            <polygon points=\"100,181 110,178 110,184\" fill=\"#0ea5e9\"/>",
      "<polygon points=\"100,45 100,95 55,95\" fill=\"#fef08a\" opacity=\"0.3\"/>\n            <polygon points=\"100,45 145,95 100,95\" fill=\"#bae6fd\" opacity=\"0.3\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Pião de Madeira com Ponta.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Ioiô com Cordinha.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpinho fofo sentado do ursinho.",
      "2. Trace as orelhas redondas com miolo e as patinhas dianteiras abertas.",
      "3. Faça as patas traseiras com coxins ovais nas solas dos pés.",
      "4. Desenhe os olhos de botão, focinho com costura e laço no pescoço.",
      "5. Adicione remendos com costura em \"X\" e o brilho do veludo."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"30\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"100\" cy=\"138\" rx=\"34\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"72\" cy=\"56\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n            <circle cx=\"128\" cy=\"56\" r=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"72\" cy=\"120\" rx=\"10\" ry=\"18\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(25 72 120)\"/>\n            <ellipse cx=\"128\" cy=\"120\" rx=\"10\" ry=\"18\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-25 128 120)\"/>",
      "<ellipse cx=\"78\" cy=\"165\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"122\" cy=\"165\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n            <ellipse cx=\"78\" cy=\"165\" rx=\"7\" ry=\"5\" fill=\"none\" stroke-width=\"1.8\"/>\n            <ellipse cx=\"122\" cy=\"165\" rx=\"7\" ry=\"5\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<circle cx=\"86\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n            <circle cx=\"114\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n            <ellipse cx=\"100\" cy=\"86\" rx=\"9\" ry=\"7\" fill=\"none\" stroke-width=\"2\"/>\n            <polygon points=\"97,84 103,84 100,89\" fill=\"#1e293b\"/>\n            <path d=\"M100 89 L100 93\" stroke-width=\"2\"/>",
      "<path d=\"M92 108 Q100 114 108 108 Q100 102 92 108 Z\" fill=\"#ef4444\"/>\n            <path d=\"M85 130 L95 140 M95 130 L85 140\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Castelo de Blocos de Madeira.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica perfeitamente circular de Bola Inflável Listrada.",
      "2. Trace as faixas decorativas ou curvas de textura esportiva.",
      "3. Faça as linhas estruturais de relevo da bola ou medalha.",
      "4. Desenhe os símbolos esportivos no centro da peça.",
      "5. Finalize os contornos nítidos para colorir em cores vibrantes."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"45\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 115 L145 115\" stroke-width=\"2.5\"/>\n            <path d=\"M100 70 L100 160\" stroke-width=\"2.5\"/>",
      "<path d=\"M68 85 Q100 115 68 145\" fill=\"none\" stroke-width=\"2.2\"/>\n            <path d=\"M132 85 Q100 115 132 145\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M70 90 A35 35 0 0 1 95 75\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Dado com Pontinhos Pretos.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Ferradura da Boa Sorte.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Machado de Lenhador.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Martelo com Prego.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Serrote com Dentes Afiados.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Pazinha e Baldinho de Praia.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Chaleira com Apito de Vapor.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Bule de Café Elegante.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Abajur com Cúpula de Luz.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Espelho Oval com Cabo.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Pente com Dentes Finos.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Escova com Pasta Dental.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Sabonete com Espuma e Bolhas.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Toalha Macia Dobrada.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Travesseiro Fofinho.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Cama com Travesseiro e Cobertor.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Globo Terrestre Giratório.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Calculadora com Visor e Teclas.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as formas geométricas fundamentais de Envelope com Selo de Coração.",
      "2. Trace as linhas de conexão e a silhueta principal equilibrada.",
      "3. Adicione os elementos funcionais e alças ou encaixes.",
      "4. Faça os botões, detalhes e mostradores próprios do objeto.",
      "5. Finalize com contornos precisos para colorir."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"75\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M65 80 L100 50 L135 80\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"5\" fill=\"#1e293b\"/>",
      "<line x1=\"80\" y1=\"140\" x2=\"120\" y2=\"140\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <line x1=\"15\" y1=\"180\" x2=\"185\" y2=\"180\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"30\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"170\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o formato arredondado da maçã com curvas suaves.",
      "2. Trace as covinhas côncavas na parte superior e na base.",
      "3. Faça o cabinho lenhoso curvado saindo do topo da maçã.",
      "4. Desenhe a folha verde oval com nervura central e ponta afilada.",
      "5. Adicione o reflexo de luz oval que dá brilho à casca vermelha."
    ],
    "layers": [
      "<path d=\"M100 75 C80 50 48 60 52 105 C55 145 85 168 100 168 C115 168 145 145 148 105 C152 60 120 50 100 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M88 72 Q100 78 112 72 M92 166 Q100 162 108 166\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 75 C102 50 112 40 115 35\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M104 55 C120 45 135 50 138 60 C125 68 110 65 104 55 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M104 55 L138 60\" stroke-width=\"1.8\"/>",
      "<path d=\"M68 95 Q62 115 68 135\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a linha guia curvada em arco e a espessura da banana.",
      "2. Desenhe a ponta escura inferior e a haste grossa do cabinho superior.",
      "3. Trace as linhas longitudinais que formam as facetas da casca.",
      "4. Adicione os detalhes da curvatura e textura das pontas.",
      "5. Finalize os contornos nítidos para colorir em amarelo radiante."
    ],
    "layers": [
      "<path d=\"M45 75 C40 120 70 160 135 165 C155 165 170 155 165 145 C150 145 90 145 65 110 C50 85 55 70 45 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"36\" y=\"62\" width=\"12\" height=\"15\" rx=\"3\" fill=\"none\" stroke-width=\"2.2\" transform=\"rotate(-15 42 70)\"/>\n          <path d=\"M160 146 Q168 152 165 158 Q158 158 155 150 Z\" fill=\"#1e293b\"/>",
      "<path d=\"M45 75 C55 110 85 145 155 152\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M42 68 C58 98 80 132 145 148\" fill=\"none\" stroke-width=\"1.8\" stroke-dasharray=\"4 2\"/>",
      "<circle cx=\"85\" cy=\"105\" r=\"4\" fill=\"none\" stroke-width=\"1.8\"/>\n          <circle cx=\"84\" cy=\"104\" r=\"1.8\" fill=\"#1e293b\"/>\n          <path d=\"M88 115 Q95 120 102 116\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M52 82 Q48 95 54 90 M120 148 Q135 150 130 144\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "<path d=\"M44 135 Q100 160 156 135\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M48 126 Q100 150 152 126\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M100 45 L52 122 Q100 144 148 122 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M96 75 C94 70 100 65 100 65 C100 65 106 70 104 75 C102 80 98 80 96 75 Z\" fill=\"#1e293b\"/>\n          <path d=\"M78 95 C76 90 82 85 82 85 C82 85 88 90 86 95 C84 100 80 100 78 95 Z\" fill=\"#1e293b\"/>\n          <path d=\"M116 95 C114 90 120 85 120 85 C120 85 126 90 124 95 C122 100 118 100 116 95 Z\" fill=\"#1e293b\"/>\n          <path d=\"M96 115 C94 110 100 105 100 105 C100 105 106 110 104 115 C102 120 98 120 96 115 Z\" fill=\"#1e293b\"/>",
      "<path d=\"M55 142 L58 152 M75 148 L80 160 M100 150 L102 164 M125 148 L123 160 M145 142 L142 152\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe os primeiros bagos redondos no topo do cacho.",
      "2. Adicione as camadas inferiores formando o cone clássico do cacho.",
      "3. Trace o ramo principal de madeira que sustenta os bagos.",
      "4. Desenhe a grande folha de videira em 3 pontas serrilhadas.",
      "5. Acrescente a gavinha espiral enrolada e o brilho nos bagos."
    ],
    "layers": [
      "<circle cx=\"85\" cy=\"85\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"115\" cy=\"85\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"100\" cy=\"98\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"75\" cy=\"110\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"125\" cy=\"110\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"90\" cy=\"125\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"125\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"100\" cy=\"145\" r=\"13\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"100\" cy=\"165\" r=\"11\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 75 L100 45 L115 38\" fill=\"none\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M96 55 C75 35 55 55 68 70 C60 85 75 92 88 80 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M78 58 L72 75 M78 58 L85 68\" stroke-width=\"1.8\"/>",
      "<path d=\"M102 48 C115 45 125 55 120 65 C115 72 125 78 130 72\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o círculo externo perfeito da casca da fruta.",
      "2. Trace o anel interno paralelo da entrecasca branca (albedo).",
      "3. Desenhe o miolo central e divida a polpa em 8 gomos triangulares.",
      "4. Adicione as pequenas sementinhas no centro de cada gomo.",
      "5. Faça os pontinhos de textura na casca e folhinhas decorativas."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"50\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"42\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"115\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"73\" x2=\"100\" y2=\"107\" stroke-width=\"1.8\"/>\n          <line x1=\"100\" y1=\"123\" x2=\"100\" y2=\"157\" stroke-width=\"1.8\"/>\n          <line x1=\"58\" y1=\"115\" x2=\"92\" y2=\"115\" stroke-width=\"1.8\"/>\n          <line x1=\"108\" y1=\"115\" x2=\"142\" y2=\"115\" stroke-width=\"1.8\"/>\n          <line x1=\"70\" y1=\"85\" x2=\"94\" y2=\"109\" stroke-width=\"1.8\"/>\n          <line x1=\"130\" y1=\"85\" x2=\"106\" y2=\"109\" stroke-width=\"1.8\"/>\n          <line x1=\"70\" y1=\"145\" x2=\"94\" y2=\"121\" stroke-width=\"1.8\"/>\n          <line x1=\"130\" y1=\"145\" x2=\"106\" y2=\"121\" stroke-width=\"1.8\"/>",
      "<circle cx=\"95\" cy=\"100\" r=\"1.5\" fill=\"#1e293b\"/>\n          <circle cx=\"105\" cy=\"100\" r=\"1.5\" fill=\"#1e293b\"/>\n          <circle cx=\"95\" cy=\"130\" r=\"1.5\" fill=\"#1e293b\"/>\n          <circle cx=\"105\" cy=\"130\" r=\"1.5\" fill=\"#1e293b\"/>",
      "<path d=\"M100 65 Q115 45 130 52 Q120 65 105 65\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "2. Trace a coroa estrelada de folhas verdes no topo.",
      "3. Faça o cabinho central saindo da coroa de folhas.",
      "4. Espalhe as dezenas de sementinhas (aquênios) em pequenos pontinhos.",
      "5. Adicione as nervuras das folhas e o brilho vermelho do morango."
    ],
    "layers": [
      "<path d=\"M100 68 C70 65 48 95 62 135 C72 165 95 180 100 182 C105 180 128 165 138 135 C152 95 130 65 100 68 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 68 Q90 48 72 56 Q85 68 92 70 M100 68 Q100 45 100 50 M100 68 Q110 48 128 56 Q115 68 108 70 M100 68 Q105 60 115 64 M100 68 Q95 60 85 64\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 52 C98 35 105 28 112 30\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"92\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"102\" cy=\"88\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"94\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"75\" cy=\"115\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"95\" cy=\"112\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"112\" cy=\"116\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"128\" cy=\"118\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"85\" cy=\"138\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"102\" cy=\"135\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"140\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"95\" cy=\"160\" r=\"2\" fill=\"#1e293b\"/>\n          <circle cx=\"106\" cy=\"162\" r=\"2\" fill=\"#1e293b\"/>",
      "<path d=\"M72 90 Q65 110 72 135\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pera Verde Suculenta).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "2. Trace a coroa exuberante de folhas pontiagudas no topo.",
      "3. Faça as linhas diagonais cruzadas para a textura em losangos.",
      "4. Adicione pequenos espinhos e pontinhos no centro de cada gomo.",
      "5. Finalize as nervuras das folhas tropicais e a base firme."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"135\" rx=\"42\" ry=\"52\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 85 L96 35 L106 60 L115 28 L114 62 L128 38 L118 70 L135 55 L120 80 M100 85 L90 40 L88 65 L76 35 L82 72 L65 52 L80 82\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M68 105 L132 165 M60 125 L125 180 M78 95 L140 148 M132 105 L68 165 M140 125 L75 180 M122 95 L60 148\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"135\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"85\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"120\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"85\" cy=\"150\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"150\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<line x1=\"90\" y1=\"52\" x2=\"94\" y2=\"72\" stroke-width=\"1.8\"/>\n          <line x1=\"108\" y1=\"48\" x2=\"110\" y2=\"70\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o círculo externo perfeito da casca da fruta.",
      "2. Trace o anel interno paralelo da entrecasca branca (albedo).",
      "3. Desenhe o miolo central e divida a polpa em 8 gomos triangulares.",
      "4. Adicione as pequenas sementinhas no centro de cada gomo.",
      "5. Faça os pontinhos de textura na casca e folhinhas decorativas."
    ],
    "layers": [
      "<path d=\"M50 110 C50 75 80 55 100 55 C120 55 150 75 150 110 C150 145 120 165 100 165 C80 165 50 145 50 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>\n         <polygon points=\"45,110 52,105 52,115\" fill=\"none\" stroke-width=\"2\"/>\n         <polygon points=\"155,110 148,105 148,115\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"42\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"115\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"73\" x2=\"100\" y2=\"107\" stroke-width=\"1.8\"/>\n          <line x1=\"100\" y1=\"123\" x2=\"100\" y2=\"157\" stroke-width=\"1.8\"/>\n          <line x1=\"58\" y1=\"115\" x2=\"92\" y2=\"115\" stroke-width=\"1.8\"/>\n          <line x1=\"108\" y1=\"115\" x2=\"142\" y2=\"115\" stroke-width=\"1.8\"/>\n          <line x1=\"70\" y1=\"85\" x2=\"94\" y2=\"109\" stroke-width=\"1.8\"/>\n          <line x1=\"130\" y1=\"85\" x2=\"106\" y2=\"109\" stroke-width=\"1.8\"/>\n          <line x1=\"70\" y1=\"145\" x2=\"94\" y2=\"121\" stroke-width=\"1.8\"/>\n          <line x1=\"130\" y1=\"145\" x2=\"106\" y2=\"121\" stroke-width=\"1.8\"/>",
      "<circle cx=\"95\" cy=\"100\" r=\"1.5\" fill=\"#1e293b\"/>\n          <circle cx=\"105\" cy=\"100\" r=\"1.5\" fill=\"#1e293b\"/>\n          <circle cx=\"95\" cy=\"130\" r=\"1.5\" fill=\"#1e293b\"/>\n          <circle cx=\"105\" cy=\"130\" r=\"1.5\" fill=\"#1e293b\"/>",
      "<path d=\"M100 65 Q115 45 130 52 Q120 65 105 65\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as duas cerejas perfeitamente redondas lado a lado.",
      "2. Trace os dois cabinhos longos e curvados que se unem no topo.",
      "3. Faça a junção comum com um nozinho onde as hastes se encontram.",
      "4. Adicione a folha verde oval graciosa saindo da junção.",
      "5. Desenhe os reflexos semicirculares de luz que deixam as cerejas brilhantes."
    ],
    "layers": [
      "<circle cx=\"75\" cy=\"140\" r=\"24\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"125\" cy=\"135\" r=\"24\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M75 116 C80 90 95 65 100 55\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <path d=\"M125 111 C120 85 105 65 100 55\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"5\" ry=\"3\" fill=\"#1e293b\"/>",
      "<path d=\"M100 55 C120 38 145 42 150 55 C135 65 115 62 100 55 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M100 55 L150 55\" stroke-width=\"1.8\"/>",
      "<path d=\"M65 130 A14 14 0 0 1 80 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <path d=\"M115 125 A14 14 0 0 1 130 120\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pêssego Aveludado).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Abacate com Caroço Redondo).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Kiwi Fatiado).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Caju com Castanha).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Coco Verde com Canudinho).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Mamão Papaia Aberto).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Manga Rosa Suculenta).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Melão Redondo Amarelinho).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Tigela de Mirtilos Azuis).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Framboesa Vermelhinha).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Amora Silvestre Roxa).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Figo Doce com Folha).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Goiaba com Polpa Rosada).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Maracujá com Suco Amarelo).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Caqui Doce Vermelho).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Raminho de Jabuticabas).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pitanga com Oito Gomos).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Carambola em Formato de Estrela).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Trio de Acerolas Vermelhas).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Romã Aberta com Rubis).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a raiz cônica longa da cenoura afilando até a ponta inferior.",
      "2. Trace a base superior arredondada com a cavidade do topo.",
      "3. Adicione o tufo exuberante de folhas verdes ramificadas no topo.",
      "4. Desenhe as linhas horizontais de textura ao longo da raiz.",
      "5. Finalize os contornos firmes para colorir em laranja vivo."
    ],
    "layers": [
      "<path d=\"M85 68 C78 68 85 140 100 178 C115 140 122 68 115 68 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"100\" cy=\"68\" rx=\"15\" ry=\"5\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M100 64 L90 25 M100 64 L100 20 M100 64 L110 25\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <path d=\"M88 35 L82 32 M92 45 L85 43 M102 35 L108 32 M102 45 L112 43\" stroke-width=\"2\"/>",
      "<line x1=\"90\" y1=\"90\" x2=\"102\" y2=\"90\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"98\" y1=\"110\" x2=\"112\" y2=\"110\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"130\" x2=\"105\" y2=\"130\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"96\" y1=\"150\" x2=\"106\" y2=\"150\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"94\" cy=\"100\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"106\" cy=\"100\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 108 Q100 112 104 108\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a espiga cilíndrica com topo arredondado.",
      "2. Trace as grandes palhas verdes abertas nas laterais envolvendo a espiga.",
      "3. Faça as linhas verticais e horizontais ordenadas formando os grãos.",
      "4. Adicione o cabelo de milho dourado saindo do topo.",
      "5. Finalize o talo inferior e contornos dos grãos amarelos."
    ],
    "layers": [
      "<rect x=\"85\" y=\"60\" width=\"30\" height=\"95\" rx=\"15\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 155 C70 140 65 100 75 75 C70 100 80 140 88 150 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M115 155 C130 140 135 100 125 75 C130 100 120 140 112 150 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"65\" x2=\"95\" y2=\"150\" stroke-width=\"1.8\"/>\n          <line x1=\"105\" y1=\"65\" x2=\"105\" y2=\"150\" stroke-width=\"1.8\"/>\n          <line x1=\"86\" y1=\"80\" x2=\"114\" y2=\"80\" stroke-width=\"1.8\"/>\n          <line x1=\"86\" y1=\"95\" x2=\"114\" y2=\"95\" stroke-width=\"1.8\"/>\n          <line x1=\"86\" y1=\"110\" x2=\"114\" y2=\"110\" stroke-width=\"1.8\"/>\n          <line x1=\"86\" y1=\"125\" x2=\"114\" y2=\"125\" stroke-width=\"1.8\"/>\n          <line x1=\"86\" y1=\"140\" x2=\"114\" y2=\"140\" stroke-width=\"1.8\"/>",
      "<path d=\"M96 60 Q90 45 85 40 M100 60 Q100 40 102 35 M104 60 Q110 45 115 40\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<rect x=\"96\" y=\"155\" width=\"8\" height=\"15\" rx=\"3\" fill=\"none\" stroke-width=\"2.2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o formato esférico levemente achatado do tomate.",
      "2. Trace as suaves nervuras dos gomos no alto.",
      "3. Faça a coroa estrelada de cinco sépalas verdes no topo.",
      "4. Desenhe o cabinho grosso curvado saindo do centro da coroa.",
      "5. Adicione o reflexo brilhante da pele vermelha lisa."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"45\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 75 Q100 82 115 75\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,75 92,62 98,68 85,70 96,75 88,85 100,78 112,85 104,75 115,70 102,68 108,62\" fill=\"none\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M100 70 Q102 55 108 50\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M72 100 A25 25 0 0 1 85 85\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o grande chapéu em domo arredondado do cogumelo.",
      "2. Trace o caule grosso e firme com a base suave.",
      "3. Faça o anel ou saia decorativa sob o chapéu.",
      "4. Desenhe as famosas bolinhas brancas espalhadas no chapéu vermelho.",
      "5. Adicione folhinhas e graminha na base do caule."
    ],
    "layers": [
      "<path d=\"M45 110 C45 60 155 60 155 110 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 110 C85 145 78 165 75 170 L125 170 C122 165 115 145 115 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M78 125 Q100 135 122 125\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"75\" cy=\"85\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"72\" r=\"10\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"125\" cy=\"85\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"90\" cy=\"98\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"112\" cy=\"98\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M60 170 L65 160 L70 170 M130 170 L135 160 L140 170\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Berinjela Roxa Brilhante).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Brócolis em Formato de Árvore).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Abóbora Redonda com Gomos).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Batatinha Sorridente).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pimentão com Caule Verde).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Vagem de Ervilhas).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pé de Alface Fresquinha).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Cebola com Casca Dourada).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Cabeça de Alho com Dentes).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pepino Verde Listradinho).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Rabanete com Folhas Verdes).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Beterraba Vermelha da Terra).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Mandioca com Casca Marrom).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Couve-Flor com Talo Verde).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Feixe de Aspargos).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Alcachofra com Pétalas).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cúpula fofa e arredondada do pão superior.",
      "2. Trace a camada ondulada da alface crocante e a fatia de tomate.",
      "3. Faça o queijo cheddar derretido com pontas caindo nas laterais.",
      "4. Desenhe a carne suculenta do hambúrguer e a base do pão inferior.",
      "5. Espalhe sementinhas de gergelim no topo do pão."
    ],
    "layers": [
      "<path d=\"M50 85 C50 50 150 50 150 85 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M45 92 Q55 85 65 92 Q75 85 85 92 Q95 85 105 92 Q115 85 125 92 Q135 85 145 92 Q155 85 155 92\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <rect x=\"52\" y=\"96\" width=\"96\" height=\"8\" rx=\"3\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M50 108 L150 108 L140 120 L130 108 L115 124 L100 108 L50 108\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<rect x=\"48\" y=\"122\" width=\"104\" height=\"16\" rx=\"6\" fill=\"none\" stroke-width=\"2.8\"/>\n          <path d=\"M52 142 C52 160 148 160 148 142 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<ellipse cx=\"80\" cy=\"65\" rx=\"3\" ry=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"100\" cy=\"58\" rx=\"3\" ry=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"120\" cy=\"65\" rx=\"3\" ry=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"90\" cy=\"74\" rx=\"3\" ry=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"110\" cy=\"74\" rx=\"3\" ry=\"1.5\" fill=\"#1e293b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o triângulo largo da fatia com a borda curvada.",
      "2. Trace a crosta grossa e crocante da borda recheada no topo.",
      "3. Faça as rodelas apetitosas de pepperoni espalhadas.",
      "4. Adicione folhas verdes de manjericão e fios de queijo derretido.",
      "5. Finalize os pontinhos de orégano e a ponta gotejante de queijo."
    ],
    "layers": [
      "<path d=\"M45 60 Q100 45 155 60 L100 170 Z\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<path d=\"M45 60 Q100 45 155 60 C155 75 45 75 45 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"85\" cy=\"90\" r=\"10\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"118\" cy=\"95\" r=\"9\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"100\" cy=\"125\" r=\"10\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 110 C70 105 78 100 82 105 C85 110 78 115 75 110 Z\" fill=\"none\" stroke-width=\"1.8\"/>\n          <path d=\"M120 120 C115 115 123 110 127 115 C130 120 123 125 120 120 Z\" fill=\"none\" stroke-width=\"1.8\"/>",
      "<circle cx=\"95\" cy=\"80\" r=\"1\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"1\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"145\" r=\"1\" fill=\"#1e293b\"/>\n          <circle cx=\"105\" cy=\"140\" r=\"1\" fill=\"#1e293b\"/>\n          <path d=\"M100 170 Q103 178 100 182\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o cone invertido triangular da casquinha crocante.",
      "2. Trace as linhas quadriculadas de waffer na casquinha.",
      "3. Faça a primeira bola redonda de sorvete sobre a borda da casquinha.",
      "4. Adicione a segunda bola no topo com a calda doce escorrendo.",
      "5. Finalize com a cereja vermelha com cabinho no alto do sorvete."
    ],
    "layers": [
      "<polygon points=\"100,180 65,115 135,115\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<line x1=\"75\" y1=\"130\" x2=\"115\" y2=\"170\" stroke-width=\"1.8\"/>\n          <line x1=\"85\" y1=\"120\" x2=\"125\" y2=\"155\" stroke-width=\"1.8\"/>\n          <line x1=\"125\" y1=\"130\" x2=\"85\" y2=\"170\" stroke-width=\"1.8\"/>\n          <line x1=\"115\" y1=\"120\" x2=\"75\" y2=\"155\" stroke-width=\"1.8\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M68 112 Q100 120 132 112\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"68\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 65 C85 75 92 78 92 82 M108 65 C108 78 115 78 115 84\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"100\" cy=\"40\" r=\"8\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M100 32 Q108 20 115 22\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe as duas cerejas perfeitamente redondas lado a lado.",
      "2. Trace os dois cabinhos longos e curvados que se unem no topo.",
      "3. Faça a junção comum com um nozinho onde as hastes se encontram.",
      "4. Adicione a folha verde oval graciosa saindo da junção.",
      "5. Desenhe os reflexos semicirculares de luz que deixam as cerejas brilhantes."
    ],
    "layers": [
      "<circle cx=\"75\" cy=\"140\" r=\"24\" fill=\"none\" stroke-width=\"2.8\"/>\n          <circle cx=\"125\" cy=\"135\" r=\"24\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M75 116 C80 90 95 65 100 55\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <path d=\"M125 111 C120 85 105 65 100 55\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"5\" ry=\"3\" fill=\"#1e293b\"/>",
      "<path d=\"M100 55 C120 38 145 42 150 55 C135 65 115 62 100 55 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M100 55 L150 55\" stroke-width=\"1.8\"/>",
      "<path d=\"M65 130 A14 14 0 0 1 80 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <path d=\"M115 125 A14 14 0 0 1 130 120\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o retângulo arredondado no topo da barra de picolé.",
      "2. Trace o palito de madeira reto inserido na base inferior.",
      "3. Faça a famosa mordida divertida com ondas em uma das pontas.",
      "4. Adicione as listras de sabor ou cobertura de chocolate.",
      "5. Finalize as gotinhas de gelo derretendo no calor."
    ],
    "layers": [
      "<path d=\"M70 145 L70 70 C70 50 130 50 130 70 L130 145 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"92\" y=\"145\" width=\"16\" height=\"36\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M115 50 Q120 60 128 58 Q135 68 130 75\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M70 95 Q100 102 130 95\" stroke-width=\"2.2\"/>\n          <path d=\"M70 120 Q100 128 130 120\" stroke-width=\"2.2\"/>",
      "<path d=\"M80 80 L80 130\" stroke-width=\"2.5\" stroke-dasharray=\"2 3\" stroke-linecap=\"round\"/>\n          <circle cx=\"138\" cy=\"155\" r=\"2.5\" fill=\"#0ea5e9\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o grande círculo externo da massa fofinha do donut.",
      "2. Trace o círculo central perfeitamente concêntrico do furo.",
      "3. Faça as ondas sinuosas da deliciosa cobertura de morango escorrendo.",
      "4. Espalhe os confeitos compridos granulados por toda a cobertura.",
      "5. Adicione linhas de brilho na cobertura apetitosa."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"115\" r=\"55\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"20\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 115 C55 90 70 85 85 92 C100 85 115 88 125 80 C140 85 150 100 145 115 C150 130 135 145 125 138 C115 145 95 140 85 145 C70 140 55 130 55 115 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<line x1=\"70\" y1=\"100\" x2=\"76\" y2=\"98\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"88\" y1=\"88\" x2=\"94\" y2=\"92\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"118\" y1=\"88\" x2=\"122\" y2=\"94\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"130\" y1=\"105\" x2=\"136\" y2=\"108\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"125\" y1=\"125\" x2=\"130\" y2=\"122\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"72\" y1=\"125\" x2=\"78\" y2=\"128\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"90\" y1=\"135\" x2=\"96\" y2=\"132\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M65 85 A45 45 0 0 1 85 72\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Fatia de Bolo de Festa).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo oval alongado e fofinho do pão crocante.",
      "2. Trace a pestana clássica (corte central na crosta dourada).",
      "3. Faça as pontas afiladas e a base firme do pão.",
      "4. Desenhe as linhas de brilho na casca torradinha.",
      "5. Finalize a cestinha rústica de pano embaixo."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M60 110 Q100 95 140 110 Q100 125 60 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"75\" y1=\"110\" x2=\"125\" y2=\"110\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q100 85 130 95\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"155\" rx=\"70\" ry=\"14\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Caixa Listrada de Pipoca).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pirulito Espiral Colorido).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Cookie com Gotas de Chocolate).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Bala Doce com Embrulho).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pacote de Batatas Fritas).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Coxinha Douradinha).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pastel de Feira Crocante).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo oval alongado e fofinho do pão crocante.",
      "2. Trace a pestana clássica (corte central na crosta dourada).",
      "3. Faça as pontas afiladas e a base firme do pão.",
      "4. Desenhe as linhas de brilho na casca torradinha.",
      "5. Finalize a cestinha rústica de pano embaixo."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M60 110 Q100 95 140 110 Q100 125 60 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"75\" y1=\"110\" x2=\"125\" y2=\"110\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q100 85 130 95\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"155\" rx=\"70\" ry=\"14\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o formato arredondado da maçã com curvas suaves.",
      "2. Trace as covinhas côncavas na parte superior e na base.",
      "3. Faça o cabinho lenhoso curvado saindo do topo da maçã.",
      "4. Desenhe a folha verde oval com nervura central e ponta afilada.",
      "5. Adicione o reflexo de luz oval que dá brilho à casca vermelha."
    ],
    "layers": [
      "<path d=\"M100 75 C80 50 48 60 52 105 C55 145 85 168 100 168 C115 168 145 145 148 105 C152 60 120 50 100 75 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M88 72 Q100 78 112 72 M92 166 Q100 162 108 166\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 75 C102 50 112 40 115 35\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<path d=\"M104 55 C120 45 135 50 138 60 C125 68 110 65 104 55 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M104 55 L138 60\" stroke-width=\"1.8\"/>",
      "<path d=\"M68 95 Q62 115 68 135\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da fruta ou legume (Pudim de Leite com Calda).",
      "2. Trace o cabinho de suporte e as folhas verdes decorativas.",
      "3. Faça a silhueta definitiva com suas curvas anatômicas.",
      "4. Adicione texturas da casca, sementes ou gomos.",
      "5. Finalize com contornos nítidos prontos para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"120\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M100 78 C102 60 110 52 114 48\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M105 60 C120 50 132 55 135 62 C125 70 112 68 105 60 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<ellipse cx=\"100\" cy=\"120\" rx=\"42\" ry=\"40\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M75 100 Q68 120 75 140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"168\" rx=\"50\" ry=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o corpo oval alongado e fofinho do pão crocante.",
      "2. Trace a pestana clássica (corte central na crosta dourada).",
      "3. Faça as pontas afiladas e a base firme do pão.",
      "4. Desenhe as linhas de brilho na casca torradinha.",
      "5. Finalize a cestinha rústica de pano embaixo."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"115\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M60 110 Q100 95 140 110 Q100 125 60 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"75\" y1=\"110\" x2=\"125\" y2=\"110\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q100 85 130 95\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"155\" rx=\"70\" ry=\"14\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "2. Trace a alça ergonômica em arco gracioso na lateral.",
      "3. Adicione o nível do achocolatado fumegante com espuma.",
      "4. Desenhe as ondas sinuosas de vapor perfumado subindo.",
      "5. Finalize com um coração estampado na lateral da caneca."
    ],
    "layers": [
      "<rect x=\"65\" y=\"80\" width=\"70\" height=\"85\" rx=\"12\" fill=\"none\" stroke-width=\"2.8\"/>\n            <ellipse cx=\"100\" cy=\"80\" rx=\"35\" ry=\"12\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M135 95 C160 95 160 145 135 145\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"85\" rx=\"30\" ry=\"8\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M85 65 Q80 50 88 40 M100 65 Q105 48 98 35 M115 65 Q120 50 112 40\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<path d=\"M95 118 C90 110 82 115 88 122 L100 134 L112 122 C118 115 110 110 105 118 Z\" fill=\"#ef4444\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"75\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a cabeça elegante da raposa mística e o corpo nobre sentado.",
      "2. Trace as orelhas pontudas alertas com marcas vermelhas tradicionais.",
      "3. Faça as múltiplas caudas felpudas abrindo em leque majestoso nas costas.",
      "4. Desenhe os olhos rasgados mágicos, o focinho fino e a joia hoshi-no-tama flutuante.",
      "5. Adicione as chamas místicas nas pontas das caudas e o colar de contas."
    ],
    "layers": [
      "<polygon points=\"100,55 70,85 130,85\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>\n          <ellipse cx=\"100\" cy=\"135\" rx=\"26\" ry=\"32\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"76,60 55,25 85,50\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"124,60 145,25 115,50\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M72 45 L76 35 L80 45\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n          <path d=\"M120 45 L124 35 L128 45\" stroke=\"#ef4444\" stroke-width=\"2\"/>",
      "<path d=\"M125 130 C155 125 175 105 168 75 C158 85 145 105 135 120\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M100 135 C115 115 120 70 100 50 C90 75 95 110 100 135\" fill=\"none\" stroke-width=\"2.2\"/>\n          <path d=\"M75 130 C45 125 25 105 32 75 C42 85 55 105 65 120\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M80 75 Q88 72 92 78 M120 75 Q112 72 108 78\" stroke=\"#1e293b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"88\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"38\" r=\"7\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"115\" r=\"4\" fill=\"#ef4444\"/>\n          <circle cx=\"92\" cy=\"118\" r=\"3\" fill=\"#ef4444\"/>\n          <circle cx=\"108\" cy=\"118\" r=\"3\" fill=\"#ef4444\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Trace a linha guia sinuosa em formato de \"S\" do corpo serpentino do dragão.",
      "2. Desenhe a cabeça com mandíbula imponente e chifres de cervo ramificados.",
      "3. Faça a juba de fogo que acompanha o dorso e os bigodes orientais longos.",
      "4. Desenhe as 4 patas com garras afiadas segurando a pérola da sabedoria.",
      "5. Adicione as escamas semicirculares no ventre e a cauda em labareda."
    ],
    "layers": [
      "<path d=\"M60 70 Q110 40 135 85 T80 135 T155 155\" fill=\"none\" stroke-width=\"3\"/>",
      "<path d=\"M50 75 L75 60 L80 80 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M75 60 L85 45 M85 45 L82 35 M85 45 L92 40\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M60 82 Q45 95 35 90 M60 78 Q45 70 30 75\" stroke=\"#f59e0b\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n          <path d=\"M90 60 L96 52 L98 62 L105 55 L106 66 L115 60\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"62\" cy=\"68\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"120\" r=\"8\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n          <path d=\"M95 125 L92 135 M105 125 L108 135\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M155 155 Q175 145 168 170 Q155 165 155 155 Z\" fill=\"#ef4444\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a cabeça arredondada e o corpo rechonchudo do gatinho sentado.",
      "2. Trace a patinha direita levantada no ar acenando para atrair boa sorte.",
      "3. Faça a orelha direita em alerta e a orelha esquerda com detalhe vermelho.",
      "4. Desenhe a grande moeda koban dourada segura na outra patinha e a coleira com guizo.",
      "5. Adicione os olhos felizes em arco, o focinho e os bigodinhos da prosperidade."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"80\" r=\"34\" fill=\"none\" stroke-width=\"2.8\"/>\n          <ellipse cx=\"100\" cy=\"140\" rx=\"36\" ry=\"34\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M68 95 C55 90 55 60 70 65 C78 70 78 85 75 95\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <circle cx=\"66\" cy=\"65\" r=\"7\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<polygon points=\"72,55 60,30 85,45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"128,55 140,30 115,45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"72,50 65,36 80,45\" fill=\"#ef4444\"/>",
      "<path d=\"M80 112 Q100 118 120 112\" stroke=\"#ef4444\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"120\" r=\"6\" fill=\"#f59e0b\"/>\n          <ellipse cx=\"118\" cy=\"145\" rx=\"10\" ry=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <text x=\"114\" y=\"150\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#1e293b\">万</text>",
      "<path d=\"M85 78 Q90 84 95 78 M115 78 Q110 84 105 78\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <polygon points=\"98,85 102,85 100,89\" fill=\"#ec4899\"/>\n          <line x1=\"75\" y1=\"88\" x2=\"60\" y2=\"86\" stroke-width=\"2\"/>\n          <line x1=\"125\" y1=\"88\" x2=\"140\" y2=\"86\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Panda Sensei com Faixa Ninja).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a cabeça nobre de cavalo em perfil e o pescoço arqueado.",
      "2. Trace o LONGO CHIFRE ESPIRALADO cônico apontado para as estrelas.",
      "3. Faça a crina longa e mágica fluindo em ondas de arco-íris.",
      "4. Desenhe o olho doce com cílios compridos de conto de fadas e o focinho meigo.",
      "5. Espalhe estrelinhas cintilantes e poeira mágica ao redor do chifre."
    ],
    "layers": [
      "<path d=\"M85 70 C70 85 75 110 95 105 C115 105 130 90 125 70 C120 50 100 55 85 70 Z\" fill=\"none\" stroke-width=\"2.8\"/>\n          <path d=\"M120 75 Q135 110 145 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"95,55 105,15 105,52\" fill=\"none\" stroke-width=\"2.8\"/>\n          <line x1=\"98\" y1=\"45\" x2=\"105\" y2=\"40\" stroke-width=\"2\"/>\n          <line x1=\"100\" y1=\"35\" x2=\"105\" y2=\"30\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"25\" x2=\"105\" y2=\"20\" stroke-width=\"2\"/>",
      "<path d=\"M108 55 Q135 60 145 90 M115 70 Q145 75 152 110 M122 85 Q150 95 155 135\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <polygon points=\"108,55 115,35 120,52\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"95\" cy=\"78\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"94\" cy=\"77\" r=\"2\" fill=\"#1e293b\"/>\n          <path d=\"M92 72 L90 68 M95 72 L95 67 M98 72 L101 68\" stroke-width=\"1.8\"/>\n          <circle cx=\"85\" cy=\"98\" r=\"2\" fill=\"#1e293b\"/>",
      "<path d=\"M115 25 L117 18 L122 20 L117 22 Z\" fill=\"#f59e0b\"/>\n          <path d=\"M85 20 L87 15 L92 17 L87 19 Z\" fill=\"#f59e0b\"/>\n          <circle cx=\"120\" cy=\"35\" r=\"1.5\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a cabeça nobre de cavalo em perfil e o pescoço arqueado.",
      "2. Trace o LONGO CHIFRE ESPIRALADO cônico apontado para as estrelas.",
      "3. Faça a crina longa e mágica fluindo em ondas de arco-íris.",
      "4. Desenhe o olho doce com cílios compridos de conto de fadas e o focinho meigo.",
      "5. Espalhe estrelinhas cintilantes e poeira mágica ao redor do chifre."
    ],
    "layers": [
      "<path d=\"M85 70 C70 85 75 110 95 105 C115 105 130 90 125 70 C120 50 100 55 85 70 Z\" fill=\"none\" stroke-width=\"2.8\"/>\n          <path d=\"M120 75 Q135 110 145 155\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<polygon points=\"95,55 105,15 105,52\" fill=\"none\" stroke-width=\"2.8\"/>\n          <line x1=\"98\" y1=\"45\" x2=\"105\" y2=\"40\" stroke-width=\"2\"/>\n          <line x1=\"100\" y1=\"35\" x2=\"105\" y2=\"30\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"25\" x2=\"105\" y2=\"20\" stroke-width=\"2\"/>",
      "<path d=\"M108 55 Q135 60 145 90 M115 70 Q145 75 152 110 M122 85 Q150 95 155 135\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <polygon points=\"108,55 115,35 120,52\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<circle cx=\"95\" cy=\"78\" r=\"4\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"94\" cy=\"77\" r=\"2\" fill=\"#1e293b\"/>\n          <path d=\"M92 72 L90 68 M95 72 L95 67 M98 72 L101 68\" stroke-width=\"1.8\"/>\n          <circle cx=\"85\" cy=\"98\" r=\"2\" fill=\"#1e293b\"/>",
      "<path d=\"M115 25 L117 18 L122 20 L117 22 Z\" fill=\"#f59e0b\"/>\n          <path d=\"M85 20 L87 15 L92 17 L87 19 Z\" fill=\"#f59e0b\"/>\n          <circle cx=\"120\" cy=\"35\" r=\"1.5\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Estrelinha Mágica Sorridente).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Nuvem Feliz com Arco-Íris).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Solzinho com Óculos Escuros).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Lua com Touca de Dormir).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a cabeça graciosa e o tronco delicado da criatura mágica.",
      "2. Trace o lindo vestido de pétalas de flores.",
      "3. Faça as asas duplas translúcidas e rendadas de fada.",
      "4. Desenhe o rostinho meigo com sorriso encantado e olhos brilhantes.",
      "5. Adicione a varinha de condão e pó de pirlimpimpim."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M92 83 L88 120 L112 120 L108 83 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"90,115 70,165 130,165 110,115\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M88 95 C60 70 40 95 65 120 C75 110 85 105 88 100 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n            <path d=\"M112 95 C140 70 160 95 135 120 C125 110 115 105 112 100 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"95\" cy=\"64\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"105\" cy=\"64\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M97 72 Q100 75 103 72\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"65\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"135\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Duende com Chapéu Pontudo).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a cabeça e o grande chapéu cônico pontudo com fivela.",
      "2. Trace as abas largas e onduladas do chapéu mágico.",
      "3. Faça a túnica longa de feiticeiro com mangas amplas.",
      "4. Desenhe o grande livro de feitiços aberto com símbolos arcanos.",
      "5. Adicione estrelas e luas estampadas na túnica e barba mágica."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"90\" r=\"22\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"100,25 70,75 130,75\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 78 C70 72 130 72 145 78 C130 85 70 85 55 78 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"94\" y=\"65\" width=\"12\" height=\"10\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"90,112 60,175 140,175 110,112\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 130 L100 135 L115 130 L115 150 L100 155 L85 150 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"94\" cy=\"88\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"106\" cy=\"88\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<polygon points=\"100,40 102,44 106,44 103,47 104,51 100,48 96,51 97,47 94,44 98,44\" fill=\"#f59e0b\"/>\n          <path d=\"M125 145 C122 140 128 135 132 140\" stroke=\"#f59e0b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a base em arco largo da tiara real sobre a almofada.",
      "2. Trace as 5 pontas majestosas da coroa dourada com a ponta central mais alta.",
      "3. Faça as pérolas circulares perfeitamente polidas no ápice de cada ponta.",
      "4. Desenhe as pedras preciosas ovais (rubis, esmeraldas e safiras) na base.",
      "5. Adicione os reflexos dourados de ouro reluzente e faíscas de nobreza."
    ],
    "layers": [
      "<path d=\"M45 135 Q100 145 155 135 L150 152 Q100 162 48 152 Z\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M45 135 L40 85 L65 110 L100 65 L135 110 L160 85 L155 135\" fill=\"none\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/>",
      "<circle cx=\"40\" cy=\"82\" r=\"5\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"108\" r=\"4.5\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"62\" r=\"7\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2.2\"/>\n          <circle cx=\"135\" cy=\"108\" r=\"4.5\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n          <circle cx=\"160\" cy=\"82\" r=\"5\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"2\"/>",
      "<ellipse cx=\"100\" cy=\"148\" rx=\"6\" ry=\"4\" fill=\"#ef4444\"/>\n          <ellipse cx=\"75\" cy=\"146\" rx=\"5\" ry=\"3.5\" fill=\"#10b981\"/>\n          <ellipse cx=\"125\" cy=\"146\" rx=\"5\" ry=\"3.5\" fill=\"#0ea5e9\"/>",
      "<path d=\"M96 95 L100 88 L104 95 L100 102 Z\" fill=\"#fef08a\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>\n          <circle cx=\"25\" cy=\"70\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"175\" cy=\"70\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a haste cilíndrica longa torneada da varinha de condão.",
      "2. Trace o encaixe decorativo no topo da haste.",
      "3. Faça a grande estrela de 5 pontas radiante no topo da varinha.",
      "4. Desenhe as auras mágicas e fitas de encantamento girando ao redor.",
      "5. Espalhe faíscas brilhantes de magia e poeira estelar cintilante."
    ],
    "layers": [
      "<polygon points=\"75,165 70,160 120,65 125,70\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"122\" cy=\"68\" r=\"6\" fill=\"#1e293b\"/>",
      "<polygon points=\"135,30 140,42 152,44 143,52 146,65 135,58 124,65 127,52 118,44 130,42\" fill=\"#f59e0b\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>",
      "<path d=\"M110 80 Q95 95 110 110 T100 140\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"155\" cy=\"35\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"120\" cy=\"20\" r=\"2.5\" fill=\"#f59e0b\"/>\n          <circle cx=\"160\" cy=\"65\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Escudo com Brasão de Leão).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Espada Ninja com Bainha).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe o corpo arredondado e bojudo do frasco de poção mágica.",
      "2. Trace o gargalo cilíndrico estreito com o anel da borda.",
      "3. Faça a rolha de cortiça ajustada no topo do gargalo.",
      "4. Desenhe o nível do líquido misterioso com bolhas efervescentes.",
      "5. Adicione as partículas de vapor mágico luminoso subindo em espiral."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"125\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"88\" y=\"60\" width=\"24\" height=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"60\" rx=\"16\" ry=\"6\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"92,60 90,45 110,45 108,60\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M62 130 Q100 145 138 130\" stroke=\"#0ea5e9\" stroke-width=\"2.5\"/>\n          <circle cx=\"85\" cy=\"120\" r=\"5\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>\n          <circle cx=\"105\" cy=\"110\" r=\"4\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>\n          <circle cx=\"118\" cy=\"125\" r=\"3\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"35\" r=\"3\" fill=\"#f59e0b\"/>\n          <circle cx=\"112\" cy=\"25\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"88\" cy=\"22\" r=\"2.5\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Fantasminha Feliz e Amigo).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Bola de Cristal Iluminada).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a cabeça e o grande chapéu cônico pontudo com fivela.",
      "2. Trace as abas largas e onduladas do chapéu mágico.",
      "3. Faça a túnica longa de feiticeiro com mangas amplas.",
      "4. Desenhe o grande livro de feitiços aberto com símbolos arcanos.",
      "5. Adicione estrelas e luas estampadas na túnica e barba mágica."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"90\" r=\"22\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"100,25 70,75 130,75\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M55 78 C70 72 130 72 145 78 C130 85 70 85 55 78 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"94\" y=\"65\" width=\"12\" height=\"10\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"90,112 60,175 140,175 110,112\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<path d=\"M85 130 L100 135 L115 130 L115 150 L100 155 L85 150 Z\" fill=\"none\" stroke-width=\"2.2\"/>\n          <circle cx=\"94\" cy=\"88\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"106\" cy=\"88\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<polygon points=\"100,40 102,44 106,44 103,47 104,51 100,48 96,51 97,47 94,44 98,44\" fill=\"#f59e0b\"/>\n          <path d=\"M125 145 C122 140 128 135 132 140\" stroke=\"#f59e0b\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Lâmpada dos Três Desejos).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Tapete Mágico com Franjas).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Pena com Frasco de Tinta).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Pergaminho Ninja Aberto).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Shuriken Ninja de 4 Pontas).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Kunai Ninja com Argola).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Máscara Kitsune Tradicional).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Leque Japonês de Cerejeira).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Lanterna de Papel Vermelha).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Portal Sagrado Torii).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Galho com Flores de Sakura).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Pássaro Tsuru de Papel).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Carpa Koi da Prosperidade).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Pequeno Bonsai no Vaso).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Cogumelo Brilhante com Olhos).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Ametista Roxa Multifacetada).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Rubi Vermelho Brilhante).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Par de Asas de Plumas Brancas).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Harpa Dourada dos Céus).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Sino Dourado com Laço Vermelho).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Vela Aconchegante com Chama).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Fogueira Mágica com Faíscas).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe o corpo arredondado e bojudo do frasco de poção mágica.",
      "2. Trace o gargalo cilíndrico estreito com o anel da borda.",
      "3. Faça a rolha de cortiça ajustada no topo do gargalo.",
      "4. Desenhe o nível do líquido misterioso com bolhas efervescentes.",
      "5. Adicione as partículas de vapor mágico luminoso subindo em espiral."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"125\" r=\"42\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<rect x=\"88\" y=\"60\" width=\"24\" height=\"28\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"60\" rx=\"16\" ry=\"6\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"92,60 90,45 110,45 108,60\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M62 130 Q100 145 138 130\" stroke=\"#0ea5e9\" stroke-width=\"2.5\"/>\n          <circle cx=\"85\" cy=\"120\" r=\"5\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>\n          <circle cx=\"105\" cy=\"110\" r=\"4\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>\n          <circle cx=\"118\" cy=\"125\" r=\"3\" fill=\"none\" stroke=\"#0ea5e9\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"35\" r=\"3\" fill=\"#f59e0b\"/>\n          <circle cx=\"112\" cy=\"25\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"88\" cy=\"22\" r=\"2.5\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Chave com Cabeça de Coração).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Trevo de Quatro Folhas Mágico).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Concha Aberta com Pérola Real).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a cabeça graciosa e o tronco delicado da criatura mágica.",
      "2. Trace a longa cauda de peixe com nadadeira brilhante.",
      "3. Faça os cabelos longos ondulando na água com conchinhas.",
      "4. Desenhe o rostinho meigo com sorriso encantado e olhos brilhantes.",
      "5. Adicione pérolas e bolhas de água."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"65\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M92 83 L88 120 L112 120 L108 83 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M88 120 C85 145 115 155 110 175\" fill=\"none\" stroke-width=\"3\"/>\n            <polygon points=\"110,175 95,190 125,190\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 68 C70 85 75 115 82 135 M115 68 C130 85 125 115 118 135\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>",
      "<circle cx=\"95\" cy=\"64\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"105\" cy=\"64\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M97 72 Q100 75 103 72\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>",
      "<circle cx=\"65\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"135\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Cometa com Poeira Estelar).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da criatura ou símbolo mágico (Hikari Sensei (Ensino Soberano)).",
      "2. Trace os contornos de poder místico e detalhes lendários.",
      "3. Faça as auras e elementos decorativos de alta fantasia.",
      "4. Adicione as expressões encantadas e joias em relevo.",
      "5. Finalize com contornos brilhantes para colorir."
    ],
    "layers": [
      "<polygon points=\"100,50 145,95 100,145 55,95\" fill=\"none\" stroke-width=\"2.8\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"24\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"100,75 106,88 120,90 109,99 112,113 100,105 88,113 91,99 80,90 94,88\" fill=\"#f59e0b\"/>",
      "<circle cx=\"100\" cy=\"95\" r=\"6\" fill=\"#ef4444\"/>",
      "<circle cx=\"45\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>\n          <circle cx=\"155\" cy=\"50\" r=\"2\" fill=\"#f59e0b\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.45\">\n    <path d=\"M25 45 L28 35 L31 45 L41 48 L31 51 L28 61 L25 51 L15 48 Z\" fill=\"#f59e0b\"/>\n    <path d=\"M170 145 L172 138 L175 145 L182 147 L175 149 L172 156 L170 149 L163 147 Z\" fill=\"#f59e0b\"/>\n    <circle cx=\"100\" cy=\"180\" r=\"2\" fill=\"#94a3b8\"/>\n  </g>"
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
