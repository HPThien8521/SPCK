const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const DEFAULT_VALUE = "Ho Chi Minh";
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind-speed");

searchInput.addEventListener("change", (event) => {
    fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log("data", data);
            cityName.innerHTML = data.name || DEFAULT_VALUE; 
            weatherState.innerHTML = data.weather[0].description ;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            temperature.innerHTML = Math.round(data.main.temp) ;
            sunrise.innerHTML = data.sys.sunrise ;
            sunset.innerHTML = data.sys.sunset ;
            humidity.innerHTML = data.main.humidity || "50";
            wind.innerHTML = data.wind.speed || "1"
        })
});