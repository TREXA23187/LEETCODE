/*
* 一个矩阵中只有0和1两种值，每个位置都可以和自己的上下左右相连，如果有一片1连在一起，这个部分就叫做一个岛
* 求一个矩阵中有多少个岛
* 举例：
* 001010
* 111010
* 100100
* 000000
* 这个矩阵有三个岛
*
* O(N*M)
* */

function countIslands(m) {
    if (m === null || m[0] === null) {
        return 0
    }
    const N = m.length
    const M = m[0].length
    let res = 0
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (m[i][j] === 1) {
                res++
                infect(m, i, j, N, M)
            }
        }
    }
    return res
}

function infect(m, i, j, N, M) {
    if (i < 0 || i >= N || j < 0 || j >= M || m[i][j] !== 1) {
        return
    }
    m[i][j] = 2
    infect(m, i + 1, j, N, M)
    infect(m, i - 1, j, N, M)
    infect(m, i, j - 1, N, M)
    infect(m, i, j + 1, N, M)
}

const m1 = [
    [0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1],
    [0, 0, 1, 0, 0, 0]
]

console.log(countIslands(m1))