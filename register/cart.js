let data = JSON.parse(localStorage.getItem("cart")) || [];

const deleteCart = (items) => {
    const newData = data.filter((item) => item.name !== items.name);
    localStorage.setItem("cart", JSON.stringify(newData));
    window.location.href = "cart.html"
};

    if(data.length === 0) {
        let name = document.createElement("h5")
        name.classList.add("product-name")
        name.innerText = "No Items."
        name.appendChild()
    }

for (let items of data) {
    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = items.name.toUpperCase()
    container.appendChild(name)

    let price = document.createElement("h6")
    price.innerHTML = "<b>Price: </b> " + items.price
    container.appendChild(price)

    let btn = document.createElement("button")
    //---btn.setAttribute("onclick", "addToCart()")
    btn.onclick = () => deleteCart(items);
    btn.innerHTML = "Clear Item"
    container.appendChild(btn)

    card.appendChild(container)
    document.getElementById('products').appendChild(card)
}