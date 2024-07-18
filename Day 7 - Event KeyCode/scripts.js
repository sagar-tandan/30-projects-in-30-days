const output = document.getElementById("output");
const button = document.querySelector(".btn");
window.addEventListener("keydown", (event) => {
  button.remove();
  output.innerHTML = ` <div class="event-key"> <small>event.key</small> <p>${
    event.key === " " ? "Space" : event.key
  }</p> </div> <div class="event-code"> <small>event.Code</small> <p>${
    event.code
  }</p> </div> <div class="event-keyCode"> <small>event.KeyCode</small> <p>${
    event.keyCode
  }</p> </div>`;
  console.log(event);
});
