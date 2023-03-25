const controler = document.querySelector("#font-size-control");
// console.log(controler.getAttribute("min"));
const textEl = document.querySelector("#text");
// console.log(textEl.textContent);
console.log(controler.value + "px");

controler.addEventListener("input", onChangeFontSize);

function onChangeFontSize() {
  textEl.style.fontSize = controler.value + "px";
}
