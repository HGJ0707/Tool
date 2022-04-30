//找出字符串中最长连续字符长度和这个字符

var arr ="aaaaaaccccccccccbbbbbbbbbbbbbbbddd";

var i = 0;
var j = 1;
var maxReapet = 0;
var maxReapetChar = '';
while(i <= arr.length - 1) {
    if(arr[i] != arr[j]) {
        if(j - i > maxReapet) {
            maxReapet = j - i;
            maxReapetChar = arr[i];
        }
        i = j;
    }
    j++;
}

console.log(maxReapet, maxReapetChar);