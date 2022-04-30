//生成随机数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



//生成随机ID（8位）
Math.random().toString(16).substr(2, 8);



//数组随机排序
var arr = [3, 4, 5, 6, 7, 8, 9];

function RandomSort(a, b) {
    return Math.random() - 0.5;
}
arr.sort(RandomSort);



// console.log(Math.random().toString(16).substr(2, 8));

// 6位随机数
function getRandom() {
    let randomUid = "";
    for (let i = 0; i < 6; i++) {
        randomUid += Math.floor(Math.random() * 10);
    }
    return randomUid;
}
