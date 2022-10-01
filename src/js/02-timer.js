import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  dateTime: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysElement: document.querySelector('[data-days]'),
  hoursElement: document.querySelector('[data-hours]'),
  minutesElement: document.querySelector('[data-minutes]'),
  secondsElement: document.querySelector('[data-seconds]'),
};

refs.startBtn.addEventListener("click", onCountdown);
refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      refs.startBtn.setAttribute('disabled', true);
      Notify.failure("Please choose a date in the future");
    }
    if (selectedDates[0].getTime() > Date.now()) {
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

const flpt = flatpickr(refs.dateTime, options);

function onCountdown() {
  let timerId = setInterval(() => {
    const deltaTime = flpt.selectedDates[0].getTime();
      
    if (deltaTime < Date.now()) {
      clearInterval(timerId);
      return;
    }
    
    const timeComponent = convertMs(deltaTime - Date.now());
    updateDateElement(timeComponent);
    }, 1000);
  }

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateDateElement(time) {
  const { days, hours, minutes, seconds } = time;
  
  refs.daysElement.textContent = addLeadingZero(days);
  refs.hoursElement.textContent = addLeadingZero(hours);
  refs.minutesElement.textContent = addLeadingZero(minutes);
  refs.secondsElement.textContent = addLeadingZero(seconds);
}

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
