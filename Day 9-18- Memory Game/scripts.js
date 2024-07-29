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
  "#94a3b8",
  "#94a3b8",
  "#414e55",
  "#414e55",
  "#16a34a",
  "#16a34a",
];
let i = [];
let clickedCard = [];
let count = 0;

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
    count++;
    setColor(card, index);
    i.push(card.style.backgroundColor);
    clickedCard.push(card);
    if (count > 1) {
      checkColor();
    }
  });
});

function setColor(card, index) {
  card.classList.toggle("active");
  if (card.className.includes("active")) {
    card.style.backgroundColor = shuffledColors[index];
  } else {
    card.style.backgroundColor = `burlywood`;
  }
}

function checkColor() {
  if (i[0] === i[1]) {
    clickedCard.forEach((card) => {
      card.classList.add("matched");
    });
    count = 0;
    i.splice(0);
    clickedCard.splice(0);
  } else {
    clickedCard.forEach((card) => {
      console.log(card);
      setTimeout(() => {
        card.classList.remove("active");
        card.style.backgroundColor = `burlywood`;
        clickedCard.pop();
        i.pop();
      }, 500);
      count = 0;
    });
  }
}
