//----    'https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric'
const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";

document.getElementById("btnAPI").addEventListener('click', (event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${API_KEY}&lang=vi&units=metric`)

        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
        })
})



const games = [
    {
        name: "Fortnite"
    },
    {
        name: "Roblox"
    },
    {
        name: "Minecraft"
    },
    {
        name: "Call Of Duty"
    },
    {
        name: "League Of Legends"
    },
    {
        name: "Limbo"
    },
    {
        name: "Among Us"
    },
    {
        name: "Free Fire"
    },
    {
        name: "Cuphead"
    },
    {
        name: "Clash Of Clans"
    },
]

let index = games.findIndex((game) => game.name === "Roblox")
console.log({index})