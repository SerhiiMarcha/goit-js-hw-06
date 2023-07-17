let counterValue = 0;
const addition = document.querySelector('button[data-action="decrement"]');
const subtraction = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

function decrement(event) {
    counterValue -= 1;
    value.textContent = counterValue;
}
function increment(event) {
    counterValue += 1;
    value.textContent = counterValue;
}

addition.addEventListener('click', decrement);
subtraction.addEventListener('click', increment);