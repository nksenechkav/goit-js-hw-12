import { refs } from './refs';
import { addMarkup } from './addMarkup';
import { onError } from './onError';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function makeGalleryItem(response) {
  const result = response.hits.map(addMarkup).join('');

  if (response.hits.length) {
    refs.galleryList.innerHTML = result;
    let lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    lightbox.refresh();
  } else {
    onError();
  }
}