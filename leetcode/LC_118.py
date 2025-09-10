from typing import List

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows <= 0:
            return []
        ans = [[1]]
        for _ in range(1, numRows):
            prev = ans[-1]
            cur = [1]
            for j in range(1, len(prev)):
                cur.append(prev[j-1] + prev[j])
            cur.append(1)
            ans.append(cur)
        return ans

sol = Solution()
print(sol.generate(4))  # [[1],[1,1],[1,2,1],[1,3,3,1]]
