const name = 'Monirul Islam';
const name2 = 'Fahad';

const fullName = `My name is ${name} ${name2}.`
// console.log(fullName)

const fish = {id: 45, name: 'Pangash', price: '450'};
const sentence = `My fav fish is ${fish.name}. It's not huge price. it's price is only ${fish.price}`;
// console.log(sentence)

const divide = num => num/5;
// console.log(divide(50))

const math = (num1, num2) =>  (num1+2) * (num2+2);
// console.log(math(5,6));


const multiply = (num3, num4, num5) =>  num3 * num4 * num5;
// console.log(multiply(2, 4, 6));

const math2 = (num6, num7) => {
    const fristNum = num6 + 2;
    const secondNum = num7 + 2;
    const total = fristNum * secondNum;
    return total
}
let output = math2(18, 8)
// console.log(output)

const arr = [1, 2, 3, 5, 7, 8, 4, 6]

const anotherArr = arr.map(num => num * 5)
// console.log(anotherArr);

const nums = [1,2,3,4,5,6,7,8,9]; 
const output2 = nums.filter(n => n % 2);
// console.log(output2);

const mobiles = [
    {name: 'Xiaomi', model:'Xi2', price: 7000},
    {name: 'Samsang', model:'S20', price: 8000},
    {name: 'Walton', model:'W50', price: 5000},
    {name: 'Iphone', model:'13', price: 9000},
]

const cheepPhone = mobiles.find(mobile => mobile.price == 5000);
// console.log(cheepPhone)

const  threeFac = (nub1, nub2, nub3 = 7) => {
 const result = nub1 + nub2 + nub3;
 return result;
}

console.log(threeFac(5 , 8));
