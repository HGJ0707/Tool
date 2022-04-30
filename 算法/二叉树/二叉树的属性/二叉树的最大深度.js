/**
 * 104. 二叉树的最大深度
 * @param {*} root 
 * @returns 
 */
var maxDepth = function (root) {
    let max = 0;
    const arr = [];
    if (!root) {
        return 0;
    }
    arr.push(root);
    while (arr.length) {
        let len = arr.length;
        max++;
        for (let i = 0; i < len; i++) {
            let node = arr.shift();
            node.left && arr.push(node.left);
            node.right && arr.push(node.right);
        }
    }
    return max;
};