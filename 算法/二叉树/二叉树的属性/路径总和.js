/**
 * 112. 路径总和
 * @param {*} root 
 * @param {*} targetSum 
 * @returns 
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right && root.val == targetSum) {
        return true;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}
