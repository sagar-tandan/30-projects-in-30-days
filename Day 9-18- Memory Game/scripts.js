const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");
const startbtn = document.getElementById("start");

cards.forEach((card) => {
  card.classList.add("unclicked");
});

startbtn.addEventListener("click", () => {
  cards.forEach((card, index) => {
    card.classList.remove("unclicked");
    setColor(card, index);
    setTimeout(() => {
      card.innerHTML = ``;
      card.style.backgroundColor = `burlywood`;
      card.classList.remove("active");
    }, 1500);
  });
  startbtn.remove();
});

let complete = 0;

function onFinishedLoad() {
  complete = 0; // Reset complete counter
  cards.forEach((card) => {
    if (card.classList.contains("matched")) {
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
let checkSameIndex = [];

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
    if (
      card.classList.contains("matched") ||
      card.classList.contains("active")
    ) {
      return; // Ignore clicks on matched or already active cards
    }

    count++;
    setColor(card, index);
    checkSameIndex.push(index);

    i.push(card.innerHTML);
    clickedCard.push(card);
    if (count > 1) {
      if (checkSameIndex[0] === checkSameIndex[1]) {
        card.classList.remove("active");
        card.innerHTML = ``;
        card.style.backgroundColor = `burlywood`;
        i = [];
        checkSameIndex = [];
        clickedCard = [];
      } else {
        checkColor();
      }
    }
  });
});

function setColor(card, index) {
  card.classList.toggle("active");
  if (card.classList.contains("active")) {
    card.innerHTML = `<img src="${shuffledColors[index]}" alt="">`;
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
    checkSameIndex = [];
    i = [];
    clickedCard = [];
    onFinishedLoad(); // Check if all cards are matched
  } else {
    clickedCard.forEach((card) => {
      setTimeout(() => {
        card.classList.remove("active");
        card.innerHTML = ``;
        card.style.backgroundColor = `burlywood`;
      }, 500);
    });
    clickedCard = [];
    i = [];
    count = 0;
  }
}
