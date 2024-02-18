import { refs } from './refs';
import { makeGalleryItem } from './createGallery';
import { onError } from './onError';
import { fetchImg } from './fetchImage';
import { loaderOn } from './loader';
import { loaderOff } from './loader';

let query;
let page;
let maxPage;


export async function onFormSubmit(event) {
  event.preventDefault();
  query = event.currentTarget.elements.input.value.trim();
  page = 1;

  if (!query) {
    onError();
    return;
  }

  loaderOn();

  try {
    const data = await fetchImg(query, page);
    if (data.totalHits === 0) {
      onError();
    }
    maxPage = Math.ceil(data.totalHits / 15);
    makeGalleryItem(data.images);
    console.log(data);
  } catch (err) {
    onError(err);
  }

  loaderOff();
  checkBtnVisibleStatus();
  refs.form.reset();
}

export async function onLoadMoreClick() {
  page += 1;
  loaderOn();
  const data = await fetchImg(userSearch, page);
  makeGalleryItem(data.images);
  loaderOff();
  checkBtnVisibleStatus();

  const height =
    refs.galleryList.firstElementChild.getBoundingClientRect().height;

  scrollBy({
    behavior: 'smooth',
    top: height,
  });
}

function showLoadBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}
function hideLoadBtn() {
  refs.btnLoadMore.classList.add('hidden');
}

function checkBtnVisibleStatus() {
  if (page >= maxPage) {
    hideLoadBtn();
  } else {
    showLoadBtn();
  }
}