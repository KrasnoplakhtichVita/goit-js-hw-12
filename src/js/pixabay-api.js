import axios from 'axios';

export let page = 1;
export let per_page = 100;

export async function fetchImages(key, value) {
  const searchParams = new URLSearchParams({
    key: key,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: per_page,
  });

  const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
  const imagesObj = await response.data;
  return imagesObj;
}

export function resetPage() {
  page = 1;
}

export function renderPage() {
  page += 1;
}
