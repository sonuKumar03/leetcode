/**
 * https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
 * 2025-02-18
 */

function rotate(nums: number[], k: number): void {
  const len = nums.length;
  reverse(nums, 0, len - k - 1);
  reverse(nums, len - k, len - 1);
  reverse(nums, 0, len - 1);
  console.log(nums);
}

function reverse(nums: number[], start: number, end: number): void {
  while (end >= start) {
    let t = nums[end];
    nums[end] = nums[start];
    nums[start] = t;
    end -= 1;
    start += 1;
  }
}

rotate([1, 2, 3, 4, 5, 6, 7], 2);
