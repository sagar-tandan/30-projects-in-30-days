const container = document.querySelector(".container");

let SQUARE = 500;

for (let i = 0; i < SQUARE; i++) {
  const element = document.createElement("div");
  element.classList.add("square");
  container.appendChild(element);
}

