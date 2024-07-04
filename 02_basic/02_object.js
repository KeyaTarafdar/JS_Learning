// Object literals--------------------------------------------------------------------

const mySym = Symbol("key1");

const jsUser = {
  //Non-singleton object
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

// Singleton object--------------------------------------------------------
const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Priya";
console.log(tinderUser);

// Access all the keys of an object
// KEYS => return all keys in the form of an array
console.log(Object.keys(tinderUser));

// Access all the value of an object
// VALUES => return all values in the form of an array
console.log(Object.values(tinderUser));

// Access all the entries of an object
// ENTRIES => return all entries in the form of an array of array [[key,value],[key,value],...]
console.log(Object.entries(tinderUser));

// HASOWNPROPERTY => check that specified property exists in the object or not
console.log(tinderUser.hasOwnProperty("name")); //true
console.log(tinderUser.hasOwnProperty("age")); //false

// Object chaining
const regularUse = {
  email: "some@gmail.com",
  fullname: {
    userfulname: {
      firstname: "Keya",
      lastname: "Tarafdar",
    },
  },
};
console.log(regularUse.fullname);
console.log(regularUse.fullname.userfulname.firstname);

// Merging Object---------------------------------------------------------
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
// Method 1
const obj3 = { obj1, obj2 }; //## Problem: Object within another object
console.log(obj3);

// Method 2
// ASSIGN [assign(target,source)] => target={} & obj1,obj2= source
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// Method 3
// SPREAD OPERATOR
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

// Object when data comes from database => In the form of array)---------------------------------------
const userDB = [
  {
    id: 1,
    name: "user1",
  },
  {
    id: 2,
    name: "user2",
  },
  {
    id: 3,
    name: "user3",
  },
];
console.log(userDB[1].name);

// Object destructuring-------------------------------------------
const course = {
  coursename: "js",
  price: "999",
  courseInstructor: "hitesh",
};
// Another access method in replace of [course.courceInstructor]
// Method 1
const { courseInstructor } = course;
console.log(courseInstructor);
// Method 2
const { courseInstructor:instructor } = course;
console.log(instructor);
