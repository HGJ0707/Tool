/**
 * Object.is() 方法判断两个值是否为同一个值。
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
Object.prototype.MyIs = function (a, b) {
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b;      //正零和负零不相等
    }
    return a !== a && b !== b;                   //NaN和NaN相等
}


console.log(Object.MyIs(0,-0));
console.log(Object.MyIs(NaN,NaN));
console.log(Object.MyIs(0,undefined));