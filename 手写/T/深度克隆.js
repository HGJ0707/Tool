/**
 * 深度克隆
 * @param {*} obj 
 * @param {*} result 
 * @returns 
 */
function deepClone(obj, result) {
    var result = result || {};
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] == 'object' && obj[prop] !== null) {
                if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {
                    result[prop] = {};
                } else {
                    result[prop] = [];
                }
                deepClone(obj[prop], result[prop])
            } else {
                result[prop] = obj[prop];           // 原始值或func
            }
        }
    }
    return result;
}



/**
 * 阮一峰老师
 * https://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html
 * @param {*} p 
 * @param {*} c 
 * @returns 
 */
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}