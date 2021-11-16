"use strict";

const menuItems = document.querySelectorAll(".tabMenu .tab");
//メニュー項目
menuItems.forEach((mouseoverItem) => {
  mouseoverItem.addEventListener("mouseover", (e) => {
    e.preventDefault();
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    mouseoverItem.classList.add("active");
  });
  mouseoverItem.addEventListener("mouseout", () => {
    mouseoverItem.classList.remove("active");
  });
});
