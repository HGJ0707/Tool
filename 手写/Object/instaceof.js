/**
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
 * @param {*} father 
 * @param {*} child 
 * @returns 
 */

function MyInstanceOf(father, child) {
    const fp = father.prototype;
    const cp = child.__proto__;
    while (cp) {
        if (cp === fp) {
            return true;
        }
        cp = cp.__proto__;
    }
    return false;
}


function Person(name) {
    this.name = name;
}
const hgj = new Person('huguangjun');
console.log(MyInstanceOf(Person, hgj));
console.log(MyInstanceOf(Person, hgj2));

