// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var outputArray = [];
  var keys = [];

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  }

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
    keys = Object.keys(obj);
    keys.forEach(function(key) {
      var val = obj[key];
      var outputKey = `"${key}":`;

      if (typeof val === 'string') {
        outputArray.push(outputKey + `"${val}"`);
      } else if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
        outputArray.push(outputKey + val);
      } else if (typeof val === undefined || typeof val === 'function') {
        outputArray.push('');
      } else if (val instanceof Object) {
        outputArray.push(outputKey + stringifyJSON(val));
      }
    });
    return `{${outputArray}}`;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  }
};
