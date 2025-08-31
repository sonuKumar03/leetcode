from collections import defaultdict
from typing import List, Dict, List, Tuple, Set

class Solution:
    def score(self, cards: List[str], x: str) -> int:
        # Build adjacency list of directed graph
        g: Dict[str, List[str]] = defaultdict(list)
        for s in cards:
            u, v = s[0], s[1]
            g[u].append(v)

        if x not in g and x not in {v for _, v in [(s[0], s[1]) for s in cards]}:
            return 1  # only the start node exists

        # DFS for longest simple path in terms of nodes visited
        def dfs(u: str, seen: Set[str]) -> int:
            best = 1  # count this node
            for v in g[u]:
                if v not in seen:
                    seen.add(v)
                    best = max(best, 1 + dfs(v, seen))
                    seen.remove(v)
            return best

        return dfs(x, {x})

# Example
sol = Solution()
print(sol.score(["aa","ab","ba","ac"], "a"))  # 2 (nodes: a->b or a->c)
