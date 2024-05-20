// immediately invoked function expressions are helpful to avoid global scope pollution, name collisions, data privacy
// say we have 2 script tags are 2 variables with same variable. They override each other. IIFE helps in clearing memory once function is executed

(function IFFE() {
  var a = "From IIFE";
})();

(function IFFE() {
  var a = "From IIFE";
})();

var a = 20;
var b = 90;

// if there is potential of using same variable name twice, then we should go for iife and avoid global scope pollution
