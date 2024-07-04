// Object literals--------------------------------------------------------------------

const mySym = Symbol("key1");

const jsUser = {
  "full name": "Keya tarafdar", //We cannot access it by ., i.e. jsUser.full name [only method is jsUser["full name"]]
  name: "Keya",
  age: 21,
  location: "Gocharan",
  email: "keya.tarafdar2003@gmail.com",
  inLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  [mySym]: "mykey1", //using symbol in the object
};

// Access methods
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); //Only access method
console.log(jsUser[mySym]); //Access symbol

// Change value of a field of an object-----------------------------------------------
console.log(jsUser.age);
jsUser.age = 22;
console.log(jsUser.age);

// FREEZE => Object will be freeze... value will be updated
// Object.freeze(jsUser);
jsUser.age = 21;
console.log(jsUser.age);

// Declaring function within an object------------------------------------------------
jsUser.greeting = function () {
  console.log("Hello JS user");
};
jsUser.greeting1 = function () {
    console.log(`Hello JS user , ${this.name}`); //'this' is used for referencing the same object
};
console.log(jsUser.greeting); //[Function (anonymous)]
console.log(jsUser.greeting());
console.log(jsUser.greeting1());
