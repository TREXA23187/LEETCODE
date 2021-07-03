class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function maxWidthUseMap(head) {
    if (head === null) {
        return
    }
    const queue = []
    queue.push(head)
    const levelMap = new Map()
    levelMap.set(head, 1)
    let curLevel = 1
    let curLevelNodes = 0
    let max = 0
    while (queue.length !== 0) {
        let cur = queue.shift()
        let curNodeLevel = levelMap.get(cur)
        if (cur.left !== null) {
            levelMap.set(cur.left, curNodeLevel + 1)
            queue.push(cur.left)
        }
        if (cur.right !== null) {
            levelMap.set(cur.right, curNodeLevel + 1)
            queue.push(cur.right)
        }
        if (curNodeLevel === curLevel) {
            curLevelNodes++
        } else {
            max = Math.max(max, curLevelNodes)
            curLevel++
            curLevelNodes = 1
        }
    }
    max = Math.max(max, curLevelNodes)
    return max
}

function maxWidthNoMap(head){
    if(head === null){
        return
    }
    const queue = []
    queue.push(head)
    let curEnd = head
    let nextEnd = null
    let max = 0
    let curLevelNodes = 0
    while(queue.length !== 0){
        let cur = queue.shift()
        if(cur.left !== null){
            queue.push(cur.left)
            nextEnd = cur.left
        }
        if(cur.right !== null){
            queue.push(cur.right)
            nextEnd = cur.right
        }
        curLevelNodes++
        if(cur === curEnd){
            max = Math.max(max,curLevelNodes)
            curLevelNodes = 0
            curEnd = nextEnd
        }
    }
    return max
}