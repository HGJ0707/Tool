/**
 * 改变原数组
 * @returns 
 */
Array.prototype.myReverse = function () {
    var len = this.length;
    for (var i = 0; i < len / 2; i++) {
        var temp = this[i];
        this[i] = this[len - 1 - i];
        this[len - 1 - i] = temp;
    }
    return this;
}