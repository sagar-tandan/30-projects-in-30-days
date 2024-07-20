const carousel = document.querySelector(".carousel");
const image_container = document.querySelector(".images");
const allImages = document.querySelectorAll("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

let interval = setInterval(slide, 2000);

function slide() {
  index++;
  ChangeImages();
}

function ChangeImages() {
  if (index > allImages.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = allImages.length - 1;
  }
  image_container.style.transform = `translate(-${index * 1024}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(slide, 2000);
}

prev.addEventListener("click", () => {
  index--;
  ChangeImages();
  resetInterval();
});

next.addEventListener("click", () => {
  index++;
  ChangeImages();
  resetInterval();
});
