const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

fetch("https://649ed197245f077f3e9cf1ef.mockapi.io/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    document.getElementById("product-list").innerHTML = `
      <div class="col-3">
        <div class="product-item card border-0 shadow-sm px-2">
          <img src="${data[1].img}" class="card-img-top"
            alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[1].name}</h5>
            <span class="text-primary">${formatter.format(
              data[1].salesPrice
            )}</span>
            <span class="text-decoration-line-through">${formatter.format(
              data[1].price
            )}</span>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="product-item card border-0 shadow-sm px-2">
          <img src="${data[1].img}" class="card-img-top"
            alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[1].name}</h5>
            <span class="text-primary">${formatter.format(
              data[1].salesPrice
            )}</span>
            <span class="text-decoration-line-through">${formatter.format(
              data[1].price
            )}</span>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="product-item card border-0 shadow-sm px-2">
          <img src="${data[1].img}" class="card-img-top"
            alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[1].name}</h5>
            <span class="text-primary">${formatter.format(
              data[1].salesPrice
            )}</span>
            <span class="text-decoration-line-through">${formatter.format(
              data[1].price
            )}</span>
          </div>
        </div>
      </div>
      <div class="col-3">
      <a href="" class="card">
        <div class="product-item card border-0 shadow-sm px-2">
          <img src="${data[1].img}" class="card-img-top"
            alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[1].name}</h5>
            <span class="text-primary">${formatter.format(
              data[1].salesPrice
            )}</span>
            <span class="text-decoration-line-through">${formatter.format(
              data[1].price
            )}</span>
          </div>
        </div>
        </a>
      </div>
      `;
  });
