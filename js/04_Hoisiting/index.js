// lets first understand how js executes its code
// javascript executes top to bottom sequentially
// there are 2 phases involved
// 1) Memory creation phase
// 2) Exectuion phase
// First all variables are set to undefined. Then exectuion begins.
// Whenever we encounter a function, a new execution context is created and same process happens recursively

const temp = 20;
// if u put a break point on line 9, we can see in console that memory for temp and a are created. even FNC definition is created
// this process is called memory creation

var a = 90;

function FNC() {
  console.log("Hoisting");
}

FNC();
