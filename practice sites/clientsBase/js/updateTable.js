import { createChangeModal } from "./createChangeModal.js";
import { createModalDelete } from "./createDeleteModal.js";

export const updateTable = (
  array = JSON.parse(localStorage.getItem("clientsArr"))
) => {
  const local = array || JSON.parse(localStorage.getItem("clientsArr")) || [];
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  console.log(local);

  for (let el = 0; el < local.length; el++) {
    const element = local[el];

    const tr = document.createElement("tr");

    const clientId = document.createElement("td");
    const idText = document.createElement("p");

    const clientFio = document.createElement("td");
    const fioText = document.createElement("p");

    const clientDate = document.createElement("td");
    const createDateTime = document.createElement("div");
    const createDate = document.createElement("p");
    const createTime = document.createElement("p");

    const clientLastChange = document.createElement("td");
    const changeDateTime = document.createElement("div");
    const changeDate = document.createElement("p");
    const changeTime = document.createElement("p");

    const clientContacts = document.createElement("td");
    const contactsDiv = document.createElement("div");

    const clientActions = document.createElement("td");
    const changeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    tr.className = "client";
    clientId.className = "client-id";
    clientFio.className = "client-fio";
    clientDate.className = "client-date";
    createDateTime.className = "date-time";
    createDate.className = "date";
    createTime.className = "time";

    clientLastChange.className = "client-last-change";
    changeDateTime.className = "date-time";
    changeDate.className = "date";
    changeTime.className = "time";

    clientContacts.className = "client-contacts";
    contactsDiv.className = "contacts";
    clientActions.className = "actions";
    changeBtn.className = "edit";
    deleteBtn.className = "delete";

    idText.innerText = element.id;
    fioText.innerText = `${element.firstName} ${element.name} ${element.lastName}`;
    createDate.innerText = new Date(element.creationDate).toLocaleDateString();
    createTime.innerText = new Date(element.creationDate)
      .toLocaleTimeString()
      .slice(0, 5);
    changeDate.innerText = new Date(element.lastChange).toLocaleDateString();
    changeTime.innerText = new Date(element.lastChange)
      .toLocaleTimeString()
      .slice(0, 5);

    let countMoreThenNeed = 0;
    for (let el = 0; el < element.contacts.length; el++) {
      const contact = element.contacts[el];
      if (el > 3) {
        countMoreThenNeed++;
        continue;
      }
      const img = document.createElement("img");
      switch (contact.type) {
        case "Телефон":
          img.setAttribute("src", "./img/phone.svg");
          break;
        case "Доп. телефон":
          img.setAttribute("src", "./img/phone.svg");
          break;
        case "E-mail":
          img.setAttribute("src", "./img/email.svg");
          break;
        case "Vk":
          img.setAttribute("src", "./img/vk.svg");
          break;
        case "Facebook":
          img.setAttribute("src", "./img/fb.svg");
          break;
        case "Другое":
          img.setAttribute("src", "./img/another-contact.svg");
          break;
        default:
          break;
      }
      img.setAttribute("value", contact.value);

      contactsDiv.append(img);
    }
    if (countMoreThenNeed !== 0) {
      const contactsMoreThenNeed = document.createElement("div");
      if (countMoreThenNeed < 10) {
        contactsMoreThenNeed.innerText = "+" + countMoreThenNeed;
      } else {
        contactsMoreThenNeed.innerText = "...";
      }
      contactsMoreThenNeed.className = "more-then-need";
      contactsMoreThenNeed.addEventListener("click", () => {
        contactsDiv.innerHTML = "";
        for (let el = 0; el < element.contacts.length; el++) {
          const contact = element.contacts[el];
          const img = document.createElement("img");
          switch (contact.type) {
            case "Телефон":
              img.setAttribute("src", "./img/phone.svg");
              break;
            case "Доп. телефон":
              img.setAttribute("src", "./img/phone.svg");
              break;
            case "E-mail":
              img.setAttribute("src", "./img/email.svg");
              break;
            case "Vk":
              img.setAttribute("src", "./img/vk.svg");
              break;
            case "Facebook":
              img.setAttribute("src", "./img/fb.svg");
              break;
            case "Другое":
              img.setAttribute("src", "./img/another-contact.svg");
              break;
            default:
              break;
          }
          img.setAttribute("value", contact.value);
          contactsDiv.append(img);
        }
      });
      contactsDiv.append(contactsMoreThenNeed);
    }

    deleteBtn.addEventListener("click", (event) => {
      const id = parseInt(
        event.target.closest(".client").querySelector(".client-id").innerText
      );
      createModalDelete(id);
    });

    changeBtn.addEventListener("click", (event) => {
      const id = parseInt(
        event.target.closest(".client").querySelector(".client-id").innerText
      );
      createChangeModal(id);
      document.querySelector(".popup").addEventListener("mouseup", (event) => {
        if (!event.target.classList.contains("popup")) return;
        document.querySelector(".popup").remove();
      });
    });

    changeBtn.innerHTML =
      '<img src="./img/edit.svg" alt="pen" /><p>Изменить</p>';
    deleteBtn.innerHTML =
      '<img src="./img/cancel.svg" alt="X" /><p>Удалить</p>';

    clientId.append(idText);
    clientFio.append(fioText);
    createDateTime.append(createDate, createTime);
    clientDate.append(createDateTime);
    changeDateTime.append(changeDate, changeTime);
    clientLastChange.append(changeDateTime);
    clientContacts.append(contactsDiv);
    clientActions.append(changeBtn, deleteBtn);
    tr.append(
      clientId,
      clientFio,
      clientDate,
      clientLastChange,
      clientContacts,
      clientActions
    );

    tbody.append(tr);
  }
};
