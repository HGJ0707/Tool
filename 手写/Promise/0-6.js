/**
 * https://juejin.cn/post/6949699310732869669
 * 
 * https://developers.weixin.qq.com/community/develop/article/doc/0006a2372a8a7083faeb1366951c13
 */

Promise.resolve().then(()=> {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res);
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() =>{
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() => { 
    console.log(6);
})

// console.log(123);


