function resul(mark) {
    if (mark > 100) {
        return undefined
    } else if (mark >= 80) {
        return 'A+';
    } else if (mark >= 70) {
        return 'A';
    } else if (mark >= 60) {
        return 'A-';
    } else if (mark >= 50) {
        return 'B+';
    } else if (mark >= 45) {
        return 'B';
    } else if (mark >= 40) {
        return 'c+';
    } else if (mark >= 33) {
        return 'c';
    } else if (mark < -1) {
        return undefined
    }
    else{
        return 'fail' ;
    }
}

console.log('studet-1 result is: ',resul(95))
console.log('studet-2 result is: ',resul(61))
console.log('studet-3 result is: ',resul(40))
console.log('studet-4 result is: ',resul(90))
console.log('studet-5 result is: ',resul(17))
console.log('studet-6 result is: ',resul(33))
console.log('studet-7 result is: ',resul(49))
console.log('studet-9 result is: ',resul(110))
console.log('studet-8 result is: ',resul(-40))
