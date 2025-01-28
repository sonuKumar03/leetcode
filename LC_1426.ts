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

  const reachable: Record<number, Set<number>> = {};
  const graph = new Graph();
  for (const prerequisite of prerequisites) {
    const [a, b] = prerequisite;
    graph.addVertex(a, b);
  }

  function bfs(course: number) {
    const visited = new Set<number>();
    const queue: number[] = [];
    visited.add(course);
    queue.push(course);
    // traverse each node at course current node
    while (queue.length > 0) {
      const node = queue.shift();
      if (node === undefined) {
        return;
      }
      for (const n of graph.getNeighBhors(node)) {
        if (!(node in reachable)) {
          reachable[node] = new Set();
        }
        reachable[node].add(n);
        if (!visited.has(n)) {
          queue.push(n);
        }
      }
    }
  }

  for (let i = 0; i < numCourses; i++) {
    bfs(i);
  }

  const result: boolean[] = [];
  for (const q of queries) {
    const [a, b] = q;
    result.push(reachable[a]?.has(b) || false);
  }
  console.log(reachable);
  return result;
}

const numCourses = 10,
  prerequisites = [
    [3, 9],
    [3, 2],
    [3, 7],
    [9, 5],
    [9, 0],
    [9, 6],
    [8, 0],
    [8, 1],
    [8, 7],
    [5, 0],
    [5, 2],
    [5, 1],
    [5, 7],
    [5, 6],
    [0, 2],
    [0, 1],
    [0, 6],
    [2, 1],
    [2, 6],
    [4, 1],
    [1, 7],
    [1, 6],
    [7, 6],
  ],
  queries = [
    [9, 7],
    [7, 3],
    [6, 1],
    [1, 8],
    [5, 7],
    [3, 8],
    [2, 5],
    [7, 9],
    [3, 0],
    [4, 8],
    [5, 1],
    [5, 3],
    [3, 0],
    [9, 8],
    [6, 9],
    [5, 0],
    [8, 2],
    [3, 6],
    [3, 6],
    [1, 0],
    [9, 7],
    [9, 5],
    [1, 9],
    [0, 4],
    [7, 3],
    [9, 8],
    [6, 2],
    [7, 9],
    [8, 9],
    [0, 5],
    [5, 8],
    [9, 8],
    [5, 6],
    [7, 6],
    [7, 3],
    [2, 1],
    [9, 8],
    [8, 2],
    [7, 8],
    [9, 8],
    [0, 1],
    [8, 9],
    [8, 9],
    [6, 1],
    [8, 1],
    [8, 6],
    [3, 8],
    [8, 9],
    [9, 7],
    [8, 7],
    [3, 7],
    [9, 7],
    [9, 6],
    [4, 2],
    [5, 9],
    [3, 0],
    [6, 9],
    [7, 8],
    [6, 9],
    [2, 1],
    [7, 3],
    [0, 5],
    [4, 9],
    [5, 6],
    [8, 7],
    [9, 7],
    [9, 3],
    [1, 0],
    [1, 7],
    [7, 9],
    [1, 5],
  ];

checkIfPrerequisite(numCourses, prerequisites, queries);
