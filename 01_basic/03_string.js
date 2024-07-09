// String declaration----------------------------------------------
// 1. Method 1
let str1 = "Keya";
console.log(str1);
// 2. Method 2
let str2 = new String("Keya"); //[It is an object(key-value pair)]
// 0:K
// 1:e
// 2:y
// 3:a
console.log(str2);
console.log(str2[0]); //Want to access value of the key 0
console.log(str2.__proto__); //{}=> empty object

// String concatination--------------------------------------------
let name = "Keya";
let count = 5;
// 1. By using +
console.log(name + count);
// 2. By using Backticks
console.log(`Hello my name is ${name} and my repo count is ${count}`);
//3. Mathod 3
console.log(name.concat(count));

// String functions------------------------------------------------
console.log(name.length); //Return length
console.log(name.toUpperCase()); //Return in upercase
console.log(name.toLowerCase()); //Return in lowercase
console.log(name.charAt(2)); //Return char at index 2
console.log(name.indexOf("e")); //Return index of 'e'

// BOLD
console.log(name.bold()); //add <b></b> tag

//SUBSTRING
let newString = name.substring(0, 2); //create a substring form index 0 to 1 [last index is excluded]
console.log(newString); //Ke [usbstring doesn't allow -ve value]

//SLICE
let newString1 = name.slice(-4, 1); //[In case of -ve value, it starts from end]
console.log(newString1);

// TRIM
let newString2 = "  Keya  ";
console.log(newString2);
console.log(newString2.trim()); //Remove starting & ending space

//REPLACE
const url = "https://www.google.com/";
console.log(url.replace(".com", ".in")); //https://www.google.in/  [replace(what,with which)]

// INCLUDES
console.log(url.includes("google")); //true

//SPLIT
let str3 = "Keya_Tarafdar_21CSE16_4th";
console.log(str3.split("_")); //Convert the string into array split by "_"
