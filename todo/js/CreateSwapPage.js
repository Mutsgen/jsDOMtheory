import { CreatePage } from "./CreatePage.js";
import { createSwapButton } from "./subfunc/createSwapButton.js";
import { postToServer } from "./subfunc/postToServer.js";

export const CreateSwapPage = async (arr, array = [], name) => {
  const div = document.createElement("div");
  for (let i of arr) {
    div.append(createSwapButton(i));
  }

  div.className = "swap__div";
  div.addEventListener("click", (event) => {
    if (event.target.classList.contains("swap__div")) return;
    for (let i = 0; i < array.length; i++) {
      postToServer(array[i].name, array[i].owner, array[i].done, array[i].time);
    }
    document.querySelector(".container").innerHTML = "";
    CreatePage(event.target.innerText);
  });
  document.querySelector("body").append(div);
};
