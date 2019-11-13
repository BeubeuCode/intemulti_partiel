document.body.onload = bodyAppear;
document.body.onscroll = console.log(window.scrollY);

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

var i = 0;
setInterval(function() {
    
    document.getElementById("change").innerHTML = words[i];
    if(i >= words.length) {
        i = 0;
    } else {
        i++;
    }
}, 500);

function showSecondPart() {
    content2 = document.getElementById("content2");
    if(window.scrollY >= 306) {
        content2.classList.remove("isgone");
        content2.classList.add("appear");
    } else {
        content2.classList.remove("appear");
        content2.classList.add("isgone");
    }
}