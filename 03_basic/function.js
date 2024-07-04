// Function declaration---------------------------------------------------
// Method 1
console.log(addOne(6)); //7
function addOne(num) {
  return num + 1;
}
console.log(addOne(5)); //6

// Method 2
// console.log(addTwo(6)); // error [Cannot access 'addTwo' before initialization]
const addTwo = function (num) {
  return num + 2;
};
addTwo(5);

// num1,num2 => called parameters
function add(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}
// 3,4, "4", null => called arguments
add(3, 4); //7
add(3, "4"); //34
add(3, null); //3

function loginUserMessage(username) {
  if (username === undefined) {
    // for avoiding undefined condition [we also can write if(!username)]
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Keya")); //Keya just logged in
console.log(loginUserMessage()); //undefined just logged in [undefined condition]

// For avoiding undefined condition [Method 2]
function loginUserMessage1(username = "A user") {
  // Passing default value
  if (username === undefined) {
    // for avoiding undefined condition [we also can write if(!username)]
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage1("Keya")); //Keya just logged in
console.log(loginUserMessage1()); //A user just logged in

// When we don't know the number of arguments--------------------------------------
// REST operator (...)
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(100, 200, 300)); //return an array => [ 100, 200, 300 ]

function calculateCartPrice(val1, val2, ...num1) {
  //skip first 2 values
  return num1;
}
console.log(calculateCartPrice(100, 200, 300, 400, 500)); //[ 300, 400, 500 ]

// Passing object in the function-------------------------------------------
const user = {
  username: "Keya",
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
handleObject(user); //Passing by variable
handleObject({
  //passing direct object
  username: "priya",
  price: 299,
});

// Passing array as a parameter---------------------------------------------
const myArray = [100, 300, 400, 600];
function handleArray(anyArray) {
  return anyArray[2];
}
console.log(handleArray(myArray)); //Passing by variable
console.log(handleArray([1, 3, 4, 5])); //passing direct array
