function makeRed() {
    document.body.style.backgroundColor = "red";
  }
  //handle blue button click by settion function name
  const blueButton = document.getElementById("blueButton");

  //   just set the name of the function
  blueButton.onclick = makeBlue;

  function makeBlue() {
    document.body.style.backgroundColor = "blue";
  }

  //handle by using addevent listener 
  const golderodButton = document.getElementById('goldenrodButton');
  golderodButton.addEventListener('click',makeGoldenrod)
  function makeGoldenrod() {
      document.body.style.backgroundColor= 'goldenrod'
  }

  //addeventlistner
  const hotPinkButton = document.getElementById('hotPink');
  hotPinkButton.addEventListener('click', function(){
      document.body.style.backgroundColor = 'hotpink'
  })

//   single line add event listener
document.getElementById('lightBlue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue'
}) 