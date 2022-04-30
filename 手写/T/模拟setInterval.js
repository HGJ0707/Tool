//setTimeout模拟setInterval
//方法1
var timer = null;
function interval(func, wait) {
    let interv = function () {
        func.call(null);
        timer = setTimeout(interv, wait);
    };
    timer = setTimeout(interv, wait);
}

function con() {
    console.log(a++);
}

// interval(con, 1000);


//方法2
// setTimeout(function() {
//     console.log(a++);
//     setTimeout(arguments.callee, 1000);
// },1000);

