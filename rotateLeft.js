function rotLeft(a, d) {
  // Write your code here

  for (let i = 0; i < d; i++) {
    let shift = a.shift(i);
    a.push(shift);
  }
  console.log(a);
  return a;
}

let arr = [1, 2, 3, 4, 5];

rotLeft(arr, 2);
