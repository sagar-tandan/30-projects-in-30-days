const count = document.querySelector(".count");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

let counts = 0;

minus.addEventListener("click", () => {
  if (counts > 0) {
    counts = counts - 1;
    count.innerHTML = `${counts}`;
  }
});

plus.addEventListener("click", () => {
  counts = counts + 1;
  count.innerHTML = `${counts}`;
});
