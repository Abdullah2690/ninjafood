const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});

function toggleCard(card) {
  // Close any currently open card
  const openCard = document.querySelector('.card .ingredients:not(.hidden), .card .biography:not(.hidden)');
  
  if (openCard && openCard !== card.querySelector('.ingredients') && openCard !== card.querySelector('.biography')) {
      openCard.classList.add('hidden');
  }

  // Toggle the clicked card
  const ingredients = card.querySelector('.ingredients');
  const biography = card.querySelector('.biography');
  
  if (ingredients) {
      ingredients.classList.toggle('hidden');
  }
  
  if (biography) {
      biography.classList.toggle('hidden');
  }
}
