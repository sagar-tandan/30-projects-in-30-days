const emotions = document.querySelectorAll(".emotion");
const message = document.querySelector(".message");
const submit = document.querySelector(".submit");
const cancel = document.querySelector(".cancel");
const errorMessage = document.querySelector(".errorMessage");
const container = document.querySelector(".container");

let Content = [];
let back;

function removeActive() {
  emotions.forEach((emotion) => {
    emotion.classList.remove("active");
  });
}
emotions.forEach((emotion) => {
  emotion.addEventListener("click", () => {
    removeActive();
    emotion.classList.add("active");
  });
});

submit.addEventListener("click", () => {
  Content = [];
  if (message.value == "") {
    console.log(errorMessage);
    errorMessage.innerHTML = "Please mention the reason.";
    message.style.border = `2px solid red`;
  } else {
    errorMessage.innerHTML = "";
    message.style.border = `2px solid lightblue`;
    const em = findEmotions();
    if (em == null) {
      errorMessage.innerHTML = "Please Choose the reaction emojies!";
    }
    const review = message.value;
    Content.push({ emotion: em, message: review });
    console.log(Content);
    LoadThankYou();
  }
});

function findEmotions() {
  let em;
  emotions.forEach((emotion) => {
    if (emotion.classList.contains("active")) {
      em = emotion.querySelector("h3").innerText;
    }
  });
  return em;
}

function LoadThankYou() {
  container.innerHTML = `<div class="feedback">
        <img
          class="thankUimg"
          src="https://cdn-icons-png.flaticon.com/256/1208/1208754.png"
          alt=""
        />
        <h2 class="thankUmessage">Thank you for your feedback</h2>
        <p class="thankUpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          exercitationem quo.
        </p>
        <button class="back">Back to Home</button>
      </div>`;
  back = document.querySelector(".back");
  back.addEventListener("click", () => {
    location.reload();
  });
}
