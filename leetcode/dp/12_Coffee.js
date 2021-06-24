//寻找业务限制的尝试模型

/*
* 给定一个数组，代表每个人喝完咖啡准备刷杯子的时间
* 只有一台咖啡机，一次只能洗一个杯子，时间耗费a，洗完才能洗下一个杯子
* 每个咖啡杯也可以自己挥发干净，时间耗费b，咖啡杯可以并行挥发
* 返回让所有咖啡杯变干净的最早完成时间
*/

// a 洗一杯的时间 固定变量
// b 挥发干净的时间 固定变量
// drinks 每个员工喝完的时间 固定变量
// drinks[0...index-1]都已经干净了
// drinks[index...]都需要变干净，washLine为咖啡机可用时间
function process(drinks, a, b, index, washLine) {
    if (index === drinks.length - 1) {
        return Math.min(Math.max(washLine, drinks[index]) + a, drinks[index] + b)
    }
    //wash为当前咖啡杯洗完的时间
    let wash = Math.max(washLine, drinks[index]) + a
    //index+1...变干净的最早时间
    let next1 = process(drinks, a, b, index + 1, wash)
    let p1 = Math.max(wash, next1)

    let dry = drinks[index] + b //挥发index一杯结束的时间点
    let next2 = process(drinks, a, b, index + 1, washLine)
    let p2 = Math.max(dry, next2)

    return Math.min(p1, p2)
}

function dpWay(drinks, a, b) {
    const N = drinks.length
    if (a >= b) {
        return drinks[N - 1] + b
    }

    let limit = 0 //咖啡机可用时间
    for (let i = 0; i < N; i++) {
        limit = Math.max(limit, drinks[i]) + a
    }

    const dp = new Array(N)
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(limit + 1)
    }

    for (let washLine = 0; washLine <= limit; washLine++) {
        dp[N - 1][washLine] = Math.min(Math.max(washLine, drinks[N - 1]) + a, drinks[N - 1] + b)
    }
    for (let index = N - 2; index >= 0; index--) {
        for (let washLine = 0; washLine <= limit; washLine++) {
            let p1 = Infinity
            let wash = Math.max(washLine, drinks[index]) + a
            if (wash <= limit) {
                p1 = Math.max(wash, dp[index + 1][wash])
            }
            let p2 = Math.max(drinks[index] + b, dp[index + 1][washLine])

            dp[index][washLine] = Math.min(p1, p2)
        }
    }

    return dp[0][0]
}

const arr = [1, 1, 5, 5, 7, 10, 12, 12, 12, 12, 12, 12, 15]
const a = 3
const b = 10

console.log(process(arr, a, b, 0, 0))
console.log(dpWay(arr, a, b))
