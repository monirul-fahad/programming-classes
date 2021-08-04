// let factorial = 1;
// for (let i = 1; i <= 6; i++) {
//     factorial = factorial * i; 
// }

// console.log('factorial of 6 = ', factorial);

function getFactorial (number ){
 let factorial = 1; 
 for (let i = 1; i<= number; i++){
    factorial = factorial * i;
 }
 return factorial;
}

var firstFactorial = getFactorial (7);
console.log('factorial number of 7 is: ', firstFactorial )

var secondFactorial = getFactorial(9);
console.log('Factorial Number of 9 is: ', secondFactorial)