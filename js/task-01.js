const categoriesList = document.querySelector("#categories");
const liItem = document.querySelectorAll(".item");

//1
console.log(`Number of categories : ${liItem.length}`);
console.log(liItem);

//2
liItem.forEach((item) => {
  console.log(
    `Category : ${item.firstElementChild.textContent} \nElements : ${item.lastElementChild.children.length}`
  );
});
