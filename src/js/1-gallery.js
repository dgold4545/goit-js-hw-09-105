'use strict';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from '../arrayData/arrayImages';
import { createImagesMarkup } from '../hellpers/createImagesMarkup';

const refs = {
  gallery: document.querySelector('.gallery'),
};

refs.gallery.innerHTML = createImagesMarkup(images);


new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

