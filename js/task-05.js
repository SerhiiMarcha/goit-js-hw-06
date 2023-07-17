const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange)

function onInputChange () {
  spanEl.textContent = inputEl.value || 'Anonymous'
};