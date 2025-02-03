/**
 * LC - https://leetcode.com/problems/redundant-connection/?envType=daily-question&envId=2025-01-29
 * 2025-01-29
 */

import { Graph } from "./utils/graph";

function findRedundantConnection(edges: number[][]): number[] {
  const graph = new Graph();
  let cycleStart = -1;
  const parentMap = new Map();
  for (let i = 0; i < edges.length; i++) {
    parentMap.set(i + 1, -1);
  }
  for (const e of edges) {
    graph.addVertex(e[0], e[1]);
    graph.addVertex(e[1], e[0]);
  }

  const cycles: number[] = [];

  function dfs(node: number, visited: Set<number>, parent: number) {
    visited.add(node);
    parentMap.set(node, parent);
    for (const neighbhor of graph.getNeighBhors(node)) {
      if (!visited.has(neighbhor)) {
        dfs(neighbhor, visited, node);
      } else if (neighbhor !== parent && cycleStart === -1) {
        cycleStart = neighbhor;
        parentMap.set(neighbhor, node);
      }
    }
  }
  dfs(1, new Set(), -1);

  const cycleNodes = new Map();
  let node = cycleStart;
  do {
    cycleNodes.set(node, 1);
    node = parentMap.get(node);
  } while (node !== cycleStart);

  const result: number[] = [];

  for (let i = edges.length - 1; i > 0; i--) {
    if (cycleNodes.has(edges[i][1]) && cycleNodes.has(edges[i][0])) {
      result.push(...edges[i]);
      break;
    }
  }
  return result;
}

const edges = [
  [3, 7],
  [1, 4],
  [2, 8],
  [1, 6],
  [7, 9],
  [6, 10],
  [1, 7],
  [2, 3],
  [8, 9],
  [5, 9],
];
findRedundantConnection(edges);
