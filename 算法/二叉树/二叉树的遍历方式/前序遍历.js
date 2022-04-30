/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/die-dai-chao-jian-dan-er-cha-shu-qian-zh-z1k5/
 * 144前序遍历 -- 递归法
 * @param {*} root 
 * @returns 
 */
var preorderTraversal = function (root) {
    const res = [];
    const dfs = (root) => {
        if (root == null) {
            return;
        }
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res;
};


/**
 * 144前序遍历 -- 迭代法
 * @param {*} root 
 * @returns 
 */
var preorderTraversal = function (root) {
    const res = [];
    const stack = [];
    while (root || stack.length) {
        while (root) {
            res.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }
    return res;
}
