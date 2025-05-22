async function complexEventLoopTask() {
  console.log("Start");

  const recursivePromise = (depth) => {
    return new Promise((resolve) => {
      if (depth === 0) {
        resolve("Recursion End");
        return;
      }

      queueMicrotask(() => {
        console.log(`Microtask Depth: ${depth}`);
        resolve(recursivePromise(depth - 1));
      });
    });
  };

  const mainPromise = recursivePromise(3);

  mainPromise.then((result) => {
    console.log(result);

    setTimeout(() => {
      console.log("Macro Task 1");

      Promise.resolve().then(() => {
        console.log("Promise in Macro Task");
      });

      setTimeout(() => {
        console.log("Macro Task 2");
      }, 0);
    }, 0);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Awaited Timeout");
      resolve();
    }, 0);
  });

  console.log("End");
}

complexEventLoopTask();

console.log("Global");

// Start, Global, Microtask Depth: 3, Microtask Depth: 2, Microtask Depth: 1,
// Recursion End, Awaited Timeout, End, Macro Task 1, Promise in Macro Task, Macro Task 2
