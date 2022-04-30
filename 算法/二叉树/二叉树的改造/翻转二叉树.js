/**
 * 226. 翻转二叉树
 * @param {*} root 
 * @returns 
 */
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};