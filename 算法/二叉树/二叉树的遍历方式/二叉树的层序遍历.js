/**
 * 102. 二叉树的层序遍历
 * @param {*} root 
 * @returns 
 */
var levelOrder = function (root) {
    const res = [];
    const quene = [];
    if (root === null) {
        return res;
    }
    quene.push(root);
    while (quene.length) {
        let len = quene.length;
        const level = [];
        for (let i = 0; i < len; i++) {
            let node = quene.shift();
            level.push(node.val);
            node.left && quene.push(node.left);
            node.right && quene.push(node.right);
        }
        res.push(level);
    }
    return res;
}