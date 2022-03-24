"use strict";

import { CreateFastForm } from "./CreateFastForm.js";
import { CreateModalButton } from "./CreateModalButton.js";
import { CreateModalForm } from "./CreateModalForm.js";
import { CreateTitle } from "./CreateTitle.js";
import { CreateToDoItem } from "./CreateToDoItem.js";
import { CreateToDoList } from "./CreateToDoList.js";

(function () {
  const container = document.querySelector(".container");
  const title = CreateTitle(container, "ToDo");
  const fastForm = CreateFastForm(container);
  const modalButton = CreateModalButton(container);
  const ul = CreateToDoList(container);
  modalButton.addEventListener("click", (event) => {
    if (document.querySelector(".popup") != null) return;
    CreateModalForm(container, ul);
  });

  fastForm.form.addEventListener("submit", (event) => {
    event.preventDefault();
    CreateToDoItem(ul, fastForm.input.value);
    fastForm.input.value = "";
  });
})();
