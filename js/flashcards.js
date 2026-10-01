/**
 * Gerador de Cartões de Estudo (Flashcards Generator)
 * Ensino Soberano Kids - Fichas com linha de corte para imprimir e recortar
 */
window.FlashcardsGenerator = (function () {

  const DECKS = {
    multiplication: [
      { front: "2 × 3", back: "6" },
      { front: "3 × 4", back: "12" },
      { front: "5 × 5", back: "25" },
      { front: "6 × 7", back: "42" },
      { front: "7 × 8", back: "56" },
      { front: "9 × 9", back: "81" }
    ],
    bilingual: [
      { front: "🐶 Cachorro", back: "DOG" },
      { front: "🐱 Gato", back: "CAT" },
      { front: "🍎 Maçã", back: "APPLE" },
      { front: "☀️ Sol", back: "SUN" },
      { front: "⭐ Estrela", back: "STAR" },
      { front: "🚗 Carro", back: "CAR" }
    ],
    capitals: [
      { front: "Brasil 🇧🇷", back: "Brasília" },
      { front: "França 🇫🇷", back: "Paris" },
      { front: "Japão 🇯🇵", back: "Tóquio" },
      { front: "Itália 🇮🇹", back: "Roma" },
      { front: "Espanha 🇪🇸", back: "Madri" },
      { front: "Portugal 🇵🇹", back: "Lisboa" }
    ]
  };

  function generate(deckType) {
    const deck = DECKS[deckType] || DECKS.multiplication;
    return {
      type: deckType,
      cards: deck
    };
  }

  return {
    generate: generate,
    DECKS: DECKS
  };
})();
