/* PEDAC
PROBLEM: GIVEN A NUMBER ARGUMENT DETERMINE IF IT IS A LEAP YEAR
EXAMPLES: 1600 -> FALSE, 2028 -> TRUE
DATA STRUCTURES: NUMBERS, BOOLEANS
ALGORITHM:
Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
1. GIVEN A NUMBER ARGUMENT, CHECK IF IT IS A CENTURY NUMBER
2. IF TRUE AND IF DIVISIBLE BY 100 RETURN FALSE, IF YES AND IF DIVISIBLE BY 400 RETURN TRUE
3. IF NOT A CENTURY NUMBER AND IF DIVISIBLE BY 4, RETURN TRUE */
const leapYears = function (year) {

  if (year % 100 === 0) {
    return year % 400 === 0;
  }

  return year % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
