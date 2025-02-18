/**
 * https://leetcode.com/problems/find-the-punishment-number-of-an-integer/description/
 * 2025-02-16
 */
function digitSum(n) {
    var ans = 0;
    while (n > 0) {
        ans += Math.floor(n % 10);
        n = n / 10;
    }
    return ans;
}
function punishmentNumber(n) {
    var ans = 0;
    for (var i = 1; i < n; i++) {
        var square = i * i;
        if (digitSum(square) <= n) {
            ans += n;
        }
    }
    return ans;
}
console.log("hi");
console.log(punishmentNumber(10));
