// const timerEl = document.querySelector(".timer");
// console.log("hello!");

// const startLogOutTimer = () => {
//   // NOTE: Initialize time
//   let time = 10;
//   const tick = function () {
//     // NOTE: get min and sec from time
//     const min = String(Math.trunc(time / 60)).padStart(2, "0");
//     const sec = String(time % 60).padStart(2, 0);

//     // NOTE: set the content of timer div to the current time value
//     timerEl.textContent = `${min}:${sec}`;

//     // NOTE: handling after 0 sec
//     if (time === 0) {
//       clearInterval(timer);
//     }

//     // NOTE: decrease one second
//     time--;

//     console.log(time);
//   };

//   // NOTE: call time every second
//   tick();
//   const timer = setInterval(tick, 1000);
// };

// // startLogOutTimer();

const timerEl = document.querySelector(".timer");
console.log("hello!");

const startLogOutTimer = () => {
  // NOTE: Initialize time
  let time = 10;

  // NOTE: call time every second
  const timer = setInterval(function () {
    // NOTE: get min and sec from time
    const min = String(Math.trunc(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, 0);

    // NOTE: set the content of timer div to the current time value
    timerEl.textContent = `${min}:${sec}`;

    // NOTE: handling after 0 sec
    if (time === 0) {
      clearInterval(timer);
    }

    // NOTE: decrease one second
    time--;

    console.log(time);
  }, 1000);
};

startLogOutTimer();

console.log("TEST");
