/**
 * 103. 二叉树的锯齿形层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    let ret = [];
    let quene = [];
    if(root === null) {
        return ret;
    }
    quene.push(root);
    while(quene.length !== 0) {
        var len = quene.length;
        var level = [];
        for(var i = 0; i < len; i++) {
            var node = quene.shift();
            level.push(node.val);
            node.left && quene.push(node.left);
            node.right && quene.push(node.right);
        }
        ret.length % 2 === 0 ? ret.push(level) : ret.push(level.reverse());
    }
    return ret;
};

