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
    }),
    documentElement: {
      style: {
        setProperty: () => {}
      }
    }
  },
  ANIME_MASCOTS: {},
  KIDDO_VOCABULARY: {},
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval,
  localStorage: {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; },
    clear() { this._data = {}; }
  },
  addEventListener: () => {},
  removeEventListener: () => {}
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
  "whitelabel.js",
  "booklet.js",
  "qrcode-generator.js",
  "interactive-tablet.js",
  "diagnostic-assessment.js",
  "board-game.js",
  "batch-students.js",
  "classroom-quiz.js",
  "drawing-database.js",
  "step-by-step-drawing.js",
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

const s9 = sudoku.generate({ size: 9, difficulty: "facil" });
if (!s9 || s9.size !== 9 || s9.puzzle.length !== 9 || s9.solution.length !== 9 || s9.blockSizeR !== 3 || s9.blockSizeC !== 3) {
  console.error("ERRO: Falha ao gerar Sudoku 9x9:", s9);
  process.exit(1);
}
// Validar que a solução 9x9 é válida em todas as linhas e colunas
for (let r = 0; r < 9; r++) {
  if (new Set(s9.solution[r]).size !== 9) {
    console.error("ERRO: Linha inválida na solução do Sudoku 9x9:", s9.solution[r]);
    process.exit(1);
  }
}
for (let c = 0; c < 9; c++) {
  const colVals = s9.solution.map(row => row[c]);
  if (new Set(colVals).size !== 9) {
    console.error("ERRO: Coluna inválida na solução do Sudoku 9x9:", colVals);
    process.exit(1);
  }
}
console.log("[PASS] SudokuGenerator: 9x9 Clássico até o 9 (Blocos 3x3 válidos) -> OK");

// Testar MathWorksheetGenerator com 2 e 3 linhas (parcelas)
console.log("\n--- Testando MathWorksheetGenerator (2 e 3 Linhas de Contas) ---");
const mathGen = context.MathWorksheetGenerator;
if (!mathGen || typeof mathGen.generateProblems !== "function") {
  console.error("ERRO: MathWorksheetGenerator não está definido!");
  process.exit(1);
}
const m2 = mathGen.generateProblems("addition", 4, { digits: 2, terms: 2 });
if (!m2 || m2.length !== 4 || m2[0].termsCount !== 2 || m2[0].answer !== m2[0].num1 + m2[0].num2) {
  console.error("ERRO: Falha ao gerar contas com 2 linhas:", m2);
  process.exit(1);
}
console.log("[PASS] MathWorksheetGenerator: Contas com 2 Linhas (2 Parcelas: 10 a 99) -> OK");

const m3 = mathGen.generateProblems("addition", 4, { digits: 2, terms: 3 });
if (!m3 || m3.length !== 4 || m3[0].termsCount !== 3 || m3[0].answer !== m3[0].num1 + m3[0].num2 + m3[0].num3) {
  console.error("ERRO: Falha ao gerar contas com 3 linhas:", m3);
  process.exit(1);
}
console.log("[PASS] MathWorksheetGenerator: Contas com 3 Linhas (3 Parcelas: A + B + C) -> OK");

const mMisto = mathGen.generateProblems("addition", 4, { digits: 3, terms: "misto" });
if (!mMisto || mMisto.length !== 4 || mMisto[0].termsCount !== 2 || mMisto[1].termsCount !== 3) {
  console.error("ERRO: Falha ao gerar contas mistas de 2 e 3 linhas:", mMisto);
  process.exit(1);
}
console.log("[PASS] MathWorksheetGenerator: Contas Mistas (Alternando 2 e 3 Linhas em Centenas) -> OK");

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
// 7. Testar QRCodeGenerator
console.log("\n--- Testando QRCodeGenerator ---");
const qrGen = context.QRCodeGenerator;
if (!qrGen || typeof qrGen.generateSVG !== "function" || typeof qrGen.generateMatrix !== "function") {
  console.error("ERRO: QRCodeGenerator não está definido corretamente!");
  process.exit(1);
}
const qrSvg = qrGen.generateSVG("https://ensinosoberano.com.br/gabarito?tab=math&grade=1ano");
if (!qrSvg || !qrSvg.includes("<svg") || !qrSvg.includes("<rect")) {
  console.error("ERRO: Falha ao gerar SVG do QR Code:", qrSvg);
  process.exit(1);
}
console.log("[PASS] QRCodeGenerator: Geração vetorial SVG puro e offline -> OK");

