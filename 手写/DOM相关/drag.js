/**
 * 实现元素拖拽
 * @param {*} elem 
 * 
 * mousedown
 * mousemove
 * mouseup
 */
function drag(elem) {
    var disx,
        disy;
    elem.addEventListener("mousedown", function (e) {
        // var event = e || window.event;
        disx = e.pageX - parseInt(window.getComputedStyle(elem, null).left);
        disy = e.pageY - parseInt(window.getComputedStyle(elem, null).top);

        var handle = function yd(e) {
            var event = e || window.event;
            elem.style.left = event.pageX - disx + "px";
            elem.style.top = event.pageY - disy + "px";
        }

        document.addEventListener("mousemove", handle, false);

        document.addEventListener("mouseup", function (e) {
            document.removeEventListener("mousemove", handle, false);
        }, false)

    }, false)
}


//选取元素
var div = document.getElementsByClassName("demo")[0];

drag(div)