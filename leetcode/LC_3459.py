from functools import lru_cache
from typing import List

class Solution:
    def lenOfVDiagonal(self, grid: List[List[int]]) -> int:
        rows,cols = len(grid),len(grid[0])
        directions = [(1,1),(1,-1),(-1,-1),(-1,1)] #this should be close-wise 

        def grid_check(row,col):
            return 0<=row <rows and 0<=col < cols
        
        @lru_cache(None)
        def solve(row:int,col:int, d:int, can_turn, target:int):
            nx,ny = row + directions[d][0], col + directions[d][1]

            if not grid_check(nx,ny) or grid[nx][ny]!=target:
                return 0
            
            best = solve(nx,ny,d,can_turn,2-target)
            if can_turn:
                nt = 2 - target
                best = max(
                    best,
                    solve(nx,ny,(d+1)%4,False,nt)
                )
            
            return best+1
        
        res = 0
        for row in range(rows):
            for col in range(cols):
                if grid[row][col]==1:
                    for direction in range(4):
                        res = max(res,solve(row,col,direction,True,2)+1)
        
        return res
sol = Solution()
ans = sol.lenOfVDiagonal(
    [[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]
)
print(ans)
