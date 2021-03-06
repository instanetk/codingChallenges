/*
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minMoves(arr) {
  // Write your code here

  // Check if array is already sorted
  const isSorted = (arr) => {
    if (arr.length === 0) return;
    let orderCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1] && arr[i + 1] !== undefined) orderCount++;
    }
    if (orderCount <= 1) {
      return true;
    } else {
      return false;
    }
  };

  if (isSorted(arr)) return 0;

  // Swap values if array is unsorted
  let swapCount = 0;
  let sortedArray = [...arr];

  while (!isSorted(sortedArray)) {
    let firstZeroIndex = sortedArray.indexOf(0);
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === 0 && sortedArray[i + 1] === 1) {
        let swapOne = sortedArray[i + 1];
        let swapZero = sortedArray[i];
        sortedArray.splice(i, 1, swapOne);
        sortedArray.splice(i + 1, 1, swapZero);
        swapCount++;
        console.log('FIRST');
      } else if (sortedArray[i] === 1 && firstZeroIndex !== -1) {
        let swapOne = sortedArray[i];
        let swapZero = sortedArray[firstZeroIndex];
        sortedArray.splice(firstZeroIndex, 1, swapOne);
        sortedArray.splice(i, 1, swapZero);
        swapCount++;
        console.log('ELSE');
      }
    }
  }

  return swapCount;
}

let arrCaseOne = [1, 1, 1, 1, 0, 0, 0, 0]; // 0

let arrCaseTwo = [1, 1, 1, 1, 0, 1, 0, 1]; // 3
//  [1, 1, 1, 1, 0, 1, 0, 1]
//  [1, 1, 1, 1, 1, 0, 0, 1]  // 1
//  [1, 1, 1, 1, 1, 0, 1, 0]  // 2
//  [1, 1, 1, 1, 1, 1, 0, 0]  // 3

let arrCaseThr = [1, 0, 1, 0, 0, 0, 0, 1]; // 6
//  [1, 0, 1, 0, 0, 0, 0, 1]
//  [1, 1, 0, 0, 0, 0, 0, 1]  // 1
//  [1, 1, 0, 0, 0, 0, 1, 0]  // 2
//  [1, 1, 0, 0, 0, 1, 0, 0]  // 3
//  [1, 1, 0, 0, 1, 0, 0, 0]  // 4
//  [1, 1, 0, 1, 0, 0, 0, 0]  // 5
//  [1, 1, 1, 0, 0, 0, 0, 0]  // 6

let edgeCase = [1, 0, 0, 1, 0, 1, 1, 0, 0, 1];
// [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
// [1, 0, 1, 0, 0, 1, 1, 0, 0, 1] // 1
// [1, 1, 0, 0, 0, 1, 1, 0, 0, 1] // 2
// [1, 1, 0, 0, 1, 0, 1, 0, 0, 1] // 3
// [1, 1, 0, 1, 0, 0, 1, 0, 0, 1] // 4
// [1, 1, 1, 0, 0, 0, 1, 0, 0, 1] // 5
// [1, 1, 1, 0, 0, 1, 0, 0, 0, 1] // 6
// [1, 1, 1, 0, 1, 0, 0, 0, 0, 1] // 7
// [1, 1, 1, 1, 0, 0, 0, 0, 0, 1] // 8
// [1, 1, 1, 1, 1, 0, 0, 0, 0, 0] // 9

// console.log(minMoves(arrCaseOne));
// console.log(minMoves(arrCaseTwo));
// console.log(minMoves(arrCaseThr));
console.log(minMoves(edgeCase));
