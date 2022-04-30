/**
 * forEach()方法对数组的每个元素执行一次提供的函数
 * 无返回值
 * @param {*} func 
 * @param {*} thisArg 
 */

Array.prototype.myForEach = function (func, thisArg) {
    var len = this.length;                          //数组的长度
    var _this = thisArg || window;                    //
    for (var i = 0; i < len; i++) {
        func.call(_this, this[i], i, this)          //函数绑定的this，数组第i个元素，下标，数组本身
    }
}