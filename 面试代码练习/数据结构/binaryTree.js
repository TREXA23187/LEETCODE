class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
        this.size = 0
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    addNode(v) {
        this.root = this._addChild(this.root, v)
    }

    // 添加节点时，需要比较添加的节点值和当前
    // 节点值的大小
    _addChild(node, v) {
        if (!node) {
            return new Node(v)
        }

        if (node.value > v) {
            node.right = this._addChild(node.right, v)
        }
        if (node.value < v) {
            node.left = this._addChild(node.left, v)
        }
        return node;
    }

    // 先序遍历可用于打印树的结构
// 先序遍历先访问根节点，然后访问左节点，最后访问右节点。
    preTraversal() {
        this._pre(this.root)
    }

    _pre(node) {
        if (node) {
            console.log(node.value)
            this._pre(node.left)
            this._pre(node.right)
        }
    }

// 中序遍历可用于排序
// 对于 BST 来说，中序遍历可以实现一次遍历就
// 得到有序的值
// 中序遍历表示先访问左节点，然后访问根节点，最后访问右节点。
    midTraversal() {
        this._mid(this.root)
    }

    _mid(node) {
        if (node) {
            this._mid(node.left)
            console.log(node.value)
            this._mid(node.right)
        }
    }

// 后序遍历可用于先操作子节点
// 再操作父节点的场景
// 后序遍历表示先访问左节点，然后访问右节点，最后访问根节点。
    backTraversal() {
        this._back(this.root)
    }

    _back(node) {
        if (node) {
            this._back(node.left)
            this._back(node.right)
            console.log(node.value)
        }
    }
}



