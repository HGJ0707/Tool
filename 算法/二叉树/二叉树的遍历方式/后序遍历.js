/**
 * 145. 二叉树的后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const res = [];
    const postOrder = (root) => {
        if (!root) {
            return null;
        }
        postOrder(root.left);
        postOrder(root.right);
        res.push(root.val);
    }
    postOrder(root);
    return res;
};




/**
 * 迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const res = [];
    const stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            res.unshift(root.val);
            root = root.right;
        }
        root = stack.pop();
        root = root.left;
    }
    return res;
};