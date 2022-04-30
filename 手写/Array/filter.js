/**
 * filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
 * @param {*} func 
 * @param {*} obj 
 * @returns 
 */

Array.prototype.myFilter = function (func, obj) {
    var len = this.length;
    var arr = [];
    var _this = arguments[1] || window;
    for (var i = 0; i < len; i++) {
        func.call(_this, this[i], i, this) && arr.push(this[i]);
    }
    return arr;
}
