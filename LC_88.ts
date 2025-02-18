/**
 * 2025-02-16
 *
 * https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  let zeroIndex = m - n;
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      i += 1;
    } else {
      nums1[zeroIndex] = nums1[i];
      nums1[i] = nums2[j];
      j += 1;
      zeroIndex += 1;
      i += 1;
    }
  }
  while (zeroIndex < m) {
    nums1[zeroIndex] = nums2[j];
    j += 1;
    zeroIndex += 1;
  }
}

merge([1, 2, 3, 0, 0, 0], 6, [2, 5, 6], 3);
