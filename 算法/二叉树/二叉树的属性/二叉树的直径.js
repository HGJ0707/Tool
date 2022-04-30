/**
 * 543. 二叉树的直径
 * @param {*} root 
 * @returns 
 */
var diameterOfBinaryTree = function (root) {
    let max = 0;
    const depth = (root) => {
        if (!root) {
            return 0;
        }
        let left = depth(root.left);
        let right = depth(root.right);
        max = Math.max(max, left + right + 1);
        return Math.max(left, right) + 1;
    }
    depth(root);
    return max - 1;
}