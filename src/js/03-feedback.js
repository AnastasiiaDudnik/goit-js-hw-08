import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.dir(form);

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(form.input);
  console.log(form.textarea);
}

function textareaFill() {
  const savedInput = localStorage.getItem(STORAGE_KEY);
  const parsedInput = JSON.parse(savedInput);
  if (parsedInput) {
    console.log(parsedInput);

    form.elements.message.value = parsedInput.message;
    form.elements.email.value = parsedInput.email;
  }
}

textareaFill();
