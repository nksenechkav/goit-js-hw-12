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