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
  toast.innerHTML = `<img src="" alt="">
          <p>${message ? message : "This is a toast"}</p>`;

  //   now setting images
  const image = toast.querySelector("img");
  if (toast.classList.contains("Success")) {
    image.src = "https://cdn-icons-png.flaticon.com/128/190/190411.png";
  } else if (toast.classList.contains("Error")) {
    image.src = "https://cdn-icons-png.flaticon.com/128/190/190406.png";
  } else {
    image.src = "https://cdn-icons-png.flaticon.com/128/785/785822.png";
  }

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
