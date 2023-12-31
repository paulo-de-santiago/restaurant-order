// @ts-nocheck
// @ts-ignore
/* import func from "joi/lib/types/func"; */
/* <a href='https://dryicons.com/icon/plus-icon-12631'> Icon by Dryicons </a> */

import { menuArray } from "/data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

document.addEventListener("click", function (e) {
  if (e.target.dataset.item) {
    getItemId(e.target.dataset.item);
    sumOrderPrice(e.target.dataset.itemId);

    /*    console.log(e.target.dataset.item); */
  } else if (e.target.dataset.itemUuid) {
    buttonRemoveClicked(e.target.dataset.itemUuid);
    console.log(e.target.dataset.itemUuid);
  } else if (e.target.id === "purchase-btn") {
    completeOrderForm();
  } else if (e.target.id === "pay-btn") {
    paymentThanks();
  }
});

/* console.log(arrayOrder); */
let arrayOrder = [];
console.log(arrayOrder.length);
function getItemId(itemId) {
  for (let item of menuArray) {
    if (item.id === Number(itemId)) {
      arrayOrder.push({
        name: item.name,
        price: item.price,
        id: item.id,
        order: true,
        uuid: uuidv4(),
      });
    }
  }
  getOrderItems();
  return arrayOrder;
}

/* Rename to sumOrderTotal */
function sumOrderPrice(itemId) {
  let total = 0;
  for (let item of arrayOrder) {
    if (arrayOrder.id === itemId) {
      total += item.price;
    }
  }

  return total;
}

function buttonRemoveClicked(itemUuid) {
  /* TO DO  */
  const deleted = document.getElementById("div-order-p");

  arrayOrder.forEach(function (item, index) {
    if (itemUuid === item.uuid) {
      /*   totalSubtract = totalSum - item.price; */
      /* item.order = false; */
      arrayOrder.splice(index, 1);
    }
  });
  deleted.innerHTML = "";

  getOrderItems();

  return totalSubtract;
}

function completeOrderForm() {
  let form = document.getElementById("modal-pay");
  form.style.display = "block";
  console.log("complete order");
}

/* To Refactor */
function getOrderItems() {
  let order = "";
  let orderAdded = "";
  let totalPriceSum = sumOrderPrice();

  if (totalPriceSum > 0) {
    arrayOrder.forEach(function (item) {
      orderAdded += `
        <div class="div-order-p" id="div-order-p">
        <div class="item">${item.name}<button class="remove-btn" id="remove-btn" data-item-uuid="${item.uuid}">remove</button></div> 
        <div class="item">$${item.price}</div>
        </div>
    `;
    });
  }
  order += `<section class="order-section" id="order-section">
    <div class="main-menu menu-order" id="menu-order">
      <h2>Your order</h2>
      
           ${orderAdded}
        
           <img id="divider-order" src="images/divider.png"/>
           <div class="div-order-p item"><p>Total price: </p><p class="div-order-p"> $${totalPriceSum}</p></div>
           <button class="purchase-btn" id="purchase-btn">Complete Order</button>
         </div>

      </div>
  
       
    </section>`;

  document.getElementById("order-section").innerHTML = order;
  render();

  if (totalPriceSum === 0) {
    document.getElementById("order-section").innerHTML = "";
    render();
  }

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
            <li class="item" id="item" data-item-uuid="${item.uuid}">${item.name}</li>
            <li class="ingredients" id="ingredients">${menuIngredients}</li>
            <li class="price" id="price">$${item.price}</li>
          </ul>
        </div>
      
        <svg data-item="${item.id}" class="plus-btn" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1{fill:#898989;}</style></defs><title>plus-other</title><path class="cls-1" d="M256,512C114.84,512,0,397.16,0,256S114.84,0,256,0,512,114.84,512,256,397.16,512,256,512Zm0-500.62C121.12,11.38,11.38,121.12,11.38,256S121.12,500.62,256,500.62,500.62,390.88,500.62,256,390.88,11.38,256,11.38Z"/><path class="cls-1" d="M347,261.69H165a5.69,5.69,0,0,1,0-11.38H347a5.69,5.69,0,0,1,0,11.38Z"/><path class="cls-1" d="M256,352.71a5.69,5.69,0,0,1-5.69-5.69V165a5.69,5.69,0,1,1,11.38,0V347A5.69,5.69,0,0,1,256,352.71Z"/></svg>
      
      </div>
      <img class="divider" src="images/divider.png" />
    
      `;
  });

  return menuItems;
}

/* function paymentThanks(event) {
  event.preventDefault();
  const payForm = new FormData(formPay);
  const fullName = payForm.get("name");

  document.getElementById("last-page").innerHTML = `
    <h2>Thanks>${fullName}</span> for buying with us! </h2>
  `;

  console.log("done");
} */

function render() {
  document.getElementById("main-menu").innerHTML = getMenuElement();
}

render();
