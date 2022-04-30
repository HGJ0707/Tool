/**
 * 92. 反转链表 II
 * @param {*} head 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
var reverseBetween = function(head, left, right) {
    let dummyNode = new ListNode(-1, head);
    let pre = dummyNode;
    for(let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }
    let cur = pre.next;
    for(let j = 0; j < right - left; j++) {
        let temp = cur.next;
        cur.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }
    return dummyNode.next;
}


