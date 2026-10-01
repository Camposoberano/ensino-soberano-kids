/**
 * Gerador de Palavras Embaralhadas (Word Scramble Generator)
 */
window.WordScrambleGenerator = (function () {

  function shuffleString(str) {
    const arr = str.split("");
    let shuffled = str;
    let attempts = 0;

    // Garante que a palavra seja realmente embaralhada se tiver mais de 2 letras
    while (shuffled === str && attempts < 20) {
      attempts++;
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      shuffled = arr.join("");
    }
    return shuffled;
  }

  function generate(wordsRaw) {
    const list = Array.from(new Set(
      wordsRaw
        .map(w => w.trim().toUpperCase())
        .filter(w => w.length >= 2)
    ));

    return list.map((word, idx) => {
      return {
        id: idx + 1,
        original: word,
        scrambled: shuffleString(word),
        letterCount: word.length
      };
    });
  }

  return {
    generate: generate
  };
})();
