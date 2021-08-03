var computer = {
    price: 29000,
    storage: '256gb',
    color: 'silver',
    processor: 'intel core i7'
};
// console.log(computer);
console.log(computer.processor)

var storageProperty = 'storage';
computer[storageProperty] = '512gb';

computer['storage'] = '1tb'

computer.storage = '2tb'

console.log(computer)


