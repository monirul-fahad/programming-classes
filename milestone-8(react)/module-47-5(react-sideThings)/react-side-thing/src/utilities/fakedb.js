//use local storage as your db for now
const addToDb = (id) => {
  const exists = localStorage.getItem("shopping_cart");
  let shopping_cart = {};

  if (!exists) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shopping_cart));
};

export { addToDb };
