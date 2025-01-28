export class Graph {
  #adjList: Record<number, number[]>;
  constructor() {
    this.#adjList = {};
  }
  addNode(node: number) {
    if (!(node in this.#adjList)) {
      this.#adjList[node] = [];
    }
  }
  addVertex(n1: number, n2: number) {
    this.addNode(n1);
    // since its a directed graph
    this.#adjList[n1].push(n2);
  }
  print() {
    for (const key of Object.keys(this.#adjList)) {
      console.log(key, this.#adjList[Number(key)]);
    }
  }
  getNeighBhors(node: number): number[] {
    return this.#adjList[node] ?? [];
  }
}
