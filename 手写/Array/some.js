/**
 * some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
 * @param {*} callback 
 * @returns 
 */
Array.prototype.MySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}
console.log(players.MySome(item => item.num >= 23));