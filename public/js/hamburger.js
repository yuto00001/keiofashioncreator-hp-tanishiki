"use strict";

const show = document.getElementById("show");
const hide = document.getElementById("hide");
const cover = document.getElementById("cover");

show.addEventListener("click", () => {
  document.body.className = "menu-open";
});

hide.addEventListener("click", () => {
  document.body.className = "";
});
cover.addEventListener("click", () => {
  hide.click();
});
