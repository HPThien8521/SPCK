let productList = [];
let productPickedList = JSON.parse(localStorage.getItem("timmy_cart")) || [];
document.getElementById("count-products").innerHTML = productPickedList.length;

const formatter = (number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);
};

const calcBill = (productPickedList) => {
  const totalBill = productPickedList.reduce(
    (accumulator, productPicked) => accumulator + productPicked.salesPrice,
    0
  );
  document.getElementById("total-money").innerHTML = formatter(totalBill);
};

calcBill(productPickedList);

// khai báo hàm xoá sản phẩm
const removeItem = (index) => {
  // xoá sản phẩm từ index nhận vào của hàm
  productPickedList.splice(index, 1);
  // cập nhật local storage
  localStorage.setItem("timmy_cart", JSON.stringify(productPickedList));
  document.getElementById("count-products").innerHTML =
    productPickedList.length;
  renderCart(productPickedList);
  calcBill(productPickedList);
};

const renderCart = (myCart) => {
  // xu ly hien thi gio hang khi moi vao trang web
  if (myCart.length > 0) {
    // gio hang co san pham
    let htmlString = "";
    myCart.map((cartItem, index) => {
      htmlString += `
        <div class="cart-item d-flex ps-3 py-3 w-100">
          <img
            class="me-3"
            src="${cartItem.img}"
            alt=""
            style="width: 120px; height: 120px; border-radius: 8px; background: white "
          />
          <div class="w-100">
            <div class="d-flex align-items-start">
              <h4>${cartItem.name}</h4>
              <button class="del-btn" onclick="removeItem(${index})">
                <svg class="delete-icon me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
              </button>
            </div>
            <small class="text-primary">
              ${formatter(cartItem.salesPrice)}
            </small>
            <div class=""></div>
            <small class="text-decoration-line-through">
              ${formatter(cartItem.price)}
            </small>

          </div>
        </div>
      `;
    });
    if (document.getElementById("cart-body")) {
      document.getElementById("cart-body").innerHTML = htmlString;
    }
  } else {
    // gio hang rong
    document.getElementById("cart-body").innerHTML = `
    <div class="flex-fill">
      <p class="text-center">There are no products yet.</p>
    </div> 
  `;
  }
};

renderCart(productPickedList);

const addToCart = (id) => {
  console.log(id);
  const productPicked = productList.find((product) => product.id === id);
  productPickedList.push(productPicked);
  localStorage.setItem("timmy_cart", JSON.stringify(productPickedList));
  document.getElementById("count-products").innerHTML =
    productPickedList.length;
  renderCart(productPickedList);
  calcBill(productPickedList);
};
const order = () => {
  const address = localStorage.getItem("adress");

  if (productPickedList.length > 0) {
    localStorage.removeItem("timmy_cart");
    renderCart([]);
    calcBill([]);
    document.getElementById("count-products").innerHTML =
      productPickedList.length;
    Swal.fire({
      title: "Success!",
      text: "Order successful",
      html: `
          Your order will be delivered to ${address}
        `,
      icon: "success",
      showConfirmButton: false,
    });
  } else {
    Swal.fire({
      title: "Error!",
      text: "Empty Cart!",
      html: `
          Your cart must have atleast one item!
        `,
      icon: "error",
      showConfirmButton: false,
    });
  }
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
                  <span class="text-primary">${formatter(
                    productItem.salesPrice
                  )}</span>
                  <span class="text-decoration-line-through">${formatter(
                    productItem.price
                  )}</span>
                </div>
              </div>
              </div>
            </div>
            </div>
    `;
    });
    if (document.getElementById("product-list")) {
      document.getElementById("product-list").innerHTML = htmlString;
    }
  });
