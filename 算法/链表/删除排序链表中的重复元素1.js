/**
 * 83. 删除排序链表中的重复元素
 * @param {*} head 
 * @returns 
 */
var deleteDuplicates = function (head) {
    if (!head) {
        return null;
    }
    let cur = head;
    while (cur.next) {
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
}