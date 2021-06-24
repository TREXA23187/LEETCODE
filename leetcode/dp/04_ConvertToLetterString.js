/*
* 规定1和A对应、2和B对应...
* 那么一个数字字符串"111"可以转化为
* "AAA"、"KA"、"AK"
* 给定一个只有数字字符组成的字符串str，返回有多少种转化结果
* */

function number(str) {
    if (str === null || str.length === 0) {
        return 0
    }
    return process(str, 0)
}

function process(str, i) {
    if (i === str.length) { //base case
        return 1
    }
    if (str[i] === '0') {
        return 0
    }
    if (str[i] === '1') {
        let res = process(str, i + 1)
        if (i + 1 < str.length) {
            res += process(str, i + 2)
        }
        return res
    }
    if (str[i] === '2') {
        let res = process(str, i + 1)
        if (i + 1 < str.length && ('0' <= str[i + 1] <= '6')) {
            res += process(str, i + 2)
        }
        return res
    }
    //str[i+1] === '3'~'9'
    return process(str, i + 1)
}

function dpWay(str) {
    if (str.length === 0) {
        return 0
    }
    const N = str.length
    const dp = new Array(N + 1)
    dp[N] = 1
    for (let i = N - 1; i >= 0; i--) {
        if (str[i] === '0') {
            dp[i] = 0
        }
        if (str[i] === '1') {
            dp[i] = dp[i + 1]
            if (i + 1 < str.length) {
                dp[i] += dp[i + 2]
            }
        }
        if (str[i] === '2') {
            dp[i] = dp[i + 1]
            if (i + 1 < str.length && ('0' <= str[i + 1] <= '6')) {
                dp[i] += dp[i + 2]
            }
        }
    }

    return dp[0]
}

console.log(number('11111'))
console.log(dpWay('11111'))