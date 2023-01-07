import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.dir(form);

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  let formInput = localStorage.getItem(STORAGE_KEY);
  formInput = formInput ? JSON.parse(formInput) : {};
  formInput[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(form.elements.message.value);
  console.log(form.elements.email.value);
}

function textareaFill() {
  const savedInput = localStorage.getItem(STORAGE_KEY);

  if (savedInput) {
    const parsedInput = JSON.parse(savedInput);

    Object.entries(parsedInput).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

textareaFill();
