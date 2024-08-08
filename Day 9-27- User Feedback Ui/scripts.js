const emotions = document.querySelectorAll(".emotion");
const message = document.querySelector(".message");
const submit = document.querySelector(".submit");
const cancel = document.querySelector(".cancel");
const errorMessage = document.querySelector(".errorMessage");

let Content = [];

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
  if (message.value == "") {
    console.log(errorMessage);
    errorMessage.innerHTML = "Please mention the reason.";
    message.style.border = `2px solid red`;
  } else {
    errorMessage.innerHTML = "";
    message.style.border = `2px solid lightblue`;
    const emotion = findEmotions();
    if (emotion == null) {
      errorMessage.innerHTML = "Please Choose the reaction emojies!";
    }
    const review = message.value;
    Content.push({ emotion: emotion, message: review });
    console.log(Content);
  }
});

function findEmotions() {
  emotions.forEach((emotion) => {
    if (emotion.classList.contains("active")) {
      return emotion.innerText;
    }
  });
}
