/*
array.reduce(callback function , initial value)
*/
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myTotal = myNums.reduce((acc, cur) => {
  console.log(`${acc} + ${cur}`);
  return acc + cur; //Explicit return
}, 0);
console.log(myTotal);

myTotal = myNums.reduce((acc, cur) => acc + cur, 0); //Implicit return
console.log(myTotal);

// On Array of Object
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
// Add all thr price
console.log(shoppingCart.reduce((acc, item) => acc + item.price, 0));
