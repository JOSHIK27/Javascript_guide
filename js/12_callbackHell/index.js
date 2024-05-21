const timerId = setTimeout(() => {
  console.log("After 1000ms");
}, 1000);

// setTimeOut returns a timerId which helps in clearing the timer further by passing timerId to clearTimeOut

clearTimeout(timerId);

// say we have some tasks which have to be executed in some sequence. Each task takes some time.

setTimeout(() => {
  console.log("First Task");
  setTimeout(() => {
    console.log("Task Two");
    setTimeout(() => {
      console.log("Task Three");
      setTimeout(() => {
        console.log("Task Four");
      }, 500);
    }, 2000);
  }, 1000);
}, 3000);

function Template(message, time, cb) {
  setTimeout(() => {
    console.log(message);
    cb();
  }, time);
}

Template("First Task", 3000, () => {
  Template("Second Task", 1000, () => {
    Template("Third Task", 2000, () => {
      Template("Fouth Task", 500, () => {});
    });
  });
});

async function Tasks(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

Tasks("Task1", 3000)
  .then((message) => {
    console.log(message);
    return Tasks("Task2", 1000);
  })
  .then((message) => {
    console.log(message);
    return Tasks("Task3", 2000);
  })
  .then((message) => {
    console.log(message);
    return Tasks("Task4", 500);
  })
  .then((message) => {
    console.log(message);
  });
