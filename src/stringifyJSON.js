// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var outputArray = [];
  if (Array.isArray(obj)) {
    if (obj.length < 1) {
      return '[]';
    } else {
      obj.forEach(function(value) {
        outputArray.push(stringifyJSON(value));
      });
    }
    return `[${outputArray}]`;
  } else if (obj instanceof Object) {

  } else if (typeof obj === 'string') {
    return `'${obj}'`;
  } else {
    return '' + obj;
  }
};
