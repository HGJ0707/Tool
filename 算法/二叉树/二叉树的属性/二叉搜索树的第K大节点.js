/**
 * 剑指 Offer 54. 二叉搜索树的第k大节点
 * @param {*} root 
 * @param {*} k 
 * @returns 
 */
var kthLargest = function (root, k) {
    const res = [];

    const midOrder = (root) => {
        if (!root) {
            return null;
        }
        midOrder(root.left);
        res.push(root.val);
        midOrder(root.right);
    }

    midOrder(root);

    return res[res.length - k];
};