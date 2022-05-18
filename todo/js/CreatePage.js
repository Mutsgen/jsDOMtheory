import { CreateFastForm } from "./CreateFastForm.js";
import { CreateModalButton } from "./CreateModalButton.js";
import { CreateModalForm } from "./CreateModalForm.js";
import { CreateSwapPage } from "./CreateSwapPage.js";
import { CreateTitle } from "./CreateTitle.js";
import { CreateToDoItem } from "./CreateToDoItem.js";
import { CreateToDoList } from "./CreateToDoList.js";
import { getFromServer } from "./subfunc/getFromServer.js";

export const CreatePage = async (name = "My") => {
  const arrayOfPrevious = await getFromServer();
  const arrayOfNew = [];
  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  const title = CreateTitle(container, `${name} ToDo`);
  const fastForm = CreateFastForm(container);
  const modalButton = CreateModalButton(container);
  const ul = CreateToDoList(container, name, arrayOfPrevious);
  modalButton.addEventListener("click", (event) => {
    if (document.querySelector(".popup") != null) return;
    CreateModalForm(body, name, ul, arrayOfNew);
  });

  fastForm.form.addEventListener("submit", (event) => {
    event.preventDefault();
    CreateToDoItem(ul, name, fastForm.input.value, "", false, arrayOfNew);
    fastForm.input.value = "";
  });

  CreateSwapPage(["My", "Mam", "Dad"], arrayOfNew, name);
  return { arrayOfNew, name };
};
