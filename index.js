// Only patch in IE.
if( (navigator.userAgent.indexOf('MSIE') !== -1
  || navigator.appVersion.indexOf('Trident/') > 0)) {
  var HTMLElement = Object.getPrototypeOf(Object.getPrototypeOf(document.createElement('div')))
  var getBoundingClientRect = HTMLElement.getBoundingClientRect;

  HTMLElement.getBoundingClientRect = function () {
    try {
      return getBoundingClientRect.call(this);
    } catch(e) {}
  }
}
