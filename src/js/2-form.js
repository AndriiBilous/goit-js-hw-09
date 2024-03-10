const form = document.querySelector('.feedback-form');

form.addEventListener('input', handlerInput);
const STORAGE_KEY = 'feedback-form-state';

function handlerInput() {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
window.addEventListener('load', handlerLoad);
function handlerLoad() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    const storageData = JSON.parse(data);
    const { email, message } = storageData;
    form.elements.email.value = email;
    form.elements.message.value = message;
  } else {
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
}

//!  ЗАКОМЕНТОВАНИЙ ВАРІАНТ ДЛЯ ПЕРЕВІРКИ, ПІСЛЯ ВИДАЛЮ
// const data = localStorage.getItem(STORAGE_KEY) ?? '';
// try {
//   const storageData = JSON.parse(data);
//   const { email, message } = storageData;
//   form.elements.email.value = email;
//   form.elements.message.value = message;
// } catch {
//   form.elements.email.value = '';
//   form.elements.message.value = '';
// }

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const emailValue = form.elements.email.value === '';
  const messageValue = form.elements.message.value === '';
  if (emailValue || messageValue) {
    return alert('Enter the data');
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
