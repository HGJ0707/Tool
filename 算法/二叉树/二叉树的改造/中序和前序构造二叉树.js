/**
 * 105. 从前序与中序遍历序列构造二叉树
 * @param {*} preorder 
 * @param {*} inorder 
 * @returns 
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length) {
        return null;
    }
    let root = new TreeNode(preorder[0]);
    let index = inorder.findIndex(number => number == root.val);
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
};

