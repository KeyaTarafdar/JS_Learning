function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// Adding anothor function in an existing function------------------------------------------------------------------------
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`${this.username}, ${this.score}`);
};

const user1 = new createUser("Keya", 16);
console.log(user1);
user1.increment();
user1.printMe();

const user2 = new createUser("Priya", 54);
console.log(user2);
user2.increment();
user2.printMe();
