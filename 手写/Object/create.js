/**
 * Object.create()会将参数对象作为一个新创建的空对象的原型, 并返回这个空对象
 * @param {*} obj 
 * @returns 
 */
function MyCreate(obj) {
    if (typeof obj !== 'object' && typeof obj !== 'function') {
        throw new TypeError('Object prototype may only be an Object: ' + obj);
    } else if (obj === null) {
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    }

    function F() { };
    F.prototype = obj;
    return new F();
}