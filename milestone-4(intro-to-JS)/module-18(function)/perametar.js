function bringSingara(taka) {
    console.log('Singara er jonno dise ',taka)
    var singaraPrice = 10;
    var singaraPabo = taka / singaraPrice
    return(singaraPabo)
}

var money = 250;
var singara = bringSingara(money)

console.log('Ai nen apnar '+ singara + 'ta singara.');