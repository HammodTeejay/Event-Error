//////////////
//// Difference between Event listener and Error handler

/*
EventListener:
An EventListener is used in web programming to listen for specific events that occur in the browser, such as clicks, key presses, mouse movements, etc. It's a mechanism that allows you to attach functions (event handlers) to DOM elements to execute when a particular event occurs on those elements.
For example, you might attach a click event listener to a button element to execute a function when the button is clicked:
*/

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});

/*
Error Handling:
Error handling is a programming practice where you anticipate and manage errors that might occur during the execution of your code. Errors can be caused by a variety of factors, such as invalid input, network issues, or unexpected behaviors. Proper error handling helps prevent your application from crashing and provides meaningful feedback to users.
In JavaScript, you can use try-catch blocks to handle errors:
*/

try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error);
}

let yourAge = '{"age": 30}';
try {
  let user = JSON.parse(yourAge);
  if (!user.name) throw new Error("Incomplete data: no name");
  console.log(user.name);
} catch (err) {
  console.log("JSON Error:" + err.message);
}

/*
In the context of web development, error handling can involve managing server responses, handling network errors, dealing with asynchronous operations, and more.

In the context of frameworks like Next.js or React, you might encounter errors related to rendering components, data fetching, or interactions with APIs. Proper error handling can involve showing a user-friendly error message, logging the error for debugging purposes, or retrying failed operations.

In summary, event listeners are used to listen for specific events in the browser, while error handling is a practice to manage and handle errors that can occur during code execution. Both concepts are essential in creating robust and user-friendly web applications.
*/
