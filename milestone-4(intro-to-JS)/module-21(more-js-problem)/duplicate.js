const names = ['abul', 'babul', 'cabu', 'nobul', 'ebul', 'babul', 'habul', 'cabu', 'gabul', 'abul', 'habul', 'dabul', 'nobul' ];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(names)
    // }
    for ( const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push (element)
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names)
console.log(uniqueNames)

const number = [4,5,9,89,56,75,89,4,25,15,36,5,99,9,8,7,87]

function removeDuplicateNumber(number) {
    const uniqueNumber = [];
    for ( const element of number) {
        if (uniqueNumber.indexOf(element) == -1) {
            uniqueNumber.push(element)
        }
    } return uniqueNumber;
}

console.log(removeDuplicateNumber(number))