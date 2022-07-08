import { updateTable } from "./updateTable.js";

export const createChangeModal = (id) => {
  const local = JSON.parse(localStorage.getItem("clientsArr")) || [];
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
<div class="modal-change">
    <form id="modal-change-form" class="modal-content">
        <div class="title">
            <h2>Изменить данные</h2>
            <p>ID: ${id}</p>
        </div>
        <div class="first-name-container">     
        <p>Фамилия<span>*</span></p>
        <input class="modal-input first-name" required="true">
        </div>
        <div class="name-container">     
        <p>Имя<span>*</span></p>
        <input class="modal-input name" required="true">
        </div>
        <div class="last-name-container">     
        <p>Отчество</p>
        <input class="modal-input last-name">
        </div>
        <div class="contacts-container"></div>
        <button class="add-contacts">
            <img src="./img/add_circle_outline.svg">
            <p>Добавить контакт</p>
        </button>
        <div class="modal-new-buttons">
            <button class="save">Сохранить</button>
            <button class="delete">Удалить клиента</button>
        </div>
    </form>
</div>`;

  for (let i = 0; i < local.length; i++) {
    const client = local[i];
    if (!(client.id === id)) continue;
    const firstName = popup.querySelector(".first-name");
    const name = popup.querySelector(".name");
    const lastName = popup.querySelector(".last-name");
    const contactsDiv = popup.querySelector(".contacts-container");
    firstName.value = client.firstName;
    name.value = client.name;
    lastName.value = client.lastName;

    for (let i = 0; i < client.contacts.length; i++) {
      const element = client.contacts[i];
      const contact = document.createElement("div");
      contact.className = "contact-for-contacts-container";
      contact.innerHTML = `<select class="contact-select">
      <option>Телефон</option>
      <option>Доп. телефон</option>
      <option>E-mail</option>
      <option>Vk</option>
      <option>Facebook</option>
      <option>Другое</option>
      </select>
      <input type="tel" placeholder="Введите телефон" class="contact-input" value="${element.value}">
      <button class="contact-delete">
      <img src="./img/delete-contact.svg">
      </button></div>`;
      const options = contact
        .querySelector(".contact-select")
        .querySelectorAll("option");
      const input = contact.querySelector("input");
      const deleteBtn = contact.querySelector(".contact-delete");
      switch (element.type) {
        case "Телефон":
          options[0].setAttribute("selected", true);
          input.setAttribute("placeholder", "Введите телефон");
          break;
        case "Доп. телефон":
          options[1].setAttribute("selected", true);
          input.setAttribute("placeholder", "Введите доп. телефон");
          break;
        case "E-mail":
          options[2].setAttribute("selected", true);
          input.setAttribute("placeholder", "Введите e-mail");
          break;
        case "Vk":
          options[3].setAttribute("selected", true);
          input.setAttribute("placeholder", "Введите адрес профиля");
          break;
        case "Facebook":
          options[4].setAttribute("selected", true);
          input.setAttribute("placeholder", "Введите адрес профиля");
          break;
        case "Другое":
          options[5].setAttribute("selected", true);
          input.setAttribute("placeholder", "Введите другой контакт");
          break;
      }
      contact.querySelector("select").onchange = (e) => {
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
      contactsDiv.append(contact);
    }
  }
  popup.querySelector(".add-contacts").addEventListener("click", (event) => {
    event.preventDefault();
    const contact = document.createElement("div");
    contact.className = "contact-for-contacts-container";
    contact.innerHTML = `<select class="contact-select">
      <option>Телефон</option>
      <option>Доп. телефон</option>
      <option>E-mail</option>
      <option>Vk</option>
      <option>Facebook</option>
      <option>Другое</option>
      </select>
      <input type="tel" placeholder="Введите телефон" class="contact-input">
      <button class="contact-delete">
      <img src="./img/delete-contact.svg">
      </button></div>`;
    popup.querySelector(".contacts-container").append(contact);
    const deleteBtn = contact.querySelector(".contact-delete");
    const input = contact.querySelector("input");
    contact.querySelector("select").onchange = (e) => {
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
  });
  popup.querySelector(".save").addEventListener("click", () => {
    for (let i = 0; i < local.length; i++) {
      const client = local[i];
      if (client.id !== id) continue;
      client.firstName = popup.querySelector(".first-name").value;
      client.name = popup.querySelector(".name").value;
      client.lastName = popup.querySelector(".last-name").value;
      client.lastChange = new Date();

      const changedContacts = [];
      const contacts = popup.querySelectorAll(
        ".contact-for-contacts-container"
      );
      for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        if (contact.querySelector("input").value.trim() === "") continue;
        const object = {
          type: contact.querySelector("select").value,
          value: contact.querySelector("input").value,
        };
        changedContacts.push(object);
      }
      client.contacts = changedContacts;
    }
    localStorage.setItem("clientsArr", JSON.stringify(local));
    popup.remove();
    updateTable(local);
  });
  popup.querySelector(".delete").onclick = () => {};
  document.body.prepend(popup);
};