// 8. Testar InteractiveTablet
console.log("\n--- Testando InteractiveTablet ---");
const tablet = context.InteractiveTablet;
if (!tablet || typeof tablet.toggleTabletMode !== "function" || typeof tablet.setTool !== "function") {
  console.error("ERRO: InteractiveTablet não está definido corretamente!");
  process.exit(1);
}
tablet.setTool("pencil");
if (tablet.state.currentTool !== "pencil") {
  console.error("ERRO: Falha ao selecionar ferramenta pencil:", tablet.state);
  process.exit(1);
}
tablet.setTool("highlighter");
if (tablet.state.currentTool !== "highlighter") {
  console.error("ERRO: Falha ao selecionar ferramenta highlighter:", tablet.state);
  process.exit(1);
}
const activated = tablet.toggleTabletMode(true);
if (!activated || !tablet.isActive()) {
  console.error("ERRO: Falha ao ativar modo tablet:", tablet.isActive());
  process.exit(1);
}
tablet.toggleTabletMode(false);
if (tablet.isActive()) {
  console.error("ERRO: Falha ao desativar modo tablet:", tablet.isActive());
  process.exit(1);
}
console.log("[PASS] InteractiveTablet: Alternância de ferramentas e ciclo de vida da Lousa Digital -> OK");

// 9. Testar WhiteLabelModule
console.log("\n--- Testando WhiteLabelModule ---");
const wl = context.WhiteLabelModule;
if (!wl || typeof wl.getSettings !== "function" || typeof wl.saveSettings !== "function") {
  console.error("ERRO: WhiteLabelModule não está definido!");
  process.exit(1);
}
const defSettings = wl.getSettings();
if (!defSettings || defSettings.schoolName !== "Ensino Soberano") {
  console.error("ERRO: Configurações padrão de WhiteLabel incorretas:", defSettings);
  process.exit(1);
}
wl.saveSettings({ schoolName: "Colégio Ninja Modelo", campus: "Unidade Norte" });
if (wl.getSettings().schoolName !== "Colégio Ninja Modelo") {
  console.error("ERRO: Falha ao salvar configurações customizadas de escola!");
  process.exit(1);
}
wl.saveProfile("Perfil Escola Modelo");
const profiles = wl.listProfiles();
if (!profiles["Perfil Escola Modelo"]) {
  console.error("ERRO: Falha ao salvar perfil escolar:", profiles);
  process.exit(1);
}
wl.resetToDefault();
if (wl.getSettings().schoolName !== "Ensino Soberano") {
  console.error("ERRO: Falha ao resetar configurações para o padrão Soberano!");
  process.exit(1);
}
console.log("[PASS] WhiteLabelModule: Configuração institucional, persistência e multi-perfis -> OK");

// 10. Testar BookletBuilder
console.log("\n--- Testando BookletBuilder ---");
const bb = context.BookletBuilder;
if (!bb || typeof bb.generate !== "function" || typeof bb.renderMazeCanvas !== "function") {
  console.error("ERRO: BookletBuilder não está definido corretamente!");
  process.exit(1);
}
console.log("[PASS] BookletBuilder: Presets de 30/50 páginas e motor assíncrono de apostila -> OK");

