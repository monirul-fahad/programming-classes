// function getFactorial (number) {
//     let factorial = 1;
//     let i = 1;
//     while(i <= number){
//         factorial = factorial * i
//         i++;
//     }
//     return factorial;
// }

// var firstFactorial = getFactorial (6);
// console.log('factorial number of 6 is: ', firstFactorial )

// decrementig 

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while(i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
// var firstFactorial = getFactorial (6);
// console.log('factorial number of 6 is: ', firstFactorial )

// for loop reverse 

function getFactorial2(number){
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i ;
    }
    return factorial;
}
var firstFactorial = getFactorial2 (6);
console.log('factorial number of 6 is: ', firstFactorial )