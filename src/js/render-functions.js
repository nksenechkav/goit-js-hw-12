import { refs } from './refs';
import { onError} from './onError';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { perPage } from './pixabay-api';
import { MESSAGE } from './onError';

export let totalHits;

export let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function createGalleryItem(response) {
  const result = response.hits.map(addMarkup).join('');
  totalHits = response.totalHits;

  if (totalHits > perPage) {
    refs.btnLoadMore.classList.remove('hidden');
  }

  if (response.hits.length) {
    refs.galleryList.insertAdjacentHTML('beforeend', result);
  } 

  else {
    onError(MESSAGE);
  }

  lightbox.refresh();
}


export function addMarkup(image) {
  const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
    return `<li class="gallery-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img
              src="${webformatURL}"
              class="gallery-image"
              alt="${tags}"
            />
          </a>
          <div class="modal-text"> 
              <div class="modal-element"><p>Likes</p><span>${likes}</span></div>
              <div class="modal-element"><p>Views</p><span>${views}</span></div>
              <div class="modal-element"><p>Comments</p><span>${comments}</span></div>
              <div class="modal-element"><p>Downloads</p><span>${downloads}</span></div>
          </div>
        </li>`;
  }