const add = function(num1, num2) {
  if(!(typeof num1 === "number") || !(typeof num2 === "number")) return "ERROR";
	return num1 + num2;
};

const subtract = function(num1, num2) {
  if(!(typeof num1 === "number") || !(typeof num2 === "number")) return "ERROR";
	return num1 - num2;
};

const sum = function(array) {
  if(array.length === 0) return 0;
	return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
};

const multiply = function(array) {
  if(array.length === 0) return 0;
  return array.reduce(
    (accumulator, currentValue) => accumulator * currentValue);

};

const power = function(num1, num2) {
  if(!(typeof num1 === "number") || !(typeof num2 === "number")) return "ERROR";
	return num1 ** num2;
};

const factorial = function(num) {
  if(!(typeof num === "number")) return "ERROR";
  let result = 1;
  for(let i = 1; i <= num; i++){
    result *= i;
  }
  return result;


	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
