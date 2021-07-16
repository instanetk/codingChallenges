/*
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minMoves(arr) {
  // Write your code here

  //   let modelArray = arr.sort();

  let sortedArray = [];
  let moves = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i + 1] !== undefined) {
      sortedArray.push(arr[i + 1]);
      sortedArray.push(arr[i]);
      //   i++;
      //   moves++;
    } else {
      sortedArray.push(arr[i]);
      moves++;
    }
  }
  //   console.log('model', modelArray);
  console.log('sorted', sortedArray);
  console.log(moves);
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

minMoves(arrCaseOne);
minMoves(arrCaseTwo);
minMoves(arrCaseThr);
