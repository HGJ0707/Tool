/**
 * every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
 * @param {*} fn 
 * @param {*} thisArg 
 * @returns 
 */
Array.prototype.myEvery = function (fn, thisArg) {
    let len = this.length;
    let _this = thisArg || window;
    for (let i = 0; i < len; i++) {
        if (!fn.call(_this, this[i], i, this)) {
            return false
        }
    }
    return true;
}
