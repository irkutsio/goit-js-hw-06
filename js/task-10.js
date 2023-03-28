function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", onCreateBtn);

function onCreateBtn() {
  const amount = Number(document.querySelector("input").value);
  const boxes = document.querySelector("#boxes");
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.appendChild(box);
  }
}

// function onCreateBtn() {
//   let amount = Number(document.querySelector("input").value);
//   const boxes = document.querySelector("#boxes");
//   let size = 30;
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement("div");
//     box.style.width = size + "px";
//     box.style.height = size + "px";
//     box.style.backgroundColor = getRandomHexColor();
//     size += 10;
//     boxes.appendChild(box);
//   }
// }

// destroyBtn.addEventListener("click", onDestroyBtn);
// function onDestroyBtn() {
//   const newBoxes = document.querySelector("#boxes");
//   newBoxes.innerHTML = "";
// }
