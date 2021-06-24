//从左往右的尝试模型

function getMaxValue(w, v, bag) {
    let p1 = process1(w, v, 0, 0, bag)
    let p2 = process2(w, v, 0, bag)
    return p1 === p2
}

function process1(w, v, index, alreadyW, bag) {
    if (alreadyW > bag) {
        return -1
    }

    if (index === w.length) {
        return 0
    }
    let p1 = process1(w, v, index + 1, alreadyW, bag)
    let p2next = process1(w, v, index + 1, alreadyW + w[index], bag)
    let p2 = -1
    if (p2next !== -1) {
        p2 = v[index] + p2next
    }
    return Math.max(p1, p2)
}

function process2(w, v, index, rest) {
    if (rest <= 0) {
        return -1
    }
    if (index === w.length) {
        return 0
    }
    let p1 = process2(w, v, index + 1, rest)
    let p2 = -1
    let p2Next = process2(w, v, index + 1, rest - w[index])
    if (p2Next !== -1) {
        p2 = v[index] + p2Next
    }
    return Math.max(p1, p2)
}

function dpWay(w, v, bag) {
    let N = w.length
    const dp = new Array(N + 1)
    //dp[N][...] = 0
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(bag + 1).fill(0)
    }

    for (let index = N - 1; index >= 0; index--) {
        for (let rest = 0; rest <= bag; rest++) {
            let p1 = dp[index + 1][rest]
            let p2 = -1
            if (rest - w[index] >= 0) {
                p2 = v[index] + dp[index + 1][rest - w[index]]
            }
            dp[index][rest] = Math.max(p1, p2)
        }
    }
    return dp[0][bag]
}


const weights = [3, 2, 4, 7]
const values = [5, 6, 3, 19]
const bag = 11
console.log(getMaxValue(weights, values, bag))
console.log(dpWay(weights, values, bag))