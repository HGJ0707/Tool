Element.prototype.insertAfter = function (newNode, elen) {
    var nextElen = elen.nextElenmentSibling;
    if (nextElen == null) {
        this.appendChild(newNode);
    } else {
        this.insertBefore(newNode, nextElen);
    }
}

parentNode.insertAfter(newNode, elen);