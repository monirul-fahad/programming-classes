const rakib = {
    name: 'RK Rakib',
    id: 24,
    money: '5000',
    treatDe: function(expense, boksish, tax){
       this.money =  this.money - expense - boksish - tax;
       console.log(this)
       return this.money;
    }
}

const heroBalam = {
    name: 'Hero Balam',
    id: 25,
    money: '9000',
}

const niloyBhai = {
    name: 'Motaher Niloy',
    id: 26,
    money: '13000',
};

//call
// rakib.treatDe.call(heroBalam, 500, 50, 44);
// rakib.treatDe.call(heroBalam, 500, 30, 44);
// rakib.treatDe.call(niloyBhai, 2000, 100, 65);

// apply 
rakib.treatDe.apply(niloyBhai, [2000, 100, 65])