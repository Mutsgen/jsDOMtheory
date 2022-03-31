"use strict";

import { CreatePage } from "./CreatePage.js";
import { CreateSwapPage } from "./CreateSwapPage.js";

(function () {
  const forLocal = CreatePage();
  setInterval(() => {
    console.log(forLocal);
  }, 5000);
})();
