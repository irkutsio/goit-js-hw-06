const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const count = document.querySelector("#value");

decBtn.addEventListener("click", onDecrementClick);
incBtn.addEventListener("click", onIncrementClick);

function onIncrementClick() {
  let counterValue = count.textContent;
  count.textContent = Number(counterValue) + 1;
}

function onDecrementClick() {
  let counterValue = count.textContent;
  count.textContent = Number(counterValue) - 1;
}



// const decBtn = document.querySelector('[data-action="decrement"]');
// const incBtn = document.querySelector('[data-action="increment"]');
// const newBtn = document.querySelector('[data-action="crement"]');

// incBtn.addEventListener("click", (event) => {
//   console.log(event);
//   console.log("клик на плюс");
//   decBtn.addEventListener("click", onDecrementClick);
// });

// newBtn.addEventListener("click", (event) => {
//   console.log("убираем клик на минус");
//   decBtn.removeEventListener("click", onDecrementClick);
// });

// function onDecrementClick(event) {
//   console.log("клик на минус");
// }
