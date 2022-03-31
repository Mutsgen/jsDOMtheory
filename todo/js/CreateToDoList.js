import { CreateToDoItem } from "./CreateToDoItem.js";

export const CreateToDoList = (
  pos,
  name,
  arrayOfPrevious = [],
  arrayNew = []
) => {
  const ul = document.createElement("ul");
  ul.className = "todo__list";
  pos.append(ul);

  for (let i = 0; i < arrayOfPrevious.length; i++) {
    const li = CreateToDoItem(
      ul,
      arrayOfPrevious[i].name,
      arrayOfPrevious[i].time,
      arrayOfPrevious[i].done,
      arrayNew
    );
  }

  return ul;
};
