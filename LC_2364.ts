/**
 * LC - https://leetcode.com/problems/count-number-of-bad-pairs/
 * 2025-02-09
 *
 */

function countBadPairs(nums: number[]): number {
  let ans = 0;
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    const diff = i - nums[i];
    const goodPairs = map.get(diff) ?? 0;
    ans += i - goodPairs;
    map.set(diff, goodPairs + 1);
  }
  console.log(ans);

  return ans;
}

const _nums = [4, 1, 3, 3];
countBadPairs(_nums);
