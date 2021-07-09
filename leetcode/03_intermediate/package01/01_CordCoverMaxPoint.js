/**
 * 给定一个有序数组arr，代表数轴上从左到右有n个点arr[0],arr[1]...arr[n-1],
 * 给定一个正数L，代表一根长度为L的绳子，求绳子最多能覆盖其中的几个点。
 */

// 滑动窗口

// 长度为L的绳子最多覆盖几个点，请保证arr有序
function maxPoint(arr, L) {
    let res = 1
    for (let i = 0; i < arr.length; i++) {
        let nearest = nearestIndex(arr, i, arr[i] - L)
        res = Math.max(res, i - nearest + 1)
    }
    return res
}

// 在arr[0..R]范围上，找满足>=value的最左位置
function nearestIndex(arr, R, value) {
    let L = 0
    let index = R
    while (L < R) {
        let mid = L + ((R - L) >> 1)
        if (arr[mid] >= value) {
            index = mid
            R = mid - 1
        } else {
            L = mid + 1
        }
    }
    return index
}

const arr = [0, 13, 24, 35, 46, 57, 60, 72, 87]
const L = 6
console.log(maxPoint(arr, L))