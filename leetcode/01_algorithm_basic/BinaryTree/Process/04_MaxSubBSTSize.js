/**
 * 给定一棵二叉树的头节点head，
 * 返回这棵二叉树中最大的二叉搜索子树的头节点
 */

function maxSubBSTSize(head) {
    if (head === null) {
        return 0
    }
    return process(head).maxSubBSTSize
}

class Info {
    constructor(is, size, min, max) {
        this.isAllBST = is
        this.maxSubBSTSize = size
        this.min = min
        this.max = max
    }
}

function process(head) {
    if (head === null) {
        return null
    }
    let leftInfo = process(head.left)
    let rightInfo = process(head.right)

    let min = head.value
    let max = head.value
    if (leftInfo !== null) {
        min = Math.min(min, leftInfo.min)
        max = Math.max(max, leftInfo.max)
    }
    if (rightInfo !== null) {
        min = Math.min(min, rightInfo.min)
        max = Math.max(max, rightInfo.max)
    }

    let maxSubBSTSize = 0
    if (leftInfo !== null) {
        maxSubBSTSize = leftInfo.maxSubBSTSize
    }
    if (rightInfo !== null) {
        maxSubBSTSize = Math.max(maxSubBSTSize, rightInfo.maxSubBSTSize)
    }

    let isAllBST = false
    if (
        (leftInfo === null ? true : leftInfo.isAllBST)
        &&
        (rightInfo === null ? true : rightInfo.isAllBST)
        &&
        (leftInfo === null ? true : leftInfo.max < head.value)
        &&
        (rightInfo === null ? true : rightInfo.min > head.value)
    ) {
        maxSubBSTSize = (leftInfo === null ? 0 : leftInfo.maxSubBSTSize) + (rightInfo === null ? 0 : rightInfo.maxSubBSTSize) + 1
        isAllBST = true
    }

    return new Info(isAllBST, maxSubBSTSize, min, max)
}