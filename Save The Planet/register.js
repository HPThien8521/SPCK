var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById('RegForm');
var Indicator = document.getElementById('Indicator');

    function register() {
        RegForm.style.transform = "translateX(0px)"
        LoginForm.style.transform = "translateX(0px)"
        Indicator.style.transform = "translateX(100px)"
    }
    function login() {
        RegForm.style.transform = "translateX(350px)"
        LoginForm.style.transform = "translateX(350px)"
        Indicator.style.transform = "translateX(-25px)"
    }

RegForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let pw = document.getElementById("password-reg")
    let email = document.getElementById("email")

    let lowerCaseLetter = /[a-z]/g
    let upperCaseLetter = /[A-Z]/g
    let numbers = /[0-9]/g

    if (email.value.trim().length == 0 && pw.value.trim().length == 0) {
        alert("Please input your email & password")
    }
        else if (email.value.trim().length == 0) {
        alert("Please input your email")
    }
        else if (pw.value.trim().length == 0) {
        alert("Please input your password")
    }
        else if (pw.value.trim().length < 8) {
        alert("Password must be at least 8 characters.")
    }  
        else if (!pw.value.trim().match(lowerCaseLetter)) {
            alert("Password must  contain a lowercase letter")
    }
        else if (!pw.value.trim().match(upperCaseLetter)) {
        alert("Password must  contain a uppercase letter")
    }
        else if (!pw.value.trim().match(numbers)) {
        alert("Password must  contain a number or special character")
    }
        else {
            const user = {
                email: email.value,
                pw: pw.value
            }
                localStorage.setItem("users",
                JSON.stringify(user));
            location.replace("index.html")
    }
})