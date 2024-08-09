const input = document.getElementById("input");
const image = document.querySelector(".QrImage");
const button = document.querySelector(".submit");

button.addEventListener("click", () => {
  if (input.value.trim() != "") {
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value.trim()}`;
    image.classList.add("active");
  } else {
    input.value = "";
    input.focus();
    image.classList.remove("active");
  }
});
