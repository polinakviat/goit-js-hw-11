import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './pixabay-api.js';
import { createGallery, clearGallery } from './render-functions.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault(); // Скасовуємо перезавантаження сторінки
  
  // Отримуємо значення поля та очищаємо від випадкових пробілів на початку/в кінці
  const searchQuery = event.currentTarget.elements.query.value.trim();

  // ПЕРЕВІРКА: якщо рядок порожній — перериваємо виконання і показуємо попередження
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty. Please enter a keyword!',
      position: 'topRight',
    });
    return; // Зупиняє функцію, HTTP-запит НЕ виконується
  }

  // Якщо перевірка пройдена, очищаємо стару галерею перед новим запитом
  clearGallery();

  // Виконуємо HTTP-запит
  getImagesByQuery(searchQuery)
    .then(data => {
      // Перевіряємо, чи знайшлося бодай щось
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      // Якщо все супер — малюємо галерею
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong with the server fetching.',
        position: 'topRight',
      });
      console.error(error);
    });

  // Очищаємо інпут форми після відправки
  event.currentTarget.reset();
}