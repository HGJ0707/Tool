/**
 * includes() 方法用来判断一个数组是否包含一个指定的值
 * 根据情况，如果包含则返回 true，否则返回 false。
 * @param {*} value 
 * @param {*} start 
 * @returns 
 */
Array.prototype.MyIncludes = function (value, start = 0) {
    if (start < 0) start = this.length + start;
    for (let i = start; i < this.length; i++) {
        if (this[i] === value || this[i].toString() === 'NaN') {
            return true;
        }
    }
    return false;
}

console.log([1, 2, 3].MyIncludes(2)) // true
console.log([1, 2, 3, NaN].MyIncludes(NaN)) // true
console.log([1, 2, 3].MyIncludes(1, 1)) // false