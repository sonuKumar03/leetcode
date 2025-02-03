/**
 * https://leetcode.com/problems/course-schedule-iv/
 * 2025-01-27
 */

import { Graph } from "./utils/graph";

function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][]
): boolean[] {
  if (prerequisites.length === 0) {
    return Array(numCourses).fill(false);
  }
  const graph = new Graph();
  for (const prerequisite of prerequisites) {
    const [a, b] = prerequisite;
    graph.addVertex(a, b);
  }

  function dfs(node: number, visited: Set<number>, target: number) {
    visited.add(node);

    for (const n of graph.getNeighBhors(node)) {
      if (!visited.has(n)) {
        dfs(n, visited, target);
      }
    }
    return visited.has(target);
  }
  const result: boolean[] = [];
  for (const query of queries) {
    result.push(dfs(query[0], new Set(), query[1]));
  }
  graph.print();
  return result;
}
const numCourses = 4,
  prerequisites = [
    [2, 3],
    [2, 1],
    [0, 3],
    [0, 1],
  ],
  queries = [
    [0, 1],
    [0, 3],
    [2, 3],
    [3, 0],
    [2, 0],
    [0, 2],
  ];
const t = checkIfPrerequisite(numCourses, prerequisites, queries);
console.log(t);
