/**
 * 剑指 Offer 48. 最长不含重复字符的子字符串。以及得到他的长度。
 * @param {*} s 
 * @returns 
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0, right = 0, max = 0;
    let p1 = 0, p2 = 0;
    const len = s.length;
    const set = new Set([s[0]]);
    while (right < len - 1) {
        if (set.has(s[right + 1])) {
            set.delete(s[left++]);
        } else {
            set.add(s[++right]);
            if (set.size > max) {
                max = set.size;
                p1 = left;
                p2 = right;
            }
        }
    }
    return { max: max, str: s.slice(p1, p2 + 1) };
}


var str = "asdfghgjklzxvbnm";
var result = lengthOfLongestSubstring(str);
console.log(result);





/**
 * 滑动法
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var str = [], maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let index = str.indexOf(s[i]);
        if (index != -1) {
            str.splice(0, index + 1);
        }
        str.push(s[i]);
        maxLength = Math.max(maxLength, str.length);        //还可以记录一下i
    }
    return maxLength;
};
