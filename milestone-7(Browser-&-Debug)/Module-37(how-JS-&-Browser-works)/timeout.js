function doSomething() {
    console.log('I am doing something')
}
console.log('first: I am the first')
console.log('second: I am the second')
// setTimeout(doSomething, 5000)
setTimeout(function(){
    console.log('again doing js')
}, 5000);
setTimeout(() => {
    console.log('I am using VS code')
}, 4000)
console.log('Third: I am the Third')
console.log('fourth: I am the fourth')
console.log('fifth: I am the fifth')
console.log('Sixth: I am the Sixth')