document.addEventListener('DOMContentLoaded', function () {
  // Slider functionality
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const slider = document.querySelector('.image-slider');
  const slides = document.querySelectorAll('.slider-image');
  let currentIndex = 0;

  // Ensure elements exist before accessing them
  if (slider && slides.length > 0) {
    slider.style.width = `${slides.length * 100}%`;
    slides.forEach(slide => {
      slide.style.width = `${100 / slides.length}%`;
    });

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateSliderPosition();
        }
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
          currentIndex++;
          updateSliderPosition();
        }
      });
    }

    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentIndex * 100 / slides.length}%)`;
    }
  }

  // Burger menu functionality
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
