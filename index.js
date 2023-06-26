// @ts-nocheck
// @ts-ignore
/* import func from "joi/lib/types/func"; */
import { menuArray } from "/data.js";
/* <a href='https://dryicons.com/icon/plus-icon-12631'> Icon by Dryicons </a> */
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
      
        <svg class="plus-btn" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1{fill:#898989;}</style></defs><title>plus-other</title><path class="cls-1" d="M256,512C114.84,512,0,397.16,0,256S114.84,0,256,0,512,114.84,512,256,397.16,512,256,512Zm0-500.62C121.12,11.38,11.38,121.12,11.38,256S121.12,500.62,256,500.62,500.62,390.88,500.62,256,390.88,11.38,256,11.38Z"/><path class="cls-1" d="M347,261.69H165a5.69,5.69,0,0,1,0-11.38H347a5.69,5.69,0,0,1,0,11.38Z"/><path class="cls-1" d="M256,352.71a5.69,5.69,0,0,1-5.69-5.69V165a5.69,5.69,0,1,1,11.38,0V347A5.69,5.69,0,0,1,256,352.71Z"/></svg>
      
      </div>
      <img class="divider" src="images/divider.png" />`;
  });

  return menuItems;
}

function render() {
  document.getElementById("main-menu").innerHTML = getMenuElement();
}

render();
