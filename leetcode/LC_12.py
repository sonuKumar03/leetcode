from collections import defaultdict


class Solution:
    def intToRoman(self, num: int) -> str:
        symbol_and_values = [
            (1,'I'),
            (5,'V'),
            (10,'X'),
            (50,'L'),
            (100,'C'),
            (500,'D'),
            (1000,'M')
        ]
        symbol_and_values_2 = [
            (4,'IV'),
            (9,'IX'),
            (40,'XL'),
            (90,'XC'),
            (400,'CD'),
            (900,'CM')
        ]
        symbol_and_values.sort(reverse=True)
        symbol_and_values_2.sort(reverse=True)
        def solve(n:int):
            if n <0:
                return ""
            t =str(n) 
            if t.startswith('4') or t.startswith('9'):
                for _ ,(value,symbol)in enumerate(symbol_and_values_2):
                    if value <= n:
                        op = n // value
                        temp = n - ((op) * value)
                        return symbol*op + solve(temp)
            else:
                for _ ,(value,symbol)in enumerate(symbol_and_values):
                    if value <= n:
                        op = n // value
                        temp = n - ((op) * value)
                        return symbol * op + solve(temp)
            return ""
        ans = solve(num)
        return ans
    
sol = Solution()
sol.intToRoman(3749)
sol.intToRoman(1994)
sol.intToRoman(58)
