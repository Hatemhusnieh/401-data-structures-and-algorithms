'use strict';
function validateBrackets(string) {
  const arr = [];
  const open = ['(', '{', '['];
  const closed = [')', '}', ']'];
  for (let i = 0; i < string.length; i++) {
    if (open.includes(string[i])) {
      arr.push(string[i]);
    }
    if (closed.includes(string[i])) {
      const temp = open[closed.indexOf(string[i])];
      if (arr[arr.length - 1] === temp) {
        arr.splice(-1, 1);
      } else {
        arr.push(string[i]);
      }
    }
  }
  return arr.length === 0 ? true : false;
}

module.exports = validateBrackets;