const input = document.getElementById("input");
const btn = document.getElementById("button");

btn.addEventListener("click", () => handleClick());

function handleClick() {
  console.log(input.value);

}
