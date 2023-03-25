function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtnColor = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.querySelector("body");
// console.log(body);

console.log(changeBtnColor);
console.log(colorName.textContent);

changeBtnColor.addEventListener("click", onClick);
function onClick() {
  colorName.textContent = getRandomHexColor();
  body.style.backgroundColor = colorName.textContent;
}
