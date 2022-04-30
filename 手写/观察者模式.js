//被观察者
class subject {
    constructor(name) {
        this.name = name;
        this.observers = [];
        this.state = 'xxx';
    }

    attach(observer) {
        this.observers.push(observer);
    }

    setState(newState) {
        this.state = newState;
        this.observers.forEach(key => {
            key.update(newState);
        })
    }
}


//订阅者
class observer {
    constructor(name) {
        this.name = name;
    }
    update(newState) {
        console.log(`${this.name}say:${newState}`);
    }
}






// 被观察者 灯
let sub = new Subject('灯')
let mm = new Observer('小明')
let jj = new Observer('小健')

// 订阅 观察者
sub.attach(mm)
sub.attach(jj)

sub.setState('灯亮了来电了')