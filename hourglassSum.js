function hourglassSum(arr) {
  // Write your code here

  let arraySums = [];

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length - 2; k++) {
      let high, middle, low;
      if (i + 2 < 6) {
        high = arr[i][k] + arr[i][k + 1] + arr[i][k + 2];
        middle = arr[i + 1][k + 1];
        low = arr[i + 2][k] + arr[i + 2][k + 1] + arr[i + 2][k + 2];
      }

      let sum = high + middle + low;

      if (!isNaN(sum)) {
        arraySums.push(sum);
      } else {
        i++;
      }
    }
  }
  arraySums.sort((a, b) => b - a);

  return arraySums[0];
}

let arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(arr));

// Sixteen hourglasses
// -63, -34, -9, 12,
// -10,   0, 28, 23,
// -27, -11, -2, 10,
//   9,  17, 25, 18

// The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:
