/*
* 假设有排成一行的N个位置，记为1～N，N一定大于或等于2
* 开始时机器人在其中的M位置上
* 如果机器人来到1位置，那么下一步只能往右来到2位置
* 如果机器人来到N位置，那么下一步只能往左来到N-1位置
* 如果机器人来到中间位置，那么下一步可以往右或者往左走
* 规定机器人必须走K步，最终能来到P位置的方法有多少种
* 给定四个参数N、M、K、P，返回方法数
* */

//动态规划：记忆化搜索
//dp[][] 可变参数个数->维度

function ways1(N, M, K, P) {
    if (N < 2 || K < 1 || M < 1 || M > N || P < 1 || P > N) {
        return 0
    }
    return walk(N, M, K, P)
}

function walk(N, cur, rest, P) {
    if (rest === 0) {
        return cur === P ? 1 : 0
    }
    if (cur === 1) {
        return walk(N, 2, rest - 1, P)
    }
    if (cur === N) {
        return walk(N, N - 1, rest - 1, P)
    }
    return walk(N, cur + 1, rest - 1, P) + walk(N, cur - 1, rest - 1, P)
}

function dpWay(N, M, K, P) {
    const dp = new Array(N + 1)
    for (let i = 0; i <= N; i++) {
        dp[i] = new Array(K).fill(0)
    }

    for (let i = 1; i <= N;i++) {
        dp[i][0] = (i === P ? 1 : 0)
    }
    for (let i = 1; i < K; i++) {
        dp[1][i] = dp[2][i - 1]
    }
    for (let i = 1; i < K; i++) {
        dp[N][i] = dp[N - 1][i - 1]
    }

    for(let i = 2;i<N;i++){
        for(let j = 1;j<K;j++){
            dp[i][j] = dp[i+1][j-1] + dp[i-1][j-1]
        }
    }
    console.log(dp);
    return dp[M][K-1]
}

console.log(ways1(7, 2, 5, 3))
console.log(dpWay(7, 2, 5, 3));