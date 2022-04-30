/**
 * 19. 删除链表的倒数第 N 个结点
 * @param {*} head 
 * @param {*} n 
 * @returns 
 */
var removeNthFromEnd = function (head, n) {
    let dummyNode = new ListNode(-1, head);
    let slow = dummyNode;
    let fast = dummyNode;
    while (n) {
        fast = fast.next;
        n--;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummyNode.next;
}