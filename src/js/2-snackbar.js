import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const submitButton = document.querySelector('button');
  const inputValue = document.querySelector('input[name="delay"]');
  const stateInputs = document.querySelectorAll('input[name="state"]');
  const delay = Number(inputValue.value);
  const selectedState = Array.from(stateInputs).find(input => input.checked);

  if (delay >= 0 && selectedState) {
    submitButton.disabled = true;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (selectedState.value === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(delay => {
        iziToast.show({
          position: 'topRight',
          backgroundColor: '#73bf51',
          message: `✅ Fulfilled promise in ${delay}ms`,
        });
      })
      .catch(delay => {
        iziToast.show({
          position: 'topRight',
          backgroundColor: '#e77c7c',
          message: `❌ Rejected promise in ${delay}ms`,
        });
      })
      .finally(() => {
        submitButton.disabled = false;
      });
    form.reset();
  }
}