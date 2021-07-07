/**
 * 给定一个数组arr，求差值为k的去重数字对。
 */

function allPair(arr, k) {
    const set = new Set()
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
    }
    const res = []
    for (let cur of set) {
        if (set.has(cur + k)) {
            res.push([cur, cur + k])
        }
    }
    return res
}

const arr = [1, 2, 2, 3, 5, 5, 4]
console.log(allPair(arr, 1));