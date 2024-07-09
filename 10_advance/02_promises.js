// Creating promises------------------------------------------------------------------------

// Method 1------------------------------------------------------------------------
const promise_1 = new Promise(function (resolve, reject) {
  // Do an async task
  // Db calls, cryptography, network call
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
// Consumimg the created promise
promise_1.then(function () {
  console.log("Promise consumed");
});

// Method 2------------------------------------------------------------------------
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// Method 3 [Passing parameter to then()]------------------------------------------------------------------------
const promise_2 = new Promise(function (resolve, reject) {
  setTimeout(function () {}, 1000);
  resolve({ username: "keya", email: "keya@gmail.com" });
});
promise_2.then(function (user) {
  console.log(user);
});

// Method 4------------------------------------------------------------------------
const promise_3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "keya", password: "123" });
    } else {
      reject("Error: something went wrong!");
    }
  }, 1000);
});
// Promise chaining [upper then() return will pass to lower then()]
promise_3
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //Will be executed is resolved is called
    console.log(username);
  })
  .catch((error) => {
    //Will be executed if reject() is called
    console.log(error);
  })
  .finally(() => {
    //This block will always be executed irrespected to error occured or not
    console.log("The promise is either resolved or rejected");
  });

//   Method 5 => [By using async function()]------------------------------------------------------------------------
const promise_4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "keya", password: "123" });
    } else {
      reject("Error: JS west wrong!");
    }
  }, 1000);
});
async function consumePromise_4() {
  //async keyword is used to declare an asynchronous function
  try {
    //Will be executed if resolved is called
    const response_4 = await promise_4; //await keyword is used to wait for a promise to be resolved before continuing with the execution of the function.
    console.log(response_4);
  } catch (error) {
    //Will be executed if reject() is called
    console.log(error);
  }
}
consumePromise_4();

// Real life example------------------------------------------------------------------------
// By using async function()
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();

// By using then()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/*
Fetch() => The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

### [IMP] A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).

## A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error.
*/
