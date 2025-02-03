export class Graph<T extends number | string> {
  #adjList: Record<T, T[]>;
  constructor() {
    this.#adjList = {} as Record<T, T[]>;
  }
  addNode(node: T) {
    if (!(node in this.#adjList)) {
      this.#adjList[node] = [];
    }
  }
  addVertex(n1: T, n2: T) {
    this.addNode(n1);
    // since its a directed graph
    this.#adjList[n1].push(n2);
  }
  print() {
    for (const key of Object.keys(this.#adjList)) {
      console.log(key, this.#adjList[key as T]);
    }
  }
  getNeighBhors(node: T): T[] {
    return this.#adjList[node] ?? [];
  }
}
