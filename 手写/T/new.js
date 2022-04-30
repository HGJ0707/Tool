/**
 * 1.以ctor.prototype为原型创建一个对象
 * 2.执行构造函数并将this绑定到新创建的对象上
 * 3.判断构造函数执行返回的结果是否是引用数据类型，
 * 若是则返回构造函数执行的结果，否则返回创建的对象。
 */

/**
 * @param {*} ctor 
 * @returns 
 */

function newOperator(ctor) {
    if (typeof ctor !== 'function') {
        throw 'newOperator function the first param must be a function';
    }
    var newObj = Object.create(ctor.prototype);
    var argsArr = [].slice.call(arguments, 1);
    var res = ctor.apply(newObj, argsArr);
    var isObject = typeof res === 'object' && res !== null;
    var isFunction = typeof res === 'function';
    return isObject || isFunction ? res : newObj;
}


function GirlFriend(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    }

    return {
        name: 'Tomboy',
        age: 30,
        sayName: function () {
            console.log(this.name);
        }
    }

}

// let xm = new GirlFriend('xiaomei', 18);
// xm.sayName();
// console.log(xm)

let xt = newOperator(GirlFriend, 'xiaomei', 18);
xt.sayName();
console.log(xt)
