"use strict";
// Задание 1
// let btn = document.createElement("button");
// btn.textContent = "Hi";
// btn.addEventListener("click", () => alert("Hi, world!"));
// document.body.append(btn);

// Задание 2
// let form = document.createElement("form");
// let btn = document.createElement("button");
// let input = document.createElement("input");
// btn.textContent = "Fill";
// btn.addEventListener("click", () => (input.value = "test@email.ru"));
// form.append(input);
// form.append(btn);
// document.body.append(form);

// Задание 3
// let form = document.createElement("form");
// let btn = document.createElement("button");
// let input = document.createElement("input");
// btn.textContent = "alert";

// function check() {
//   if (input.value != "") {
//     alert(`вы ввели ${input.value}`);
//     input.value = null;
//   } else {
//     alert(" Вы не ввели ничего");
//   }
// }
// btn.addEventListener("click", check);

// form.append(input);
// form.append(btn);
// document.body.append(form);

// Задание 4
// let form = document.createElement("form");
// let btn = document.createElement("button");
// let firstInput = document.createElement("input");
// let secondInput = document.createElement("input");
// btn.textContent = "Swap";
// function swap() {
//   let i = firstInput.value;
//   firstInput.value = secondInput.value;
//   secondInput.value = i;
// }
// btn.addEventListener("click", swap);
// form.append(firstInput);
// form.append(secondInput);
// form.append(btn);
// document.body.append(form);

// Задание 5
// let form = document.createElement("form");
// let firstBtn = document.createElement("button");
// let secondBtn = document.createElement("button");
// let input = document.createElement("input");
// firstBtn.addEventListener("click", () => input.setAttribute("disabled", null));
// secondBtn.addEventListener("click", () => input.removeAttribute("disabled"));
// firstBtn.textContent = "disable";
// secondBtn.textContent = "enable";
// form.append(input);
// form.append(firstBtn);
// form.append(secondBtn);
// document.body.append(form);

// Задание 6
// let div = document.createElement("div");
// let btn = document.createElement("button");
// div.classList = "square";
// btn.textContent = "Скрыть";

// function changeSquare() {
//   if (div.classList.contains("square")) {
//     div.classList.remove("square");
//     btn.textContent = "Показать";
//   } else {
//     div.classList.add("square");
//     btn.textContent = "Скрыть";
//   }
// }
// btn.addEventListener("click", changeSquare);
// document.body.append(div);
// document.body.append(btn);

// Задание 7
let div = document.createElement("div");
div.classList = "square";

div.addEventListener("mouseover", () => (div.style.backgroundColor = "green"));
div.addEventListener("mouseout", () => (div.style.backgroundColor = null));
document.body.append(div);

// Задание 8
// let div1 = document.createElement("div");
// let div2 = document.createElement("div");
// let div3 = document.createElement("div");
// let div4 = document.createElement("div");
// div1.classList = "square";
// div2.classList = "square";
// div3.classList = "square";
// div4.classList = "square";
// function swapChange(event) {
//   div1.style.backgroundColor = null;
//   div2.style.backgroundColor = null;
//   div3.style.backgroundColor = null;
//   div4.style.backgroundColor = null;
//   event.target.style.backgroundColor = "green";
// }
// div1.addEventListener("click", swapChange);
// div2.addEventListener("click", swapChange);
// div3.addEventListener("click", swapChange);
// div4.addEventListener("click", swapChange);
// document.body.append(div1, div2, div3, div4);

// Задание 9
