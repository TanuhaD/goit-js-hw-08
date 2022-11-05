import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleFormInput, 500));

function handleFormInput(event) {
  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;
  const inputObj = {
    email: emailValue,
    message: messageValue,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputObj));
}

function restoreForm() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const parsedMessage = JSON.parse(savedMessage);
  if (parsedMessage) {
    form.elements.email.value = parsedMessage.email;
    form.elements.message.value = parsedMessage.message;
  }
}
restoreForm();

form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;
  const submitObj = {
    email: emailValue,
    message: messageValue,
  };
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');

  console.log(submitObj);
}
