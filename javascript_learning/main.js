"use strict";

console.log();
/*
javascript caluculation
*/

// console.log(1.2e4); // 1.2 * 10 ** 4
// console.log(1.2e-4); // 1.2 * 10 ** -4
// console.log(2 + 5 * 2);

const price = 150;
let rate = 1.1;
let person = {
  name: "Shuto",
  age: "18",
};
let selectedColor = ["red", "blue"];
selectedColor[2] = 1;
// console.log(selectedColor.length);
// Dot Notation
person.name = "Hidetaka";
// Bracket Notation
person["name"] = "Mary";
// console.log(person);
// console.log(price * 120 * rate);
// console.log(price * 130 * rate);
// console.log(price * 140 * rate);

/*
dynamic language  you can change type of value 
static language you can't do it
*/

function greet(name, lastName) {
  // get a parameter
  console.log("Holy Moly " + name + lastName);
}

function square(number) {
  console.log(number * number);
}
square(2);
greet("Shuto", "Ando"); //argument
