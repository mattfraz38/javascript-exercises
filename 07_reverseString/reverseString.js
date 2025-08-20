/* PEDAC
PROBLEM: GIVEN A STRING ARGUMENT, REVERSE IT
EXAMPLES: EXPECT "HELLO" TO EQUAL "OLLEH"
DATA STRUCTURES: STRINGS AND ARRAYS
ALGORITHM: 
1. GIVEN A STRING ARGUMENT, SPLIT IT INTO AN ARRAY OF CHARS
2. REVERSE THE ARRAY
3. JOIN THE REVERSED ARRAY AND RETURN THE RESULT
*/

const reverseString = function (str) {
  const strArr = str.split("")
  const reversedArr = strArr.reverse();
  return reversedArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
