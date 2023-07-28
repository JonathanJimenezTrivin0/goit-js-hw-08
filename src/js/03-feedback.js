import throttle from 'lodash.throttle';

let getForm = document.querySelector('.feedback-form');

// const throttle = throttle(handleSubmit, 500);

getForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Diliencia todos los campos del formulario');
  }
  console.log(`Email: ${email.value} Message: ${message.value}`);
  getForm.reset();
}
