from functools import lru_cache
from typing import List

class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        word_set = set(words)
        ans:List[str] = []
        def is_concatenated(w:str)->bool:
            if not w:
                return False
            
            word_set.remove(w)
            n = len(w)

            @lru_cache(None)
            def can(i:int)->bool:
                if i == n:
                    return True
                
                for j in range(i+1,n+1):
                    if w[i:j] in word_set and can(j):
                        return True
                
                return False
            
            ok = can(0)
            word_set.add(w)
            can.cache_clear()
            return ok
            
        for w in words:
            if is_concatenated(w):
                ans.append(w)
        return ans