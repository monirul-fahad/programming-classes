const bottle = {color: 'yellow', hold: 'water', price: 400, iscleaned: true}

//getting all properties name
const keys = Object.keys(bottle)
// console.log(keys)

//getting all values
const values = Object.values(bottle)
// console.log(values)

//getting entities pair
const pairs = Object.entries(bottle)
// console.log(pairs)

//we can seal object. that means delete option can't delete anythig from the object after sealing it. EX:
Object.seal(bottle)
//delete any property and value
delete bottle.iscleaned;
console.log(bottle);