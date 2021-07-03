function swap(arr, left, right) {
    const tmp = arr[left]
    arr[left] = arr[right]
    arr[right] = tmp
}

function bubble(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            swap(arr, j, j + 1)
        }
    }
    return arr
}

function selection(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex
        }
        swap(arr, i, minIndex)
    }
    return arr
}

function merge(arr) {
    mergeSort(arr, 0, arr.length - 1)
    return arr
}

function mergeSort(arr, left, right) {
    if (left === right) {
        return arr
    }
    let mid = left + ((right - left) >> 1)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)

    const help = []
    let p1 = left, p2 = mid + 1, i = 0
    while (p1 <= mid && p2 <= right) {
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
    }
    while (p1 <= mid) {
        help[i++] = arr[p1++]
    }
    while (p2 <= right) {
        help[i++] = arr[p2++]
    }
    for (let i = 0; i < help.length; i++) {
        arr[left + i] = help[i]
    }
    return arr
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = arr.length >> 1
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

(function test() {
    const arr = [3, 2, 4, 1, 5, 7, 6, 8]
    console.log('bubble', bubble(arr));
    console.log('insertion', insertion(arr));
    console.log('selection', selection(arr));
    console.log('merge', mergeSort(arr));
    console.log('quicksort', quickSort(arr));
})()