/* PEDAC
PROBLEM: GIVEN AN ARRAY (FIRST ARG), AND N NUMBER OR OTHER NUMBER ARGUMENTS
         RETURN THE ARRAY (ORIGINAL OR COPY OK) WITH THE OTHER NUMBERS ARGS REMOVED
EXAMPLES: [1, 1, 2, 3, 4, 4, 5], 1, 4 -> [2, 3, 5]
DATA STRUCTURES: ARRAY
ALGORITHM:
1. LOOP THROUGH THE ARR ARG
2. IF IT INCLUDES THE N OTHER ARGS, REMOVE THEM
3. RETURN THE ARRAY
*/

const removeFromArray = function (arr, ...nums) {
  const result = arr;

  for (let i = 0; i < nums.length; i++) {
    if (result.includes(nums[i])) {
      let idx = result.indexOf(nums[i]);
      while (result.includes(nums[i])) {
        result.splice(idx, 1);
        idx = result.indexOf(nums[i])
      }
    }
  }

  return result
};

// Do not edit below this line
module.exports = removeFromArray;
