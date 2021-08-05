// leap year 

// function leapYear(year){
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var myYear = 2034;
// var isMyYearIsLeapYear = leapYear(myYear)
// console.log('Is My year is Leap year:- ', isMyYearIsLeapYear)



// even number 

// function isEven(number) {
//     if ( number % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var myNumber = 2342354;
// var isTheNumberEven = isEven(myNumber);
// console.log('Is The Number is even:- ', isTheNumberEven)



// evne and odd number using for loop and if - else 

// for (let i = 0; i < 50; i++) {
//     if (i % 2 == 0) {
//         console.log('even numbers:- ', i )
//     } else {
//         console.log('odd numbers:- ', i)
//     }
    
// }


// factorial 

// var fact = 1;
// var number = 9
// for (var i = 1; i <= number; i++) {
//     fact = fact * i;
// }

// console.log('factorial of 9 is:- ', fact)


function factorial(number) {
    var fact = 1;
    for (var i = 1; i <= number; i++) {
       
        fact = fact * i;
    }
    return fact;
}

var myNumber= 5;
var myFactorial = factorial(myNumber);
console.log("my number's factorial is:-",myFactorial)


function factorial2(number2) {
    var fact2 = 1;
    var i = 1;
    while (i <= number2) {
      
        fact2 = fact2 * i;
        i++;

    } return fact2;
}

console.log('factorial of 5:- ',factorial2(5))

function factorial (n) {
    if (n==1) {
        return 1;
    } else{
        return n * factorial(n-1)
    }
}

console.log('factorial of:- ', factorial(5))