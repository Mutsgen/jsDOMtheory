export const CloseModal = (event, popup) => {
  if (
    !(
      event.target.classList.contains("popup") ||
      event.target.classList.contains("modal__submit")
    )
  )
    return;

  popup.remove();
};
