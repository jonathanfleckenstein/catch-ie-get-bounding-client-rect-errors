var element = document.createElement('div');

var getBoundingClientRect = element.__proto__.__proto__.getBoundingClientRect;

element.__proto__.__proto__.getBoundingClientRect = function () {
  try {
    return getBoundingClientRect.call(this)
  } catch(e) {}
}
