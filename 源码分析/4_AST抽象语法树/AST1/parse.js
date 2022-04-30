import parseAttrsString from "./parseAttrsString.js";

//parse函数，主函数
export default function (templateString) {
    //指针
    var index = 0;
    //剩余部分
    var rest = '';
    //开始标记
    var startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/;     //第2个括号匹配有attrs的标记
    //结束标记
    var endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
    //抓取结束标记前的文字
    var wordRegExp = /^([^\<]+)\<\/([a-z]+[1-6]?)\>/
    var stack1 = [];
    var stack2 = [{ 'children': [] }];

    while (index < templateString.length - 1) {
        rest = templateString.substring(index);
        //检测开始标记
        if (startRegExp.test(rest)) {
            let startTag = rest.match(startRegExp)[1];
            let attrsString = rest.match(startRegExp)[2];
            //得到attrs字符串的总长度，可能为undefined（不能打点先判断）
            const attrsStringLength = attrsString != null ? attrsString.length : 0;
            index += startTag.length + 2 + attrsStringLength;  // <>
            //将开始标记推入stack1中
            stack1.push(startTag);
            //将空数组推入stack2中
            stack2.push({ 'tag': startTag, 'children': [], 'attrs': parseAttrsString(attrsString) });
        } else if (endRegExp.test(rest)) {
            //检测结束标记
            let endTag = rest.match(endRegExp)[1];
            //拿到开始标记
            let pop_tag = stack1.pop();
            if (endTag == pop_tag) {
                let pop_arr = stack2.pop();
                if (stack2.length > 0) {
                    stack2[stack2.length - 1].children.push(pop_arr);
                }
            } else {
                throw new Error(pop_tag + '标签没有封闭')
            }
            index += endTag.length + 3;    // </>
        } else if (wordRegExp.test(rest)) {
            //检测文字
            let word = rest.match(wordRegExp)[1];
            //文字内容不能是全空
            if (!/^\s+$/.test(word)) {
                stack2[stack2.length - 1].children.push({ 'text': word, 'type': 3 });
            }
            index += word.length;
            console.log(stack1, JSON.stringify(stack2));
        } else {
            index++;
        }
    }
    return stack2[0].children[0];
}


[
    { "children": [] },
    {
        "tag": "div",
        "children": [
            {
                "tag": "h3",
                "children": [
                    { "text": "你好", "type": 3 }
                ],
                "attrs": [
                    { "name": "class", "value": "asd" },
                    { "name": " id", "value": "container" }
                ]
            },
            {
                "tag": "ul",
                "children": [
                    {
                        "tag": "li", "children": [
                            { "text": "A", "type": 3 }
                        ],
                        "attrs": []
                    },
                    {
                        "tag": "li", "children": [
                            { "text": "B", "type": 3 }
                        ],
                        "attrs": []
                    },
                    {
                        "tag": "li",
                        "children": [
                            { "text": "C", "type": 3 }
                        ],
                        "attrs": []
                    }
                ],
                "attrs": []
            }
        ],
        "attrs": []
    }
]