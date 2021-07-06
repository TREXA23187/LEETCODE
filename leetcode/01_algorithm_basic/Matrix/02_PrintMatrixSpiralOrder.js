function spiralOrderPrint(matrix) {
    let tR = 0
    let tC = 0
    let dR = matrix.length - 1
    let dC = matrix[0].length - 1
    while (tR <= dR && tC <= dC) {
        printEdge(matrix, tR++, tC++, dR--, dC--)
    }
}

function printEdge(m, a, b, c, d) {
    if (a === c) {
        for (let i = b; i <= d; i++) {
            console.log(m[a][i], ' ');
        }
    } else if (b === d) {
        for (let i = a; i <= c; i++) {
            console.log(m[i][b], ' ');
        }
    } else {
        let curC = b
        let curR = a
        while (curC !== d) {
            console.log(m[a][curC++], ' ');
        }
        while (curR !== c) {
            console.log(m[curR++][d], ' ');
        }
        while (curC !== b) {
            console.log(m[c][curC--], ' ');
        }
        while (curR !== a) {
            console.log(m[curR--][b], ' ');
        }
    }
}

const matrix = [[1,2,3,4],[6,7,8,9],[11,12,13,14],[1,2,3,4]]
spiralOrderPrint(matrix)