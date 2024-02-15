export function addMarkup(image) {
    return `<li class="gallery-item">
          <a href="${image.largeImageURL}" class="gallery-link">
            <img
              src="${image.webformatURL}"
              class="gallery-image"
              alt="${image.tags}"
            />
          </a>
          <div class="modal-text"> 
              <div class="modal-element"><p>Likes</p><span>${image.likes}</span></div>
              <div class="modal-element"><p>Views</p><span>${image.views}</span></div>
              <div class="modal-element"><p>Comments</p><span>${image.comments}</span></div>
              <div class="modal-element"><p>Downloads</p><span>${image.downloads}</span></div>
          </div>
        </li>`;
  }