const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const DEFAULT_VALUE = "Ho Chi Minh";
const searchInput = document.getElementById("search-input");
const name = document.querySelector(".name");
const type = document.querySelector(".type");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const bio = document.querySelector(".bio");

searchInput.addEventListener("change", (event) => {
    fetch (
        `https://pokeapi.co/api/v2/pokemon/${event.target.value}`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log("data", data);
            name.innerHTML = data.name || DEFAULT_VALUE; 
            type.innerHTML = data.types[0].type.name ;
            height.innerHTML = data.height ;
            weight.innerHTML = data.weight ;
            wind.innerHTML = data.wind.speed || "1"
        })
});