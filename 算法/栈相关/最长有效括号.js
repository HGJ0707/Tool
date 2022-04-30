/**
 * 32. 最长有效括号
 * @param {*} s 
 * @returns 
 */
var longestValidParentheses = function (s) {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {             //是左括号，索引进栈
            stack.push(i);
        } else {                    //是右括号，先出栈，再获取到最开始的位置
            stack.pop();
            if (stack.length) {     //栈为空，计算长度进行比较
                let curLen = i - stack[stack.length - 1];
                maxLen = Math.max(curLen, maxLen);
            } else {                //栈已空，充当标识
                stack.push(i);
            }
        }
    }
    return maxLen;
}