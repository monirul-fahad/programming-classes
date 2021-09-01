//Task one------
const FahadMolla ={
    name: 'Fahad',
    age: 23,
    isMarried: false,
    address: {
        union: 'Rampur',
        upozila: 'Companigonj',
        district: 'Noakhali',
        state: 'Chottogram'
    },
    friend: ['Rakib', 'Sakib', 'Zakib', 'Mukib', 'Hikib'],
    fullDetails: function () {
        console.log(this.name, 'is', this.age, 'years old. He lives in', this.address.union+', '+ this.address.upozila+', '+ this.address.district+'.', 'His friends are', this.friend[0]+', '+ this.friend[3]+', '+ this.friend[4]+'.')
    }
}
// FahadMolla.fullDetails()

//Task two---

const detailsAgain = `
${FahadMolla.name} is a very good boy. He is just ${FahadMolla.age} years old. He lives in ${FahadMolla.address.union} Union. Which is under ${FahadMolla.address.upozila} Upozila, District ${FahadMolla.address.district}, ${FahadMolla.address.state} State.
`;
// console.log(detailsAgain)

// tast-3 ---
const zero = () => {return(89)};
// console.log(zero())



//tast-4 ----
const add = (num1, num2) => {return((num1 + num2) / 2)};
// console.log(add(7,5));

// task-5 ---
const result = (num3, num4) => {
    const a = num3+7;
    const b = num4+7;
    const total = a + b;
    return total;
};
console.log(result(13, 34));

