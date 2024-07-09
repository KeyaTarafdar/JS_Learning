class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() { //getter for password
    return this.password.toUpperCase();
  }

  set password(value) { //setter for password
    this.password = value.toUpperCase();
  }
}

const user1 = new User("keya@gmail.com", "123");
console.log(user1.password);

/*
In this above case we will get the error => [Maximum call stack size exceeded]

## As constructor is setting the values & setter method is also setting the value

## So a race condition is arise
*/

// Solution
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    //getter
    return this._password.toUpperCase();
  }

  set password(value) {
    //setter
    this._password = value; //password is overwritten by setter method
  }
}

const user2 = new User("keya@gmail.com", "hgf");
console.log(user1.password);
