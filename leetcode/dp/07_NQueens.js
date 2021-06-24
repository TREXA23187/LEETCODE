function num1(n) {
    if (n < 1) {
        return 0
    }
    const record = new Array(n)
    return process1(0, record, n)
}

function process1(i, record, n) {
    if (i === n) {
        return 1
    }
    let res = 0
    for (let j = 0; j < n; j++) {
        if (isValid(record, i, j)) {
            record[i] = j
            res += process1(i + 1, record, n)
        }
    }
    return res
}

function isValid(record, i, j) {
    for (let k = 0; k < i; k++) {
        if (j === record[k] || Math.abs(record[k] - j) === Math.abs(i - k)) {
            return false
        }
    }
    return true
}


//不要超过32皇后问题
function num2(n) {
    if (n < 1 || n > 32) {
        return 0
    }
    let limit = n === 32 ? -1 : (1 << n) - 1
    return process2(limit, 0, 0, 0)
}

// limit 规定了问题的规模 -> 固定
// colLim 列的限制，1的位置不能放皇后，0de位置可以
// leftDiaLim 左斜线的限制，1的位置不能放皇后，0的位置可以
// rightDiaLim 右斜线的限制，1的位置不能放皇后，0的位置可以
function process2(limit, colLim, leftDiaLim, rightDiaLim) {
    if (colLim === limit) { // base case
        return 1
    }
    // 所有可以放皇后的位置，都在pos上
    let pos = limit & (~(colLim | leftDiaLim | rightDiaLim))
    let mostRightOne = 0
    let res = 0
    while (pos !== 0) {
        mostRightOne = pos & (~pos + 1) // 取最右边的1 a & (~a + 1)
        pos = pos - mostRightOne
        res += process2(limit,
            colLim | mostRightOne,
            (leftDiaLim | mostRightOne) << 1,
            (rightDiaLim | mostRightOne) >> 1
        )
    }
    return res
}