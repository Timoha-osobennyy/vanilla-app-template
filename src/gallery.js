
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  { preview: 'images/image1.jpg', original: 'images/image1-large.jpg', description: 'Опис 1' },
  { preview: 'images/image2.jpg', original: 'images/image2-large.jpg', description: 'Опис 2' },
  // Додати інші зображення
];

const galleryList = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}" />
    </a>
  </li>
`).join('');

galleryList.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});


if (galleryList) {
    galleryList.innerHTML = galleryMarkup;
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
}
  