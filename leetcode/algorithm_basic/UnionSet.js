class Node {
    constructor(v) {
        this.value = v
    }
}

class UnionSet {
    constructor(values) {
        this.nodes = new Map() // value -> node
        this.parents = new Map()
        this.sizeMap = new Map() // 作为代表点才有记录

        for (let val of values) {
            let node = new Node(val)
            this.nodes.set(val, node)
            this.parents.set(node, node)
            this.sizeMap.set(node, 1)
        }
    }

    //从cur开始，一直往上找到代表点
    findFather(cur) {
        const path = []
        while (cur !== this.parents.get(cur)) {
            path.push(cur)
            cur = this.parents.get(cur)
        }
        //扁平化
        while (path.length !== 0) {
            this.parents.set(path.pop(), cur)
        }
        return cur
    }

    isSameSet(a, b) {
        if (!this.nodes.has(a) || !this.nodes.has(b)) {
            return false
        }
        return this.findFather(this.nodes.get(a)) === this.findFather(this.nodes.get(b))
    }

    union(a, b) {
        if (!this.nodes.has(a) || !this.nodes.has(b)) {
            return
        }

        let aHead = this.findFather(this.nodes.get(a))
        let bHead = this.findFather(this.nodes.get(b))

        if (aHead !== bHead) {
            let aSetSize = this.sizeMap.get(aHead)
            let bSetSize = this.sizeMap.get(bHead)

            let big = aSetSize >= bSetSize ? aHead : bHead
            let small = big === aHead ? bHead : aHead
            this.parents.set(small, big)
            this.sizeMap.set(big, aSetSize + bSetSize)
            this.sizeMap.delete(small)
        }
    }
}

const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const us = new UnionSet(list)

// console.log(us.findFather(us.nodes.get('a')))
us.union('a', 'b')
us.union('a','c')
console.log(us.findFather(us.nodes.get('a')))
console.log(us.sizeMap.get(us.nodes.get('a')))
console.log(us.isSameSet('a', 'b'))