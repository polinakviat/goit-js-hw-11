import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './pixabay-api.js';
// Імпортуємо абсолютно всі створені функції
import { 
  clearGallery, 
  updateGallery, 
  showLoader, 
  hideLoader 
} from './render-functions.js';

const searchForm = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  
  const searchQuery = event.currentTarget.elements.query.value.trim();

  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty!',
      position: 'topRight',
    });
    return;
  }

  // Очищаємо галерею та вмикаємо лоадер, передаючи елементи як аргументи
  clearGallery(galleryContainer);
  showLoader(loader);

  getImagesByQuery(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      // Використовуємо комплексну функцію оновлення вмісту
      updateGallery(data.hits, galleryContainer);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong with the server fetching.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      // Ховаємо лоадер, передаючи посилання на нього
      hideLoader(loader);
    });

  event.currentTarget.reset();
}