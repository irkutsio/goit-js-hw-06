const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (input.value.trim().length === Number(input.dataset.length)) {
    // console.log(6 === Number(input.dataset.length)); true
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
