document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector(".hamburger");
  var navBar = document.querySelector(".nav-bar");

  hamburger.onclick = function() {
    navBar.classList.toggle("active");
  };
});
