/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // Write your code here
  let valleys = 0;
  let level = 0;

  let arr = path.split('');

  arr.forEach((step) => {
    if (step === 'U') {
      level++;
    } else {
      level--;
    }
    if (step === 'U' && level === 0) {
      valleys++;
    }
  });

  return valleys;
}

let hike = 'UDDDUDUU';
let case1 = 'DDUUDDUDUUUD'; //12
let caseC = 'DDUUDDDUDUUDUDDDUUDDUDDDUDDDUDUUDDUUDDDUDDDUDDDUUUDUDDDUDUDUDUUDDUDUDUDUDUUUUDDUDDUUDUUDUUDUUUUUUUUU';

// console.log(countingValleys(8, hike));
// console.log(countingValleys(12, case1)); // 2
console.log(countingValleys(100, caseC)); // 2
