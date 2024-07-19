document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".answer");
    const plus = item.querySelector(".plus");
    answer.classList.toggle("active");
    plus.classList.toggle("active");
  });
});