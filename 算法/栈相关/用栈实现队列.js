/**
 * 232. 用栈实现队列
 */
var MyQuene = function () {
    this.inStack = [];
    this.outStack = [];
}

MyQuene.prototype.push = function (x) {
    this.inStack.push(x);
}

MyQuene.prototype.pop = function () {
    if (!this.outStack.length) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
    return this.outStack.pop();
}

MyQuene.prototype.peek = function () {
    if (!this.outStack.length) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
    return this.outStack[this.outStack.length - 1];
}

MyQuene.prototype.empty = function () {
    return this.inStack.length === 0 && this.outStack.length === 0;
}
