const decBtn = document.querySelector('[data-action="decrement"]');
console.log(decBtn);
const count = document.querySelector("#value");

decBtn.addEventListener("click", onClick);

function onClick() {
  let countValue = Number(count.textContent);
  return (countValue -= 1);
}
