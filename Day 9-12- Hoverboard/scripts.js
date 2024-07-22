const container = document.querySelector(".container");

const color = ["#fff", "#f2f2f2", "#c2c2c2"];
let SQUARE = 500;

for (let i = 0; i < SQUARE; i++) {
  const element = document.createElement("div");
  element.classList.add("square");
  container.appendChild(element);
}

const allSquare = document.querySelectorAll(".square");

allSquare.forEach((square) => {
  square.addEventListener("mouseover", setColor(square));
});

function setColor(element) {
  const color = getRandomColor();
  console.log(color);
}
function getRandomColor() {
  const randomColor = Math.floor(Math.random() * color.length);
  return randomColor;
}
