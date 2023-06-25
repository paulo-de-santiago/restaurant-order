// @ts-nocheck
// @ts-ignore
/* import func from "joi/lib/types/func"; */
import { menuArray } from "/data.js";

/* console.log(menuArray) */

/* LOOPING ARRAY OF INGREDIENTS */
/* menuArray.forEach(function(item) {
    item.ingredients.forEach(function(ingredient) {
         console.log(ingredient)
    })
   
}) */

/* Looping through id */
/* menuArray.forEach(function(itemArray) {
    console.log(itemArray.id)
})  */

menuArray.forEach(function (price) {
  let priceType = typeof price.price;

  console.log(price.price, priceType);
});

/* const mainMenu = document.getElementById("main-menu");
console.log(mainMenu);

function renderStart() {
    document.getElementById("main-menu")?.innerHTML
}

renderStart();
 */

function getMenuElement() {
  let menuItems = "";

  let menuIngredients = [];

  menuArray.forEach(function (item) {
    if (item.ingredients.length > 1) {
      menuIngredients.push(item.ingredients.join(", "));
    } else if (item.ingredients.length === 1) {
      menuIngredients.push(item.ingredients[0].split("-"));
    }
  });
  /*   console.log(menuIngredients); */

  /*   menuArray.forEach(function (item) {
    item.ingredients.forEach(function (ingredient) {
      if (item.ingredients.length > 1) {
        menuIngredients.push(ingredient);
      }
    });
  });
  /*    */

  /* Default State */
  menuArray.forEach(function (item) {
    menuItems += `<div class="menu-list" id="menu-list">
        <div class="menu-item" id="menu-item">
          <img
            class="img-layout"
            src="${item.emoji}"
            alt="Hamburger header background"
          />

          <ul class="list" id="list">
            <li class="item" id="item">Pizza</li>
            <li class="ingredients" id="ingredients">${menuIngredients}</li>
            <li class="price" id="price">${item.price}</li>
          </ul>
        </div>
        <button class="add-btn">
          <img src="images/add-btn.png" alt="" />
        </button>
      </div>
      <img class="divider" src="images/divider.png" />`;
  });

  return menuItems;
}

function render() {
  document.getElementById("main-menu").innerHTML = getMenuElement();
}

render();
