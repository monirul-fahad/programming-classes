const student = {
    name: 'Rakib',
    id: 24,
    major: 'mathmetics',
    subjects: ['english', 'econimics', 'bangal'],
    bestfriend: {
        name: 'Sakib',
        id: 54,
        major: 'mathmatics'
    },
    isRich: false,
    money: 5000,
    takeExam: function(){
        console.log(this.name,'taking exam')
    },
    treatDe: function(expense, bokshish){
       this.money =  this.money - (expense + bokshish);
       return this.money;
    }
}

student.takeExam()
const remaining1 = student.treatDe(865, 35);
const remaining2 = student.treatDe(442, 20);
console.log(remaining1)
console.log(remaining2)