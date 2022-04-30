/**
 * reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，
 * 将其结果汇总为单个返回值。
 * @param {*} callback 
 * @param {*} initValue 
 * @returns 
 */

Array.prototype.MyReduce = function (callback, initValue) {
    let start = 0, pre = 0;
    if (initValue) {
        pre = initValue;
    }
    for (let i = start; i < this.length; i++) {
        pre = callback(pre, this[i], i, this);
    }
    return pre;
}

const testReduce = players.MyReduce((pre, next) => {
    return pre + next.num;
},1);
console.log(testReduce);