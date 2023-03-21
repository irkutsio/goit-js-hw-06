const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

// const newList = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.textContent = ingredients[i];
//   ingredientEl.classList.add(".item");
//   newList.push(ingredientEl);
// }
// ingredientList.append(...newList);
//***********************//

const newList = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");

  return ingredientEl;
});
// console.log(newList);
ingredientList.append(...newList);

//******************//
// const createIngredientList = (array) => {
//   return array.map((ingredient) => {
//     const ingredientEl = document.createElement("li");
//     ingredientEl.textContent = ingredient;
//     ingredientEl.classList.add("item");

//     return ingredientEl;
//   });
// };
// const newList = createIngredientList(ingredients);
// ingredientList.append(...newList);
