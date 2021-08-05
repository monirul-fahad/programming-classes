function celciousToFarenhiet(celcious) {
    var farenhiet = parseInt((celcious * 9/5) + 32);
    return farenhiet;
}

console.log(celciousToFarenhiet(74))

// farehiet to celcious 

function farenhietToCelcious(farenhiet) {
    var celcious = ((farenhiet - 32) * 5/9);
    return celcious;
}

console.log(farenhietToCelcious(98));
console.log(farenhietToCelcious(74));

