// Old Syntax------------------------------------------------------------------------
const User = {
  name: "Keya",
  email: "keya@gmail.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  inAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport, //TASupport inharites properties of TeachingSupport object
};

Teacher.__proto__ = User; //Teacher inharites properties of User

// Modern Syntax------------------------------------------------------------------------
Object.setPrototypeOf(TeachingSupport, Teacher); //TeachingSupport inharites properties of Teacher

// Task: Want to know the true length of any string (counting the length without space)------------------------------------------------------------------------
let myName = "Keya           ";
String.prototype.trueLength = function (str) {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};
myName.trueLength();
"gvyg ".trueLength();
