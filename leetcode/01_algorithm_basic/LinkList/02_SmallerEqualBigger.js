/**
 * 将单链表按某值划分成左边小、中间相等、右边大的形式
 * （1）把链表放入数组中，在数组做partition（笔试用）
 * （2）分成小、中、大三部分，再把各个部分之间串起来（面试用）
 */

function listPartition(head, pivot) {
    let sH = null // small head
    let sT = null // small tail
    let eH = null // equal head
    let eT = null // equal tail
    let bH = null // big head
    let bT = null // big tail

    while (head !== null) {
        let next = head.next
        head.next = null
        if (head.value < pivot) {
            if (sH === null) {
                sH = head
                sT = head
            } else {
                sT.next = head
                sT = head
            }
        } else if (head.value === pivot) {
            if (eH === null) {
                eH = head
                eT = head
            } else {
                eT.next = head
                eT = head
            }
        } else {
            if (bH === null) {
                bH = head
                bT = head
            } else {
                bT.next = head
                bT = head
            }
        }
        head = next
    }
    if (sT !== null) {
        sT.next = eH
        eT = eT === null ? sT : eT
    }
    if (eT !== null) {
        eT.next = bH
    }
    return sH !== null ? sH : (eH !== null ? eH : bH)
}