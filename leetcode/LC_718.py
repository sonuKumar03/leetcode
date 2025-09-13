from functools import lru_cache
from typing import List

class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        n, m = len(nums1), len(nums2)
        dp =[0]*(m+1)
        best = 0
        for i in range(n):
            prev = 0
            for j in range(m):
                temp = dp[j]
                dp[j] = prev + 1 if nums1[i] == nums2[j] else 0
                best = max(best,dp[j])
                prev = temp
        return best
sol = Solution()
print(sol.findLength([1,2,3,2,1], [3,2,1,4,7]))      # 3
print(sol.findLength([0,1,1,1,1], [1,0,1,0,1]))      # 2