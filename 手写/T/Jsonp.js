function jsonp(options) {
    var url = options.url;
    var type = options.type;
    var dataType = options.dataType;
    var targetProtocol = "";        //目标协议
    var targetHost = "";            //目标域名 
    //跨域
    if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
        var targetUrl = new URL(url);           //解析url
        targetProtocol = targetUrl.protocol;
        targetHost = targetUrl.host;
        //同源
    } else {
        targetProtocol = location.protocol;
        targetHost = location.host;
    }

    if (dataType == "jsonp") {
        if (location.protocol == targetProtocol && location.host == targetHost) {
            //同源操作
        } else {
            var callback = "cb" + Math.floor(Math.random() * 1000000);
            window[callback] = options.success;
            var script = document.createElement("script");
            if (url.indexOf("?") > 0) {
                script.src = url + "&callback=" + callback;
            } else {
                script.src = url + "?callback=" + callback;
            }
            script.id = callback;
            document.head.appendChild(script);

        }
    }
}

jsonp({
    url: "http://developer.duyiedu.com/edu/testJsonp",
    type: "get",
    dataType: "jsonp",
    success: function (data) {
        console.log(data);
    }
})



const jsonp = function (url, data) {
    return new Promise((resolve, reject) => {
        let dataString = url.indexOf('?') == -1 ? '?' : '';
        let callbackName = `jsonCB_${Date.now()}`;
        url += `${dataString}callback=${callbackName}`;
        if (data) {
            for (let k in data) {
                url += `${k}=${data[k]}`;
            }
        }
        let jsNode = document.createElement('script');
        jsNode.src = url;
        window[callbackName] = result => {
            delete window[callbackName];
            document.body.removeChild(jsNode);
            if (result) {
                resolve(result);
            } else {
                reject('no data');
            }
        }
        jsNode.addEventListener('error', () => {
            delete window[callbackName];
            document.body.removeChild(jsNode);
            reject('js资源加载失败');
        }, false)
        document.body.appendChild(jsNode);
    })
}


jsonp('http://192.168.0.103:8081/jsonp', {
    a: 1,
    b: 'heiheihei'
})
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.error(err)
    })