import { studentValid } from "./studentValid.js";

export const createTable = (position, head, elements = []) => {
  const table = document.createElement("table");
  const tHead = document.createElement("tr");

  table.className = "table";
  tHead.className = "table_head";

  for (let i = 0; i < head.length; i++) {
    if (head[i].name === "id") {
      const th = document.createElement("th");
      th.className = head[i].name;
      tHead.append(th);
      continue;
    }
    const th = document.createElement("th");
    th.className = head[i].name;
    th.textContent = head[i].name;
    tHead.append(th);
  }

  table.append(tHead);
  position.append(table);

  for (let i = 0; i < elements.length; i++) {
    if (studentValid(elements[i])) {
      console.log(elements[i]);
      const tr = document.createElement("tr");
      tr.className = `row_${elements[i].id}`;
      const keys = Object.entries(elements[i]);
      console.log(keys);
      for (let j = 0; j < keys.length; j++) {
        const td = document.createElement("td");
        td.className = keys[j][0];
        if (j === 4 || j === 5) {
          td.textContent = new Date(keys[j][1]).toISOString().slice(0, 10);
          tr.append(td);
          continue;
        }
        td.textContent = keys[j][1];
        tr.append(td);
      }
      table.append(tr);
    }
  }
  return table;
};
