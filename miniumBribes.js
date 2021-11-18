function minimumBribes(q) {
  // Write your code here

  let skip = 0;
  for (let i = 0; i < q.length; i++) {
    console.log(q[i], i, skip);
    if (q[i] > i + 1) {
      skip = q[i] - (i + 1);
      console.log(i);
    }
  }

  if (skip <= 2) {
    return skip;
  } else {
    console.log('skip', skip);
    return 'Too chaotic';
  }
}

// let q = [4, 1, 2, 3];
// let q = [1, 2, 3, 5, 4, 6, 7, 8];
let q = [2, 5, 1, 3, 4];

console.log(minimumBribes(q));
