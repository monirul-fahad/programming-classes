const products = [
    {name: 'laptop', price: 43000},
    {name: 'shirt', price: 500},
    {name: 'Watch', price: 350},
    {name: 'Phone', price: 50000},
    {name: 'Light', price: 800},
];

let totalPrice = 0;
for (const product of products){
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice)

const cart = [
    {name: 'laptop', price: 43000, quantity: 1 },
    {name: 'shirt', price: 500, quantity: 4 },
    {name: 'Watch', price: 350, quantity: 2 },
    {name: 'Phone', price: 50000, quantity: 1 },
    {name: 'Light', price: 800, quantity: 6 }
];
let cartTotal = 0;
for (const product of cart) {
   const productTotal = product.price * product.quantity;
   cartTotal = cartTotal + productTotal;
}

console.log(cartTotal)