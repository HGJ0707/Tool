/**
 * 23. 合并K个升序链表
 * @param {*} lists 
 * @returns 
 */
var mergeKLists = function (lists) {
    let len = lists.length;
    if(len <= 1) return lists[0] || null;
    const newLists = [];
    for(let i = 0; i < len; i += 2) {
        newLists.push(merge(lists[i], lists[i+1] || null));
    }
    return mergeKLists(newLists);
}

function merge(l1, l2) {
    let dummyNode = new ListNode(-1);
    let p = dummyNode;

    while(l1 && l2) {
        if(l1.val <= l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = le.next;
        }
        p = p.next;
    }
    p.next = l1 ? l1 : l2;
    return dummyNode.next;
}
