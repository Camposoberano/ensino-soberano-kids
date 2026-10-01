/**
 * Jogo Interativo de Quebra-Cabeça Deslizante (Sliding Puzzle)
 */
window.SlidingPuzzle = (function () {
  let size = 3;
  let tiles = [];
  let moves = 0;
  let timer = null;
  let seconds = 0;
  let isWon = false;

  function init(containerEl, boardSize, theme) {
    size = boardSize || 3;
    moves = 0;
    seconds = 0;
    isWon = false;
    clearInterval(timer);

    // Gerar estado resolvido
    tiles = [];
    for (let i = 1; i < size * size; i++) {
      tiles.push(i);
    }
    tiles.push(0); // 0 representa o espaço vazio

    // Embaralhar com movimentos válidos para garantir que seja solucionável
    shuffle();

    render(containerEl);
    startTimer();
  }

  function shuffle() {
    for (let i = 0; i < 150; i++) {
      const emptyIdx = tiles.indexOf(0);
      const neighbors = getNeighbors(emptyIdx);
      const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
      [tiles[emptyIdx], tiles[randomNeighbor]] = [tiles[randomNeighbor], tiles[emptyIdx]];
    }
  }

  function getNeighbors(index) {
    const r = Math.floor(index / size);
    const c = index % size;
    const neighbors = [];
    if (r > 0) neighbors.push(index - size); // Cima
    if (r < size - 1) neighbors.push(index + size); // Baixo
    if (c > 0) neighbors.push(index - 1); // Esquerda
    if (c < size - 1) neighbors.push(index + 1); // Direita
    return neighbors;
  }

  function moveTile(index, containerEl) {
    if (isWon) return;
    const emptyIdx = tiles.indexOf(0);
    const neighbors = getNeighbors(emptyIdx);
    if (neighbors.includes(index)) {
      [tiles[emptyIdx], tiles[index]] = [tiles[index], tiles[emptyIdx]];
      moves++;
      updateStats();
      render(containerEl);
      checkWin(containerEl);
    }
  }

  function checkWin(containerEl) {
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] !== i + 1) return;
    }
    if (tiles[tiles.length - 1] === 0) {
      isWon = true;
      clearInterval(timer);
      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
      setTimeout(() => {
        alert("🎉 Parabéns! Você resolveu o quebra-cabeça em " + moves + " movimentos e " + seconds + " segundos!");
      }, 200);
    }
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      seconds++;
      updateStats();
    }, 1000);
  }

  function updateStats() {
    const movesEl = document.getElementById("puzzle-moves");
    const timeEl = document.getElementById("puzzle-time");
    if (movesEl) movesEl.textContent = moves;
    if (timeEl) timeEl.textContent = seconds + "s";
  }

  function render(containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = "";
    containerEl.style.gridTemplateColumns = `repeat(${size}, minmax(0, 1fr))`;

    tiles.forEach((val, idx) => {
      const tile = document.createElement("div");
      tile.className = "puzzle-cell flex items-center justify-center font-bold text-2xl rounded-xl select-none transition-all cursor-pointer shadow-md";
      if (val === 0) {
        tile.className += " bg-slate-100 border-2 border-dashed border-slate-300 opacity-60 cursor-default";
        tile.textContent = "";
      } else {
        tile.className += " bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:scale-105 active:scale-95";
        tile.textContent = val;
        tile.addEventListener("click", () => moveTile(idx, containerEl));
      }
      tile.style.height = `${360 / size}px`;
      containerEl.appendChild(tile);
    });
  }

  return {
    init: init
  };
})();
