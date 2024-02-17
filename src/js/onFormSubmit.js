import { refs } from './refs';
import { makeGalleryItem } from './createGallery';
import { onError } from './onError';
import { fetchImg } from './fetchImage';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
import axios from 'axios';


  export function onFormSubmit(event) {
    event.preventDefault();
    loaderOn();
    refs.galleryList.innerHTML = '';
    const userSearch = event.currentTarget.elements.input.value.trim();
  
    fetchImg(userSearch)
        .then(makeGalleryItem)
        .catch(onError)
        .finally(loaderOff);
  
    refs.form.reset();
  }