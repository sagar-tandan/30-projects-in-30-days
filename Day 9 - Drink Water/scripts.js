const button = document.getElementById("btn");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = "Hello";
  container.appendChild(toast);

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
