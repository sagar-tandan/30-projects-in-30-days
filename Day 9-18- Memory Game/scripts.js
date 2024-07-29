const cards = document.querySelectorAll(".card");

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

// const colors = [
//   "https://hdqwalls.com/wallpapers/iron-man-avenger-g6.jpg",
//   "https://hdqwalls.com/wallpapers/iron-man-avenger-g6.jpg",
//   "https://wallpaperaccess.com/full/1307509.jpg",
//   "https://wallpaperaccess.com/full/1307509.jpg",
//   "https://th.bing.com/th/id/OIP.Z7zGZfYPXgaOx9Mhe6cC3wAAAA?rs=1&pid=ImgDetMain",
//   "https://th.bing.com/th/id/OIP.Z7zGZfYPXgaOx9Mhe6cC3wAAAA?rs=1&pid=ImgDetMain",
//   "https://i.pinimg.com/originals/0b/0e/f1/0b0ef1d8824447a78af7188663a1223e.jpg",
//   "https://i.pinimg.com/originals/0b/0e/f1/0b0ef1d8824447a78af7188663a1223e.jpg",
//   "https://th.bing.com/th/id/R.edb27abcadb5e51cefe19218a194a40b?rik=jK%2bJ6dNhIgfpdg&pid=ImgRaw&r=0",
//   "https://th.bing.com/th/id/R.edb27abcadb5e51cefe19218a194a40b?rik=jK%2bJ6dNhIgfpdg&pid=ImgRaw&r=0",
//   "https://th.bing.com/th/id/R.b43d58e9359fe5e2b1f055c872b4b66a?rik=Pg0q5b6c0UyXWw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fXdubWX1.jpg&ehk=jSVQway%2bJTf0DOFjsLN0z2o87v4t42bp3ty%2f7gxErSQ%3d&risl=&pid=ImgRaw&r=0",
//   "https://th.bing.com/th/id/R.b43d58e9359fe5e2b1f055c872b4b66a?rik=Pg0q5b6c0UyXWw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fXdubWX1.jpg&ehk=jSVQway%2bJTf0DOFjsLN0z2o87v4t42bp3ty%2f7gxErSQ%3d&risl=&pid=ImgRaw&r=0",
//   "https://images.hdqwalls.com/download/loki-artful-mischief-7i-1024x1024.jpg",
//   "https://images.hdqwalls.com/download/loki-artful-mischief-7i-1024x1024.jpg",
//   "https://th.bing.com/th/id/R.ff72f5c35beebb9c0b053666c5a93290?rik=O%2fgFWrAYsD7jxA&pid=ImgRaw&r=0",
//   "https://th.bing.com/th/id/R.ff72f5c35beebb9c0b053666c5a93290?rik=O%2fgFWrAYsD7jxA&pid=ImgRaw&r=0",
//   "https://th.bing.com/th/id/OIP.DEj0jnOmWIzrizmx2QMa1QAAAA?rs=1&pid=ImgDetMain",
//   "https://th.bing.com/th/id/OIP.DEj0jnOmWIzrizmx2QMa1QAAAA?rs=1&pid=ImgDetMain",
//   "https://qph.cf2.quoracdn.net/main-qimg-f7c8d260b403e8f42f14d1c922535c1d-lq",
//   "https://qph.cf2.quoracdn.net/main-qimg-f7c8d260b403e8f42f14d1c922535c1d-lq",
// ];
const colors = [
  "./images/antman.jpg",
  "./images/antman.jpg",
  "./images/captain.jpg",
  './images/captain.jpg',
  './images/groot.jpg',
  './images/groot.jpg',
  './images/hulk.jpg',
  './images/hulk.jpg',
  './images/ironman.jpg',
  './images/ironman.jpg',
  './images/loki.jpg',
  './images/loki.jpg',
  './images/panther.jpg',
  './images/panther.jpg',
  './images/thor.jpg',
  './images/thor.jpg',
  './images/trhanos.jpg',
  './images/trhanos.jpg',
  './images/wolverine.jpg',
  './images/wolverine.jpg'
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
