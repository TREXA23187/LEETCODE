const {listPartition} = require('./02_SmallerEqualBigger')
const {getIntersectNode} = require('./03_FindFirstIntersectNode')

class Node {
    constructor(value,next) {
        this.value = value
        this.next = next || null
    }
}

class LinkList {
    constructor() {
        this.dummyhead = new Node(null)
        this.size = 0
    }

    push(n) {
        let cur = this.dummyhead
        while (cur.next) {
            cur = cur.next
        }
        cur.next = n
        this.size++
    }

    show() {
        if (this.size === 0) {
            return null
        }

        let cur = this.dummyhead
        while (cur.next) {
            console.log(cur.next.value)
            cur = cur.next
        }
    }

    remove(value) {
        if (this.size === 0) {
            return null
        }
        let cur = this.dummyhead
        while (cur.next) {
            if (cur.next.value === value) {
                if (this.isLast(cur.next)) {
                    cur.next = null
                    this.size--
                    break
                }
                let next = cur.next
                cur.next = next.next
                this.size--
            }
            cur = cur.next
        }
    }

    isLast(node) {
        if (node.next === null) {
            return true
        }
        return false
    }

    reverse() {
        let pre = null
        let cur = this.dummyhead
        let next = cur.next
        while (next) {
            cur.next = pre
            pre = cur
            cur = next
            next = next.next
        }
        cur.next = pre
        this.dummyhead = cur
        console.log(this.dummyhead);
        
    }
}

const arr = [2, 1, 3, 5, 6, 4, 1, 3, 7, 2, 3]
const linklist = new LinkList()
for (let i of arr) {
    linklist.push(new Node(i))
}

// linklist.show()
linklist.reverse()
linklist.show()

// let cur = listPartition(linklist.dummyhead,3)
// while(cur.next){
//     cur = cur.next
//     console.log(cur.value);
// }

// const linklist1 = new LinkList()
// const node1 = new Node(3)
// const node2 = new Node(6)
// const linklist2 = new LinkList()
// linklist1.push(new Node(1))
// linklist1.push(new Node(2))
// linklist1.push(node1)
// linklist1.push(new Node(4))
// linklist1.push(new Node(5))
// linklist1.push(node2)
// linklist1.push(new Node(7))
// linklist1.push(new Node(8,node2))

// linklist2.push(new Node(1))
// linklist2.push(new Node(2))
// linklist2.push(node2)

// const res = getIntersectNode(linklist1.dummyhead,linklist2.dummyhead)
// console.log(res);