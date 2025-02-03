import { Graph } from "./utils/graph";
import { getValidNeighbors } from "./utils/matrix";

/**
 * LC - https://leetcode.com/problems/making-a-large-island/description/?envType=daily-question&envId=2025-01-31
 * 2025-01-31
 */

function nodeSerializer(i: number, j: number) {
  return `${i}-${j}`;
}

function nodeDeserializer(s: string): number[] {
  return s.split("-").map((e) => Number(e));
}

function largestIsland(grid: number[][]): number {
  const n = grid.length;
  const graph = new Graph<string>();
  // populate the graph
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const temp = getValidNeighbors(i, j, n, n);
      for (const col of temp) {
        const [a, b] = col;
        graph.addVertex(nodeSerializer(i, j), nodeSerializer(a, b));
        graph.addVertex(nodeSerializer(a, b), nodeSerializer(i, j));
      }
    }
  }

  function dfs(
    node: number[],
    visited: Set<string>,
    max: number,
    flag: boolean
  ) {
    const key = nodeSerializer(node[0], node[1]);
    visited.add(key);
    let curMax = max;
    for (const neighbor of graph.getNeighBhors(key)) {
      const [i, j] = nodeDeserializer(neighbor);
      const key2 = nodeSerializer(i, j);
      if (!visited.has(key2)) {
        if (grid[i][j] === 1) {
          curMax = Math.max(dfs([i, j], visited, curMax + 1, false), max);
        } else if (!flag) {
          curMax = Math.max(dfs([i, j], visited, curMax + 1, true), max);
        }
      }
    }
    return Math.max(curMax, max);
  }
  console.log(dfs([0, 0], new Set(), 0, false));
  return n;
}

const grid = [
  [1, 1],
  [1, 0],
];
largestIsland(grid);
