/* PEDAC
PROBLEM: GIVEN TWO NUMBER ARGUMENTS, CALCULATE AND RETURN THE SUM OF ALL NUMBERS 
         BETWEEN THE TWO INCLUSIVELY
EXAMPLES: 1, 4 -> 1 + 2 + 3 + 4 = 10
DATA STRUCTURES: NUMBERS - LOOPS
ALGORITHM: 
1. CREATE A LOOP THAT LAST AS LONG AS THE SECOND PARAMETER WITH AN INITIAL STARTING POINT OF THE FIRST PARAMETER
2. INITIALIZE A NEW TOTAL VARIABLE TO ZERO
3. FOR EACH LOOP ADD THE CURRENT COUNTER TO THE TOTAL VARIABLE
4. RETURN TOTAL
*/
const sumAll = function (start, end) {
  let total = 0;

  if (start < 0 ||
    end < 0 ||
    !Number(start) ||
    !Number(end) ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)) {
    return "ERROR"
  }

  if (start > end) {
    [start, end] = [end, start]
  }

  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
