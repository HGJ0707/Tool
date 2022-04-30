/**
 * 第一个只出现一次的字母
 * @returns 
 */
String.prototype.firstAppear = function () {
    var len = this.length;
    for (var i = 0; i < len; i++) {
        if (!this.slice(i + 1).includes(this[i])) {
            return this[i];
        }
    }
    return -1;
}



