"use strict";
const buttons = document.querySelector(".timer_buttons");
const startBtn = document.querySelector(".start_timer");
const stopBtn = document.querySelector(".stop_timer");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let intervalId = 0;

function addTimerValue(object, value) {
  if (object === seconds) {
    if (
      (value === 10 && parseInt(object.innerText) >= 50) ||
      parseInt(object.innerText) > 58
    ) {
      object.innerText = parseInt(object.innerText) + 10 - 60;
      addTimerValue(minutes, 1);
    } else {
      object.innerText = parseInt(object.innerText) + value;
    }
  } else if (
    (parseInt(object.innerText) > 89 && value === 10) ||
    parseInt(object.innerText) > 98
  ) {
    alert("this more then i can");
  } else object.innerText = parseInt(object.innerText) + value;
}

function minusTimerValue() {
  let secValue = parseInt(seconds.innerText);
  let minValue = parseInt(minutes.innerText);
  if (secValue > 0) {
    seconds.innerText = parseInt(seconds.innerText) - 1;
  } else if (minValue > 0) {
    seconds.innerText = 59;
    minutes.innerText = parseInt(minutes.innerText) - 1;
  } else {
    clearInterval(intervalId);
    alert("Panic!!! Time is over!!!");
    minutes.innerText = "00";
    seconds.innerText = "00";
  }
}

buttons.addEventListener("click", function (event) {
  if (!event.target.classList.contains("timer_btn")) return;

  if (event.target.classList.contains("add_ten_minutes")) {
    addTimerValue(minutes, 10);
  } else if (event.target.classList.contains("add_minute")) {
    addTimerValue(minutes, 1);
  } else if (event.target.classList.contains("add_ten_seconds")) {
    addTimerValue(seconds, 10);
  } else if (event.target.classList.contains("add_second")) {
    addTimerValue(seconds, 1);
  } else if (event.target.classList.contains("clear_timer")) {
    clearInterval(intervalId);
    startBtn.style.display = "block";
    stopBtn.style.display = "none";
    minutes.innerText = "00";
    seconds.innerText = "00";
  } else if (event.target.classList.contains("stop_timer")) {
    clearInterval(intervalId);
    startBtn.style.display = "block";
    stopBtn.style.display = "none";
  } else {
    clearInterval(intervalId);
    intervalId = setInterval(minusTimerValue, 1000);
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
  }
});
