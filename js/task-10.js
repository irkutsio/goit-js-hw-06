function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const input = document.querySelector("input");

createBtn.addEventListener("click", onCreateClick);

function onCreateClick() {
  const box = document.createElement("div");
  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = getRandomHexColor();
  divBoxes.appendChild(box);
}

function createBoxes(amount) {
  const box = document.createElement("div");
  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = getRandomHexColor();
  divBoxes.appendChild(box);
}

createBoxes(input.value);
