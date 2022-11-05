import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
function makeMarkup() {
  let markup = '';
  for (const item of galleryItems) {
    const { preview, original, description } = item;
    markup += `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
  }
  return markup;
}
const markup = makeMarkup();
gallery.innerHTML = markup;
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  alertError: false,
});
