from collections import Counter, defaultdict
from typing import *

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not s or not t or len(t) > len(s):
            return ""

        need = Counter(t)                 # counts of required chars
        have = defaultdict(int)           # counts inside current window
        required = len(need)              # number of distinct chars to satisfy
        formed = 0                        # how many distinct chars currently satisfied

        l = 0
        best_len = float("inf")
        best_l = best_r = 0

        for r, ch in enumerate(s):
            if ch in need:
                have[ch] += 1
                if have[ch] == need[ch]:
                    formed += 1

            # Try to shrink when all requirements met
            while formed == required:
                if r - l + 1 < best_len:
                    best_len = r - l + 1
                    best_l, best_r = l, r

                left_ch = s[l]
                if left_ch in need:
                    if have[left_ch] == need[left_ch]:
                        formed -= 1
                    have[left_ch] -= 1
                l += 1

        return "" if best_len == float("inf") else s[best_l:best_r+1]
