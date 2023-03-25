let menu = ["rau xào", "thịt luộc", "gà rán"];
function create() {
    let newItem = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
    localStorage.setItem("newItem", newItem);
    newItemOnMenu = localStorage.getItem("newItem")
    menu += "," + newItemOnMenu
    document.write("New Menu: " + menu);
}

function read() {
        let x = menu.join(", ")
        alert(x)
}

function update() {
            let foundItem = prompt("Mời người dùng nhập vào tên món muốn update")
        let posOfItem = menu.indexOf(foundItem)
        if (posOfItem == -1) {
            document.write("error: cannot find item (the system is case sensitive)")
        }else {
            let replaceItem = prompt("Mời người dùng nhập vào tên món ăn mới")
            menu[posOfItem] = replaceItem;
            document.write("New Menu: " + menu)
        }
}

function Delete() {
        let foundItem = prompt("Mời người dùng nhập vào tên món muốn Delete")
        let posOfItem = menu.indexOf(foundItem)
        if (posOfItem == -1) {
            document.write("error: cannot find item (the system is case sensitive)")
        }else {
            menu.splice(posOfItem,1);
            document.write("New Menu: " + menu)
        }
}

function entered() {
    let enteredKey = document.getElementById("which").value;
    console.log(enteredKey)
    if (enteredKey == "C") {
        create()
    }
    else if (enteredKey == "R") {
        read()
    }
    else if (enteredKey == "U") {
        update()
    }
    else if (enteredKey == "D") {
        Delete()
    }
}