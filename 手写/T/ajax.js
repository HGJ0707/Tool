function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";

    //格式化数据
    var data = formatData(options.data);

    //兼容性
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXobject('Microsoft.XMLHTTP');
    }

    if (options.type == "GET") {
        options.url = options.url + "?" + data;
    } else if (options.type == "POST") {
        //设置表单提交时的内容类型，Content-type数据请求的格式
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }

    xhr.open(options.type, options.url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                options.success(JSON.parse(xhr.responseText));
            }
            else {
                options.error(xhr.status);
            }
        }
    }
    //POST请求要发送数据
    xhr.send(options.type == 'POST' ? data : '');

}

//格式化请求参数
function formatData(data) {
    var arr = [];
    for (var name in data) {
        arr.push(name + "=" + data[name]);
    }
    return arr.join("&");
}



//测试
// ajax({
//     url: "https://api.hyfarsight.com/test/testRequest/imgList",
//     type: 'GET',
//     data: {
//          username: 'username',
//          password: 'password'
//     },
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (err) {
//         console.log(err);
//     }
// })




function ajax(url, method, body, headers) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        for (let header in headers) {
            xhr.setRequestHeader(header, headers[header]);
        }
        xhr.onreadystatechange(() => {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr);
                }
            }
        })
        xhr.send(body);
    })
}