from typing import List

# 3 * 3 matrix 
# 00-> 01->10->
# 20->21->02->12->21->22

class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        if not mat or not mat[0]:
            return []
        m,n = len(mat),len(mat[0])

        result = []
        r,c = 0,0
        direction = 1 
        for _ in range(m*n):
            result.append(mat[r][c])

            if direction == 1:
                if c == n -1 :
                    r+=1
                    direction = -1
                elif r == 0:
                    c+=1
                    direction = -1
                else:
                    r-=1
                    c+=1
            else:
                if r == m - 1:
                    c+=1
                    direction = 1
                elif c == 0:
                    r+=1 
                    direction = 1
                else:
                    r+=1
                    c-=1
        return result


sol = Solution()
ans = sol.findDiagonalOrder(
    [[1,2,3],[4,5,6],[7,8,9]]
)
print(ans)
        
        
