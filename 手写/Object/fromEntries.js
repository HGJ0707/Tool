/**
 * Object.fromEntries() 方法把键值对列表转换为一个对象
 * @param {*} arr 
 * @returns 
 */
Object.prototype.MyFromEntries = function (arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i];
        obj[key] = value;
    }
    return obj;
}

console.log(Object.MyFromEntries([['name', '林三心'], ['age', 22], ['gender', '男']]));