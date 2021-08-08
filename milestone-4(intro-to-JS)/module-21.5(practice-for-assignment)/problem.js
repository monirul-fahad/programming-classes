
// inch to feet 
function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}

const myFeet = 12;
const feet = feetToInch(myFeet);
console.log(feet)


// centimeter to feet 
function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;
    return meter;
}

const myCentimeter = 400;
console.log(centimeterToMeter(myCentimeter))



// paper requeres 
function paperRequirements(firstBook, secondBook, thirdBook) {
    const totalPages = (firstBook * 100)+(secondBook * 200)+(thirdBook * 300)
//   const firstBookPages = firstBook * 100 ;
//   const secondBookPages = secondBook * 200;
//   const thirdBookPages = thirdBook * 300;
  
//   const totalPages = firstBookPages + secondBookPages + thirdBookPages;
  return totalPages;
}

console.log(paperRequirements(3,3,2))





// largest name 
function bestFriend(friendName){
//friendName = ['Fahad', 'Niloy', 'Rakib', 'Joshim', 'Himu', 'Tarequl', 'Rahim' ]
let largest = friendName[0];
for (let i = 0; i < friendName.length; i++){
if (friendName[i].length > largest.length) {
    largest = friendName[i];
        } 
    } return largest;
}
const friends = ['Fahad', 'Niloy', 'Rakib', 'Joshim', 'Himu', 'Tarequl', 'Rahim' ]
const largestName = bestFriend(friends);
console.log(largestName);



//output  positve value 
const array = [34, 25, -9, 45, 67]
const positiveValues = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > 0) {
        positiveValues.push(element)
    } else {
        break;
    }
}
console.log(positiveValues)
