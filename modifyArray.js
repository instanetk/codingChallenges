/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  let result = [];
  nums.forEach((num) => {
    if (num % 2 === 0) {
      result.push(num * 2);
    } else {
      result.push(num * 3);
    }
  });
  return result;
}

let array = [1, 2, 3, 4, 5];

console.log(modifyArray(array));
