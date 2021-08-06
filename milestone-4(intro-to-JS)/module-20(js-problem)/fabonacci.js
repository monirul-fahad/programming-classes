// fabonacci in Math 

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
const fibo = [0,1];
for (let i = 2; i<=10; i++){
//   nth = (n - 1)nth + (n-2)th
fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo)