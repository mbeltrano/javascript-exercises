//from Fahrenheit to Celsius
const convertToCelsius = function(temp) {

  if(isNaN(temp)) return "ERROR";
  return +(((temp - 32) *(5/9)).toFixed(1));


};
//from Celsius to Fahreneit
const convertToFahrenheit = function(temp) {
  
  if(isNaN(temp)) return "ERROR";
  return +(((temp * (9/5) + 32)).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
