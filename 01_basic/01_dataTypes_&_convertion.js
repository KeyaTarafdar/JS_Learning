"use strict"; //treat all JS code as newer version => No need to use it now

// alert(3 + 3); //Error as we are using Nodejs, not browser

console.log(typeof undefined); //undefined
console.log(typeof null); //object

let score = undefined;
console.log(typeof score); //undefined

let valueInNumber = String(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //undefined

/*
Conversion to Number [Number()]------------------------------------------------------------------------

null-------> 0
undefined------> NaN
string--------> NaN
true---------> 1, false--------> 0
*/

/*
Conversion to Boolean [Boolean()]------------------------------------------------------------------------

null-------> false
undefined------> false
string--------> true, Empty string-------> false
1---------> true, 0--------> false
*/

/*
Conversion to String [String()]------------------------------------------------------------------------

null-------> string
undefined------> string
Number------> string
*/