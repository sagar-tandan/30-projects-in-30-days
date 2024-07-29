const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");
const startbtn = document.getElementById("start");

startbtn.addEventListener("click", () => {
  cards.forEach((card, index) => {
    setColor(card, index);
    setTimeout(() => {
      card.innerHTML = ``;
      card.style.backgroundColor = `burlywood`;
      card.classList.remove("active");
    }, 1000);
  });
  startbtn.remove();
});

let complete = 0;

function onFinishedLoad() {
  complete = 0; // Reset complete counter
  cards.forEach((card) => {
    if (card.className.includes("matched")) {
      complete++;
    }
  });
  if (complete === cards.length) {
    // Check if all cards are matched
    setTimeout(() => {
      container.innerHTML = `<div class="completed">
      <p>Congratulations, you have completed the game!!</p>
      <button class="btn" id="btn">Play Again</button>
    </div>`;
      const btn = document.getElementById("btn");

      btn.addEventListener("click", () => {
        location.reload();
      });
    }, 500);
  }
}

// const colors = [
//   "#3352d6",
//   "#3352d6",
//   "#fe0000",
//   "#fe0000",
//   "#20ab8e",
//   "#20ab8e",
//   "#8052ec",
//   "#8052ec",
//   "#121212",
//   "#121212",
//   "#f87316",
//   "#f87316",
//   "#fbc20c",
//   "#fbc20c",
//   "#94a3b8",
//   "#94a3b8",
//   "#414e55",
//   "#414e55",
//   "#16a34a",
//   "#16a34a",
// ];

const colors = [
  "./images/antman.jpg",
  "./images/antman.jpg",
  "./images/captain.jpg",
  "./images/captain.jpg",
  "./images/groot.jpg",
  "./images/groot.jpg",
  "./images/hulk.jpg",
  "./images/hulk.jpg",
  "./images/ironman.jpg",
  "./images/ironman.jpg",
  "./images/loki.jpg",
  "./images/loki.jpg",
  "./images/panther.jpg",
  "./images/panther.jpg",
  "./images/thor.jpg",
  "./images/thor.jpg",
  "./images/trhanos.jpg",
  "./images/trhanos.jpg",
  "./images/wolverine.jpg",
  "./images/wolverine.jpg",
];

let i = [];
let clickedCard = [];
let count = 0;

// Fisher Yates Shuffling Algorithm
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
    i.push(card.innerHTML);
    // console.log(card.innerHTML);
    clickedCard.push(card);
    if (count > 1) {
      checkColor();
    }
  });
});

function setColor(card, index) {
  card.classList.toggle("active");
  if (card.className.includes("active")) {
    // card.style.backgroundColor = shuffledColors[index];
    card.innerHTML = `<img src= ${shuffledColors[index]} alt="">`;
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
    onFinishedLoad(); // Check if all cards are matched
  } else {
    clickedCard.forEach((card) => {
      console.log(card);
      setTimeout(() => {
        card.classList.remove("active");
        card.innerHTML = ``;
        card.style.backgroundColor = `burlywood`;
        clickedCard.pop();
        i.pop();
      }, 500);
      count = 0;
    });
  }
}
