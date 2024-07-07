class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    //method
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("Keya", "keya@gmail.com", "123");
console.log(user1.encryptPassword());

// Behind the scene------------------------------------------------------------------------

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User1.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User1.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user2 = new User1("Keya", "keya@gmail.com", "123");
console.log(user2.encryptPassword());
console.log(user2.changeUsername());
