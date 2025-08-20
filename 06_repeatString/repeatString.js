/* PEDAC
PROBLEM: GIVEN A FUNCTION WITH TWO PARAMATERS
         RETURN THE FIRST (STRING) ARGUMENT REPEATED N NUMBER OF TIMES (SECOND PARAM)
EXAMPLES: repeatString("hey", 3); ==> "heyheyhey"
DATA STRUCTURES: STRINGS
ALGORITHM:
1. CREATE A LOOP THAT LOOPS THE SECOND ARGUMENT NUMBER OF TIMES
2. FOR EACH LOOP CONCATONATE THE FIRST STRING ARGUMENT TO ITSELF (STRINGS ARE IMMUTABLE)
3. RETURN THE RESULT
 */
const repeatString = function (str, num) {
  let result = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      result += str;
    }
    return result;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
