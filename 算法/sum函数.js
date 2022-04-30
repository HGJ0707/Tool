/**
 * 实现sum函数
 * @returns 
 */
function sum() {
    var num = 0;
    for (let i = 0; i < arguments.length; i++) {
        num += arguments[i];
    }
    return function su() {
        if (arguments[0]) {
            for (let i = 0; i < arguments.length; i++) {
                num += arguments[i];
            }
            return su
        } else {
            return num;
        }
    }
}




console.log(sum(1)(4)(6)())
console.log(sum(1, 2, 3)(11)())
console.log(sum(1, 2, 3)(12)(1, 2, 3)())
console.log(sum(1, 2, 3)())

