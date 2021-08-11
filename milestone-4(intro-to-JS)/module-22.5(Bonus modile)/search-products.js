const products = [
    {name: 'samsung s3 phone', price: 22000},
    {name: 'asus lapto d45', price: 42000},
    {name: 'apple smart watch', price: 8000},
    {name: 'bashundara paper', price: 100},
    {name: 'redmi k30 phone', price: 19000},
    {name: 'walton watch', price: 2500},
    {name: 'old land phone', price: 1000},
]

function searchProducts(products, searchText){
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1){
            matched.push(product);
        }
    }
    return matched;
}

const macthed = searchProducts(products, 'phone');
console.log(macthed)