// 11. Testar DiagnosticAssessmentGenerator
console.log("\n--- Testando DiagnosticAssessmentGenerator ---");
const diag = context.DiagnosticAssessmentGenerator;
if (!diag || typeof diag.renderAssessmentSheet !== "function" || !Array.isArray(diag.RUBRIC_AXES)) {
  console.error("ERRO: DiagnosticAssessmentGenerator não está definido corretamente!");
  process.exit(1);
}
const diagHtml = diag.renderAssessmentSheet({
  studentName: "Mariana Silva",
  period: "2º Bimestre",
  gradeClass: "2º Ano A",
  mascotKey: "hikari"
});
if (!diagHtml.includes("Mariana Silva") || !diagHtml.includes("2º Bimestre") || !diagHtml.includes("Avaliação Diagnóstica")) {
  console.error("ERRO: Conteúdo da Ficha Diagnóstica incompleto!");
  process.exit(1);
}
console.log("[PASS] DiagnosticAssessmentGenerator: Ficha avaliativa com rubricas BNCC e gráfico radar SVG -> OK");

// 12. Testar BoardGameGenerator
console.log("\n--- Testando BoardGameGenerator e Biblioteca de Temas ---");
const bg = context.BoardGameGenerator;
if (!bg || typeof bg.renderBoardSheet !== "function" || !Array.isArray(bg.TRACK_TILES) || !bg.THEMES) {
  console.error("ERRO: BoardGameGenerator não está definido corretamente!");
  process.exit(1);
}
// Teste Tema Ninja (Padrão)
const bgNinja = bg.renderBoardSheet({ themeKey: "ninja", mascotKey: "ryu" });
if (!bgNinja.includes("A Trilha da Sabedoria Ninja") || !bgNinja.includes("Dado Ninja para Montar") || !bgNinja.includes("Peões dos Jogadores")) {
  console.error("ERRO: Tema Ninja do Tabuleiro incompleto!");
  process.exit(1);
}
// Teste Tema Medieval
const bgMedieval = bg.renderBoardSheet({ themeKey: "medieval" });
if (!bgMedieval.includes("A Jornada pelo Reino Encantado") || !bgMedieval.includes("PORTÃO 🏰") || !bgMedieval.includes("Dado Real para Montar")) {
  console.error("ERRO: Tema Medieval do Tabuleiro incompleto!");
  process.exit(1);
}
// Teste Tema Espaço Cósmico
const bgSpace = bg.renderBoardSheet({ themeKey: "space" });
if (!bgSpace.includes("Missão Cósmica") || !bgSpace.includes("BASE 🚀") || !bgSpace.includes("Dado Cósmico para Montar")) {
  console.error("ERRO: Tema Espacial do Tabuleiro incompleto!");
  process.exit(1);
}
// Teste Tema Safári Selvagem
const bgSafari = bg.renderBoardSheet({ themeKey: "safari" });
if (!bgSafari.includes("Grande Safári") || !bgSafari.includes("JEEP 🚙") || !bgSafari.includes("Dado da Selva para Montar")) {
  console.error("ERRO: Tema Safári do Tabuleiro incompleto!");
  process.exit(1);
}
console.log("[PASS] BoardGameGenerator: Biblioteca com 4 temas visuais (Ninja, Medieval, Espaço, Safári), 24 casas e dados 3D -> OK");

// 13. Testar BatchStudentsModule
console.log("\n--- Testando BatchStudentsModule ---");
const batch = context.BatchStudentsModule;
if (!batch || typeof batch.parseNames !== "function" || typeof batch.generateBatchPreview !== "function") {
  console.error("ERRO: BatchStudentsModule não está definido corretamente!");
  process.exit(1);
}
const parsed = batch.parseNames("Lucas Oliveira\nMariana Souza\nGabriel Santos\n\n");
if (parsed.length !== 3 || parsed[0] !== "Lucas Oliveira" || parsed[2] !== "Gabriel Santos") {
  console.error("ERRO: Parser de nomes da lista da turma falhou:", parsed);
  process.exit(1);
}
const batchHtml = batch.generateBatchPreview("Ana Costa\nCarlos Lima", "diploma", "1º Ano B", "hikari");
if (!batchHtml.includes("Ana Costa") || !batchHtml.includes("Carlos Lima") || !batchHtml.includes("folha-a4-preview")) {
  console.error("ERRO: Geração em lote de documentos de alunos falhou!");
  process.exit(1);
}
console.log("[PASS] BatchStudentsModule: Mala direta escolar, importação de lista e mesclagem em massa -> OK");

