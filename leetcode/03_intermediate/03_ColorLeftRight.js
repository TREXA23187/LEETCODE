/**
 * 牛牛有一些排成一行的正方形。每个正方形已经被染成红色或者绿色。
 * 牛牛现在可以选择任意一个正方形然后用这两种颜色的任意一种进行染色，
 * 这个正方形的颜色将会被覆盖。
 * 牛牛的目标是在完成染色之后，每个红色R都比每个绿色G距离最左侧近。
 * 牛牛想知道他最少需要染几个正方形。
 * 例如：s = RGRGR
 * 我们涂染之后变成RRRGG满足要求了，涂染的个数为2，没有比这个更好的方案了
 */

//预处理数组

function minPaint(s) {
    if (s === null || s.length < 2) {
        return 0
    }

    const right = new Array(s.length).fill(0)
    right[s.length - 1] = s[s.length - 1] === 'R' ? 1 : 0
    for (let i = s.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] + (s[i] === 'R' ? 1 : 0)
    }
    let res = right[0]
    let left = 0
    for (let i = 0; i < s.length - 1; i++) {
        left += s[i] === 'G' ? 1 : 0
        res = Math.min(res, left + right[i + 1])
    }
    res = Math.min(res, left + (s[s.length - 1] === 'G' ? 1 : 0))
    return res
}


console.log(minPaint('RGRGRGGR'));