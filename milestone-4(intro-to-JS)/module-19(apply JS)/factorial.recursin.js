// factorial in math 
/*
1! = 1
2! = 2 X 1
3! = 3 X 2 X 1
4! = 4 X 3 X 2 X 1
5! = 5 X 4 X 3 X 2 X 1
6! = 6 X 5 X 4 X 3 X 2 X 1
7! = 7 X 6 X 5 X 4 X 3 X 2 X 

n! = n X (n-1)!
*/

function factorialRecursive(n){
    if(n==1){
        return 1;
    }
    return n * factorialRecursive(n-1);
}

const myFactorial = factorialRecursive(5)
console.log(myFactorial);