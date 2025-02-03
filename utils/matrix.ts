export function getValidNeighbors(i: number, j: number, n: number, m: number) {
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
