import { generateId } from "./generateId.js";
import { updateTable } from "./updateTable.js";

export const createModalNew = (pos) => {
  const local = JSON.parse(localStorage.getItem("clientsArr")) || [];
  const popup = document.createElement("div");
  const modal = document.createElement("div");
  const content = document.createElement("form");
  const h2 = document.createElement("h2");
  const firstName = document.createElement("input");
  const name = document.createElement("input");
  const lastName = document.createElement("input");
  const contactDiv = document.createElement("div");
  const addContact = document.createElement("button");

  const btnDiv = document.createElement("div");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  btnDiv.className = "modal-new-buttons";
  saveBtn.innerText = "Сохранить";
  saveBtn.className = "save";
  cancelBtn.innerText = "Отмена";
  cancelBtn.className = "cancel";

  h2.textContent = "Новый клиент";
  firstName.className = "modal-input first-name";
  firstName.setAttribute("placeholder", "Фамилия*");
  firstName.setAttribute("required", true);
  name.className = "modal-input name";
  name.setAttribute("placeholder", "Имя*");
  name.setAttribute("required", true);
  lastName.className = "modal-input last-name";
  lastName.setAttribute("placeholder", "Отчество");
  contactDiv.className = "contacts-container";

  addContact.onclick = (event) => {
    event.preventDefault();
    const countOfContact = document.querySelectorAll(
      ".contact-for-contacts-container"
    );
    console.log(countOfContact);
    if (countOfContact.length >= 10) return;
    const contact = document.createElement("div");
    const select = document.createElement("select");
    const options = [
      "Телефон",
      "Доп. телефон",
      "E-mail",
      "Vk",
      "Facebook",
      "Другое",
    ];
    const input = document.createElement("input");
    const deleteBtn = document.createElement("button");

    for (let el = 0; el < options.length; el++) {
      const optionText = options[el];
      const option = document.createElement("option");
      option.innerText = optionText;
      select.append(option);
    }
    input.setAttribute("type", "tel");
    input.setAttribute("placeholder", "Введите телефон");

    select.onchange = (e) => {
      switch (e.target.value) {
        case "Телефон":
          input.setAttribute("type", "tel");
          input.setAttribute("placeholder", "Введите телефон");
          break;
        case "Доп. телефон":
          input.setAttribute("type", "tel");
          input.setAttribute("placeholder", "Введите доп. телефон");
          break;
        case "E-mail":
          input.setAttribute("type", "email");
          input.setAttribute("placeholder", "Введите e-mail");
          break;
        case "Vk":
          input.setAttribute("type", "url");
          input.setAttribute("placeholder", "Введите адрес профиля");
          break;
        case "Facebook":
          input.setAttribute("type", "url");
          input.setAttribute("placeholder", "Введите адрес профиля");
          break;
        case "Другое":
          input.setAttribute("type", "text");
          input.setAttribute("placeholder", "Введите другой контакт");
          break;
      }
    };

    deleteBtn.onclick = (event) => {
      contact.remove();
    };

    contact.className = "contact-for-contacts-container";
    select.className = "contact-select";
    input.className = "contact-input";
    deleteBtn.className = "contact-delete";
    deleteBtn.innerHTML = "<img src='./img/delete-contact.svg'>";

    contact.append(select, input, deleteBtn);
    contactDiv.append(contact);
  };

  cancelBtn.addEventListener("click", (event) => {
    console.log(2);
    event.preventDefault();
    popup.remove();
  });

  saveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let generatedId = generateId(local);
    while (!generatedId) {
      generatedId = generateId(local);
    }
    if (true) {
      const contactList = contactDiv.querySelectorAll(
        ".contact-for-contacts-container"
      );
      const contactsArray = [];

      for (let contact = 0; contact < contactList.length; contact++) {
        const el = contactList[contact];
        if (el.querySelector("input").value === "") continue;
        const object = {
          type: el.querySelector("select").value,
          value: el.querySelector("input").value,
        };
        contactsArray.push(object);
      }
      const object = {
        id: generatedId,
        firstName: firstName.value,
        name: name.value,
        lastName: lastName.value,
        creationDate: new Date(),
        lastChange: new Date(),
        contacts: contactsArray,
      };
      local.push(object);
      localStorage.setItem("clientsArr", JSON.stringify(local));
      popup.remove();
      updateTable(local);
    }
  });

  popup.className = "popup";
  modal.className = "modal-new";
  content.className = "modal-content";
  addContact.innerHTML =
    '<img src="./img/add_circle_outline.svg"><p>Добавить контакт</p>';
  addContact.className = "add-contacts";

  btnDiv.append(saveBtn, cancelBtn);
  content.append(h2, firstName, name, lastName, contactDiv, addContact, btnDiv);
  modal.append(content);
  popup.append(modal);
  pos.prepend(popup);
};
