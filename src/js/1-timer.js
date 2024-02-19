import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/iconizer-free-icon-font-cross-circle-3917206.svg';

const ref = {
  inputDate: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
};
ref.btnStart.disabled = true;
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate > new Date()) {
      ref.btnStart.disabled = false;
    } else {
      ref.btnStart.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
        backgroundColor: 'red',
        messageColor: 'white',
        position: 'topRight',
        iconUrl: errorIcon,
        iconColor: '#959595',
      });
    }
  },
};
flatpickr(ref.inputDate, options);
ref.btnStart.addEventListener('click', onTimer);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function onTimer() {
  ref.btnStart.disabled = true;
  const intervalId = setInterval(() => {
    let countDate = userSelectedDate - Date.now();
    ref.inputDate.disabled = true;

    if (countDate <= 0) {
      clearInterval(intervalId);
      ref.inputDate.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(countDate);
    ref.timerDays.textContent = addLeadingZero(days);
    ref.timerHours.textContent = addLeadingZero(hours);
    ref.timerMinutes.textContent = addLeadingZero(minutes);
    ref.timerSeconds.textContent = addLeadingZero(seconds);
  }, 1000);
}