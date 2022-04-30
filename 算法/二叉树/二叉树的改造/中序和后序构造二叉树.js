/**
 * 106. 从中序与后序遍历序列构造二叉树
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!postorder.length) return null;
    var root = new TreeNode(postorder[postorder.length - 1]);
    var index = inorder.findIndex(value => value === root.val);
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    root.right = buildTree(inorder.slice(index + 1, inorder.length), postorder.slice(index, postorder.length - 1));
    return root;
}; 