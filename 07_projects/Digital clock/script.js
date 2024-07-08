const clock = document.querySelector("#clock");

// setInterval(callback function , required interval (in mili sec)) => It is a method to run the callback funtion for infinite time, after the specific interval
setInterval(function () {
  let date = new Date();
  clock.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
}, 1000);