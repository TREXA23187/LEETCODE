/*
* 字符串str1和str2，str1是否包含str2，如果包含返回str2在str1中开始的位置
* 如何做到时间复杂度O（N）完成
*/

function getIndexOf(str1, str2) {
    let i1 = 0
    let i2 = 0
    const next = getNextArray(str2) // O(M)
    // O(N)
    while (i1 < str1.length && i2 < str2.length) {
        if (str1[i1] === str2[i2]) {
            i1++
            i2++
        } else if (next[i2] === -1) { // str2中比对的位置已经无法往前跳了
            i1++
        } else {
            i2 = next[i2]
        }
    }
    //i1 越界 或者i2 越界了
    return i2 === str2.length ? i1 - i2 : -1
}

function getNextArray(ms) {
    if (ms.length === 1) {
        return [-1]
    }
    const next = new Array(ms.length)
    next[0] = -1
    next[1] = 0
    let i = 2 // next数组的位置
    let cn = 0
    while (i < next.length) {
        if (ms[i - 1] === ms[cn]) {
            next[i++] = ++cn
        } else if (cn > 0) { // 当前跳到cn位置的字符，和i-1位置的字符匹配不上
            cn = next[cn]
        } else {
            next[i++] = 0
        }
    }
    return next
}

(function () {
    const str = 'abcabcababaccc'
    console.log(getNextArray(str));
    console.log(getIndexOf(str, 'cabcab'));
})()