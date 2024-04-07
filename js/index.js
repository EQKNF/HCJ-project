document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu-btn");
  var closeButton = document.getElementById("close-btn");
  var navBar = document.getElementById("nav-bar");
  var navLinks = document.querySelectorAll(".nav-bar a");

  menuButton.addEventListener("click", function () {
    menuButton.style.display = "none";
    closeButton.style.display = "inline";
    navBar.classList.add("open");
  });

  closeButton.addEventListener("click", function () {
    closeButton.style.display = "none";
    menuButton.style.display = "inline";
    navBar.classList.remove("open");
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navBar.classList.remove("open");
      closeButton.style.display = "none";
      menuButton.style.display = "inline";
    });
  });
});
