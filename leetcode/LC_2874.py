from typing import List


class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        n = len(nums)
        INF = -10**7
        best = INF
        for i in range(n):
              for j in range(i+1,n):
                   cur = 0
                   for k in range(j+1,n):
                        print(i,j,k)
                        if nums[i]>0 and nums[j] >0 and nums[j]:
                            cur = (nums[i] - nums[j]) * nums[k]
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

