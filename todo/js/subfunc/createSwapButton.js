export const createSwapButton = (name) => {
  const swapButton = document.createElement("button");
  swapButton.textContent = name;
  swapButton.className = "swap__button";
  return swapButton;
};
