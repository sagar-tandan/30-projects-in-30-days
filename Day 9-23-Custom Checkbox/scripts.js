const inputs = document.querySelectorAll("input");
const time = document.querySelector("#time");
const love = document.querySelector("#love");
const money = document.querySelector("#money");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => hereisLogic(e.target));
});

function hereisLogic(checkedEvent) {
  if (time.checked && love.checked && money.checked) {
    if (time === checkedEvent) {
      love.checked = false;
    }
    if (love === checkedEvent) {
      money.checked = false;
    }
    if (money === checkedEvent) {
      time.checked = false;
    }
  }
}
