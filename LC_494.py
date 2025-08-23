from functools import lru_cache
from typing import List

class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        # TOP-DOWN APPROACH
        # @lru_cache(None)
        # def solve(i:int,cur_sum:int):
        #     if i == n:
        #         return 1 if cur_sum == target else 0
        #     add = solve(i+1,cur_sum+nums[i])
        #     subtract = solve(i+1,cur_sum-nums[i])
        #     return add + subtract
        # return solve(0,0)
        # BOTTOM UP APPROACH 
        total = sum(nums)
        if abs(target) > total or (total + target) %2 ==1:
            return 0

        p = (total + target) // 2 
        dp = [0]*(p+1)
        dp[0] = 1
        for x in nums:
            for s in range(p,x-1,-1):
                dp[s] += dp[s-x]
        return dp[p]
sol = Solution()
ans = sol.findTargetSumWays(
    nums = [1,1,1,1,1], target = 3
)
print(ans)