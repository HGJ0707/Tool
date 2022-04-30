/**
 * 
 * https://developers.weixin.qq.com/community/develop/article/doc/0006a2372a8a7083faeb1366951c13
 * 
 * 三种状态(PENDING / FULFILLED / REJECTED)
 * 
 * then函数
 * {
 *      _pushHandlers   推一个函数进处理队列
 *      _runHandlers    运行处理函数
 *      _runOneHandler  运行一个处理函数
 *      runMicroTask    放到微任务执行
 *      isPromise       判断是否是Promise
 * }
 * 
 * 
 */



//记录Promise的三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

/**
 * 把传递的函数放到微队列中(vue中的nextTick方法)
 * @param {Function} callback 
 */
function runMicroTask(callback) {
    //判断node环境
    if (process && process.nextTick) {
        process.nextTick(callback);
    } else if (MutationObserver) {
        //浏览器环境
        const p = document.createElement('p');
        const observer = new MutationObserver(callback);
        observer.observe(p, {
            childList: true,    //观察该元素内部的变化
        });
        p.innerHTML = '1';
    } else {
        setTimeout(callback, 0);
    }
}

/**
 * 判断是否是Promise
 * @param {any} obj 
 */
function isPromise(obj) {
    //保证返回布尔值
    return !!(obj && typeof obj === 'object' && typeof obj.then === 'function');
}


