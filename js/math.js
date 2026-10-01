/**
 * Gerador de Atividades de Matemática Infantil (Math Worksheet Generator)
 * Suporta Adição, Subtração, Multiplicação e Divisão
 * Com controle de reagrupamento, empréstimo, tabuadas e layout vertical/horizontal
 */
window.MathWorksheetGenerator = (function () {

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateAdditionProblem(digits, allowRegrouping) {
    let a, b;
    if (digits === 1) {
      a = randomInt(1, 9);
      b = randomInt(1, 9);
      if (!allowRegrouping && (a + b) >= 10) {
        // Sem vai-um: soma menor que 10
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
        // Garantir que haja reagrupamento nas unidades
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
      operator: "÷",
      answer: quotient
    };
  }

  function generateProblems(type, count, options) {
    const problems = [];
    for (let i = 0; i < count; i++) {
      let p;
      if (type === "addition") {
        p = generateAdditionProblem(options.digits || 1, options.allowRegrouping !== false);
      } else if (type === "subtraction") {
        p = generateSubtractionProblem(options.digits || 1, options.allowBorrowing !== false);
      } else if (type === "multiplication") {
        p = generateMultiplicationProblem(options.table || "all", options.level || "1x1");
      } else if (type === "division") {
        p = generateDivisionProblem(options.level || "easy");
      }
      p.id = i + 1;
      problems.push(p);
    }
    return problems;
  }

  return {
    generateProblems: generateProblems
  };
})();
