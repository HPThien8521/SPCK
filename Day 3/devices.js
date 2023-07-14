let productList = [];
let productPickedList = JSON.parse(localStorage.getItem("timmy_cart")) || [];
document.getElementById("count-products").innerHTML = productPickedList.length;

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const renderCart = (myCart) => {
  // xu ly hien thi gio hang khi moi vao trang web
  if (myCart.length > 0) {
    // gio hang co san pham
    let htmlString = "";
    myCart.map((cartItem) => {
      htmlString += `
        <div class="cart-item d-flex my-3">
          <img
            class="me-3"
            src="${cartItem.img}"
            alt=""
            style="width: 120px; height: 120px; border-radius: 8px"
          />
          <div class="">
            <h4>${cartItem.name}</h4>
            <small class="text-primary">
              ${formatter(cartItem.salePrice)}
            </small>
            <div class=""></div>
            <small class="text-decoration-line-through">
              ${formatter(cartItem.price)}
            </small>
          </div>
        </div>
      `;
    });
    document.getElementById("cart-body").innerHTML = htmlString;
  } else {
    // gio hang rong
    document.getElementById("cart-body").innerHTML = `
    <div class="flex-fill">
      <img class="w-100" src="./empty-cart.svg" alt="" />
      <p class="text-center">Chưa có sản phẩm nào bên trong giỏ hàng</p>
    </div> 
  `;
  }
};

const addToCart = (id) => {
  console.log(id);
  const productPicked = productList.find((product) => product.id === id);
  productPickedList.push(productPicked);
  localStorage.setItem("timmy_cart", JSON.stringify(productPickedList));
  document.getElementById("count-products").innerHTML =
    productPickedList.length;
};

fetch("https://649ed197245f077f3e9cf1ef.mockapi.io/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    productList = [...data];
    let htmlString = "";
    data.map((productItem) => {
      htmlString += `
        <div class=" col-12 col-sm-6 col-l-4 col-xl-3">
          <div class="card-overlay">
            <div href="" class="card">
              <div class="product-item card border-0 shadow-sm px-2">
                <div class="overflow-none">
                <img src="${productItem.img}" class="card-img-top"
                  alt="...">
                  <button class="btn bg-article top-added display-none" onClick="addToCart(${
                    productItem.id
                  })" style="width: 100%;">ADD TO CART</button>
                  </div>
                <div class="card-body">
                  <h5 class="card-title">${productItem.name}</h5>
                  <span class="text-primary">${formatter.format(
                    productItem.salesPrice
                  )}</span>
                  <span class="text-decoration-line-through">${formatter.format(
                    productItem.price
                  )}</span>
                </div>
              </div>
              </div>
            </div>
            </div>
    `;
    });
    document.getElementById("product-list").innerHTML = htmlString;
  });
