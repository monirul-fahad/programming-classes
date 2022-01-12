let myName: string = "Monirul Fahad";
let age: number;
age = 27;
let isHungry: boolean = true;

type StringOrNumber = number | string;

let studentId: StringOrNumber = 32545;
studentId = "we-1234";
studentId = 14234;

let person: object = {
  name: "monirul Islam",
  age: 12,
  hobby: "Football",
};

//object writing way (but not the best way)
type PersonType = { age: number; name: string; hobby: string };

let person1 = {
  name: "test name",
  age: 12,
  hobby: "reading",
};
let person2 = {
  name: "test name-2",
  age: 12,
  hobby: "reading",
};

//object writing way (best way and its called schema)
interface Person {
  name: string;
  age: number;
  hobby?: string;
}

let person3 = {
  name: "test name",
  age: 12,
  hobby: "reading",
};
let person4 = {
  name: "test name-2",
  age: 12,
};

//function
const greeting = (name: string): void => {
  console.log(`Hello ${name}`);
};
greeting("Fahad");
