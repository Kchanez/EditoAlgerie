const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function updateCarousel() {
  const width = items[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * width}px)`;

  // Masquer le bouton "précédent" si on est sur la première image
  if (currentIndex === 0) {
    prevButton.style.display = 'none';  // Masquer le bouton précédent
  } else {
    prevButton.style.display = 'block';  // Afficher le bouton précédent
  }

  // Masquer le bouton "suivant" si on est sur la dernière image
  if (currentIndex === items.length - 1) {
    nextButton.style.display = 'none';  // Masquer le bouton suivant
  } else {
    nextButton.style.display = 'block';  // Afficher le bouton suivant
  }
}

// Initialiser l'affichage au premier élément
updateCarousel();

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});
