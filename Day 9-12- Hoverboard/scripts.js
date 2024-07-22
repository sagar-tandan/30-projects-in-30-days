const container = document.querySelector(".container");

const color = [
  "#39ff14",
  "#ff073a",
  "#0ff0fc",
  "#ff77f9",
  "#f6ff00",
  "#ff4da6",
];
let SQUARE = 500;

for (let i = 0; i < SQUARE; i++) {
  const element = document.createElement("div");
  element.classList.add("square");
  container.appendChild(element);
}

const allSquare = document.querySelectorAll(".square");

allSquare.forEach((square) => {
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
});

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = `#3e3e3e`;
  element.style.boxShadow = ``;
}
function getRandomColor() {
  const randomColor = Math.floor(Math.random() * color.length);
  return color[randomColor];
}
