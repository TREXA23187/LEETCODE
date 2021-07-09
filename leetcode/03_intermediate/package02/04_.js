/**
 * 一个合法的括号匹配序列有以下定义：
 * 1.空串""是一个合法的括号匹配序列
 * 2.如果"X"和"Y"都是合法的括号匹配序列，“XY”也是一个合法的括号匹配序列
 * 3.如果X是合法，（X）也是合法
 * 对于一个合法的括号序列，我们又定义它的深度：
 * 1.空串的深度为0
 * 2.如果字符串X的深度是x，字符串Y的深度是y，那么字符串XY的深度为max(x,y)
 * 3.如果字符串X的深度是x，那么字符串(X)的深度是x+1
 * 例如："()()()"的深度是1，"((()))"的深度是x+1
 * 
 * 现在给你一个合法的括号序列，需要计算出其深度。
 */

// 最长合法括号子串
function maxLength(s) {
    if (s === null || s === '') {
        return 0
    }
    const dp = new Array(s.length).fill(0)
    let pre = 0
    let res = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            pre = i - dp[i - 1] - 1
            if (pre >= 0 && s[pre] === '(') {
                dp[i] = dp[i - 1] + 2 + (pre > 0 ? dp[pre - 1] : 0)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
}