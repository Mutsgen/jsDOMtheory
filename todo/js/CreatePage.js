import { CreateFastForm } from "./CreateFastForm.js";
import { CreateModalButton } from "./CreateModalButton.js";
import { CreateModalForm } from "./CreateModalForm.js";
import { CreateTitle } from "./CreateTitle.js";
import { CreateToDoItem } from "./CreateToDoItem.js";
import { CreateToDoList } from "./CreateToDoList.js";

export const CreatePage = (name = "My") => {
  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  const title = CreateTitle(container, `${name} ToDo`);
  const fastForm = CreateFastForm(container);
  const modalButton = CreateModalButton(container);
  const ul = CreateToDoList(container);
  modalButton.addEventListener("click", (event) => {
    if (document.querySelector(".popup") != null) return;
    CreateModalForm(body, ul);
  });

  fastForm.form.addEventListener("submit", (event) => {
    event.preventDefault();
    CreateToDoItem(ul, fastForm.input.value);
    fastForm.input.value = "";
  });
};
