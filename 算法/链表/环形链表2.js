/**
 * 142. 环形链表 II
 * @param {*} head 
 * @returns 
 */
var detectCycle = function(head) {
    let map = new Map();
    while(head != null) {
        if(map.has(head)) {
            return head;
        }
        map.set(head, true);
        head = head.next;
    }
    return null;
}