/**
 * 151. 翻转字符串里的单词
 * @param {*} s 
 * @returns 
 */
var reverseWords = function (s) {
    s = s.trim().replace(/\s+/g, " ").split(" ");
    const res = [];
    for (let i = s.length - 1; i >= 0; i--) {
        res.push(s[i]);
    }
    return res.join(" ");
}