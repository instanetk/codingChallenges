function reverseArray(arr) {
  // Write your code here
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // reversed.push(arr[i]);
    console.log(i);
  }
  console.log(reversed);
  return reversed;
}

let arr = [1, 3, 2, 4, 5];

console.log(reverseArray(arr));
