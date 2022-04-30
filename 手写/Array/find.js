/**
 * find() 方法返回数组中满足提供的测试函数的第一个元素的值。
 * 否则返回 undefined。
 * @param {*} callback 
 * @returns 
 */

Array.prototype.MyFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

console.log(players.MyFind(item => item.name === '科比')) // { name: '科比', num: 24 }
console.log(players.MyFind(item => item.name === '安东尼')) // undefined
