/**
 * 给定一个N*N的矩阵matrix，只有0和1两种值，返回边框全是1的最大正方形的边长长度。
 * 例如：
 * 01111
 * 01001
 * 01001
 * 01111
 * 01011
 * 其中边框全是1的最大正方形的大小为4*4，返回4
 */

function getMaxSize(m) {
    const right = new Array(m.length)
    for (let i = 0; i < right.length; i++) {
        right[i] = new Array(m[0].length).fill(0)
    }
    const down = new Array(m.length)
    for (let i = 0; i < down.length; i++) {
        down[i] = new Array(m[0].length).fill(0)
    }

    setBorderMap(m, right, down);

    for (let size = Math.min(m.length, m[0].length); size !== 0; size--) {
        if (hasSizeOfBorder(size, right, down)) {
            return size
        }
    }
    return 0
}

function setBorderMap(m, right, down) {
    const r = m.length
    const c = m[0].length
    if (m[r - 1][c - 1] === 1) {
        right[r - 1][c - 1] = 1
        down[r - 1][c - 1] = 1
    }
    for (let i = r - 2; i !== -1; i--) {
        if (m[i][c - 1] === 1) {
            right[i][c - 1] = 1
            down[i][c - 1] = down[i + 1][c - 1] + 1
        }
    }
    for (let i = c - 2; i !== -1; i--) {
        if (m[r - 1][i] === 1) {
            right[r - 1][i] = right[r - 1][i + 1] + 1
            down[r - 1][i] = 1
        }
    }
    for (let i = r - 2; i !== -1; i--) {
        for (let j = c - 2; j !== -1; j--) {
            if (m[i][j] === 1) {
                right[i][j] = right[i][j + 1] + 1
                down[i][j] = down[i + 1][j] + 1
            }
        }
    }
}

function hasSizeOfBorder(size, right, down) {
    for (let i = 0; i !== right.length - size + 1; i++) {
        for (let j = 0; j !== right[0].length - size + 1; j++) {
            if (
                right[i][j] >= size
                &&
                down[i][j] >= size
                &&
                right[i + size - 1][j] >= size
                &&
                down[i][j + size - 1] >= size
            ) {
                return true
            }
        }
    }
    return false
}

function generateRandom01Matrix(rowSize, colSize) {
    const res = new Array(rowSize)
    for (let i = 0; i < res.length; i++) {
        res[i] = new Array(colSize)
    }

    for (let i = 0; i !== rowSize; i++) {
        for (let j = 0; j !== colSize; j++) {
            res[i][j] = parseInt(Math.random() * 2)
        }
    }
    return res
}

function printMatrix(matrix) {
    for (let i = 0; i !== matrix.length; i++) {
        for (let j = 0; j !== matrix[0].length; j++) {
            process.stdout.write(matrix[i][j] + ' ')
        }
        console.log('')
    }
}

let m, size = 0
for (let i = 0; i < 10000; i++) {
    let matrix = generateRandom01Matrix(7, 8);
    if (getMaxSize(matrix) > size) {
        size = getMaxSize(matrix)
        m = matrix
    }
}

printMatrix(m);
console.log(size)