// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let positive = A.filter((int) => int > 0).sort((a, b) => a - b);

  let unique = [...new Set(positive)];

  if (unique.length !== 0) {
    for (let i = 0; i < unique.length; i++) {
      let compare = unique[i] + 1;
      //   console.log(compare);
      if (unique[i + 1] !== compare) {
        return compare;
      }
    }
  } else {
    return 1;
  }
}

let test = [1, 3, 6, 4, 1, 2];
let neg = [-1, -2, -3];

// console.log(solution(test));
console.log(solution(neg));
