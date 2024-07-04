const user = {
  username: "Keya",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // Print current context of user object
  },
};

user.welcomeMessage(); //Keya, welcome to website
user.username="Priya"
user.welcomeMessage(); //Priya, welcome to website

console.log(this); // empty object [In node environment global object = > empty]


function f1() {
  console.log(this); //print so many things
}
f1(); 

function f2() {
  let username = "Keya";
  console.log(this.username); //undefined [We can't use this with function variable, can use only with object variable]
}
f2();

// Arrow function
const f3 = () => {
  let username = "Keya";
  console.log(this); //Print empty object
};
f3();

/*{} => return have to be mentioned, () => return need not to be mentioned */

// Explicit return [{}]
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(3,4));

// Implicit return [()]
const add1=(num1,num2)=> (num1+num2)
console.log(add1(3,4));

// To return an object we have to wrap it within parenthesis
const fun = () => ({username:"Keya"})
console.log(fun());

