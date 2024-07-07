class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME IS: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was addes by ${this.username}`);
  }
}

const teacher1 = new Teacher("Keya", "keya@gmail.com", "123");
teacher1.addCourse();
teacher1.logMe();

const user1 = new User("Priya");
user1.logMe();

console.log(teacher1 === user1); //false
console.log(teacher1 instanceof Teacher); //true
console.log(teacher1 instanceof User); //true
console.log(user1 instanceof User); //true
console.log(user1 instanceof Teacher); //false
