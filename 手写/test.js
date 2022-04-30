function ajax(url, method, headers, body) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        for (let header of headers) {
            xhr.setRequestHeader(header, headers[header]);
        }
        xhr.onreadystatechange(() => {
            if (xhr.readyState === 4) {
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