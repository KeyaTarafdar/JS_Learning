## Promises
- In JavaScript, a Promise is a result object that is used to handle asynchronous operations.
- A Promise is created when an asynchronous operation is initiated, such as an AJAX request or a timer. The Promise is then used to handle the outcome of that operation, whether it's a success or a failure.
- A Promise can be in one of three states:
    1. Pending: The initial state, where the operation has not started yet.
    2. Fulfilled: The operation has completed successfully, and the Promise has a value.
    3. Rejected: The operation has failed, and the Promise has a reason for the failure.
- Handling a Promise: We can handle a Promise using the following methods:
    1. then(): Attaches a callback function to handle the fulfilled value.
    2. catch(): Attaches a callback function to handle the rejected reason.
    3. finally(): Attaches a callback function to handle the outcome, regardless of whether it's fulfilled or rejected.