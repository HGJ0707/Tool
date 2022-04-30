/**
 * entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
 * @param {*} obj 
 * @returns 
 */

Object.prototype.MyEntries = function (obj) {
    const arr = [];
    for (let key in obj) {
        obj.hasOwnProperty(key) && arr.push([key, obj[key]]);
    }
    return arr;
}

console.log(Object.prototype.MyEntries(obj));