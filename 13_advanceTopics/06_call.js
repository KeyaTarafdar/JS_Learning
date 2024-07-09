/*
## call() function passes current execution context to another function.
## It can be used to invoke (call) a method with an owner object as an argument (parameter). This allows borrowing methods from other objects, executing them within a different context, overriding the default value, and passing arguments.
*/

function setUserName(username) {
  this.username = username;
  console.log("Method called");
}

function createUser(username, email, password) {
  setUserName.call(this,username);
  // setUserName(username)
  this.email = email;
  this.password = password;
}

const user1 = new createUser("Keya", "keya@gmail.com", "123");
console.log(user1);
