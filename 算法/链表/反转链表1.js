/**
 * 206. 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function (head) {
    let p1 = head;
    let p2 = null;
    while (p1) {
        let temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
};