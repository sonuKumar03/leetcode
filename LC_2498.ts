/**
 * LC - https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/?envType=daily-question&envId=2025-01-25
 * 25 Jan 2025
 */

type Parent = number;

class DisJointSet {
  print(): void {
    console.log("parent", this.#parent);
    console.log("rank", this.#rank);
  }
  #rank: number[];
  #parent: number[];
  constructor(n: number) {
    this.#parent = Array.from({ length: n }, (_, i) => i);
    this.#rank = new Array(n).fill(0);
  }
  find(x: number): Parent {
    if (this.#parent[x] != x) {
      this.#parent[x] = this.find(this.#parent[x]);
    }
    return this.#parent[x];
  }

  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX != rootY) {
      if (this.#rank[rootX] > this.#rank[rootY]) {
        this.#parent[rootY] = rootX;
      } else if (this.#rank[rootX] < this.#rank[rootY]) {
        this.#parent[rootX] = rootY;
      } else {
        this.#parent[rootY] = rootX;
        this.#rank[rootX] += 1;
      }
    }
  }
}

function lexicographicallySmallestArray(
  nums: number[],
  limit: number
): number[] {
  const sorted = nums.slice().sort((a, b) => a - b);
  const len = nums.length;
  const set = new DisJointSet(len);

  for (let i = 0; i < len - 1; i++) {
    set.union(sorted[i], sorted[i + 1]);
  }

  console.log(set.print());
  // group indices by their compinet ;
  const components: Record<number, number[]> = {};
  for (let i = 0; i < len; i++) {
    const root = set.find(i);
    if (!(root in components)) {
      components[root] = [];
    }
    components[root].push(i);
  }
  const results = [...nums];

  const result = [...nums];
  for (const indices of Object.values(components)) {
    const values = indices.map((idx) => nums[idx]).sort((a, b) => a - b); // Sort the values
    indices.sort((a, b) => a - b); // Sort the indices
    indices.forEach((idx, i) => {
      result[idx] = values[i]; // Assign sorted values back
    });
  }
  return results;
}
const nums = [1, 5, 3, 9, 8],
  limit = 2;

console.log(lexicographicallySmallestArray(nums, limit));
