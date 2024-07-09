// Why we cant change PI value in JS------------------------------------------------------------------------
// Object.getOwnPropertyDescriptor(Object name, 'Property of the specefied object')

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
// O/p-------
// value: 3.141592653589793,
//   writable: true,
//   enumerable: false,
//   configurable: false

// As all this values are false => that's why we can't change the value of it

const myNewObj = {
  name: "Keya",
  price: 200,
  isAvailable: true,

  fun: function () {
    console.log("Fun()");
  },
};

// for (let [key,value] of myNewObj) {
//     console.log(`${key} : ${value}`); // myNewObj is not iterable
// } // O/p => [error]

// The Object.entries()------------------------------------------------------------------------
// It is a static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
for (let [key, value] of Object.entries(myNewObj)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

Object.defineProperty(myNewObj, "name", {
  writable: false,
  enumerable: true, //iteratable property of name will be false
}); //set the descriptor properties

for (let [key, value] of Object.entries(myNewObj)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`); //name will not be printed
  }
}

console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

myNewObj.name = "Priya"; //Name will not be overwritten
console.log(myNewObj.name); //O/p => Keya
