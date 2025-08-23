from functools import lru_cache
from typing import List


class Solution:
    def canPartition(self, nums: List[int]) -> bool:

        n = len(nums)
        total_sum = sum(nums)
        target = total_sum//2
        if total_sum % 2 !=0:
            return False
        dp = [False] * (target+1)

        dp[0]=True

        for num in nums:
            for s in range(target,num-1,-1):
                dp[s]=dp[s] or dp[s-num]
        
        return dp[target]

sol = Solution()
ans = sol.canPartition(
    nums = [1,5,11,5]
)
print(ans)

ans = sol.canPartition(
    nums = [1,2,3,5]
)
print(ans)

        