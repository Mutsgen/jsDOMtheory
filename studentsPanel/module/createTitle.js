export const createTitle = (position, text) => {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  position.append(h1);
  return h1;
};
