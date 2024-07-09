class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME IS: ${this.username}`);
  }

  static createId() {
    //static prevents the access to the method by object
    return `123`;
  }
}
console.log(User.createId()); //static method access approach

const user1 = new User("Keya");

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teacher1 = new Teacher("Priya", "priya@gmail.com");
// console.log(teacher1.createId());
