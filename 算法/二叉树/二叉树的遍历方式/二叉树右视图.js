/**
 * 199. 二叉树的右视图  【利用层序遍历】
 * @param {*} root 
 * @returns 
 */
var rightSideView = function(root) {
    const res = [];
    const quene = [];
    if(!root) {
        return
    }
    quene.push(root);
    while(quene.length) {
        let len = quene.length;
        while(len--) {
            let node = quene.shift();
            if(!len) {
                res.push(node.val);
            }
            node.left && quene.push(node.left);
            node.right && quene.push(node.right);
        }
    }
    return res;
}