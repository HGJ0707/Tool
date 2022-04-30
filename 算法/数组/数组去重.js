/**
 * indexOf
 * 外层遍历目标数组，循环内用indexOf判断当前项是否在 res 数组中
 * @param {*} array 
 * @returns 
 */
function unique(array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res;
}



/**
 * 排序后去重
 * 试想我们先将要去重的数组使用 sort 方法排序后，相同的值就会被排在一起，
 * 然后我们就可以只判断当前元素与上一个元素是否相同，相同就说明重复，
 * 不相同就添加进 res
 * @param {*} array 
 * @returns 
 */
function unique(array) {
    var res = [];
    var sortedArray = array.concat().sort();
    var seen;
    for (var i = 0, len = sortedArray.length; i < len; i++) {
        // 如果是第一个元素或者相邻的元素不相同
        if (!i || seen !== sortedArray[i]) {
            res.push(sortedArray[i])
        }
        seen = sortedArray[i];
    }
    return res;
}




/**
 * filter + indexOf
 * @param {*} array 
 * @returns 
 */
function unique(array) {
    var res = array.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    })
    return res;
}




/**
 * filter + sort
 * @param {*} array 
 * @returns 
 */
function unique(array) {
    return array.concat().sort().filter(function(item, index, array){
        return !index || item !== array[index - 1]
    })
}



/**
 * Set
 * 它类似于数组，但是成员的值都是唯一的，没有重复的值
 * @param {*} array 
 * @returns 
 */
function unique(array) {
    return [...new Set(array)];
}



/**
 * Map
 * @param {*} arr 
 * @returns 
 */
function unique (arr) {
    const seen = new Map()
    return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}




//2
function unique2(arr) {
    var obj = {};
    return arr.filter(ele => {
        if (!obj[ele]) {
            obj[ele] = true;
            return true;
        }
    })
}

//3
function unique3(arr) {
    var result = [];
    arr.forEach(ele => {
        if (result.indexOf(ele) == -1) {
            result.push(ele)
        }
    })
    return result;
}

//4
let result = arr.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]