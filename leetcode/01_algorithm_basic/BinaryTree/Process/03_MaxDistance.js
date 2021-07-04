/**
 * 给定一棵二叉树的头节点head，任何两个节点之间都存在距离。
 * 返回整棵二叉树的最大距离
 */

function maxDistance(head) {
    return process(head).maxDistance
}

class Info {
    constructor(dis, h) {
        this.maxDistance = dis
        this.height = h
    }
}

function process(head) {
    if (head === null) {
        return new Info(0, 0)
    }
    let leftInfo = process(head.left)
    let rightInfo = process(head.right)

    let height = Math.max(leftInfo.height, rightInfo.height) + 1
    let maxDistance = Math.max(Math.max(leftInfo.maxDistance, rightInfo.maxDistance),
        leftInfo.maxDistance + rightInfo.maxDistance + 1)
        
    return new Info(maxDistance, height)
}