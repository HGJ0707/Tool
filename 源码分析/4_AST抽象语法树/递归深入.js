// 1  1  2  3  5  ……

//会爆栈
function fibo1(n) {
    if(n == 1) return 1;
    if(n == 2) return 1;
    return fibo1(n - 1) + fibo1(n - 2);
}

// console.log(fibo1(10));



//利用缓存省去重复的计算
var cache = {};
function fibo2(n) {
    if(cache.hasOwnProperty(n)) {
        // console.log(n)
        return cache[n];
    }
    var ca = n == 0 || n == 1 ? 1 : fibo2(n - 1) + fibo2(n - 2);
    cache[n] = ca;
    return ca;
}

console.log(fibo2(100));
// console.log(fibo2(100),cache);