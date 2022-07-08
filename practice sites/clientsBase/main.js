"use strict";

import { createModalNew } from "./js/createModalNew.js";
import { updateTable } from "./js/updateTable.js";

(function () {
  setTimeout(() => {
    document.querySelector(".preload").remove();
    const local = JSON.parse(localStorage.getItem("clientsArr")).sort(
      (a, b) => {
        if (a.id < b.id) return -1;
        if (a.id >= b.id) return 1;
      }
    );
    updateTable(local);
    const addBtn = document.querySelector(".add-new-client");
    addBtn.onclick = () => {
      createModalNew(document.body);
      document.querySelector(".popup").addEventListener("mouseup", (event) => {
        if (!event.target.classList.contains("popup")) return;
        document.querySelector(".popup").remove();
      });
    };

    document.querySelector("table").querySelector(".id").onclick = (event) => {
      const local = JSON.parse(localStorage.getItem("clientsArr"));
      if (event.target.closest("th").classList.contains("normal")) {
        const newLocal = local.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id >= b.id) return 1;
        });
        event.target.closest("th").className = "id reverse";
        event.target
          .closest("th")
          .querySelector("img")
          .setAttribute("src", "./img/arrow-up.svg");

        updateTable(newLocal);
        return;
      }
      if (event.target.closest("th").classList.contains("reverse")) {
        const newLocal = local.sort((a, b) => {
          if (a.id < b.id) return 1;
          if (a.id >= b.id) return -1;
        });
        event.target.closest("th").className = "id normal";
        event.target
          .closest("th")
          .querySelector("img")
          .setAttribute("src", "./img/arrow-down.svg");

        updateTable(newLocal);
        return;
      }
    };

    document.querySelector("table").querySelector(".fio").onclick = (event) => {
      const local = JSON.parse(localStorage.getItem("clientsArr"));
      if (event.target.closest("th").classList.contains("normal")) {
        const newLocal = local.sort((a, b) => {
          if (
            a.firstName + a.name + a.lastName <
            b.firstName + b.name + b.lastName
          )
            return -1;
          if (
            a.firstName + a.name + a.lastName >=
            b.firstName + b.name + b.lastName
          )
            return 1;
        });
        event.target.closest("th").className = "fio reverse";
        event.target
          .closest("th")
          .querySelector(".sort")
          .querySelector("img")
          .setAttribute("src", "./img/arrow-up.svg");
        event.target
          .closest("th")
          .querySelector(".sort")
          .querySelector("p").innerText = "А-Я";

        updateTable(newLocal);
        return;
      }
      if (event.target.closest("th").classList.contains("reverse")) {
        const newLocal = local.sort((a, b) => {
          if (
            a.firstName + a.name + a.lastName <
            b.firstName + b.name + b.lastName
          )
            return 1;
          if (
            a.firstName + a.name + a.lastName >=
            b.firstName + b.name + b.lastName
          )
            return -1;
        });
        event.target.closest("th").className = "fio normal";
        event.target
          .closest("th")
          .querySelector(".sort")
          .querySelector("img")
          .setAttribute("src", "./img/arrow-down.svg");
        event.target
          .closest("th")
          .querySelector(".sort")
          .querySelector("p").innerText = "Я-А";

        updateTable(newLocal);
        return;
      }
    };

    document.querySelector("table").querySelector(".date-time").onclick = (
      event
    ) => {
      const local = JSON.parse(localStorage.getItem("clientsArr"));
      if (event.target.closest("th").classList.contains("normal")) {
        const newLocal = local.sort((a, b) => {
          if (new Date(a.creationDate) < new Date(b.creationDate)) return -1;
          if (new Date(a.creationDate) >= new Date(b.creationDate)) return 1;
        });
        event.target.closest("th").className = "date-time reverse";
        event.target
          .closest("th")
          .querySelector("img")
          .setAttribute("src", "./img/arrow-up.svg");

        updateTable(newLocal);
        return;
      }
      if (event.target.closest("th").classList.contains("reverse")) {
        const newLocal = local.sort((a, b) => {
          if (new Date(a.creationDate) < new Date(b.creationDate)) return 1;
          if (new Date(a.creationDate) >= new Date(b.creationDate)) return -1;
        });
        event.target.closest("th").className = "date-time normal";
        event.target
          .closest("th")
          .querySelector("img")
          .setAttribute("src", "./img/arrow-down.svg");

        updateTable(newLocal);
        return;
      }
    };
    document.querySelector("table").querySelector(".last-change").onclick = (
      event
    ) => {
      const local = JSON.parse(localStorage.getItem("clientsArr"));
      if (event.target.closest("th").classList.contains("normal")) {
        const newLocal = local.sort((a, b) => {
          if (new Date(a.lastChange) < new Date(b.lastChange)) return -1;
          if (new Date(a.lastChange) >= new Date(b.lastChange)) return 1;
        });
        event.target.closest("th").className = "date-time reverse";
        event.target
          .closest("th")
          .querySelector("img")
          .setAttribute("src", "./img/arrow-up.svg");

        updateTable(newLocal);
        return;
      }
      if (event.target.closest("th").classList.contains("reverse")) {
        const newLocal = local.sort((a, b) => {
          if (new Date(a.lastChange) < new Date(b.lastChange)) return 1;
          if (new Date(a.lastChange) >= new Date(b.lastChange)) return -1;
        });
        event.target.closest("th").className = "date-time normal";
        event.target
          .closest("th")
          .querySelector("img")
          .setAttribute("src", "./img/arrow-down.svg");

        updateTable(newLocal);
        return;
      }
    };

    document.querySelector("table").querySelector(".normal").className =
      "id reverse";

    document.querySelector("header").querySelector("input").oninput = (
      event
    ) => {
      if (document.querySelector("datalist"))
        document.querySelector("datalist").remove();
      console.log(123);
      const local = JSON.parse(localStorage.getItem("clientsArr"));
      const datalist = document.createElement("datalist");
      datalist.setAttribute("id", "search");
      event.target.setAttribute("list", "search");
      for (let i = 0; i < local.length; i++) {
        const client = local[i];
        if (
          (client.firstName + client.name + client.lastName).startsWith(
            event.target.value
          )
        ) {
          const option = document.createElement("option");
          option.textContent = `${client.firstName} ${client.name} ${client.lastName}`;
          datalist.append(option);
        }
      }
      document.body.append(datalist);
    };
    document.querySelector("header").querySelector("input").onchange = (
      event
    ) => {
      const local = JSON.parse(localStorage.getItem("clientsArr"));
      const searchable = [];
      if (event.target.value.trim() === "") updateTable(local);
      for (let i = 0; i < local.length; i++) {
        const client = local[i];
        if (
          (client.firstName + client.name + client.lastName)
            .toLowerCase()
            .includes(event.target.value.toLowerCase().trim())
        ) {
          searchable.push(client);
        }
      }
      updateTable(searchable);
    };
  }, 1000);
})();
