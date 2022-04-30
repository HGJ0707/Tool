/**
 * 5. 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let length = s.length;
    if (length === 0) return;
    if (length === 1) return s;
    var res = "";
    for (var i = 0; i < length; i++) {
        res = judge(s, i, i).length > res.length ? judge(s, i, i) : res;
        res = judge(s, i, i + 1).length > res.length ? judge(s, i, i + 1) : res;
    }
    return res;
};

var judge = function (s, left, right) {
    var length = s.length;
    while (left >= 0 && right < length && s[left] == s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}