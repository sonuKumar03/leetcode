from functools import lru_cache
from typing import List


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:

        n = len(coins)
        # @lru_cache(None)
        # def solve(i,cur_sum): # minimum number of coins to form amount with coins ending at i 
        #     if cur_sum == 0:
        #         return 0
        #     if cur_sum < 0:
        #         return float("inf")
        #     best = float("inf")
        #     for coin in coins:
        #         best = min(best,1 + solve(cur_sum-coin))
        #     return best
        # return solve(0,amount)

        dp = [amount+1] * ( amount+1)
        dp[0]=0
        for a in range(1,amount+1):
            for c in coins:
                if c <= a:
                    dp[a] = min(dp[a],dp[a-c]+1)
        return dp[amount] if dp[amount]!= amount + 1 else -1


sol = Solution()
ans = sol.coinChange(
    coins = [1,2,5], amount = 11
)
print(ans)
ans = sol.coinChange(
    coins = [2], amount = 3
)
print(ans)

ans = sol.coinChange(
   coins = [1], amount = 0
)
print(ans)
