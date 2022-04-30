/**
 * Object.assign()方法用于将  **所有可枚举属性**  的值从一个或多个源对象复制到目标对象。
 * 它将返回目标对象（请注意这个操作是浅拷贝）
 */

 function MyAssign(target, ...sources) {
    if (target == null) {
        throw TypeError("cannot convent null or undefined to object");
    }
    var ret = Object(target);
    sources.forEach(function (obj) {
        if (obj !== null) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret[key] = obj[key];
                }
            }
        }
    })
    return ret;
}