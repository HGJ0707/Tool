//把attrString变为数组去返回
export default function (attrString) {
    if (attrString == undefined) return [];
    //当前是否在引号内
    var isYinhao = false;
    //断点
    var point = 0;
    var result = [];
    //遍历attrsString
    for (let i = 0; i < attrString.length; i++) {
        let char = attrString[i];
        if (char == '"') {
            isYinhao = !isYinhao;
        } else if (char == ' ' && !isYinhao) {
            //遇见了空格，并且不在引号中
            if (!/^\s*$/.test(attrString.substring(point, i))) {
                result.push(attrString.substring(point, i).trim());
                point = i;
            }
        }
    }
    //循环结束之后，还有最剩一个属性
    result.push(attrString.substring(point));

    //将数组变成对象形式
    result = result.map(item => {
        const o = item.match(/^(.+)="(.+)"$/);
        return {
            name: o[1],
            value: o[2]
        }
    })
    return result;
}