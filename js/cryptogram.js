/**
 * Gerador de Criptograma Ninja / Alfabeto Secreto
 * Ensino Soberano Kids - Decodificação, Raciocínio Lógico & Leitura
 */
window.CryptogramGenerator = (function () {

  const CIPHER_SYMBOLS = {
    A: "🌸", B: "⚡", C: "👑", D: "💎", E: "🌟",
    F: "🍎", G: "🐱", H: "🐶", I: "🦊", J: "🐻",
    K: "🚀", L: "🎯", M: "🎨", N: "📚", O: "✏️",
    P: "🧩", Q: "🔮", R: "🛡️", S: "⚔️", T: "🏆",
    U: "🌈", V: "🍀", W: "🔔", X: "🔑", Y: "🎈", Z: "🌙"
  };

  const DEFAULT_QUOTES = [
    "O CONHECIMENTO E O SEU MAIOR SUPERPODER",
    "A DETERMINACAO BRILHA MAIS QUE O OURO",
    "QUEM AMA APRENDER NUNCA DEIXA DE CRESCER",
    "CADA DIA DE ESTUDO E UMA GRANDE VITORIA",
    "O VERDADEIRO NINJA TEM FOCO E CORAGEM",
    "A SABEDORIA SOBERANA ILUMINA SUA JORNADA"
  ];

  /**
   * Remove acentos e converte para maiúsculas
   */
  function sanitize(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .trim();
  }

  function generate(customText) {
    const rawPhrase = customText || DEFAULT_QUOTES[Math.floor(Math.random() * DEFAULT_QUOTES.length)];
    const cleanPhrase = sanitize(rawPhrase);

    // Separar em palavras
    const rawWords = cleanPhrase.split(/\s+/);
    const words = rawWords.map(word => {
      const letters = [];
      for (const char of word) {
        if (CIPHER_SYMBOLS[char]) {
          letters.push({
            letter: char,
            symbol: CIPHER_SYMBOLS[char],
            isAlpha: true
          });
        } else {
          letters.push({
            letter: char,
            symbol: char,
            isAlpha: false
          });
        }
      }
      return letters;
    });

    // Identificar letras únicas utilizadas na frase
    const usedLetters = new Set();
    for (const char of cleanPhrase) {
      if (CIPHER_SYMBOLS[char]) usedLetters.add(char);
    }

    return {
      phrase: cleanPhrase,
      words: words,
      cipherMap: CIPHER_SYMBOLS,
      usedLetters: Array.from(usedLetters).sort()
    };
  }

  return {
    generate: generate,
    CIPHER_SYMBOLS: CIPHER_SYMBOLS,
    DEFAULT_QUOTES: DEFAULT_QUOTES
  };
})();
