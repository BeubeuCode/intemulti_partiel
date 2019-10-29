document.body.onload = bodyAppear;

function bodyAppear() {
    document.getElementById("hero").classList.remove("isgone");
    document.getElementById("hero").classList.add("appear");
}

function showDropdown() {
    document.getElementsByClassName("drop-content")[0].style.display = "block";
}