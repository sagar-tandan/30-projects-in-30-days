const menu = document.querySelector(".menu");
const white = document.querySelector(".white");
const red = document.querySelector(".red");
const black = document.querySelector(".black");
menu.addEventListener("click", () => {
  white.classList.add("active");
  red.classList.add("active");
  black.classList.add("active");
});
