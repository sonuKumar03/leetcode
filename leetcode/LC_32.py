from functools import lru_cache


class Solution:
    def longestValidParentheses(self, s: str) -> int:
        n = len(s)
        best = 0
        stack = []
        for ch,i in enumerate(s):
            if ch =='(':
                stack.append(i)
                


sol = Solution()
ans = sol.longestValidParentheses(s = "()(()")
print(ans)

ans = sol.longestValidParentheses(s = "(()")
print(ans)

ans = sol.longestValidParentheses(s = ")()())")
print(ans)
