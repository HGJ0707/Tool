/**
 * 25. K 个一组翻转链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 const myReverse = function(head, tail) {
    let prev = head;
    let end = tail.next;
    while(end != tail) {
        const temp = prev.next;
        prev.next = end;
        end = prev;
        prev = temp;
    }
    return [tail, head];
}

const reverseKGroup = function (head, k) {
    const dummy = new ListNode(0, head);
    let p = dummy;
    while(head) {
        let tail = p;
        for(let i = 0; i < k; i++) {
            tail = tail.next;
            if(!tail) {
                return dummy.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        p.next = head;
        tail.next = nex;
        p = tail;
        head = tail.next;
    }
    return dummy.next;
}