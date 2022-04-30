// 2[1[a]3[b]2[3[c]4[d]]]
// abbbcccddddcccddddabbbcccddddcccdddd

function smartRepeat(templateStr) {
    var index = 0;
    var stack1 = [];
    var stack2 = [];
    var rest = templateStr;
    while (index < templateStr.length - 1) {
        var rest = templateStr.substring(index);
        if (/^\d+\[/.test(rest)) {
            let times = Number(rest.match(/^(\d+)\[/)[1]);      //()捕获数字
            stack1.push(times);
            stack2.push('');
            index += times.toString().length + 1;
        } else if (/^\w+\]/.test(rest)) {
            let word = rest.match(/^(\w+)\]/)[1];
            stack2[stack2.length - 1] = word;
            index += word.length;
        } else if (rest[0] == ']') {
            let times = stack1.pop();
            let word = stack2.pop();
            stack2[stack2.length - 1] += word.repeat(times);
            index++;
        }
    }
    return stack2[0].repeat(stack1[0]);
}













// 2[1[a]3[b]2[3[c]4[d]]]
// abbbcccddddcccddddabbbcccddddcccdddd

function smartRepeat(templateStr) {
    //指针
    var index = 0;
    //栈1，存放数字
    var stack1 = [];
    //栈2，存放临时字符串
    var stack2 = [];
    //剩余部分
    var rest = templateStr;

    while (index < templateStr.length - 1) {
        //剩余部分
        var rest = templateStr.substring(index);
        //看当前剩余部分是不是以数字和[开头
        if (/^\d+\[/.test(rest)) {
            //得到这个数字
            let times = Number(rest.match(/^(\d+)\[/)[1]);      //()捕获数字
            //把数字压栈，把空字符串压栈
            stack1.push(times);
            stack2.push('');
            //让指针后移，times这个数字是多少位就后移多少位加1位（加1是因为[）
            index += times.toString().length + 1;
        } else if (/^\w+\]/.test(rest)) {
            //如果这个字符是字母，那么此时就把栈顶这项改为这个字母
            let word = rest.match(/^(\w+)\]/)[1];
            stack2[stack2.length - 1] = word;
            //让指针后移，word这个词语是多少位就后移多少位
            index += word.length;
        } else if (rest[0] == ']') {
            //如果这个字符是]，那么就将stack1弹栈，stack2弹栈
            //把字符串栈的新栈顶的元素重复刚刚弹出的那个字符串指定次数拼接到新栈顶上
            let times = stack1.pop();
            let word = stack2.pop();
            stack2[stack2.length - 1] += word.repeat(times);
            index++;
        }
    }
    return stack2[0].repeat(stack1[0]);
}

var result = smartRepeat('2[1[a]3[b]2[3[c]4[d]]]');
console.log(result);
