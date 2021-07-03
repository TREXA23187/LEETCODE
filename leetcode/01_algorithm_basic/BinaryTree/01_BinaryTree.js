class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function preOrder(head){
    if(head === null){
        return
    }
    log(head.value)
    preOrder(head.left)
    preOrder(right)
}

function inOrder(head){
    if(head === null){
        return
    }
    inOrder(head.left)
    log(head.value)
    inOrder(right)
}

function posOrder(head){
    if(head === null){
        return
    }
    posOrder(head.left)
    posOrder(right)
    log(head.value)
}

// 二叉树按层遍历
function level(head){
    if(head === null){
        return
    }
    const queue = []
    queue.push(head)
    while(queue.length !== 0){
        let cur = queue.shift()
        console.log(cur.value);
        if(cur.left !== null){
            queue.push(cur.left)
        }
        if(cur.right !== null){
            queue.push(cur.right)
        }
    }
}