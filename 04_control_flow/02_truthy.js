/*
## Falsy Value------------------------------------------------------------------------
1. false
2. 0
3. -0
4. BigInt 0n
5. ""
6. null
7. undefined
8. NaN

## Truthy value: All values other thak falsy values are truthy values
1. "0"
2. "false"
3. " "
4. []
5. {}
6. function(){}   etc.

## Important comparison
1. false == 0 => true
2. false == "" => true
3. 0 == "" => true
*/

// Empty array check------------------------------------------------------------------------
const arr = [];
if (arr.length === 0) {
  console.log("Empty array");
}

// Empty object check------------------------------------------------------------------------
const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Empty object");
}

// Nullish Coalescing Operator (??): null undefined [used to avoid assign null or undefined value to the variable]------------------------------------------------------------------------
let val1, val2, val3, val4;

val1 = 5 ?? 10; //1st value will be assigned
val2 = null ?? 10;
val3 = undefined ?? 15;
val4 = null ?? 10 ?? 20; //1st value will be assigned to val4

console.log(val1); //5
console.log(val2); //10
console.log(val3); //15
console.log(val4); //10

// Terniary Operator (condition ? true : false)------------------------------------------------------------------------
const iceTeaPrice = 70;
iceTeaPrice >= 80 ? console.log(iceTeaPrice) : console.log("less than 80");
