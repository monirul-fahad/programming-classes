const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc')
const price = document.getElementById('price')

const free = document.getElementById('free');
const express = document.getElementById('express');

free.addEventListener('click', function(){
    
});
express.addEventListener('click', function(){

})


div1.addEventListener('click', function(){
    img.src = 'images/1.jpg';
    desc.innerText = 'First - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!';
    price.innerText = '750$'
})
div2.addEventListener('click', function(){
    img.src = 'images/2.jpg';
    desc.innerText = 'second - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!';
    price.innerText = '550$'
})
div3.addEventListener('click', function(){
    img.src = 'images/3.jpg';
    desc.innerText = 'third - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!';
    price.innerText = '850$'
})