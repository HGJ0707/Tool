/**
 * myCall
 * @param {*} ctx 
 * @param  {...any} args 
 * @returns 
 */

Function.prototype.MyCall = function (ctx = window, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError(`${this} is not a function`);
    }
    const fn = Symbol();
    ctx[fn] = this;                     //借用函数方法，相当于把方法加到了ctx里面
    var result = ctx[fn](...args);      //执行方法
    delete ctx[fn];                     //把加进去的方法删掉
    return result;
}

// test MyCall
var obj = {
    name: "huguangjun",
    sayName() {
        console.log(this.name);
    }
}
var bar = {
    name: "HGJ"
}
obj.sayName.myCall(bar);





/**
 * myApply
 * @param {*} ctx 
 * @param {*} args 
 * @returns 
 */

Function.prototype.MyApply = function (ctx = window, args) {
    if (typeof this !== 'function') {
        throw new TypeError(`${this} is not a function`);
    }
    const fn = Symbol();
    ctx[fn] = this;
    var result = ctx[fn](...args);
    delete ctx[fn];
    return result;
}

// test MyApply






/**
 * myBind
 * @param {*} target 
 * @returns 
 * // thisArg:调用绑定函数时作为 this 参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。
 * // https://blog.csdn.net/tangzhl/article/details/79669461?ops_request_misc=&request_id=&biz_id=102&utm_term=bind%E5%8E%9F%E7%90%86&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-79669461.nonecase&spm=1018.2226.3001.4187
 */

//绑定过后的函数被new实例化之后，需要继承原函数的原型链方法，
//且绑定过程中提供的this被忽略（继承原函数的this对象），但是参数还是会使用。

Function.prototype.myBind = function (target) {
    if (typeof this !== 'function') {
        throw new Error(`${this} is not a function`);
    }
    target = target || window;
    var _this = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () { };
    var bound = function () {
        return _this.apply(this instanceof fNOP ? this : target,
            args.concat(Array.prototype.slice.call(arguments, 0)));
    }
    fNOP.prototype = _this.prototype;
    bound.prototype = new fNOP();
    return bound;
}






Function.prototype.call = function (ctx = window, ...args) {
    if (typeof this != 'function') {
        throw new TypeError(`${this} is not a function`);
    }
    let fn = Symbol();
    ctx[fn] = this;
    let result = ctx[fn](...args);
    delete ctx[fn];
    return result;
}

Function.prototype.apply = function (ctx = window, args = []) {
    if (typeof this != "function") {
        throw new TypeError(`${this} is not a function`);
    }
    let fn = Symbol();
    ctx[fn] = this;
    let result = ctx[fn](args);
    delete ctx[fn];
    return result;
}

Function.prototype.bind = function (target) {
    if (typeof this != 'function') {
        throw new TypeError(`${this} is not a function`);
    }
    target = target || window;
    let args = Array.prototype.slice.call(arguments, 1);
    let _this = this;
    let fp = function () { };
    let bound = function () {
        return _this.apply(this instanceof fp ? this : target, args.concat(Array.prototype.call(arguments, 0)));
    }
    fp.prototype = _this.prototype;
    bound.prototype = new fp();
    return bound;
}