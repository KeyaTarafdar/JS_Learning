const User = {
  _email: "k@gmail.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const user1 = Object.create(User); //Factory function
console.log(user1.email);

// '_' => represents private properties
