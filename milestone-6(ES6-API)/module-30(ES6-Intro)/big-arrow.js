// arrow function 
const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(30, 2, 5);

//single parameter arrow function
const fiveTimes = num => num * 5;
const output = fiveTimes(15);

//arrow function without any parameter
const getName = () => 'Monirul Fahad';
const name = getName();

console.log(name)

//multiline funtion 
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const value = doMath(12, 5)
console.log(value);

