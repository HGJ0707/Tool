const check = (p1, p2) => {
    if (!p1 && !p2) {
        return true;
    }
    if (!p1 || !p2) {
        return false;
    }
    return p1.val == p2.val && check(p1.left, p2.right) && check(p1.right, p2.left);
}

/**
 * 101. 对称二叉树
 * @param {*} root 
 * @returns 
 */
var isSymmetric = function (root) {
    return check(root, root);
}