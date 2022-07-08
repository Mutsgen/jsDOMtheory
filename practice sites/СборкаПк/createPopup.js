import { createLight } from "./createLight.js";
import { sendForm } from "./sendform.js";

export const createPopup = async (position) => {
  const popup = document.createElement("div");
  const frame = document.createElement("div");
  const content = document.createElement("form");
  const inputList = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const inputName = document.createElement("input");
  const inputNumber = document.createElement("input");
  const inputEmail = document.createElement("input");
  const btn = document.createElement("button");
  
  const light = createLight()
  popup.className = "popup";
  frame.className = "popup_frame";
  content.className = "popup_form";
  inputList.className = "input_list";
  inputName.className = "name";
  inputNumber.className = "number";
  inputEmail.className = "email";
  btn.className = "application_button";

  inputName.setAttribute("type", "text");
  inputName.setAttribute("placeholder", "Как вас зовут");
  inputNumber.setAttribute("type", "tel");
  inputNumber.setAttribute("placeholder", "Номер телефона");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "E-mail");

  h2.textContent = "Заявка на сборку";
  p.textContent = "Мы свяжемся с вами, чтобы обсудить детали заказа";
  btn.textContent = "Отправить";

  popup.addEventListener("mouseup", (event) => {
    if (!event.target.classList.contains("popup")) return;

    setTimeout(() => {
      frame.className = "popup_frame";
    }, 10);
    setTimeout(() => {
      document.body.style.overflow = "";
      popup.remove();
      light.remove()
    }, 1000);
  });
  setTimeout(() => {
    frame.className = "popup_frame_active";
  }, 300);

  popup.append(frame);
  frame.append(content);
  content.append(h2, p, inputList);
  inputList.append(inputName, inputNumber, inputEmail, btn);
  position.prepend(popup, light);
  sendForm();
  return popup;
};
