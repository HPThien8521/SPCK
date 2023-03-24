//--- 3.
let female = undefined;
function genderFemale() {
    document.getElementById("female-btn").style.backgroundColor = "#ff6eee";
    document.getElementById("female-btn").style.borderTopLeftRadius = "8px";
    document.getElementById("female-btn").style.borderBottomLeftRadius = "8px";
    document.getElementById("male-btn").style.backgroundColor = "";
    female = true
}

function genderMale() {
    document.getElementById("male-btn").style.backgroundColor = "#1290ff";
    document.getElementById("male-btn").style.borderTopRightRadius = "8px";
    document.getElementById("male-btn").style.borderBottomRightRadius = "8px";
    document.getElementById("female-btn").style.backgroundColor = "";
    female = false;
}

function signUp() {
    const username = document.getElementById('name-input').value;
    const password = document.getElementById('password-input').value;
    const email = document.getElementById('email-input').value;

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    localStorage.setItem('email', email)

    console.log("Username: " + localStorage.getItem('username'))
    console.log("Password: " + localStorage.getItem('password'))
    console.log("Email: " + localStorage.getItem('email'))
    if (female == true) {
        console.log("Gender: Female")
    } 
    if (female == false) {
        console.log("Gender: Male")
    }
    if (female == undefined) {
        console.log("Gender: Unknown")
    }
}

