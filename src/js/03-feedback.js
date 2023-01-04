import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.log(form);

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 250));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function textareaFill() {
  const savedInput = localStorage.getItem(STORAGE_KEY);
  const parsedInput = JSON.parse(savedInput);
  if (parsedInput) {
    console.log(savedInput);
    textarea.value = parsedInput;
  }
}

textareaFill();