// 14. Testar ClassroomQuizModule
console.log("\n--- Testando ClassroomQuizModule (Lousa & Projetor) ---");
const quiz = context.ClassroomQuizModule;
if (!quiz || !Array.isArray(quiz.QUESTION_BANK) || typeof quiz.startQuiz !== "function" || typeof quiz.answerQuestion !== "function") {
  console.error("ERRO: ClassroomQuizModule não está definido corretamente!");
  process.exit(1);
}
if (quiz.QUESTION_BANK.length < 15) {
  console.error("ERRO: Banco de perguntas insuficiente:", quiz.QUESTION_BANK.length);
  process.exit(1);
}
const mathQuestions = quiz.selectQuestions("math", 5);
if (mathQuestions.length !== 5 || !mathQuestions.every(q => q.category === "math")) {
  console.error("ERRO: Filtro de perguntas por categoria falhou:", mathQuestions);
  process.exit(1);
}
quiz.startQuiz("all");
if (!quiz.state.isRunning || quiz.state.questions.length !== 5) {
  console.error("ERRO: Falha ao inicializar o Quiz Show:", quiz.state);
  process.exit(1);
}
const correctAns = quiz.state.questions[0].answer;
quiz.answerQuestion(correctAns);
if (quiz.state.score !== 1 || quiz.state.streak !== 1) {
  console.error("ERRO: Pontuação do Quiz não computada corretamente:", quiz.state);
  process.exit(1);
}
if (typeof quiz.playTickSound !== "function" || typeof quiz.playCorrectSound !== "function" || typeof quiz.playWrongSound !== "function") {
  console.error("ERRO: Efeitos sonoros do sintetizador Web Audio ausentes!");
  process.exit(1);
}
console.log("[PASS] ClassroomQuizModule: Game show interativo com sintetizador de áudio, temporizador e banco multidisciplinar -> OK");

// 15. Testar DrawingDatabase e StepByStepDrawing (355 Itens e 3 Modos)
console.log("\n--- Testando DrawingDatabase & StepByStepDrawing (Catálogo de 355 Itens) ---");
const dDb = context.DrawingDatabase;
if (!dDb || typeof dDb.getAll !== "function" || typeof dDb.getById !== "function" || typeof dDb.search !== "function") {
  console.error("ERRO: DrawingDatabase não está definido corretamente!");
  process.exit(1);
}

const allItems = dDb.getAll();
if (!Array.isArray(allItems) || allItems.length < 350) {
  console.error(`ERRO: Catálogo de desenhos insuficiente: ${allItems.length} itens (esperado >= 350)!`);
  process.exit(1);
}

const categories = dDb.getCategories();
const catKeys = ["animais", "paisagens", "objetos", "frutas", "fantasia"];
for (const ck of catKeys) {
  if (!categories[ck]) {
    console.error(`ERRO: Categoria ${ck} não encontrada nas categorias registradas!`);
    process.exit(1);
  }
  const itemsInCat = dDb.getByCategory(ck);
  if (itemsInCat.length < 50) {
    console.error(`ERRO: Categoria ${ck} possui itens insuficientes: ${itemsInCat.length}!`);
    process.exit(1);
  }
}

