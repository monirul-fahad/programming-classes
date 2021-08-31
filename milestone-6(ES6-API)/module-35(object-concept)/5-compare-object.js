const first = {a:1, b:2};
const second = {b:2, a:1};
const third = first;

// if (first === second) {
//     console.log('objects are equel')
// } else {
//     console.log('objects are different')
// };

// if (first === third) {
//     console.log('objects are equel')
// } else {
//     console.log('objects are different')
// };

//object comapre !!very very important 

function compareObjects(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first, second);
console.log(isEqual);