function x(n) {
    return n * y(n-1);
}
function y(n) {
    return n * z(n-1);
}
function z(n) {
    return n;
}

const value = x(3);
console.log(value)


// recursive 
function x(n){
    if (n == 1) {
        
    }
}