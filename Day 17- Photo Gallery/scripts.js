const input = document.getElementById("input");
const btn = document.getElementById("button");
const info = document.getElementById("value");
const images = document.querySelector(".images");

let allPhotos = [];

btn.addEventListener("click", () => handleClick());

function handleClick() {
  images.innerHTML = ``;
  if (input.value < 1 || input.value > 10) {
    info.classList.remove("hidden");
  } else {
    info.classList.add("hidden");
    fetchPhotos(input.value);
  }
}

async function fetchPhotos(number) {
  const response = await fetch(
    `https://api.unsplash.com/photos?per_page=${number}&page=${Math.round(
      Math.random() * 1000
    )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`
  );
  allPhotos = await response.json();

  MapallPhotos();
}

function MapallPhotos() {
  allPhotos.map((photo) => {
    const image = document.createElement("img");
    image.src = `${photo.urls.regular}`;
    images.appendChild(image);
  });
}
