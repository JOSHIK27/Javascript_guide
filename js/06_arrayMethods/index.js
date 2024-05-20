const arr = [1, 2, 3, 4, 5];

// iterates over the array
arr.forEach((item) => {
  console.log(item);
});

// returns a new array with values according to the operation we performed
const updatedByTwoMultiples = arr.map((item) => 2 * item);

// filters out the values when expression returns true
const oddNumbers = arr.filter((item) => (item % 2 == 0 ? true : false));

// reduce method takes a callback fun and initial value to accumulator optionally
// callback takes 2 parameters, first one being accumulator, second one is current value over the array
// value returned from the callback is accumulated to accumulator variable and updated for next iteration

let initialVal = 100;
const val = arr.reduce((acc, cur) => acc + cur, initialVal);
console.log(val);
