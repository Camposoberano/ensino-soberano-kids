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

console.log("\n=== TODOS OS 22 MÓDULOS FORAM VERIFICADOS COM ÊXITO (EXIT CODE 0) ===");
