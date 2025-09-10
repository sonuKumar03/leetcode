from functools import lru_cache
from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        words = set(wordDict)
        n = len(s)
        @lru_cache(None)
        def solve(i:int)->List[str]:
            if i == n:
                return [""]
            res = []
            for j in range(i+1,n+1):
                word = s[i:j]
                if word in words:
                    for tail in solve(j):
                        res.append(word if tail=="" else word + " "+tail)
            
            return res
        return solve(0)
    

sol = Solution()
ans = sol.wordBreak(s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"])
print(ans)