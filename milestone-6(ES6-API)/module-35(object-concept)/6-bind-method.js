const rakib = {
    name: 'RK Rakib',
    id: 24,
    money: '5000',
    treatDe: function(expense){
       this.money =  this.money - expense;
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
}

// rakib.treatDe(100);

const heroTreatDe = rakib.treatDe.bind(heroBalam);
// heroTreatDe(500)

const niloyTeatDe = rakib.treatDe.bind(niloyBhai);
niloyTeatDe(1200)