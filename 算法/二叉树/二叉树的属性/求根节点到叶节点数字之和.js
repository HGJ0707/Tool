/**
 * 129. 求根节点到叶节点数字之和        深度遍历
 * @param {*} root 
 * @returns 
 */
var sumNumbers = function (root) {
    const dfs = (root, preSum) => {
        if (!root) {
            return null;
        }
        let sum = preSum * 10 + root.val;
        if (!root.left && !root.right) {
            return sum;
        }
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
    return dfs(root, 0);
};
