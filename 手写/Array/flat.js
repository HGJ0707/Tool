/**
 * flat()方法创建一个新数组，其中所有子数组元素以递归方式连接到指定深度。
 * @param {*} n 
 * @returns 
 */

Array.prototype.MyFlat = function (n) {
    let arr = this;
    while (arr.some(item => Array.isArray(item)) && (n > 0 ? n : 2)) {
        arr = [].concat(...arr);
        n--;
    }
    return arr;
}
const testArr = [1, [2, 3, [4, 5]], [8, 9]]
console.log(testArr.MyFlat())
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));






