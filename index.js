
let second = 0;
let minutes = 2;
let timerInterval;

const secondDown = () => {
  second -= 1;
  if (second === 59) {
    minutes -= 1;
  }
  if (second === 0 && minutes === 1) {
    second = 60;
    minutes = 1;
  }
  if (second === 0 && minutes === 0) {
    clearInterval(timerInterval);
    second = 0;
    minutes = 0;
    // document.getElementById("sec").innerHTML = "0" + 0 + ":";
    // document.getElementById("min").innerHTML = "0" + 0 + ":";
    // 0;
  }
  if (second >= 10) {
    document.getElementById("sec").innerHTML = second;
  } else {
    document.getElementById("sec").innerHTML =  "0" + second;
  }

  document.getElementById("min").innerHTML = "0" + minutes + ":";
};
const minutesDown = () => {
  document.getElementById("min").innerHTML = minutes;
};

const btnStart = () => {
  if (second === 0) {
    second = 60;
    timerInterval = setInterval(() => {
      secondDown();
    }, 1000);
  } else {
    // timerInterval = setInterval(() => {
    //     secondDown();
    //   }, 1000);
  }

  console.log("it is ok");
};

const btnStop = () => {
  clearInterval(timerInterval);
  console.log("it is ok stop");
};

const btnReset = () => {
  clearInterval(timerInterval);
  second = 0;
  minutes = 2;
  console.log("it is ok reset");
};
