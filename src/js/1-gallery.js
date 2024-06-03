'use strict';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from '../arrayData/arrayImages';
import { createGalleryMarkup } from '../hellpers/createGalleryMarkup';

const refs = {
  gallery: document.querySelector('.gallery'),
};

refs.gallery.innerHTML = createGalleryMarkup(images);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
