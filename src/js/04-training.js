// const button = document.querySelector("button");

// const onClick = () => {
//   setTimeout(() => {
//     alert("I love async JS!");
//   }, 2000);
// };

// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener("click", onClick);
// console.log("First log");

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log("Second log");
// }, 5000);

// // Will run second
// console.log("Third log");

// const date = new Date();
// console.log(date.getFullYear());



// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

//   const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));


const promise = new Promise((resolve, reject) => {
  const canFullfill = Math.random() > 0.5;
  setTimeout(() =>{
    if (canFullfill) {
      resolve('done sucsess успешно');
    }
    reject('отклонено reject promis');
  }, 2000);
  
});

promise.then(result => {
  console.log(result);
},
  error => {
    console.log(error);
  }
);

// console.log(promise);


// const promise = new Promise((resolve, reject) => {
//   const canFullfill = Math.random() > 0.5;
//   setTimeout(){}
//   if (canFullfill) {
//     resolve('done sucsess успешно');
//   }
//   reject('отклонено reject promis');
// });
// console.log(promise);
  // const objectPromise = { position, delay };

  // return new Promise((resolve, reject) => {
  //   if (shouldResolve) {
  //     resolve(objectPromise);
  //   }
  //   reject(objectPromise);
  // });
