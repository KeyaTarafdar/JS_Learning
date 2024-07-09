// Number declaration-----------------------------
//Method 1
const score = 400;
console.log(score);
//Method 2
const balance = new Number(100.5654821);
console.log(balance);

// Number methods-----------------------------------
console.log(balance.toString()); //convert into string
console.log(balance.toFixed(2)); //print the balance upto 2 decimal point
console.log(balance.toPrecision(4)); //print 4 digit precision value of balance in the form of string

const num = 1000000;
console.log(num.toLocaleString()); //add , in the num for better understanding [1,00,00,000]
console.log(num.toLocaleString("en-IN")); //Indian format

console.log(Number.MIN_VALUE); //min value
console.log(Number.MAX_VALUE); //max value
console.log(Number.MAX_SAFE_INTEGER); //how many +ve values we can store
console.log(Number.MIN_SAFE_INTEGER); //how many -ve values we can store

//Math Library-------------------------------------------
console.log(Math.abs(-4)); //make -ve value to +ve
console.log(Math.round(4.6)); //round of value
console.log(Math.floor(4.3)); //floor vale
console.log(Math.ceil(6.2)); //ceil value
console.log(Math.max(5, 9, 20, -6, 1)); //max value
console.log(Math.min(5, 9, 20, -6, 1)); //min value

console.log(Math.random()); // generate random value between 0 & 1
const lb = 15, ub = 17;
console.log(Math.floor(Math.random() * (ub - lb + 1)) + lb); //generate number in between ub & lb
