class Heap {
    constructor() {
        this.heap = []
        this.heapsize = 0
    }

    push(value) {
        this.heap[this.heapsize] = value
        this.heapInsert(this.heap, this.heapsize++)
    }

    pop() {
        const ans = this.heap[0]
        swap(this.heap, 0, --this.heapsize)
        this.heapify(this.heap, 0, this.heapsize)
        this.heap.pop()
        return ans
    }

    heapInsert(arr, index) {
        while (arr[index] > arr[parseInt((index - 1) / 2)]) {
            swap(arr, index, parseInt((index - 1) / 2))
            index = parseInt((index - 1) / 2)
        }
    }

    heapify(arr, index, heapSize) {
        let left = index * 2 + 1
        while (left < heapSize) {
            let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left
            largest = arr[index] > arr[largest] ? index : largest
            if (largest === index) {
                break
            }
            swap(arr, largest, index)
            index = largest
            left = index * 2 + 1
        }
    }

}

const swap = function (arr, left, right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    return arr
}


const myHeap = new Heap()
const arr = [6, 3, 2, 1, 4, 5]

for (let i = 0; i < arr.length; i++) {
    myHeap.push(arr[i])
}

// console.log(swap(arr, 1, 2))
console.log(myHeap.heap)
console.log(myHeap.pop())
console.log(myHeap.pop())
console.log(myHeap.pop())
console.log(myHeap.heap)
