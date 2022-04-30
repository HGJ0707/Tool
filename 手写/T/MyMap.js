//存储多个键值对数据
class MyMap {
    constructor(iterable = []) {
        //验证是否是可迭代对象
        if (typeof iterable[Symbol.iterator] != 'function') {
            throw new TypeError(`${iterable}不是一个可迭代对象`);
        }
        this._datas = [];
        for (const item of iterable) {
            if (typeof item[Symbol.iterator] != 'function') {
                throw new TypeError(`${item}不是一个可迭代对象`);
            }
            const iterator = item[Symbol.iterator]();
            const key = iterator.next().value;
            const value = iterator.next().value;
            this.set(key, value);
        }
    }

    /**
     * 根据key值找到对应的数组项
    */
    _getObj(key) {
        for (const item of this._datas) {
            if (this.isEqual(item.key, key)) {
                return item;
            }
        }
    }

    set(key, value) {
        if (this.has(key)) {
            const item = this._getObj(key);
            item.value = value;

        } else {
            this._datas.push({
                key,
                value
            })
        }
    }

    delete(key) {
        for (let i = 0; i < this._datas.length; i++) {
            const ele = this._datas[i];
            if (this.isEqual(key, ele.key)) {
                this._datas.splice(i, 1);
                return true;
            }
        }
        return false;
    }


    has(key) {
        // for (const item of this._datas) {
        //     if (this.isEqual(key, item.key)) {
        //         return true;
        //     }
        // }
        // return false;

        return this._getObj(key) !== undefined;
    }

    get(key) {
        const item = this._getObj(key);
        return item.value ? item.value : undefined;
    }

    get size() {
        return this._datas.length;
    }

    clear() {
        this._datas.length = 0;
    }

    *[Symbol.iterator]() {
        for (const item of this._datas) {
            yield [item.key, item.value];
        }
    }

    forEach(callback) {
        for (const item of this._datas) {
            callback(item.value, item.key, this);
        }
    }

    /**
     * 判断两个数据是否相等
    */
    isEqual(data1, data2) {
        if (data1 === 0 && data2 === 0) {
            return true;
        }
        return Object.is(data1, data2);
    }
}

const mp = new MyMap([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);
mp.set("qq", 1212);
mp.set("a", 5676);
console.log(mp);
console.log(mp.size);
console.log(mp.get("qq"));

for (const item of mp) {
    console.log(item);
}

mp.forEach((a1, a2, a3) => {
    console.log(a1, a2, a3);
})