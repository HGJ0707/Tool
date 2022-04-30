/**
 * 使用createDocumentFragment和requestAnimationFrame，
 * 将操作切分为一小段一小段执行
 */

 setTimeout(() => {
    const total = 10000;
    const once = 20;
    const loopCount = Math.ceil(total / once);
    let renderCount = 0;
    let ul = document.querySelector("ul");
    var content = 0;
    function add() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < once; i++) {
            const li = document.createElement("li");
            li.innerText = ++content;    //Math.floor(Math.random() * total)
            fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        renderCount += 1;
        loop();
    }

    function loop() {
        if (loopCount > renderCount) {
            console.log(1);
            window.requestAnimationFrame(add);
        }
    }

    loop();
}, 0);
