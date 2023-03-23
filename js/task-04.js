const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
let count = document.querySelector("#value");

function onIncrementClick(event) {
  event.preventDefault();
  let counterValue = count.textContent;
  count.textContent = parseInt(counterValue) + 1;
}

function onDecrementClick(event) {
  event.preventDefault();
  let counterValue = count.textContent;
  count.textContent = parseInt(counterValue) - 1;
}

decBtn.addEventListener("click", onDecrementClick);
incBtn.addEventListener("click", onIncrementClick);
