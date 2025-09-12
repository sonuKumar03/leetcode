from collections import defaultdict
from typing import Counter


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        countT = Counter(t)
        n = len(s)
        window = defaultdict(int)
        l = 0
        INF = float("infinity")
        res,resLen = [-1,-1],INF
        need = len(countT)
        have = 0
        for r in range(n):
            c = s[r]
            window[c]+=1
            if c in countT and window[c]==countT[c]:
                have+=1
            while need == have and l < n:
                if r - l + 1 < resLen:
                    res = [l,r]
                    resLen = r - l + 1
                window[s[l]]-=1
                if s[l] in countT and window[s[l]]< countT[s[l]]:
                    have-=1
                l+=1

        l,r = res
        return s[l:r+1] if resLen!=INF else ""
    
sol = Solution()
ans = sol.minWindow(
    s = "cabwefgewcwaefgcf", t = "cae"
)
print(ans)