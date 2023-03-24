let products = {
  data: [
    {
      productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
      price: "35",
      image:
        "https://product.hstatic.net/200000260587/product/46b63ccc-57de-4958-9d61-654f8a638432_065a9de6965549aa9158a860092d0789.jpg",
    },
 
    {
      productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
      price: "34",
      image:
        "https://product.hstatic.net/200000260587/product/46b63ccc-57de-4958-9d61-654f8a638432_065a9de6965549aa9158a860092d0789.jpg",
    },
 
    {
      productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
      price: "35",
      image:
        "https://product.hstatic.net/200000260587/product/46b63ccc-57de-4958-9d61-654f8a638432_065a9de6965549aa9158a860092d0789.jpg",
    },
 
    {
      productName: "LEVENTS® TRAVEL TEE/ BLACK",
      price: "22",
      image:
        "https://product.hstatic.net/200000260587/product/46b63ccc-57de-4958-9d61-654f8a638432_065a9de6965549aa9158a860092d0789.jpg",
    },
 
    {
      productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
      price: "38",
      image:
        "https://product.hstatic.net/200000260587/product/46b63ccc-57de-4958-9d61-654f8a638432_065a9de6965549aa9158a860092d0789.jpg",
    },
 
    {
      productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
      price: "42",
      image:
        "https://product.hstatic.net/200000260587/product/46b63ccc-57de-4958-9d61-654f8a638432_065a9de6965549aa9158a860092d0789.jpg",
    },
 
    {
      productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
      price: "37",
      image:
        "https://product.hstatic.net/200000260587/product/46b63ccc-57de-4958-9d61-654f8a638432_065a9de6965549aa9158a860092d0789.jpg",
    },
 
    {
      productName: "LEVENTS® EARTH TEE/ PURPLE",
      price: "36",
      image:
        "https://product.hstatic.net/200000260587/product/46b63ccc-57de-4958-9d61-654f8a638432_065a9de6965549aa9158a860092d0789.jpg",
    },
 
    {
      productName: "LEVENTS® PLAY LOGO TEE/ PINK",
      price: "29",
      image:
        "https://product.hstatic.net/200000260587/product/46b63ccc-57de-4958-9d61-654f8a638432_065a9de6965549aa9158a860092d0789.jpg",
    },
  ],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    let container = document.createElement("div");
    container.classList.add("content");

    let name = document.createElement("div");
    name.classList.add("nameProduct");
    name.innerText = i.productName;
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}