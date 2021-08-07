const phones = [
    {name: 'Samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'Walton m32', price: 15000, camera: 8, storage: 16},
    {name: 'Xiaomi mi 11', price: 65000, camera: 10, storage: 32},
    {name: 'Oppo F1', price: 28000, camera: 6, storage: 32},
    {name: 'Vivo S1', price: 30000, camera: 9, storage: 64},
    {name: 'Nokia n5', price: 8000, camera: 10, storage: 32}
];

let cheapest = phones[0];
for (const phone of phones) {
    // compare phone price only 
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
    
}
console.log(cheapest)