/**
 * 160. 相交链表
 * @param {*} headA 
 * @param {*} headB 
 * @returns 
 */

var getInterSectionNode = function (headA, headB) {
    // if (!headA || !headB) return null;
    // let PA = headA;
    // let PB = headB;
    // while (PA != PB) {
    //     PA = PA == null ? headB : PA.next;
    //     PB = PB == null ? headA : PB.next;
    // }
    // return PA;



    let map = new Map();
    let temp = headA;
    while (temp != null) {
        map.set(temp, true);
        temp = temp.next;
    }
    temp = headB;
    while (temp != null) {
        if (map.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return null;
}