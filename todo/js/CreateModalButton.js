export const CreateModalButton = (pos) => {
  const modalButton = document.createElement("button");
  modalButton.className = "modal__button";
  modalButton.textContent = "Create ToDo";
  pos.append(modalButton);
  return modalButton;
};
