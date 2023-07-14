const nav2 = document.getElementById("nav-2");
const nav1 = document.getElementById("nav");
document.getElementById("count-products-3").innerHTML =
  productPickedList.length;
document.getElementById("count-products-4").innerHTML =
  document.getElementById("count-products-3").innerHTML;

document.addEventListener("scroll", (e) => {
  document.getElementById("count-products-3").innerHTML =
    productPickedList.length;
  document.getElementById("count-products-4").innerHTML =
    document.getElementById("count-products-3").innerHTML;
  if (window.scrollY >= 73) {
    nav2.classList.add("fixed");
    nav1.classList.add("remove");
  } else {
    nav2.classList.remove("fixed");
    nav1.classList.remove("remove");
  }
});
