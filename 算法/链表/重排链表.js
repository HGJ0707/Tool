/**
 * 143. 重排链表 -- 【快慢指针法】
 * @param {*} head 
 * @returns 
 */
var reorderList = function(head) {
    if(!head) return null;
    //快慢指针找中点
    let slow = head;
    let fast = head.next;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow.next;
    slow.next = null;

    //反转后半部分链表
    let tail = null;
    while(mid) {
        let temp = mid.next;
        mid.next = tail;
        tail = mid;
        mid = temp;
    }

    //合并连接
    while(head && tail){
        let temp = head.next;
        head.next = tail;
        tail = tail.next;
        head = head.next;
        head.next = temp;
        head = temp;
    }
}