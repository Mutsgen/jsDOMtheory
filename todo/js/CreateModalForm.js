import { CreateToDoItem } from "./CreateToDoItem.js";
import { CloseModal } from "./subfunc/closeModal.js";

export const CreateModalForm = (pos, owner, posEl, array = []) => {
  const popup = document.createElement("div");
  const divContent = document.createElement("div");
  const modalForm = document.createElement("form");
  const title = document.createElement("h2");
  const divInput = document.createElement("div");
  const inputToDo = document.createElement("input");
  const inputTime = document.createElement("input");
  const submitButton = document.createElement("button");

  popup.className = "popup";
  modalForm.className = "modal__form";
  divContent.className = "modal__content";
  title.className = "modal__title";
  divInput.className = "modal__divInput";
  inputToDo.className = "modal__input";
  inputTime.className = "modal__date";
  inputTime.setAttribute("type", "date");
  submitButton.className = "modal__submit";

  title.textContent = "Insert ToDo";
  inputToDo.placeholder = "Input ToDo";
  inputTime.placeholder = "Input date";
  submitButton.textContent = "Input";
  popup.addEventListener("mousedown", (event) => {
    if (document.querySelector(".popup") == null) return;
    if (!event.target.classList.contains("popup")) return;
    setTimeout(() => CloseModal(popup), 100);
  });
  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (document.querySelector(".popup") == null) return;
    CreateToDoItem(
      posEl,
      owner,
      inputToDo.value,
      inputTime.value,
      false,
      array
    );
    setTimeout(() => CloseModal(popup), 50);
  });

  popup.append(divContent);
  divContent.append(modalForm);
  modalForm.append(title, divInput, submitButton);
  divInput.append(inputToDo, inputTime);
  pos.append(popup);

  setTimeout(() => (divContent.className = "modal__active"), 200);
};
