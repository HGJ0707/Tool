//使用闭包实现-----每隔一秒-----打印 1,2,3,4,5

// for(var i = 1; i <= 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000);
//     })(i)
// }



//使用闭包实现-----一秒后同时-----打印 1,2,3,4,5
for (var i = 1; i <= 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    })(i)
}