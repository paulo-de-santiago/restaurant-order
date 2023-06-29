// @ts-nocheck
// @ts-ignore
/* import func from "joi/lib/types/func"; */
import { menuArray } from "/data.js";
/* <a href='https://dryicons.com/icon/plus-icon-12631'> Icon by Dryicons </a> */
/* console.log(menuArray) */

document.addEventListener("click", function (e) {
  if (e.target.dataset.item) {
    getItemId(e.target.dataset.item);
  }
});

let arrayOrder = [];
function getItemId(itemId) {
  for (let item of menuArray) {
    if (item.id === Number(itemId)) {
      arrayOrder.push({ name: item.name, price: item.price, id: item.id });
    }
  }
  getOrderItems(arrayOrder);
  return console.log(arrayOrder);
}

function sumOrderItems() {}

/* To Refactor */
function getOrderItems() {
  let order = "";
  let orderAdded = "";

  if (arrayOrder.length === 1) {
    arrayOrder.forEach(function (item) {
      order += `<section class="order-section" id="order-section">
    <div class="main-menu menu-order" id="menu-order">
      <h2>Your order</h2>
  
  
        <div class="div-order-p">
            <div class="item" >${item.name}<button class="remove-btn" id="remove-btn">remove</button></div> 
            <div class="item">${item.price}</div>
        </div>
  
  
        <img id="divider-order" src="images/divider.png"/>
  
      <div class="div-order-p item"><p>Total price:</p><p class="div-order-p">Price</p></div>
  
  
  
      <button class="purchase-btn" id="purchase-btn">Complete Order</button>
    </div>
    </section>`;
    });
  } else {
    arrayOrder.forEach(function (item) {
      orderAdded += `<div class="div-order-p">
      <div class="item" >${item.name}<button class="remove-btn" id="remove-btn">remove</button></div> 
      <div class="item">${item.price}</div>
  </div>`;
    });

    order += `<section class="order-section" id="order-section">
    <div class="main-menu menu-order" id="menu-order">
      <h2>Your order</h2>
  
       
        <div class="div-order-p">
        <div class="div-order-p div-order" id="div-order"> 
           ${orderAdded}
          </div> 
        </div>
      </div>
  
        <img id="divider-order" src="images/divider.png"/>
  
      <div class="div-order-p item"><p>Total price:</p><p class="div-order-p">Price</p></div>
  
  
  
      <button class="purchase-btn" id="purchase-btn">Complete Order</button>
    </div>
    </section>`;
    console.log(orderAdded);
  }
  document.getElementById("order-section").innerHTML = order;
  render();
  return order;
}

function getMenuElement() {
  let menuItems = "";

  /* Default State */
  menuArray.forEach(function (item, index) {
    /* Array to separate ingredients items from menyArray.ingredients */
    let menuIngredients = [];

    for (let item of menuArray) {
      if (item.ingredients.length > 1 && item.id === index) {
        menuIngredients.push(item.ingredients.join(", "));
      } else if (item.ingredients.length === 1 && item.id === index) {
        menuIngredients.push(item.ingredients[0].split("-"));
      }
    }

    menuItems += `<div class="menu-list" id="menu-list">
        <div data-item="${item.id}" class="menu-item" id="menu-item">
          <img
            class="img-layout"
            src="${item.emoji}"
            alt="Hamburger header background"
          />

          <ul class="list" id="list">
            <li class="item" id="item">${item.name}</li>
            <li class="ingredients" id="ingredients">${menuIngredients}</li>
            <li class="price" id="price">${item.price}</li>
          </ul>
        </div>
      
        <svg data-item="${item.id}" class="plus-btn" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1{fill:#898989;}</style></defs><title>plus-other</title><path class="cls-1" d="M256,512C114.84,512,0,397.16,0,256S114.84,0,256,0,512,114.84,512,256,397.16,512,256,512Zm0-500.62C121.12,11.38,11.38,121.12,11.38,256S121.12,500.62,256,500.62,500.62,390.88,500.62,256,390.88,11.38,256,11.38Z"/><path class="cls-1" d="M347,261.69H165a5.69,5.69,0,0,1,0-11.38H347a5.69,5.69,0,0,1,0,11.38Z"/><path class="cls-1" d="M256,352.71a5.69,5.69,0,0,1-5.69-5.69V165a5.69,5.69,0,1,1,11.38,0V347A5.69,5.69,0,0,1,256,352.71Z"/></svg>
      
      </div>
      <img class="divider" src="images/divider.png" />
    
      `;
  });

  return menuItems;
}

function render() {
  document.getElementById("main-menu").innerHTML = getMenuElement();
}

render();
