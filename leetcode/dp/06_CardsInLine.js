/*
* 范围上尝试的模型
*
* 给定一个整型数组arr，代表数值不同的纸牌排成一条线，
* 玩家A和玩家B依次拿走每张纸牌，
* 规定玩家A先拿，玩家B后拿，
* 但是每个玩家每次只能拿走最左或者最右的纸牌，
* 玩家A和玩家B都绝顶聪明。请返回最后获胜者的分数。
* */

function win(arr) {
    if (arr.length === 0) {
        return 0
    }
    return Math.max(f(arr, 0, arr.length - 1), s(arr, 0, arr.length - 1))
}

function f(arr, L, R) {
    if (L === R) {
        return arr[L]
    }
    return Math.max(
        arr[L] + s(arr, L + 1, R),
        arr[R] + s(arr, L, R - 1)
    )
}

function s(arr, L, R) {
    if (L === R) {
        return 0
    }
    return Math.min(
        f(arr, L + 1, R),
        f(arr, L, R - 1)
    )
}

function dpWay(arr) {
    if (arr.length === 0) {
        return 0
    }
    const N = arr.length
    const f = new Array(N)
    const s = new Array(N)
    for (let i = 0; i < f.length; i++) {
        f[i] = new Array(N).fill(0)
        s[i] = new Array(N).fill(0)
    }

    for (let i = 0; i < N; i++) {
        f[i][i] = arr[i]
        //s[i][i] = 0
    }
    for (let i = 1; i < N; i++) {
        let L = 0
        let R = i
        while (L < N && R < N) {
            f[L][R] = Math.max(arr[L] + s[L + 1][R], arr[R] + s[L][R - 1])
            s[L][R] = Math.min(f[L + 1][R], f[L][R - 1])
            L++
            R++
        }
    }

    return Math.max(f[0][N - 1], s[0][N - 1])
}

const arr = [4, 7, 9, 5, 19, 29, 80, 4]
console.log(win(arr))
console.log(dpWay(arr))