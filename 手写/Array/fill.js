/**
 * fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
 * 不包括终止索引。
 * @param {*} value 
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
Array.prototype.MyFill = function (value, start = 0, end) {
    end = end || this.length;
    for (let i = start; i < end; i++) {
        this[i] = value;
    }
    return this;
}

console.log(players.MyFill('林三心'))