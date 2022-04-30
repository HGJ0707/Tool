/**
 * 69. x 的平方根 
 * @param {*} x 
 * @returns 
 * 二分法
 */
 var mySqrt = function (x) {
    let left = 0;
    let right = x;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (mid <= x / mid) {
            if ((mid + 1) > x / (mid + 1)) {
                return mid;
            }
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return 0;
};
