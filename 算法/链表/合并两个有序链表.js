/**
 * 21. 合并两个有序链表
 * @param {*} l1 
 * @param {*} l2 
 * @returns 
 */
var mergeTwoLists = function (l1, l2) {
    //递归
    // if (l1 === null) {
    //     return l2;
    // }
    // if (l2 === null) {
    //     return l1;
    // }
    // if (l1.val < l2.val) {
    //     l1.next = mergeTwoLists(l1.next, l2);
    //     return l1;
    // } else {
    //     l2.next = mergeTwoLists(l1, l2.next);
    //     return l2;
    // }


    //迭代
    const dummy = new ListNode(-1);
    let p = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    p.next = l1 === null ? l2 : l1;
    return dummy.next;
}