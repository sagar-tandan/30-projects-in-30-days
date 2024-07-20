const button = document.getElementById("btn");
const toasts = document.querySelector(".toasts");
const input = document.querySelector(".message");
const types = document.getElementById("type");

button.addEventListener("click", () => {
  const message = input.value;
  const type = types.value;

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(type);
  toast.innerText = message ? message : "Random Message";
  toasts.appendChild(toast);

  // Adding the active class after a short delay
  setTimeout(() => {
    toast.classList.add("active");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("active");
    setTimeout(() => {
      toast.remove();
    }, 100);
  }, 3000);
});