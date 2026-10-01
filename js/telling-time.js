/**
 * Gerador de Atividades: Dizer a Hora (Telling Time Clock Generator)
 * Ensino Soberano Kids - Aprendizado cognitivo e leitura de relógios analógicos
 */
window.TellingTimeGenerator = (function () {

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateClocks(count, difficulty) {
    const total = count || 6;
    const diff = difficulty || "half"; // 'exact' (horas cheias), 'half' (30 min), 'quarter' (15/45 min), 'random' (5 em 5 min)
    const clocks = [];

    for (let i = 0; i < total; i++) {
      const hour = randomInt(1, 12);
      let minute = 0;

      if (diff === "exact") {
        minute = 0;
      } else if (diff === "half") {
        minute = Math.random() < 0.5 ? 0 : 30;
      } else if (diff === "quarter") {
        const mins = [0, 15, 30, 45];
        minute = mins[Math.floor(Math.random() * mins.length)];
      } else { // 'random' de 5 em 5 minutos
        minute = randomInt(0, 11) * 5;
      }

      clocks.push({
        id: i + 1,
        hour: hour,
        minute: minute,
        digital: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`
      });
    }

    return clocks;
  }

  // Renderiza um relógio analógico em SVG vetorial de alta definição
  function renderClockSvg(hour, minute, size) {
    const s = size || 130;
    const center = s / 2;
    const radius = center - 8;

    // Ângulo dos ponteiros
    const minuteAngle = minute * 6; // 360 / 60
    const hourAngle = (hour % 12) * 30 + minute * 0.5; // 360 / 12 + ajuste dos minutos

    // Ponteiro das horas (mais curto e grosso)
    const hrLength = radius * 0.5;
    const hrRad = (hourAngle - 90) * (Math.PI / 180);
    const hrX = center + hrLength * Math.cos(hrRad);
    const hrY = center + hrLength * Math.sin(hrRad);

    // Ponteiro dos minutos (mais longo)
    const minLength = radius * 0.75;
    const minRad = (minuteAngle - 90) * (Math.PI / 180);
    const minX = center + minLength * Math.cos(minRad);
    const minY = center + minLength * Math.sin(minRad);

    // Números de 1 a 12
    let numbersSvg = "";
    for (let num = 1; num <= 12; num++) {
      const angle = num * 30 * (Math.PI / 180);
      const nx = center + (radius - 14) * Math.sin(angle);
      const ny = center - (radius - 14) * Math.cos(angle) + 4;
      numbersSvg += `<text x="${nx}" y="${ny}" text-anchor="middle" font-size="11" font-weight="700" font-family="'Fredoka', sans-serif" fill="#334155">${num}</text>`;
    }

    // Traços dos minutos
    let ticksSvg = "";
    for (let t = 0; t < 12; t++) {
      const angle = t * 30 * (Math.PI / 180);
      const x1 = center + (radius - 4) * Math.sin(angle);
      const y1 = center - (radius - 4) * Math.cos(angle);
      const x2 = center + radius * Math.sin(angle);
      const y2 = center - radius * Math.cos(angle);
      ticksSvg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#94a3b8" stroke-width="2"/>`;
    }

    return `
      <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-sm select-none">
        <!-- Mostrador -->
        <circle cx="${center}" cy="${center}" r="${radius}" fill="#ffffff" stroke="#4338ca" stroke-width="3"/>
        <circle cx="${center}" cy="${center}" r="${radius - 2}" fill="none" stroke="#e0e7ff" stroke-width="1.5"/>
        ${ticksSvg}
        ${numbersSvg}
        <!-- Ponteiro da Hora -->
        <line x1="${center}" y1="${center}" x2="${hrX}" y2="${hrY}" stroke="#e11d48" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Ponteiro do Minuto -->
        <line x1="${center}" y1="${center}" x2="${minX}" y2="${minY}" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Pino Central -->
        <circle cx="${center}" cy="${center}" r="4" fill="#e11d48"/>
      </svg>
    `;
  }

  return {
    generateClocks: generateClocks,
    renderClockSvg: renderClockSvg
  };
})();
