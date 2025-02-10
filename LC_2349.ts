/**
 * LC - https://leetcode.com/problems/design-a-number-container-system/
 * 2025-02-08
 */

class MinHeap {
  heap: number[] = [];
  constructor() {
    this.heap = [];
  }

  #getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }

  #getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }

  #getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(index: number) {
    return this.#getParentIndex(index) >= 0;
  }

  #swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value: number) {
    this.heap.push(value);
    this.#heapifyUp();
  }

  #heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (
      this.hasParent(currentIndex) &&
      this.heap[currentIndex] < this.heap[this.#getParentIndex(currentIndex)]
    ) {
      this.#swap(currentIndex, this.#getParentIndex(currentIndex));
      currentIndex = this.#getParentIndex(currentIndex);
    }
  }

  removeMin() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop() as number;
    this.#heapifyDown();
    return minValue;
  }

  #heapifyDown() {
    let currentIndex = 0;
    while (this.#getLeftChildIndex(currentIndex) < this.heap.length) {
      let smallerChildIndex = this.#getLeftChildIndex(currentIndex);
      if (
        this.#getRightChildIndex(currentIndex) < this.heap.length &&
        this.heap[this.#getRightChildIndex(currentIndex)] <
          this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.#getRightChildIndex(currentIndex);
      }

      if (this.heap[currentIndex] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.#swap(currentIndex, smallerChildIndex);
      }

      currentIndex = smallerChildIndex;
    }
  }
}
class NumberContainers {
  numberToIndex = new Map();
  numberToIndexList = new Map<number, MinHeap>();
  indexToNumber = new Map();
  constructor() {}

  change(index: number, number: number): void {
    let flag = false;
    if (
      this.indexToNumber.has(index) &&
      this.indexToNumber.get(index) !== number
    ) {
      const oldNumber = this.indexToNumber.get(index);
      let oldIndexList = this.numberToIndexList.get(oldNumber);
      if (oldIndexList?.heap && oldIndexList?.heap.length > 0) {
        const t = oldIndexList.removeMin();
        this.numberToIndex.set(oldNumber, t);
        this.numberToIndexList.set(oldNumber, oldIndexList);
      } else {
        this.numberToIndex.delete(oldNumber);
        this.numberToIndexList.delete(oldNumber);
        this.indexToNumber.delete(index);
      }
    }
    if (!this.numberToIndex.has(number)) {
      this.numberToIndex.set(number, Number.MAX_SAFE_INTEGER);
      const minHeap = new MinHeap();
      minHeap.insert(index);
      this.numberToIndexList.set(number, minHeap);
      flag = true;
    }
    const t = this.numberToIndex.get(number);
    this.numberToIndex.set(number, Math.min(t, index));
    const heap = this.numberToIndexList.get(number) as MinHeap;
    heap?.insert(index);
    if (!flag) {
      this.numberToIndexList.set(number, heap);
    }
    this.indexToNumber.set(index, number);
  }

  find(number: number): number {
    if (!this.numberToIndex.has(number)) {
      return -1;
    }
    const t = this.numberToIndex.get(number);
    return t === Number.MAX_SAFE_INTEGER ? -1 : t;
  }
}
