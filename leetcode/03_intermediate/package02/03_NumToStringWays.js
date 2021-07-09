/**
 * 将给定的数转换为字符串，原则如下：1对应a，2对应b，...26对应z。
 * 例如12258可以转换为'abbeh','aveh','lbeh','lyh',个数为5
 * 编写一个函数，给出可以转换的不同字符串的个数。
 */

function convertWays(num) {
    if (num < 1) {
        return 0
    }
    return process(num + '', 0)
}

function process(str, index) {
    if (index === str.length) {
        return 1
    }
    if (str[index] === '0') {
        return 0
    }
    let res = process(str, index + 1)
    if (index === str.length - 1) {
        return res
    }

    if ((parseInt(str[index]) * 10 + parseInt(str[index + 1]) < 27)) {
        res += process(str, index + 2)
    }
    return res
}

function dpWays(num) {
    if (num < 1) {
        return 0
    }
    const str = num + ''
    const N = str.length
    const dp = new Array(N + 1)
    dp[N] = 1
    dp[N - 1] = str[N - 1] === '0' ? 0 : 1
    for (let i = N - 2; i >= 0; i--) {
        if (str[i] === '0') {
            dp[i] = 0
        } else {
            dp[i] = dp[i + 1] +
                (parseInt(str[i]) * 10 + parseInt(str[i + 1]) < 27 ? dp[i + 2] : 0)
        }
    }
    return dp[0]
}

console.log(dpWays(1325223145623))
console.log(convertWays(1325223145623))