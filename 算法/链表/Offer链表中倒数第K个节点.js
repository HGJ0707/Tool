/**
 * 剑指 Offer 22. 链表中倒数第k个节点
 * @param {*} head 
 * @param {*} k 
 * @returns 
 */
var getKthFromEnd = function(head, k) {
    let slow = head;
    let fast = head;
    while(k) {
        fast = fast.next;
        k--;
    }
    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};