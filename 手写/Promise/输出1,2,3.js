/**
 * 使用Promise实现每隔1秒输出1,2,3
 */

let arr = [1, 2, 3];

arr.reduce((pre, cur) => {
    return pre.then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(console.log(cur));
            }, 1000);
        })
    })
}, Promise.resolve());







/**
 * methods 2
 */

// function delay(timer) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, timer);
//     })
// }

// (async() => {
//     for(var i = 0; i < 3; i++) {
//         await delay(1000);
//         console.log(i+1);
//     }
// })()


arr.reduce((pre, cur) => {
    return pre.then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log(cur));
            }, 1000)
        })
    })
}, Promise.resolve());