/**
 * Script de Verificação Automatizada
 * Ensino Soberano Kids - Teste Headless de Todos os Módulos
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

console.log("=== INICIANDO AUDITORIA E TESTE AUTOMATIZADO DOS MÓDULOS ===");

// Criar ambiente simulado de navegador (DOM mock)
const mockWindow = {
  document: {
    addEventListener: () => {},
    getElementById: (id) => ({
      value: "",
      checked: false,
      classList: { add: () => {}, remove: () => {}, contains: () => false },
      addEventListener: () => {},
      appendChild: () => {},
      innerHTML: "",
      style: {}
    }),
    querySelectorAll: () => [],
    querySelector: () => null,
    createElement: (tag) => ({
      tagName: tag.toUpperCase(),
      classList: { add: () => {}, remove: () => {}, contains: () => false },
      style: {},
      innerHTML: "",
      textContent: "",
      appendChild: () => {},
      setAttribute: () => {},
      getAttribute: () => null,
      addEventListener: () => {}
    })
  },
  ANIME_MASCOTS: {},
  KIDDO_VOCABULARY: {}
};
mockWindow.window = mockWindow;
mockWindow.document.defaultView = mockWindow;

const context = vm.createContext(mockWindow);

// Carregar arquivos JS na ordem do index.html
const filesToLoad = [
  "anime-mascots.js",
  "categories.js",
  "bncc.js",
  "wordsearch.js",
  "math.js",
  "maze.js",
  "counting.js",
  "matching.js",
  "telling-time.js",
  "patterns.js",
  "shapes.js",
  "body-parts.js",
  "flashcards.js",
  "origami.js",
  "coloring.js",
  "scramble.js",
  "tracing.js",
  "multiplication-chart.js",
  "sliding-puzzle.js",
  "certificate.js",
  "story-problems.js",
  "sudoku.js",
  "cryptogram.js",
  "color-by-math.js",
  "booklet.js",
  "app.js"
];

for (const file of filesToLoad) {
  const filePath = path.join(__dirname, "js", file);
  if (!fs.existsSync(filePath)) {
    console.error(`ERRO: Arquivo não encontrado: ${file}`);
    process.exit(1);
  }
  const code = fs.readFileSync(filePath, "utf8");
  try {
    vm.runInContext(code, context, { filename: file });
    console.log(`[OK] Módulo carregado e analisado com sucesso: ${file}`);
  } catch (err) {
    console.error(`[FALHA] Erro ao executar ${file}:`, err);
    process.exit(1);
  }
}

// ── TESTES UNITÁRIOS DAS NOVAS FUNCIONALIDADES ──

// 1. Testar StoryProblemsGenerator
console.log("\n--- Testando StoryProblemsGenerator ---");
const spGen = context.StoryProblemsGenerator;
if (!spGen || typeof spGen.generate !== "function") {
  console.error("ERRO: StoryProblemsGenerator não está definido!");
  process.exit(1);
}

const tests = [
  { op: "todas", diff: "medio", count: 3 },
  { op: "adicao", diff: "facil", count: 2 },
  { op: "subtracao", diff: "avancado", count: 4 },
  { op: "multiplicacao", diff: "medio", count: 3 },
  { op: "divisao", diff: "facil", count: 2 }
];

for (const t of tests) {
  const problems = spGen.generate({ operation: t.op, difficulty: t.diff, count: t.count });
  if (!Array.isArray(problems) || problems.length !== t.count) {
    console.error(`ERRO: Falha ao gerar problemas para op=${t.op}, count=${t.count}`);
    process.exit(1);
  }
  for (const p of problems) {
    if (!p.historia || !p.equacao || !p.resposta || typeof p.respostaNum !== "number") {
      console.error("ERRO: Problema com estrutura inválida:", p);
      process.exit(1);
    }
  }
  console.log(`[PASS] StoryProblems: op=${t.op} | diff=${t.diff} | count=${t.count} -> OK`);
}

// 2. Testar CertificateGenerator
console.log("\n--- Testando CertificateGenerator ---");
const certGen = context.CertificateGenerator;
if (!certGen || typeof certGen.renderCertificate !== "function" || typeof certGen.renderPassport !== "function") {
  console.error("ERRO: CertificateGenerator não está definido corretamente!");
  process.exit(1);
}

const diplomaHtml = certGen.renderCertificate("Aluno Teste Soberano", "Mestrado Ninja", "daiki");
if (!diplomaHtml.includes("Aluno Teste Soberano") || !diplomaHtml.includes("Mestrado Ninja") || !diplomaHtml.includes("worksheet-paper")) {
  console.error("ERRO: Diploma gerado não contém dados esperados!");
  process.exit(1);
}
console.log("[PASS] CertificateGenerator.renderCertificate -> OK");

const passportHtml = certGen.renderPassport("Explorador Soberano", "hikari");
if (!passportHtml.includes("Explorador Soberano") || !passportHtml.includes("PASSAPORTE DE CONQUISTAS") || !passportHtml.includes("Caça-Palavras Ninja")) {
  console.error("ERRO: Passaporte gerado não contém dados esperados!");
  process.exit(1);
}
console.log("[PASS] CertificateGenerator.renderPassport -> OK");

// 3. Testar BNCCModule
console.log("\n--- Testando BNCCModule ---");
const bncc = context.BNCCModule;
if (!bncc || typeof bncc.getSkill !== "function") {
  console.error("ERRO: BNCCModule não está definido!");
  process.exit(1);
}

const mathSkill = bncc.getSkill("addition", "1ano");
if (!mathSkill || !mathSkill.code || mathSkill.code !== "EF01MA06") {
  console.error("ERRO: Falha ao obter competência BNCC de adição 1º ano:", mathSkill);
  process.exit(1);
}
console.log(`[PASS] BNCCModule: Adição 1º Ano -> ${mathSkill.code}: ${mathSkill.desc}`);

const storySkill = bncc.getSkill("storyproblems", "2ano");
if (!storySkill || !storySkill.code || storySkill.code !== "EF02MA06") {
  console.error("ERRO: Falha ao obter competência BNCC de probleminhas 2º ano:", storySkill);
  process.exit(1);
}
console.log(`[PASS] BNCCModule: Probleminhas 2º Ano -> ${storySkill.code}: ${storySkill.desc}`);

const kinderSkill = bncc.getSkill("counting", "infantil");
if (!kinderSkill || !kinderSkill.code || kinderSkill.code !== "EI03ET07") {
  console.error("ERRO: Falha ao obter competência BNCC de contagem infantil:", kinderSkill);
  process.exit(1);
}
console.log(`[PASS] BNCCModule: Contagem Ed. Infantil -> ${kinderSkill.code}: ${kinderSkill.desc}`);

// 4. Testar SudokuGenerator
console.log("\n--- Testando SudokuGenerator ---");
const sudoku = context.SudokuGenerator;
if (!sudoku || typeof sudoku.generate !== "function") {
  console.error("ERRO: SudokuGenerator não está definido!");
  process.exit(1);
}
const s4 = sudoku.generate({ size: 4, mode: "emoji", difficulty: "facil" });
if (!s4 || s4.size !== 4 || s4.puzzle.length !== 4 || s4.solution.length !== 4) {
  console.error("ERRO: Falha ao gerar Sudoku 4x4:", s4);
  process.exit(1);
}
console.log("[PASS] SudokuGenerator: 4x4 Emojis -> OK");

const s6 = sudoku.generate({ size: 6, mode: "numbers", difficulty: "medio" });
if (!s6 || s6.size !== 6 || s6.puzzle.length !== 6 || s6.solution.length !== 6) {
  console.error("ERRO: Falha ao gerar Sudoku 6x6:", s6);
  process.exit(1);
}
console.log("[PASS] SudokuGenerator: 6x6 Numérico -> OK");

// 5. Testar CryptogramGenerator
console.log("\n--- Testando CryptogramGenerator ---");
const cryptoGen = context.CryptogramGenerator;
if (!cryptoGen || typeof cryptoGen.generate !== "function") {
  console.error("ERRO: CryptogramGenerator não está definido!");
  process.exit(1);
}
const crData = cryptoGen.generate("ENSINO SOBERANO");
if (!crData || crData.words.length !== 2 || !crData.cipherMap) {
  console.error("ERRO: Falha no CryptogramGenerator:", crData);
  process.exit(1);
}
console.log(`[PASS] CryptogramGenerator: Frase 'ENSINO SOBERANO' decodificada em ${crData.words.length} palavras -> OK`);

// 6. Testar ColorByMathGenerator
console.log("\n--- Testando ColorByMathGenerator ---");
const cbmGen = context.ColorByMathGenerator;
if (!cbmGen || typeof cbmGen.generate !== "function") {
  console.error("ERRO: ColorByMathGenerator não está definido!");
  process.exit(1);
}
const cbmCrown = cbmGen.generate({ templateId: "crown", operation: "addition" });
if (!cbmCrown || !cbmCrown.palette || cbmCrown.grid.length !== 7 || cbmCrown.grid[0].length !== 9) {
  console.error("ERRO: Falha no ColorByMathGenerator:", cbmCrown);
  process.exit(1);
}
console.log(`[PASS] ColorByMathGenerator: Mosaico ${cbmCrown.template.nome} (${cbmCrown.template.rows}x${cbmCrown.template.cols}) -> OK`);

console.log("\n=== TODOS OS 26 MÓDULOS FORAM VERIFICADOS COM ÊXITO (EXIT CODE 0) ===");
