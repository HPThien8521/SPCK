
var n5 = document.getElementById("5");
var n20 = document.getElementById("20");
var n50 = document.getElementById("50");
var n100 = document.getElementById("100");
var other = document.getElementById("other");
    n5.style.backgroundColor = "#edf2f6"
    n20.style.backgroundColor = "#edf2f6"
    n50.style.backgroundColor = "#edf2f6"
    n100.style.backgroundColor = "#edf2f6"
    other.style.backgroundColor = "#edf2f6"


    n5.onclick = function(){
        n5.style.backgroundColor = "#113259"
        n20.style.backgroundColor = "#edf2f6"
        n50.style.backgroundColor = "#edf2f6"
        n100.style.backgroundColor = "#edf2f6"
        other.style.backgroundColor = "#edf2f6"
        n5.style.color = "white"
        n20.style.color = "black"
        n50.style.color = "black"
        n100.style.color = "black"
        other.style.color = "black"
    }
    n20.onclick = function(){
        n5.style.backgroundColor = "#edf2f6"
        n20.style.backgroundColor = "#113259"
        n50.style.backgroundColor = "#edf2f6"
        n100.style.backgroundColor = "#edf2f6"
        other.style.backgroundColor = "#edf2f6"
        n5.style.color = "black"
        n20.style.color = "white"
        n50.style.color = "black"
        n100.style.color = "black"
        other.style.color = "black"
    }
    n50.onclick = function(){
        n5.style.backgroundColor = "#edf2f6"
        n20.style.backgroundColor = "#edf2f6"
        n50.style.backgroundColor = "#113259"
        n100.style.backgroundColor = "#edf2f6"
        other.style.backgroundColor = "#edf2f6"
        n5.style.color = "black"
        n20.style.color = "black"
        n50.style.color = "white"
        n100.style.color = "black"
        other.style.color = "black"
    }
    n100.onclick = function(){
        n5.style.backgroundColor = "#edf2f6"
        n20.style.backgroundColor = "#edf2f6"
        n50.style.backgroundColor = "#edf2f6"
        n100.style.backgroundColor = "#113259"
        other.style.backgroundColor = "#edf2f6"
        n5.style.color = "black"
        n20.style.color = "black"
        n50.style.color = "black"
        n100.style.color = "white"
        other.style.color = "black"
    }
    other.onclick = function(){
        n5.style.backgroundColor = "#edf2f6"
        n20.style.backgroundColor = "#edf2f6"
        n50.style.backgroundColor = "#edf2f6"
        n100.style.backgroundColor = "#edf2f6"
        other.style.backgroundColor = "#113259"
        n5.style.color = "black"
        n20.style.color = "black"
        n50.style.color = "black"
        n100.style.color = "black"
        other.style.color = "white"
    }

