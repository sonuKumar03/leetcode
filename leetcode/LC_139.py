from functools import lru_cache
from typing import List


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        words = set(wordDict)
        n = len(s)
        @lru_cache(None)
        def can(i:int)->bool:
            if i == n:
                return True
            for j in range(i+1,n+1):
                if s[i:j] in words and can(j):
                    return True
            return False
        return can(0)

        
sol = Solution()
ans = sol.wordBreak(
    s = "leetcode", wordDict = ["leet","code"]
)
print(ans)