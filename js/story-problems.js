/**
 * Gerador de Probleminhas Contextualizados (Story Problems / Word Problems)
 * Ensino Soberano Kids - Interpretação de texto combinada com raciocínio matemático
 */
window.StoryProblemsGenerator = (function () {

  const TEMPLATES = [
    // ── ADIÇÃO ──
    {
      id: "add_1",
      op: "+",
      mascote: "Akira (Gatinho Mago)",
      icon: "🍎",
      tag: "Pomar Mágico",
      generate: function (diff) {
        let n1, n2;
        if (diff === "facil") { n1 = Math.floor(Math.random() * 8) + 3; n2 = Math.floor(Math.random() * 7) + 2; }
        else if (diff === "medio") { n1 = Math.floor(Math.random() * 25) + 12; n2 = Math.floor(Math.random() * 20) + 10; }
        else { n1 = Math.floor(Math.random() * 45) + 25; n2 = Math.floor(Math.random() * 35) + 18; }
        const res = n1 + n2;
        return {
          historia: `O gatinho Akira colheu ${n1} maçãs mágicas pela manhã no pomar e mais ${n2} maçãs docinhas à tarde. Quantas maçãs mágicas o Akira guardou na cesta ao todo?`,
          num1: n1,
          num2: n2,
          opSymbol: "+",
          equacao: `${n1} + ${n2} = ${res}`,
          resposta: `O gatinho Akira guardou ${res} maçãs mágicas na cesta.`,
          respostaNum: res
        };
      }
    },
    {
      id: "add_2",
      op: "+",
      mascote: "Hikari (Estudante Sakura)",
      icon: "🌸",
      tag: "Jardim das Cerejeiras",
      generate: function (diff) {
        let n1, n2;
        if (diff === "facil") { n1 = Math.floor(Math.random() * 9) + 4; n2 = Math.floor(Math.random() * 6) + 3; }
        else if (diff === "medio") { n1 = Math.floor(Math.random() * 28) + 14; n2 = Math.floor(Math.random() * 22) + 11; }
        else { n1 = Math.floor(Math.random() * 50) + 30; n2 = Math.floor(Math.random() * 40) + 20; }
        const res = n1 + n2;
        return {
          historia: `Hikari colheu ${n1} flores de sakura para enfeitar a sala de aula do Ensino Soberano. Sua amiga trouxe mais ${n2} flores. Quantas flores de sakura elas têm no total?`,
          num1: n1,
          num2: n2,
          opSymbol: "+",
          equacao: `${n1} + ${n2} = ${res}`,
          resposta: `Elas têm ${res} flores de sakura no total.`,
          respostaNum: res
        };
      }
    },
    {
      id: "add_3",
      op: "+",
      mascote: "Daiki (Herói Ninja)",
      icon: "⭐",
      tag: "Treino Ninja",
      generate: function (diff) {
        let n1, n2;
        if (diff === "facil") { n1 = Math.floor(Math.random() * 8) + 5; n2 = Math.floor(Math.random() * 7) + 4; }
        else if (diff === "medio") { n1 = Math.floor(Math.random() * 30) + 15; n2 = Math.floor(Math.random() * 25) + 15; }
        else { n1 = Math.floor(Math.random() * 45) + 35; n2 = Math.floor(Math.random() * 40) + 25; }
        const res = n1 + n2;
        return {
          historia: `No treino matinal, o ninja Daiki conquistou ${n1} estrelas de mérito. No treino da tarde, ele conquistou mais ${n2} estrelas. Quantas estrelas de mérito o Daiki conquistou hoje?`,
          num1: n1,
          num2: n2,
          opSymbol: "+",
          equacao: `${n1} + ${n2} = ${res}`,
          resposta: `Daiki conquistou ${res} estrelas de mérito hoje.`,
          respostaNum: res
        };
      }
    },

    // ── SUBTRAÇÃO ──
    {
      id: "sub_1",
      op: "−",
      mascote: "Hikari (Estudante Sakura)",
      icon: "✏️",
      tag: "Material Escolar",
      generate: function (diff) {
        let n1, n2;
        if (diff === "facil") { n1 = Math.floor(Math.random() * 8) + 10; n2 = Math.floor(Math.random() * (n1 - 3)) + 2; }
        else if (diff === "medio") { n1 = Math.floor(Math.random() * 25) + 25; n2 = Math.floor(Math.random() * 15) + 8; }
        else { n1 = Math.floor(Math.random() * 45) + 50; n2 = Math.floor(Math.random() * 30) + 15; }
        const res = n1 - n2;
        return {
          historia: `Hikari tinha uma caixa com ${n1} lápis de cor novinhos. Ela emprestou ${n2} lápis para seus colegas de turma desenharem um mangá. Quantos lápis sobraram na caixa?`,
          num1: n1,
          num2: n2,
          opSymbol: "−",
          equacao: `${n1} − ${n2} = ${res}`,
          resposta: `Sobraram ${res} lápis de cor na caixa da Hikari.`,
          respostaNum: res
        };
      }
    },
    {
      id: "sub_2",
      op: "−",
      mascote: "Sensei Kuma (Ursinho Sábio)",
      icon: "🍯",
      tag: "Despensa da Floresta",
      generate: function (diff) {
        let n1, n2;
        if (diff === "facil") { n1 = Math.floor(Math.random() * 7) + 11; n2 = Math.floor(Math.random() * (n1 - 2)) + 3; }
        else if (diff === "medio") { n1 = Math.floor(Math.random() * 20) + 30; n2 = Math.floor(Math.random() * 18) + 7; }
        else { n1 = Math.floor(Math.random() * 35) + 55; n2 = Math.floor(Math.random() * 25) + 20; }
        const res = n1 - n2;
        return {
          historia: `Sensei Kuma preparou ${n1} potinhos de mel para o festival de outono. Os alunos gulosos saborearam ${n2} potinhos no piquenique. Quantos potinhos de mel ainda restam?`,
          num1: n1,
          num2: n2,
          opSymbol: "−",
          equacao: `${n1} − ${n2} = ${res}`,
          resposta: `Ainda restam ${res} potinhos de mel com o Sensei Kuma.`,
          respostaNum: res
        };
      }
    },
    {
      id: "sub_3",
      op: "−",
      mascote: "Akira (Gatinho Mago)",
      icon: "📜",
      tag: "Pergaminhos Mágicos",
      generate: function (diff) {
        let n1, n2;
        if (diff === "facil") { n1 = Math.floor(Math.random() * 6) + 12; n2 = Math.floor(Math.random() * (n1 - 4)) + 3; }
        else if (diff === "medio") { n1 = Math.floor(Math.random() * 25) + 35; n2 = Math.floor(Math.random() * 20) + 10; }
        else { n1 = Math.floor(Math.random() * 40) + 60; n2 = Math.floor(Math.random() * 30) + 25; }
        const res = n1 - n2;
        return {
          historia: `No castelo mágico, havia ${n1} pergaminhos de feitiços antigos. Akira decifrou e guardou ${n2} pergaminhos na estante de ouro. Quantos pergaminhos ainda faltam decifrar?`,
          num1: n1,
          num2: n2,
          opSymbol: "−",
          equacao: `${n1} − ${n2} = ${res}`,
          resposta: `Faltam decifrar ${res} pergaminhos mágicos.`,
          respostaNum: res
        };
      }
    },

    // ── MULTIPLICAÇÃO ──
    {
      id: "mul_1",
      op: "×",
      mascote: "Daiki (Herói Ninja)",
      icon: "📦",
      tag: "Missão Secreta",
      generate: function (diff) {
        let n1, n2;
        if (diff === "facil") { n1 = Math.floor(Math.random() * 4) + 2; n2 = Math.floor(Math.random() * 4) + 2; }
        else if (diff === "medio") { n1 = Math.floor(Math.random() * 5) + 3; n2 = Math.floor(Math.random() * 5) + 4; }
        else { n1 = Math.floor(Math.random() * 5) + 6; n2 = Math.floor(Math.random() * 6) + 5; }
        const res = n1 * n2;
        return {
          historia: `Daiki encontrou ${n1} caixas misteriosas no dojo. Em cada caixa havia exatamente ${n2} medalhas douradas de campeão. Quantas medalhas Daiki encontrou ao todo?`,
          num1: n1,
          num2: n2,
          opSymbol: "×",
          equacao: `${n1} × ${n2} = ${res}`,
          resposta: `Daiki encontrou ${res} medalhas douradas ao todo.`,
          respostaNum: res
        };
      }
    },
    {
      id: "mul_2",
      op: "×",
      mascote: "Hikari (Estudante Sakura)",
      icon: "🧁",
      tag: "Confeitaria Chibi",
      generate: function (diff) {
        let n1, n2;
        if (diff === "facil") { n1 = Math.floor(Math.random() * 3) + 2; n2 = Math.floor(Math.random() * 4) + 3; }
        else if (diff === "medio") { n1 = Math.floor(Math.random() * 4) + 4; n2 = Math.floor(Math.random() * 4) + 4; }
        else { n1 = Math.floor(Math.random() * 5) + 5; n2 = Math.floor(Math.random() * 5) + 6; }
        const res = n1 * n2;
        return {
          historia: `Hikari preparou ${n1} bandejas com deliciosos bolinhos de morango. Cada bandeja contém ${n2} bolinhos confeitados. Quantos bolinhos confeitados Hikari preparou?`,
          num1: n1,
          num2: n2,
          opSymbol: "×",
          equacao: `${n1} × ${n2} = ${res}`,
          resposta: `Hikari preparou ${res} bolinhos confeitados no total.`,
          respostaNum: res
        };
      }
    },

    // ── DIVISÃO ──
    {
      id: "div_1",
      op: "÷",
      mascote: "Sensei Kuma (Ursinho Sábio)",
      icon: "📚",
      tag: "Biblioteca Soberana",
      generate: function (diff) {
        let divisor, quociente;
        if (diff === "facil") { divisor = Math.floor(Math.random() * 3) + 2; quociente = Math.floor(Math.random() * 4) + 2; }
        else if (diff === "medio") { divisor = Math.floor(Math.random() * 4) + 3; quociente = Math.floor(Math.random() * 5) + 3; }
        else { divisor = Math.floor(Math.random() * 4) + 4; quociente = Math.floor(Math.random() * 6) + 5; }
        const dividendo = divisor * quociente;
        return {
          historia: `Sensei Kuma organizou ${dividendo} livros de histórias em quadrinhos e vai distribuí-los igualmente entre ${divisor} grupos de leitura. Quantos livros cada grupo receberá?`,
          num1: dividendo,
          num2: divisor,
          opSymbol: "÷",
          equacao: `${dividendo} ÷ ${divisor} = ${quociente}`,
          resposta: `Cada grupo receberá ${quociente} livros de histórias.`,
          respostaNum: quociente
        };
      }
    },
    {
      id: "div_2",
      op: "÷",
      mascote: "Akira (Gatinho Mago)",
      icon: "🔮",
      tag: "Cristais Mágicos",
      generate: function (diff) {
        let divisor, quociente;
        if (diff === "facil") { divisor = Math.floor(Math.random() * 3) + 2; quociente = Math.floor(Math.random() * 3) + 2; }
        else if (diff === "medio") { divisor = Math.floor(Math.random() * 4) + 3; quociente = Math.floor(Math.random() * 4) + 4; }
        else { divisor = Math.floor(Math.random() * 5) + 3; quociente = Math.floor(Math.random() * 6) + 4; }
        const dividendo = divisor * quociente;
        return {
          historia: `Akira encontrou ${dividendo} cristais brilhantes e quer guardá-los igualmente em ${divisor} baús mágicos. Quantos cristais haverá dentro de cada baú?`,
          num1: dividendo,
          num2: divisor,
          opSymbol: "÷",
          equacao: `${dividendo} ÷ ${divisor} = ${quociente}`,
          resposta: `Haverá ${quociente} cristais mágicos dentro de cada baú.`,
          respostaNum: quociente
        };
      }
    }
  ];

  /**
   * Gera uma lista de problemas com base nas opções selecionadas
   * @param {Object} options
   * @param {number} options.count - 2, 3 ou 4
   * @param {string} options.difficulty - 'facil', 'medio', 'avancado'
   * @param {string} options.operation - 'todas', 'adicao', 'subtracao', 'multiplicacao', 'divisao'
   */
  function generate(options) {
    const opts = options || {};
    const count = parseInt(opts.count) || 3;
    const diff = opts.difficulty || "medio";
    const opFilter = opts.operation || "todas";

    let available = TEMPLATES;
    if (opFilter === "adicao") available = TEMPLATES.filter(t => t.op === "+");
    else if (opFilter === "subtracao") available = TEMPLATES.filter(t => t.op === "−");
    else if (opFilter === "multiplicacao") available = TEMPLATES.filter(t => t.op === "×");
    else if (opFilter === "divisao") available = TEMPLATES.filter(t => t.op === "÷");

    // Embaralhar templates disponíveis
    const shuffled = [...available].sort(() => Math.random() - 0.5);

    // Se count for maior que os templates filtrados, repetir com variedade
    const selected = [];
    for (let i = 0; i < count; i++) {
      const template = shuffled[i % shuffled.length];
      const prob = template.generate(diff);
      selected.push({
        id: i + 1,
        mascote: template.mascote,
        icon: template.icon,
        tag: template.tag,
        historia: prob.historia,
        num1: prob.num1,
        num2: prob.num2,
        opSymbol: prob.opSymbol,
        equacao: prob.equacao,
        resposta: prob.resposta,
        respostaNum: prob.respostaNum
      });
    }

    return selected;
  }

  return {
    generate: generate,
    TEMPLATES: TEMPLATES
  };
})();
