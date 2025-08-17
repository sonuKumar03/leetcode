from functools import lru_cache
import sys

def input():
    return sys.stdin.readline().strip()

n,max_weight = list(map(int,input().split()))
weights_and_values = []
for _ in range(n):
    weights_and_values.append(list(map(int,input().split())))
dp = [0] * ( max_weight + 1)
for wi,vi in weights_and_values:
    for cap in range(max_weight,wi-1,-1):
        dp[cap]= max(dp[cap],vi + dp[cap-wi])
print(dp[max_weight])
# TOP-DOWN APPROACH -> too slow for atcoder 
# @lru_cache(None)
# def solve(i,cur_weight):
#     if i >=n:
#         return 0
#     ans = 0 
#     weight,value = weights_and_values[i]
#     # take i
#     if weight+cur_weight <= max_weight:
#         ans = max(ans,value + solve(i+1,cur_weight+weight))
#     # skip
#     skip = solve(i+1,cur_weight)
#     return max(ans,skip) 
# ans = solve(0,0)
# print(ans)