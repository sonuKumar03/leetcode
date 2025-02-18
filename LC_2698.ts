/**
 * https://leetcode.com/problems/find-the-punishment-number-of-an-integer/description/
 * 2025-02-16
 */

const map: Record<number, boolean> = {};

function partition(
  start: number,
  curSum: number,
  n: number,
  targetSum: number
): boolean {
  const str = n + "";

  if (curSum in map) {
    return true;
  }

  if (start === str.length) {
    return curSum === targetSum;
  }

  if (curSum > targetSum) {
    return false;
  }

  let flag = false;

  for (let i = start; i < str.length; i++) {
    const curString = str.substring(start, i + 1);
    const num = Number(curString);
    flag = flag || partition(i + 1, curSum + num, n, targetSum);
    if (flag) {
      map[targetSum] = true;
      return map[targetSum];
    }
  }
  map[targetSum] = false;
  return map[targetSum];
}

function punishmentNumber(n: number): number {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const square = i * i;
    if (partition(0, 0, square, i)) {
      ans += square;
    }
  }
  return ans;
}
for (let i = 0; i < 1000; i++) {
  console.log(punishmentNumber(i));
}
