/**
 * on
 * off
 * once
 * emit
 */

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, fn) {
        if (!this.events[type]) {
            this.events[type] = [fn];
        } else {
            this.events[type].push(fn);
        }
    }

    off(type, fn) {
        this.events[type] = this.events[type].filter(item => item !== fn);
    }

    emit(type, ...params) {
        if (this.events[type]) {
            this.events[type].forEach(cb => cb.apply(this, ...params))
        } else {
            throw new Error("this event not register")
        }
    }

    once(type, fn) {
        let cb = (...params) => {
            fn(...params)
            this.off(type, fn);
        }
        this.on(type, cb);
    }
}


