document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach((carousel) => {
      const carouselContainer = carousel.querySelector('.carousel-container');
      const slides = carousel.querySelectorAll('.slide');
      let slideIndex = 0;
  
      function showSlide(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
      }
  
      function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
      }
  
      let interval = setInterval(nextSlide, 3000); // Muda a cada 3 segundos
  
      // Pausa o carrossel quando o cursor está sobre ele
      carousel.addEventListener('mouseenter', () => {
        clearInterval(interval);
      });
  
      // Continua o carrossel quando o cursor sai dele
      carousel.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 3000);
      });
    });
  });
  