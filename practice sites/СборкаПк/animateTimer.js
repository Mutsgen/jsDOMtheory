export const animateTimer = (date = new Date()) => {
  const days = document.querySelector(".day");
  const minutes = document.querySelector(".minute");
  const hours = document.querySelector(".hour");
  const seconds = document.querySelector(".second");

  const dayText = document.querySelector(".day_text");
  const hourText = document.querySelector(".hour_text");
  const minuteText = document.querySelector(".minute_text");
  const secondText = document.querySelector(".second_text");

  let dateToTimer = (date - new Date()) / 1000;
  if (dateToTimer <= 0) dateToTimer = 0;

  days.textContent = Math.floor(dateToTimer / 60 / 60 / 24);
  hours.textContent = Math.floor((dateToTimer / 60 / 60) % 24);
  minutes.textContent = Math.floor((dateToTimer / 60) % 60);
  seconds.textContent = Math.floor(dateToTimer % 60);

  const validWord = (value = 0, words = []) => {
    if (isNaN(value)) return 0;
    value = parseInt(value);
    const lastNum = value % 10;
    if (lastNum === 1 && value != 11) return words[0];
    if (lastNum > 0 && lastNum < 5 && (value < 10 || value > 20)) {
      return words[2];
    }
    return words[1];
  };

  setInterval(() => {
    const dayVal = parseInt(days.innerText);
    const hourVal = parseInt(hours.innerText);
    const minuteVal = parseInt(minutes.innerText);
    const secondVal = parseInt(seconds.innerText);
    secondText.innerText = validWord(secondVal, [
      "Секунда",
      "Секунд",
      "Секунды",
    ]);
    minuteText.innerText = validWord(minuteVal, ["Минута", "Минут", "Минуты"]);
    hourText.innerText = validWord(hourVal, ["Час", "Часов", "Часа"]);
    dayText.innerText = validWord(dayVal, ["День", "Дней", "Дня"]);

    if (secondVal > 0) {
      if (secondVal - 1 < 10) {
        seconds.innerText = "0" + (secondVal - 1);
      } else seconds.innerText = secondVal - 1;
      secondText.innerText = validWord(secondVal - 1, [
        "Секунда",
        "Секунд",
        "Секунды",
      ]);
    } else if (minuteVal > 0) {
      if (minuteVal - 1 < 10) {
        minutes.innerText = "0" + (minuteVal - 1);
      } else {
        minutes.innerText = minuteVal - 1;
      }
      seconds.innerText = 59;
      minuteText.innerText = validWord(minuteVal - 1, [
        "Минута",
        "Минут",
        "Минуты",
      ]);
    } else if (hourVal > 0) {
      if (hourVal - 1 < 10) {
        hours.innerText = "0" + (hourVal - 1);
      } else hours.innerText = hourVal - 1;
      seconds.innerText = 59;
      minutes.innerText = 59;
      hourText.innerText = validWord(hourVal - 1, ["Час", "Часов", "Часа"]);
    } else if (dayVal > 0) {
      if (dayVal - 1 < 10) {
        days.innerText = "0" + (dayVal - 1);
      } else days.innerText = dayVal - 1;
      seconds.innerText = 59;
      minutes.innerText = 59;
      hours.innerText = 59;
      dayText.innerText = validWord(dayVal - 1, ["День", "Дней", "Дня"]);
    }
  }, 1000);
};
