// @ts-ignore
export const reset = function reset(constructor: unknown) {
  // @ts-ignore
  if (!(constructor.name in reset)) {
    var iframe = document.createElement('iframe');
    iframe.src = 'about:blank';
    document.body.appendChild(iframe);
    // @ts-ignore
    reset[constructor.name] = iframe.contentWindow[constructor.name];
    document.body.removeChild(iframe);
  } // @ts-ignore
  return reset[constructor.name];
}
