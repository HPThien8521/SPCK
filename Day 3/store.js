const nav2 = document.getElementById("nav-2");
const nav1 = document.getElementById("nav");

document.addEventListener("scroll", (e) => {
  document.getElementById("count-products-2").innerHTML =
    document.getElementById("count-products").innerHTML;
  if (window.scrollY >= 73) {
    nav2.classList.add("fixed");
    nav1.classList.add("remove");
  } else {
    nav2.classList.remove("fixed");
    nav1.classList.remove("remove");
  }
});
