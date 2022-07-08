import { createModalButton } from "./createModalButton.js";
import { createTable } from "./createTable.js";
import { studentValid } from "./studentValid.js";
import { studentValidTest } from "./validtest.js";

export const createModalForm = (position, arrayToAdd, tableHead) => {
  const background = document.createElement("div");
  const content = document.createElement("div");
  const inputForm = document.createElement("form");
  // dualy div whit paragraph and input

  const divFullName = document.createElement("div");
  const divDate = document.createElement("div");

  const divName = document.createElement("div");
  const pName = document.createElement("p");
  const inputName = document.createElement("input");
  divName.append(pName, inputName);

  const divFirstName = document.createElement("div");
  const pFirstName = document.createElement("p");
  const inputFirstName = document.createElement("input");
  divFirstName.append(pFirstName, inputFirstName);

  const divLastName = document.createElement("div");
  const pLastName = document.createElement("p");
  const inputLastName = document.createElement("input");
  divLastName.append(pLastName, inputLastName);

  divFullName.append(divName, divFirstName, divLastName);

  const divBirth = document.createElement("div");
  const pBirth = document.createElement("p");
  const inputBirth = document.createElement("input");
  divBirth.append(pBirth, inputBirth);

  const divStart = document.createElement("div");
  const pStart = document.createElement("p");
  const inputStart = document.createElement("input");
  divStart.append(pStart, inputStart);

  divDate.append(divBirth, divStart);

  const divFaculty = document.createElement("div");
  const pFaculty = document.createElement("p");
  const inputFaculty = document.createElement("input");
  divFaculty.append(pFaculty, inputFaculty);

  const addButton = document.createElement("button");

  inputForm.append(divFullName, divDate, divFaculty, addButton);

  // classes
  background.className = "modal_back";
  content.className = "modal_content";
  inputForm.className = "modal_form";
  divName.className = "name";
  divFirstName.className = "firstName";
  divLastName.className = "lastName";
  divBirth.className = "birthDate";
  divStart.className = "startDate";
  divFaculty.className = "faculty";
  divFullName.className = "full_name";
  divDate.className = "date";
  addButton.className = "addButton";
  // p inner text
  pName.textContent = "Name";
  pFirstName.textContent = "First name";
  pLastName.textContent = "Last name";
  pBirth.textContent = "Birth date";
  pStart.textContent = "Date of become students";
  pFaculty.textContent = "Faculty";
  // input inner text and type
  inputName.setAttribute("placeholder", "Input name");
  inputFirstName.setAttribute("placeholder", "Input firstname");
  inputLastName.setAttribute("placeholder", "Input lastname");
  inputBirth.setAttribute("placeholder", "Input birthdate");
  inputBirth.setAttribute("type", "date");
  inputStart.setAttribute("placeholder", "Input date of become student");
  inputStart.setAttribute("type", "date");
  inputFaculty.setAttribute("placeholder", "Input faculty");

  addButton.textContent = "Add";

  background.addEventListener("mousedown", (event) => {
    if (document.querySelector(".modal_back") == null) return;
    if (!event.target.classList.contains("modal_back")) return;
    setTimeout(() => background.remove(), 100);
  });

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const object = {
      id: arrayToAdd.length,
      name: inputName.value,
      firstName: inputFirstName.value,
      lastName: inputLastName.value,
      birthDate: inputBirth.valueAsDate,
      startDate: inputStart.valueAsDate,
      faculty: inputFaculty.value,
    };
    // console.log(studentValidTest(object));
    if (studentValid(object)) {
      arrayToAdd.push(object);
      addButton.setAttribute("disabled", "disabled");
      document.querySelector(".modal_button").remove();
      document.querySelector(".table").innerHTML = "";
      createTable(position, tableHead, arrayToAdd);
      createModalButton(position);
      setTimeout(() => {
        background.remove();
      }, 200);
      return;
    }
    pName.style.color = "";
    pFirstName.style.color = "";
    pLastName.style.color = "";
    pFaculty.style.color = "";
    pBirth.style.color = "";
    pStart.style.color = "";

    if (inputName.value.trim() == "") {
      pName.style.color = "red";
    }
    if (inputFirstName.value.trim() == "") {
      pFirstName.style.color = "red";
    }
    if (inputLastName.value.trim() == "") {
      pLastName.style.color = "red";
    }
    if (inputFaculty.value.trim() == "") {
      pFaculty.style.color = "red";
    }
    if (
      (inputBirth.valueAsDate < new Date("01.01.1900") &&
        inputBirth.valueAsDate > new Date()) ||
      inputBirth.valueAsDate === null
    ) {
      pBirth.style.color = "red";
    }
    if (
      (inputStart.valueAsDate < new Date("01.01.2000") &&
        inputStart.valueAsDate > new Date()) ||
      inputStart.valueAsDate === null
    ) {
      pStart.style.color = "red";
    }

    return;
  });

  background.append(content);
  content.append(inputForm);
  document.body.append(background);

  setTimeout(() => (content.className = "modal__active"), 200);
  return;
};
