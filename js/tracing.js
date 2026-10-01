/**
 * Gerador de Folhas de Caligrafia e Coordenação Motora (Handwriting & Tracing)
 * Gera pautas triplas com linha central pontilhada e texto pontilhado para cobrir
 */
window.TracingGenerator = (function () {

  function generate(textList, style) {
    const lines = textList
      .map(t => t.trim())
      .filter(t => t.length > 0);

    return {
      lines: lines,
      style: style || "print", // 'print' (bastão) ou 'cursive' (cursiva)
      totalLines: Math.max(lines.length, 6)
    };
  }

  return {
    generate: generate
  };
})();
