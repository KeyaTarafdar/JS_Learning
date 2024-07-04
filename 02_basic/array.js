/*
# Array in JS is resizable
# Arrays is JS are not associative
# Arrays are zero-indexed
# JS array-copy operations create Shallow copies
    [Shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was created]
    [Deep copy: A copy whose properties do not share the same refernces as those of the source object]

*/

// Array declaration------------------------------------------
// Method 1
const arr = [1, 2, 3, 4, 5, true, "keya"];
console.log(arr);

// Method 2
const arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr1);

// Array methods----------------------------------------------

// PUSH => [add element in last position]
arr1.push(6);
console.log(arr1);

// POP => [delete last element]
arr1.pop();
console.log(arr1);

// UNSHIFT => [add element at first position]
arr1.unshift(0);
console.log(arr1);

// SHIFT => [delete first element]
arr1.shift();
console.log(arr1);

// INCLUDES & INDEXOF
console.log(arr1.includes(5));
console.log(arr1.indexOf(2)); //if element doesn't exist=> return -1

// JOIN => [add all the elemnts of an array into a string, seperated by the specifies seperator]
const newArr = arr1.join();
console.log(newArr);
console.log(typeof newArr); //string

// SLICE => [returns a section of array & last arg in excluded]
const arr3 = arr1.slice(1, 3);
console.log(arr1); //[ 1, 2, 3, 4, 5 ]
console.log(arr3); //[ 2, 3 ]

// SPLICE => [returns a section of array & last arg is included]
const arr4 = arr1.splice(1, 3);
console.log(arr1); //[ 1, 5 ]
console.log(arr4); //[ 2, 3, 4 ]

//Merge to arrays-------------------------------------------------
// Method 1
// PUSH => [Appends new elements to the end of an array, and returns the new length of the array.]
const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); //here dc_heroes array is a single elment in the marbel_heroes array
console.log(marvel_heroes[3]); //It will print the dc_heroes array
console.log(marvel_heroes[3][1]); //flash

// Method 2
// CONCAT => [Combines two or more arrays. This method returns a new array without modifying any existing arrays.]
const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

// Method 3
// SPREAD OPERATOR
const all_heroes1 = [...marvel_heroes, ...dc_heroes];
console.log(all_heroes1);


// Spreading complex array------------------------------------------------
// FLAT => [Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.]
const complex_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const simple_array = complex_array.flat(Infinity);
console.log(simple_array);

// ISARRAY => [check arg is any array or not]
console.log(Array.isArray("keya"));

// String to array
// FROM => [Creates an array from an iterable object.]
console.log(Array.from("keya")); //[ 'k', 'e', 'y', 'a' ]
console.log(Array.from({name:"keya"})); // ## Important case ## => return an empty array

// OF => [Returns a new array from a set of elements.]
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]