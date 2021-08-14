// // h2 color 
// const allh2 = document.getElementsByTagName('h3');
// for (var i = 0; i < allh2.length; i++) {
//     allh2[i].style.color = 'lightblue';
// }


// // backpack section background color 
// document.getElementById('backpack').style.backgroundColor = 'tomato'


// // card class border radius 30px
// const cards = document.getElementsByClassName('card')
// for (const card of cards) {
//     card.style.borderRadius = "30px"
// }

// //function and event click listener
// document.getElementById('test-event').addEventListener('click', function(){
//     console.log('supply-350 clicked to buy.')
// })

// //remove buy now button form website with add event listener
// const buyButtons = document.getElementsByClassName('buy-now-button');
// for (const button of buyButtons) {
//     button.addEventListener('click', function(){
//         button.remove()
//     })
// };

//disble submit button and active it when someone wright "email" on input box
document.getElementById('email-confirm').addEventListener('keyup', function(event){
    const submitBtn = document.getElementById('submit-button');
    if (event.target.value == 'email') {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", true);
    }
    const deletefield = document.getElementById("email-confirm");
      console.log(deletefield.value);
});
//change 
document.getElementById('email-confirm').addEventListener('change', function(event){
    const submitBtn = document.getElementById('submit-button');
    if (event.target.value == 'email') {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", true);
    }
    const deletefield = document.getElementById("email-confirm");
      console.log(deletefield.value);
});