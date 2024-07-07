// Object literals------------------------------------------------------------------------
const user = {
  username: "Keya",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Username: ${this.username}`); //print only the username
    console.log(this); //print whole 'user' object
  },
};

console.log(user);
console.log(user.getUserDetails());
console.log(this); //print global context => an empty object in node, but in brower global object is not empty

// Constructor function------------------------------------------------------------------------
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting=()=>{
    console.log(`Welcome ${this.username}`);
  }
//   return this; //return this is implicitly defined within constructor function
}

const user1 = new User("Keya", 5, false);
console.log(user1);
const user2 = new User("Priya", 8, true);
console.log(user2); 

console.log(user1.greeting());
console.log(user1.constructor); //Reference of itself => [Function: User]
