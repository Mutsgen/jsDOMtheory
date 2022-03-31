import { CreatePage } from "./CreatePage.js";
import { createSwapButton } from "./subfunc/createSwapButton.js";

export const CreateSwapPage = (arr, array = [], name) => {
  const div = document.createElement("div");
  for (let i of arr) {
    div.append(createSwapButton(i));
  }

  div.className = "swap__div";
  div.addEventListener("click", (event) => {
    if (event.target.classList.contains("swap__div")) return;
    localStorage.setItem(JSON.stringify(name), JSON.stringify(array));
    document.querySelector(".container").innerHTML = "";
    CreatePage(event.target.innerText);
  });
  document.querySelector("body").append(div);
};
