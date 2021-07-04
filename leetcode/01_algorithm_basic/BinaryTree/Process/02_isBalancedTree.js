/**
 * 给定一棵二叉树的头节点head，返回这棵二叉树是不是平衡二叉树
 */

// 左、右要求一样，Info信息返回结构体
function isBalanced(head) {
    return process(head).isBalanced
}

class Info {
    constructor(b, h) {
        this.isBalanced = b
        this.height = h
    }
}

function process(head) {
    if (head === null) {
        return new Info(true, 0)
    }
    let leftInfo = process(head.left)
    let rightInfo = process(head.right)
    let height = Math.max(leftInfo.height, rightInfo.height) + 1
    let isBalanced = true
    if (!leftInfo.isBalanced || !rightInfo.isBalanced || Math.abs(leftInfo.height - rightInfo.height) > 1) {
        isBalanced = false
    }
    return new Info(isBalanced, height)
}
