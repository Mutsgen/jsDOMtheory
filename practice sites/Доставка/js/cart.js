import { createCartBody } from "./createCartBody.js";

export const cartModal = () => {
  const cartList = JSON.parse(localStorage.getItem("cart")) || [];
  const cartPopup = document.querySelector(".modal-cart");
  cartPopup.style.display = "flex";

  createCartBody();

  cartPopup.onclick = (event) => {
    if (event.target.classList.contains("close"))
      cartPopup.style.display = "none";
    if (!event.target.classList.contains("modal-cart")) return;
    cartPopup.style.display = "none";
  };
};
