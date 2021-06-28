class Node {
    constructor(v, next) {
        this.value = v;
        this.next = next;
    }
}

class LinkList {
    constructor() {
        this.size = 0;
        this.dummyHead = new Node(null, null)
    }

    find(header=this.dummyHead, index, currentIndex) {
        if (index === currentIndex) {
            return header;
        }
        return this.find(header.next, index, currentIndex + 1);
    }

    addNode(v, index) {
        this.checkIndex(index);
        let prev = this.find(this.dummyHead, index, 0);
        prev.next = new Node(v, prev.next)
        this.size++;
        return prev.next
    }

    insertNode(v, index) {

    }

    addToFirst(v) {

    }

    addToLast(v) {

    }

    removeNode(index, isLast) {
        this.checkIndex(index);
        index = isLast ? index - 1 : index;
        let prev = this.find(this.dummyHead, index, 0);
        let node = prev.next;
        prev.next = node.next;
        node.next = null;
        this.size--;
        return node
    }

    removeFirstNode() {

    }

    removeLastNode() {

    }

    checkIndex(index) {
        if (index < 0 || index > this.getSize()) {
            throw new Error('error')
        }
    }

    getNode(index) {

    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
}
