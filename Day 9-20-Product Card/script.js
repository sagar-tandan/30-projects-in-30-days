const viewdetails = document.querySelector(".viewdetails");
const card = document.querySelector(".card");
const top_div = document.querySelector(".top-div");
const shoe = document.querySelector(".shoe");
const details = document.querySelector(".details");

viewdetails.addEventListener("click", () => {
  card.classList.add("active");
  top_div.classList.add("active");
  top_div.innerHTML = `<div class="image_slider">
              <img src="https://i.pinimg.com/originals/d3/3e/95/d33e95e207409630f32bc37e0cea8f74.jpg" alt="">
              <img src="https://s3.amazonaws.com/tasmeemme.project.mi.thumbnails/resize_805x9000/559/623559.jpg" alt="">
              <img src="https://2.bp.blogspot.com/-aZbrzuy8H8E/V0S045mmb9I/AAAAAAAAACk/BlwBEIvJOc4cXDY59VtHeDMxApwdcfvQwCLcB/s1600/nike%2B6.jpg" alt="">

            </div>
            <div class="thumbnail">
              <img id="thumb1" src="https://i.pinimg.com/originals/d3/3e/95/d33e95e207409630f32bc37e0cea8f74.jpg" alt="">
              <img id="thumb2" src="https://s3.amazonaws.com/tasmeemme.project.mi.thumbnails/resize_805x9000/559/623559.jpg" alt="">
              <img id="thumb3" src="https://2.bp.blogspot.com/-aZbrzuy8H8E/V0S045mmb9I/AAAAAAAAACk/BlwBEIvJOc4cXDY59VtHeDMxApwdcfvQwCLcB/s1600/nike%2B6.jpg" alt="">


            </div>`;
  shoe.classList.add("active");
  details.classList.add("active");
  details.innerHTML = `<div class="name">
            <span class="first">HARTBEE</span>
            <span class="spoort">SPOORT</span>
            <span class="button">New</span>
          </div>
          <div class="basketball">BASKET BALL COLLECTION</div>
          <div class="rating">&#9733&#9733&#9733&#9733&#9734 </div>
          <div class="oldprice">Old Price: $470.99</div>
          <div class="newPrice">New Price: $400.39</div>
          <div class="productdetails">
            <p class="productDetails">Product Details</p>
            <hr>
          </div>
          <p>We bring to you this pair of sneakers which look attractive and stylish. They have been designed for men who need a pair of comfortable footwear for their day trips. The shoes feature a comfortable sole and a cushioned heel and is available in a set of attractive colours. A good pair of sneakers always comes in handy when you want to sport a casual look or an athleisure look for the day.</p>

          <div class="table">
            <div class="condition">
              <span class="conditionText">Condition:</span>
              <span class="answer">Brand New</span>
            </div>
            <hr>
            <div class="condition">
              <span class="conditionText">Color:</span>
              <span class="answer">Red, Black, Green</span>
            </div>
            <hr>
            <div class="condition">
              <span class="conditionText">Available:</span>
              <span class="answer">In Stock</span>
            </div>
            <hr>
            <div class="condition">
              <span class="conditionText">Category</span>
              <span class="answer">Shoes</span>
            </div>
          </div>

          <div class="cart">
            <span>Add to cart</span>
          </div>`;
  //   top_div.innerHTML = ``;
  const ratings = document.querySelector(".rating");
  ratings.classList.add("active");

  const imageDiv = document.querySelector(".image_slider");

  const thumb1 = document.getElementById("thumb1");
  const thumb2 = document.getElementById("thumb2");
  const thumb3 = document.getElementById("thumb3");

  thumb1.addEventListener("click", () => {
    thumb1.classList.add("active");
    thumb2.classList.remove("active");
    thumb3.classList.remove("active");
    imageDiv.style.transform = `translateX(0px)`;
    consol.log("Transform applied:", imageDiv.style.transform); // Debugging log
  });

  thumb2.addEventListener("click", () => {
    thumb1.classList.remove("active");
    thumb3.classList.remove("active");
    thumb2.classList.add("active");
    imageDiv.style.transform = `translateX(-500px)`;
    consol.log("Transform applied:", imageDiv.style.transform); // Debugging log
  });

  thumb3.addEventListener("click", () => {
    thumb3.classList.add("active");
    thumb1.classList.remove("active");
    thumb2.classList.remove("active");

    imageDiv.style.transform = `translateX(-1000px)`;
    consol.log("Transform applied:", imageDiv.style.transform); // Debugging log
  });
});
