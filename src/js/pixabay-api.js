import axios from 'axios';
import { refs } from './refs';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
import { createGalleryItem } from './render-functions';
import { onError } from './onError';

import { MESSAGE } from './onError';
import { totalHits } from './render-functions';
import { LIMIT } from './onError';
import { CORRECT } from './onError';
import { lightbox } from './render-functions';

export const perPage = 15;
let page;
let userSearch;

export async function onFormSubmit(event) {
  event.preventDefault();
  refs.btnLoadMore.classList.add('hidden');

  refs.galleryList.innerHTML = '';
  page = 1;
  userSearch = event.target.elements.input.value.trim();

  if (userSearch) {

    try {
      loaderOn();
      const response = await fetchImg(userSearch, page);
      createGalleryItem(response);
    } 
    
    catch (error) {
      onError(MESSAGE);
    } 
      loaderOff();
      refs.form.reset();
  } 
  
  else {
    refs.form.elements.input.value = '';
    onError(CORRECT);
  }
}

export async function fetchImg(input, page) {

  const API_KEY = '42271393-ceafa19bde7d0a63fb15d5d6f';
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const parameters = `q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;
  const URL = `?key=${API_KEY}&${parameters}`;

  const config = {
    params: {
      per_page: perPage,
      page: page,
    },
  };

  const response = await axios.get(URL, config);
  return response.data;
}

export async function onLoadClick() {
  page += 1;
  loaderOn();

  const totalPages = Math.ceil(totalHits / perPage);

  const result = await fetchImg(userSearch, page);
    createGalleryItem(result);
    scrollPage();
    loaderOff();
    lightbox.refresh();

  if (page >= totalPages) {
    refs.btnLoadMore.classList.add('hidden');
    onError(LIMIT);
  } 
}

function scrollPage() {
  const cardHeight = refs.galleryList.firstElementChild.getBoundingClientRect();
  const size = cardHeight.height * 2;
  window.scrollBy({ top: size, left: 0, behavior: 'smooth' });
}