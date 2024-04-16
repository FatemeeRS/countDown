let second = 0;
let minutes = 2;
let timerInterval;

const loadingTimer = () => {
  second = Number(document.cookie.substring(7));
  minutes = Number(document.cookie.substring(5, 6));

  if (document.cookie === "time=0:0") {
    clearInterval(timerInterval);
    second = 0;
    minutes = 2;
  }

  if (second >= 10) {
    document.getElementById("sec").innerHTML = second;
  } else {
    document.getElementById("sec").innerHTML = "0" + second;
  }
  document.getElementById("min").innerHTML = "0" + minutes + ":";
};

const secondDown = () => {
  second -= 1;
  document.cookie = "time=" + minutes + ":" + second;

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
  }
  if (second >= 10) {
    document.getElementById("sec").innerHTML = second;
  } else {
    document.getElementById("sec").innerHTML = "0" + second;
  }
  document.getElementById("min").innerHTML = "0" + minutes + ":";
};

const minutesDown = () => {
  document.getElementById("min").innerHTML = minutes;
};

const btnStart = () => {
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("reset").disabled = false; 
  if (second === 0) {
    second = 60;
    if (minutes === 0) {
      minutes =2;
      timerInterval = setInterval(() => {
        secondDown();
      }, 1000);
    }else{
      timerInterval = setInterval(() => {
        secondDown();
      }, 1000);
    }
  }  else {
    second;
    timerInterval = setInterval(() => {
      secondDown();
    }, 1000);
  }
};

const btnStop = () => {
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("reset").disabled = false;
  clearInterval(timerInterval);
};

const btnReset = () => {
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("reset").disabled = true;
  clearInterval(timerInterval);
  second = 0;
  minutes = 2;
  document.getElementById("sec").innerHTML = "0" + second;
  document.getElementById("min").innerHTML = "0" + minutes + ":";
};
