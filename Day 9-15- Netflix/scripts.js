const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const white = document.querySelector(".white");
const red = document.querySelector(".red");
const black = document.querySelector(".black");

close.addEventListener("click", () => {
  white.classList.add("active");

  setTimeout(() => {
    red.classList.add("active");
  }, 200);

  setTimeout(() => {
    black.classList.add("active");
  }, 400);
});

menu.addEventListener("click", () => {
  black.classList.remove("active");

  setTimeout(() => {
    red.classList.remove("active");
  }, 200);

  setTimeout(() => {
    white.classList.remove("active");
  }, 400);
});
