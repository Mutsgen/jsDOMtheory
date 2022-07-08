"use strict";

import { createHomePage } from "./createHomePage.js";
import { createPostPage } from "./createPostPage.js";

(function () {
  const url = new URL(location);
  const searchParams = url.searchParams.toString();
  if (url.searchParams.get("page") !== null) {
    createHomePage(url.searchParams.get("page"));
  }
  if (url.searchParams.toString() === "") {
    createHomePage();
  }
  if (url.searchParams.get("postId") !== null) {
    createPostPage();
  }
})();
