from typing import List

class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        INF = float("infinity")
        res,resLen = [-1,-1],INF
        n = len(nums)
        cur_sum = 0
        l = 0
        for r in range(n):
            c = nums[r]
            cur_sum+=c
            while cur_sum>= target:
                if resLen > r - l + 1:
                    res = [l,r]
                    resLen = r - l + 1
                cur_sum-=nums[l]                
                l+=1
        l,r = res
        return r - l + 1
    
sol = Solution()
ans = sol.minSubArrayLen(
    target = 7, nums = [2,3,1,2,4,3]
)
print(ans)