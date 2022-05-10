export const createModalForm = () => {
  const background = document.createElement("div");
  const content = document.createElement("div");
  const inputForm = document.createElement("form");

  background.append(content);
  content.append(inputForm);
};
