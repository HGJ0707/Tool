const merge = (h1, h2) => {
    let dummyNode = new ListNode(-1);
    let p = dummyNode;
    while (h1 && h2) {
        if (h1.val < h2.val) {
            p.next = h1;
            h1 = h1.next;
        } else {
            p.next = h2;
            h2 = h2.next;
        }
        p = p.next;
    }
    if (h1) {
        p.next = h1;
    }
    if (h2) {
        p.next = h2;
    }
    return dummyNode.next;
}

const toSortList = (head, tail) => {
    if (head === null) {
        return head;
    }
    if (head.next == tail) {
        head.next = null;
        return head;
    }
    let slow = head, fast = head;
    while (fast !== tail) {
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) {
            fast = fast.next;
        }
    }
    let mid = slow;
    return merge(toSortList(head, mid), toSortList(mid, tail));
}

/**
 * 148. 排序链表
 * @param {*} head 
 * @returns 
 */
var sortList = function (head) {
    return toSortList(head, null);
};
