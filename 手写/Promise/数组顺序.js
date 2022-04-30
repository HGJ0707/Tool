/**
 * 请实现一个mergePromise函数，把传进去的数组按顺序先后执行，
 * 并且把返回的数据先后放到数组data中
 */

const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

const mergePromise = ajaxArray => {
    // 在这里实现你的代码
    var data = [];
    // Promise.resolve方法调用时不带参数，直接返回一个resolved状态的 Promise 对象。
    var seq = Promise.resolve();
    ajaxArray.forEach(item => {
        // 第一次的 then 方法用来执行数组中的每个函数，
        // 第二次的 then 方法接受数组中的函数执行后返回的结果，
        // 并把结果添加到 data 中，然后把 data 返回。
        seq = seq.then(item).then(res => {
            data.push(res);
            return data;
        })
    })
    return seq;
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]