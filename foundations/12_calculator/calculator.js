const add = function(num1,num2) {
  if(isNaN(num1) || isNaN(num2)) return;
	return num1 + num2;
};

const subtract = function(num1,num2) {
    if(isNaN(num1) || isNaN(num2)) return;
    return num1 - num2;
	
};

const sum = function(array) {
  let result = 0;
   // if(isNaN(num1) || isNaN(num2)) return;
    for(let ar of array){
    result += ar;
  }
  return result;
	
};

const multiply = function(array) {
  let result = 1; 
  // if(isNaN(num1) || isNaN(num2)) return;
  for(let ar of array){
    result *= ar;
  }
  return result;

};

const power = function(num1,num2) {
    if(isNaN(num1) || isNaN(num2)) return;
return num1**num2;
	
};

const factorial = function(num1) {
      if(isNaN(num1)) return;
      let fact = 1;
    for (let i =1; i<=num1; i++){
      fact *=i;
    }
    return fact;
	
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
