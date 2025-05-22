console.log("Start");

const promise1 = Promise.resolve().then(() => {
  console.log("Promise 1");
  return "Result 1";
});

const promise2 = promise1.then((result) => {
  console.log("Promise 2 with", result);
  throw new Error("Custom Error");
});

const promise3 = promise2.catch((error) => {
  console.log("Caught Error:", error.message);
  return "Recovered Value";
});

promise3.then((finalResult) => {
  console.log("Final Promise:", finalResult);
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// Start, End, Promise 1, Promise 2 with Result 1, Caught Error: Custom Error, Final Promise: Recovered Value, Timeout
