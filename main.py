from collections import defaultdict
import math
from typing import List


class Solution:
    def totalBeauty(self, nums: List[int]) -> int:
        result = []
        n = len(nums)
        def lol(ar:List[int]):
            t = len(ar)
            if t == 1:
                return ar[0]
            ans = math.gcd(ar[0],ar[1])
            # if len(ar)==2:
            #     return ans
            for i in range(1,len(ar)):
                if ar[i] > ar[i-1]:
                    ans = math.gcd(ar[i],ans)
                else:
                    return 0
            return ans
        def solve(i,path:List[int]):
            if i>=n:
                if len(path) >0:
                    result.append(path.copy())
                return 
            # use i 
            path.append(nums[i])
            solve(i+1,path)
            path.pop()
            solve(i+1,path)
        solve(0,[])
        # print(result)
        ans = 0
        for ar in result:
            p = lol(ar)
            print(ar,p)
            ans+=p
        return ans

sol = Solution()
print(sol.totalBeauty(
[11,68,33,38]
))
# print(sol.totalBeauty(
#    nums = [78,53]
# ))
# print(sol.totalBeauty(
#    nums = [1,2,3]
# ))

# print(sol.totalBeauty(
#    nums = [4,6]
# ))