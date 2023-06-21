import { menuArray  } from "/data.js"


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

menuArray.forEach(function(price) {
    let priceType = typeof price.price
    
    console.log(price.price, priceType)
 
    
})


