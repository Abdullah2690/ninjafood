// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSFxLr_XUtbV5b1EwnIE37QUgU5otC6N8",
  authDomain: "silika-bites.firebaseapp.com",
  projectId: "silika-bites",
  storageBucket: "silika-bites.appspot.com",
  messagingSenderId: "841551984440",
  appId: "1:841551984440:web:9702d7b843ece31ac6b3cd",
  measurementId: "G-6Q1YKJT5QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

//translations
const translations = {
  en: {
      heading: "Recipes",
      subheading: "For Silika",
      latestRecipes: "Latest Recipes",
      mostPopular: "Most Popular",
      loadMore: "Load More",
      chefProfileHeading: "Chef Abdulrahman",
      chefBio: "With over 10 years of culinary experience, Chef Abdulrahman is known for his innovative takes on traditional dishes."
  },
  fr: {
      heading: "Recettes",
      subheading: "Pour Silika",
      latestRecipes: "Dernières Recettes",
      mostPopular: "Les Plus Populaires",
      loadMore: "Charger Plus",
      chefProfileHeading: "Chef Abdulrahman",
      chefBio: "Avec plus de 10 ans d'expérience culinaire, le Chef Abdulrahman est connu pour ses approches innovantes des plats traditionnels."
  },
  es: {
      heading: "Recetas",
      subheading: "Para Silka",
      latestRecipes: "Últimas Recetas",
      mostPopular: "Más Populares",
      loadMore: "Cargar Más",
      chefProfileHeading: "Chef Abdulrahman",
      chefBio: "Con más de 10 años de experiencia culinaria, el Chef Abdulrahman es conocido por sus enfoques innovadores en platos tradicionales."
  }
};

// Function to update the page content based on selected language
function updateContent(language) {
  document.getElementById('heading').textContent = translations[language].heading;
  document.getElementById('subheading').textContent = translations[language].subheading;
  document.getElementById('latest-recipes').textContent = translations[language].latestRecipes;
  document.getElementById('most-popular').textContent = translations[language].mostPopular;
  document.getElementById('load-more').textContent = translations[language].loadMore;
  document.getElementById('chef-profile-heading').textContent = translations[language].chefProfileHeading;
  document.getElementById('chef-bio').textContent = translations[language].chefBio;
}

// Event listener for language selection
document.getElementById('language-select').addEventListener('change', function() {
  const selectedLanguage = this.value;
  updateContent(selectedLanguage);
});

// Default language (English)
updateContent('en');