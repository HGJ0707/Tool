/**
 * 94中序遍历 -- 递归法
 * @param {*} root 
 * @returns 
 */
var inorderTraversal = function (root) {
    const res = [];
    var inOrder = (root) => {
        if (!root) {
            return
        }
        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    return res;
}



/**
 * 中序遍历 -- 迭代法
 * @param {*} root 
 * @returns 
 */
var inorderTraversal = function (root) {
    const res = [];
    const stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}

