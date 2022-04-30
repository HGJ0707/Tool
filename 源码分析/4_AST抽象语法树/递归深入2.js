//  [1, 2, 3, [4, 5]]

// 转换成：

// [
//     { value: 1 },
//     { value: 2 },
//     { value: 3 },
//     { children: [[Object], [Object]] }
// ]



//方法1
var arr = [1, 2, 3, [4, 5]];
function convert(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == 'number') {
            result.push({
                value: arr[i],
            })
        } else if (Array.isArray(arr[i])) {
            result.push({
                children: convert(arr[i]),
            })
        }
    }
    return result;
}

// console.log(convert(arr));


//方法2
function convert2(item) {
    if (typeof item == 'number') {
        return {
            value: item,
        }
    } else if (Array.isArray(item)) {
        return {
            children: item.map(_item => convert2(_item))
        };
    }
}

console.log(convert2(arr));



// {
//     children: [
//         { value: 1 },
//         { value: 2 },
//         { value: 3 },
//         {
//             children:
//                 [Array]
//         }
//     ]
// }