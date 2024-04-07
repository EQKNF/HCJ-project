document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu-btn");
  var closeButton = document.getElementById("close-btn");

  menuButton.addEventListener("click", function () {
    menuButton.style.display = "none";
    closeButton.style.display = "inline";
  });

  closeButton.addEventListener("click", function () {
    closeButton.style.display = "none";
    menuButton.style.display = "inline";
  });
});
