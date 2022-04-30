/**
 * 124. 二叉树中的最大路径和
 * @param {*} root 
 * @returns 
 */
var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER;//注意:防止数组的元素都是负数

    const dfs = (root) => {
        if (root == null) {
            return 0;
        }

        let left = dfs(root.left);//左边的最大和
        let right = dfs(root.right);//右边的最大和

        let innerMaxSum = left + root.val + right;//以当前节点为根节点的最大和
        maxSum = Math.max(maxSum, innerMaxSum);

        let outputMaxSum = root.val + Math.max(0, left, right);//对外暴露的最大和
        return outputMaxSum < 0 ? 0 : outputMaxSum;
    }
    dfs(root);
    return maxSum;
}