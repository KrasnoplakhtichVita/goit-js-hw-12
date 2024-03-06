import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import icon from './img/icon.svg';

import { createMarkup } from './js/render-functions';
import {
  fetchImages,
  page,
  per_page,
  renderPage,
  resetPage,
} from './js/pixabay-api';

const form = document.querySelector('.form');
const list = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-button');

const FETCH_KEY = '42531953-f4fd7fd73c35883c60e461dd3';

let inputValue = form.elements.input;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', onBtnSubmit);

async function onBtnSubmit(evt) {
  evt.preventDefault();

  loader.classList.remove('hidden');
  loadBtn.classList.add('hidden');

  resetPage();
  list.innerHTML = '';
  inputValue = evt.target.input.value;

  try {
    const data = await fetchImages(FETCH_KEY, inputValue);
    form.reset();
    loader.classList.add('hidden');

    if (!data.hits.length) {
      return iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'white',
        backgroundColor: '#ef4040',
        position: 'topRight',
        iconUrl: icon,
      });
    }

    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    lightbox.refresh();
    loadBtn.classList.remove('hidden');
  } catch (error) {
    console.log(error);
  }
}

loadBtn.addEventListener('click', onBtnLoad);

async function onBtnLoad() {
  renderPage();

  loadBtn.classList.add('hidden');
  loader.classList.remove('hidden');

  try {
    const data = await fetchImages(FETCH_KEY, inputValue);
    loadBtn.classList.remove('hidden');
    loader.classList.add('hidden');

    const totalPages = Math.ceil(data.totalHits / per_page);

    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    lightbox.refresh();

    if (page >= totalPages) {
      loadBtn.classList.add('hidden');
      return iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: 'white',
        backgroundColor: '#ef4040',
        position: 'topRight',
        iconUrl: icon,
      });
    }

    const cardHeight = list.firstChild.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
  }
}
