//Negate-----------
let value = 3;
let negValue = -value;
console.log(negValue); //-3

// Arithmatic operator---------
console.log(2 + 2);
console.log(2 - 2);
console.log(2 / 2);
console.log(2 * 2);
console.log(2 ** 2); //Power
console.log(2 % 2);

// String Concationation----------
let str1 = "hello";
let str2 = " keya";
let str3 = str1 + str2; //string concatination
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122 [as 1st component is string]
console.log(1 + 2 + "2"); //32 [as 1st component is Number]

console.log(+true); //1
console.log(+""); //0

// Increament operator-----------
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let counter = 100;
counter++; //++counter
console.log(counter);

// ##################### Comparison operator #######################
// [In the case of comparison check between a string and number => Js converts the string to the number & the perform the operation]
console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true

console.log("2" > 1); //true [in this case JS will convert "2" to 2 => JS will convert string to number]
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false [Equality check doesn't convert null to 0]
console.log(null >= 0); //true
// **[comparison operator(>,<,>=,<=) convert null value to 0]

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// Strict comparison------------------ [check both value & data type]
console.log("2" === 2); //false

// Symbol----------[It makes every value unique]
const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1 == id2); //false
