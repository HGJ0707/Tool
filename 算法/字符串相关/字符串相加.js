/**
 * 415. 字符串相加
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
var addStrings = function(num1, num2) {
    const res = [];
    let i = num1.length - 1;
    let j = num2.length - 1;
    let add = 0;
    
    while(i >= 0 || j >=0 || add) {
        let x = i >= 0 ? num1.charAt(i) - '0' : 0;
        let y = j >= 0 ? num2.charAt(j) - '0' : 0;
        let sum = x + y + add;
        res.push(sum % 10);
        add = Math.floor(sum / 10);
        i--;
        j--;
    }
    return res.reverse().join('');
}