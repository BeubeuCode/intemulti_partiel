let isDropdownVisible = false;

document.body.onload = bodyAppear;
window.onscroll = console.log(window.scrollY);

function bodyAppear() {
    document.getElementById("hero").classList.remove("isgone");
    document.getElementById("hero").classList.add("appear");
}

function toggleDropdown() {
    if(isDropdownVisible) {
        hideDropdown();
        isDropdownVisible = false;
    } else if(!isDropdownVisible) {
        showDropdown();
        isDropdownVisible = true;
    }
}

function showDropdown() {
    document.getElementsByClassName("drop-content")[0].style.display = "block";
}

function hideDropdown() {
    document.getElementsByClassName("drop-content")[0].style.display = "none";
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

let words = ["Microsoft", "Twitter", "Facebook", "Type-Moon", "Mirai Games", "Danone"];

var i = 0;
setInterval(function() {
    
    document.getElementById("change").innerHTML = words[i];
    if(i >= words.length - 1) {
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