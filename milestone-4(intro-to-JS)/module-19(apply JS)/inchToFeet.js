var myInches = 132;
var myFeet = myInches / 12;
 console.log(myFeet)

// inches to feet 

 function inchToFeet(inches){
     var feet = inches / 12;
     return feet;
 }

 var myInches = 120;
var feet = inchToFeet(myInches);
 console.log('my inches in feet = ', feet )

 var nanaInches = inchToFeet(160);
 console.log('nana inches in feet = ', nanaInches)

//  mile to kelometer 
function mmileToKM(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mmileToKM(26.2);
console.log('marthon in Km: ', marathon)