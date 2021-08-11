const products = [
    {name: 'samsung s3 phone', price: 22000},
    {name: 'asus lapto d45', price: 42000},
    {name: 'apple smart watch', price: 8000},
    {name: 'bashundara paper', price: 100},
    {name: 'redmi k30 phone', price: 19000},
    {name: 'walton watch', price: 2500},
    {name: 'old land phone', price: 1000},
];
// break 
for (const product of products) {
    if (product.price < 10000) {
        break;
    }
    console.log(product)
}

// continue 
for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product)
}
