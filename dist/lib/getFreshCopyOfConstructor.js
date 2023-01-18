"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFreshCopyOfConstructor = void 0;
const getFreshCopyOfConstructor = (constructorName) => {
    const iframeElement = document.createElement('iframe');
    iframeElement.src = 'about:blank';
    document.body.appendChild(iframeElement);
    if (iframeElement.contentWindow) {
        let instance = iframeElement.contentWindow[0];
        console.log(instance);
    }
    console.log('Heartbeat');
    document.body.removeChild(iframeElement);
};
exports.getFreshCopyOfConstructor = getFreshCopyOfConstructor;
