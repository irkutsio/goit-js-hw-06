// const title = document.querySelectorAll(".title");
// // const h2 = item.querySelector("h2");
// console.dir(title.length);
// undefined;

// const title = document.querySelector(".title");
// // const h2 = item.querySelector("h2");
// title.classList.add("js-title");
// // title.classList.remove("js-title");
// title.classList.replace("title", "js-new_title");
// console.log(title);

// const ul = document.querySelector("ul");
// console.log(ul);

const newElement = document.createElement("h1");
console.log(newElement);
newElement.textContent = "Єто новый элемент";
document.body.prepend(newElement);
