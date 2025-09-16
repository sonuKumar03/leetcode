from functools import lru_cache
import heapq
from typing import List


class Solution:
    def maximumProduct(self, nums: List[int], k: int) -> int:
        n = len(nums)
        heap = nums[:]
        heapq.heapify(heap)
        best = 1
        while k:
            x = heapq.heappop(heap)
            heapq.heappush(heap,x+1)
            k-=1
        MOD = 10 **7
        for item in heap:
            best = (best * item)%MOD
        return best
    

sol = Solution()
print(sol.maximumProduct(
    nums = [0,4],k=5
))