document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.input');
  let currentIndex = 0;

  function rotateSlides() {
      slides[currentIndex].checked = false;
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].checked = true;
  }

  setInterval(rotateSlides, 2000); 
});