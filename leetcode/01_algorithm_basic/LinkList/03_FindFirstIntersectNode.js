/**
 * 给定两个可能有环也可能无环的单链表，头节点head1和head2。
 * 请实现一个函数，如果两个链表相交，请返回相交的第一个节点。如果不相交，返回null
 * 要求：
 * 如果两个链表长度之和为N，时间复杂度O(N),额外空间复杂度O(1)
 */
function getIntersectNode(head1, head2) {
    if (head1 === null || head2 === null) {
        return null
    }
    const loop1 = getLoopNode(head1)
    const loop2 = getLoopNode(head2)
    if (loop1 === null && loop2 === null) {
        return noLoop(head1, head2)
    }
    if (loop1 !== null && loop2 !== null) {
        return bothLoop(head1, loop1, head2, loop2)
    }
    return null
}


function getLoopNode(head) {
    if (head === null || head.next === null | head.next.next === null) {
        return null
    }

    let n1 = head.next // slow
    let n2 = head.next.next // fast

    while (n1 !== n2) {
        if (n2.next === null || n2.next.next === null) {
            return null
        }
        n2 = n2.next.next
        n1 = n1.next
    }
    n2 = head // n2 -> walk again from head
    while (n1 !== n2) {
        n1 = n1.next
        n2 = n2.next
    }
    return n1
}

// 如果两个链表都无环，返回第一个相交的点，如果不相交，返回null
function noLoop(head1, head2) {
    if (head1 === null || head2 === null) {
        return null
    }
    let cur1 = head1
    let cur2 = head2
    let n = 0
    while (cur1.next !== null) {
        n++
        cur1 = cur1.next
    }
    while (cur2.next !== null) {
        n--
        cur2 = cur2.next
    }
    if (cur1 !== cur2) {
        return null
    }
    // n:链表1长度减去链表2长度的值
    cur1 = n > 0 ? head1 : head2  // 长链表的头变成cur1
    cur2 = cur1 === head1 ? head2 : head1 //短链表的头变成cur2
    n = Math.abs(n)
    while (n !== 0) {
        n--
        cur1 = cur1.next
    }
    while (cur1 != cur2) {
        cur1 = cur1.next
        cur2 = cur2.next
    }
    return cur1
}

// 不存在一个链表有环，一个链表无环，且有公共点的情况

// 两个有环链表，返回第一个相交节点，不相交返回null
function bothLoop(head1, loop1, head2, loop2) {
    let cur1 = null
    let cur2 = null
    if (loop1 === loop2) {
        cur1 = head1
        cur2 = head2
        let n = 0
        while (cur1 !== loop1) {
            n++
            cur1 = cur1.next
        }
        while (cur2 !== loop2) {
            n--
            cur2 = cur2.next
        }
        cur1 = n > 0 ? head1 : head2
        cur2 = cur1 === head1 ? head2 : head1
        n = Math.abs(n)
        while (n !== 0) {
            n--
            cur1 = cur1.next
        }
        while (cur1 !== cur2) {
            cur1 = cur1.next
            cur2 = cur2.next
        }
        return cur1
    } else {
        cur1 = loop1.next
        while (cur1 !== loop1) {
            if (cur1 === loop2) {
                return loop1
            }
            cur1 = cur1.next
        }
        return null
    }
}