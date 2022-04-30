/**
 * 98. 验证二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    const search = (root, lower, upper) => {
        if (!root) {
            return true;
        }
        if (root.val <= lower || root.val >= upper) {
            return false;
        }
        return search(root.left, lower, root.val) && search(root.right, root.val, upper);
    }
    return search(root, -Infinity, Infinity);
};