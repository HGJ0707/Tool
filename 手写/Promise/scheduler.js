/**
 * JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个
 */
class Scheduler {
    constructor() {
        this._tasks = [];
        this._limit = 2;
    }

    add(promiseCreator) {
        return new Promise((resolve) => {
            this._tasks.push([promiseCreator, resolve]);
            this.next();
        });
    }

    next() {
        while (this._limit > 0 && this._tasks.length) {
            this._limit--;
            const [fn, resolve] = this._tasks.shift();
            fn().then(() => {
                resolve();
                this._limit++;
                this.next();
            });
        }
    }
}

timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));
scheduler = new Scheduler();
addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order));
};
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
