function rotate(matrix){
    let a = 0
    let b = 0
    let c = matrix.length - 1
    let d = matrix[0].length - 1
    while(a < c){
        rotateEdge(matrix,a++,b++,c--,d--)
    }
}

function rotateEdge(m,a,b,c,d){
    let tmp = 0
    for(let i = 0;i<d-b;i++){
        tmp = m[a][b+i]
        m[a][b+i] = m[c-i][b]
        m[c-i][b] = m[c][d-i]
        m[c][d-i] = m[a+i][d]
        m[a+i][d] = tmp
    }
}

function printMatrix(matrix){
    for(let i = 0;i!==matrix.length;i++){
        for(let j = 0;j!==matrix[0].length;j++){
            console.log(matrix[i][j]+' ');
        }
    }
}

const matrix = [[1,2,3,4],[6,7,8,9],[11,12,13,14],[1,2,3,4]]
rotate(matrix)
printMatrix(matrix)