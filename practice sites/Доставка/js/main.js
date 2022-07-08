"use strict";

import { cartModal } from "./cart.js";

(function () {
  const loginBtn = document.querySelector(".button-auth");
  const logoutBtn = document.querySelector(".button-out");
  const cartBtn = document.querySelector(".cart-button");
  const modalLogin = document.querySelector(".modal-auth");
  const loginForm = document.querySelector("#logInForm");

  const localLoginly = JSON.parse(localStorage.getItem("loginly"));
  if (localLoginly !== null) {
    if (localLoginly.loginly) {
      loginBtn.style.display = "none";
      document.querySelector(".user-name").style.display = "flex";
      document.querySelector(".button-cart").style.display = "flex";
      document.querySelector(".user-name").textContent = localLoginly.login;
      logoutBtn.style.display = "flex";
    }
  }

  const loginDB = [
    { login: "Mutsa", password: "BawerQWERTY123" },
    { login: "Mutsgen", password: "GawerQWERTY123" },
  ];

  const checkLogin = (login, password, DB = []) => {
    for (let i = 0; i < DB.length; i++) {
      if (DB[i].login === login) {
        if (DB[i].password === password + "QWERTY123") {
          return true;
        } else continue;
      } else continue;
    }
    return false;
  };
  
  document.querySelector(".button-cart").onclick = cartModal

  loginBtn.addEventListener("click", () => {
    modalLogin.style.display = "flex";
  });

  modalLogin.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-auth"))
      modalLogin.style.display = "none";
    if (event.target.closest(".modal-dialog")) return;
    modalLogin.style.display = "none";
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginValue = document.querySelector("#login").value;
    const passwordValue = document.querySelector("#password").value;

    if (loginValue === "") return alert("Вы не ввели логин");
    if (checkLogin(loginValue, passwordValue, loginDB)) {
      localStorage.setItem(
        "loginly",
        JSON.stringify({
          loginly: true,
          login: loginValue,
        })
      );
      modalLogin.style.display = "none";
      loginBtn.style.display = "none";
      logoutBtn.style.display = "flex";
      document.querySelector(".button-cart").style.display = "flex";
      document.querySelector(".user-name").style.display = "flex";
      document.querySelector(".user-name").textContent = loginValue;
      document.querySelector("#login").value = "";
      document.querySelector("#password").value = "";
    } else {
      alert("Неверный логин или пароль");
      return;
    }
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loginly");
    loginBtn.style.display = "flex";
    logoutBtn.style.display = "none";
    document.querySelector(".button-cart").style.display = "none";
    document.querySelector(".user-name").style.display = "none";
  });
})();
