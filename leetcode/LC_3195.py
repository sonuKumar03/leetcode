from typing import List

'''
You are given a 2D binary array grid. Find a rectangle with horizontal and vertical sides with the smallest area, such that all the 1's in grid lie inside this rectangle.
Return the minimum possible area of the rectangle.
'''
class Solution:
    def minimumArea(self, grid: List[List[int]]) -> int:
        n,m = len(grid),len(grid[0])
        min_r,min_c = n,m
        max_r,max_c = -1,-1
        for r in range(n):
            for c in range(m):
                if grid[r][c]==1:
                    min_r = min(min_r,r)
                    min_c = min(min_c,c)
                    max_r = max(max_r,r)
                    max_c = max(max_c,c)
        
        return (max_r-min_r+1) * (max_c-min_c+1)

sol = Solution()
ans = sol.minimumArea(
    grid = [[0,1,0],[1,0,1]]
)
print(ans)     
