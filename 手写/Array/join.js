/**
 * join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
 * 如果数组只有一个项目，那么将返回该项目而不使用分隔符。
 * @param {*} sep 
 * @returns 
 */

Array.prototype.MyJoin = function (sep = ',') {
    let str = '';
    for (let i = 0; i < this.length; i++) {
        str = i === 0 ? `${str}${this[i]}` : `${str}${sep}${this[i]}`;
    }
    return str;
}
console.log([1].MyJoin()) // 1
console.log([1, 2, 3].MyJoin('*')) // 1*2*3