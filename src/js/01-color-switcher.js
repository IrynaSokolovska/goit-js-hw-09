const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const colorBody = document.querySelector("body");


stopBtn.setAttribute("disabled", "");
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
startBtn.addEventListener('click', onStart);

function onStart() {
  startBtn.setAttribute("disabled", "");
  stopBtn.removeAttribute("disabled");
  timerId = setInterval(() => {
    colorBody.style.backgroundColor = getRandomHexColor()
  }, 1000)          
}
stopBtn.addEventListener('click', onStop)

function onStop(){
    
  clearInterval(timerId);
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "");
}

// const startBtn = document.querySelector("[data-start]");
// const stopBtn = document.querySelector("[data-stop]");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });