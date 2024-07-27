const menus = document.querySelector("nav ul");
// const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

function handleMenu() {
  menus.classList.add("display");
}

function handleClose() {
  menus.classList.remove("display");
}

menuBtn.addEventListener("click", handleMenu);

closeBtn.addEventListener("click", handleClose);
