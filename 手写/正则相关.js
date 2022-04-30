//实现正则切分千分位（10000 => 10,000）



//无小数点
let num1 = '321434322222'
// num1.replace(/(\d)(?=(\d{3})+$)/g,'$1,');
// console.log(num1.replace(/(\d)(?=(\d{3})+$)/g,'$1,'));



//有小数点
let num2 = '3422432423223432423'

console.log(num2.replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));

/(?=.*[0-9])^[0-9A-Za-z]{6,12}$/g


//验证邮箱的正则表达式
function isAvailableEmail(sEmail) {
    var reg = /^([\w+\.])+@\w+([.]\w+)+$/
    return reg.test(sEmail)
}


var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";

regex.test(string);

console.log(RegExp.$1); // "2017"
console.log(RegExp.$2); // "06"
console.log(RegExp.$3); // "12"



/^((0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])$/