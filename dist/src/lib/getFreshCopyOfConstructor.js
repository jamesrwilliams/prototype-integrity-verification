export var getFreshCopyOfConstructor = function (constructorName) {
    var iframeElement = document.createElement('iframe');
    iframeElement.src = 'about:blank';
    document.body.appendChild(iframeElement);
    if (iframeElement.contentWindow) {
        var instance = iframeElement.contentWindow[0];
        console.log(instance);
    }
    console.log('Heartbeat');
    document.body.removeChild(iframeElement);
};
