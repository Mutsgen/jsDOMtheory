"use strict";

import { animateTimer } from "./animateTimer.js";
import { createPopup } from "./createPopup.js";

(function () {
  const applicationButtons = document.querySelectorAll(".application_button");
  const navLinks = document.querySelector(".navs").querySelectorAll("a");
  for (let i = 0; i < applicationButtons.length; i++) {
    applicationButtons[i].addEventListener("click", () => {
      if (document.querySelector(".popup") != null) return;
      document.body.style.marginRight = "calc(-1 * (100vw - 100 %))";
        document.body.style.overflow = "hidden";
        createPopup(document.body);
        
    });
  }

  //   navLinks.forEach((link) => {
  //     link.addEventListener("click", (event) => {
  //       event.preventDefault();
  //       const section = document.querySelector(link.getAttribute("href"));
  //       if (section) {
  //         seamless.scrollIntoView(section, {
  //           behavior: "smooth",
  //           block: "start",
  //           inline: "center",
  //         });
  //       }
  //     });
  //   });
  const timer = animateTimer(new Date("2022.07.19"));
})();
