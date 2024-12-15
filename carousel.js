const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

let currentIndex = 0;

// Function to update carousel position
function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  const newTransform = -(currentIndex * itemWidth);
  carousel.style.transform = `translateX(${newTransform}px)`;
}

// Event listeners for buttons
leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

rightBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - 4) {
    currentIndex++;
    updateCarousel();
  }
});

// Initial update
updateCarousel();
