from functools import lru_cache
from typing import List

class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        n = len(coins)
        # TOP DOWN APPROACH
        # @lru_cache(None)
        # def solve(i:int,cur_sum):
        #     if i == n:
        #         return 1 if cur_sum == 0 else 0 
            
        #     if cur_sum < 0:
        #         return 0
            
        #     use = solve(i,cur_sum - coins[i])
        #     skip = solve(i+1,cur_sum)
        #     return use + skip
        # return solve(0,amount)
        # BOTTOM UP APPROACH
        dp = [0]*(amount+1)
        dp[0]=1

        for coin in coins:
            for x in range(coin,amount+1):
                dp[x]+=dp[x-coin]       
        
        return dp[amount]

    

sol = Solution()
ans = sol.change(
    amount = 5, coins = [1,2,5]
)
print(ans)

ans = sol.change(
    amount = 3, coins = [2]
)
print(ans)


    
