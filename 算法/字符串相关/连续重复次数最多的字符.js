/**
 * 寻找字符串中，连续重复次数最多的字符
 * @param {*} str 
 * @returns 
 */
function substr(str) {
    var i = 0;
    var j = 0;
    var maxRepeat = 0;          //最大重复次数
    var maxRepeatChar = '';     //最多重复字符
    while (i < str.length) {
        if (str[i] != str[j]) {
            if (j - i > maxRepeat) {
                maxRepeat = j - i;
                maxRepeatChar = str[i];
            }
            i = j;
        }
        j++;
    }
    return { maxRepeat, maxRepeatChar };
}

var str = "aaaabbbbbbbbccccccdddddddddddeeeeeeeeeeeeeeeee";
var result = substr(str);
console.log(result);






function maxLetter(str) {
    let num = 0;
    let char = '';

    // 使其按照一定的次序排列
    str = str.split('').sort().join('');
    // "aaabbbbbcccccccc"

    // 定义正则表达式
    let re = /(\w)\1+/g;
    str.replace(re, ($0, $1) => {
        if (num < $0.length) {
            num = $0.length;
            char = $1;
        }
    });
    console.log(`字符最多的是${char}，出现了${num}次`);
}