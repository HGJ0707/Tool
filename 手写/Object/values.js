/**
 * Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，
 * 值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )
 * @param {*} obj 
 * @returns 
 */

Object.prototype.MyValues = function (obj) {
    const arr = [];
    for (const key in obj) {
        obj.hasOwnProperty(key) && arr.push(obj[key]);
    }
    return arr;
}

console.log(Object.MyValues(obj));