/**
 * 48. 旋转图像
 * @param {*} matrix 
 */
var rotate = function (matrix) {
    let len = matrix.length;

    //水平翻转
    for (let i = 0; i < Math.floor(len / 2); i++) {
        for (let j = 0; j < len; j++) {
            [matrix[len - 1 - i][j], matrix[i][j]] = [matrix[i][j], matrix[len - 1 - i][j]]
        }
    }

    //对角线翻转
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}


