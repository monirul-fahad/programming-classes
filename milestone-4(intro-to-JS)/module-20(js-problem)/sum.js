const arr = [44,78,56,25,12,47,89,36,47,58,52]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
   const element =  arr[i];
    // console.log(element);
    sum = sum + element;
}
// console.log(sum)

function arraySum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
    const element =  number[i];
        sum = sum + element;
    } return sum;
}
const total = arraySum ([30,30,40])
console.log(total)