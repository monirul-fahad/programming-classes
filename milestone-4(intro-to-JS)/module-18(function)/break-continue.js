var i = 0;
while(i < 15) {
    console.log(i);
    if(i==5){
        break;
    }
    i++;
}

var number = [34, 56, 75, 90, 92, 140, 43, 56]

for (var i = 0; i < number.length; i++){
    var numbers = number[i];
    if(number> 90){
        continue;
    }
    console.log(numbers)
}