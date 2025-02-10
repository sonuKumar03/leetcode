/**
 * LC -    https://leetcode.com/problems/tuple-with-same-product/description/?envType=daily-question&envId=2025-02-06
 * 2025-02-06
 */

function tupleSameProduct(nums: number[]): number {
  let ans = 0;

  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j >= i + 1; j--) {
      const product = nums[i] * nums[j];
      const seen = new Set();
      for (let k = i + 1; k < j; k++) {
        if (Math.floor(product % nums[k]) === 0) {
          const d = Math.floor(product / nums[k]);
          if (seen.has(d)) {
            ans += 8;
          }
          seen.add(nums[k]);
        }
      }
    }
  }
  return ans;
}
const _nums2 = [2, 3, 4, 6];
tupleSameProduct(_nums2);
