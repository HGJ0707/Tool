/**
 * 8. 字符串转换整数 (atoi)
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let res = 0,
        flag = 1;
    s = s.trim();
    for (let i = 0; i < s.length; i++) {
        if (i == 0 && s[i] == "-") {
            flag = -1;
            continue;
        } else if (i == 0 && s[i] == "+") {
            continue;
        }

        if (s[i] >= 0 && s[i] <= 9 && s[i] != " ") {
            res = res * 10 + (s[i] - 0);
            if (res * flag <= -2147483648) {
                return -2147483648;
            } else if (res * flag >= 2147483647) {
                return 2147483647;
            }
        } else break;
    }
    return res * flag;
};





/**
 * @param {string} s
 * @return {number}
 * 使用状态机
 * 
 * 我们的程序在每个时刻有一个状态 s，每次从序列中输入一个字符 c，并根据字符 c 转移到下一个状态 s'。
 * 这样，我们只需要建立一个覆盖所有情况的从 s 与 c 映射到 s' 的表格即可解决题目中的问题。
 */
var myAtoi = function (s) {
    class Automaton {
        constructor() {
            this.state = 'start';
            this.sign = 1;
            this.answer = 0;
            this.map = new Map([
                ['start', ['start', 'signed', 'in_number', 'end']],
                ['signed', ['end', 'end', 'in_number', 'end']],
                ['in_number', ['end', 'end', 'in_number', 'end']],
                ['end', ['end', 'end', 'end', 'end']]
            ])
        }

        getIndex(char) {
            if (char === ' ') {
                return 0;
            } else if (char === '-' || char === '+') {
                return 1;
            } else if (typeof Number(char) === 'number' && !isNaN(char)) {
                return 2;
            } else {
                return 3;
            }
        }

        get(char) {
            this.state = this.map.get(this.state)[this.getIndex(char)];
            if (this.state === 'in_number') {
                this.answer = this.answer * 10 + (char - 0);
                this.answer = this.sign === 1 ? Math.min(this.answer, Math.pow(2, 31) - 1) : Math.min(this.answer, -Math.pow(-2, 31));
            } else if (this.state === 'signed') {
                this.sign = char === '+' ? 1 : -1;
            }
        }
    }

    let automaton = new Automaton();
    for (let char of s) {
        automaton.get(char);
    }
    return automaton.sign * automaton.answer;
};