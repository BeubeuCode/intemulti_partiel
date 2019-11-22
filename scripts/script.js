let isDropdownVisible = false;

document.body.onload = bodyAppear;

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
    document.getElementById("hero").style.marginLeft="30%";
}

function closeNav() {
    document.getElementById("navigation").classList.remove("bringNav");
    document.getElementById("navigation").classList.add("closeNav");
    document.getElementById("hero").style.marginLeft="0%";

}


