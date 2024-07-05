/*
# Map returns values
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 10); //Implicit return
console.log(newNums);

// Chaining------------------------------------------------------------------------
const newNums1 = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num % 3 === 0);
console.log(newNums1);