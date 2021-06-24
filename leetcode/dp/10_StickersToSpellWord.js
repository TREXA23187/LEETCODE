/*
* 给定一个字符串str，给定一个字符串类型的数组arr。
* arr里的每一个字符串，代表一张贴纸，你可以把单个字符剪开使用，目的是拼出str来。
* 返回需要至少多少张贴纸可以完成这个任务。
*
* 例子：str="babac", arr = ["ba","c","abcd"]
* 至少需要两张贴纸"ba"和"abcd"，因为用这两张贴纸，把每一个字符单独剪开，含有2个a、2个b、1个c。是可以拼出str的，所以返回2。
* */

function minStickers(stickers, target) {
    const n = stickers.length
    const map = new Array(n)
    for (let i = 0; i < n; i++) {
        map[i] = new Array(26).fill(0)
    }

    const dp = new Map()
    for (let i = 0; i < n; i++) {
        for (let c = 0; c < stickers[i].length; c++) {
            map[i][stickers[i].charCodeAt(c) - 97]++
        }
    }
    dp.set("", 0)
    return process1(dp, map, target)
}

//dp缓存，如果t已经算过了，直接返回dp的值
//rest 剩余的目标
//0..N每一个字符串所含字符的词频统计
//返回-1，无法解决
function process1(dp, map, rest) {
    if (dp.has(rest)) {
        return dp.get(rest)
    }
    //正式递归过程
    let ans = Infinity //完成rest使用的最少的贴纸数量
    const n = map.length //N种贴纸
    const tmap = new Array(26).fill(0)
    for (let c = 0; c < rest.length; c++) {
        tmap[rest.charCodeAt(c) - 97]++
    }
    //map -> tmap
    for (let i = 0; i < n; i++) {
        if(map[i][String.fromCharCode(rest[0]-97)] === 0){
            continue
        }
        let s = ""
        for (let j = 0; j < 26; j++) {
            if (tmap[j] > 0) {
                for (let k = 0; k < Math.max(0, tmap[j] - map[i][j]); k++) {
                    s += String.fromCharCode(97 + j)
                }
            }
        }
        let tmp = process1(dp, map, s)
        if (tmp !== -1) {
            ans = Math.min(ans, 1 + tmp)
        }
    }
    dp.set(rest, ans === Infinity ? -1 : ans)
    return dp.get(rest)
}

const arr = ["aaaa","bbaa","ccddd"]
const str = "abcccccdddddbbbaaaaa"
console.log(minStickers(arr,str))



