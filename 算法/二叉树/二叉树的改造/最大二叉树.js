/**
 * 654. 最大二叉树
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) {
        return null;
    }
    var max = Math.max(...nums);
    var maxIndex = nums.findIndex(value => value === max);
    var root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length));
    return root;
};