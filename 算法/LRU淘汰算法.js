/**
 * 146. LRU 缓存
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if (this.map.has(key)) {
            let value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        } else {
            return -1;
        }
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        }
        this.map.set(key, value);
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
    }
}

/**
 * get(key)
 * 
 * 如果里面有key,先获取key相对应的value,再设置上去，返回value;没有则返回-1
 * 
 * 
 * put(key, value)
 * 
 * 如果里面有key,先删除key;然后再设置key - value;如果map容量大于capacity则删除第一个；
 */