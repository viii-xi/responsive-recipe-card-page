document.addEventListener('DOMContentLoaded', () => {
  const cuisineSelect = document.getElementById('cuisine');
  const recipeCards = document.querySelectorAll('.recipe-card');

  cuisineSelect.addEventListener('change', () => {
    const selectedCuisine = cuisineSelect.value;
    recipeCards.forEach(card => {
      if (selectedCuisine === 'all' || card.dataset.cuisine === selectedCuisine) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.recipe-card');
      const hiddenSection = card.querySelector('.hidden-section');
      hiddenSection.classList.toggle('show');
      button.textContent = hiddenSection.classList.contains('show') ? 'Show Less' : 'Show More';
    });
  });

  const stars = document.querySelectorAll('.rating span');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.value);
      const ratingContainer = star.parentElement;
      ratingContainer.querySelectorAll('span').forEach(s => {
        s.classList.toggle('filled', parseInt(s.dataset.value) <= rating);
      });
    });
  });
});






