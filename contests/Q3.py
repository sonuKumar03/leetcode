from functools import lru_cache
from typing import List


class Solution:
    def uniquePaths(self, grid: List[List[int]]) -> int:
        
        n,m = len(grid),len(grid[0])

        @lru_cache(None)
        def dfs(row,col)->int:
            if row ==n-1 and col == m-1:
                return 1
            ways = 0
            # move down 
            ni,nj = row+1,col
            if ni < n:
                if grid[ni][nj]==1:
                    nni , nnj = ni,nj+1
                    if nni < n and nnj <m:
                        ways += dfs(nni,nnj)
                else:
                    ways+=dfs(ni,nj)
            # move right 
            ni,nj = row,col+1
            if nj< m:
                if grid[ni][nj]==1:
                    nni,nnj = ni+1,nj
                    if nni < n and nnj < m:
                        ways+= dfs(nni,nnj)
                else:
                    ways+=dfs(ni,nj)
            
            return ways
        return dfs(0,0)
    
sol = Solution()
print(sol.uniquePaths(
    grid = [[0,1,0],[0,0,1],[1,0,0]]
))
print(sol.uniquePaths(
    [[0,1,1],[1,1,0]]
))
