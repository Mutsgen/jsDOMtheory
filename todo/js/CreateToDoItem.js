export const CreateToDoItem = (
  pos,
  owner,
  value,
  _time = "",
  ready = false,
  array = []
) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const divText = document.createElement("div");
  const p = document.createElement("p");
  const time = document.createElement("p");
  const divButtons = document.createElement("div");
  const readyButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  li.className = "todo__item";
  div.className = "item__container";
  p.className = "todo__text";
  time.className = "todo__time";
  divText.className = "item__texts";
  divButtons.className = "item__buttons";
  readyButton.className = "ready__btn";
  deleteButton.className = "delete__btn";

  if (ready) li.classList.add("done");

  if (value == "") return;
  p.textContent = value;

  if (_time != "") {
    time.textContent = _time;
  } else {
    _time = new Date().toISOString().slice(0, 10);
    time.textContent = new Date().toISOString().slice(0, 10);
  }
  readyButton.textContent = "Ready";
  deleteButton.textContent = "Delete";

  readyButton.addEventListener("click", (event) => {
    if (event.target.closest(".todo__item") == event.target) return;
    event.target.closest(".todo__item").classList.toggle("done");
    event.target
      .closest(".todo__item")
      .querySelector(".todo__text")
      .classList.toggle("done__text");
  });

  deleteButton.addEventListener("click", (event) => {
    if (event.target.closest(".todo__item") == event.target) return;
    event.target.closest(".todo__item").remove();
  });

  li.append(div);
  div.append(divText, divButtons);
  divText.append(p, time);
  divButtons.append(readyButton, deleteButton);
  array.push({
    name: value,
    owner: owner,
    done: ready,
    time: _time,
  });

  pos.append(li);
};
