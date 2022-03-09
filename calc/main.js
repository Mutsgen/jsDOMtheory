"use strict";
const calculator = document.querySelector(".calculator");
let calc_result = document.querySelector(".calc_result");

try {
  calculator.addEventListener("click", function (event) {
    if (!event.target.classList.contains("calc_btn")) return;
    const bntValue = event.target.innerText;

    switch (bntValue) {
      case "AC":
        calc_result.innerText = "";
        break;
      case "=":
        if (calc_result.innerText.search(/[^0-9*/+-.]/im) != -1) return;
        calc_result.innerText = eval(calc_result.innerText).toFixed(2);
        break;
      default:
        calc_result.innerText += bntValue;
    }
  });
} catch (SyntaxError) {
  alert("You are not right");
  calc_result.innerText = "";
}
