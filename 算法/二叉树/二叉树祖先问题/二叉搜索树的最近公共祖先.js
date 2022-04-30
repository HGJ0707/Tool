// 二叉搜索树
// 1.若任意结点的左子树不空，则左子树上所有结点的值均不大于它的根结点的值。
// 2.若任意结点的右子树不空，则右子树上所有结点的值均不小于它的根结点的值。
// 3.任意结点的左、右子树也分别为二叉搜索树。

/**
 * 235. 二叉搜索树的最近公共祖先
 * @param {*} root 
 * @param {*} p 
 * @param {*} q 
 */
var lowestCommonAncestor = function (root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        lowestCommonAncestor(root.left, p, q);
    }
    if (p.val > root.val && q.val > root.val) {
        lowestCommonAncestor(root.right, p, q);
    }
    return root;
}