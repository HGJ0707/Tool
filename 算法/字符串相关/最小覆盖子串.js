/**
 * 76. 最小覆盖子串
 * @param {*} s 
 * @param {*} t 
 * @returns 
 */
var minWindow = function (s, t) {
    let need = {};                      //需要的字符，即t中的字符
    let window = {};                    //在窗口中的字符
    for (let key of t) {
        need[key] = (need[key] || 0) + 1;
    }

    let left = 0, right = 0, start = 0, valid = 0, len = Number.MAX_VALUE;

    while (right < s.length) {
        let c = s[right];
        right++;
        if (need[c]) {                          //如果需要这个字符，就往窗口里面加；
            window[c] = (window[c] || 0) + 1;
            if (window[c] == need[c]) {         //窗口里的这个字符和需要的这个字符个数相同,满足条件的字符就+1；
                valid++;
            }
        }

        while (valid == Object.keys(need).length) {     //窗口里面的字符已经包含了需要的所有字符；
            if (right - left < len) {                   //如果包含的字符个数小于目前的最小字符个数，就重新复制len，并记录start位置
                start = left;
                len = right - left;
            }

            let d = s[left];                            //慢慢的从左边取出字符；
            left++;
            if (need[d]) {                              //如果取出的字符是需要的，并且这个字符在窗口里面的个数和需要的个数相同
                if (window[d] == need[d]) {             //则说明少了一个满足条件的字符，退出循环，继续外面的循环
                    valid--;
                }
                window[d]--;
            }
        }
    }
    return len === Number.MAX_VALUE ? "" : s.substr(start, len);    //如果
}