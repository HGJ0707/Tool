function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        var image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = () => {
            reject(new Error('Could not load the image at' + url));
        }
        image.src = url;
    });
}