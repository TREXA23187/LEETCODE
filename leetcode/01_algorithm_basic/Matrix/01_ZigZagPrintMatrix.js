/**
 * 矩阵处理技巧
 * 
 * 1.zigzag打印矩阵
 * 2.转圈打印矩阵
 * 3.原地旋转正方形矩阵
 * 
 * 核心技巧：找到coding上的宏观调度
 */

function printMatrixZigZag(matrix){
    let Ar = 0
    let Ac = 0
    let Br = 0
    let Bc = 0
    let Endr = matrix.length - 1
    let Endc = matrix[0].length - 1
    let fromUp = false // 是不是从右上往左下打印
    while(Ar !== Endr + 1){
        printLevel(matrix,Ar,Ac,Br,Bc,fromUp)
        Ar = Ac === Endc? Ar + 1 : Ar
        Ac = Ac === Endc? Ac: Ac + 1
        Bc = Br === Endr? Bc + 1 : Bc
        Br = Br === Endr? Br: Br + 1
        fromUp = !fromUp
    }
}

function printLevel(m,Ar,Ac,Br,Bc,f){
    if(f){
        while(Ar !== Br + 1){
            console.log(m[Ar++][Ac--], ' ')
        }
    }else{
        while(Br !== Ar - 1){
            console.log(m[Br--][Bc++], ' ')
        }
    }
}

const matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
printMatrixZigZag(matrix)
