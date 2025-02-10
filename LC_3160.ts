/**
 * LC - https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/description/?envType=daily-question&envId=2025-02-07
 * 2025-02-07
 */

function queryResults(limit: number, queries: number[][]): number[] {
  let ans: number[] = [];
  const bag = new Map<number, number>();
  const colorSet = new Map<number, number>();
  for (const query of queries) {
    const [ball, color] = query;

    if (bag.has(ball)) {
      const prevColor = bag.get(ball) as number;
      const currColorCount = colorSet.get(prevColor as number) as number;
      colorSet.set(prevColor, currColorCount - 1);
      if (colorSet.get(prevColor) === 0) {
        colorSet.delete(prevColor);
      }
    }

    bag.set(ball, color);
    const colorCount = colorSet.get(color);
    if (!colorCount) {
      colorSet.set(color, 1);
    } else {
      colorSet.set(color, colorCount + 1);
    }
    ans.push(colorSet.size);
  }
  return ans;
}
const _limit = 4,
  queries = [
    [0, 2],
    [1, 10],
    [0, 10],
    [0, 3],
    [1, 5],
  ];
const _ans = queryResults(_limit, queries);

console.log(_ans);
