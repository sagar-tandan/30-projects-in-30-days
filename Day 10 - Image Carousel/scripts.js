const carousel = document.querySelector(".carousel");
const image_container = document.querySelector(".images");
const allImages = document.querySelectorAll("img");

let index = 0;

setInterval(slide, 2000);

function slide() {
  index++;
  if (index > allImages.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = allImages.length - 1;
  }
  image_container.style.transform = `translate(-${index * 1024}px)`;
}
