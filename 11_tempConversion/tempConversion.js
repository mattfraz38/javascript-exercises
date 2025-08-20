/* PEDAC
PROBLEM: GIVEN A NUMBER ARGUMENT IN FAHRENHEIT OR CELSIUS CONVERT THE TEMP TO THE OTHER MEASUREMENT -> TWO SEPARATE FUNCTIONS
EXAMPLES: convertToCelsius(32) // fahrenheit to celsius, should return 0
          convertToFahrenheit(0) // celsius to fahrenheit, should return 32 
DATA STRUCTURES: NUMBERS
ALGORITHM:
1. °F = (°C × 9/5) + 32
2. °C = (°F − 32) × 5/9
*/

const convertToCelsius = function (fahrenheit) {
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(1))
};

const convertToFahrenheit = function (celsius) {
  return Number(((celsius * (9 / 5)) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
