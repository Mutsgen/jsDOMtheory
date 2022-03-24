export const CreateTitle = (pos, messenge) => {
  const title = document.createElement("h1");
  title.textContent = messenge;
  title.className = "title";
  pos.append(title);
  return title;
};
