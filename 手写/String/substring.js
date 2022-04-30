/**
 * substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集,
 * 或从开始索引直到字符串的末尾的一个子集。
 * @param {*} indexStart 
 * @param {*} indexEnd 
 * @returns 
 */
String.prototype.MySubstring = function (indexStart = 0, indexEnd) {
    indexStart = indexStart < 0 ? this.length + indexStart : indexStart;
    indexEnd = !indexEnd && indexEnd !== 0 ? this.length : indexEnd;
    if (indexStart > indexEnd) [indexStart, indexEnd] = [indexEnd, indexStart];
    let str = '';
    for (let i = indexStart; i < indexEnd; i++) {
        str += this[i];
    }
    return str;
}