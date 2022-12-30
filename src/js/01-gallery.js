// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(
  ({
    preview,
    original,
    description,
  }) => `<div class="gallery"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`
);

gallery.innerHTML = markup.join('');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
