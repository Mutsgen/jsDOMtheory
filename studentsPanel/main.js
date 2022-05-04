"use strict";

import { createTitle } from "./module/createTitle.js";
import { createTable } from "./module/cteateTable.js";
import { studentValid } from "./module/studentValid.js";

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
      lastName: "Владимирович",
      birthDate: new Date("2004.07.21"),
      startDate: new Date("2020.09.01"),
      faculty: "ISaP",
    },
  ];

  const title = createTitle(container, "Panel of Students");
  const table = createTable(container, tableHead, students);
})();
