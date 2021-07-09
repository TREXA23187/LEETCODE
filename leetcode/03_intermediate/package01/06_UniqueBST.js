/**
 * 给定一个非负整数n，代表二叉树的节点个数。
 * 返回能形成多少种不同的二叉树结构。
 */

function numTrees(n) {
    if (n < 2) {
        return 1
    }
    const num = new Array(n + 1).fill(0)
    num[0] = 1
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < i + 1; j++) {
            num[i] += num[j - 1] * num[i - j]
        }
    }
    return num[n]
}

console.log(numTrees(5))