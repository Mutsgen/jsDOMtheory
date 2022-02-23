// let listOp = [];
// let select = document.querySelector(".drowing");
// for (let i = 0; i < 10; i++) {
//   listOp[i] = document.createElement("option");
//   listOp[i].textContent = `${i}`;
// }
// select.append(listOp);
"use strict";
let arr1 = [
  { value: "0", label: "first" },
  { value: "1", label: "second" },
  { value: "2", label: "third" },
];
let arr2 = [1, 2, "three", "four", { value: "5", label: "third" }];
let arr3 = [
  { value: 0 },
  { label: "one" },
  { glhf: "good game", someSpace: "i need" },
];

function checkArrOnObj(arr) {
  if (typeof arr === "object") {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "object") {
        arr[i] = { value: `${arr[i]}`, label: `${arr[i]}` };
      } else {
        continue;
      }
    }
  }
  return arr;
}

function selectCreate(arr, value = 0) {
  let select = document.createElement("select");
  let options = [];
  for (let i = 0; i < arr.length; i++) {
    options[i] = document.createElement("option");
    options[i].setAttribute("value", arr[i].value);
    options[i].textContent = arr[i].label;
    select.append(options[i]);
  }
  select.selectedIndex = value;
  return select;
}

document.body.append(selectCreate(checkArrOnObj(arr2), 1));
