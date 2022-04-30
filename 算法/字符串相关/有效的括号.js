/**
 * 20. 有效的括号
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let len = s.length;
    const stack = [];
    const map = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    for (let i = 0; i < len; i++) {
        if (s[i] == '[' || s[i] == '(' || s[i] == '{') {
            stack.push(s[i]);
            continue;
        }
        if (s[i] == map[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length ? false : true;
};