class Node{
    constructor() {
        this.pass = 0
        this.end = 0
        this.nexts = new Array(26).fill(null)
    }
}

class Trie{
    constructor() {
        this.root = new Node()
    }

    insert(word){
        if(word === null){
            return
        }
        let node = this.root
        node.pass++
        let path = 0
        for(let i = 0;i<word.length;i++){
            path = word.charCodeAt(i) - 97
            if(node.nexts[path] === null){
                node.nexts[path] = new Node()
            }
            node = node.nexts[path]
            node.pass++
        }
        node.end++
    }

    search(word){
        if(word === null){
            return 0
        }
        let node = this.root
        let path = 0
        for(let i = 0;i<word.length;i++){
            path = word.charCodeAt(i) - 97
            if(node.nexts[path] === null){
                return 0
            }
            node = node.nexts[path]
        }
        return node.end
    }

    delete(word){
        if(this.search(word) !== 0){
            let node = this.root
            node.pass--
            let path = 0
            for(let i = 0;i<word.length;i++){
                path = word.charCodeAt(i) - 97
                if(--node.nexts[path].pass === 0){
                    node.nexts[path] = null
                    return
                }
                node = node.nexts[path]
            }
            node.end--
        }
    }

    prefixNumber(pre){
        if(pre === null){
            return 0
        }
        let node = this.root
        let path = 0
        for(let i = 0;i<pre.length;i++){
            path = pre.charCodeAt(i) - 97
            if(node.nexts[path] === null){
                return 0
            }
            node = node.nexts[path]
        }
        return node.pass
    }
}

const word1 = 'abcd'
const word2 = 'abce'
const word3 = 'abhg'
const word4 = 'bcd'
const word5 = 'tcdk'
const trie = new Trie()

trie.insert(word1)
trie.insert(word1)
trie.insert(word2)
trie.insert(word3)
trie.insert(word4)
trie.insert(word5)
console.log(trie.prefixNumber('abc')) //3
console.log(trie.search('abcd')) //2
trie.delete('abcd')
console.log(trie.prefixNumber('ab')) //3