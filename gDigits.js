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

  // If array is sorted return zero
  if (isSorted(arr)) return 0;

  // Swap values if array is unsorted
  let swapCount = 0;
  let sortedArray = [...arr];

  while (!isSorted(sortedArray)) {
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === 0 && sortedArray[i + 1] === 1) {
        let swapOne = sortedArray[i + 1];
        let swapZero = sortedArray[i];
        sortedArray.splice(i, 1, swapOne);
        sortedArray.splice(i + 1, 1, swapZero);
        swapCount++;
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

// console.log(minMoves(arrCaseOne));
// console.log(minMoves(arrCaseTwo));
// console.log(minMoves(arrCaseThr));
console.log(minMoves(edgeCase));
