from typing import List


from typing import List

class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        l = 0
        zeros = 0
        best = 0

        for r, x in enumerate(nums):
            if x == 0:
                zeros += 1

            # shrink until window has at most one zero
            while zeros > 1:
                if nums[l] == 0:
                    zeros -= 1
                l += 1

            # length after deleting one element (the zero if present)
            best = max(best, r - l)   # note: not r - l + 1
        return best
        
sol = Solution()
ans = sol.longestSubarray(
nums = [1,1,0,1]
)
print(ans)

ans = sol.longestSubarray(
nums = [0,1,1,1,0,1,1,0,1]
)
print(ans)


        
