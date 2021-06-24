class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkList{
    constructor() {
        this.dummyhead = new Node(null)
        this.size = 0
    }

    push(n){
        let cur = this.dummyhead
        while(cur.next){
            cur = cur.next
        }
        cur.next = n
        this.size++
    }

    show(){
        if(this.size === 0){
            return null
        }

        let cur = this.dummyhead
        while(cur.next){
           console.log(cur.next.value)
           cur = cur.next
        }
    }

    remove(value){
        if(this.size === 0){
            return null
        }
        let cur = this.dummyhead
        while(cur.next){
            if(cur.next.value === value){
                if(this.isLast(cur.next)){
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

    isLast(node){
        if(node.next === null){
            return true
        }
        return false
    }
}

const arr = [0,1,2,3,4,5]
const linklist = new LinkList()
for(let i of arr){
    linklist.push(new Node(i))
}

// linklist.show()
linklist.remove(3)
linklist.remove(5)
linklist.show()
console.log(linklist.size)