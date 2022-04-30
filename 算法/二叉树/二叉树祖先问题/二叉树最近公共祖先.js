/**
 * 236. 二叉树的最近公共祖先
 * @param {*} root 
 * @param {*} p 
 * @param {*} q 
 * @returns 
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;
    if(root.val == q.val || root.val == p.val) {
        return root;
    }

    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);

    if(left && right) {
        return root;
    }

    if(left) return left;
    if(right) return right;
}