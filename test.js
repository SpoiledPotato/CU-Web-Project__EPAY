document.getElementById("communal").src = "images/კომუნალური.png";
document.getElementById("tel-int-tv").src = "images/ტელეფონი_ინტერნეტი_ტელევიზია.png";
document.getElementById("mobile").src = "images/მობილური.png";
document.getElementById("transport").src = "images/სატრანსპორტო_სერვისები.png";

function changeMenu(x) {
    location.href = x + ".html"
}

function hover(id, y) {
    document.getElementById(id).src = "images/" + y + ".png";
}