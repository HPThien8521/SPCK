const nav1 = document.getElementById("nav");

document.addEventListener("scroll", (e) => {
  if (window.scrollY >= 73) {
    nav1.classList.add("fixed");
  } else {
    nav1.classList.remove("fixed");
  }
});
