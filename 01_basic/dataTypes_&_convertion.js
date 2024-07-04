"use strict"; //treat all JS code as newer version

// alert(3 + 3); //Error as we are using Nodejs, not browser

console.log(typeof undefined); //undefined
 console.log(typeof null); //object

let score = undefined;
// console.log(typeof score);
let valueInNumber=String(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
Conversion to Number [Number()]

null-------> 0
undefined------> NaN
string--------> NaN
true---------> 1, False--------> 0
*/

/*
Conversion to Boolean [Boolean()]

null-------> False
undefined------> False
string--------> true, Empty string-------> false
1---------> true, 0--------> false
*/

/*
Conversion to String [String()]

null-------> string
undefined------> string
Number------> string
*/

/*
Name - keya tarafdar
*/