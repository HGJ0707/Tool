class Scheduler {
    constructor() {
        this.cache = [] // 缓存任务数据
        this.task = [] // 当前执行任务队列
        this._max = 2 // 最大并发任务
    }
    add(promiseCreator) {
        return new Promise(resolve => {
            promiseCreator.resolve = resolve; // 保存当前promise的状态
            if (this.task.length < this._max) { // 最大并发任务处理
                this.runWork(promiseCreator)
            } else {
                this.cache.push(promiseCreator)
            }
        })
    }
    runWork(promiseCreator) {
        this.task.push(promiseCreator)
        promiseCreator().then(() => {
            promiseCreator.resolve()
            this.task.splice(this.task.indexOf(promiseCreator), 1) // 当前任务执行完成 清除task中的数据
            if (this.cache.length) {
                this.runWork(this.cache.shift()) // 根据执行的缓存顺序执行，保证执行的有序性
            }
        })
    }
}
const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})
const scheduler = new Scheduler()
const addTask = (time, order) => {
    const result = scheduler.add(() => timeout(time))
    result.then(() => console.log(order + 'order'))
}
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// addTask(400, '4');
// addTask(400, '4');
// addTask(400, '4');
// addTask(400, '4');