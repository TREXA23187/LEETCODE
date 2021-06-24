//多样本位置全对应的尝试模型

//两个字符串的最长公共子序列问题

//最大公共子序列，既不以str1[i]结尾，也不以str2[j]结尾 -> dp[i-1][j-1]
//最大公共子序列，以str1[i]结尾，不以str2[j]结尾 -> dp[i][j-1]
//最大公共子序列，不以str1[i]结尾，以str2[j]结尾 -> dp[i-1][j]
//最大公共子序列，既以str1[i]结尾，也以str2[j]结尾 -> str1[i] === str2[j] -> dp[i-1][j-1] + 1

function lcse(str1, str2) {
    const dp = new Array(str1.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(str2.length)
    }

    dp[0][0] = str1[0] === str2[0] ? 1 : 0
    for (let i = 1; i < str1.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], str1[i] === str2[0] ? 1 : 0)
    }
    for (let i = 1; i < str2.length; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], str1[0] === str2[i] ? 1 : 0)
    }

    for (let i = 1; i < str1.length; i++) {
        for (let j = 1; j < str2.length; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            if (str1[i] === str2[j]) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
            }//dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1]
        }
    }
    return dp[str1.length - 1][str2.length - 1]
}

const str1 = 'aa123bb'
const str2 = 'a123eb'
console.log(lcse(str1,str2))