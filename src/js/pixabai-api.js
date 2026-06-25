import axios from 'axios';

const API_KEY = 'YOUR_PIXABAY_API_KEY'; // Заміни на свій реальний ключ Pixabay
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return axios.get(`${BASE_URL}?${searchParams}`)
    .then(response => response.data); 
    // Повертаємо саме властивість data з отриманої відповіді
}