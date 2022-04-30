/**
 * 22. 括号生成
 * @param {*} n 
 * @returns 
 */
var generateParenthesis = function (n) {
    const res = [];
    const dfs = (lr, rr, str) => {
        if (str.length == 2 * n) {
            res.push(str);
        }
        if (lr) {
            dfs(lr - 1, rr, str + "(");
        }
        if (lr < rr) {
            dfs(lr, rr - 1, str + ")");
        }
    }
    dfs(n, n, "");
    return res;
};



















