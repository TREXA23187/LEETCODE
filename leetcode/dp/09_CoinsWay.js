//暴力递归->记忆化搜索->（精细粒度）经典dp->优化
/*
* 暴力递归到动态规划的套路
*
* 已经有了一个不违反原则的暴力递归，而且的确存在解的重复调用
* 找到哪些参数的变化会影响返回值，对每一个列出变化范围
* 参数间的所有的组合数量，意味着表大小
* 记忆化搜索的方法就是傻缓存，非常容易得到
* 规定好严格表的大小，分析位置的依赖顺序，然后从基础填写到最终解
* 对于有枚举行为的决策过程，进一步优化:（1）空间压缩（2）状态化简（3）四边形不等式
* */

//arr中都是正数且无重复值，返回组成aim的方法数

function ways(arr, aim) {
    if (arr.length === 0 || aim < 0) {
        return 0
    }

    return process(arr, 0, aim)
}

//可以自由使用arr[index...]所有的面值，每一种面值都可以使用任意张
//组成rest，有多少种方法
function process(arr, index, rest) {
//     if (rest < 0) {
//         return 0
//     }
    if (index === arr.length) {
        return rest === 0 ? 1 : 0
    }
    let ways = 0
    for (let num = 0; num * arr[index] <= rest; num++) {
        ways += process(arr, index + 1, rest - (num * arr[index]))
    }
    return ways
}

//记忆化搜索

function dpWay(arr, aim) {
    if (arr.length === 0 || aim < 0) {
        return 0
    }
    const N = arr.length
    const dp = new Array(N + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(aim + 1).fill(0)
    }

    dp[N][0] = 1 //dp[N][1...aim] = 0
    for (let index = N - 1; index >= 0; index--) {
        for (let rest = 0; rest <= aim; rest++) {
            // let ways = 0
            // for (let num = 0; num * arr[index] <= rest; num++) {
            //     ways += dp[index + 1][rest - (num * arr[index])]
            // }
            // dp[index][rest] = ways
            //优化
            dp[index][rest] = dp[index + 1][rest]
            if (rest - arr[index] >= 0) {
                dp[index][rest] += dp[index][rest - arr[index]]
            }
        }
    }
    return dp[0][aim]
    // return dp
}

const arr = [5, 10, 50, 100]
const sum = 1000
console.log(ways(arr, sum))
console.log(dpWay(arr, sum))