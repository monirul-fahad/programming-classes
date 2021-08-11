let products = [
    {productName: 'samsung s3 phone', productID: 01, stock: 200},
    {productName: 'asus lapto d45', productID: 02, stock: 600},
    {productName: 'apple smart watch', productID: 03, stock: 800},
    {productName: 'bashundara paper', productID: 04, stock: 300},
    {productName: 'redmi k30 phone', productID: 05, stock: 150},
    {productName: 'walton watch',  productID: 06, stock: 280},
    {productName: 'old land phone', productID: 07, stock: 70},
];

//এখন তোমার কাজ হচ্ছে তুমি একটা ফাংশন লিখবা যেই ফাংশনের কাজ হচ্ছে সে ইনপুট আকারে প্রোডাক্টের নাম দিবে এবং সে ঐ object থেকে যে প্রোডাক্টের নাম ইনপুট হিসেবে নিয়েছে তরসব ইনফরমেশন  Array আকারে রিটার্ন করবে। 

function product(productName){
   const  searchedProduct = [];
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        for(let value in element){
            if (value == "productName" && element[value] == productName) {
                searchedProduct.push(element);
            }
        }
    }
    return searchedProduct;

}

console.log(product("walton watch"))
