const business = 1000;
const minister = 550;
const army = 600;

if (business > minister && business > army) {
    console.log('business person er pola boro.');
} else if (minister > business && minister > army){
    console.log('minister er pola boro.')
} else {
    console.log("army'r pola boro.")
}

var max = Math.max(business, minister, army)
console.log('max is', max)

// using function 
// largetst number
function findThesmallest(first, second, third, fourth) {
    if (first > second && first > third && first > fourth) {
        return 'first is smallest number'
    } else if(second > first && second > third && second > fourth) {
        return 'second is smallest number'
    } else if (third > first && third > second && third > fourth) {
return 'third is the smallest number'
    } else {
        return 'fourth is the smallest number'
    }
}

const smallest= findThesmallest(450, 780, 456, 487)
console.log ( smallest)

// smaleest 
/* function findThesmallest(first, second, third, fourth) {
    if (first > second && first > third && first > fourth) {
        return 'first is smallest number'
    } else if(second > first && second > third && second > fourth) {
        return 'second is smallest number'
    } else if (third > first && third > second && third > fourth) {
return 'third is the smallest number'
    } else {
        return 'fourth is the smallest number'
    }
}

const smallest= findThesmallest(450, 780, 456, 487)
console.log ( smallest) */