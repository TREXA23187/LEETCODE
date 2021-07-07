/**
 * 一个完整的括号字符串定义规则如下：
 * 1.空字符串是完整的。
 * 2.如果s是完整的字符串，那么（s）也是完整的。
 * 3.如果s和t是完整的字符串，将他们连接起来形成的st也是完整的。
 * 
 * 牛牛有一个括号字符串，现在需要在其中任意位置尽量少地添加括号，将其转化为完整的括号字符串。
 * 请问至少需要添加多少个括号。
 */

function needParentheses(str) {
    let count = 0
    let ans = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            count++
        } else {
            if (count === 0) {
                ans++
            } else {
                count--
            }
        }
    }
    return count + ans
}