let davalianeba;
let Tanxa;

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

let rand;
let qvit;
function random() {
    var x = Math.sin(qvit) * 10000;
    return x - Math.floor(x);
}
function calculate() {
    if (qvit >= 10000 && qvit <= 99999) {

    }
}
function generateLiabilities() {
    qvit = document.getElementById("qviTari").value;
    let tmp = rand * 150;
    rand = random();

    davalianeba = Math.round(tmp * 100) / 100;
    document.getElementById("davalianeba").value = davalianeba;

    Tanxa = davalianeba + ((davalianeba * 0.5) / 100);
    document.getElementById("Tanxa").value = Math.round(Tanxa * 100) / 100;



    // davalianeba = Math.floor(Math.random() * 10000) / 100;
    // document.getElementById("davalianeba").value = davalianeba + "₾";

    // Tanxa = davalianeba + ((davalianeba * 2) / 100);
    // document.getElementById("Tanxa").value = Math.round(Tanxa * 100) / 100 + "₾";
}

function toCart() {
    alert("დამატებულია კალათაში");
}