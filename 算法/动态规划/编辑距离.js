/**
 * 72. 编辑距离
 * @param {*} word1 
 * @param {*} word2 
 * @returns 
 */
var minDistance = function (word1, word2) {
    //建立一个二维数组
    const dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0));

    //一个空串和一个非空串的编辑距离为 D[i][0] = i 和 D[0][j] = j，D[i][0] 
    //相当于对 word1 执行 i 次删除操作，D[0][j] 相当于对 word1执行 j 次插入操作
    for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= word2.length; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                //两个字符相等不增加操作数
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                //字符不相等，从增、删、改中选一种操作数最少的。
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }
    console.log(dp);
    return dp[word1.length][word2.length];
}