class MySet {
    constructor(iterator = []) {
        //验证是否是可迭代的对象
        if (typeof iterator[Symbol.iterator] !== "function") {
            throw new TypeError(`${iterator}不是一个可迭代对象`);
        }
        //存放数据
        this._datas = [];
        for (const item of iterator) {
            this.add(item);
        }
    }


    add(data) {
        if (!this.has(data)) {
            this._datas.push(data);
        }
    }


    delete(data) {
        for (let i = 0; i < this._datas.length; i++) {
            const ele = this._datas[i];
            if (this.isEqual(data, ele)) {
                this._datas.splice(i, 1);
                return true;
            }
        }
        return false;
    }


    has(data) {
        for (const item of this._datas) {
            if (this.isEqual(data, item)) {
                return true;
            }
        }
        return false;
    }


    clear() {
        this._datas.length = 0;
    }


    get size() {
        return this._datas.length;
    }


    *[Symbol.iterator]() {
        for (const item of this._datas) {
            yield item;
        }
    }


    forEach(callback) {
        for (const item of this._datas) {
            callback(item, item, this);
        }
    }


    /**
     * 判断两个数据是否相等
     * @param {*} data1
     * @param {*} data2
    */
    isEqual(data1, data2) {
        if (data1 === 0 && data2 === 0) {
            return true;
        }
        return Object.is(data1, data2);
    }
}



const s = new MySet([1, 2, 3, 4, 1, 2, 5, 6, 7]);
console.log(s);

for (const item of s) {
    console.log(item);
}

s.forEach((a1, a2, a3) => {
    console.log(a1, a2, a3);
})

console.log(s.size);