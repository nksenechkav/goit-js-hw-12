import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const MESSAGE =
  'Sorry, there are no images matching your search query. Please try again!';
export function onError() {
  iziToast.error({
    message: MESSAGE,
    position: 'topRight',
  });
}