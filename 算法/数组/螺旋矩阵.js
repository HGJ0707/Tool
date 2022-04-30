/**
 * 54. 螺旋矩阵
 * @param {*} matrix 
 * @returns 
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    const order = [];
    let rows = matrix.length;
    let columns = matrix[0].length;
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;

    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {
            order.push(matrix[top][column]);
        }
        for (let row = top + 1; row <= bottom; row++) {
            order.push(matrix[row][right]);
        }

        if (left < right && top < bottom) {                                //有这种情况：matrix = [[3],[2]]
            for (let column = right - 1; column > left; column--) {
                order.push(matrix[bottom][column]);
            }
            for (let row = bottom; row > top; row--) {
                order.push(matrix[row][left]);
            }
        }

        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];

    }
    return order;
}