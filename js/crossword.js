/**
 * Gerador de Cruzadinha Infantil Ilustrada (Crossword Puzzle)
 * Ensino Soberano Kids - Alfabetização, Ortografia e Raciocínio Lógico (BNCC: EF01LP02, EF02LP04)
 */
window.CrosswordGenerator = (function () {

  // Dicionário de pistas amigáveis para palavras do vocabulário infantil
  const CLUE_HINTS = {
    // Animais
    "GATO": { dica: "Animal felino que mia e ronrona", icone: "cat" },
    "CACHORRO": { dica: "O melhor amigo do homem que late", icone: "dog" },
    "LEAO": { dica: "Conhecido como o rei da selva", icone: "crown" },
    "PEIXE": { dica: "Animal aquático que nada nos rios e mares", icone: "fish" },
    "PATO": { dica: "Ave que nada na lagoa e faz quá-quá", icone: "feather" },
    "SAPO": { dica: "Anfíbio que pula e come moscas na lagoa", icone: "sparkles" },
    "VACA": { dica: "Animal da fazenda que produz leite gostoso", icone: "milk" },
    "MACACO": { dica: "Adora comer bananas e pular de galho em galho", icone: "smile" },
    "TARTARUGA": { dica: "Anda bem devagarzinho e tem casco protetor", icone: "shield" },
    "COELHO": { dica: "Tem orelhas compridas e come cenoura", icone: "heart" },
    "ELEFANTE": { dica: "Mamífero gigante com tromba comprida", icone: "trophy" },
    "ZEBRA": { dica: "Parece um cavalo com listras pretas e brancas", icone: "menu" },
    "GIRAFA": { dica: "Animal muito alto com pescoço bem longo", icone: "arrow-up" },
    "URSO": { dica: "Animal forte que gosta de mel e hibernar", icone: "moon" },
    "LOBO": { dica: "Vive em alcateia e uiva para a lua cheia", icone: "moon" },
    "BALEIA": { dica: "O maior mamífero dos oceanos", icone: "waves" },

    // Frutas
    "MACA": { dica: "Fruta redonda e vermelha da historinha da Branca de Neve", icone: "apple" },
    "BANANA": { dica: "Fruta amarela e nutritiva, favorita dos macacos", icone: "smile" },
    "UVA": { dica: "Fruta pequena que cresce em cachos roxos ou verdes", icone: "grape" },
    "LARANJA": { dica: "Fruta cítrica muito usada para fazer suco fresco", icone: "sun" },
    "MELANCIA": { dica: "Fruta gigante com casca verde e polpa vermelha com sementinhas", icone: "circle" },
    "MORANGO": { dica: "Frutinha vermelha com pintinhas pretas e folha verde", icone: "heart" },
    "ABACAXI": { dica: "Tem casca áspera e uma coroa bonita na cabeça", icone: "crown" },
    "LIMAO": { dica: "Fruta verde e azedinha usada na limonada", icone: "citrus" },
    "PERA": { dica: "Fruta doce com formato arredondado na base", icone: "sparkles" },
    "MANGA": { dica: "Fruta doce, amarela e muito suculenta", icone: "sun" },

    // Escola & Objetos
    "LAPIS": { dica: "Usamos para escrever e desenhar no caderno", icone: "pencil" },
    "BORRACHA": { dica: "Serve para apagar o que escrevemos errado", icone: "eraser" },
    "CADERNO": { dica: "Cheio de folhas brancas para fazer anotações", icone: "book" },
    "LIVRO": { dica: "Contém histórias mágicas e muito conhecimento", icone: "book-open" },
    "TESOURA": { dica: "Objeto escolar usado para fazer recortes", icone: "scissors" },
    "COLA": { dica: "Gruda figuras de papel no caderno escolar", icone: "paperclip" },
    "MOCHILA": { dica: "Bolsa onde guardamos o material para ir à aula", icone: "briefcase" },
    "REGUA": { dica: "Mede comprimentos e ajuda a traçar retas perfeitas", icone: "ruler" },

    // Corpo Humano
    "CABECA": { dica: "Onde ficam nossos olhos, nariz, boca e pensamentos", icone: "smile" },
    "OLHOS": { dica: "Órgãos do sentido da visão para enxergar o mundo", icone: "eye" },
    "BOCA": { dica: "Usamos para falar, sorrir e mastigar os alimentos", icone: "smile" },
    "OUVIDO": { dica: "Órgão responsável por escutar sons e músicas", icone: "headphones" },
    "NARIZ": { dica: "Usamos para respirar e sentir cheirinhos bons", icone: "sparkles" },
    "MAOS": { dica: "Têm cinco dedos cada uma para segurar objetos", icone: "hand" },
    "PERNAS": { dica: "Membros do corpo que usamos para andar e correr", icone: "activity" },
    "CORACAO": { dica: "Bate no peito bombeando sangue por todo o corpo", icone: "heart" },

    // Natureza & Planeta
    "SOL": { dica: "Estrela brilhante que ilumina e aquece nosso dia", icone: "sun" },
    "LUA": { dica: "Brilha no céu durante a noite", icone: "moon" },
    "ESTRELA": { dica: "Pontinho de luz cintilante no céu noturno", icone: "star" },
    "CHUVA": { dica: "Gotas de água que caem das nuvens do céu", icone: "cloud-rain" },
    "VENTO": { dica: "Ar em movimento que balança as folhas das árvores", icone: "wind" },
    "FLOR": { dica: "Colorida e perfumada, atrai borboletas no jardim", icone: "flower" },
    "ARVORE": { dica: "Planta grande com tronco forte e copa cheia de folhas", icone: "tree-pine" },
    "RIO": { dica: "Curso natural de água doce que corre para o mar", icone: "waves" },

    // Profissões
    "PROFESSOR": { dica: "Ensina com carinho e dedicação na escola", icone: "graduation-cap" },
    "MEDICO": { dica: "Cuida da nossa saúde e receita remédios quando ficamos doentes", icone: "activity" },
    "BOMBEIRO": { dica: "Apaga incêndios e ajuda a salvar vidas em perigo", icone: "flame" },
    "POLICIAL": { dica: "Protege a cidade e garante a segurança de todos", icone: "shield" },
    "DENTISTA": { dica: "Profissional que cuida da saúde e limpeza dos nossos dentes", icone: "smile" },
    "PADEIRO": { dica: "Acorda bem cedinho para fazer pães quentinhos e gostosos", icone: "coffee" },
    "PINTOR": { dica: "Usa pincéis e tintas para colorir paredes ou telas", icone: "palette" }
  };

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

  /**
   * Obtém a dica para uma determinada palavra
   */
  function getClueForWord(word, categoryName) {
    const clean = sanitize(word);
    if (CLUE_HINTS[clean]) {
      return CLUE_HINTS[clean];
    }
    return {
      dica: `Palavra com ${clean.length} letras relacionada a ${categoryName || "tema estudado"}.`,
      icone: "help-circle"
    };
  }

  /**
   * Gera a grade de palavras cruzadas infantis
   * @param {Object} options { category, customWords, wordCount }
   */
  function generate(options = {}) {
    const wordCount = options.wordCount || 5;
    let candidateWords = [];
    let catName = "Geral";

    if (options.customWords && options.customWords.length > 0) {
      candidateWords = options.customWords.map(w => sanitize(w)).filter(w => w.length >= 3 && w.length <= 10);
    } else {
      const catKey = options.category || "animais";
      if (window.KIDDO_VOCABULARY && window.KIDDO_VOCABULARY[catKey]) {
        catName = window.KIDDO_VOCABULARY[catKey].nome;
        candidateWords = [...window.KIDDO_VOCABULARY[catKey].palavras].map(w => sanitize(w));
      } else {
        candidateWords = ["GATO", "PATO", "SAPO", "VACA", "LEAO", "URSO", "PEIXE"];
      }
    }

    // Embaralhar candidatos
    candidateWords.sort(() => Math.random() - 0.5);

    // Selecionar conjunto de palavras ordenadas por tamanho (maiores primeiro para servirem de âncora)
    const selectedList = candidateWords.slice(0, Math.min(candidateWords.length, 12));
    selectedList.sort((a, b) => b.length - a.length);

    // Tentar construir grade interconectada
    const targetSize = 10;
    let bestGrid = buildCrosswordGrid(selectedList, targetSize, wordCount);

    // Fallback de segurança se falhar na intersecção
    if (!bestGrid || bestGrid.placedWords.length < 3) {
      bestGrid = buildFallbackGrid(selectedList.slice(0, wordCount), targetSize);
    }

    // Cortar espaço vazio ao redor (trim bounding box)
    const trimmed = trimGrid(bestGrid.matrix, bestGrid.placedWords);

    return {
      category: catName,
      rows: trimmed.rows,
      cols: trimmed.cols,
      cells: trimmed.matrix,
      words: trimmed.placedWords
    };
  }

  /**
   * Construtor heurístico de intersecção de palavras
   */
  function buildCrosswordGrid(wordList, size, maxWords) {
    const matrix = Array.from({ length: size }, () => Array(size).fill(null));
    const placedWords = [];

    if (wordList.length === 0) return null;

    // 1ª Palavra: Centralizada Horizontal
    const firstWord = wordList[0];
    const startRow = Math.floor(size / 2) - 1;
    const startCol = Math.max(0, Math.floor((size - firstWord.length) / 2));

    for (let i = 0; i < firstWord.length; i++) {
      matrix[startRow][startCol + i] = {
        letter: firstWord[i],
        number: i === 0 ? 1 : null
      };
    }

    placedWords.push({
      id: 1,
      word: firstWord,
      direction: "horizontal",
      row: startRow,
      col: startCol,
      ...getClueForWord(firstWord)
    });

    let currentNumber = 2;

    // Tentar cruzar as palavras seguintes
    for (let wIdx = 1; wIdx < wordList.length && placedWords.length < maxWords; wIdx++) {
      const candidate = wordList[wIdx];
      let placed = false;

      // Buscar se há interseção com as palavras já colocadas
      for (const existing of placedWords) {
        if (placed) break;

        for (let cIdx = 0; cIdx < candidate.length; cIdx++) {
          if (placed) break;
          const char = candidate[cIdx];

          for (let eIdx = 0; eIdx < existing.word.length; eIdx++) {
            if (existing.word[eIdx] === char) {
              // Orientação oposta
              const newDir = existing.direction === "horizontal" ? "vertical" : "horizontal";
              let newRow, newCol;

              if (newDir === "vertical") {
                newRow = existing.row - cIdx;
                newCol = existing.col + eIdx;
              } else {
                newRow = existing.row + eIdx;
                newCol = existing.col - cIdx;
              }

              if (canPlaceWord(matrix, candidate, newRow, newCol, newDir, size)) {
                placeWordInMatrix(matrix, candidate, newRow, newCol, newDir, currentNumber);
                placedWords.push({
                  id: currentNumber,
                  word: candidate,
                  direction: newDir,
                  row: newRow,
                  col: newCol,
                  ...getClueForWord(candidate)
                });
                currentNumber++;
                placed = true;
                break;
              }
            }
          }
        }
      }
    }

    return { matrix, placedWords };
  }

  function canPlaceWord(matrix, word, row, col, dir, size) {
    if (row < 0 || col < 0) return false;
    if (dir === "horizontal" && col + word.length > size) return false;
    if (dir === "vertical" && row + word.length > size) return false;

    for (let i = 0; i < word.length; i++) {
      const r = dir === "horizontal" ? row : row + i;
      const c = dir === "horizontal" ? col + i : col;

      const cell = matrix[r][c];
      if (cell !== null && cell.letter !== word[i]) {
        return false;
      }

      // Evitar tocar em palavras paralelas adjacentes
      if (cell === null) {
        if (dir === "horizontal") {
          if (r > 0 && matrix[r - 1][c] !== null) return false;
          if (r < size - 1 && matrix[r + 1][c] !== null) return false;
        } else {
          if (c > 0 && matrix[r][c - 1] !== null) return false;
          if (c < size - 1 && matrix[r][c + 1] !== null) return false;
        }
      }
    }

    // Evitar emendar logo antes ou depois da palavra
    if (dir === "horizontal") {
      if (col > 0 && matrix[row][col - 1] !== null) return false;
      if (col + word.length < size && matrix[row][col + word.length] !== null) return false;
    } else {
      if (row > 0 && matrix[row - 1][col] !== null) return false;
      if (row + word.length < size && matrix[row + word.length][col] !== null) return false;
    }

    return true;
  }

  function placeWordInMatrix(matrix, word, row, col, dir, number) {
    for (let i = 0; i < word.length; i++) {
      const r = dir === "horizontal" ? row : row + i;
      const c = dir === "horizontal" ? col + i : col;

      if (!matrix[r][c]) {
        matrix[r][c] = {
          letter: word[i],
          number: i === 0 ? number : null
        };
      } else if (i === 0 && !matrix[r][c].number) {
        matrix[r][c].number = number;
      }
    }
  }

  /**
   * Fallback limpo caso o algoritmo de interseção não encontre cruzamento
   */
  function buildFallbackGrid(words, size) {
    const matrix = Array.from({ length: size }, () => Array(size).fill(null));
    const placedWords = [];
    let r = 1;

    for (let i = 0; i < words.length && r < size; i++) {
      const w = words[i];
      const c = Math.max(0, Math.floor((size - w.length) / 2));
      if (c + w.length <= size) {
        for (let j = 0; j < w.length; j++) {
          matrix[r][c + j] = {
            letter: w[j],
            number: j === 0 ? i + 1 : null
          };
        }
        placedWords.push({
          id: i + 1,
          word: w,
          direction: "horizontal",
          row: r,
          col: c,
          ...getClueForWord(w)
        });
        r += 2;
      }
    }

    return { matrix, placedWords };
  }

  /**
   * Encolhe a matriz cortando linhas e colunas 100% vazias nas bordas
   */
  function trimGrid(matrix, placedWords) {
    let minR = matrix.length, maxR = -1;
    let minC = matrix[0].length, maxC = -1;

    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] !== null) {
          if (r < minR) minR = r;
          if (r > maxR) maxR = r;
          if (c < minC) minC = c;
          if (c > maxC) maxC = c;
        }
      }
    }

    if (maxR === -1) {
      return { rows: 6, cols: 6, matrix: Array.from({ length: 6 }, () => Array(6).fill(null)), placedWords: [] };
    }

    const rows = maxR - minR + 1;
    const cols = maxC - minC + 1;
    const trimmedMatrix = Array.from({ length: rows }, () => Array(cols).fill(null));

    for (let r = minR; r <= maxR; r++) {
      for (let c = minC; c <= maxC; c++) {
        trimmedMatrix[r - minR][c - minC] = matrix[r][c];
      }
    }

    // Ajustar offsets das palavras
    placedWords.forEach(w => {
      w.row -= minR;
      w.col -= minC;
    });

    return { rows, cols, matrix: trimmedMatrix, placedWords };
  }

  return {
    generate: generate,
    getClueForWord: getClueForWord
  };
})();
