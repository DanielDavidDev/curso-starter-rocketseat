"use strict";

// function soma(a=2, b=4) {
//   return a + b;
// }
var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return a + b;
};

console.log(soma(1));
console.log(soma());
