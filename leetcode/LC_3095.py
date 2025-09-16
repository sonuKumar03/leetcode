from typing import List

class Solution:
    def minimumSubarrayLength(self, nums: List[int], k: int) -> int:
        n = len(nums)
        left = 0
        res = 0
        best = 100
        for right in range(n):
            res = res | right 
            while res >=k:
                best = min(best,right - left + 1) if right - left + 1 > 0 else best 
                # res = 

                

        