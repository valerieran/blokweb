var deButton = document.querySelector("nav button");
var overlay = document.querySelector("header>div");
deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonMenu");
    overlay.classList.add("toonMenu");
}

overlay.addEventListener("click", verbergMenu);

function verbergMenu() {
    deNav.classList.remove("toonMenu");
    overlay.classList.remove("toonMenu");

}