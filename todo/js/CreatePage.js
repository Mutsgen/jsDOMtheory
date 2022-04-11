import { CreateFastForm } from "./CreateFastForm.js";
import { CreateModalButton } from "./CreateModalButton.js";
import { CreateModalForm } from "./CreateModalForm.js";
import { CreateSwapPage } from "./CreateSwapPage.js";
import { CreateTitle } from "./CreateTitle.js";
import { CreateToDoItem } from "./CreateToDoItem.js";
import { CreateToDoList } from "./CreateToDoList.js";

export const CreatePage = (name = "My") => {
  const TestArr = [{ name: "bbb" }, { name: "bool" }];
  const arrayOfPrevious =
    JSON.parse(localStorage.getItem(JSON.stringify(name))) || [];
  const arrayOfNew = [];
  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  const title = CreateTitle(container, `${name} ToDo`);
  const fastForm = CreateFastForm(container);
  const modalButton = CreateModalButton(container);
  const ul = CreateToDoList(container, name, arrayOfPrevious, arrayOfNew);
  modalButton.addEventListener("click", (event) => {
    if (document.querySelector(".popup") != null) return;
    CreateModalForm(body, ul, arrayOfNew);
  });

  fastForm.form.addEventListener("submit", (event) => {
    event.preventDefault();
    CreateToDoItem(ul, fastForm.input.value, "", false, arrayOfNew);
    fastForm.input.value = "";
  });

  CreateSwapPage(["My", "Mam", "Dad"], arrayOfNew, name);
  return { arrayOfNew, name };
};
