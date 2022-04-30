/**
 * findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。
 * 若没有找到对应元素则返回-1。
 * @param {*} callback 
 * @returns 
 */

Array.prototype.MyFindIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
}

console.log(players.MyFindIndex(item => item.name === '科比')) // 0
console.log(players.MyFindIndex(item => item.name === '安东尼')) // -1