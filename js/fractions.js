/**
 * Gerador de Frações Visuais (Pizzas e Barras Fracionadas)
 * Ensino Soberano Kids - Matemática & Geometria Cognitiva (BNCC: EF04MA09, EF05MA03)
 */
window.FractionsGenerator = (function () {

  const DENOMINATORS_BY_DIFF = {
    facil: [2, 3, 4],
    medio: [3, 4, 5, 6, 8],
    avancado: [4, 5, 6, 8, 10, 12]
  };

  const PALETTES = [
    { fill: "#6366f1", bg: "#ffffff", stroke: "#312e81" }, // Índigo
    { fill: "#ec4899", bg: "#ffffff", stroke: "#9d174d" }, // Rosa
    { fill: "#10b981", bg: "#ffffff", stroke: "#065f46" }, // Esmeralda
    { fill: "#f59e0b", bg: "#ffffff", stroke: "#92400e" }, // Âmbar
    { fill: "#06b6d4", bg: "#ffffff", stroke: "#155e75" }  // Ciano
  ];

  /**
   * Constrói o path SVG de uma fatia circular (Pizza)
   */
  function getSlicePath(cx, cy, r, startAngleRad, endAngleRad) {
    const x1 = cx + r * Math.cos(startAngleRad);
    const y1 = cy + r * Math.sin(startAngleRad);
    const x2 = cx + r * Math.cos(endAngleRad);
    const y2 = cy + r * Math.sin(endAngleRad);
    const largeArcFlag = (endAngleRad - startAngleRad) > Math.PI ? 1 : 0;

    return `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
  }

  /**
   * Renderiza SVG de Pizza / Círculo Fracionado
   */
  function renderSvgPizza(numerator, denominator, options = {}) {
    const size = options.size || 110;
    const isColoring = options.isColoring || false;
    const palette = options.palette || PALETTES[0];
    const cx = size / 2;
    const cy = size / 2;
    const r = (size / 2) - 4;

    const angleStep = (2 * Math.PI) / denominator;
    let paths = [];

    // Ajustar rotação inicial para começar no topo (-PI / 2)
    const offset = -Math.PI / 2;

    for (let i = 0; i < denominator; i++) {
      const startAngle = offset + i * angleStep;
      const endAngle = offset + (i + 1) * angleStep;
      const isColored = !isColoring && (i < numerator);

      const fillColor = isColored ? palette.fill : palette.bg;
      const d = getSlicePath(cx, cy, r, startAngle, endAngle);

      paths.push(`
        <path d="${d}" fill="${fillColor}" stroke="${palette.stroke}" stroke-width="2" stroke-linejoin="round" />
      `);
    }

    return `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="fraction-svg fraction-pizza inline-block drop-shadow-xs">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" stroke="${palette.stroke}" stroke-width="2.5" />
        ${paths.join("")}
        <circle cx="${cx}" cy="${cy}" r="3" fill="${palette.stroke}" />
      </svg>
    `;
  }

  /**
   * Renderiza SVG de Barra Retangular Fracionada
   */
  function renderSvgBar(numerator, denominator, options = {}) {
    const width = options.width || 140;
    const height = options.height || 42;
    const isColoring = options.isColoring || false;
    const palette = options.palette || PALETTES[0];

    const partWidth = width / denominator;
    let rects = [];

    for (let i = 0; i < denominator; i++) {
      const isColored = !isColoring && (i < numerator);
      const fillColor = isColored ? palette.fill : palette.bg;
      const x = i * partWidth;

      rects.push(`
        <rect x="${x.toFixed(2)}" y="0" width="${partWidth.toFixed(2)}" height="${height}"
              fill="${fillColor}" stroke="${palette.stroke}" stroke-width="1.8" />
      `);
    }

    return `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" class="fraction-svg fraction-bar inline-block drop-shadow-xs overflow-hidden rounded-md">
        <rect width="${width}" height="${height}" rx="6" fill="#ffffff" stroke="${palette.stroke}" stroke-width="2.5" />
        ${rects.join("")}
      </svg>
    `;
  }

  /**
   * Gera uma questão fracionária individual
   */
  function generateSingleFraction(mode, shapeType, diff, index) {
    const denoms = DENOMINATORS_BY_DIFF[diff] || DENOMINATORS_BY_DIFF.medio;
    const denominator = denoms[Math.floor(Math.random() * denoms.length)];
    // Numerador próprio (entre 1 e denominator - 1)
    const numerator = Math.floor(Math.random() * (denominator - 1)) + 1;
    const palette = PALETTES[index % PALETTES.length];

    const chosenShape = shapeType === "misto" ? (index % 2 === 0 ? "pizza" : "barra") : shapeType;

    const svgMain = chosenShape === "pizza"
      ? renderSvgPizza(numerator, denominator, { isColoring: mode === "colorir", palette })
      : renderSvgBar(numerator, denominator, { isColoring: mode === "colorir", palette });

    const fractionItem = {
      id: index + 1,
      mode: mode,
      shape: chosenShape,
      numerator: numerator,
      denominator: denominator,
      solutionText: `${numerator}/${denominator}`,
      svg: svgMain
    };

    if (mode === "comparar") {
      // Gerar segunda fração com mesmo denominador ou denominadores comparáveis
      let num2, den2;
      const compareType = Math.random() < 0.6 ? "same_denom" : "diff_denom";

      if (compareType === "same_denom") {
        den2 = denominator;
        do {
          num2 = Math.floor(Math.random() * (den2 - 1)) + 1;
        } while (num2 === numerator && Math.random() < 0.8);
      } else {
        const otherDenoms = denoms.filter(d => d !== denominator);
        den2 = otherDenoms.length > 0 ? otherDenoms[Math.floor(Math.random() * otherDenoms.length)] : denominator;
        num2 = Math.floor(Math.random() * (den2 - 1)) + 1;
      }

      const val1 = numerator / denominator;
      const val2 = num2 / den2;
      let operator = "=";
      if (val1 > val2) operator = ">";
      else if (val1 < val2) operator = "<";

      const svgSecond = chosenShape === "pizza"
        ? renderSvgPizza(num2, den2, { isColoring: false, palette: PALETTES[(index + 2) % PALETTES.length] })
        : renderSvgBar(num2, den2, { isColoring: false, palette: PALETTES[(index + 2) % PALETTES.length] });

      fractionItem.second = {
        numerator: num2,
        denominator: den2,
        svg: svgSecond
      };
      fractionItem.operator = operator;
      fractionItem.solutionText = `${numerator}/${denominator} ${operator} ${num2}/${den2}`;
    }

    return fractionItem;
  }

  /**
   * Gera a lista completa de questões para a atividade
   */
  function generate(options = {}) {
    const mode = options.mode || "identificar"; // "identificar" | "colorir" | "comparar"
    const shape = options.shape || "misto";      // "pizza" | "barra" | "misto"
    const count = parseInt(options.count, 10) || 6;
    const difficulty = options.difficulty || "medio";

    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(generateSingleFraction(mode, shape, difficulty, i));
    }

    return {
      mode: mode,
      shape: shape,
      count: count,
      difficulty: difficulty,
      items: items
    };
  }

  return {
    generate: generate,
    renderSvgPizza: renderSvgPizza,
    renderSvgBar: renderSvgBar
  };
})();
