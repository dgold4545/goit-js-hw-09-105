import { saveToLocalStorage } from '../hellpers/saveToLocalStorage';
import { loadFromLocalStorage } from '../hellpers/loadFromLocalStorage';

const LS_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const formData = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', event => {
  const dataFromForm = new FormData(event.currentTarget);

  formData.email = dataFromForm.get('email').trim();
  formData.message = dataFromForm.get('message').trim();

  saveToLocalStorage(LS_KEY, formData);
});

window.addEventListener('DOMContentLoaded', () => {
  const dataSet = loadFromLocalStorage(LS_KEY);

  refs.form.elements.email.value = dataSet?.email ?? '';
  refs.form.elements.message.value = dataSet?.message ?? '';
});

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const email = refs.form.elements.email.value;
  const message = refs.form.elements.message.value;

  if (!email || !message) {
    alert('«Fill please all fields»');
  } else {
    console.log(formData);
  }

  localStorage.removeItem(LS_KEY);

  event.currentTarget.reset();
});
