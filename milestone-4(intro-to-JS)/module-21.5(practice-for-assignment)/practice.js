// const number = 45;
// let string = 'Fahad';
// var boolean = false;


// function add(num1, num2, num3) {
//     sum = num1 + num2 + num3;
//     return sum;
// }
// // console.log(add(45, 50, 100))
// console.log(add (45, 78, 90))

// // math oparation 
// var num1 = 45;
// var num2 = 15;

// let total = num1 + num2;
// console.log(total)

// let sub = num1 - num2;
// console.log(sub)

// let multi = num1 * num2;
// console.log(multi)

// let divide = num1 / num2;
// console.log(divide)

// // comparison 
// var a = 34;
// var b = 40;

// if (a > b) {
//     console.log('a is bigger.')
// } else {
//     console.log('b is bigger')
// }

// // while 
// let firstNum = 7; 
// while (firstNum <= 19) {
//     if (firstNum % 2 == 1) {
//         console.log(firstNum)
//     }
//     firstNum++
// }

// // Array 
// var arr = ['Fahad', 'Niloy', 'Rakib', 'Joshim', 'Himu', 'Tarequl', 'Rahim' ]
// console.log(arr.length)
// console.log(arr)
// arr[3] = 'jammuu';
// console.log(arr)

// push
// var lastBench = ['Fahad', 'Niloy', 'Rakib', 'Joshim', 'Himu'];
// console.log(lastBench)
// lastBench.push('jaffor', 'nakib', 'baicchu')
// console.log(lastBench)
// //pop
// lastBench.pop();
// lastBench.pop();
// console.log(lastBench)

// for loop 
// const arr = ['Fahad', 'Niloy', 'Rakib', 'Joshim', 'Himu', 'Tarequl', 'Rahim' ]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }
// for (value of arr ) {
//     console.log(value)
// }

// 3 ta Element er gun 

// function multiply(numbers) {
//     let result = 1;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         result = result * element;
//     } return result;
// } 
// const numbers = [4, 6, 9]
// const answer = multiply(numbers);
// console.log(answer)

// 80 er cheye boro shongkha 

// const numbers = [100,78,54,69,80,85,99,38,95]
// function largestNumber(array) {
//     const largerThan80 = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element > 80) {
//             largerThan80.push(element)
//         }
//     }
//      return largerThan80;
// }
// console.log(largestNumber(numbers))

// find postive number from the array 

// function positiveNumbers(numbers){
//     const positiveNumber = [];
//     for(let value  of numbers){
//         if(value  >= 0){
//             positiveNumber.push(value);
//         } else {
//             continue;
//         }    
//     }
//     return positiveNumber; 
// }
// const numbers = [20, 49 ,-2, 56, 44];
// const positive = positiveNumbers(numbers);
// console.log(positive)


// object 
var cup = {
    name: 'Tea cup',
    color: 'Red',
    size: 'Large'
}
const cupColor = cup.color
// console.log(cupColor)

cup.color = 'Green';
console.log(cup)



// const numbers = [20, 49, -34, 56, 44]
// const p = [];
// for ( let value of numbers) {
//     if (value > 0) {
//         p.push(value)
//     } else {
//         break
//     }
// }
// console.log(p)

// function bestFriend(friendName){
// //friendName = ['Fahad', 'Niloy', 'Rakib', 'Joshim', 'Himu', 'Tarequl', 'Rahim' ]
// let largest = friendName[0];
// for (let i = 0; i < friendName.length; i++){
// if (friendName[i].length > largest.length) {
//     largest = friendName[i];
// } 
// }
// return largest;
// }

// const friends = ['Fahad', 'Niloy', 'Rakib', 'Joshim', 'Himu', 'Tarequl', 'Rahim' ]
// const largestName = bestFriend(friends);
// console.log(largestName);
