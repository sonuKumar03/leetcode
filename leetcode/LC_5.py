from functools import lru_cache


class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        dp = [[False]*n for _ in range(n)]
        start ,best_len = 0,1
         # length 1 substrings
        for i in range(n):
            dp[i][i] = True
        for i in range(n - 1):
            if s[i] == s[i + 1]:
                dp[i][i + 1] = True
                start, best_len = i, 2
    
         # length >= 3
        for L in range(3, n + 1):          # L = current window length
            for i in range(0, n - L + 1):
                j = i + L - 1
                if s[i] == s[j] and dp[i + 1][j - 1]:
                    dp[i][j] = True
                    if L > best_len:
                        start, best_len = i, L
        
        return s[start:start + best_len]
        
        # TOP_DOWN APPROACH 
        # @lru_cache(None)
        # def dp(i:int,j:int):
        #     if i >= len(s):
        #         return ""
        #     if i >j:
        #         return ""
        #     if i == j:
        #         return s[i]
            
        #     if s[i]==s[j]:
        #         middle = dp(i + 1, j - 1)
        #         if len(middle) == j-i-1:
        #             return s[i]+middle+s[j]
            
        #     left = dp(i+1,j) 
        #     right = dp(i,j-1)
        #     return left if len(left) >= len(right) else right
        # return dp(0,len(s)-1)
            
sol = Solution()
ans = sol.longestPalindrome("babad")
print(ans)



