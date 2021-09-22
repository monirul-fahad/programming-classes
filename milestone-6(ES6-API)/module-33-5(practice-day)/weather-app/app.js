const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const name = document.querySelector('.name')
const desc = document.querySelector('.desc')
const temp = document.querySelector('.temp')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=b456d7e405795f9e5fab94eee95c707b')
.then(res => res.json())
.then(data => {
    const nameValue = data['name']
    const tempValue = data['main']['temp'];
    const decsValue = data['weather'][0]['description'];
    name.innerHtml = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = decsValue;
})

.catch(err => alert('wrong city name'))
});

