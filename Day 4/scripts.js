const loading = document.querySelector(".loading-text");
const image = document.querySelector(".image");

let load = 0;
let final = 100;
let int = setInterval(blurry, 30);
let int1 = setInterval(blurry1, 30);

function blurry() {
  load++;

  if (load > 99) {
    clearTimeout(int);
  }
  loading.innerHTML = `${load}%`;
}
function blurry1() {
  final--;
  if (final < 1) {
    clearInterval(int1);
  }
  const blur = final/10
  loading.style.opacity = `${final/100}`
  image.style.filter = `blur(${final}px)`
  console.log(blur);
}
