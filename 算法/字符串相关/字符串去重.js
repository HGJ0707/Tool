/**
 * 字符串去重
 * @returns 
 */
String.prototype.unique = function () {
    var obj = {},
        str = '',
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!obj[this[i]]) {
            str += this[i];
            obj[this[i]] = true;
        }
    }
    return str;
}






//方法2 
function unique(str) {
    return str.split("").sort().join("").replace(/(\w)\1+/g, '$1')
}


let a = "dsssssddadad daddadadeqdxv";
console.log(unique(a));