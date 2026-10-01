/**
 * Gerador de Labirintos Infantis (Maze Generator)
 * Algoritmo Recursive Backtracker (DFS) com cálculo de solução para Gabarito
 */
window.MazeGenerator = (function () {

  function generate(width, height) {
    const cols = width || 12;
    const rows = height || 12;

    // Matriz de células: cada célula tem paredes [top, right, bottom, left]
    // e coordenadas r, c
    const grid = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push({
          r: r,
          c: c,
          walls: [true, true, true, true], // Cima, Direita, Baixo, Esquerda
          visited: false
        });
      }
      grid.push(row);
    }

    // Pilha para o DFS
    const stack = [];
    const startCell = grid[0][0];
    startCell.visited = true;
    stack.push(startCell);

    while (stack.length > 0) {
      const current = stack[stack.length - 1];
      const neighbors = getUnvisitedNeighbors(current, grid, rows, cols);

      if (neighbors.length > 0) {
        // Escolhe vizinho aleatório
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        removeWalls(current, next.cell, next.dir);
        next.cell.visited = true;
        stack.push(next.cell);
      } else {
        stack.pop();
      }
    }

    // Abrir entrada (topo do 0,0) e saída (fundo do rows-1, cols-1)
    grid[0][0].walls[0] = false; // Entrada
    grid[rows - 1][cols - 1].walls[2] = false; // Saída

    // Calcular o caminho da solução de (0,0) até (rows-1, cols-1)
    const solutionPath = solveMaze(grid, rows, cols);

    return {
      cols: cols,
      rows: rows,
      grid: grid,
      solution: solutionPath
    };
  }

  function getUnvisitedNeighbors(cell, grid, rows, cols) {
    const neighbors = [];
    const r = cell.r;
    const c = cell.c;

    // Cima (dir 0)
    if (r > 0 && !grid[r - 1][c].visited) {
      neighbors.push({ cell: grid[r - 1][c], dir: 0 });
    }
    // Direita (dir 1)
    if (c < cols - 1 && !grid[r][c + 1].visited) {
      neighbors.push({ cell: grid[r][c + 1], dir: 1 });
    }
    // Baixo (dir 2)
    if (r < rows - 1 && !grid[r + 1][c].visited) {
      neighbors.push({ cell: grid[r + 1][c], dir: 2 });
    }
    // Esquerda (dir 3)
    if (c > 0 && !grid[r][c - 1].visited) {
      neighbors.push({ cell: grid[r][c - 1], dir: 3 });
    }

    return neighbors;
  }

  function removeWalls(a, b, dir) {
    if (dir === 0) { // a está abaixo de b
      a.walls[0] = false;
      b.walls[2] = false;
    } else if (dir === 1) { // a está à esquerda de b
      a.walls[1] = false;
      b.walls[3] = false;
    } else if (dir === 2) { // a está acima de b
      a.walls[2] = false;
      b.walls[0] = false;
    } else if (dir === 3) { // a está à direita de b
      a.walls[3] = false;
      b.walls[1] = false;
    }
  }

  // BFS para encontrar o menor caminho da solução
  function solveMaze(grid, rows, cols) {
    const queue = [[{ r: 0, c: 0 }]];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[0][0] = true;

    while (queue.length > 0) {
      const path = queue.shift();
      const curr = path[path.length - 1];

      if (curr.r === rows - 1 && curr.c === cols - 1) {
        return path;
      }

      const cell = grid[curr.r][curr.c];

      // Cima
      if (!cell.walls[0] && curr.r > 0 && !visited[curr.r - 1][curr.c]) {
        visited[curr.r - 1][curr.c] = true;
        queue.push([...path, { r: curr.r - 1, c: curr.c }]);
      }
      // Direita
      if (!cell.walls[1] && curr.c < cols - 1 && !visited[curr.r][curr.c + 1]) {
        visited[curr.r][curr.c + 1] = true;
        queue.push([...path, { r: curr.r, c: curr.c + 1 }]);
      }
      // Baixo
      if (!cell.walls[2] && curr.r < rows - 1 && !visited[curr.r + 1][curr.c]) {
        visited[curr.r + 1][curr.c] = true;
        queue.push([...path, { r: curr.r + 1, c: curr.c }]);
      }
      // Esquerda
      if (!cell.walls[3] && curr.c > 0 && !visited[curr.r][curr.c - 1]) {
        visited[curr.r][curr.c - 1] = true;
        queue.push([...path, { r: curr.r, c: curr.c - 1 }]);
      }
    }

    return [];
  }

  return {
    generate: generate
  };
})();
