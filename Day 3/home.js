const nav2 = document.getElementById("nav-2");
const nav1 = document.getElementById("nav");

document.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY >= 73) {
    nav2.classList.add("fixed");
    nav1.classList.add("remove");
  } else {
    nav2.classList.remove("fixed");
    nav1.classList.remove("remove");
  }
});
