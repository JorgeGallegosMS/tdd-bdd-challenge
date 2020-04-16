// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return w + w + h + h
}

const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

let shoppingCart = []

const createItem = (name, price) => {
  // Should return a JSON object
  return { name, price, quantity: 1 }
}

const addItemToShoppingCart = item => {
  shoppingCart.push(item)
  console.log('Shopping cart: ')
  console.log(shoppingCart)
}

const removeItemFromShoppingCart = () => shoppingCart.pop()

module.exports = { 
  sayHello, area, perimeter, circleArea,
  createItem, addItemToShoppingCart, shoppingCart, removeItemFromShoppingCart
}
