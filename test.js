function loadMain() {
    document.getElementById("communal").src = "images/კომუნალური.png";
    document.getElementById("tel-int-tv").src = "images/ტელეფონი_ინტერნეტი_ტელევიზია.png";
    document.getElementById("mobile").src = "images/მობილური.png";
    document.getElementById("transport").src = "images/სატრანსპორტო_სერვისები.png";
}


function changeMenu(x) {
    location.href = x + ".html"
}

function hover(id, y) {
    document.getElementById(id).src = "images/" + y + ".png";
}

function generateLiabilities() {
    var davalianeba = Math.floor(Math.random() * 10000) / 100;
    document.getElementById("davalianeba").value = davalianeba + "₾";

    var Tanxa = davalianeba + ((davalianeba * 2) / 100);
    document.getElementById("Tanxa").value = Math.round(Tanxa * 100) / 100 + "₾";
}

function toCart() {
    alert("დამატებულია კალათაში");
}

function test() {
    alert("WORKED!")
}