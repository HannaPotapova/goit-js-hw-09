const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const colorBody = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// startBtn.addEventListener("click", startClick);
// stopBtn.addEventListener("click", stopClick);

let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    colorBody.style.cssText = `
      background-color: ${getRandomHexColor()};
      margin: 16px;
      text-align: center;
    `;
    startBtn.setAttribute('disabled', true);
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.setAttribute('disabled', false);
});

