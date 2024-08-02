const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    console.log(index);

    // Reset the color of all stars
    stars.forEach((star) => {
      star.style.color = "";
    });

    for (i = 0; i <= index; i++) {
      console.log(stars[i]);
      stars[i].style.color = `gold`;
    }
  });
});
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    for (i = 0; i <= index; i++) {
      console.log(stars[i]);
      stars[i].classList.add("active");
    }
  });
  star.addEventListener("mouseout", () => {
    for (i = 0; i <= index; i++) {
      console.log(stars[i]);
      stars[i].classList.remove("active");
    }
  });
});
