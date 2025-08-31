class Solution:
    def flowerGame(self, n: int, m: int) -> int:
        # Count of pairs (i, j) with different parity in [1..n] x [1..m]
        odd_n, even_n = (n + 1) // 2, n // 2
        odd_m, even_m = (m + 1) // 2, m // 2
        return odd_n * even_m + even_n * odd_m


sol = Solution()
print(sol.flowerGame(1, 1))  # 0
print(sol.flowerGame(2, 3))  # 3
