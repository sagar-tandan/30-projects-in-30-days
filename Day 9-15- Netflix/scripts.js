const menu = document.querySelector(".menu");
const white = document.querySelector(".white");
const red = document.querySelector(".red");
const black = document.querySelector(".black");


menu.addEventListener("click", () => {
  white.classList.add("active");

  setTimeout(() => {
    red.classList.add("active");
  }, 200);

  setTimeout(() => {
    black.classList.add("active");
  }, 400);
});
