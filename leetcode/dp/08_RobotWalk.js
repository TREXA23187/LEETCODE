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

console.log(ways1(7, 2, 5, 3))