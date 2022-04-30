/**
 * Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
 * 数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
 * @param {*} obj 
 * @returns 
 */
Object.prototype.MyKeys = function (obj) {
    const keys = [];
    for (const key in obj) {
        obj.hasOwnProperty(key) && keys.push(key);
    }
    return keys;
}

console.log(Object.MyKeys(obj));