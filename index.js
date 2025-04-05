import { Calculator, fetchData, doubleNumbers } from './tools.js';

const calc = new Calculator();
console.log("Addition:", calc.add(5, 3));
console.log("Subtraction:", calc.subtract(10, 4));

fetchData().then(result => {
  console.log(result);
});

const nums = [1, 2, 3];
console.log("Doubled:", doubleNumbers(nums));
