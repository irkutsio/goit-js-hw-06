const formEl = document.querySelector(".login-form");
// console.dir(formEl);

//1
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  //2
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  //3
  if (email.value === "" || password.value.trim() === "") {
    alert("Please, fill in all the inputs");
  }
  //4
  else {
    const userArray = {
      email: email.value,
      password: password.value,
    };
    console.log(userArray);
  }
  //5
  event.currentTarget.reset();
}
