// "use strict";

// mistake 1

var temp = 5;
// tmp = 1;

console.log(temp);

// mistake 2

a = 5;
console.log(window.a);

// mistake 3

delete Object.prototype;

// mistake 4

function solve(a, a, b) {
  return [a, a, b];
}
console.log(solve(1, 2, 3));

// mistake 5

const primitive = 100;
primitive.prop = "Joshik";
console.log(primitive.prop);

// mistake 6

function sum(a, b) {
  a = 10;
  return [a + b, arguments[0] + arguments[1]];
}
sum();
