import { createModalForm } from "./createModalForm.js";

export const createModalButton = (position, array, tableHead) => {
  const button = document.createElement("button");
  button.className = "modal_button";
  button.innerText = "Add new student";

  button.addEventListener("click", () => {
    if (document.querySelector(".modal_back") != null) return;
    createModalForm(position, array, tableHead);
  });
  position.append(button);
  return button;
};