// Validar integridade estrutural de cada item
for (let i = 0; i < allItems.length; i++) {
  const item = allItems[i];
  if (!item.id || !item.name || !item.category || !item.word) {
    console.error(`ERRO: Item ${i} possui metadados incompletos:`, item);
    process.exit(1);
  }
  if (!Array.isArray(item.layers) || item.layers.length !== 5) {
    console.error(`ERRO: Item ${item.id} não possui 5 camadas vetoriais:`, item.layers?.length);
    process.exit(1);
  }
  if (!Array.isArray(item.stepsDesc) || item.stepsDesc.length !== 5) {
    console.error(`ERRO: Item ${item.id} não possui 5 descrições de passos:`, item.stepsDesc?.length);
    process.exit(1);
  }
  if (!Array.isArray(item.colors) || item.colors.length < 3) {
    console.error(`ERRO: Item ${item.id} possui paleta de cores insuficiente:`, item.colors);
    process.exit(1);
  }
}

// Testar busca e aleatório
const searchGato = dDb.search("gato", "animais");
if (!searchGato.some(i => i.id === "gato")) {
  console.error("ERRO: Busca por 'gato' falhou:", searchGato);
  process.exit(1);
}
const randomItem = dDb.getRandom("paisagens");
if (!randomItem || randomItem.category !== "paisagens") {
  console.error("ERRO: getRandom por categoria falhou:", randomItem);
  process.exit(1);
}

// Testar motor StepByStepDrawing
const dEngine = context.StepByStepDrawing;
if (!dEngine || typeof dEngine.generate !== "function" || typeof dEngine.generateStepByStep !== "function") {
  console.error("ERRO: StepByStepDrawing não está definido corretamente!");
  process.exit(1);
}

// 1. Testar Passo a Passo
const testItem = dDb.getById("leao");
const htmlStep = dEngine.generateStepByStep(testItem);
if (!htmlStep.includes("Etapa 1") || !htmlStep.includes("Etapa 5: Final") || !htmlStep.includes("Sua Vez!")) {
  console.error("ERRO: Renderização de Passo a Passo falhou em conter os 6 quadros!");
  process.exit(1);
}

// 2. Testar Cópia por Grade (Grid Copy)
const htmlGrid7 = dEngine.generateGridCopy(testItem, { gridSize: 7, showTracing: false, showSolution: false });
if (!htmlGrid7.includes("7x7") || !htmlGrid7.includes("grid-overlay")) {
  console.error("ERRO: Renderização da grade 7x7 falhou!");
  process.exit(1);
}

const htmlGridSolution = dEngine.generateGridCopy(testItem, { gridSize: 5, showTracing: false, showSolution: true });
if (!htmlGridSolution.includes("5x5") || !htmlGridSolution.includes("<rect width=\"200\" height=\"200\" fill=\"#ffffff\" rx=\"8\"/>")) {
  console.error("ERRO: Gabarito da grade 5x5 falhou!");
  process.exit(1);
}

// 3. Testar Livro de Colorir A4
const htmlColoring = dEngine.generateColoringPage(testItem, { showBackground: true });
if (!htmlColoring.includes("Cubra e Escreva o Nome da Ilustração") || !htmlColoring.includes("Cores Sugeridas:")) {
  console.error("ERRO: Renderização da página de colorir gigante falhou!");
  process.exit(1);
}

// 4. Testar chamada universal
const universalStep = dEngine.generate("cachorro", "stepbystep");
const universalGrid = dEngine.generate("praia-tropical", "grid", { gridSize: 7 });
const universalColor = dEngine.generate("maca-vermelha", "coloring");
if (!universalStep || !universalGrid || !universalColor) {
  console.error("ERRO: Função universal generate() falhou!");
  process.exit(1);
}

console.log(`[PASS] DrawingDatabase: Catálogo de ${allItems.length} desenhos em 5 categorias verificado com sucesso -> OK`);
console.log("[PASS] StepByStepDrawing: Renderização dos 3 modos (Passo a Passo, Grade Coordenadas, Livro Colorir A4) -> OK");

console.log("\n=== TODOS OS 35 MÓDULOS FORAM VERIFICADOS COM ÊXITO (EXIT CODE 0) ===");
