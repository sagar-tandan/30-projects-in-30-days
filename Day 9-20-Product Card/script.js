const viewdetails = document.querySelector(".viewdetails");
const card = document.querySelector(".card");
// const top_div = document.querySelector(".top-div");
const shoe = document.querySelector(".shoe");
const details = document.querySelector(".details");

viewdetails.addEventListener("click", () => {
  card.classList.add("active");
  //   top_div.classList.add("active");
  shoe.classList.add("active");
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
          <p>Lorem ipsum dolor sit amet consecte adipisicing elit. Consequatur deleniti Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas!...</p>

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
});
