from typing import List


class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        n = len(nums)
        if n < 3:
             return 0
        INF = -10**7
        best = INF
        prefix_max = [0]* n 
        suffix_max = [0] * n 
        prefix_max[0] = nums[0]

        for i in range(1,n):
             prefix_max[i] = max(nums[i],prefix_max[i-1]) 
        suffix_max[-1] = nums[-1]
        for i in range(n-2,-1,-1):
             suffix_max[i] = max(nums[i],suffix_max[i+1])
        
        for j in range(1,n-1):
             cur =( prefix_max[j-1] - nums[j] )  * suffix_max[j+1]
             best = max(cur,best)
        return best if best != INF and best>0 else 0

sol = Solution()
print(sol.maximumTripletValue(
    nums = [12,6,1,2,7]
))
        
print(sol.maximumTripletValue(
    nums = [1,10,3,4,19]
))

print(sol.maximumTripletValue(
    nums = [1,2,3]
))

