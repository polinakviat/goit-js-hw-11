import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function clearGallery(container) {
  container.innerHTML = '';
}

const galleryContainer = document.querySelector('.gallery');

// Створюємо екземпляр плагіна ОДИН раз поза функцією
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  // Створюємо розмітку, деструктуризуючи потрібні 7 властивостей з кожного об'єкта
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info-block">
            <p class="info-item"><b>Likes:</b> ${likes}</p>
            <p class="info-item"><b>Views:</b> ${views}</p>
            <p class="info-item"><b>Comments:</b> ${comments}</p>
            <p class="info-item"><b>Downloads:</b> ${downloads}</p>
          </div>
        </li>
      `;
    })
    .join('');

  // Додаємо розмітку в контейнер
  galleryContainer.innerHTML = markup;
  
  // 2. Обов'язково викликаємо refresh() після оновлення DOM
  lightbox.refresh();
}