// /three type string wrigthing way 
const myName = 'Monirul Fahad'; //single qoute.
const myName2 = "Monirul Fahad"; //souble qoute.
const myName3 = `Monirul Fahad`; //backtick.

const multiLine = `This is the first line.
This is the second line.
This is the third line.
This is the fourth line.`
console.log(multiLine)


const count = 5;
const old = '<h3 class="friend-name"> Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name"> Friend-${count}</h3>`