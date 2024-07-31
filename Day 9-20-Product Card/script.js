const viewdetails = document.querySelector(".viewdetails");
const card = document.querySelector(".card");
const top_div = document.querySelector(".top-div");
const shoe = document.querySelector(".shoe");
const details = document.querySelector(".details");

viewdetails.addEventListener("click", () => {
  card.classList.add("active");
  top_div.classList.add("active");
  top_div.innerHTML = `<div class="image_slider">
              <img src="https://th.bing.com/th/id/OIP.V3yfC8dTPQSNwPsI7a_uygHaFE?w=281&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">
              <img src="https://th.bing.com/th/id/OIP.XQreaeMZpkz_8u5ziN4VqwHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3" alt="">
              <img src="https://th.bing.com/th/id/OIP.kvQ7lgbteXLLj9q6PC6T0wHaE8?w=1200&h=800&rs=1&pid=ImgDetMain" alt="">

            </div>
            <div class="thumbnail">
              <img id="thumb1" src="https://th.bing.com/th/id/OIP.V3yfC8dTPQSNwPsI7a_uygHaFE?w=281&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">
              <img id="thumb2" src="https://th.bing.com/th/id/OIP.XQreaeMZpkz_8u5ziN4VqwHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.3" alt="">
              <img id="thumb3" src="https://th.bing.com/th/id/OIP.kvQ7lgbteXLLj9q6PC6T0wHaE8?w=1200&h=800&rs=1&pid=ImgDetMain" alt="">


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
});
