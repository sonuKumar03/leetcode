from typing import List

class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        n = len(nums)
        total = sum(nums)
        target = total -x 
        left = 0
        cur = 0
        best = -1
        for right in range(n):
            cur += nums[right]
            while cur > target and left<=right:
                cur = nums[left]
                left +=1
            if cur == target:
                best = max(best,right - left + 1)
        return -1 if best ==-1 else n - best
                



sol = Solution()
print(sol.minOperations(
    nums = [1,1,4,2,3], x = 5
))