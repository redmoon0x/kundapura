document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector(".hamburger");
  var navBar = document.querySelector(".nav-bar");

  hamburger.onclick = function() {
    navBar.classList.toggle("active");
  };
});

// If you want to add a click event to each card
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Handle card click event here
    console.log('Card clicked:', card);
  });
});


