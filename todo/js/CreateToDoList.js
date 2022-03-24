export const CreateToDoList = (pos) => {
  const ul = document.createElement("ul");
  ul.className = "todo__list";
  pos.append(ul);
  return ul;
};
