const container = document.querySelector(".container");

const color = [
  "#39ff14", "#ff073a", "#0ff0fc", "#ff77f9", "#f6ff00", "#ff4da6",
  "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff",
  "#800000", "#008000", "#000080", "#808000", "#800080", "#008080",
  "#c0c0c0", "#ff6347", "#7fffd4", "#4682b4", "#daa520", "#d2691e",
  "#ff7f50", "#6495ed", "#dc143c", "#00ced1", "#9400d3", "#00bfff",
  "#696969", "#1e90ff", "#b22222", "#228b22", "#ff00ff", "#ffd700",
  "#adff2f", "#ff69b4", "#cd5c5c", "#4b0082", "#f0e68c", "#e6e6fa",
  "#7cfc00", "#fffacd", "#add8e6", "#f08080", "#90ee90", "#d3d3d3",
  "#ffb6c1", "#ffa07a", "#20b2aa", "#87cefa", "#778899", "#b0c4de",
  "#ffffe0", "#00ff7f", "#4682b4", "#d2b48c", "#d8bfd8", "#ff6347",
  "#40e0d0", "#ee82ee", "#f5deb3", "#f5f5f5", "#ffff00", "#9acd32",
  "#ff4500", "#8b0000", "#ff8c00", "#b8860b", "#006400", "#8fbc8f",
  "#556b2f", "#ffebcd", "#ffe4c4", "#8a2be2", "#a52a2a", "#deb887",
  "#5f9ea0", "#7fff00", "#d2691e", "#ff7f50", "#6495ed", "#dc143c",
  "#00ffff", "#00008b", "#b8860b", "#a9a9a9", "#006400", "#bdb76b",
  "#8b008b", "#556b2f", "#ff8c00", "#9932cc", "#8b0000", "#e9967a",
  "#8fbc8f", "#483d8b", "#2f4f4f", "#00ced1"
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
