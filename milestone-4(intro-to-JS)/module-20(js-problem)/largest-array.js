function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }

        
    } return largest
}

const ages = [41, 85, 78, 15, 45, 20, 9];
const oldest =  largestElement(ages)
const oldest2 =  largestElement([-4, -5, -47, -1, -8])
console.log(oldest2)