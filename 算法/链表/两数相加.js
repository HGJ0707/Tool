/**
 * 2. 两数相加
 * @param {*} l1 
 * @param {*} l2 
 * @returns 
 */
var addTwoNumbers = function (l1, l2) {
    let dummyNode = new ListNode(-1);
    let p = dummyNode;
    let flag = 0;
    while (l1 || l2) {
        let a = l1 && l1.val, b = l2 && l2.val;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        let sum = a + b + flag;
        flag = Math.floor(sum / 10);
        sum = sum % 10;
        p.next = new ListNode(sum);
        p = p.next;
    }
    if (flag) {
        p.next = new ListNode(flag);
    }
    return dummyNode.next;
}