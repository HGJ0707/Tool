/**
 * 实现参数复用，本质上是降低通用性，提高适用性。
 * @param {*} fn 
 * @param {*} args 
 * @returns 
 */
function curry(fn, args) {
    let length = fn.length;
    args = args || [];
    return function () {
        let subArgs = args.slice(0);
        for (let i = 0; i < arguments.length; i++) {
            subArgs.push(arguments[i]);
        }
        if (subArgs.length >= length) {
            return fn.apply(this, subArgs);
        } else {
            return curry.call(this, fn, subArgs);
        }
    };
}




// es6 实现
function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}



function add(a, b, c) {
    return a + b + c;
}


var addCurry = curry(add);
console.log(addCurry(1)(2, 3));



