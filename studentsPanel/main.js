"use strict";

import { createTitle } from "./module/createTitle.js";
import { createTable } from "./module/createTable.js";
import { studentValid } from "./module/studentValid.js";
import { createModalButton } from "./module/createModalButton.js";
import { createModalForm } from "./module/createModalForm.js";

(function () {
  const container = document.querySelector(".container");
  const tableHead = [
    { name: "id" },
    { name: "Имя" },
    { name: "Фамилия" },
    { name: "Отчество" },
    { name: "Дата рождения" },
    { name: "Год поступления" },
    { name: "Факультет" },
  ];

  const students = [
    {
      id: 0,
      name: "Данила",
      firstName: "Попков",
      lastName: "Владимирович12321312321321",
      birthDate: new Date("2004.07.21"),
      startDate: new Date("2020.09.01"),
      faculty: "ISaP",
    },
  ];

  const title = createTitle(container, "Panel of Students");
  const table = createTable(container, tableHead, students);
  const modalButton = createModalButton(container);

  modalButton.addEventListener("click", () => {
    if (document.querySelector(".modal_back") != null) return;
    const inputForm = createModalForm(container, students, tableHead);
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
        createModalButton(position, arrayToAdd, tableHead);
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
  });
})();
