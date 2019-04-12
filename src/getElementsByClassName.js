// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsContainingClass = [];

  var elementContainingClassName = function(element) {
    if (element.classList && element.classList.contains(className)) {
      elementsContainingClass.push(element);
    }
    if (element.childNodes) {
      element.childNodes.forEach(function(node) {
        elementContainingClassName(node);
      });
    }
  };
  elementContainingClassName(document.body);

  return elementsContainingClass;
};
