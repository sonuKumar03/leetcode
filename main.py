from functools import lru_cache
from typing import List


class Solution:
    def subsequenceSumAfterCapping(self, nums: List[int], k: int) -> List[bool]:
        res = []
        n = len(nums)
        
        for i in range(n):
            ar = [ min(i+1,nums[j]) for j in range(n) ]
            if sum(ar) < k:
                res.append(False)
                continue
            @lru_cache(None)
            def check(i:int,cur_sum):
                if cur_sum == k:
                    return True
                if cur_sum >k:
                    return False
                if i >= n:
                    return False
                choose = check(i+1,cur_sum+ar[i]) 
                skip = check(i+1,cur_sum)
                return choose or skip
            res.append(check(0,0))
            check.cache_clear()
        return res
sol = Solution()
print(sol.subsequenceSumAfterCapping(
    [4,3,2,4],
    k = 5
))
print(sol.subsequenceSumAfterCapping(
    [1],
    k = 1
))