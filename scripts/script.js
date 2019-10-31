document.body.onload = bodyAppear;

function bodyAppear() {
    document.getElementById("hero").classList.remove("isgone");
    document.getElementById("hero").classList.add("appear");
}

function showDropdown() {
    document.getElementsByClassName("drop-content")[0].style.display = "block";
}

function showNav() {
    document.getElementById("navigation").classList.remove("closeNav");
    document.getElementById("navigation").classList.add("bringNav");
}

function closeNav() {
    document.getElementById("navigation").classList.remove("bringNav");
    document.getElementById("navigation").classList.add("closeNav");
}

function makeNavBarFadeOut() {
    if(window.scrollY == 15) {
        //do stuff
    } else {
        //do other stuff
    }
}

let words = ["Nero Claudius", "Tamamo no Mae", "Artoria Pendragon", "Charlemagne"];

for(var i = 0;  i < words.length; i++) {
    setTimeout(function() {
        document.getElementById("change").innerHTML = words[i];
    }, 500);
}