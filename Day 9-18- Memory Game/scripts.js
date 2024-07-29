const cards = document.querySelectorAll(".card");

const colors = [
  "#3352d6",
  "#3352d6",
  "#fe0000",
  "#fe0000",
  "#20ab8e",
  "#20ab8e",
  "#8052ec",
  "#8052ec",
  "#121212",
  "#121212",
  "#f87316",
  "#f87316",
  "#fbc20c",
  "#fbc20c",
  "#d4b59e",
  "#d4b59e",
  "#414e55",
  "#414e55",
  "#16a34a",
  "#16a34a",
];

//Fisher Yates Shuffling Algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the colors
const shuffledColors = shuffleArray([...colors]);

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
    if (card.className.includes("active")) {
      card.style.backgroundColor = shuffledColors[index];
    } else {
      card.style.backgroundColor = `burlywood`;
    }
  });
});
