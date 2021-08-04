// const  number = 4;
// const reminder = number % 2;
// console.log(reminder == 0)
// console.log(reminder % 2 == 0)

// is even number 

function isEven(number) {
    if (number % 2 == 0 ) {
        return true;
    }
    return false;
}

const myNumber = 145;
const isMyNumberEven = isEven(myNumber);
console.log('is My Number even: ', isMyNumberEven);

const herNumber = 1423434556;
const isHerNumberEven = isEven(herNumber);
console.log('is Her Number even: ', isHerNumberEven);

// is odd number 

function isOdd(number) {
    if(number % 2 != 0) {
        return true;
    }
    return false;
}

const myNumber1 = 342354621;
const isMyNumberOdd = isOdd(myNumber1);
console.log(' Is My Number odd: ', isMyNumberOdd)

const herNumber2 = 347598345727424;
const isHerNumberOdd = isOdd(herNumber2);
console.log('Is My Number odd: ', isHerNumberOdd )
