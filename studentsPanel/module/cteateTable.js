import { studentValid } from "./studentValid";

export const createTable = (position, head, elements = []) => {
  const table = document.createElement("table");
  const tHead = document.createElement("tr");

  for (let i = 0; i < head.length; i++) {
    if (head[i].name === "id") {
      const td = document.createElement("td");
      td.className = head[i].name;
      tHead.append(td);
      continue;
    }
    const th = document.createElement("th");
    th.className = head[i].name;
    th.textContent = head[i].name;
    tHead.append(th);
  }

  for (let i = 0; i < elements.length; i++) {
    if (studentValid(elements[i])) {
      const tr = document.createElement("tr");
      tr.className = elements[i].id;
    }
  }
  table.append(tHead);
  position.append(table);
  return table;
};
