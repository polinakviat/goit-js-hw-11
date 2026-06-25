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
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <div class="info-block">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
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