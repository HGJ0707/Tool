/**
 * 82. 删除排序链表中的重复元素 II
 * @param {*} head 
 * @returns 
 */
var deleteDuplicates = function(head) {
    let dummyNode = new ListNode(-1, head);
    let cur = dummyNode;
    while(cur.next && cur.next.next) {
        if(cur.next.val === cur.next.next.val) {
            let x = cur.next.val;
            while(cur.next && cur.next.val === x) {
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next;
        }
    }
    return dummyNode.next;
}