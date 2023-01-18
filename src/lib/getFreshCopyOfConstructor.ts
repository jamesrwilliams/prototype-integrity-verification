export const getFreshCopyOfConstructor = (constructorName: string, functionName: string) => {
  const iframeElement = document.createElement('iframe');
        iframeElement.src = 'about:blank';

  document.body.appendChild(iframeElement);

  if(!iframeElement.contentWindow) return false;

  // @ts-ignore
  const instance = iframeElement.contentWindow[constructorName].prototype[functionName];
  document.body.removeChild(iframeElement);
  console.log(instance);
  console.log(instance.prototype);
  return instance;
}