class MyPromise {
    /**
     * 创建一个Promise
     * @param {Function}    executor 任务执行器，立即执行
     */
    constructor(executor) {
        this._state = PENDING;      //状态
        this._value = undefined;    //数据
        this._handlers = [];        //处理函数形成的队列
        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        } catch (error) {           //执行出错直接reject
            this._reject(error);
            console.error(error);
        }
    }

    /**
     * @param {String} newState  新状态
     * @param {any} data  新数据 
     */
    _changeState(newState, data) {
        if (this._state !== PENDING) {
            //说明不是第一次更改状态，不能再进行更改
            return;
        }
        this._state = newState;
        this._value = data;
        this._runHanlers(); //状态变化，执行队列
    }

    /**
     * 标记当前任务完成
     * @param {any} data 任务完成的相关数据
     */
    _resolve(data) {
        //改变状态和数据
        this._changeState(FULFILLED, data);
    }

    /**
     * 标记当前任务失败
     * @param {any} reason 任务失败的相关原因
     */
    _reject(reason) {
        //改变状态和数据
        this._changeState(REJECTED, reason);
    }

    /**
     * 向处理队列汇总添加一个函数
     * @param {Function} executor 添加的函数
     * @param {String} state 该函数什么状态下执行
     * @param {Function} resolve 让then函数返回的Promise成功
     * @param {Function} reject 让then函数返回的Promise失败
     */
    _pushHandlers(executor, state, resolve, reject) {
        this._handlers.push({
            executor,
            state,
            resolve,
            reject,
        })
    }

    /**
     * 根据实际情况，执行队列
     */
    _runHanlers() {
        if (this._state === PENDING) {
            //目前任务仍然在挂起
            return;
        }
        while (this._handlers[0]) {
            const handler = this._handlers[0];
            this._runOneHandler(handler);
            this._handlers.shift();     //处理完一个删除一个
        }
    }

    /**
     * 处理一个hander
     * @param {Object} handler 
     */
    _runOneHandler({ executor, state, resolve, reject }) {
        runMicroTask(() => {
            if (this._state !== state) {        //过滤handlers数组，只执行符合当前状态的
                //状态不一致，不进行处理
                return;
            }
            if (typeof executor !== 'function') {       //当前executor不是函数，状态穿透（看当前的状态如何）
                //传递后续处理并非一个函数
                this._state === FULFILLED
                    ? resolve(this._value)
                    : reject(this._value);
            }
            try {
                const result = executor(this._value);   //保存executor的执行结果
                //返回的函数是一个Prmiose
                if (isPromise(result)) {                //如果结果是promise，执行then函数
                    result.then(resolve, reject);
                } else {
                    resolve(result);                    //否则resolve它
                }
            } catch (error) {
                reject(error);                          //出现错误reject
                console.error(error);
            }
        })
    }

    /**
     * Promise A+规范的then函数
     * @param {Function} onFulfilled 
     * @param {Function} onRejected 
     */
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this._pushHandlers(onFulfilled, FULFILLED, resolve, reject);
            this._pushHandlers(onRejected, REJECTED, resolve, reject);
            this._runHanlers(); //执行队列
        })
    }



    

    /********************************************************************************************/ 

    /**
     * catch方法实现
     * 仅处理失败的场景
     * @param {Function} onRejected 
     */
    catch(onRejected) {
        return this.then(null, onRejected);
    }

    /**
     * 无论成功还是失败都会执行回调
     * @param {Function} onSettled 
     */
    finally(onSettled) {
        return this.then(
            (data) => {
                onSettled();
                return data;
            },
            (reason) => {
                onSettled();
                throw reason;
            }
        );
    }

    /**
     * 得到一个成功的Promise
     * 特殊情况：
     * 1.传递的data本身就是ES6的Promise对象
     * 2.传递的data是PromiseLike(Promise A+),返回新的Promise,状态和其保持一致即可
     * @param {any} data 
     */
    static resolve(data) {
        if (data instanceof MyPromise) {
            return data;
        }
        return new MyPromise((resolve, reject) => {
            if (isPromise(data)) {
                data.then(resolve, reject);
            } else {
                resolve(data);
            }
        });
    }

    /**
     * 得到一个被拒绝的Promise
     * @param {any} reason 
     */
    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        });
    }

    /**
     * 得到一个新的Promise
     * 1.该Promise的状态取决于proms的执行
     * 
     * 2.proms是一个迭代器，包含多个Promise（不能用for循环遍历）
     * 
     * 3.全部Promise成功，则返回的Promise成功，数据为所有Promise成功的数据，
     * 并且顺序是按照传入的顺序排列
     * 
     * 4.只要有一个Promise失败，则返回的Promise失败，
     * 原因是第一个失败的Promise的原因
     * @param {iterator} proms 
     */
    static all(proms) {
        return new MyPromise((resolve, reject) => {
            try {
                const results = [];
                let count = 0;              //Promise的计数
                let fulfilledCount = 0;     //已完成的数量
                for (const p of proms) {
                    let i = count;
                    count++;
                    MyPromise.resolve(p).then((data) => {
                        fulfilledCount++;
                        results[i] = data;
                        if (fulfilledCount === count) {
                            //当前是最后一个Promise完成了
                            resolve(results);
                        }
                    }, reject);
                }
                if (count === 0) {
                    resolve(results);
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * 等待所有的Promise有结果之后
     * 该方法返回的Promise完成
     * 并且按照顺序将所有结果汇总
     * @param {iterator} proms 
     */
    static allSettled(proms) {
        const ps = [];
        for (const p of proms) {
            ps.push(
                MyPromise.resolve(p).then(value => ({
                    status: FULFILLED,
                    value,
                }), reason => ({
                    status: REJECTED,
                    reason,
                })))
        }
        return MyPromise.all(ps);
    }

    /**
     * 返回的Promise与第一个有结果的一致
     * @param {iterator} proms
     */
    static race(proms) {
        return new MyPromise((resolve, reject) => {
            for (const p of proms) {
                MyPromise.resolve(p).then(resolve, reject);
            }
        })
    }
}








// const pro1 = new MyPromise((resolve, reject) => {
//     resolve(1);
// });

// pro1.then((data) => {
//     console.log(data);
//     return new Promise((resolve) => {
//         resolve(2);
//     })
// }).then((data) => {
//     console.log(data);
// })

// const qw = new MyPromise((resolve, reject) => {
//     resolve(3123);
//     console.log(111);
// })

// qw.then((data) => {
//     console.log(data);
// })

const pro1 = new MyPromise((resolve, reject) => {
    resolve("5654");
});

pro1.then((data) => {
    console.log(data);
    return new Promise((resolve) => {
        resolve(2);
    })
},(reason) =>{
    console.log(reason);
}).then((data) => {
    console.log(data);
})

