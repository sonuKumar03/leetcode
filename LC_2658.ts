/**
 * https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/
 * 2025-01-28
 */
function getValidNeighbors(i: number, j: number, n: number, m: number) {
  const neighbors = [];
  // left
  if (j - 1 >= 0) {
    neighbors.push([i, j - 1]);
  }
  // right
  if (j + 1 < m) {
    neighbors.push([i, j + 1]);
  }
  // down
  if (i + 1 < n) {
    neighbors.push([i + 1, j]);
  }
  // up
  if (i - 1 >= 0) {
    neighbors.push([i - 1, j]);
  }
  return neighbors;
}
function findMaxFish(grid: number[][]): number {
  const n = grid.length;
  const map = new Map<string, number>();
  let max_fish = 0;
  function dfs(i: number, j: number, currentSum: number, visited: Set<string>) {
    if (map.has(`${i}-${j}`)) {
      return map.get(`${i}-${j}`) as number;
    }
    // add base case
    const m = grid[i].length;

    if (i > n || j > m || i < 0 || j < 0) {
      return currentSum;
    }

    currentSum += grid[i][j];
    visited.add(`${i}-${j}`);
    const neighbors = getValidNeighbors(i, j, n, m);
    for (const neighbor of neighbors) {
      const [_i, _j] = neighbor;
      if (!visited.has(`${_i}-${_j}`) && grid[_i][_j] !== 0) {
        currentSum = Math.max(dfs(_i, _j, currentSum, visited), currentSum);
      }
    }
    map.set(`${i}-${j}`, currentSum);
    return currentSum;
  }

  //   for (let i = 0; i < grid.length; i++) {
  //     console.log(grid[i]);
  //   }

  for (let i = 0; i < grid.length; i++) {
    const m = grid[i].length;
    for (let j = 0; j < m; j++) {
      if (grid[i][j] !== 0) {
        max_fish = Math.max(dfs(i, j, 0, new Set()), max_fish);
        // console.log(i, j, max_fish);
      }
    }
  }
  return max_fish;
}
console.time("s");
const _grid = [
  [9, 1, 1, 6, 9, 7, 9, 1, 10, 8],
  [2, 5, 6, 1, 3, 5, 9, 7, 10, 10],
  [9, 2, 2, 9, 5, 0, 8, 2, 10, 0],
  [9, 2, 6, 3, 10, 2, 0, 9, 0, 7],
  [10, 3, 7, 10, 5, 3, 5, 9, 3, 9],
  [10, 2, 9, 7, 8, 5, 10, 8, 5, 4],
  [6, 3, 5, 5, 7, 2, 8, 8, 1, 0],
  [5, 7, 3, 8, 6, 9, 9, 8, 10, 2],
];
const t = findMaxFish(_grid);
console.timeEnd("s");
console.log("answer", t);
