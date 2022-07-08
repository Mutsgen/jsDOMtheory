import { updateTable } from "./updateTable.js";

export const createModalDelete = (id) => {
  const local = JSON.parse(localStorage.getItem("clientsArr")) || [];
  const popup = document.createElement("div");
  const modal = document.createElement("div");
  const content = document.createElement("div");
  const h2 = document.createElement("h2");
  const warnText = document.createElement("p");
  const btnDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  btnDiv.className = "modal-delete-buttons";
  deleteBtn.innerText = "Удалить";
  deleteBtn.className = "delete";
  cancelBtn.innerText = "Отмена";
  cancelBtn.className = "cancel";
  h2.innerText = "Удалить клиента";
  warnText.innerText = "Вы действительно хотите удалить данного клиента?";

  deleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    for (let el = 0; el < local.length; el++) {
      const element = local[el];
      if (element.id !== id) continue;
      local.splice(el, 1);
    }
    console.log(local);
    localStorage.setItem("clientsArr", JSON.stringify(local));
    popup.remove();
    updateTable();
  });
    cancelBtn.addEventListener('click', () => {
        popup.remove()
    })

  popup.className = "popup";
  modal.className = "modal-delete";
  content.className = "modal-content";

  btnDiv.append(deleteBtn, cancelBtn);
  content.append(h2, warnText, btnDiv);
  modal.append(content);
  popup.append(modal);
  document.body.prepend(popup);
};
