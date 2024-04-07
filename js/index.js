const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (menuBtnIcon.textContent.trim() === "menu") {
        menuBtnIcon.textContent = "close";
    } else {
        menuBtnIcon.textContent = "menu";
    }
})


navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open")
    menuBtnIcon.textContent = "menu";
})