/**
 * Gerador de Atividades de Matemática Infantil (Math Worksheet Generator)
 * Suporta Adição, Subtração, Multiplicação e Divisão
 * Suporta Contas Armadas com 2 Linhas (2 Parcelas) e 3 Linhas (3 Parcelas: A + B + C)
 * Controle de reagrupamento ("vai um"), empréstimo, dígitos (1, 2 e 3) e tabuadas
 */
window.MathWorksheetGenerator = (function () {

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Gera uma operação de adição com suporte a 2 ou 3 parcelas (linhas)
   * @param {number} digits - 1 (1 a 9), 2 (10 a 99), 3 (100 a 999)
   * @param {boolean} allowRegrouping - Permitir ou não "vai um"
   * @param {number} terms - 2 parcelas ou 3 parcelas (linhas da conta)
   */
  function generateAdditionProblem(digits, allowRegrouping, terms) {
    const numTerms = terms === 3 ? 3 : 2;

    if (numTerms === 3) {
      let a, b, c;
      if (digits === 1) {
        if (!allowRegrouping) {
          // Sem vai-um: soma dos 3 <= 9
          a = randomInt(1, 3);
          b = randomInt(1, 3);
          c = randomInt(0, 9 - (a + b));
        } else {
          a = randomInt(2, 9);
          b = randomInt(2, 9);
          c = randomInt(2, 9);
        }
      } else if (digits === 2) {
        if (!allowRegrouping) {
          // Sem vai-um nas unidades nem nas dezenas
          const u1 = randomInt(1, 3);
          const u2 = randomInt(1, 3);
          const u3 = randomInt(0, 9 - (u1 + u2));
          const d1 = randomInt(1, 3);
          const d2 = randomInt(1, 3);
          const d3 = randomInt(1, 9 - (d1 + d2));
          a = d1 * 10 + u1;
          b = d2 * 10 + u2;
          c = d3 * 10 + u3;
        } else {
          // Com vai-um
          a = randomInt(10, 59);
          b = randomInt(10, 59);
          c = randomInt(10, 49);
        }
      } else { // 3 dígitos (Centenas)
        if (!allowRegrouping) {
          const u1 = randomInt(1, 3), u2 = randomInt(1, 3), u3 = randomInt(0, 9 - (u1 + u2));
          const d1 = randomInt(1, 3), d2 = randomInt(1, 3), d3 = randomInt(0, 9 - (d1 + d2));
          const c1 = randomInt(1, 3), c2 = randomInt(1, 3), c3 = randomInt(1, 9 - (c1 + c2));
          a = c1 * 100 + d1 * 10 + u1;
          b = c2 * 100 + d2 * 10 + u2;
          c = c3 * 100 + d3 * 10 + u3;
        } else {
          a = randomInt(100, 399);
          b = randomInt(100, 399);
          c = randomInt(100, 299);
        }
      }
      return {
        num1: a,
        num2: b,
        num3: c,
        termsCount: 3,
        terms: [a, b, c],
        operator: "+",
        answer: a + b + c
      };
    }

    // Padrão: 2 parcelas (2 linhas de conta armada)
    let a, b;
    if (digits === 1) {
      a = randomInt(1, 9);
      b = randomInt(1, 9);
      if (!allowRegrouping && (a + b) >= 10) {
        b = randomInt(1, 9 - a);
      }
    } else if (digits === 2) {
      if (!allowRegrouping) {
        const u1 = randomInt(1, 8);
        const u2 = randomInt(0, 9 - u1);
        const d1 = randomInt(1, 8);
        const d2 = randomInt(1, 9 - d1);
        a = d1 * 10 + u1;
        b = d2 * 10 + u2;
      } else {
        const u1 = randomInt(4, 9);
        const u2 = randomInt(10 - u1, 9);
        const d1 = randomInt(1, 7);
        const d2 = randomInt(1, 8 - d1);
        a = d1 * 10 + u1;
        b = d2 * 10 + u2;
      }
    } else { // 3 dígitos
      a = randomInt(100, 499);
      b = randomInt(100, 499);
    }
    return {
      num1: a,
      num2: b,
      termsCount: 2,
      terms: [a, b],
      operator: "+",
      answer: a + b
    };
  }

  function generateSubtractionProblem(digits, allowBorrowing) {
    let a, b;
    if (digits === 1) {
      a = randomInt(2, 9);
      b = randomInt(1, a);
    } else if (digits === 2) {
      if (!allowBorrowing) {
        // Sem empréstimo: unidade do primeiro >= unidade do segundo
        const u1 = randomInt(2, 9);
        const u2 = randomInt(0, u1);
        const d1 = randomInt(2, 9);
        const d2 = randomInt(1, d1);
        a = d1 * 10 + u1;
        b = d2 * 10 + u2;
      } else {
        // Com empréstimo: unidade do primeiro < unidade do segundo
        const u1 = randomInt(0, 6);
        const u2 = randomInt(u1 + 1, 9);
        const d1 = randomInt(2, 9);
        const d2 = randomInt(1, d1 - 1);
        a = d1 * 10 + u1;
        b = d2 * 10 + u2;
      }
    } else { // 3 dígitos
      a = randomInt(300, 999);
      b = randomInt(100, a);
    }
    return {
      num1: a,
      num2: b,
      termsCount: 2,
      terms: [a, b],
      operator: "−",
      answer: a - b
    };
  }

  function generateMultiplicationProblem(tableChoice, level) {
    let a, b;
    if (tableChoice === "all") {
      a = randomInt(2, 9);
      b = randomInt(1, 10);
    } else {
      a = parseInt(tableChoice) || 2;
      b = randomInt(1, 10);
    }

    if (level === "2x1") {
      a = randomInt(11, 49);
      b = randomInt(2, 6);
    }

    return {
      num1: a,
      num2: b,
      termsCount: 2,
      terms: [a, b],
      operator: "×",
      answer: a * b
    };
  }

  function generateDivisionProblem(level) {
    let quotient, divisor;
    if (level === "easy") {
      divisor = randomInt(2, 9);
      quotient = randomInt(1, 9);
    } else {
      divisor = randomInt(2, 10);
      quotient = randomInt(5, 15);
    }
    const dividend = divisor * quotient;
    return {
      num1: dividend,
      num2: divisor,
      termsCount: 2,
      terms: [dividend, divisor],
      operator: "÷",
      answer: quotient
    };
  }

  function generateProblems(type, count, options) {
    const opts = options || {};
    const problems = [];
    for (let i = 0; i < count; i++) {
      let p;
      if (type === "addition") {
        let itemTerms = opts.terms || 2;
        if (opts.terms === "misto") {
          itemTerms = (i % 2 === 0) ? 2 : 3;
        } else {
          itemTerms = parseInt(opts.terms) || 2;
        }
        p = generateAdditionProblem(opts.digits || 1, opts.allowRegrouping !== false, itemTerms);
      } else if (type === "subtraction") {
        p = generateSubtractionProblem(opts.digits || 1, opts.allowBorrowing !== false);
      } else if (type === "multiplication") {
        p = generateMultiplicationProblem(opts.table || "all", opts.level || "1x1");
      } else if (type === "division") {
        p = generateDivisionProblem(opts.level || "easy");
      }
      p.id = i + 1;
      problems.push(p);
    }
    return problems;
  }

  return {
    generateProblems: generateProblems,
    generateAdditionProblem: generateAdditionProblem,
    generateSubtractionProblem: generateSubtractionProblem,
    generateMultiplicationProblem: generateMultiplicationProblem,
    generateDivisionProblem: generateDivisionProblem
  };
})();
