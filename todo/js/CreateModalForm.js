import { CreateToDoItem } from "./CreateToDoItem.js";
import { CloseModal } from "./subfunc/closeModal.js";

export const CreateModalForm = (pos, posEl, _title = "Insert ToDo") => {
  const popup = document.createElement("div");
  const divContent = document.createElement("div");
  const modalForm = document.createElement("form");
  const title = document.createElement("h1");
  const inputToDo = document.createElement("input");
  const inputTime = document.createElement("input");
  const submitButton = document.createElement("button");

  popup.className = "popup";
  divContent.className = "modal__content";
  title.className = "modal__title";
  inputToDo.className = "modal__input";
  inputTime.className = "modal__date";
  inputTime.setAttribute("type", "date");
  submitButton.className = "modal__submit";

  title.textContent = _title;
  inputToDo.placeholder = "Input ToDo";
  inputTime.placeholder = "Input date";
  submitButton.textContent = "Input";
  popup.addEventListener("click", (event) => {
    if (document.querySelector(".popup") == null) return;
    CloseModal(event, popup);
  });
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (document.querySelector(".popup") == null) return;
    CreateToDoItem(posEl, inputToDo.value, String(inputTime.value));
    CloseModal(event, popup);
  });

  popup.append(divContent);
  divContent.append(modalForm);
  modalForm.append(title, inputToDo, inputTime, submitButton);
  pos.append(popup);
};
