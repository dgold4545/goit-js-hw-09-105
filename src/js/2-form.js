const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[name="email"]'),
  textareaMessage: document.querySelector('textarea[name="message"]'),
  button: document.querySelector('button[type="submit"]'),
};



const formData = {
  email: 'dima',
  message: 'hold',
}


refs.form.addEventListener('input', (event) => {
  // event.preventDefault();
  const dataSet = new FormData(event.currentTarget);
  const name = dataSet.get('email');
  const email = dataSet.get('message');
  const info = {name, email}
 saveToLocalStorage('info', info);
})



function saveToLocalStorage(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.getItem(key, jsonData);
}


function loadFromLocalStorage(key) {
  const json = localStorage.getItem(key);

  try {
    const data = JSON.parse(json);
    return data;
  } catch (error) {
    return json;
  }
}

