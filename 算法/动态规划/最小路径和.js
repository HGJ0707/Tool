/**
 * 64. 最小路径和
 * @param {*} grid 
 * @returns 
 */
var minPathSum = function (grid) {
    //构建一个和grid大小的二维数组
    const dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));
    dp[0][0] = grid[0][0];

    //第一排：前一列dp+当前值
    for (let i = 1; i < grid.length; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    //第一列：前一个行dp+当前值
    for (let j = 1; j < grid[0].length; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    //从[1][1]开始，每个元素等于左边的dp+上面的dp
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j]);
        }
    }

    return dp[grid.length - 1][grid[0].length - 1];
}