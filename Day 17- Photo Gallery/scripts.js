const input = document.getElementById("input");
const btn = document.getElementById("button");
const info = document.getElementById("value");

btn.addEventListener("click", () => handleClick());

function handleClick() {
  if (input.value < 1 || input.value > 10) {
    info.classList.remove('hidden')
  }else{
    info.classList.add('hidden')
  }
}
