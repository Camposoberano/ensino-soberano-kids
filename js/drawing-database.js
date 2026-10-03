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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Cachorrinho Amigo.",
      "2. Adicione as orelhas ou características principais da espécie (floppy).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (collar) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 62 C50 62 42 100 58 110 C70 115 75 90 74 72 Z M132 62 C150 62 158 100 142 110 C130 115 125 90 126 72 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Gatinho Fofo.",
      "2. Adicione as orelhas ou características principais da espécie (triangle).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (stripes) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M72 58 L62 25 L88 48 Z M128 58 L138 25 L112 48 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Leãozinho Real.",
      "2. Adicione as orelhas ou características principais da espécie (round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (mane) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"68\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"132\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/><path d=\"M60 45 Q40 70 50 100 Q40 125 70 135 Q100 145 130 135 Q160 125 150 100 Q160 70 140 45 Q100 35 60 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Tigre Listrado.",
      "2. Adicione as orelhas ou características principais da espécie (round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (tiger_stripes) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"68\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"132\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/><path d=\"M72 130 L85 135 L72 140 M128 130 L115 135 L128 140 M92 155 L100 150 L108 155\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Elefante Feliz.",
      "2. Adicione as orelhas ou características principais da espécie (giant).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (tusks) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Girafinha Alta.",
      "2. Adicione as orelhas ou características principais da espécie (horns).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (spots) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Macaquinho Sapeca.",
      "2. Adicione as orelhas ou características principais da espécie (side_round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (face_mask) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Zebrinha Listrada.",
      "2. Adicione as orelhas ou características principais da espécie (pointed).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (zebra_stripes) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M72 58 L62 25 L88 48 Z M128 58 L138 25 L112 48 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/><path d=\"M72 130 L85 135 L72 140 M128 130 L115 135 L128 140 M92 155 L100 150 L108 155\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Coelhinho Saltitante.",
      "2. Adicione as orelhas ou características principais da espécie (long).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (whiskers) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"78\" cy=\"35\" rx=\"12\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-10 78 35)\"/>\n          <ellipse cx=\"122\" cy=\"35\" rx=\"12\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(10 122 35)\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Ursinho Pardo.",
      "2. Adicione as orelhas ou características principais da espécie (round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (belly) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"68\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"132\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Urso Panda Fofo.",
      "2. Adicione as orelhas ou características principais da espécie (round_black).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (panda_vest) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"68\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"132\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Raposinha Esperta.",
      "2. Adicione as orelhas ou características principais da espécie (triangle_white).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (chest_fluff) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Lobinho Guardião.",
      "2. Adicione as orelhas ou características principais da espécie (pointed_tall).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (mane_rough) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Cervo da Floresta.",
      "2. Adicione as orelhas ou características principais da espécie (leaf).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (antlers) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Esquilo com Noz.",
      "2. Adicione as orelhas ou características principais da espécie (tufted).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (acorn) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Ouriço Espinhoso.",
      "2. Adicione as orelhas ou características principais da espécie (small).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (spikes) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Canguru Saltador.",
      "2. Adicione as orelhas ou características principais da espécie (long_pointed).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (pouch) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Hipopótamo Guloso.",
      "2. Adicione as orelhas ou características principais da espécie (tiny_round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (teeth) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Rinoceronte Forte.",
      "2. Adicione as orelhas ou características principais da espécie (small).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (armor_plates) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Camelo do Deserto.",
      "2. Adicione as orelhas ou características principais da espécie (small).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (humps) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Bicho-Preguiça Tranquilo.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (claws_hang) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Castor Construtor.",
      "2. Adicione as orelhas ou características principais da espécie (small_round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (paddle_tail) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Guaxinim Mascarado.",
      "2. Adicione as orelhas ou características principais da espécie (pointed).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (tail_rings) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M72 58 L62 25 L88 48 Z M128 58 L138 25 L112 48 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Morceguinho Noturno.",
      "2. Adicione as orelhas ou características principais da espécie (bat_ears).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (wings_spread) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Coala no Eucalipto.",
      "2. Adicione as orelhas ou características principais da espécie (fluffy_round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (hug_branch) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Lêmure de Olhos Grandes.",
      "2. Adicione as orelhas ou características principais da espécie (pointed_tuft).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (tail_rings) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Cavalinho Veloz.",
      "2. Adicione as orelhas ou características principais da espécie (pointed).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (mane_flow) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M72 58 L62 25 L88 48 Z M128 58 L138 25 L112 48 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Vaquinha Malhada.",
      "2. Adicione as orelhas ou características principais da espécie (droop).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (cow_spots) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Porquinho Rosado.",
      "2. Adicione as orelhas ou características principais da espécie (triangle_down).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (curly_tail) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Ovelhinha de Lã.",
      "2. Adicione as orelhas ou características principais da espécie (droop_small).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (wool_curls) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Hamster Bochechudo.",
      "2. Adicione as orelhas ou características principais da espécie (round_small).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (cheeks_puffed) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Porquinho-da-Índia.",
      "2. Adicione as orelhas ou características principais da espécie (fold).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (patch_quilt) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Furão Curioso.",
      "2. Adicione as orelhas ou características principais da espécie (small_round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (long_body) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Lontrinha Aquática.",
      "2. Adicione as orelhas ou características principais da espécie (small).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (holding_shell) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Ornitorrinco Curioso.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (webbed_paws) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Tamanduá-Bandeira.",
      "2. Adicione as orelhas ou características principais da espécie (small).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (stripe_shoulder) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Tatu-Bola Protetor.",
      "2. Adicione as orelhas ou características principais da espécie (pointed).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (armor_bands) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M72 58 L62 25 L88 48 Z M128 58 L138 25 L112 48 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Capivara Tranquila.",
      "2. Adicione as orelhas ou características principais da espécie (small_round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (grass_bite) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Mico-Leão-Dourado.",
      "2. Adicione as orelhas ou características principais da espécie (round_hidden).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (golden_mane) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Onça-Pintada Soberana.",
      "2. Adicione as orelhas ou características principais da espécie (round).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (jaguar_rosettes) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"68\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"132\" cy=\"52\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Patinho na Lagoa.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (wings_folded) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Galinha Carijó.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (comb_wattle) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Galo Madrugador.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (big_comb) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Pintinho Amarelinho.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (fluff_body) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Pinguim Imperador.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (tuxedo) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Tucano do Bico Amarelo.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (white_throat) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Arara-Azul Colorida.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (long_feathers) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Corujinha da Sabedoria.",
      "2. Adicione as orelhas ou características principais da espécie (feather_tufts).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (breast_specks) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Flamingo Elegante.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (s_neck) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Águia Soberana.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (spread_wings) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Pavão Majestoso.",
      "2. Adicione as orelhas ou características principais da espécie (crown_crest).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (giant_peacock_fan) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Cisne Encantado.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (curved_neck) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Pombinha da Paz.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (olive_branch) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Beija-Flor Veloz.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (motion_wings) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Pelicano Pescador.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (fish_in_beak) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Gaivota da Praia.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (glide_wings) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Periquito Verde.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (cheek_patch) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Canarinho Cantador.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (song_notes) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Avestruz Corredor.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (feather_fluff) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Calopsita com Topete.",
      "2. Adicione as orelhas ou características principais da espécie (crest_tall).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (orange_cheeks) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 70 Q130 65 145 80 Q120 90 100 85 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M60 130 Q45 150 70 160 Q85 145 80 130 Z M120 130 Q145 140 135 160 Q115 155 120 130 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <line x1=\"85\" y1=\"172\" x2=\"85\" y2=\"188\" stroke-width=\"2.5\"/>\n          <line x1=\"115\" y1=\"172\" x2=\"115\" y2=\"188\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Peixinho Palhaço.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (fish_stripes) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Tubarãozinho Amigo.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (dorsal_fin) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Baleia Jubarte.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (water_spout) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Golfinho Saltador.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (curved_jump) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Polvo dos Oito Braços.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (eight_arms) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Tartaruga Marinha.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (shell_scutes) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Caranguejo da Praia.",
      "2. Adicione as orelhas ou características principais da espécie (eye_stalks).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (big_claws) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Cavalo-Marinho.",
      "2. Adicione as orelhas ou características principais da espécie (dorsal_ridge).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (curled_tail) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Estrela-do-Mar.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (star_arms) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Água-Viva Brilhante.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (wavy_tentacles) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Lula das Profundezas.",
      "2. Adicione as orelhas ou características principais da espécie (triangular_fins).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (long_arms) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Foquinha Brincalhona.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (flipper_paws) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Arraia Manta.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (diamond_wings) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Lagosta Vermelha.",
      "2. Adicione as orelhas ou características principais da espécie (long_antennas).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (tail_fan) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Peixe-Espada Rápido.",
      "2. Adicione as orelhas ou características principais da espécie (sail_fin).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (sail_dorsal) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M100 45 Q115 25 130 45 Q115 48 100 45 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M52 140 Q30 140 40 165 Q60 155 65 145 Z M148 140 Q170 140 160 165 Q140 155 135 145 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M85 178 Q100 195 115 178 Q100 172 85 178 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Sapinho Cururu.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (spots_green) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Jacaré do Pantanal.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (back_ridges) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Camaleão das Cores.",
      "2. Adicione as orelhas ou características principais da espécie (crest).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (spiral_tail) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Cobrinha Amiga.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (body_coils) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Tartaruguinha da Terra.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (dome_shell) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Iguana com Crista.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (spines_back) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Borboleta Colorida.",
      "2. Adicione as orelhas ou características principais da espécie (antennas_curl).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (pattern_wings) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Abelhinha Produtora.",
      "2. Adicione as orelhas ou características principais da espécie (antennas).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (yellow_stripes) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Joaninha Pintadinha.",
      "2. Adicione as orelhas ou características principais da espécie (antennas_short).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (ladybug_dots) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Formiguinha Valente.",
      "2. Adicione as orelhas ou características principais da espécie (antennas_bent).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (three_segments) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Caracol no Jardim.",
      "2. Adicione as orelhas ou características principais da espécie (tentacles_eyes).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (spiral_shell) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Libélula Encantada.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (four_wings) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Lagartinha Fofa.",
      "2. Adicione as orelhas ou características principais da espécie (antennas_dot).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (body_beads) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Grilinho Cantor.",
      "2. Adicione as orelhas ou características principais da espécie (long_antennas).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (jump_legs) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Louva-a-Deus Mestre.",
      "2. Adicione as orelhas ou características principais da espécie (antennas).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (folded_arms) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de T-Rex Rei dos Dinos.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (tiny_arms) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Tricerátops Forte.",
      "2. Adicione as orelhas ou características principais da espécie (frill_plate).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (three_horns) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Braquiossauro Alto.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (long_tall_neck) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Estegossauro com Placas.",
      "2. Adicione as orelhas ou características principais da espécie (none).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (back_plates) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a forma geométrica base da cabeça e do corpo de Pterodáctilo Voador.",
      "2. Adicione as orelhas ou características principais da espécie (crest_back).",
      "3. Trace as patinhas, asas ou membros e a cauda.",
      "4. Faça os olhos grandes estilo anime, focinho e boca sorridente.",
      "5. Adicione os detalhes finais (leather_wings) e contornos firmes."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"42\" ry=\"38\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"100\" cy=\"140\" rx=\"48\" ry=\"42\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<circle cx=\"70\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"130\" cy=\"55\" r=\"14\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<ellipse cx=\"78\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"122\" cy=\"172\" rx=\"14\" ry=\"10\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M142 145 Q172 135 168 110 Q160 105 150 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"83\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <ellipse cx=\"115\" cy=\"80\" rx=\"9\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>\n    <circle cx=\"113\" cy=\"76\" r=\"3.5\" fill=\"#1e293b\"/>\n    <path d=\"M96 95 Q100 98 104 95 Q100 102 96 95 Z\" fill=\"none\" stroke-width=\"2\"/>\n    <path d=\"M94 102 Q100 108 106 102\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<line x1=\"68\" y1=\"96\" x2=\"48\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"68\" y1=\"102\" x2=\"46\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"96\" x2=\"152\" y2=\"92\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"132\" y1=\"102\" x2=\"154\" y2=\"104\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M90 125 Q100 120 110 125 Q100 155 90 125 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.5\">\n    <path d=\"M10 190 Q50 180 100 190 T200 190\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"40\" r=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M150 35 Q165 20 180 35 Q195 25 205 40 Q215 55 190 55 L145 55 Q135 45 150 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Praia Tropical com Coqueiro).",
      "2. Desenhe o marco principal central (palm).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (coconuts) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M140 140 Q130 90 145 65\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M145 65 Q115 50 105 70 M145 65 Q135 40 150 35 M145 65 Q175 45 180 65 M145 65 Q160 80 150 90\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Montanhas com Neve).",
      "2. Desenhe o marco principal central (peaks).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (pines) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"30,140 85,55 140,140\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"100,140 145,75 190,140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Floresta Encantada).",
      "2. Desenhe o marco principal central (trees_dense).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (mushrooms) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Espaço Cósmico & Planetas).",
      "2. Desenhe o marco principal central (saturn).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (stars) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"35\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"100\" rx=\"60\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\" transform=\"rotate(-25 100 100)\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Fundo do Mar com Corais).",
      "2. Desenhe o marco principal central (corals).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (seaweed) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Castelo das Três Torres).",
      "2. Desenhe o marco principal central (towers).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (moat) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<rect x=\"65\" y=\"85\" width=\"70\" height=\"55\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"55\" y=\"65\" width=\"22\" height=\"75\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"123\" y=\"65\" width=\"22\" height=\"75\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"52,65 66,40 80,65\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"120,65 134,40 148,65\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Cidade com Arranha-Céus).",
      "2. Desenhe o marco principal central (skyline).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (antennas) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Vulcão em Erupção).",
      "2. Desenhe o marco principal central (eruption).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (smoke) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"30,140 85,55 140,140\" fill=\"none\" stroke-width=\"2.5\"/>\n          <polygon points=\"100,140 145,75 190,140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Ilha do Tesouro Perdido).",
      "2. Desenhe o marco principal central (island_palm).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (treasure_chest) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Fazendinha com Celeiro).",
      "2. Desenhe o marco principal central (barn).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (fence) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Céu com Lindo Arco-Íris).",
      "2. Desenhe o marco principal central (rainbow_arc).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (clouds) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Deserto com Cactos).",
      "2. Desenhe o marco principal central (cactus_dunes).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (sun_rays) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Cachoeira na Mata).",
      "2. Desenhe o marco principal central (water_fall).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (river_rocks) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Lago das Vitórias-Régias).",
      "2. Desenhe o marco principal central (lily_pads).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (lotus_flowers) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Savana ao Pôr do Sol).",
      "2. Desenhe o marco principal central (acacia_tree).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (sunset_giant) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Polo Norte com Geleiras).",
      "2. Desenhe o marco principal central (icebergs).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (snow_mounds) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Caverna com Cristais).",
      "2. Desenhe o marco principal central (crystals).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (stalactites) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Pântano das Fadas).",
      "2. Desenhe o marco principal central (willow_tree).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (fireflies) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Colinas com Flores).",
      "2. Desenhe o marco principal central (rolling_hills).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (wildflowers) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Pôr do Sol no Oceano).",
      "2. Desenhe o marco principal central (sun_sinking).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (waves_glow) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Farol com Facho de Luz).",
      "2. Desenhe o marco principal central (light_beam).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (cliffs) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Casa de Campo Floridinha).",
      "2. Desenhe o marco principal central (cottage_house).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (garden_fence) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Moinho de Vento Holandês).",
      "2. Desenhe o marco principal central (windmill_blades).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (tulips) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Ponte sobre o Rio Azul).",
      "2. Desenhe o marco principal central (arch_bridge).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (river_banks) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Parque com Roda-Gigante).",
      "2. Desenhe o marco principal central (ferris_wheel).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (balloons) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Tenda do Circo da Alegria).",
      "2. Desenhe o marco principal central (circus_tent).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (pennants) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Estação de Trem a Vapor).",
      "2. Desenhe o marco principal central (train_station).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (tracks) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Templo Pagoda Oriental).",
      "2. Desenhe o marco principal central (multi_roofs).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (cherry_blossom) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Casa na Árvore dos Sonhos).",
      "2. Desenhe o marco principal central (tree_platform).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (rope_ladder) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Igloo no Meio da Neve).",
      "2. Desenhe o marco principal central (ice_dome).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (snowflakes) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Noite com Lua Crescente).",
      "2. Desenhe o marco principal central (crescent_moon).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (twinkling_stars) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Céu com Aurora Boreal).",
      "2. Desenhe o marco principal central (wavy_lights).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (snowy_pines) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Nuvem com Chuva & Trovão).",
      "2. Desenhe o marco principal central (rain_cloud).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (lightning_bolts) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Estufa de Vidro do Jardim).",
      "2. Desenhe o marco principal central (glass_dome).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (potted_plants) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Vale Pré-Histórico).",
      "2. Desenhe o marco principal central (ferns_canyon).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (dino_footprints) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Base na Cratera Lunar).",
      "2. Desenhe o marco principal central (moon_dome).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (craters) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Balanço Debaixo da Árvore).",
      "2. Desenhe o marco principal central (big_oak).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (rope_swing) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Acampamento com Fogueira).",
      "2. Desenhe o marco principal central (tent_triangular).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (campfire) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Canteiros da Hortinha).",
      "2. Desenhe o marco principal central (soil_rows).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (veggies_sprouting) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Campo Cheio de Girassóis).",
      "2. Desenhe o marco principal central (giant_sunflower).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (rows_sunflowers) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Canteiro de Tulipas).",
      "2. Desenhe o marco principal central (tulip_buds).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (stem_rows) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Mina com Trilhos e Vagão).",
      "2. Desenhe o marco principal central (mine_shaft).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (cart_with_gold) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Ocas da Aldeia na Floresta).",
      "2. Desenhe o marco principal central (thatched_huts).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (fire_pit) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Castelo de Areia na Praia).",
      "2. Desenhe o marco principal central (sand_towers).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (bucket_shovel) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Caminho Curvo na Mata).",
      "2. Desenhe o marco principal central (curving_path).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (arched_branches) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Riacho com Pedras Redondas).",
      "2. Desenhe o marco principal central (water_flow).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (stepping_stones) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Grande Pomar com Frutas).",
      "2. Desenhe o marco principal central (fruit_tree).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (apples_on_tree) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Mirante no Topo da Serra).",
      "2. Desenhe o marco principal central (railing_cliff).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (distant_peaks) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Céu Colorido com Pipas).",
      "2. Desenhe o marco principal central (flying_kites).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (cloud_fluffs) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Trace a linha do horizonte e as bases geográficas da paisagem (Cúpula Submarina do Futuro).",
      "2. Desenhe o marco principal central (glass_domes).",
      "3. Adicione os planos secundários (montanhas, colinas ou construções).",
      "4. Faça o céu temático (sol, nuvens, estrelas ou arco-íris).",
      "5. Adicione texturas do solo, vegetação (sea_tunnels) e retoques finais."
    ],
    "layers": [
      "<line x1=\"15\" y1=\"140\" x2=\"185\" y2=\"140\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M15 165 Q60 150 110 165 T185 165\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M40 140 Q70 80 100 140 Q130 90 160 140\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M25 140 Q55 115 90 140 M110 140 Q145 120 175 140\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"50\" cy=\"165\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n    <circle cx=\"155\" cy=\"162\" r=\"6\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"45\" cy=\"45\" r=\"18\" fill=\"none\" stroke-width=\"2.5\"/>\n    <path d=\"M22 45 L14 45 M68 45 L76 45 M45 22 L45 14 M45 68 L45 76 M28 28 L22 22 M62 62 L68 68 M62 28 L68 22 M28 62 L22 68\" stroke-width=\"2\"/>\n    <path d=\"M125 45 Q140 32 155 45 Q170 35 180 50 L115 50 Q112 40 125 45 Z\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M30 175 L33 168 L36 175 M33 175 L33 168 M165 178 L168 170 L171 178 M70 170 Q75 162 80 170\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <path d=\"M60 48 Q70 42 80 48 Q70 54 60 48 Z M85 40 Q92 35 100 40 Q92 45 85 40 Z\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <rect x=\"10\" y=\"10\" width=\"180\" height=\"180\" rx=\"8\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Carro de Corrida Veloz).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Avião de Passageiros).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Foguete Rumo à Lua).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Barco a Vela no Mar).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Trem a Vapor com Fumaça).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Helicóptero de Resgate).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Submarino de Exploração).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Caminhão de Bombeiros).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Trator Forte da Fazenda).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Ônibus Escolar Amarelo).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Balão de Ar Quente).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Bicicleta com Cestinha).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Motocicleta Esportiva).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Navio Pirata com Canhões).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Ambulância do Hospital).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Carro de Polícia).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Escavadeira com Concha).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Caminhão Guincho).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Skate Radical com Rodinhas).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Patinete com Guidão).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Patins Clássico).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Carrinho de Bebê).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Cabine de Teleférico).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Drone com Quatro Hélices).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Lancha Rápida no Mar).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Caminhão Baú de Carga).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Caminhão Caçamba Basculante).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Paraquedas Aberto no Céu).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Hovercraft Anfíbio).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Kart com Volante).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<path d=\"M35 130 Q45 95 90 90 Q145 90 165 115 L175 130 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n          <line x1=\"25\" y1=\"130\" x2=\"180\" y2=\"130\" stroke-width=\"2.5\"/>",
      "<circle cx=\"65\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"16\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M85 96 L125 96 L130 115 L80 115 Z\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"65\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"145\" cy=\"135\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"32\" cy=\"120\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <rect x=\"170\" y=\"118\" width=\"8\" height=\"6\" rx=\"2\" fill=\"none\" stroke-width=\"2\"/>\n          <line x1=\"102\" y1=\"96\" x2=\"102\" y2=\"128\" stroke-width=\"2\"/>",
      "<path d=\"M20 145 L185 145 M15 125 Q8 120 18 115\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Lápis com Borracha).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<rect x=\"85\" y=\"30\" width=\"30\" height=\"120\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,150 100,185 115,150\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"30\" width=\"30\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"50\" x2=\"95\" y2=\"150\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"150\" stroke-width=\"2\"/>",
      "<polygon points=\"96,172 100,185 104,172\" fill=\"#1e293b\"/>\n          <line x1=\"85\" y1=\"42\" x2=\"115\" y2=\"42\" stroke-width=\"2\"/>",
      "<path d=\"M125 40 Q135 30 145 40 M128 55 Q138 45 148 55\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Livro Aberto do Saber).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<rect x=\"85\" y=\"30\" width=\"30\" height=\"120\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,150 100,185 115,150\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"30\" width=\"30\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"50\" x2=\"95\" y2=\"150\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"150\" stroke-width=\"2\"/>",
      "<polygon points=\"96,172 100,185 104,172\" fill=\"#1e293b\"/>\n          <line x1=\"85\" y1=\"42\" x2=\"115\" y2=\"42\" stroke-width=\"2\"/>",
      "<path d=\"M125 40 Q135 30 145 40 M128 55 Q138 45 148 55\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Mochila Escolar com Bolsos).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<rect x=\"85\" y=\"30\" width=\"30\" height=\"120\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,150 100,185 115,150\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"30\" width=\"30\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"50\" x2=\"95\" y2=\"150\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"150\" stroke-width=\"2\"/>",
      "<polygon points=\"96,172 100,185 104,172\" fill=\"#1e293b\"/>\n          <line x1=\"85\" y1=\"42\" x2=\"115\" y2=\"42\" stroke-width=\"2\"/>",
      "<path d=\"M125 40 Q135 30 145 40 M128 55 Q138 45 148 55\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Tesoura sem Ponta).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<rect x=\"85\" y=\"30\" width=\"30\" height=\"120\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,150 100,185 115,150\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"30\" width=\"30\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"50\" x2=\"95\" y2=\"150\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"150\" stroke-width=\"2\"/>",
      "<polygon points=\"96,172 100,185 104,172\" fill=\"#1e293b\"/>\n          <line x1=\"85\" y1=\"42\" x2=\"115\" y2=\"42\" stroke-width=\"2\"/>",
      "<path d=\"M125 40 Q135 30 145 40 M128 55 Q138 45 148 55\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Régua Escolar com Números).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<rect x=\"85\" y=\"30\" width=\"30\" height=\"120\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,150 100,185 115,150\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"30\" width=\"30\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"50\" x2=\"95\" y2=\"150\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"150\" stroke-width=\"2\"/>",
      "<polygon points=\"96,172 100,185 104,172\" fill=\"#1e293b\"/>\n          <line x1=\"85\" y1=\"42\" x2=\"115\" y2=\"42\" stroke-width=\"2\"/>",
      "<path d=\"M125 40 Q135 30 145 40 M128 55 Q138 45 148 55\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Paleta de Tintas com Pincel).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<rect x=\"85\" y=\"30\" width=\"30\" height=\"120\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,150 100,185 115,150\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"30\" width=\"30\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"50\" x2=\"95\" y2=\"150\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"150\" stroke-width=\"2\"/>",
      "<polygon points=\"96,172 100,185 104,172\" fill=\"#1e293b\"/>\n          <line x1=\"85\" y1=\"42\" x2=\"115\" y2=\"42\" stroke-width=\"2\"/>",
      "<path d=\"M125 40 Q135 30 145 40 M128 55 Q138 45 148 55\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Computador Portátil).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Robô Metálico Amigo).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Lâmpada de Boas Ideias).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Relógio Despertador).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Telescópio Astronômico).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Microscópio de Cientista).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Lupa de Detetive).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<rect x=\"85\" y=\"30\" width=\"30\" height=\"120\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,150 100,185 115,150\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"30\" width=\"30\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"50\" x2=\"95\" y2=\"150\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"150\" stroke-width=\"2\"/>",
      "<polygon points=\"96,172 100,185 104,172\" fill=\"#1e293b\"/>\n          <line x1=\"85\" y1=\"42\" x2=\"115\" y2=\"42\" stroke-width=\"2\"/>",
      "<path d=\"M125 40 Q135 30 145 40 M128 55 Q138 45 148 55\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Chave Mágica Dourada).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Cadeado de Ferro).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Bússola com Rosa dos Ventos).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Âncora Náutica de Navio).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Baú de Moedas de Ouro).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Guarda-Chuva Colorido).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Vaso com Lindas Flores).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Câmera Fotográfica).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Xícara Fumegante de Chá).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Regador de Plantas).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Lanterna com Luz Brilhante).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Violão de Seis Cordas).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Teclado com Teclas Brancas).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Bateria com Tambores e Pratos).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Trompete Musical Reluzente).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Saxofone Curvo Dourado).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Flauta Doce de Madeira).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Microfone de Show Musical).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Bola Clássica de Futebol).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Bola Laranja de Basquete).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Troféu Dourado de Campeão).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Medalha com Fita Listrada).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Pipa Losango com Rabiola).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Pião de Madeira com Ponta).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Ioiô com Cordinha).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Ursinho de Pelúcia com Laço).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Castelo de Blocos de Madeira).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Bola Inflável Listrada).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Dado com Pontinhos Pretos).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Ferradura da Boa Sorte).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Machado de Lenhador).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Martelo com Prego).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Serrote com Dentes Afiados).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Pazinha e Baldinho de Praia).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Chaleira com Apito de Vapor).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Bule de Café Elegante).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Abajur com Cúpula de Luz).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Espelho Oval com Cabo).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Pente com Dentes Finos).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Escova com Pasta Dental).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Sabonete com Espuma e Bolhas).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Toalha Macia Dobrada).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Travesseiro Fofinho).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Cama com Travesseiro e Cobertor).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Globo Terrestre Giratório).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<rect x=\"85\" y=\"30\" width=\"30\" height=\"120\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,150 100,185 115,150\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"30\" width=\"30\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"50\" x2=\"95\" y2=\"150\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"150\" stroke-width=\"2\"/>",
      "<polygon points=\"96,172 100,185 104,172\" fill=\"#1e293b\"/>\n          <line x1=\"85\" y1=\"42\" x2=\"115\" y2=\"42\" stroke-width=\"2\"/>",
      "<path d=\"M125 40 Q135 30 145 40 M128 55 Q138 45 148 55\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Calculadora com Visor e Teclas).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<rect x=\"85\" y=\"30\" width=\"30\" height=\"120\" rx=\"4\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<polygon points=\"85,150 100,185 115,150\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"85\" y=\"30\" width=\"30\" height=\"20\" rx=\"3\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<line x1=\"95\" y1=\"50\" x2=\"95\" y2=\"150\" stroke-width=\"2\"/>\n          <line x1=\"105\" y1=\"50\" x2=\"105\" y2=\"150\" stroke-width=\"2\"/>",
      "<polygon points=\"96,172 100,185 104,172\" fill=\"#1e293b\"/>\n          <line x1=\"85\" y1=\"42\" x2=\"115\" y2=\"42\" stroke-width=\"2\"/>",
      "<path d=\"M125 40 Q135 30 145 40 M128 55 Q138 45 148 55\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno da estrutura principal do objeto (Envelope com Selo de Coração).",
      "2. Acrescente os componentes essenciais (rodas, asas, cabo ou suporte).",
      "3. Adicione aberturas, divisões, janelas ou mostradores.",
      "4. Faça os elementos funcionais (faróis, botões, parafusos ou detalhes).",
      "5. Finalize com linhas de brilho, texturas e contorno nítido para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"100\" r=\"55\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<rect x=\"75\" y=\"15\" width=\"50\" height=\"30\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"165\" rx=\"30\" ry=\"12\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke-width=\"2\"/>",
      "<line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"75\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n          <line x1=\"100\" y1=\"100\" x2=\"120\" y2=\"100\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#1e293b\"/>",
      "<path d=\"M45 40 Q35 50 45 60 M155 40 Q165 50 155 60\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <circle cx=\"35\" cy=\"40\" r=\"10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,35 168,43 176,43 170,48 172,56 165,51 158,56 160,48 154,43 162,43\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Maçã com Cabinho e Folha).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Banana Sorridente).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Fatia de Melancia).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Cacho de Uvas Roxas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Laranja com Gomos).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Morango com Sementinhas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pera Verde Suculenta).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Abacaxi com Coroa).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Limão Siciliano Azedinho).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Dupla de Cerejas Vermelhas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pêssego Aveludado).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Abacate com Caroço Redondo).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Kiwi Fatiado).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Caju com Castanha).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Coco Verde com Canudinho).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Mamão Papaia Aberto).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Manga Rosa Suculenta).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Melão Redondo Amarelinho).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Tigela de Mirtilos Azuis).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Framboesa Vermelhinha).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Amora Silvestre Roxa).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Figo Doce com Folha).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Goiaba com Polpa Rosada).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Maracujá com Suco Amarelo).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Caqui Doce Vermelho).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Raminho de Jabuticabas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pitanga com Oito Gomos).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Carambola em Formato de Estrela).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Trio de Acerolas Vermelhas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Romã Aberta com Rubis).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<path d=\"M100 60 C65 40 40 80 50 120 C60 160 90 175 100 170 C110 175 140 160 150 120 C160 80 135 40 100 60 Z\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M100 60 Q105 35 120 28\" fill=\"none\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n          <path d=\"M115 35 Q135 25 145 40 Q130 50 115 35 Z\" fill=\"none\" stroke-width=\"2.2\"/>",
      "<path d=\"M70 95 Q65 110 70 125 M130 95 Q135 110 130 125\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"85\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"115\" cy=\"95\" r=\"2.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 108 Q100 114 106 108\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M68 80 Q62 95 68 110\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Cenoura com Rama Verde).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Espiga de Milho Amarelinha).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Tomate Redondo com Raminho).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Cogumelo com Pintinhas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Berinjela Roxa Brilhante).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Brócolis em Formato de Árvore).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Abóbora Redonda com Gomos).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Batatinha Sorridente).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pimentão com Caule Verde).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Vagem de Ervilhas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pé de Alface Fresquinha).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Cebola com Casca Dourada).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Cabeça de Alho com Dentes).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pepino Verde Listradinho).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Rabanete com Folhas Verdes).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Beterraba Vermelha da Terra).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Mandioca com Casca Marrom).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Couve-Flor com Talo Verde).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Feixe de Aspargos).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Alcachofra com Pétalas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<polygon points=\"75,55 125,55 100,175\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<path d=\"M90 55 Q75 25 65 35 M100 55 Q100 20 105 25 M110 55 Q125 25 135 35\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<line x1=\"82\" y1=\"85\" x2=\"105\" y2=\"85\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"92\" y1=\"115\" x2=\"115\" y2=\"115\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <line x1=\"95\" y1=\"145\" x2=\"108\" y2=\"145\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<circle cx=\"92\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"108\" cy=\"75\" r=\"3\" fill=\"#1e293b\"/>\n          <path d=\"M96 82 Q100 86 104 82\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<ellipse cx=\"100\" cy=\"55\" rx=\"25\" ry=\"6\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Hambúrguer com Pão e Queijo).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Fatia de Pizza com Queijo).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Sorvete com Duas Bolas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Cupcake com Confeitos).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Picolé Gelado no Palito).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Donut com Calda de Morango).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Fatia de Bolo de Festa).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pão Francês Quentinho).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Caixa Listrada de Pipoca).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pirulito Espiral Colorido).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Cookie com Gotas de Chocolate).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Bala Doce com Embrulho).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pacote de Batatas Fritas).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Coxinha Douradinha).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pastel de Feira Crocante).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Cesta de Pães de Queijo).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Torta de Maçã Trançadinha).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Pudim de Leite com Calda).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Waffle com Manteiga e Mel).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe o contorno orgânico principal do alimento (Caneca de Achocolatado Quente).",
      "2. Acrescente o cabinho, folhas, casca ou fatias complementares.",
      "3. Adicione divisões internas (gomos, camadas ou recheios).",
      "4. Faça as sementinhas, confeitos, textura ou calda.",
      "5. Desenhe o brilho e os traços finais para pintura apetitosa."
    ],
    "layers": [
      "<ellipse cx=\"100\" cy=\"85\" rx=\"55\" ry=\"32\" fill=\"none\" stroke-width=\"2.5\"/>\n          <rect x=\"45\" y=\"125\" width=\"110\" height=\"30\" rx=\"8\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M42 110 Q100 105 158 110 Q100 115 42 110 Z\" fill=\"none\" stroke-width=\"2.5\"/>\n          <path d=\"M45 118 Q55 126 65 118 Q75 126 85 118 Q95 126 105 118 Q115 126 125 118 Q135 126 145 118 Q155 126 158 118\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"80\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"100\" cy=\"70\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"120\" cy=\"75\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"90\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>\n          <circle cx=\"110\" cy=\"85\" r=\"2.5\" fill=\"#1e293b\"/>",
      "<path d=\"M75 130 L85 142 L95 130 M115 130 L125 142 L135 130\" stroke-width=\"2\" stroke-linejoin=\"round\"/>",
      "<path d=\"M60 65 Q75 58 95 62\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <ellipse cx=\"100\" cy=\"180\" rx=\"80\" ry=\"12\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n    <circle cx=\"35\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <circle cx=\"165\" cy=\"45\" r=\"4\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Kitsune Raposinha Mística.",
      "2. Acrescente os elementos místicos principais (chibi).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Dragãozinho Ryu da Sabedoria.",
      "2. Acrescente os elementos místicos principais (dragon_chibi).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Gatinho Neko da Boa Sorte.",
      "2. Acrescente os elementos místicos principais (lucky).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Panda Sensei com Faixa Ninja.",
      "2. Acrescente os elementos místicos principais (sensei).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Unicórnio com Chifre Espiral.",
      "2. Acrescente os elementos místicos principais (spiral_horn).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Pégaso com Asas Abertas.",
      "2. Acrescente os elementos místicos principais (winged).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Estrelinha Mágica Sorridente.",
      "2. Acrescente os elementos místicos principais (chibi).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Nuvem Feliz com Arco-Íris.",
      "2. Acrescente os elementos místicos principais (rainbow_drops).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Solzinho com Óculos Escuros.",
      "2. Acrescente os elementos místicos principais (shades).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Lua com Touca de Dormir.",
      "2. Acrescente os elementos místicos principais (nightcap).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Fadinha com Asas Brilhantes.",
      "2. Acrescente os elementos místicos principais (sparkle).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Duende com Chapéu Pontudo.",
      "2. Acrescente os elementos místicos principais (pointy_hat).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Mago com Livro de Feitiços.",
      "2. Acrescente os elementos místicos principais (spellbook).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Coroa Real Ensino Soberano.",
      "2. Acrescente os elementos místicos principais (jeweled).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<path d=\"M40 140 L45 75 L75 105 L100 65 L125 105 L155 75 L160 140 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<rect x=\"35\" y=\"140\" width=\"130\" height=\"22\" rx=\"6\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"45\" cy=\"70\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"60\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"155\" cy=\"70\" r=\"7\" fill=\"none\" stroke-width=\"2\"/>",
      "<polygon points=\"65,151 72,144 79,151 72,158\" fill=\"none\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"151\" r=\"5\" fill=\"none\" stroke-width=\"2\"/>\n          <polygon points=\"121,151 128,144 135,151 128,158\" fill=\"none\" stroke-width=\"2\"/>",
      "<path d=\"M90 100 Q100 90 110 100 Q100 110 90 100 Z\" fill=\"none\" stroke-width=\"2\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Varinha de Condão com Estrela.",
      "2. Acrescente os elementos místicos principais (star_tip).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<line x1=\"45\" y1=\"165\" x2=\"135\" y2=\"75\" stroke-width=\"4\" stroke-linecap=\"round\"/>",
      "<polygon points=\"145,50 152,68 170,68 156,79 161,96 145,86 129,96 134,79 120,68 138,68\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<circle cx=\"145\" cy=\"73\" r=\"8\" fill=\"none\" stroke-width=\"2\"/>",
      "<circle cx=\"110\" cy=\"45\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"175\" cy=\"105\" r=\"3\" fill=\"#1e293b\"/>\n          <circle cx=\"160\" cy=\"35\" r=\"2\" fill=\"#1e293b\"/>",
      "<path d=\"M110 100 Q95 115 110 130\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Escudo com Brasão de Leão.",
      "2. Acrescente os elementos místicos principais (crest).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Espada Ninja com Bainha.",
      "2. Acrescente os elementos místicos principais (sheath).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Frasco de Poção com Bolhas.",
      "2. Acrescente os elementos místicos principais (bubbles).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Fantasminha Feliz e Amigo.",
      "2. Acrescente os elementos místicos principais (wavy).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Bola de Cristal Iluminada.",
      "2. Acrescente os elementos místicos principais (pedestal).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Chapéu de Bruxo com Fivela.",
      "2. Acrescente os elementos místicos principais (buckle).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Lâmpada dos Três Desejos.",
      "2. Acrescente os elementos místicos principais (smoke).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Tapete Mágico com Franjas.",
      "2. Acrescente os elementos místicos principais (fringes).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Pena com Frasco de Tinta.",
      "2. Acrescente os elementos místicos principais (scroll).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Pergaminho Ninja Aberto.",
      "2. Acrescente os elementos místicos principais (unrolled).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Shuriken Ninja de 4 Pontas.",
      "2. Acrescente os elementos místicos principais (four_points).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Kunai Ninja com Argola.",
      "2. Acrescente os elementos místicos principais (wrapped).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Máscara Kitsune Tradicional.",
      "2. Acrescente os elementos místicos principais (festival).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Leque Japonês de Cerejeira.",
      "2. Acrescente os elementos místicos principais (cherry).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Lanterna de Papel Vermelha.",
      "2. Acrescente os elementos místicos principais (tassels).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Portal Sagrado Torii.",
      "2. Acrescente os elementos místicos principais (shrine).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Galho com Flores de Sakura.",
      "2. Acrescente os elementos místicos principais (blossom).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Pássaro Tsuru de Papel.",
      "2. Acrescente os elementos místicos principais (folded).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Carpa Koi da Prosperidade.",
      "2. Acrescente os elementos místicos principais (stream).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Pequeno Bonsai no Vaso.",
      "2. Acrescente os elementos místicos principais (ceramic_pot).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Cogumelo Brilhante com Olhos.",
      "2. Acrescente os elementos místicos principais (glowing).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Ametista Roxa Multifacetada.",
      "2. Acrescente os elementos místicos principais (facets).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Rubi Vermelho Brilhante.",
      "2. Acrescente os elementos místicos principais (cut).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Par de Asas de Plumas Brancas.",
      "2. Acrescente os elementos místicos principais (feathers).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Harpa Dourada dos Céus.",
      "2. Acrescente os elementos místicos principais (strings).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Sino Dourado com Laço Vermelho.",
      "2. Acrescente os elementos místicos principais (ribbon).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Vela Aconchegante com Chama.",
      "2. Acrescente os elementos místicos principais (flame).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Fogueira Mágica com Faíscas.",
      "2. Acrescente os elementos místicos principais (logs).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Caldeirão com Poção Borbulhante.",
      "2. Acrescente os elementos místicos principais (bubbles).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Chave com Cabeça de Coração.",
      "2. Acrescente os elementos místicos principais (love).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Trevo de Quatro Folhas Mágico.",
      "2. Acrescente os elementos místicos principais (lucky).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Concha Aberta com Pérola Real.",
      "2. Acrescente os elementos místicos principais (open).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Sereiazinha com Cauda Brilhante.",
      "2. Acrescente os elementos místicos principais (scales).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Cometa com Poeira Estelar.",
      "2. Acrescente os elementos místicos principais (tail).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
      "1. Desenhe a silhueta mágica fundamental de Hikari Sensei (Ensino Soberano).",
      "2. Acrescente os elementos místicos principais (crown).",
      "3. Desenhe expressões chibi kawaii ou ornamentos reais.",
      "4. Adicione as faíscas de magia, brilhos ou texturas místicas.",
      "5. Contorne tudo com traço ninja firme e prepare para colorir."
    ],
    "layers": [
      "<circle cx=\"100\" cy=\"85\" r=\"45\" fill=\"none\" stroke-width=\"2.5\"/>\n          <ellipse cx=\"100\" cy=\"145\" rx=\"35\" ry=\"30\" fill=\"none\" stroke-width=\"2.5\"/>",
      "<path d=\"M65 52 L50 20 L82 40 Z M135 52 L150 20 L118 40 Z\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>",
      "<ellipse cx=\"85\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"82\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"88\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <ellipse cx=\"115\" cy=\"82\" rx=\"10\" ry=\"14\" fill=\"none\" stroke-width=\"2.5\"/>\n          <circle cx=\"112\" cy=\"78\" r=\"4\" fill=\"#1e293b\"/>\n          <circle cx=\"118\" cy=\"86\" r=\"1.5\" fill=\"#1e293b\"/>\n          <path d=\"M94 98 Q100 104 106 98\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
      "<path d=\"M70 95 Q75 100 80 95 M120 95 Q125 100 130 95\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n          <path d=\"M130 145 Q165 130 160 105 Q145 100 135 125\" fill=\"none\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
      "<polygon points=\"100,28 103,34 110,34 105,38 107,44 100,41 93,44 95,38 90,34 97,34\" fill=\"none\" stroke-width=\"1.8\"/>"
    ],
    "bgElements": "<g class=\"bg-scene\" opacity=\"0.4\">\n    <path d=\"M30 40 Q35 25 40 40 Q55 45 40 50 Q35 65 30 50 Q15 45 30 40 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <path d=\"M170 35 Q174 23 178 35 Q190 39 178 43 Q174 55 170 43 Q158 39 170 35 Z\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  </g>"
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
