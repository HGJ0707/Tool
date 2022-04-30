/**
 * 141. 环形链表
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    //快慢指针法
    // let slow = head;
    // let fast = head;
    // while(fast && fast.next) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if(fast === slow) {
    //         return true;
    //     }
    // }
    // return false;


    //方法2
    const map = new Map();
    while(head && head.next) {
        if(map.has(head)) {
            return true;
        }
        map.set(head, true);
        head = head.next;
    }
    return false;
}