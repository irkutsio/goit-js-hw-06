const formEl = document.querySelector(".login-form");
// console.dir(formEl);

//1
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  //2
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  //3
  if (email.value === "" || password.value === "") {
    alert("Please, fill in all the inputs");
  }
  //4
  else {
    const userArray = {
      userEmail: email.value,
      userPassword: password.value,
    };
    console.log(userArray);
  }
  //5
  event.currentTarget.reset();
}
